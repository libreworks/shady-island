import { Port } from "aws-cdk-lib/aws-ec2";
import { InstanceFirewall } from "../../src/configuration/firewall";
import { Address } from "../../src/networking/address";

describe("IptablesRules", () => {
  describe("#construct", () => {
    test("behaves as expected with IPv4", () => {
      const obj = InstanceFirewall.iptables();
      const peer = Address.ipv4("10.12.0.13");
      obj
        .inboundFromAnyIpv4(Port.udp(68))
        .inbound(Port.allIcmp(), peer)
        .outboundToAnyIpv4(Port.tcp(53))
        .outboundToAnyIpv4(Port.tcp(80))
        .outboundToAnyIpv4(Port.tcp(443))
        .outboundToAnyIpv4(Port.tcp(587))
        .outboundToAnyIpv4(Port.udp(53))
        .outboundToAnyIpv4(Port.udp(67))
        .outboundToAnyIpv4(Port.udp(123))
        .outboundToAnyIpv4(Port.icmpPing());
      const actual = obj.buildCommands();
      expect(actual).toStrictEqual([
        "iptables -A INPUT -i lo -j ACCEPT",
        "iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
        "iptables -A INPUT -p udp --match multiport --dports 68 -j ACCEPT",
        "iptables -A INPUT -p icmp -s 10.12.0.13 -j ACCEPT",
        "iptables -A INPUT -j REJECT",
        "iptables -A OUTPUT -o lo -p all -j ACCEPT",
        "iptables -A OUTPUT -m state --state RELATED,ESTABLISHED -j ACCEPT",
        "iptables -A OUTPUT -p tcp --match multiport --dports 53,80,443,587 -j ACCEPT",
        "iptables -A OUTPUT -p udp --match multiport --dports 53,67,123 -j ACCEPT",
        "iptables -A OUTPUT -p icmp -j ACCEPT",
        "iptables -A OUTPUT -j REJECT",
        "iptables-save > /etc/iptables/rules.v4",
      ]);
    });

    test("behaves as expected with an IPv4 peer and port ranges", () => {
      const obj = InstanceFirewall.iptables();
      const peer = Address.ipv4("10.11.0.0/16");
      obj
        .inbound(Port.udp(68), peer)
        .outbound(Port.tcp(53), peer)
        .outbound(Port.tcpRange(1433, 1434), peer)
        .outbound(Port.tcp(443), peer)
        .outbound(Port.tcp(587), peer)
        .outbound(Port.udp(53), peer)
        .outbound(Port.udp(67), peer)
        .outbound(Port.udp(123), peer)
        .outbound(Port.icmpPing(), peer);
      const actual = obj.buildCommands();
      expect(actual).toStrictEqual([
        "iptables -A INPUT -i lo -j ACCEPT",
        "iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
        "iptables -A INPUT -p udp -s 10.11.0.0/16 --match multiport --dports 68 -j ACCEPT",
        "iptables -A INPUT -j REJECT",
        "iptables -A OUTPUT -o lo -p all -j ACCEPT",
        "iptables -A OUTPUT -m state --state RELATED,ESTABLISHED -j ACCEPT",
        "iptables -A OUTPUT -p tcp -d 10.11.0.0/16 --match multiport --dports 53,1433:1434,443,587 -j ACCEPT",
        "iptables -A OUTPUT -p udp -d 10.11.0.0/16 --match multiport --dports 53,67,123 -j ACCEPT",
        "iptables -A OUTPUT -p icmp -d 10.11.0.0/16 -j ACCEPT",
        "iptables -A OUTPUT -j REJECT",
        "iptables-save > /etc/iptables/rules.v4",
      ]);
    });

    test("collates ports into groups of 15", () => {
      const obj = InstanceFirewall.iptables();

      const portNumbers = Array.from(new Array(20), (_, i) => i);
      portNumbers.shift();

      portNumbers.forEach((n) => obj.outboundToAnyIpv4(Port.tcp(n)));

      const actual = obj.buildCommands();
      expect(actual).toStrictEqual([
        "iptables -A INPUT -i lo -j ACCEPT",
        "iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
        "iptables -A INPUT -j REJECT",
        "iptables -A OUTPUT -o lo -p all -j ACCEPT",
        "iptables -A OUTPUT -m state --state RELATED,ESTABLISHED -j ACCEPT",
        "iptables -A OUTPUT -p tcp --match multiport --dports 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 -j ACCEPT",
        "iptables -A OUTPUT -p tcp --match multiport --dports 16,17,18,19 -j ACCEPT",
        "iptables -A OUTPUT -j REJECT",
        "iptables-save > /etc/iptables/rules.v4",
      ]);
    });

    test("behaves as expected with IPv4", () => {
      const obj = InstanceFirewall.iptables();
      obj.inboundFromAnyIpv4(Port.udp(68));
      obj.outboundToAnyIpv4(Port.tcp(53));
      obj.outboundToAnyIpv4(Port.tcp(80));
      obj.outboundToAnyIpv4(Port.tcp(443));
      obj.outboundToAnyIpv4(Port.tcp(587));
      obj.outboundToAnyIpv4(Port.udp(53));
      obj.outboundToAnyIpv4(Port.udp(67));
      obj.outboundToAnyIpv4(Port.udp(123));
      obj.outboundToAnyIpv4(Port.icmpPing());
      const actual = obj.buildCommands();
      expect(actual).toStrictEqual([
        "iptables -A INPUT -i lo -j ACCEPT",
        "iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
        "iptables -A INPUT -p udp --match multiport --dports 68 -j ACCEPT",
        "iptables -A INPUT -j REJECT",
        "iptables -A OUTPUT -o lo -p all -j ACCEPT",
        "iptables -A OUTPUT -m state --state RELATED,ESTABLISHED -j ACCEPT",
        "iptables -A OUTPUT -p tcp --match multiport --dports 53,80,443,587 -j ACCEPT",
        "iptables -A OUTPUT -p udp --match multiport --dports 53,67,123 -j ACCEPT",
        "iptables -A OUTPUT -p icmp -j ACCEPT",
        "iptables -A OUTPUT -j REJECT",
        "iptables-save > /etc/iptables/rules.v4",
      ]);
    });

    test("behaves as expected with IPv6", () => {
      const obj = InstanceFirewall.iptables();
      const peer = Address.anyIpv6();
      obj.inbound(Port.udp(68), peer);
      obj.outbound(Port.tcp(53), peer);
      obj.outbound(Port.tcp(80), peer);
      obj.outbound(Port.tcp(443), peer);
      obj.outbound(Port.tcp(587), peer);
      obj.outbound(Port.udp(53), peer);
      obj.outbound(Port.udp(67), peer);
      obj.outbound(Port.udp(123), peer);
      obj.outboundToAnyIpv6(Port.allIcmpV6());
      const actual = obj.buildCommands();
      expect(actual).toStrictEqual([
        "ip6tables -A INPUT -i lo -j ACCEPT",
        "ip6tables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
        "ip6tables -A INPUT -p udp --match multiport --dports 68 -j ACCEPT",
        "ip6tables -A INPUT -j REJECT",
        "ip6tables -A OUTPUT -o lo -p all -j ACCEPT",
        "ip6tables -A OUTPUT -m state --state RELATED,ESTABLISHED -j ACCEPT",
        "ip6tables -A OUTPUT -p tcp --match multiport --dports 53,80,443,587 -j ACCEPT",
        "ip6tables -A OUTPUT -p udp --match multiport --dports 53,67,123 -j ACCEPT",
        "ip6tables -A OUTPUT -p ipv6-icmp -j ACCEPT",
        "ip6tables -A OUTPUT -j REJECT",
        "ip6tables-save > /etc/iptables/rules.v6",
      ]);
    });

    test("behaves as expected with both IPv4 and IPv6", () => {
      const obj = InstanceFirewall.iptables();
      obj.inboundFromAnyIpv4(Port.udp(68));
      obj.outboundToAnyIpv4(Port.tcp(53));
      obj.outboundToAnyIpv4(Port.tcp(80));
      obj.outboundToAnyIpv4(Port.tcp(443));
      obj.outboundToAnyIpv4(Port.tcp(587));
      obj.outboundToAnyIpv4(Port.udp(53));
      obj.outboundToAnyIpv4(Port.udp(67));
      obj.outboundToAnyIpv4(Port.udp(123));
      obj.outboundToAnyIpv4(Port.allIcmp());
      const peer = Address.anyIpv6();
      obj.inboundFromAnyIpv6(Port.allIcmpV6());
      obj.inbound(Port.udp(68), peer);
      obj.outbound(Port.tcp(53), peer);
      obj.outbound(Port.tcp(80), peer);
      obj.outbound(Port.tcp(443), peer);
      obj.outbound(Port.tcp(587), peer);
      obj.outbound(Port.udp(53), peer);
      obj.outbound(Port.udp(67), peer);
      obj.outbound(Port.udp(123), peer);
      obj.outbound(Port.allIcmpV6(), peer);
      const actual = obj.buildCommands();
      expect(actual).toStrictEqual([
        "iptables -A INPUT -i lo -j ACCEPT",
        "iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
        "ip6tables -A INPUT -i lo -j ACCEPT",
        "ip6tables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
        "iptables -A INPUT -p udp --match multiport --dports 68 -j ACCEPT",
        "ip6tables -A INPUT -p ipv6-icmp -j ACCEPT",
        "ip6tables -A INPUT -p udp --match multiport --dports 68 -j ACCEPT",
        "iptables -A INPUT -j REJECT",
        "iptables -A OUTPUT -o lo -p all -j ACCEPT",
        "iptables -A OUTPUT -m state --state RELATED,ESTABLISHED -j ACCEPT",
        "ip6tables -A INPUT -j REJECT",
        "ip6tables -A OUTPUT -o lo -p all -j ACCEPT",
        "ip6tables -A OUTPUT -m state --state RELATED,ESTABLISHED -j ACCEPT",
        "iptables -A OUTPUT -p tcp --match multiport --dports 53,80,443,587 -j ACCEPT",
        "iptables -A OUTPUT -p udp --match multiport --dports 53,67,123 -j ACCEPT",
        "iptables -A OUTPUT -p icmp -j ACCEPT",
        "ip6tables -A OUTPUT -p tcp --match multiport --dports 53,80,443,587 -j ACCEPT",
        "ip6tables -A OUTPUT -p udp --match multiport --dports 53,67,123 -j ACCEPT",
        "ip6tables -A OUTPUT -p ipv6-icmp -j ACCEPT",
        "iptables -A OUTPUT -j REJECT",
        "iptables-save > /etc/iptables/rules.v4",
        "ip6tables -A OUTPUT -j REJECT",
        "ip6tables-save > /etc/iptables/rules.v6",
      ]);
    });

    test("throws exception for unsupported protocol", () => {
      const obj = InstanceFirewall.iptables();
      expect(() => obj.inboundFromAnyIpv4(Port.esp())).toThrowError({
        name: "Error",
        message: `iptables does not support rules for the protocol: 50`,
      });
    });
  });
});
