# Networking

These constructs and classes relate to networking: IP addresses, network interfaces, DNS domains, and load balancers.

- `Address` – A class that represents an IPv4 or IPv6 address (or range of addresses)
- Domains
  - `DelegationDomain` – A subdomain delegated from a parent hosted zone in the same account, with a wildcard certificate
  - `CrossAccountDelegationDomain` – A subdomain delegated from a parent hosted zone in another account, with a wildcard certificate
  - `ExistingZoneDomain` – An existing hosted zone, with a wildcard certificate
- `ElasticIp` – An EC2 Elastic IP address
- `NetworkInterface` – An Elastic Network Interface
- `SingletonLaunchTemplate` – A launch template bound to a single Elastic Network Interface
- `WebLoadBalancing` – A public-facing Application Load Balancer with an HTTPS listener
- `SecretHttpHeader` – A secret HTTP header that a load balancer can require for every request

## Address

The `Address` class represents an IPv4 or IPv6 address, or a range of addresses in CIDR notation. Other parts of this library use it, like the instance firewall.

`Address` has four static methods: `ipv4`, `ipv6`, `anyIpv4`, and `anyIpv6`. The `ipv4` and `ipv6` methods validate the address and netmask, unless the value is an unresolved token.

```typescript
import { Address } from "shady-island/lib/networking";

const single = Address.ipv4("192.168.1.10");
const range = Address.ipv6("2001:db8::/32");
const everything = Address.anyIpv4(); // 0.0.0.0/0

range.isIpv6(); // true
everything.isAny(); // true
String(single); // "192.168.1.10"

Address.ipv4("10.0.0.0/33"); // throws an Error
```

## Domains

Each of the domain constructs creates or uses a Route 53 hosted zone and creates a wildcard ACM certificate for it (e.g. `*.dev.example.com`), validated using DNS. Each one implements `IDomain`, which has three properties: `name`, `hostedZone`, and `certificate`.

This makes it easy to give a whole workload its own subdomain. The certificate can be used by load balancers and CloudFront distributions throughout the workload.

### `DelegationDomain`

You can use the `DelegationDomain` construct to create a new hosted zone for a subdomain when the parent hosted zone is in the same AWS account. It also creates the `NS` record in the parent zone.

```typescript
import { PublicHostedZone } from "aws-cdk-lib/aws-route53";
import { DelegationDomain } from "shady-island/lib/networking";

declare const parentHostedZone: PublicHostedZone; // example.com

const domain = new DelegationDomain(stack, "Domain", {
  parentHostedZone,
  subdomain: "dev",
});
// domain.name === "dev.example.com"
// domain.hostedZone instanceof IHostedZone
// domain.certificate instanceof ICertificate
```

### `CrossAccountDelegationDomain`

You can use the `CrossAccountDelegationDomain` construct when the parent hosted zone is in a different AWS account. You must provide an IAM role in the parent account that this account is allowed to assume to create the `NS` record. See [the CDK documentation](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_route53.CrossAccountZoneDelegationRecord.html) for more details about that role.

```typescript
import { Role } from "aws-cdk-lib/aws-iam";
import { CrossAccountDelegationDomain } from "shady-island/lib/networking";

const delegationRole = Role.fromRoleArn(
  stack,
  "DelegationRole",
  "arn:aws:iam::123456789012:role/Route53DelegationRole"
);

const domain = new CrossAccountDelegationDomain(stack, "Domain", {
  subdomain: "dev",
  parentHostedZoneName: "example.com",
  delegationRole,
});
```

### `ExistingZoneDomain`

You can use the `ExistingZoneDomain` construct when you already have a hosted zone for the domain. It only creates the wildcard certificate.

```typescript
import { HostedZone } from "aws-cdk-lib/aws-route53";
import { ExistingZoneDomain } from "shady-island/lib/networking";

const hostedZone = HostedZone.fromLookup(stack, "Zone", {
  domainName: "example.com",
});

const domain = new ExistingZoneDomain(stack, "Domain", { hostedZone });
```

If you already have both the hosted zone _and_ the certificate, the static `fromDomainAttributes` method returns an `IDomain` without creating anything.

```typescript
const domain = ExistingZoneDomain.fromDomainAttributes(stack, "Domain", {
  hostedZone,
  certificate,
});
```

## ElasticIp

The AWS CDK has only the low-level `CfnEIP` construct for Elastic IP addresses. You can use the `ElasticIp` construct to create one with a removal policy, an ARN, and a `grant` method.

```typescript
import { RemovalPolicy } from "aws-cdk-lib";
import { ElasticIp } from "shady-island/lib/networking";

const eip = new ElasticIp(stack, "ElasticIp", {
  removalPolicy: RemovalPolicy.RETAIN,
});
// eip.allocationId, eip.publicIp, eip.elasticIpArn

eip.grant(role, "ec2:AssociateAddress", "ec2:DisassociateAddress");
```

You can import an existing Elastic IP with the static `fromAllocationId` or `fromElasticIpArn` methods.

## NetworkInterface

The AWS CDK has only the low-level `CfnNetworkInterface` construct for Elastic Network Interfaces (ENI). You can use the `NetworkInterface` construct to create one that's `IConnectable`, so you can manage its security groups the same way as other CDK constructs.

