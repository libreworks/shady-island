import { awscdk, github, javascript } from "projen";

const awsSdkLibs = [
  "@aws-sdk/client-lambda",
  "@aws-sdk/client-secrets-manager",
];
const handlerLibs = ["@libreworks/db-provision-pgsql", "mysql2", "pg"];

const project = new awscdk.AwsCdkConstructLibrary({
  name: "shady-island",
  projenrcTs: true,
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,

  description: "Utilities and constructs for the AWS CDK",
  author: "LibreWorks Contributors",
  authorAddress: "https://github.com/libreworks/shady-island/contributors",
  authorOrganization: true,

  repositoryUrl: "https://github.com:libreworks/shady-island.git",
  homepage: "https://libreworks.github.io/shady-island/",
  bugsUrl: "https://github.com/libreworks/shady-island/issues",

  prettier: true,
  compat: true,
  lambdaAutoDiscover: false,
  codeCov: true,

  docgen: true,
  docgenFilePath: "docs/api/API.md",

  defaultReleaseBranch: "main",
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp({}),
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ["feat", "fix", "chore", "docs"],
      },
    },
  },

  tsconfig: {
    compilerOptions: {
      lib: ["ES2022"],
      target: "es2022",
    },
  },

  cdkVersion: "2.224.0",
  majorVersion: 0,
  jsiiVersion: "~5.9.0",

  autoApproveOptions: {
    // Anyone with write access to this repository can have auto-approval.
    allowedUsernames: [],
  },
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ["auto-approve"],
      schedule: javascript.UpgradeDependenciesSchedule.WEEKLY,
    },
  },

  npmTrustedPublishing: true,
  publishToPypi: {
    distName: "shady-island",
    module: "shady_island",
  },

  catalog: { announce: true },

  devDeps: [
    "@types/aws-lambda",
    "@types/pg",
    "yaml",
    ...awsSdkLibs,
    ...handlerLibs,
  ],

  workflowNodeVersion: "24",
  workflowPackageCache: true,
});

const docgenTask = project.tasks.tryFind("docgen");
if (docgenTask) {
  docgenTask.reset(
    "jsii-docgen .jsii -o docs/api/README.md --split-by-submodule"
  );
}

const pythonHandlersTask = project.addTask("python-handlers", {
  steps: [
    { exec: "mkdir -p assets/automation" },
    { exec: "rm -rf assets/automation/ecs_pipeline_handler" },
    { exec: "cp -r src/automation/ecs_pipeline_handler assets/automation/" },
  ],
});
project.projectBuild.preCompileTask.spawn(pythonHandlersTask);

project.package.addField("bundledDeps", handlerLibs);

// All of the AWS Lambda handlers.
project.bundler.addBundle("src/vpc/assign-on-launch.handler.js", {
  target: "node16",
  platform: "node",
  externals: ["aws-sdk"],
  watchTask: false,
});
const handlers = [
  "./src/automation/function-code-updater.handler",
  "./src/rds/triggers/mysql.handler",
  "./src/rds/triggers/pgsql.handler",
];
for (const handler of handlers) {
  project.bundler.addBundle(handler, {
    target: "node24",
    platform: "node",
    externals: ["pg-native", ...awsSdkLibs],
    watchTask: false,
  });
}

project.synth();
