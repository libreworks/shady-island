const { awscdk, ProjectType } = require("projen");

const project = new awscdk.AwsCdkConstructLibrary({
  name: "shady-island",
  projectType: ProjectType.LIB,
  description: "Utilities and constructs for the AWS CDK",
  authorName: "LibreWorks Contributors",
  authorUrl: "https://github.com/libreworks/shady-island/contributors",
  authorOrganization: true,
  defaultReleaseBranch: "main",
  repositoryUrl: "git@github.com:libreworks/shady-island.git",
  homepage: "https://github.com/libreworks/shady-island",
  bugsUrl: 'https://github.com/libreworks/shady-island/issues',
  prettier: true,
  compat: true,

  stability: 'experimental',
  cdkVersion: "2.1.0",

  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve'],
    },
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.synth();
