import { Lazy, RemovalPolicy, Resource } from "aws-cdk-lib";
import {
  CfnEIPAssociation,
  CfnNetworkInterface,
  CfnNetworkInterfaceProps,
  Connections,
  IConnectable,
  ISecurityGroup,
  ISubnet,
  IVpc,
  SecurityGroup,
} from "aws-cdk-lib/aws-ec2";
import { Construct, IConstruct } from "constructs";
import { IElasticIp } from "./elastic-ip";

/**
 * The type of Network Interface.
 */
export enum InterfaceType {
  /**
   * A standard ENI.
   */
  INTERFACE = "interface",

  /**
   * An Elastic Fabric Adapter ENI.
   */
  EFA = "efa",

  /**
   * An ENI for use with ECS awsvpc trunking.
   */
  TRUNK = "trunk",
}

/**
 * Used to assign IPv4 addresses to a Network Interface.
 */
export class AddressingV4 {
  /**
   * Specify one or more IPv4 delegated prefixes to assign.
   *
   * IPv4 prefixes must be within a CIDR of /28.
   *
   * @param prefixes - The IPv4 delegated prefixes
   */
  public static prefixes(prefixes: string[]) {
    return new AddressingV4({
      ipv4Prefixes: prefixes.map((p) => ({ ipv4Prefix: p })),
    });
  }

  /**
   * Specify a number of IPv4 delegated prefixes to automatically assign.
   *
   * @param count - The number of automatic IPv4 delegated prefixes
   */
  public static prefixCount(count: number) {
    return new AddressingV4({ ipv4PrefixCount: count });
  }

  /**
   * Specify a private IPv4 address.
   *
   * @param ip - The actual IP address
   */
  public static privateAddress(ip: string) {
    return new AddressingV4({ privateIpAddress: ip });
  }

  /**
   * Specify a primary IPv4 address and one or more secondary IPv4 addresses.
   *
   * @param primary - The primary address
   * @param secondary - Any secondary addresses
   */
  public static privateAddresses(primary: string, ...secondary: string[]) {
    const privateIpAddresses = [{ privateIpAddress: primary, primary: true }];
    if (secondary.length) {
      privateIpAddresses.push(
        ...secondary.map((a) => ({ privateIpAddress: a, primary: false }))
      );
    }
    return new AddressingV4({ privateIpAddresses });
  }

  /**
   * Specify a primary IPv4 address and a number of secondary addresses.
   *
   * @param primary - The primary address
   * @param count - The number of secondary addresses
   */
  public static privateAddressAndSecondaryCount(
    primary: string,
    count: number
  ) {
    return new AddressingV4({
      privateIpAddresses: [{ privateIpAddress: primary, primary: true }],
      secondaryPrivateIpAddressCount: count,
    });
  }

  public readonly props: Record<string, any>;

  /**
   * @ignore
   */
  private constructor(props: Partial<CfnNetworkInterfaceProps>) {
    this.props = props;
  }
}

/**
 * Used to assign IPv6 addresses to a Network Interface.
 */
export class AddressingV6 {
  /**
   * Specify one or more IPv6 delegated prefixes to assign.
   *
   * IPv6 prefixes must be within a CIDR of /80.
   *
   * @param prefixes - The IPv6 delegated prefixes
   * @param enablePrimary - Whether to enable a primary IPv6 GUA (default: no)
   */
  public static prefixes(prefixes: string[], enablePrimary?: boolean) {
    return new AddressingV6({
      ipv6Prefixes: prefixes.map((p) => ({ ipv6Prefix: p })),
      ...(enablePrimary !== undefined
        ? { enablePrimaryIpv6: enablePrimary }
        : {}),
    });
  }

  /**
   * Specify a number of IPv6 delegated prefixes to automatically assign.
   *
   * @param count - The number of automatic IPv6 delegated prefixes
   * @param enablePrimary - Whether to enable a primary IPv6 GUA (default: no)
   */
  public static prefixCount(count: number, enablePrimary?: boolean) {
    return new AddressingV6({
      ipv6PrefixCount: count,
      ...(enablePrimary !== undefined
        ? { enablePrimaryIpv6: enablePrimary }
        : {}),
    });
  }

  /**
   * Specify one or more IPv6 addresses to assign.
   *
   * @param ips - The IPv6 addresses
   * @param enablePrimary - Whether to enable a primary IPv6 GUA (default: no)
   */
  public static addresses(ips: string[], enablePrimary?: boolean) {
    return new AddressingV6({
      ipv6Addresses: ips.map((a) => ({ ipv6Address: a })),
      ...(enablePrimary !== undefined
        ? { enablePrimaryIpv6: enablePrimary }
        : {}),
    });
  }

  /**
   * Specify a number of IPv6 addresses to automatically assign.
   *
   * @param count - The number of automatic IPv6 addresses
   * @param enablePrimary - Whether to enable a primary IPv6 GUA (default: no)
   */
  public static addressCount(count: number, enablePrimary?: boolean) {
    return new AddressingV6({
      ipv6AddressCount: count,
      ...(enablePrimary !== undefined
        ? { enablePrimaryIpv6: enablePrimary }
        : {}),
    });
  }
  public readonly props: Record<string, any>;

