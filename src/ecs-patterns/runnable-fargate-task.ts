import { Stack } from "aws-cdk-lib";
import type { IVpc } from "aws-cdk-lib/aws-ec2";
import {
  AwsLogDriver,
  Cluster,
  FargateTaskDefinition,
  ICluster,
} from "aws-cdk-lib/aws-ecs";
import {
  FargateServiceBaseProps,
  ApplicationLoadBalancedTaskImageOptions,
} from "aws-cdk-lib/aws-ecs-patterns";
import { Construct, IConstruct } from "constructs";
import { IFargateTask, FargateTask, BaseFargateTaskProps } from "../ecs";

/**
 * The properties for the FargateTask using an image.
 */
export interface FargateTaskImageOptions
  extends ApplicationLoadBalancedTaskImageOptions {}

/**
 * Interface for RunnableFargateTask.
 */
export interface IRunnableFargateTask extends IConstruct {
  /**
   * The FargateTask in this construct.
   */
  readonly task: IFargateTask;
  /**
   * The FargateTaskDefinition in this construct.
   */
  readonly taskDefinition: FargateTaskDefinition;
}

/**
 * Constructor properties for RunnableFargateTask.
 */
export interface RunnableFargateTaskProps
  extends BaseFargateTaskProps,
    FargateServiceBaseProps {
  /**
   * The cluster that hosts the service.
   *
   * If a cluster is specified, the vpc construct should be omitted. Alternatively, you can omit both cluster and vpc.
   *
   * @default - create a new cluster; if both cluster and vpc are omitted, a new VPC will be created for you.
   */
  readonly cluster?: ICluster;

  /**
   * The VPC where the container instances will be launched or the elastic network interfaces (ENIs) will be deployed.
   *
   * If a vpc is specified, the cluster construct should be omitted. Alternatively, you can omit both vpc and cluster.
   *
   * @default - uses the VPC defined in the cluster or creates a new VPC.
   */
  readonly vpc?: IVpc;

  /**
   * The properties to define if the construct is to create a TaskDefinition.
   * taskDefinition or image must be defined, but not both.
   *
   * @default - none
   */
  readonly taskImageOptions?: FargateTaskImageOptions;
}

/**
 * An RunnableFargateTask construct.
 */
export class RunnableFargateTask
  extends Construct
  implements IRunnableFargateTask
{
  public readonly task: IFargateTask;
  public readonly taskDefinition: FargateTaskDefinition;

  /**
   * Creates a new RunnableFargateTask.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
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

    const cluster = props.cluster || this.getDefaultCluster(this, props.vpc);

    this.task = new FargateTask(this, "Task", {
      assignPublicIp: props.assignPublicIp,
      cluster,
      securityGroups: props.securityGroups,
      taskDefinition: this.taskDefinition,
      vpcSubnets: props.vpcSubnets,
    });
  }

  /**
   * Creates a new AwsLogDriver.
   *
   * Modeled after "aws-cdk-lib/aws-ecs".
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
