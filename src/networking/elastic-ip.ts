import {
  ArnFormat,
  IResource,
  RemovalPolicy,
  Resource,
  Stack,
} from "aws-cdk-lib";
import { CfnEIP } from "aws-cdk-lib/aws-ec2";
import { Grant, IGrantable } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

/**
 * An EC2 Elastic IP address.
 */
export interface IElasticIp extends IResource {
  /**
   * The allocation ID of the Elastic IP address.
   */
  readonly allocationId: string;

  /**
   * The ARN of the Elastic IP address.
   */
  readonly elasticIpArn: string;

  /**
   * Grant the given identity custom permissions.
   *
   * e.g. `ec2:AssociateAddress`, `ec2:DisableAddressTransfer`,
   * `ec2:DisassociateAddress`, `ec2:EnableAddressTransfer`, among others.
   *
   * @param identity - The resource with a grantPrincipal property
   * @param actions - The IAM actions to allow
   * @returns The new Grant
   */
  grant(identity: IGrantable, ...actions: string[]): Grant;
}

/**
 * Constructor properties for ElasticIp.
 */
export interface ElasticIpProps {
  /**
   * The removal policy for this resource.
   */
  readonly removalPolicy?: RemovalPolicy;
}

/**
 * The abstract base
 */
abstract class ElasticIpBase extends Resource implements IElasticIp {
  abstract readonly allocationId: string;

  abstract readonly elasticIpArn: string;

  public grant(identity: IGrantable, ...actions: string[]): Grant {
    return Grant.addToPrincipal({
      grantee: identity,
      actions,
      resourceArns: [this.elasticIpArn],
    });
  }
}

/**
 * An EC2 Elastic IP address.
 */
export class ElasticIp extends ElasticIpBase implements IElasticIp {
  /**
   * Import an existing EIP from its ARN.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param arn - The EIP ARN
   * @returns The imported Elastic IP
   */
  public static fromElasticIpArn(
    scope: Construct,
    id: string,
    arn: string
  ): IElasticIp {
    const stack = Stack.of(scope);
    const parsed = stack.splitArn(arn, ArnFormat.SLASH_RESOURCE_NAME);
    return new (class ImportedArnEip extends ElasticIpBase {
      public readonly allocationId = parsed.resourceName!;
      public readonly elasticIpArn = arn;
    })(scope, id, { environmentFromArn: arn });
  }

  /**
   * Import an existing EIP from the given allocation ID.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param allocationId - The EIP allocation ID.
   * @returns The imported Elastic IP
   */
  public static fromAllocationId(
    scope: Construct,
    id: string,
    allocationId: string
  ): IElasticIp {
    const elasticIpArn = Stack.of(scope).formatArn({
      service: "ec2",
      resource: "elastic-ip",
      resourceName: allocationId,
      arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
    });
    return this.fromElasticIpArn(scope, id, elasticIpArn);
  }

  public readonly allocationId: string;
  public readonly elasticIpArn: string;

  /**
   * The IPv4 address.
   */
  public readonly publicIp: string;

  /**
   * Creates a new Elastic IP address.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   */
  public constructor(scope: Construct, id: string, props: ElasticIpProps = {}) {
    super(scope, id);

    const { removalPolicy } = props;

    const eip = new CfnEIP(this, "Resource", { domain: "vpc" });
    this.allocationId = eip.attrAllocationId;

    this.elasticIpArn = Stack.of(this).formatArn({
      service: "ec2",
      resource: "elastic-ip",
      resourceName: this.allocationId,
      arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
    });

    this.publicIp = eip.attrPublicIp;

    if (removalPolicy) {
      this.applyRemovalPolicy(removalPolicy);
    }
  }
}