  /**
   * @ignore
   */
  private constructor(props: Partial<CfnNetworkInterfaceProps>) {
    this.props = props;
  }
}

/**
 * An Elastic Network Interface.
 */
export interface INetworkInterface extends IConstruct, IConnectable {
  /**
   * The ID of this Network Interface.
   */
  readonly networkInterfaceId: string;
}

/**
 * Constructor properties for NetworkInterface.
 */
export interface NetworkInterfaceProps {
  /**
   * The VPC where this Network Interface will be created.
   */
  readonly vpc: IVpc;

  /**
   * The subnet where this Network Interface will be created.
   */
  readonly subnet: ISubnet;

  /**
   * A description for this Network Interface.
   */
  readonly description?: string;

  /**
   * How to assign IPv4 addresses.
   *
   * The default behavior depends on the VPC. If it's a dual stack VPC, EC2 will
   * allocate a single private IP address from the VPC IPv4 CIDR range. If it's
   * IPv6-only, EC2 won't allocate an IPv4 address.
   *
   * @default - Dependent on VPC settings
   */
  readonly ipv4?: AddressingV4;

  /**
   * How to assign IPv6 addresses.
   *
   * The default behavior depends on the VPC. If there are no IPv6 CIDRs defined
   * for the VPC, EC2 won't allocate an IPv6 address. If it's a dual stack or an
   * IPv6-only VPC, EC2 will allocate an IPv6 address if the subnet auto-assigns
   * one.
   *
   * @default - Dependent on VPC and subnet settings.
   */
  readonly ipv6?: AddressingV6;

  /**
   * The type of interface (i.e. interface, efa, trunk).
   *
   * @default - InterfaceType.INTERFACE
   */
  readonly interfaceType?: InterfaceType;

  /**
   * Enable the source/destination check.
   *
   * @default - true
   */
  readonly enableSourceDestCheck?: boolean;

  /**
   * The security groups to assign to the Network Interface.
   *
   * @default - A new one is created
   */
  readonly securityGroups?: ISecurityGroup[];

  /**
   * An Elastic IP Address to associate with this Network Interface.
   *
   * Provding an Elastic IP
   */
  readonly elasticIp?: IElasticIp;

  /**
   * The removal policy for this resource.
   */
  readonly removalPolicy?: RemovalPolicy;
}

/**
 * Attributes to import an existing Network Interface.
 */
export interface NetworkInterfaceAttributes {
  /**
   * The ID of this Network Interface.
   */
  readonly networkInterfaceId: string;

  /**
   * The security groups assigned to the Network Interface.
   */
  readonly securityGroups: ISecurityGroup[];
}

/**
 * A Network Interface.
 */
export class NetworkInterface extends Resource implements INetworkInterface {
  /**
   * Import an existing Network Interface from the given attributes.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param attribs - The Network Interface attributes.
   * @returns The imported Network Interface
   */
  public static fromNetworkInterfaceAttributes(
    scope: Construct,
    id: string,
    attribs: NetworkInterfaceAttributes
  ): INetworkInterface {
    class ImportedNetworkInterface
      extends Construct
      implements INetworkInterface
    {
      public readonly networkInterfaceId = attribs.networkInterfaceId;
      public readonly connections = new Connections({
        securityGroups: attribs.securityGroups,
      });
    }
    return new ImportedNetworkInterface(scope, id);
  }

  public readonly subnet: ISubnet;

  public readonly networkInterfaceId: string;

  public readonly connections: Connections;

  public readonly privateIpv4Address: string;

  public readonly ipv6Address: string;

  /**
   * Creates a new Example.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   */
  public constructor(
    scope: Construct,
    id: string,
    props: NetworkInterfaceProps
  ) {
    super(scope, id);

    const { vpc, subnet, description, securityGroups = [] } = props;

    this.subnet = subnet;

    if (securityGroups.length === 0) {
      securityGroups.push(
        new SecurityGroup(this, "SecurityGroup", {
          vpc,
          description: `Created for ${this.node.path}`,
        })
      );
    }
    this.connections = new Connections({ securityGroups });

    const securityGroupsToken = Lazy.list({
      produce: () => {
        return this.connections.securityGroups.map((sg) => sg.securityGroupId);
      },
    });

    const eni = new CfnNetworkInterface(this, "Resource", {
      description,
      subnetId: subnet.subnetId,
      groupSet: securityGroupsToken,
      sourceDestCheck: props.enableSourceDestCheck !== false,
      interfaceType: props.interfaceType,
      ...(props.ipv4?.props ?? {}),
      ...(props.ipv6?.props ?? {}),
    });

    this.networkInterfaceId = eni.attrId;
    this.privateIpv4Address = eni.attrPrimaryPrivateIpAddress;
    this.ipv6Address = eni.attrPrimaryIpv6Address;

    if (props.elasticIp) {
      new CfnEIPAssociation(this, "Association", {
        allocationId: props.elasticIp.allocationId,
        networkInterfaceId: eni.ref,
        privateIpAddress: eni.attrPrimaryPrivateIpAddress,
      });
    }

    if (props.removalPolicy) {
      this.applyRemovalPolicy(props.removalPolicy);
    }
  }
}
