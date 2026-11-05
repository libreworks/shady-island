# Configuration

These classes help configure EC2 instances when they launch.

- `Starter` – A class that orchestrates the startup process of EC2 instances using add-ons and prioritized scripts
- Add-ons for the `Starter`
  - `BucketSyncAddOn` – Downloads files from an S3 bucket to directories on the instance
  - `ElasticFileSystemAddOn` – Mounts an EFS file system on the instance
  - `InstanceFirewallAddOn` – Configures an on-instance firewall
  - `UpdateRoute53AddOn` – Creates or updates DNS records with the instance's public IP addresses
- `InstanceFirewall` – A class that produces the commands to configure an on-instance firewall (e.g. `iptables`)
- `ShellCommands` – A utility class that provides POSIX shell commands for User Data scripts

## Starter

The `Starter` class orchestrates the startup process of EC2 instances. It's a registry for add-ons. Each add-on can add permissions to the instance role, network rules to the security group, or scripts to the user data.

Every script has a numeric priority, and lower numbers run earlier. Add-ons can be registered in any order, but their scripts appear in the user data in order of priority.

The `Starter` class has three static methods: `forAutoScalingGroup`, `forLaunchTemplate`, and `forInstance`. The launch template _must_ have user data defined, or `forLaunchTemplate` throws an error.

```typescript
import { LaunchTemplate, UserData } from "aws-cdk-lib/aws-ec2";
import { Starter } from "shady-island/lib/configuration";

declare const launchTemplate: LaunchTemplate;

const starter = Starter.forLaunchTemplate(launchTemplate);
starter.addScript(100, "systemctl start nginx");
starter.addScript(-10, "apt -yq update", "apt -yq install nginx");
starter.withAddOns(addOn1, addOn2);
```

In this example, the `apt` commands run before `systemctl start nginx`, even though they were added later.

A `Starter` is both `IConnectable` and `IGrantable`, so you can use it to grant permissions and allow network traffic just as you would the underlying construct.

### Add-ons

An add-on is any object that implements `IStarterAddOn`. It has a single method, `configure`, which receives the `Starter`. You can write your own.

```typescript
import { IStarterAddOn, Starter } from "shady-island/lib/configuration";

class HelloWorldAddOn implements IStarterAddOn {
  public configure(starter: Starter): void {
    starter.addScript(50, 'echo "Hello, World!" > /tmp/hello.txt');
  }
}
```

This library includes four add-ons.

#### `BucketSyncAddOn`

The `BucketSyncAddOn` downloads files from an S3 bucket to directories on the instance using `aws s3 sync`. The keys of the `destinations` object are S3 object key prefixes, and the values are directories on the instance. This add-on also grants the instance read access to the bucket.

```typescript
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketSyncAddOn } from "shady-island/lib/configuration";

declare const bucket: Bucket;

starter.withAddOns(
  new BucketSyncAddOn(bucket, {
    "nginx-config": "/etc/nginx",
    "php-config": "/etc/php",
  })
);
```

The instance needs the AWS CLI installed for this to work.

#### `ElasticFileSystemAddOn`

The `ElasticFileSystemAddOn` mounts an EFS file system on the instance. It creates the mount directory, mounts the file system, and optionally changes the mode or ownership of the mount point. This add-on also configures the security groups on both ends to allow NFS traffic.

```typescript
import { FileSystem } from "aws-cdk-lib/aws-efs";
import { ElasticFileSystemAddOn } from "shady-island/lib/configuration";

declare const fileSystem: FileSystem;

starter.withAddOns(
  new ElasticFileSystemAddOn(fileSystem, "/mnt/shared", {
    chown: "www-data",
    chgrp: "www-data",
    chmod: 2775,
  })
);
```

The instance needs an NFS client installed (e.g. the `nfs-common` package on Debian and Ubuntu).

#### `InstanceFirewallAddOn`

The `InstanceFirewallAddOn` adds the commands produced by an `IFirewallRules` (see `InstanceFirewall` below) to the user data. The commands are evaluated lazily, so you can keep adding rules after you register the add-on.

```typescript
import { Port } from "aws-cdk-lib/aws-ec2";
import {
  InstanceFirewall,
  InstanceFirewallAddOn,
} from "shady-island/lib/configuration";

const firewall = InstanceFirewall.iptables().inboundFromAnyIpv4(Port.HTTPS);
starter.withAddOns(new InstanceFirewallAddOn(firewall, { priority: -1000 }));
firewall.inboundFromAnyIpv4(Port.HTTP); // This rule is included, too
```

