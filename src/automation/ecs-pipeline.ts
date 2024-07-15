import * as path from "path";
import { Duration } from "aws-cdk-lib";
import { Artifact, Pipeline, PipelineType } from "aws-cdk-lib/aws-codepipeline";
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

const HANDLER_PATH = path.join(__dirname, "ecs_pipeline_handler");

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
   */
  readonly service: IBaseService;

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
      container,
      repository,
      tag = "latest",
      pipelineType,
      artifactBucket,
    } = props;

    const transformerFunction = new SingletonFunction(this, "Transformer", {
      uuid: "76208d72-6a58-47de-b611-75e2f58ad601",
      lambdaPurpose: "EcsJsonTransform",
      runtime: Runtime.PYTHON_3_12,
      handler: "index.lambda_handler",
      description:
        "Transforms the imageDetail.json from ECR into imagedefinitions.json for ECS",
      code: Code.fromAsset(HANDLER_PATH),
      timeout: Duration.seconds(60),
    });

    const sourceArtifact = new Artifact();
    const buildArtifact = new Artifact();

    this.pipeline = new Pipeline(this, "Pipeline", {
      crossAccountKeys: false,
      pipelineType,
      artifactBucket,
      stages: [
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
        {
          stageName: "Deploy",
          actions: [
            new EcsDeployAction({
              actionName: "Update-ECS-Service",
              input: buildArtifact,
              service: service,
            }),
          ],
        },
      ],
    });
  }
}
