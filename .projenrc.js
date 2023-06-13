const { awscdk, javascript, ProjectType } = require("projen");

const project = new awscdk.AwsCdkConstructLibrary({
  name: "shady-island",
  projectType: ProjectType.LIB,
  description: "Utilities and constructs for the AWS CDK",
  authorName: "LibreWorks Contributors",
  authorUrl: "https://github.com/libreworks/shady-island/contributors",
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
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ["feat", "fix", "chore", "docs"],
      },
    },
  },

  cdkVersion: "2.57.0",
  majorVersion: 0,

  projenTokenSecret: "PROJEN_GITHUB_TOKEN",
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

  publishToPypi: {
    distName: "shady-island",
    module: "shady_island",
  },

  catalog: { announce: true },

  // deps: [],                /* Runtime dependencies of this module. */
  devDeps: [
    "@types/aws-lambda",
    "@types/pg",
    "@aws-sdk/client-secrets-manager",
  ],
  bundledDeps: [
    "pg",
    "mysql2",
    "@middy/core@^4.0.0",
    "@middy/error-logger@^4.0.0",
    "@middy/secrets-manager@^4.0.0",
  ],
});

// All of the AWS Lambda handlers.
project.bundler.addBundle("src/vpc/assign-on-launch.handler.js", {
  target: "node16",
  platform: "node",
  externals: ["aws-sdk"],
  watchTask: false,
});
const handlers = [
  "./src/rds/triggers/mysql.handler",
  "./src/rds/triggers/pgsql.handler",
];
for (const handler of handlers) {
  project.bundler.addBundle(handler, {
    target: "node18",
    platform: "node",
    externals: ["pg-native", "@aws-sdk/client-secrets-manager"],
    watchTask: false,
  });
}

project.synth();
