const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Jonathan Hawk',
  authorAddress: 'jonathan@hawk.ninja',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'shady-island',
  repositoryUrl: 'git@github.com:libreworks/shady-island.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();