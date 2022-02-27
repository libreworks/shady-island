# VPC

These constructs exist to fill in missing features of the core `Vpc` component that ships with the AWS CDK.

- `CidrContext` – Creates IPv6 CIDRs, applies them to subnets, creates the necessary routes, etc.
- `AssignOnLaunch` – Creates a custom resource that enables automatic provisioning of IPv6 addresses on ENIs created within the selected subnets.
