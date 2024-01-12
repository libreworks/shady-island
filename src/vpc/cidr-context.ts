import { Fn, CfnResource } from "aws-cdk-lib";
import {
  IVpc,
  Vpc,
  CfnEgressOnlyInternetGateway,
  CfnVPCCidrBlock,
  CfnInternetGateway,
  CfnSubnet,
  RouterType,
  Subnet,
  SubnetSelection,
} from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { AssignOnLaunch } from "./assign-on-launch";
import { assertType, findInstanceOf } from "../util";

/**
 * Properties for creating a new {@link CidrContext}.
 */
export interface CidrContextProps {
  /**
   * The VPC whose subnets will be configured.
   */
  readonly vpc: IVpc;
  /**
   * Split the CIDRs into this many groups (by default one for each subnet).
   */
  readonly cidrCount?: number;
  /**
   * The ID of a BYOIP IPv6 address pool from which to allocate the CIDR block.
   *
   * If this parameter is not specified or is undefined, the CIDR block will be
   * provided by AWS.
   */
  readonly addressPool?: string;
  /**
   * An IPv6 CIDR block from the IPv6 address pool to use for this VPC.
   *
   * The {@link EnableIpv6Props#addressPool} attribute is required if this
   * parameter is specified.
   */
  readonly cidrBlock?: string;
  /**
   * Whether this VPC should auto-assign an IPv6 address to launched ENIs.
   *
   * True by default.
   *
   * @deprecated - Launch templates now support specifying IPv6 addresses
   */
  readonly assignAddressOnLaunch?: boolean;
}

/**
 * Interface for the CidrContext class.
 */
export interface ICidrContext {
  /**
   * The IPv6-enabled VPC.
   */
  readonly vpc: IVpc;
}

/**
 * Allocates IPv6 CIDRs and routes for subnets in a VPC.
 *
 * @see {@link https://github.com/aws/aws-cdk/issues/894}
 * @see {@link https://github.com/aws/aws-cdk/issues/5927}
 */
export class CidrContext extends Construct implements ICidrContext {
  public readonly vpc: IVpc;
  private readonly assignAddressOnLaunch: boolean;

  /**
   * Creates a new BetterVpc.
   *
   * @param scope - The construct scope.
   * @param id - The construct ID.
   * @param options - The constructor options.
   */
  constructor(scope: Construct, id: string, options: CidrContextProps) {
    super(scope, id);
    this.assignAddressOnLaunch = options.assignAddressOnLaunch !== false;

    const vpc = assertType(options.vpc, Vpc);
    this.vpc = vpc;

    // Create the VPC CIDR block.
    const cidrBlock = new CfnVPCCidrBlock(this, "Ipv6CidrBlock", {
      vpcId: vpc.vpcId,
      amazonProvidedIpv6CidrBlock: options.addressPool === undefined,
      ipv6Pool: options.addressPool,
      ipv6CidrBlock: options.cidrBlock,
    });

    // Create a placeholder for CloudFormation to provide a CIDR array.
    const cidrs = Fn.cidr(
      Fn.select(0, vpc.vpcIpv6CidrBlocks),
      this.validateCidrCount(vpc, options.cidrCount),
      "64"
    );

    if (vpc.publicSubnets.length > 0) {
      this.assignPublicSubnetCidrs(vpc, cidrs, cidrBlock);
    }
    if (vpc.privateSubnets.length > 0) {
      this.assignPrivateSubnetCidrs(vpc, cidrs, cidrBlock);
    }
    if (vpc.isolatedSubnets.length > 0) {
      this.assignIsolatedSubnetCidrs(vpc, cidrs, cidrBlock);
    }

    if (this.assignAddressOnLaunch) {
      const vpcSubnets: SubnetSelection = {
        subnets: [
          ...vpc.publicSubnets,
          ...vpc.privateSubnets,
          ...vpc.isolatedSubnets,
        ],
      };
      new AssignOnLaunch(this, "AssignOnLaunch", { vpc, vpcSubnets });
    }
  }

