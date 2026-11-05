# shady-island

[![Apache 2.0](https://img.shields.io/github/license/libreworks/shady-island)](https://github.com/libreworks/shady-island/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/shady-island)](https://www.npmjs.com/package/shady-island)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/libreworks/shady-island/release.yml?label=release)](https://github.com/libreworks/shady-island/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/libreworks/shady-island?sort=semver)](https://github.com/libreworks/shady-island/releases)
[![codecov](https://codecov.io/gh/libreworks/shady-island/branch/main/graph/badge.svg?token=OHTRGNTSPO)](https://codecov.io/gh/libreworks/shady-island)

Utilities and constructs for the AWS CDK.

## Features

### [Core](docs/core.md)

- Represent a deployment tier (e.g. development, testing, acceptance, production) with the `Tier` class, and tag constructs with it using `TierTagger`.
- Load context values from a JSON file with `ContextLoader`, `ContextLoadingStage`, or `DeploymentTierStage`, which also assigns a deployment tier to every stack in the stage.

### [Automation](docs/automation.md)

- Deploy new ECR images to ECS services with the `ContainerImagePipeline` construct.
- Build Docker images and push them to ECR with the `LinuxDockerBuildProject` construct, and combine images for different CPU architectures with the `LinuxDockerManifestProject` construct.
- Update a Lambda function's code whenever a new archive is uploaded to S3 with the `FunctionCodeUpdater` construct.

### [Configuration](docs/configuration.md)

- Compose the startup process of EC2 instances from prioritized scripts and add-ons with the `Starter` class. Add-ons can mount EFS file systems, download files from S3, configure a firewall, and update Route 53 records.
- Configure an `iptables` firewall on EC2 instances with the `InstanceFirewall` class.
- Generate common shell commands for User Data scripts with the `ShellCommands` class.

### [Lambda](docs/fn.md)

- Send failed Lambda invocations to a dead-letter queue with an alarm with the `FailedInvocations` construct.
- Use the Powertools for AWS Lambda layers for TypeScript and Python with the `PowertoolsLayer` class.

### [Networking](docs/networking.md)

- Give a workload its own subdomain and wildcard certificate with the `DelegationDomain`, `CrossAccountDelegationDomain`, or `ExistingZoneDomain` constructs.
- Create a public-facing Application Load Balancer that rejects requests for unknown hostnames or without a secret header with the `WebLoadBalancing` and `SecretHttpHeader` constructs.
- Create Elastic IP addresses and Elastic Network Interfaces with the `ElasticIp` and `NetworkInterface` constructs, and bind a launch template to a single network interface with the `SingletonLaunchTemplate` construct.

### [RDS](docs/rds.md)

- Create a MySQL or PostgreSQL database, users, and grants inside an RDS cluster or instance with the `MysqlDatabase` and `PostgresqlDatabase` constructs.

### [Servers](docs/servers.md)

- Create a bastion host running Ubuntu with an instance firewall with the `UbuntuLinuxBastion` construct.

## Documentation

- [TypeScript API Reference](https://libreworks.github.io/shady-island/api/)

## The Name

It's a pun. In English, the pronunciation of the acronym _CDK_ sounds a bit like the phrase _seedy cay_. A seedy cay might also be called a _shady island_.