You'll probably want the firewall configured before anything else, so give it a low priority.

#### `UpdateRoute53AddOn`

The `UpdateRoute53AddOn` creates or updates DNS records in a Route 53 hosted zone with the instance's public-facing IP addresses. It's useful for instances that don't have a fixed IP address. By default, it upserts only an `A` record, but it can also upsert an `AAAA` record.

This add-on also adds an IAM policy to the instance role. The policy only permits the `UPSERT` action on the specific record name and record types.

```typescript
import { IHostedZone } from "aws-cdk-lib/aws-route53";
import { UpdateRoute53AddOn } from "shady-island/lib/configuration";

declare const hostedZone: IHostedZone;

// Creates or updates "server.example.com" if the zone is "example.com"
starter.withAddOns(
  new UpdateRoute53AddOn(hostedZone, "server", { ipv4: true, ipv6: true })
);
```

The instance needs the AWS CLI installed for this to work.

## InstanceFirewall

The `InstanceFirewall` class produces the commands needed to configure a firewall on the instance itself. A security group controls traffic to and from the network interface, but an on-instance firewall adds another layer of defense.

Right now, there's one static method: `iptables`. It returns an `IFirewallRules` object with a fluent interface for declaring inbound and outbound rules. Only TCP, UDP, ICMP, and ICMPv6 rules are allowed.

```typescript
import { Port } from "aws-cdk-lib/aws-ec2";
import { Address } from "shady-island/lib/networking";
import { InstanceFirewall } from "shady-island/lib/configuration";

const firewall = InstanceFirewall.iptables()
  .inboundFromAnyIpv4(Port.HTTPS)
  .inboundFromAnyIpv6(Port.HTTPS)
  .inbound(Port.SSH, Address.ipv4("10.0.0.0/16"))
  .outboundToAnyIpv4(Port.tcp(443))
  .outbound(Port.tcp(5432), Address.ipv4("10.0.0.0/16"));

const commands: string[] = firewall.buildCommands();
```

The `buildCommands` method returns `iptables` and `ip6tables` commands. Loopback traffic and established connections are always allowed, and everything else not explicitly declared is rejected. The rules are saved to `/etc/iptables/rules.v4` and `/etc/iptables/rules.v6`, so they persist across reboots if the `iptables-persistent` package is installed.

## ShellCommands

The `ShellCommands` class has static methods that produce POSIX shell commands for User Data scripts. Each method returns an array of strings.

| Method                      | Description                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| `addDirectory`              | Creates a directory with `mkdir`, or with `install` if owner or group is given |
| `changeOwnership`           | Changes the owner and/or group of a file using `chown` or `chgrp`              |
| `disableUnattendedUpgrades` | Disables unattended package upgrades on Debian and Ubuntu                      |
| `downloadSecret`            | Downloads a Secrets Manager secret to a file                                   |
| `installAptPackages`        | Adds APT repositories, then installs packages                                  |
| `mountElasticFileSystem`    | Mounts an EFS file system at a directory                                       |
| `outputFile`                | Writes the contents of a string to a file using a heredoc                      |
| `syncFromBucket`            | Downloads objects from an S3 bucket to directories using `aws s3 sync`         |

```typescript
import { Instance, UserData } from "aws-cdk-lib/aws-ec2";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";
import { ShellCommands } from "shady-island/lib/configuration";

declare const secret: ISecret;
declare const instance: Instance;

const userData = UserData.forLinux();
userData.addCommands(
  ...ShellCommands.installAptPackages(["nginx", "redis-server"], {
    repositories: ["ppa:redislabs/redis"],
  }),
  ...ShellCommands.addDirectory("/run/secrets", {
    owner: "root",
    mode: "0700",
  }),
  ...ShellCommands.downloadSecret(secret, "/run/secrets/database.json"),
  ...ShellCommands.outputFile("Hello, World!", "/var/www/html/index.html")
);

// Be sure to grant the instance any permissions it needs
secret.grantRead(instance);
```

Methods that call AWS (`downloadSecret` and `syncFromBucket`) don't grant any permissions. Methods that connect to other resources (`mountElasticFileSystem`) don't allow any network traffic. The add-ons above take care of both, so prefer them when they fit.
