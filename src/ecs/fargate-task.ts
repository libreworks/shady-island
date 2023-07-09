import {
  Connections,
  IConnectable,
  ISecurityGroup,
  IVpc,
  SecurityGroup,
  SubnetSelection,
  SubnetType,
} from "aws-cdk-lib/aws-ec2";
import {
  CfnService,
  ICluster,
  FargateTaskDefinition,
} from "aws-cdk-lib/aws-ecs";
import { Grant, IGrantable } from "aws-cdk-lib/aws-iam";
import { Construct, IConstruct } from "constructs";

/**
 * The `networkConfiguration.awsvpcConfiguration` values for `ecs.RunTask`.
 */
export interface FargateAwsVpcConfiguration
  extends CfnService.AwsVpcConfigurationProperty {}

/**
 * Interface for FargateTask.
 */
export interface IFargateTask extends IConnectable, IConstruct {
  /**
   * The name of the cluster that hosts the service.
   */
  readonly cluster: ICluster;

  /**
   * The task definition that can be launched.
   */
  readonly taskDefinition: FargateTaskDefinition;

  /**
   * Get the networkConfiguration.awsvpcConfiguration property to run this task.
   */
  readonly awsVpcNetworkConfig: FargateAwsVpcConfiguration;

  /**
   * Grants permission to invoke ecs:RunTask on this task's cluster.
   *
   * @param grantee - The recipient of the permissions
   */
  grantRun(grantee: IGrantable): Grant;
}

/**
 * Constructor parameters for FargateTask.
 */
export interface FargateTaskProps {
  /**
   * The name of the cluster that hosts the service.
   */
  readonly cluster: ICluster;

  /**
   * The task definition that can be launched.
   */
  readonly taskDefinition: FargateTaskDefinition;

  /**
   * Specifies whether the task's elastic network interface receives a public IP address.
   *
   * If true, the task will receive a public IP address.
   *
   * @default false
   */
  readonly assignPublicIp?: boolean;

  /**
   * The subnets to associate with the task.
   *
   * @default - Public subnets if `assignPublicIp` is set, otherwise the first available one of Private, Isolated, Public, in that order.
   */
  readonly vpcSubnets?: SubnetSelection;

  /**
   * Existing security groups to use for your task.
   *
   * @default - a new security group will be created.
   */
  readonly securityGroups?: ISecurityGroup[];
}

/**
 * An FargateTask.
 *
 * If `vpcSubnets` is blank but `assignPublicIp` is set, the task will launch
 * in Public subnets, otherwise the first available one of Private, Isolated,
 * Public, in that order.
 */
export class FargateTask extends Construct implements IFargateTask {
  public readonly cluster: ICluster;
  public readonly taskDefinition: FargateTaskDefinition;
  public readonly connections: Connections = new Connections();
  public readonly awsVpcNetworkConfig: FargateAwsVpcConfiguration;

  /**
   * Creates a new FargateTask.
   */
  public constructor(scope: Construct, id: string, props: FargateTaskProps) {
    super(scope, id);

    const { securityGroups = [] } = props;

    this.cluster = props.cluster;
    this.taskDefinition = props.taskDefinition;

    this.awsVpcNetworkConfig = this.configureAwsVpcNetworking(
      props.cluster.vpc,
      props.assignPublicIp,
      props.vpcSubnets,
      securityGroups
    );
  }

  protected configureAwsVpcNetworking(
    vpc: IVpc,
    assignPublicIp?: boolean,
    vpcSubnets?: SubnetSelection,
    securityGroups?: ISecurityGroup[]
  ): FargateAwsVpcConfiguration {
    if (vpcSubnets === undefined) {
      vpcSubnets = assignPublicIp ? { subnetType: SubnetType.PUBLIC } : {};
    }

    if (securityGroups === undefined || securityGroups.length === 0) {
      securityGroups = [new SecurityGroup(this, "SecurityGroup", { vpc })];
    }

    securityGroups.forEach((sg) => {
      this.connections.addSecurityGroup(sg);
    }, this);

    return {
      assignPublicIp: assignPublicIp ? "ENABLED" : "DISABLED",
      subnets: this.cluster.vpc.selectSubnets(vpcSubnets).subnetIds,
      securityGroups: this.connections.securityGroups.map(
        (sg) => sg.securityGroupId
      ),
    };
  }

  public grantRun(grantee: IGrantable): Grant {
    const grant = this.taskDefinition.grantRun(grantee);
    const statement = grant.principalStatements.find((ps) =>
      ps.actions.includes("ecs:RunTask")
    );
    if (statement) {
      statement.addCondition("ArnEquals", {
        "ecs:cluster": this.cluster.clusterArn,
      });
    }
    return grant;
  }
}
