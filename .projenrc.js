const { awscdk, ProjectType } = require("projen");

const project = new awscdk.AwsCdkConstructLibrary({
  name: "shady-island",
  projectType: ProjectType.LIB,
  description: "Utilities and constructs for the AWS CDK",
  authorName: "LibreWorks Contributors",
  authorUrl: "https://github.com/libreworks/shady-island/contributors",
  authorOrganization: true,

  repositoryUrl: "git@github.com:libreworks/shady-island.git",
  homepage: "https://github.com/libreworks/shady-island",
  bugsUrl: "https://github.com/libreworks/shady-island/issues",

  prettier: true,
  compat: true,
  lambdaAutoDiscover: false,
  docgen: true,
  codeCov: true,
  publishDryRun: true,

  defaultReleaseBranch: "main",
  stability: "experimental",
  cdkVersion: "2.1.0",
  majorVersion: 0,
  prerelease: "alpha",

  autoApproveOptions: {},
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ["auto-approve"],
    },
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
});

project.synth();
