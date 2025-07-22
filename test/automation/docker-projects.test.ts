import { App, CfnResource, RemovalPolicy, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { LinuxBuildImage, WindowsBuildImage } from "aws-cdk-lib/aws-codebuild";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Repository } from "aws-cdk-lib/aws-ecr";
import { parse as parseYaml } from "yaml";
import {
  LinuxDockerBuildProject,
  LinuxDockerManifestProject,
} from "../../src/automation/docker-projects";

describe("LinuxDockerManifestProject", () => {
  let account = "210987654321";
  let region = "us-east-1";
  let app: App;
  let stack: Stack;
  let vpc: Vpc;
  let repository: Repository;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack", { env: { account, region } });
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

  describe("#applyRemovalPolicy", () => {
    test("behaves as expected with no removal policy", () => {
      const obj = new LinuxDockerManifestProject(stack, "Project", {
        repository,
        tagVariableNames: ["DOCKER_TAG_AMD64", "DOCKER_TAG_ARM64"],
        vpc,
      });
      const cfnLogGroup = obj.logGroup.node.defaultChild as CfnResource;
      const cfnProject = obj.project.node.defaultChild as CfnResource;

      expect(cfnLogGroup.cfnOptions.deletionPolicy).toStrictEqual("Retain");
      expect(cfnProject.cfnOptions.deletionPolicy).toBeUndefined();
    });

    test("behaves as expected", () => {
      const removalPolicy = RemovalPolicy.DESTROY;
      const obj = new LinuxDockerManifestProject(stack, "Project", {
        repository,
        tagVariableNames: ["DOCKER_TAG_AMD64", "DOCKER_TAG_ARM64"],
        vpc,
        removalPolicy,
      });
      const cfnLogGroup = obj.logGroup.node.defaultChild as CfnResource;
      const cfnProject = obj.project.node.defaultChild as CfnResource;

      expect(cfnLogGroup.cfnOptions.deletionPolicy).toStrictEqual("Delete");
      expect(cfnProject.cfnOptions.deletionPolicy).toStrictEqual("Delete");
    });
  });

  describe("#constructor", () => {
    test("behaves as expected", () => {
      const obj = new LinuxDockerManifestProject(stack, "Project", {
        repository,
        tagVariableNames: ["DOCKER_TAG_AMD64", "DOCKER_TAG_ARM64"],
        vpc,
      });

      expect(obj.env).toBe(obj.project.env);
      expect(obj.stack).toBe(obj.project.stack);

      const foo = obj.buildSpec.toBuildSpec(obj);
      const buildSpec = parseYaml(foo);

      expect(buildSpec).toStrictEqual({
        version: "0.2",
        env: { shell: "bash" },
        phases: {
          pre_build: {
            commands: [
              'echo "Logging in to Amazon ECR..."',
              'aws ecr get-login-password --region "$AWS_DEFAULT_REGION" | docker login --username AWS --password-stdin "$AWS_ECR_HOSTNAME"',
            ],
          },
          build: {
            commands: [
              'echo "DOCKER_TAG_AMD64: $DOCKER_TAG_AMD64"',
              'echo "DOCKER_TAG_ARM64: $DOCKER_TAG_ARM64"',
              [
                'latest_tag="latest"',
                'if [ -n "$LATEST_TAG" ]; then',
                '  latest_tag="$LATEST_TAG"',
                "fi",
              ].join("\n"),
              [
                'if [ -n "$MANIFEST_CUSTOM_TAG" ]; then',
                '  docker manifest create "$AWS_ECR_URL:$MANIFEST_CUSTOM_TAG" "$AWS_ECR_URL:$DOCKER_TAG_AMD64" "$AWS_ECR_URL:$DOCKER_TAG_ARM64"',
                '  docker manifest inspect "$AWS_ECR_URL:$MANIFEST_CUSTOM_TAG"',
                '  docker manifest push "$AWS_ECR_URL:$MANIFEST_CUSTOM_TAG"',
                "fi",
              ].join("\n"),
              'docker manifest create "$AWS_ECR_URL:$latest_tag" "$AWS_ECR_URL:$DOCKER_TAG_AMD64" "$AWS_ECR_URL:$DOCKER_TAG_ARM64"',
              'docker manifest inspect "$AWS_ECR_URL:$latest_tag"',
              'docker manifest push "$AWS_ECR_URL:$latest_tag"',
            ],
          },
        },
      });
    });

    test("throws exception", () => {
      expect(
        () =>
          new LinuxDockerManifestProject(stack, "Project", {
            repository,
            tagVariableNames: ["DOCKER_TAG_AMD64", "DOCKER_TAG_ARM64"],
            vpc,
            buildImage: WindowsBuildImage.WIN_SERVER_CORE_2019_BASE_3_0,
          })
      ).toThrow({
        name: "ValidationError",
        message: "You must use a Linux-based build image",
      });
    });

    test("synthesizes the template as expected", () => {
      new LinuxDockerManifestProject(stack, "Project", {
        tagVariableNames: ["DOCKER_TAG_LINUX", "DOCKER_TAG_WINDOWS"],
        repository,
        buildImage: LinuxBuildImage.STANDARD_5_0,
      });
      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::Logs::LogGroup", {
        RetentionInDays: 731,
      });
      template.hasResourceProperties("AWS::CodeBuild::Project", {
        Artifacts: { Type: "CODEPIPELINE" },
        Cache: { Type: "NO_CACHE" },
        Description: "Pushes Docker manifest files",
        EncryptionKey: "alias/aws/s3",
        Environment: {
          ComputeType: "BUILD_GENERAL1_SMALL",
          EnvironmentVariables: [
            {
              Name: "AWS_DEFAULT_REGION",
              Type: "PLAINTEXT",
              Value: "us-east-1",
            },
            {
              Name: "AWS_ECR_HOSTNAME",
              Type: "PLAINTEXT",
              Value: "210987654321.dkr.ecr.us-east-1.amazonaws.com",
            },
            {
              Name: "AWS_ECR_URL",
              Type: "PLAINTEXT",
              Value: {
                "Fn::Join": [
                  "",
                  [
                    {
                      "Fn::Select": [
                        4,
                        {
                          "Fn::Split": [
                            ":",
                            { "Fn::GetAtt": ["Repo02AC86CF", "Arn"] },
                          ],
                        },
                      ],
                    },
                    ".dkr.ecr.",
                    {
                      "Fn::Select": [
                        3,
                        {
                          "Fn::Split": [
                            ":",
                            { "Fn::GetAtt": ["Repo02AC86CF", "Arn"] },
                          ],
                        },
                      ],
                    },
                    ".",
                    { Ref: "AWS::URLSuffix" },
                    "/",
                    { Ref: "Repo02AC86CF" },
                  ],
                ],
              },
            },
          ],
          Image: "aws/codebuild/standard:5.0",
          ImagePullCredentialsType: "CODEBUILD",
          PrivilegedMode: true,
          Type: "LINUX_CONTAINER",
        },
        LogsConfig: {
          CloudWatchLogs: {
            GroupName: { Ref: "ProjectLogs0A5582E0" },
            Status: "ENABLED",
          },
        },
        ServiceRole: { "Fn::GetAtt": ["ProjectRole0C1454B5", "Arn"] },
        Source: { Type: "CODEPIPELINE" },
      });
    });
  });
});

