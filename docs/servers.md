# Servers

These constructs create ready-to-use servers.

- `UbuntuLinuxBastion` – A bastion host running Ubuntu GNU/Linux with an instance firewall

## UbuntuLinuxBastion

You can use the `UbuntuLinuxBastion` construct to create a bastion host (also called a jump box). A bastion lets administrators reach resources in private subnets, like databases and file systems, without exposing those resources to the internet.

This construct produces an auto-scaling group and a corresponding launch template. The auto-scaling group has a minimum of zero instances and a maximum of one, so you can set the desired capacity to one when you need the bastion and back to zero when you don't. Instances launch in a public subnet of the VPC.

```typescript
import { Peer } from "aws-cdk-lib/aws-ec2";
import { UbuntuLinuxBastion } from "shady-island/lib/servers";

const bastion = new UbuntuLinuxBastion(stack, "Bastion", { vpc });
bastion.allowSshAccessFrom(Peer.ipv4("203.0.113.0/24"));
// bastion.autoScalingGroup instanceof AutoScalingGroup
```

By default, the bastion:

- Runs the latest Ubuntu 24.04 image on ARM (i.e. a `t4g.micro` instance)
- Has an encrypted 10 GiB `gp3` root volume
- Requires IMDSv2
- Has a new security group, IAM role, and RSA key pair (the private key is stored in SSM Parameter Store)
- Installs the AWS CLI Snap package
- Allows Session Manager connections

The bastion is `IConnectable` and `IGrantable`, so you can allow network traffic and grant permissions the same way as other CDK constructs.

```typescript
import { DatabaseCluster } from "aws-cdk-lib/aws-rds";

declare const cluster: DatabaseCluster;

cluster.connections.allowDefaultPortFrom(bastion);
```

### Instance firewall

The bastion configures an `iptables` firewall on the instance (see [Configuration](configuration.md)). By default, it allows only outbound DNS, HTTP, HTTPS, NTP, and ICMP traffic, plus DHCP. The `allowSshAccessFrom` method opens the SSH port in both the security group and the instance firewall.

The `firewall` property lets you add more rules. Remember to allow the traffic in the security group, too.

```typescript
import { Port } from "aws-cdk-lib/aws-ec2";
import { Address } from "shady-island/lib/networking";

bastion.firewall.outbound(Port.tcp(5432), Address.ipv4(vpc.vpcCidrBlock));
```

### Options

You can customize the bastion with several more options.

```typescript
import { InstanceArchitecture } from "aws-cdk-lib/aws-ec2";
import { FileSystem } from "aws-cdk-lib/aws-efs";
import { IHostedZone } from "aws-cdk-lib/aws-route53";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";
import { UbuntuLinuxBastion } from "shady-island/lib/servers";

declare const hostedZone: IHostedZone;
declare const fileSystem: FileSystem;
declare const databaseSecret: ISecret;

const bastion = new UbuntuLinuxBastion(stack, "Bastion", {
  vpc,
  architecture: InstanceArchitecture.X86_64,
  enableIpv6: true,
  customDomain: { hostedZone, subdomain: "bastion" },
  fileSystems: [{ fileSystem, directory: "/mnt/shared" }],
  secrets: { database: databaseSecret },
  aptPackages: ["mysql-client", "postgresql-client"],
});
```

- `customDomain` – Creates or updates DNS records for the instance's public IP addresses when it launches (e.g. `bastion.example.com`)
- `fileSystems` – Mounts EFS file systems, and installs the `nfs-common` package
- `secrets` – Downloads Secrets Manager secrets to `/run/secrets` (e.g. `/run/secrets/database.json`) and grants read access
- `aptRepositories` and `aptPackages` – Adds APT repositories and installs packages
- `enableIpv6` – Adds the IPv6 equivalents of the firewall rules and enables the IPv6 metadata endpoint

The `/run` directory is emptied on reboot, and the secrets are only downloaded when an instance first launches. If you reboot the bastion, the secrets are gone until a new instance replaces it.
