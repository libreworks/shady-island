import { IResource, RemovalPolicy } from "aws-cdk-lib";
import {
  BuildEnvironment,
  BuildEnvironmentVariable,
  BuildSpec,
  ComputeType,
  IBuildImage,
  PipelineProject,
} from "aws-cdk-lib/aws-codebuild";
import { ISecurityGroup, IVpc, SubnetSelection } from "aws-cdk-lib/aws-ec2";
import { IRepository } from "aws-cdk-lib/aws-ecr";
import { LogGroup, RetentionDays } from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";

/**
 * Common Docker build properties.
 */
export interface CommonDockerProps {
  /**
   * The ECR repository where images are pushed.
   */
  readonly repository: IRepository;

  /**
   * A description of this CodeBuild project.
   */
  readonly description?: string;

  /**
   * VPC network to place codebuild network interfaces.
   */
  readonly vpc?: IVpc;

  /**
   * Where to place the network interfaces within the VPC.
   */
  readonly subnetSelection?: SubnetSelection;

  /**
   * Security groups to associate with the project's network interfaces.
   */
  readonly securityGroups?: ISecurityGroup[];

  /**
   * The removal policy for this project and its logs.
   *
   * @default - RemovalPolicy.DESTROY
   */
  readonly removalPolicy?: RemovalPolicy;

  /**
   * The duration to retain log entries.
   *
   * @default - RetentionDays.THREE_MONTHS
   */
  readonly logRetention?: RetentionDays;
}

/**
 * Constructor properties for BaseDockerProject.
 */
export interface BaseDockerProjectProps extends CommonDockerProps {
  /**
   * Filename or contents of buildspec in JSON format.
   */
  readonly buildSpec: BuildSpec;

  /**
   * Build environment to use for the build.
   */
  readonly buildEnvironment: BuildEnvironment;
}

/**
 * The base for Linux-based Docker build projects.
 */
export class BaseDockerProject extends Construct implements IResource {
  /**
   * The log group.
   */
  public readonly logGroup: LogGroup;

  /**
   * The CodeBuild project.
   */
  public readonly project: PipelineProject;

  /**
   * The CodeBuild build spec supplied.
   */
  public readonly buildSpec: BuildSpec;

  /**
   * Creates a new BaseDockerProject.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   */
  public constructor(
    scope: Construct,
    id: string,
    props: BaseDockerProjectProps
  ) {
    super(scope, id);

    const {
      repository,
      removalPolicy = RemovalPolicy.DESTROY,
      logRetention,
    } = props;

    this.buildSpec = props.buildSpec;

    this.logGroup = new LogGroup(this, "Logs", { retention: logRetention });

    if (props.buildEnvironment.buildImage) {
      if (
        /\b(windows|macos)\b/.test(props.buildEnvironment.buildImage.imageId)
      ) {
        throw new Error("You must use a Linux-based build image");
      }
    }

    const repoEnv = repository.env;
    const projectVariables: Record<string, BuildEnvironmentVariable> = {
      AWS_DEFAULT_REGION: { value: repoEnv.region },
      AWS_ECR_HOSTNAME: {
        value: `${repoEnv.account}.dkr.ecr.${repoEnv.region}.amazonaws.com`,
      },
      AWS_ECR_URL: { value: repository.repositoryUri },
    };

    this.project = new PipelineProject(this, "Project", {
      description: props.description,
      environment: props.buildEnvironment,
      environmentVariables: projectVariables,
      buildSpec: this.buildSpec,
      vpc: props.vpc,
      subnetSelection: props.subnetSelection,
      securityGroups: props.securityGroups,
      logging: { cloudWatch: { logGroup: this.logGroup } },
    });

    repository.grantPullPush(this.project);

    if (removalPolicy) {
      this.applyRemovalPolicy(removalPolicy);
    }
  }

  public get stack() {
    return this.project.stack;
  }

  public get env() {
    return this.project.env;
  }

  public applyRemovalPolicy(policy: RemovalPolicy) {
    this.project.applyRemovalPolicy(policy);
    this.logGroup.applyRemovalPolicy(policy);
  }
}

/**
 * Constructor properties for LinuxDockerBuildProject.
 */
export interface LinuxDockerBuildProjectProps extends CommonDockerProps {
  /**
   * The filename of the Dockerfile.
   *
   * @default - Dockerfile
   */
  readonly dockerfile?: string;

  /**
   * The build context directory.
   *
   * @default - The current directory (.)
   */
  readonly buildDirectory?: string;

  /**
   * Whether to enable build caching.
   *
   * @default - false
   */
  readonly enableCache?: boolean;

  /**
   * Commands used to test the image once built.
   */
  readonly testCommands?: string[];

  /**
   * Whether to push a "latest" tag.
   *
   * @default - true
   */
  readonly pushLatest?: boolean;

  /**
   * The CodeBuild build image to use.
   *
   * @default - LinuxBuildImage.STANDARD_7_0
   */
  readonly buildImage?: IBuildImage;

  /**
   * The type of compute to use for this build.
   *
   * @default - ComputeType.SMALL
   */
  readonly computeType?: ComputeType;
}

/**
 * Sets up a standardized Docker build project.
 *
 * This project accepts the following optional environment variables:
 *
 * - IMAGE_LABELS: JSON-formatted object of container labels and their values.
 * - BUILD_ARGS: JSON-formatted object of build arguments and their values.
 * - IMAGE_TAG: Optional. The image tag (e.g. Git commit ID) (default: build
 *   number).
 */
