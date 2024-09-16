import { Port, Protocol } from "aws-cdk-lib/aws-ec2";
import { Address } from "../networking/address";
import { collate } from "../util";

/**
 * Used to configure on-instance firewall rules (e.g. iptables, firewalld)
 */
export interface IFirewallRules {
  /**
   * Declare an inbound rule.
   *
   * Only the following protocols are allowed: TCP, UDP, ICMP, and ICMPv6. The
   * address can be a single address or a range of addresses in CIDR notation.
   *
   * @param port - The ingress port
   * @param address - The source address
   * @returns provides a fluent interface
   */
  inbound(port: Port, address: Address): this;

  /**
   * Declare an inbound rule that covers all IPv4 addresses.
   *
   * Only the following protocols are allowed: TCP, UDP, ICMP, and ICMPv6.
   *
   * @param port - The ingress port
   * @returns provides a fluent interface
   */
  inboundFromAnyIpv4(port: Port): this;

  /**
   * Declare an inbound rule that covers all IPv6 addresses.
   *
   * Only the following protocols are allowed: TCP, UDP, ICMP, and ICMPv6.
   *
   * @param port - The ingress port
   * @returns provides a fluent interface
   */
  inboundFromAnyIpv6(port: Port): this;

  /**
   * Declare an outbound rule.
   *
   * Only the following protocols are allowed: TCP, UDP, ICMP, and ICMPv6. The
   * address can be a single address or a range of addresses in CIDR notation.
   *
   * @param port - The egress port
   * @param address - The target address
   * @returns provides a fluent interface
   */
  outbound(port: Port, address: Address): this;

  /**
   * Declare an outbound rule that covers all IPv4 addresses.
   *
   * Only the following protocols are allowed: TCP, UDP, and ICMP.
   *
   * @param port - The egress port
   * @returns provides a fluent interface
   */
  outboundToAnyIpv4(port: Port): this;

  /**
   * Declare an outbound rule that covers all IPv6 addresses.
   *
   * Only the following protocols are allowed: TCP, UDP, and ICMPv6.
   *
   * @param port - The egress port
   * @returns provides a fluent interface
   */
  outboundToAnyIpv6(port: Port): this;

  /**
   * Retrieves the shell commands used to configure the instance firewall.
   *
   * @returns An array of POSIX shell or PowerShell commands
   */
  buildCommands(): string[];
}

type PortRuleJson = {
  ipProtocol: Protocol;
  fromPort?: number;
  toPort?: number;
};

type AddressProtocolRule = {
  address: Address;
  protocol: Protocol;
  ports: Map<string, PortRuleJson>;
};

class IptablesRules implements IFirewallRules {
  readonly #inboundRules: Map<string, AddressProtocolRule>;
  readonly #outboundRules: Map<string, AddressProtocolRule>;
  #hasIpv4: boolean;
  #hasIpv6: boolean;

  public constructor() {
    this.#inboundRules = new Map();
    this.#outboundRules = new Map();
    this.#hasIpv4 = false;
    this.#hasIpv6 = false;
  }

