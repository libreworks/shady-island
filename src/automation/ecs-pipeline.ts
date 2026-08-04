import * as path from "path";
import { Duration } from "aws-cdk-lib";
import {
  Artifact,
  Pipeline,
  PipelineType,
  StageProps,
} from "aws-cdk-lib/aws-codepipeline";
import {
  EcrSourceAction,
  EcsDeployAction,
  LambdaInvokeAction,
} from "aws-cdk-lib/aws-codepipeline-actions";
import type { IRepository } from "aws-cdk-lib/aws-ecr";
import type { IBaseService } from "aws-cdk-lib/aws-ecs";
import { SingletonFunction, Code, Runtime } from "aws-cdk-lib/aws-lambda";
import type { IBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

const HANDLER_PATH = path.join(
  __dirname,
  "..",
  "..",
  "assets",
  "automation",
  "ecs_pipeline_handler"
);

/**
 * Properties for the ContainerImagePipeline constructor.
 */
export interface ContainerImagePipelineProps {
  /**
   * The ECR repository where images will be pushed.
   */
  readonly repository: IRepository;

  /**
   * The ECS service to update when an image is pushed to the ECR repository.
   *
   * @deprecated - Use services instead
   */
  readonly service?: IBaseService;

  /**
   * The services receiving the deployment.
   */
  readonly services?: IBaseService[];

  /**
   * Whether to deploy all services at the same time.
   *
   * @default - true
   */
  readonly parallel?: boolean;

  /**
   * The name of the container in the task definition to update.
   */
  readonly container: string;

  /**
   * The container image tag to observe for changes in the ECR repository.
   *
   * @default - "latest"
   */
  readonly tag?: string;

  /**
   * The pipeline type (V1 or V2).
   *
   * @default - V1
   */
  readonly pipelineType?: PipelineType;

  /**
   * A custom bucket for artifacts.
   *
   * @default - A new bucket will be created
   */
  readonly artifactBucket?: IBucket;

  /**
   * A stage to run immediately before the deployment.
   *
   * This allows you to introduce an approval gate or prerequisite step before
   * the replacement ECS Task launches. For example: a database schema change.
   *
   * This property is a more convenient syntax to:
   *
   * ```typescript
   * const migrateStage = pipeline.addStage({
   *   stageName: "Migrate",
   *   placement: { rightBefore: pipeline.stage("Deploy") },
   * });
   * migrateStage.addAction(
   *   new StepFunctionInvokeAction({
   *     stateMachine: stateMachine,
   *     actionName: "Migrate",
   *     runOrder: 1,
   *   })
   * );
   * ```
   */
  readonly preDeployStage?: StageProps;

  /**
   * A stage to run immediately after the deployment.
   *
   * This allows you to introduce a finalization or verification step after the
   * replacement ECS Task launched. For example: a success SNS message.
   *
   * This property is a more convenient syntax to:
   *
   * ```typescript
   * const migrateStage = pipeline.addStage({
   *   stageName: "Validate",
   *   placement: { rightAfter: pipeline.stage("Deploy") },
   * });
   * migrateStage.addAction(
   *   new StepFunctionInvokeAction({
   *     stateMachine: stateMachine,
   *     actionName: "Validate",
   *     runOrder: 1,
   *   })
   * );
   * ```
   */
  readonly postDeployStage?: StageProps;
}

/**
 * Allows images pushed to an ECR repo to trigger updates to an ECS service.
 *
 * This construct produces a CodePipeline pipeline using the "ECR Source"
 * action, an "ECS Deploy" action, and a custom Lambda handler in between that
 * transforms the JSON from the "Source" action into the JSON needed for the
 * "Deploy" action.
 */
export class ContainerImagePipeline extends Construct {
  /**
   * The CodePipeline pipeline
   */
  public readonly pipeline: Pipeline;

  /**
   * Creates a new ContainerImagePipeline.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   */
  constructor(
    scope: Construct,
    id: string,
    props: ContainerImagePipelineProps
  ) {
    super(scope, id);
    const {
      service,
      services = [],
      container,
      repository,
      tag = "latest",
      parallel = true,
      pipelineType,
      artifactBucket,
    } = props;

    const targets: IBaseService[] = [];
    if (service) {
      targets.push(service);
    }
    targets.push(...services);
    if (targets.length < 1) {
      throw new Error("You must specify at least one target ECS service");
    }

    const transformerFunction = new SingletonFunction(this, "Transformer", {
      uuid: "76208d72-6a58-47de-b611-75e2f58ad601",
      lambdaPurpose: "EcsJsonTransform",
      runtime: Runtime.PYTHON_3_13,
      handler: "index.lambda_handler",
      description:
        "Transforms the imageDetail.json from ECR into imagedefinitions.json for ECS",
      code: Code.fromAsset(HANDLER_PATH),
      timeout: Duration.seconds(60),
    });

    const sourceArtifact = new Artifact();
    const buildArtifact = new Artifact();

    const deployStageActions: EcsDeployAction[] = [];
    if (targets.length === 1) {
      deployStageActions.push(
        new EcsDeployAction({
          actionName: "Update-ECS-Service",
          input: buildArtifact,
          service: targets[0],
        })
      );
    } else {
      for (const [index, svc] of targets.entries()) {
        deployStageActions.push(
          new EcsDeployAction({
            actionName: `Update-ECS-Service-${index + 1}`,
            input: buildArtifact,
            service: svc,
            runOrder: parallel ? 1 : index + 1,
          })
        );
      }
    }

    const stages: StageProps[] = [
      {
        stageName: "Source",
        actions: [
          new EcrSourceAction({
            output: sourceArtifact,
            actionName: "Receive-ECR-Notice",
            imageTag: tag,
            repository,
          }),
        ],
      },
      {
        stageName: "Transform",
        actions: [
          new LambdaInvokeAction({
            userParameters: { OutputContainerName: container },
            actionName: "Produce-imagedefinitions.json",
            lambda: transformerFunction,
            inputs: [sourceArtifact],
            outputs: [buildArtifact],
          }),
        ],
      },
    ];

    if (props.preDeployStage) {
      stages.push(props.preDeployStage);
    }
    stages.push({
      stageName: "Deploy",
      actions: deployStageActions,
    });
    if (props.postDeployStage) {
      stages.push(props.postDeployStage);
    }

    this.pipeline = new Pipeline(this, "Pipeline", {
      crossAccountKeys: false,
      pipelineType,
      artifactBucket,
      stages,
    });
  }
}