The `AddressingV4` and `AddressingV6` classes have static methods to choose how addresses are assigned: specific addresses, a number of automatic addresses, delegated prefixes, or a number of automatic delegated prefixes.

```typescript
import { Port } from "aws-cdk-lib/aws-ec2";
import {
  AddressingV4,
  AddressingV6,
  ElasticIp,
  NetworkInterface,
} from "shady-island/lib/networking";

const elasticIp = new ElasticIp(stack, "ElasticIp");

const eni = new NetworkInterface(stack, "NetworkInterface", {
  vpc,
  subnet: vpc.publicSubnets[0],
  ipv4: AddressingV4.privateAddress("10.0.0.10"),
  ipv6: AddressingV6.addressCount(1, true),
  elasticIp,
});
eni.connections.allowFromAnyIpv4(Port.HTTPS);
```

If you don't provide any security groups, a new one is created. If you provide an `elasticIp`, it's associated with the primary private IPv4 address of the interface.

You can import an existing ENI with the static `fromNetworkInterfaceAttributes` method.

## SingletonLaunchTemplate

The `SingletonLaunchTemplate` construct is a launch template bound to a single ENI. Since an ENI can only be attached to one instance at a time, this is useful for a server that must keep the same IP address (and Elastic IP) when it's replaced, while still letting an auto-scaling group replace it when it's unhealthy.

The `createAutoScalingGroup` method creates an auto-scaling group with a minimum and maximum of one instance, placed in the Availability Zone of the ENI's subnet.

```typescript
import { InstanceType, MachineImage } from "aws-cdk-lib/aws-ec2";
import { SingletonLaunchTemplate } from "shady-island/lib/networking";

declare const networkInterface: NetworkInterface;

const launchTemplate = new SingletonLaunchTemplate(stack, "LaunchTemplate", {
  networkInterface,
  instanceType: new InstanceType("t4g.small"),
  machineImage: MachineImage.latestAmazonLinux2023(),
});
const autoScalingGroup = launchTemplate.createAutoScalingGroup("Group", {
  vpc,
});
```

The security groups of the launch template are the security groups of the ENI.

## WebLoadBalancing

You can use the `WebLoadBalancing` construct to create a public-facing Application Load Balancer for web traffic. It creates:

- An internet-facing load balancer in the public subnets of the VPC, with HTTP/2 enabled
- An S3 bucket for the load balancer's access logs
- An HTTPS listener on port 443 using the certificates you provide

The listener is _not_ open to the world by default. You decide where traffic can come from (e.g. only CloudFront, or any address).

```typescript
import { Peer, Port } from "aws-cdk-lib/aws-ec2";
import { WebLoadBalancing } from "shady-island/lib/networking";

declare const domain: IDomain;

const web = new WebLoadBalancing(stack, "LoadBalancing", {
  vpc,
  certificates: [domain.certificate],
  requireKnownHostname: true,
  requireSecretHeader: true,
});
web.loadBalancer.connections.allowFrom(
  Peer.prefixList("pl-3b927c52"), // CloudFront origin-facing
  Port.HTTPS
);
```

The `requireKnownHostname` and `requireSecretHeader` options both protect the load balancer from requests that don't belong. If either is enabled, requests with an unknown `Host` header or a missing secret header receive an HTTP 421 Misdirected Request response.

### `.addTarget(id, target, options)`

The `addTarget` method creates a target group and adds it to the listener. It accepts all the properties of an `ApplicationTargetGroup`, plus two more: `hostnames` and `priority`.

```typescript
import { FargateService } from "aws-cdk-lib/aws-ecs";

declare const service: FargateService;

web.addTarget("Website", service, {
  hostnames: ["www.dev.example.com", "dev.example.com"],
});
```

If you leave these options undefined, `addTarget` uses the following defaults:

- `port`: 443
- `protocol`: HTTPS
- `deregistrationDelay`: the load balancer's idle timeout
- `healthCheck.path`: `/`
- `healthCheck.healthyThresholdCount`: 2
- `healthCheck.interval`: 30 seconds
- `healthCheck.timeout`: 29 seconds

If `requireKnownHostname` is enabled, you _must_ provide `hostnames`. Listener rule priorities are determined automatically, and a long list of hostnames is split across several rules, since a listener rule only supports five condition values.

## SecretHttpHeader

You can use the `SecretHttpHeader` construct to create a Secrets Manager secret that contains an HTTP header name and a random value. A reverse proxy, like CloudFront, sends the header with every request to the origin. The load balancer then rejects any request without it, so nobody can bypass the reverse proxy.

The `WebLoadBalancing` construct creates one for you if you enable `requireSecretHeader`. Otherwise, you can create one yourself.

```typescript
import { HttpOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { SecretHttpHeader } from "shady-island/lib/networking";

const secretHeader = new SecretHttpHeader(stack, "SecretHeader");
// secretHeader.headerName === "X-Secret-Passphrase"

const origin = new HttpOrigin("origin.dev.example.com", {
  customHeaders: secretHeader.createOriginCustomHeaders(),
});
const condition = secretHeader.createListenerCondition();
```

You can use an existing secret with the static `fromSecret` method. The secret must be JSON with two fields: `name` and `value`.