  public inbound(port: Port, address: Address) {
    const portJson = port.toRuleJson() as PortRuleJson;
    this.validateProtocol(portJson.ipProtocol);

    if (address.isIpv4()) {
      this.#hasIpv4 = true;
    }
    if (address.isIpv6()) {
      this.#hasIpv6 = true;
    }

    const ruleKey = `${address}|${portJson.ipProtocol}`;
    if (!this.#inboundRules.has(ruleKey)) {
      this.#inboundRules.set(ruleKey, {
        address,
        protocol: portJson.ipProtocol,
        ports: new Map(),
      });
    }
    const rule = this.#inboundRules.get(ruleKey)!;
    const portLabel = String(port);
    if (!rule.ports.has(portLabel)) {
      rule.ports.set(portLabel, portJson);
    }

    return this;
  }

  public inboundFromAnyIpv4(port: Port) {
    return this.inbound(port, Address.anyIpv4());
  }

  public inboundFromAnyIpv6(port: Port) {
    return this.inbound(port, Address.anyIpv6());
  }

  public outbound(port: Port, address: Address) {
    const portJson = port.toRuleJson() as PortRuleJson;
    this.validateProtocol(portJson.ipProtocol);

    if (address.isIpv4()) {
      this.#hasIpv4 = true;
    }
    if (address.isIpv6()) {
      this.#hasIpv6 = true;
    }

    const ruleKey = `${address}|${portJson.ipProtocol}`;
    if (!this.#outboundRules.has(ruleKey)) {
      this.#outboundRules.set(ruleKey, {
        address,
        protocol: portJson.ipProtocol,
        ports: new Map(),
      });
    }
    const rule = this.#outboundRules.get(ruleKey)!;
    const portLabel = String(port);
    if (!rule.ports.has(portLabel)) {
      rule.ports.set(portLabel, portJson);
    }

    return this;
  }

  public outboundToAnyIpv4(port: Port) {
    return this.outbound(port, Address.anyIpv4());
  }

  public outboundToAnyIpv6(port: Port) {
    return this.outbound(port, Address.anyIpv6());
  }

  private validateProtocol(protocol: any) {
    if (
      ![Protocol.TCP, Protocol.UDP, Protocol.ICMP, Protocol.ICMPV6].includes(
        protocol
      )
    ) {
      throw new Error(
        `iptables does not support rules for the protocol: ${protocol}`
      );
    }
  }

  protected getIcmpCommand(chain: string, rule: AddressProtocolRule) {
    const { address, protocol } = rule;
    const commandParts = [
      address.isIpv6() ? "ip6tables" : "iptables",
      "-A",
      chain,
      "-p",
      protocol === Protocol.ICMPV6 ? "ipv6-icmp" : "icmp",
    ];
    if (!address.isAny()) {
      commandParts.push(chain === "INPUT" ? "-s" : "-d", String(address));
    }
    commandParts.push("-j ACCEPT");
    return commandParts.join(" ");
  }

  protected getTcpUdpCommands(chain: string, rule: AddressProtocolRule) {
    const { ports, address, protocol } = rule;
    const portGroups = collate(Array.from(ports.values()), 15);
    const commands = [];
    for (const groupPorts of portGroups) {
      const commandParts = [
        address.isIpv6() ? "ip6tables" : "iptables",
        "-A",
        chain,
        "-p",
        String(protocol),
      ];
      if (!address.isAny()) {
        commandParts.push(chain === "INPUT" ? "-s" : "-d", String(address));
      }
      const joinedPorts = groupPorts
        .map((p) => {
          if (p.toPort !== -1 && p.toPort !== p.fromPort) {
            return `${p.fromPort}:${p.toPort}`;
          }
          return String(p.fromPort);
        })
        .join(",");
      commandParts.push(
        "--match",
        "multiport",
        "--dports",
        joinedPorts,
        "-j",
        "ACCEPT"
      );
      commands.push(commandParts.join(" "));
    }
    return commands;
  }

  /**
   * Produces the `iptables` commands ready for a UserData script.
   *
   * @returns An array of iptables commands
   */
  public buildCommands(): string[] {
    const commands = [];

    if (this.#hasIpv4) {
      commands.push(
        "iptables -A INPUT -i lo -j ACCEPT",
        "iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT"
      );
    }
    if (this.#hasIpv6) {
      commands.push(
        "ip6tables -A INPUT -i lo -j ACCEPT",
        "ip6tables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT"
      );
    }

    for (const rule of this.#inboundRules.values()) {
      const { protocol } = rule;
      if (protocol === Protocol.TCP || protocol === Protocol.UDP) {
        commands.push(...this.getTcpUdpCommands("INPUT", rule));
      } else if (protocol === Protocol.ICMP || protocol === Protocol.ICMPV6) {
        commands.push(this.getIcmpCommand("INPUT", rule));
      }
    }

    if (this.#hasIpv4) {
      commands.push(
        "iptables -A INPUT -j REJECT",
        "iptables -A OUTPUT -o lo -p all -j ACCEPT",
        "iptables -A OUTPUT -m state --state RELATED,ESTABLISHED -j ACCEPT"
      );
    }
    if (this.#hasIpv6) {
      commands.push(
        "ip6tables -A INPUT -j REJECT",
        "ip6tables -A OUTPUT -o lo -p all -j ACCEPT",
        "ip6tables -A OUTPUT -m state --state RELATED,ESTABLISHED -j ACCEPT"
      );
    }

    for (const rule of this.#outboundRules.values()) {
      const { protocol } = rule;
      if (protocol === Protocol.TCP || protocol === Protocol.UDP) {
        commands.push(...this.getTcpUdpCommands("OUTPUT", rule));
      } else if (protocol === Protocol.ICMP || protocol === Protocol.ICMPV6) {
        commands.push(this.getIcmpCommand("OUTPUT", rule));
      }
    }

    if (this.#hasIpv4) {
      commands.push(
        "iptables -A OUTPUT -j REJECT",
        "iptables-save > /etc/iptables/rules.v4"
      );
    }
    if (this.#hasIpv6) {
      commands.push(
        "ip6tables -A OUTPUT -j REJECT",
        "ip6tables-save > /etc/iptables/rules.v6"
      );
    }

    return commands;
  }
}

/**
 * Produces the appropriate commands to configure an on-instance firewall.
 */
export class InstanceFirewall {
  /**
   * Define an instance firewall using iptables/ip6tables.
   *
   * @returns An iptables-based on-instance firewall
   */
  public static iptables(): IFirewallRules {
    return new IptablesRules();
  }
}