  /**
   * Figure out the minimun required CIDR subnets and the number desired.
   *
   * @param vpc - The VPC.
   * @param cidrCount - Optional. Divide the VPC CIDR into this many subsets.
   */
  protected validateCidrCount(vpc: IVpc, cidrCount?: number): number {
    const leastCidrBlocksNeeded =
      vpc.publicSubnets.length +
      vpc.privateSubnets.length +
      vpc.isolatedSubnets.length;

    const cidrBlockCount = cidrCount ?? leastCidrBlocksNeeded;

    if (cidrBlockCount < leastCidrBlocksNeeded) {
      throw new Error(
        `You must create at least ${leastCidrBlocksNeeded} CIDR blocks in this VPC`
      );
    }

    return cidrBlockCount;
  }

  /**
   * Override the template; set the IPv6 CIDR for isolated subnets.
   *
   * @param vpc - The VPC of the subnets.
   * @param cidrs - The possible IPv6 CIDRs to assign.
   * @param cidrBlock - The CfnVPCCidrBlock the subnets depend on.
   */
  protected assignPublicSubnetCidrs(
    vpc: IVpc,
    cidrs: string[],
    cidrBlock: CfnResource
  ) {
    const gateway = findInstanceOf(vpc.node.children, CfnInternetGateway);

    for (const [index, subnet] of vpc.publicSubnets.entries()) {
      subnet.node.addDependency(cidrBlock);

      // Add a Route to the Internet gateway for Internet-bound IPv6 traffic.
      const concreteSubnet = assertType(subnet, Subnet);
      concreteSubnet.addRoute("DefaultIpv6Route", {
        routerId: gateway.ref,
        routerType: RouterType.GATEWAY,
        destinationIpv6CidrBlock: "::/0",
      });

      // Define the IPv6 CIDR block for this subnet.
      const cfnSubnet = assertType(subnet.node.defaultChild, CfnSubnet);
      cfnSubnet.ipv6CidrBlock = Fn.select(index, cidrs);
    }
  }

  /**
   * Override the template; set the IPv6 CIDR for private subnets.
   *
   * @param vpc - The VPC of the subnets.
   * @param cidrs - The possible IPv6 CIDRs to assign.
   * @param cidrBlock - The CfnVPCCidrBlock the subnets depend on.
   */
  protected assignPrivateSubnetCidrs(
    vpc: IVpc,
    cidrs: string[],
    cidrBlock: CfnResource
  ) {
    const gateway = new CfnEgressOnlyInternetGateway(this, "EgressOnlyIgw", {
      vpcId: vpc.vpcId,
    });

    for (const [index, subnet] of vpc.privateSubnets.entries()) {
      subnet.node.addDependency(cidrBlock);

      // Add a Route to the Egress-only Internet Gateway.
      const concreteSubnet = assertType(subnet, Subnet);
      concreteSubnet.addRoute("DefaultIpv6Route", {
        routerId: `${gateway.ref}`,
        routerType: RouterType.EGRESS_ONLY_INTERNET_GATEWAY,
        destinationIpv6CidrBlock: "::/0",
      });

      // Define the IPv6 CIDR block for this subnet.
      const cfnSubnet = assertType(subnet.node.defaultChild, CfnSubnet);
      cfnSubnet.ipv6CidrBlock = Fn.select(
        index + vpc.publicSubnets.length,
        cidrs
      );
    }
  }

  /**
   * Override the template; set the IPv6 CIDR for isolated subnets.
   *
   * @param vpc - The VPC of the subnets.
   * @param cidrs - The possible IPv6 CIDRs to assign.
   * @param cidrBlock - The CfnVPCCidrBlock the subnets depend on.
   */
  private assignIsolatedSubnetCidrs(
    vpc: Vpc,
    cidrs: string[],
    cidrBlock: CfnResource
  ) {
    for (const [index, subnet] of vpc.isolatedSubnets.entries()) {
      subnet.node.addDependency(cidrBlock);

      // Define the IPv6 CIDR block for this subnet.
      const cfnSubnet = assertType(subnet.node.defaultChild, CfnSubnet);
      cfnSubnet.ipv6CidrBlock = Fn.select(
        index + vpc.publicSubnets.length + vpc.privateSubnets.length,
        cidrs
      );
    }
  }
}
