import {
  Connections,
  IConnectable,
  ISecurityGroup,
  SecurityGroup,
  SubnetSelection,
  SubnetType,
} from "aws-cdk-lib/aws-ec2";
import {
  CfnService,
  FargatePlatformVersion,
  FargateTaskDefinition,
  ICluster,
  LaunchType,
  PropagatedTagSource,
} from "aws-cdk-lib/aws-ecs";
import {
  ContainerOverride,
  EcsTask,
  Tag,
  TargetBaseProps,
} from "aws-cdk-lib/aws-events-targets";
import type { Grant, IGrantable, IRole } from "aws-cdk-lib/aws-iam";
import type { TaskStateBaseProps } from "aws-cdk-lib/aws-stepfunctions";
import {
  ContainerOverride as SfnContainerOverride,
  EcsRunTask,
  EcsFargateLaunchTarget,
} from "aws-cdk-lib/aws-stepfunctions-tasks";
import { Construct, IConstruct } from "constructs";

/**
 * The `networkConfiguration.awsvpcConfiguration` values for `ecs.RunTask`.
 */
export interface FargateAwsVpcConfiguration
  extends CfnService.AwsVpcConfigurationProperty {}

/**
 * Properties to create a new State Machine EcsRunTask step.
 */
export interface StateMachineTaskProps extends TaskStateBaseProps {
  /**
   * The revision number of ECS task definition family
   *
   * @default - '$latest'
   */
  readonly revisionNumber?: number;

  /**
   * Container setting overrides
   *
   * Specify the container to use and the overrides to apply.
   *
   * @default - No overrides
   */
  readonly containerOverrides?: SfnContainerOverride[];

  /**
   * Specifies whether to propagate the tags from the task definition to the task.
   * An error will be received if you specify the SERVICE option when running a task.
   *
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-propagateTags
   *
   * @default - No tags are propagated.
   */
  readonly propagatedTagSource?: PropagatedTagSource;

  /**
   * Whether ECS Exec should be enabled
   *
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-enableExecuteCommand
   *
   * @default false
   */
  readonly enableExecuteCommand?: boolean;
}

/**
 * Properties to create a new EventBridge Rule Target.
 */
export interface EventTargetProps extends TargetBaseProps {
  /**
   * How many tasks should be started when this event is triggered
   *
   * @default - 1
   */
  readonly taskCount?: number;

  /**
   * Container setting overrides
   *
   * Key is the name of the container to override, value is the
   * values you want to override.
   */
  readonly containerOverrides?: ContainerOverride[];

  /**
   * Existing IAM role to run the ECS task
   *
   * @default - A new IAM role is created
   */
  readonly role?: IRole;

  /**
   * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated.
   *
   * @default - Tags will not be propagated
   */
  readonly propagateTags?: PropagatedTagSource;

  /**
   * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * @default - No additional tags are applied to the task
   */
  readonly tags?: Tag[];

  /**
   * Whether or not to enable the execute command functionality for the containers in this task.
   * If true, this enables execute command functionality on all containers in the task.
   *
   * @default - false
   */
  readonly enableExecuteCommand?: boolean;

  /**
   * Specifies the launch type on which your task is running. The launch type that you specify here
   * must match one of the launch type (compatibilities) of the target task.
   *
   * @default - 'EC2' if `isEc2Compatible` for the `taskDefinition` is true, otherwise 'FARGATE'
   */
  readonly launchType?: LaunchType;
}

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
   * Create a new EventBridge Rule Target that launches this ECS task.
   *
   * @param props - The properties to create the EcsTask object.
   */
  createRuleTarget(props: EventTargetProps): EcsTask;

  /**
   * Create a new Step Functions task that launches this ECS task.
   *
   * @param id - The construct ID
   * @param props - The properties to create the EcsRunTask object.
   */
  createStateMachineTask(id: string, props: StateMachineTaskProps): EcsRunTask;

  /**
   * Grants permission to invoke ecs:RunTask on this task's cluster.
   *
   * @param grantee - The recipient of the permissions
   */
  grantRun(grantee: IGrantable): Grant;
}

/**
 * Common parameters for Fargate Tasks.
 */
export interface BaseFargateTaskProps {
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
 * Constructor parameters for FargateTask.
 */
export interface FargateTaskProps extends BaseFargateTaskProps {
  /**
   * The name of the cluster that hosts the service.
   */
  readonly cluster: ICluster;

  /**
   * The task definition that can be launched.
   */
  readonly taskDefinition: FargateTaskDefinition;
}

/**
 * An ECS Fargate Task.
 *
 * If `vpcSubnets` is blank but `assignPublicIp` is set, the task will launch
 * in Public subnets, otherwise the first available one of Private, Isolated,
 * Public, in that order.
 */
export class FargateTask extends Construct implements IFargateTask {
  public readonly cluster: ICluster;
  public readonly taskDefinition: FargateTaskDefinition;
  public readonly connections: Connections;
  public readonly awsVpcNetworkConfig: FargateAwsVpcConfiguration;

  private readonly assignPublicIp: boolean;
  private readonly subnetSelection: SubnetSelection;

  /**
   * Creates a new FargateTask.
   */
  public constructor(scope: Construct, id: string, props: FargateTaskProps) {
    super(scope, id);

    let { securityGroups = [], assignPublicIp = false, vpcSubnets } = props;

    this.cluster = props.cluster;
    this.taskDefinition = props.taskDefinition;
    this.assignPublicIp = assignPublicIp;

    if (vpcSubnets === undefined) {
      vpcSubnets = assignPublicIp ? { subnetType: SubnetType.PUBLIC } : {};
    }
    this.subnetSelection = vpcSubnets;

    const vpc = this.cluster.vpc;
    if (securityGroups.length === 0) {
      securityGroups = [new SecurityGroup(this, "SecurityGroup", { vpc })];
    }
    this.connections = new Connections({ securityGroups });

    this.awsVpcNetworkConfig = {
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

  public createRuleTarget(props: EventTargetProps): EcsTask {
    return new EcsTask({
      ...props,
      platformVersion: FargatePlatformVersion.LATEST,
      cluster: this.cluster,
      taskDefinition: this.taskDefinition,
      assignPublicIp: this.assignPublicIp,
      subnetSelection: this.subnetSelection,
      securityGroups: this.connections.securityGroups,
    });
  }

  public createStateMachineTask(
    id: string,
    props: StateMachineTaskProps
  ): EcsRunTask {
    return new EcsRunTask(this, id, {
      ...props,
      launchTarget: new EcsFargateLaunchTarget({
        platformVersion: FargatePlatformVersion.LATEST,
      }),
      cluster: this.cluster,
      taskDefinition: this.taskDefinition,
      assignPublicIp: this.assignPublicIp,
      subnets: this.subnetSelection,
      securityGroups: this.connections.securityGroups,
    });
  }
}
