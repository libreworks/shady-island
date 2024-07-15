import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Repository } from "aws-cdk-lib/aws-ecr";
import {
  Cluster,
  FargateService,
  FargateTaskDefinition,
  ContainerImage,
} from "aws-cdk-lib/aws-ecs";
import { ContainerImagePipeline } from "../../src/automation/ecs-pipeline";

describe("ContainerImagePipeline", () => {
  let app: App;
  let stack: Stack;
  let vpc: Vpc;
  let repository: Repository;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack");
    vpc = new Vpc(stack, "Vpc", {});
    repository = new Repository(stack, "Repo");
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
    // @ts-ignore: TS2322
    vpc = undefined;
    // @ts-ignore: TS2322
    repository = undefined;
  });

  test("synthesizes the template as expected", () => {
    const cluster = new Cluster(stack, "Cluster", {
      vpc,
      enableFargateCapacityProviders: true,
    });
    const taskDefinition = new FargateTaskDefinition(stack, "TaskDef", {});
    const container = "Foo";
    taskDefinition.addContainer(container, {
      image: ContainerImage.fromRegistry("node:20"),
    });
    const service = new FargateService(stack, "Service", {
      cluster,
      taskDefinition,
    });

    new ContainerImagePipeline(stack, "Deploy", {
      repository,
      service,
      container,
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties("AWS::CodePipeline::Pipeline", {
      Stages: [
        {
          Actions: [
            {
              ActionTypeId: {
                Category: "Source",
                Owner: "AWS",
                Provider: "ECR",
                Version: "1",
              },
              Configuration: {
                RepositoryName: { Ref: "Repo02AC86CF" },
                ImageTag: "latest",
              },
              Name: "Receive-ECR-Notice",
              OutputArtifacts: [{ Name: "Artifact_Source_Receive-ECR-Notice" }],
              RoleArn: {
                "Fn::GetAtt": [
                  "DeployPipelineSourceReceiveECRNoticeCodePipelineActionRole1BE8D18F",
                  "Arn",
                ],
              },
              RunOrder: 1,
            },
          ],
          Name: "Source",
        },
        {
          Actions: [
            {
              ActionTypeId: {
                Category: "Invoke",
                Owner: "AWS",
                Provider: "Lambda",
                Version: "1",
              },
              Configuration: {
                FunctionName: {
                  Ref: "EcsJsonTransform76208d726a5847deb61175e2f58ad6019D3A8F4F",
                },
                UserParameters: `{"OutputContainerName":"${container}"}`,
              },
              InputArtifacts: [{ Name: "Artifact_Source_Receive-ECR-Notice" }],
              Name: "Produce-imagedefinitions.json",
              OutputArtifacts: [
                { Name: "Artifact_Transform_Produce-imagedefinitionsjson" },
              ],
              RoleArn: {
                "Fn::GetAtt": [
                  "DeployPipelineTransformProduceimagedefinitionsjsonCodePipelineActionRoleF90EEABB",
                  "Arn",
                ],
              },
              RunOrder: 1,
            },
          ],
          Name: "Transform",
        },
        {
          Actions: [
            {
              ActionTypeId: {
                Category: "Deploy",
                Owner: "AWS",
                Provider: "ECS",
                Version: "1",
              },
              Configuration: {
                ClusterName: { Ref: "ClusterEB0386A7" },
                ServiceName: { "Fn::GetAtt": ["ServiceD69D759B", "Name"] },
              },
              InputArtifacts: [
                { Name: "Artifact_Transform_Produce-imagedefinitionsjson" },
              ],
              Name: "Update-ECS-Service",
              RoleArn: {
                "Fn::GetAtt": [
                  "DeployPipelineDeployUpdateECSServiceCodePipelineActionRole222C1411",
                  "Arn",
                ],
              },
              RunOrder: 1,
            },
          ],
          Name: "Deploy",
        },
      ],
    });
    template.hasResourceProperties("AWS::Lambda::Function", {
      Role: {
        "Fn::GetAtt": [
          "EcsJsonTransform76208d726a5847deb61175e2f58ad601ServiceRoleA8D909D4",
          "Arn",
        ],
      },
      Description:
        "Transforms the imageDetail.json from ECR into imagedefinitions.json for ECS",
      Handler: "index.lambda_handler",
      Runtime: "python3.12",
      Timeout: 60,
    });
  });

  test("synthesizes the template as expected with two pipelines", () => {
    const cluster = new Cluster(stack, "Cluster", {
      vpc,
      enableFargateCapacityProviders: true,
    });
    const taskDefinition = new FargateTaskDefinition(stack, "TaskDef", {});
    const container1 = "Foo";
    const container2 = "Bar";
    taskDefinition.addContainer(container1, {
      image: ContainerImage.fromRegistry("node:20"),
    });
    taskDefinition.addContainer(container2, {
      image: ContainerImage.fromRegistry("node:20"),
    });
    const service = new FargateService(stack, "Service", {
      cluster,
      taskDefinition,
    });

    new ContainerImagePipeline(stack, "DeployOne", {
      repository,
      service,
      container: container1,
    });
    new ContainerImagePipeline(stack, "DeployTwo", {
      repository,
      service,
      container: container2,
    });

    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::CodePipeline::Pipeline", 2);
    template.resourceCountIs("AWS::Lambda::Function", 1);
  });
});
