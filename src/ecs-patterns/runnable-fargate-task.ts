import { Stack } from "aws-cdk-lib";
import { IVpc, ISecurityGroup, SubnetSelection } from "aws-cdk-lib/aws-ec2";
import {
  Cluster,
  ICluster,
  AwsLogDriver,
  FargateTaskDefinition,
} from "aws-cdk-lib/aws-ecs";
import {
  FargateServiceBaseProps,
  ApplicationLoadBalancedTaskImageOptions,
} from "aws-cdk-lib/aws-ecs-patterns";
import { Construct } from "constructs";
import { FargateTask } from "../ecs/fargate-task";

/**
 * Interface representing a Fargate task running on an ECS cluster.
 */
export interface IRunnableFargateTask {
  /**
   * The task definition that can be launched.
   */
  readonly taskDefinition: FargateTaskDefinition;
  /**
   * The cluster where this task will launch.
   */
  readonly cluster: ICluster;
  /**
   * The FargateTask.
   */
  readonly task: FargateTask;
}

/**
 * Construction properties for a FargateTask.
 */
export interface RunnableFargateTaskProps extends FargateServiceBaseProps {
  /**
   * The VPC that will hold the Fargate cluster.
   *
   * @default - creates a new VPC with two AZs
   */
  readonly vpc?: IVpc;

  /**
   * The name of the cluster that hosts the task.
   *
   * If a cluster is specified, the vpc construct should be omitted.
   * Alternatively, you can omit both cluster and vpc.
   *
   * @default - create a new cluster; if both cluster and vpc are omitted, a new VPC will be created for you.
   */
  readonly cluster?: ICluster;

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

  /**
   * The properties to define if the construct is to create a TaskDefinition.
   * taskDefinition or image must be defined, but not both.
   *
   * @default - none
   */
  readonly taskImageOptions?: FargateTaskImageOptions;
}

/**
 * The properties for the FargateTask using an image.
 */
export interface FargateTaskImageOptions
  extends ApplicationLoadBalancedTaskImageOptions {}

/**
 * A Fargate task running on an ECS cluster.
 */
export class RunnableFargateTask
  extends Construct
  implements IRunnableFargateTask 
{
  public readonly cluster: ICluster;
  public readonly taskDefinition: FargateTaskDefinition;
  public readonly task: FargateTask;

  /**
   * Creates a new RunnableFargateTask.
   */
  public constructor(
    scope: Construct,
    id: string,
    props: RunnableFargateTaskProps
  ) {
    super(scope, id);

    if (props.taskDefinition && props.taskImageOptions) {
      throw new Error(
        "You must specify either a taskDefinition or an image, not both."
      );
    } else if (props.taskDefinition) {
      this.taskDefinition = props.taskDefinition;
    } else if (props.taskImageOptions) {
      const taskImageOptions = props.taskImageOptions;
      this.taskDefinition = new FargateTaskDefinition(this, "TaskDef", {
        memoryLimitMiB: props.memoryLimitMiB,
        cpu: props.cpu,
        executionRole: taskImageOptions.executionRole,
        taskRole: taskImageOptions.taskRole,
        family: taskImageOptions.family,
        runtimePlatform: props.runtimePlatform,
      });

      // Create log driver if logging is enabled
      const enableLogging = taskImageOptions.enableLogging ?? true;
      const logDriver =
        taskImageOptions.logDriver !== undefined
          ? taskImageOptions.logDriver
          : enableLogging
          ? this.createAWSLogDriver(this.node.id)
          : undefined;

      const containerName = taskImageOptions.containerName || "Task";
      this.taskDefinition.addContainer(containerName, {
        logging: logDriver,
        image: taskImageOptions.image,
        environment: taskImageOptions.environment,
        secrets: taskImageOptions.secrets,
        dockerLabels: taskImageOptions.dockerLabels,
        command: taskImageOptions.command,
        entryPoint: taskImageOptions.entryPoint,
      });
    } else {
      throw new Error("You must specify one of: taskDefinition or image");
    }

    this.cluster = props.cluster || this.getDefaultCluster(this, props.vpc);

    this.task = new FargateTask(this, "Task", {
      cluster: this.cluster,
      taskDefinition: this.taskDefinition,
      securityGroups: props.securityGroups,
      assignPublicIp: props.assignPublicIp,
      vpcSubnets: props.vpcSubnets,
    });
  }

  /**
   * Creates a new AwsLogDriver.
   *
   * Modeled after "aws-cdk-lib/aws-ecs-patterns".
   */
  protected createAWSLogDriver(prefix: string): AwsLogDriver {
    return new AwsLogDriver({ streamPrefix: prefix });
  }

  /**
   * Returns the default cluster.
   *
   * Modeled after "aws-cdk-lib/aws-ecs-patterns".
   */
  protected getDefaultCluster(scope: Construct, vpc?: IVpc): Cluster {
    // Magic string to avoid collision with user-defined constructs.
    const DEFAULT_CLUSTER_ID = `EcsDefaultClusterMnL3mNNYN${
      vpc ? vpc.node.id : ""
    }`;
    const stack = Stack.of(scope);
    return (
      (stack.node.tryFindChild(DEFAULT_CLUSTER_ID) as Cluster) ||
      new Cluster(stack, DEFAULT_CLUSTER_ID, { vpc })
    );
  }
}
