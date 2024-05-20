import { awscdk, javascript } from "projen";

const handlerLibs = ["@libreworks/db-provision-pgsql", "mysql2", "pg"];

const project = new awscdk.AwsCdkConstructLibrary({
  name: "shady-island",
  projenrcTs: true,

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

  cdkVersion: "2.108.0",
  majorVersion: 0,
  jsiiVersion: "~5.3.0",

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

  devDeps: [
    "@types/aws-lambda",
    "@types/pg",
    "@aws-sdk/client-secrets-manager",
    ...handlerLibs,
  ],
});

project.package.file.addOverride("bundledDeps", handlerLibs);

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
    target: "node20",
    platform: "node",
    externals: ["pg-native", "@aws-sdk/client-secrets-manager"],
    watchTask: false,
  });
}

project.synth();