describe("LinuxDockerBuildProject", () => {
  let account = "210987654321";
  let region = "us-east-1";
  let app: App;
  let stack: Stack;
  let vpc: Vpc;
  let repository: Repository;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack", { env: { account, region } });
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

  describe("#constructor", () => {
    test("behaves as expected", () => {
      const obj = new LinuxDockerBuildProject(stack, "Project", {
        repository,
        vpc,
        dockerfile: "foo.Dockerfile",
        testCommands: ["foo", "bar"],
      });
      const foo = obj.buildSpec.toBuildSpec(obj);
      const buildSpec = parseYaml(foo);

      expect(buildSpec).toStrictEqual({
        version: "0.2",
        env: { shell: "bash" },
        phases: {
          pre_build: {
            commands: [
              'echo "Logging in to Amazon ECR..."',
              'aws ecr get-login-password --region "$AWS_DEFAULT_REGION" | docker login --username AWS --password-stdin "$AWS_ECR_HOSTNAME"',
            ],
          },
          build: {
            commands: [
              'echo "Building the Docker image..."',
              'if [ -z "$IMAGE_TAG" ]; then IMAGE_TAG="$CODEBUILD_BUILD_NUMBER"; fi',
              [
                "build_args=()",
                'if [ -n "$BUILD_ARGS" ]; then for row in $(echo $BUILD_ARGS | jq -r .[]); do build_args+=("$row"); done; fi',
                'build_args_args=""',
                'for build_arg in "${build_args[@]}"; do build_args_args="--build-arg $build_arg $build_args_args"; done',
              ].join("\n"),
              [
                'labels=("org.opencontainers.image.created=$(date --iso-8601=seconds)")',
                'if [ -n "$IMAGE_LABELS" ]; then for row in $(echo $IMAGE_LABELS | jq -r .[]); do labels+=("$row"); done; fi',
                'label_args=""',
                'for label in "${labels[@]}"; do label_args="--label $label $label_args"; done',
              ].join("\n"),
              `echo Build command: docker build $label_args $build_args_args -t "$AWS_ECR_URL:$IMAGE_TAG" -f foo.Dockerfile "."`,
              'docker build $label_args $build_args_args -t "$AWS_ECR_URL:$IMAGE_TAG" -f foo.Dockerfile "."',
              'docker inspect "$AWS_ECR_URL:$IMAGE_TAG"',
              "foo",
              "bar",
            ],
          },
          post_build: {
            commands: [
              'if [ "$CODEBUILD_BUILD_SUCCEEDING" == "0" ]; then exit 1; fi',
              'echo "Pushing the Docker image..."',
              'docker push "$AWS_ECR_URL:$IMAGE_TAG"',
              'docker tag "$AWS_ECR_URL:$IMAGE_TAG" $AWS_ECR_URL:latest',
              "docker push $AWS_ECR_URL:latest",
            ],
          },
        },
      });
    });

    test("behaves as expected with cache enabled and push latest false", () => {
      const obj = new LinuxDockerBuildProject(stack, "Project", {
        repository,
        vpc,
        dockerfile: "foo.Dockerfile",
        enableCache: true,
        pushLatest: false,
      });
      const foo = obj.buildSpec.toBuildSpec(obj);
      const buildSpec = parseYaml(foo);

      expect(buildSpec).toStrictEqual({
        version: "0.2",
        env: { shell: "bash" },
        phases: {
          pre_build: {
            commands: [
              'echo "Logging in to Amazon ECR..."',
              'aws ecr get-login-password --region "$AWS_DEFAULT_REGION" | docker login --username AWS --password-stdin "$AWS_ECR_HOSTNAME"',
            ],
          },
          build: {
            commands: [
              'echo "Building the Docker image..."',
              'if [ -z "$IMAGE_TAG" ]; then IMAGE_TAG="$CODEBUILD_BUILD_NUMBER"; fi',
              [
                "build_args=()",
                'if [ -n "$BUILD_ARGS" ]; then for row in $(echo $BUILD_ARGS | jq -r .[]); do build_args+=("$row"); done; fi',
                'build_args_args=""',
                'for build_arg in "${build_args[@]}"; do build_args_args="--build-arg $build_arg $build_args_args"; done',
              ].join("\n"),
              [
                'labels=("org.opencontainers.image.created=$(date --iso-8601=seconds)")',
                'if [ -n "$IMAGE_LABELS" ]; then for row in $(echo $IMAGE_LABELS | jq -r .[]); do labels+=("$row"); done; fi',
                'label_args=""',
                'for label in "${labels[@]}"; do label_args="--label $label $label_args"; done',
              ].join("\n"),
              "docker pull $AWS_ECR_URL:latest || true",
              `echo Build command: docker build $label_args $build_args_args -t "$AWS_ECR_URL:$IMAGE_TAG" -f foo.Dockerfile --cache-from $AWS_ECR_URL:latest "."`,
              'docker build $label_args $build_args_args -t "$AWS_ECR_URL:$IMAGE_TAG" -f foo.Dockerfile --cache-from $AWS_ECR_URL:latest "."',
              'docker inspect "$AWS_ECR_URL:$IMAGE_TAG"',
            ],
          },
          post_build: {
            commands: [
              'if [ "$CODEBUILD_BUILD_SUCCEEDING" == "0" ]; then exit 1; fi',
              'echo "Pushing the Docker image..."',
              'docker push "$AWS_ECR_URL:$IMAGE_TAG"',
            ],
          },
        },
      });
    });

    test("synthesizes the template as expected", () => {
      new LinuxDockerBuildProject(stack, "Project", {
        repository,
        vpc,
      });
      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::Logs::LogGroup", {
        RetentionInDays: 731,
      });
      template.hasResourceProperties("AWS::CodeBuild::Project", {
        Artifacts: { Type: "CODEPIPELINE" },
        Cache: { Type: "NO_CACHE" },
        Description: "Builds and pushes a Linux Docker container",
        EncryptionKey: "alias/aws/s3",
        Environment: {
          ComputeType: "BUILD_GENERAL1_SMALL",
          EnvironmentVariables: [
            {
              Name: "AWS_DEFAULT_REGION",
              Type: "PLAINTEXT",
              Value: "us-east-1",
            },
            {
              Name: "AWS_ECR_HOSTNAME",
              Type: "PLAINTEXT",
              Value: "210987654321.dkr.ecr.us-east-1.amazonaws.com",
            },
            {
              Name: "AWS_ECR_URL",
              Type: "PLAINTEXT",
              Value: {
                "Fn::Join": [
                  "",
                  [
                    {
                      "Fn::Select": [
                        4,
                        {
                          "Fn::Split": [
                            ":",
                            { "Fn::GetAtt": ["Repo02AC86CF", "Arn"] },
                          ],
                        },
                      ],
                    },
                    ".dkr.ecr.",
                    {
                      "Fn::Select": [
                        3,
                        {
                          "Fn::Split": [
                            ":",
                            { "Fn::GetAtt": ["Repo02AC86CF", "Arn"] },
                          ],
                        },
                      ],
                    },
                    ".",
                    { Ref: "AWS::URLSuffix" },
                    "/",
                    { Ref: "Repo02AC86CF" },
                  ],
                ],
              },
            },
          ],
          Image: "aws/codebuild/standard:7.0",
          ImagePullCredentialsType: "CODEBUILD",
          PrivilegedMode: true,
          Type: "LINUX_CONTAINER",
        },
        LogsConfig: {
          CloudWatchLogs: {
            GroupName: { Ref: "ProjectLogs0A5582E0" },
            Status: "ENABLED",
          },
        },
        ServiceRole: { "Fn::GetAtt": ["ProjectRole0C1454B5", "Arn"] },
        Source: { Type: "CODEPIPELINE" },
        VpcConfig: {
          SecurityGroupIds: [
            { "Fn::GetAtt": ["ProjectSecurityGroup819C04FA", "GroupId"] },
          ],
          Subnets: [
            { Ref: "VpcPrivateSubnet1Subnet536B997A" },
            { Ref: "VpcPrivateSubnet2Subnet3788AAA1" },
            { Ref: "VpcPrivateSubnet3SubnetF258B56E" },
          ],
          VpcId: {
            Ref: "Vpc8378EB38",
          },
        },
      });
    });
  });
});