export class LinuxDockerBuildProject extends BaseDockerProject {
  /**
   * Creates a new LinuxDockerBuildProject.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   */
  public constructor(
    scope: Construct,
    id: string,
    props: LinuxDockerBuildProjectProps
  ) {
    const {
      dockerfile = "Dockerfile",
      buildDirectory = ".",
      enableCache = false,
      testCommands = [],
      pushLatest = true,
    } = props;

    const buildCommands = [
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
    ];
    const buildArguments = [
      "$label_args",
      "$build_args_args",
      '-t "$AWS_ECR_URL:$IMAGE_TAG"',
      `-f ${dockerfile}`,
    ];
    if (enableCache) {
      buildArguments.push("--cache-from $AWS_ECR_URL:latest");
      buildCommands.push("docker pull $AWS_ECR_URL:latest || true");
    }
    const buildCommand = [
      "docker",
      "build",
      ...buildArguments,
      `"${buildDirectory}"`,
    ].join(" ");
    buildCommands.push(
      `echo Build command: ${buildCommand}`,
      buildCommand,
      'docker inspect "$AWS_ECR_URL:$IMAGE_TAG"'
    );
    if (testCommands.length > 0) {
      buildCommands.push(...testCommands);
    }

    const postBuildCommands = [
      'if [ "$CODEBUILD_BUILD_SUCCEEDING" == "0" ]; then exit 1; fi',
      'echo "Pushing the Docker image..."',
      'docker push "$AWS_ECR_URL:$IMAGE_TAG"',
    ];
    if (pushLatest) {
      postBuildCommands.push(
        'docker tag "$AWS_ECR_URL:$IMAGE_TAG" $AWS_ECR_URL:latest',
        "docker push $AWS_ECR_URL:latest"
      );
    }

    const buildSpec = BuildSpec.fromObjectToYaml({
      version: "0.2",
      env: {
        shell: "bash",
      },
      phases: {
        pre_build: {
          commands: [
            'echo "Logging in to Amazon ECR..."',
            [
              'aws ecr get-login-password --region "$AWS_DEFAULT_REGION"',
              'docker login --username AWS --password-stdin "$AWS_ECR_HOSTNAME"',
            ].join(" | "),
          ],
        },
        build: {
          commands: buildCommands,
        },
        post_build: {
          commands: postBuildCommands,
        },
      },
    });

    super(scope, id, {
      repository: props.repository,
      buildSpec,
      description:
        props.description ?? "Builds and pushes a Linux Docker container",
      buildEnvironment: {
        buildImage: props.buildImage,
        computeType: props.computeType,
        privileged: true,
      },
      vpc: props.vpc,
      subnetSelection: props.subnetSelection,
      securityGroups: props.securityGroups,
      removalPolicy: props.removalPolicy,
    });
  }
}

/**
 * Constructor properties for LinuxDockerManifestProject.
 */
export interface LinuxDockerManifestProjectProps extends CommonDockerProps {
  /**
   * The names of environment variables that contain the image hashes to add.
   */
  readonly tagVariableNames: string[];

  /**
   * The CodeBuild build image to use.
   *
   * @default - LinuxBuildImage.STANDARD_7_0
   */
  readonly buildImage?: IBuildImage;

  /**
   * The type of compute to use for this build.
   *
   * @default - ComputeType.SMALL
   */
  readonly computeType?: ComputeType;
}

/**
 * Sets up a standardized Docker manifest build project.
 *
 * This project accepts the following variables:
 *
 * - LATEST_TAG: Optional. The tag to push (default: "latest").
 * - MANIFEST_CUSTOM_TAG: Optional. The tag to push, in addition to $LATEST_TAG.
 */
export class LinuxDockerManifestProject extends BaseDockerProject {
  /**
   * Creates a new LinuxDockerManifestProject.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   */
  public constructor(
    scope: Construct,
    id: string,
    props: LinuxDockerManifestProjectProps
  ) {
    const { tagVariableNames } = props;
    const archTags = tagVariableNames.map((x) => `"$AWS_ECR_URL:$${x}"`);
    const buildCommands = [
      ...tagVariableNames.map((x) => `echo "${x}: $${x}"`),
      [
        'latest_tag="latest"',
        'if [ -n "$LATEST_TAG" ]; then',
        '  latest_tag="$LATEST_TAG"',
        "fi",
      ].join("\n"),
      [
        'if [ -n "$MANIFEST_CUSTOM_TAG" ]; then',
        [
          '  docker manifest create "$AWS_ECR_URL:$MANIFEST_CUSTOM_TAG"',
          ...archTags,
        ].join(" "),
        '  docker manifest inspect "$AWS_ECR_URL:$MANIFEST_CUSTOM_TAG"',
        '  docker manifest push "$AWS_ECR_URL:$MANIFEST_CUSTOM_TAG"',
        "fi",
      ].join("\n"),
      ['docker manifest create "$AWS_ECR_URL:$latest_tag"', ...archTags].join(
        " "
      ),
      'docker manifest inspect "$AWS_ECR_URL:$latest_tag"',
      'docker manifest push "$AWS_ECR_URL:$latest_tag"',
    ];

    const buildSpec = BuildSpec.fromObjectToYaml({
      version: "0.2",
      env: { shell: "bash" },
      phases: {
        pre_build: {
          commands: [
            'echo "Logging in to Amazon ECR..."',
            [
              'aws ecr get-login-password --region "$AWS_DEFAULT_REGION"',
              'docker login --username AWS --password-stdin "$AWS_ECR_HOSTNAME"',
            ].join(" | "),
          ],
        },
        build: {
          commands: buildCommands,
        },
      },
    });

    super(scope, id, {
      repository: props.repository,
      buildSpec,
      description: props.description ?? "Pushes Docker manifest files",
      buildEnvironment: {
        buildImage: props.buildImage,
        computeType: props.computeType,
        privileged: true,
      },
      vpc: props.vpc,
      subnetSelection: props.subnetSelection,
      securityGroups: props.securityGroups,
    });
  }
}
