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
} from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

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

  /**
   * Creates a new BetterVpc.
   *
   * @param scope - The construct scope.
   * @param id - The construct ID.
   * @param options - The constructor options.
   */
  constructor(scope: Construct, id: string, options: CidrContextProps) {
    super(scope, id);

    const vpc = assertType(options.vpc, Vpc);
    this.vpc = vpc;

    // Create the Egress-only Internet Gateway for the private subnets.
    const egressOnlyInternetGateway =
      vpc.privateSubnets.length > 0
        ? new CfnEgressOnlyInternetGateway(this, "EgressOnlyIgw", {
            vpcId: vpc.vpcId,
          })
        : undefined;

    // Locate the Internet Gateway.
    const internetGateway = findInstanceOf(
      vpc.node.children,
      CfnInternetGateway
    );

    // Create the VPC CIDR block.
    const cidrBlock = new CfnVPCCidrBlock(this, "Ipv6CidrBlock", {
      vpcId: vpc.vpcId,
      amazonProvidedIpv6CidrBlock: options.addressPool !== undefined,
      ipv6Pool: options.addressPool,
      ipv6CidrBlock: options.cidrBlock,
    });
    // Figure out the minimun required CIDR subnets and the number desired.
    const leastCidrBlocksNeeded =
      vpc.publicSubnets.length +
      vpc.privateSubnets.length +
      vpc.isolatedSubnets.length;
    const cidrBlockCount = options?.cidrCount ?? leastCidrBlocksNeeded;
    if (cidrBlockCount < leastCidrBlocksNeeded) {
      throw new Error(
        `You must create at least ${leastCidrBlocksNeeded} CIDR blocks in this VPC`
      );
    }

    // Create a placeholder for CloudFormation to provide a CIDR array.
    const cidrs = Fn.cidr(
      Fn.select(0, vpc.vpcIpv6CidrBlocks),
      cidrBlockCount,
      "64"
    );

    this.assignSubnetCidrs(
      vpc,
      cidrs,
      cidrBlock,
      internetGateway,
      egressOnlyInternetGateway
    );
  }

  private assignSubnetCidrs(
    vpc: Vpc,
    cidrs: string[],
    cidrBlock: CfnResource,
    internetGateway: CfnInternetGateway,
    egressOnlyInternetGateway?: CfnEgressOnlyInternetGateway
  ): void {
    for (const [index, subnet] of vpc.publicSubnets.entries()) {
      // Add a Route to the Internet gateway for Internet-bound IPv6 traffic.
      const concreteSubnet = assertType(subnet, Subnet);
      concreteSubnet.addRoute("DefaultIpv6Route", {
        routerId: internetGateway.ref,
        routerType: RouterType.GATEWAY,
        destinationIpv6CidrBlock: "::/0",
      });
      // Define the IPv6 CIDR block for this subnet.
      const cfnSubnet = assertType(concreteSubnet.node.defaultChild, CfnSubnet);
      cfnSubnet.ipv6CidrBlock = Fn.select(index, cidrs);
      cfnSubnet.addDependsOn(cidrBlock);
      // TODO: create a custom resource that will set the auto-assign IPv6.
    }

    for (const [index, subnet] of vpc.privateSubnets.entries()) {
      // Add a Route to the Egress-only Internet Gateway.
      const concreteSubnet = assertType(subnet, Subnet);
      concreteSubnet.addRoute("DefaultIpv6Route", {
        routerId: `${egressOnlyInternetGateway?.ref}`,
        routerType: RouterType.EGRESS_ONLY_INTERNET_GATEWAY,
        destinationIpv6CidrBlock: "::/0",
      });
      // Define the IPv6 CIDR block for this subnet.
      const cfnSubnet = assertType(concreteSubnet.node.defaultChild, CfnSubnet);
      cfnSubnet.ipv6CidrBlock = Fn.select(
        index + vpc.publicSubnets.length,
        cidrs
      );
      cfnSubnet.addDependsOn(cidrBlock);
      // TODO: create a custom resource that will set the auto-assign IPv6.
    }

    for (const [index, subnet] of vpc.isolatedSubnets.entries()) {
      // Define the IPv6 CIDR block for this subnet.
      const cfnSubnet = assertType(subnet.node.defaultChild, CfnSubnet);
      cfnSubnet.ipv6CidrBlock = Fn.select(
        index + vpc.publicSubnets.length + vpc.privateSubnets.length,
        cidrs
      );
      cfnSubnet.addDependsOn(cidrBlock);
      // TODO: create a custom resource that will set the auto-assign IPv6.
    }
  }
}
