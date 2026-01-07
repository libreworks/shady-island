# `servers` Submodule <a name="`servers` Submodule" id="shady-island.servers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UbuntuLinuxBastion <a name="UbuntuLinuxBastion" id="shady-island.servers.UbuntuLinuxBastion"></a>

- *Implements:* aws-cdk-lib.aws_ec2.IConnectable, aws-cdk-lib.aws_iam.IGrantable

A bastion host running Ubuntu GNU/Linux with an instance firewall.

This construct produces an Auto-Scaling Group and corresponding launch
template. The ASG has a minimum of zero instances and a maximum of one.
Instances launched will be placed in a public subnet of the VPC.

#### Initializers <a name="Initializers" id="shady-island.servers.UbuntuLinuxBastion.Initializer"></a>

```typescript
import { servers } from 'shady-island'

new servers.UbuntuLinuxBastion(scope: Construct, id: string, props: UbuntuLinuxBastionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.servers.UbuntuLinuxBastion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastion.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastion.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.servers.UbuntuLinuxBastionProps">UbuntuLinuxBastionProps</a></code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.servers.UbuntuLinuxBastion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.servers.UbuntuLinuxBastion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.servers.UbuntuLinuxBastion.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.servers.UbuntuLinuxBastionProps">UbuntuLinuxBastionProps</a>

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.servers.UbuntuLinuxBastion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastion.allowSshAccessFrom">allowSshAccessFrom</a></code> | Allow SSH access from the given peer or peers. |

---

##### `toString` <a name="toString" id="shady-island.servers.UbuntuLinuxBastion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `allowSshAccessFrom` <a name="allowSshAccessFrom" id="shady-island.servers.UbuntuLinuxBastion.allowSshAccessFrom"></a>

```typescript
public allowSshAccessFrom(peer: ...IPeer[]): void
```

Allow SSH access from the given peer or peers.

###### `peer`<sup>Required</sup> <a name="peer" id="shady-island.servers.UbuntuLinuxBastion.allowSshAccessFrom.parameter.peer"></a>

- *Type:* ...aws-cdk-lib.aws_ec2.IPeer[]

The peer or peers to allow.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.servers.UbuntuLinuxBastion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="shady-island.servers.UbuntuLinuxBastion.isConstruct"></a>

```typescript
import { servers } from 'shady-island'

servers.UbuntuLinuxBastion.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.servers.UbuntuLinuxBastion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.servers.UbuntuLinuxBastion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastion.property.autoScalingGroup">autoScalingGroup</a></code> | <code>aws-cdk-lib.aws_autoscaling.AutoScalingGroup</code> | The auto-scaling group for this bastion. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastion.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastion.property.firewall">firewall</a></code> | <code>shady-island.configuration.IFirewallRules</code> | The instance firewall rules. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastion.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.servers.UbuntuLinuxBastion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `autoScalingGroup`<sup>Required</sup> <a name="autoScalingGroup" id="shady-island.servers.UbuntuLinuxBastion.property.autoScalingGroup"></a>

```typescript
public readonly autoScalingGroup: AutoScalingGroup;
```

- *Type:* aws-cdk-lib.aws_autoscaling.AutoScalingGroup

The auto-scaling group for this bastion.

---

##### `connections`<sup>Required</sup> <a name="connections" id="shady-island.servers.UbuntuLinuxBastion.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="shady-island.servers.UbuntuLinuxBastion.property.firewall"></a>

```typescript
public readonly firewall: IFirewallRules;
```

- *Type:* shady-island.configuration.IFirewallRules

The instance firewall rules.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="shady-island.servers.UbuntuLinuxBastion.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---


## Structs <a name="Structs" id="Structs"></a>

### CustomDomainOptions <a name="CustomDomainOptions" id="shady-island.servers.CustomDomainOptions"></a>

Options for DNS record updates when the instance launches.

#### Initializer <a name="Initializer" id="shady-island.servers.CustomDomainOptions.Initializer"></a>

```typescript
import { servers } from 'shady-island'

const customDomainOptions: servers.CustomDomainOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.servers.CustomDomainOptions.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | The Route 53 hosted zone where the record is upserted. |
| <code><a href="#shady-island.servers.CustomDomainOptions.property.subdomain">subdomain</a></code> | <code>string</code> | The subdomain for the record (e.g. `bastion`, `ssh`, `jump`). |

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="shady-island.servers.CustomDomainOptions.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

The Route 53 hosted zone where the record is upserted.

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="shady-island.servers.CustomDomainOptions.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

The subdomain for the record (e.g. `bastion`, `ssh`, `jump`).

---

### ElasticFileSystemMount <a name="ElasticFileSystemMount" id="shady-island.servers.ElasticFileSystemMount"></a>

The details for a single EFS mount.

#### Initializer <a name="Initializer" id="shady-island.servers.ElasticFileSystemMount.Initializer"></a>

```typescript
import { servers } from 'shady-island'

const elasticFileSystemMount: servers.ElasticFileSystemMount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.servers.ElasticFileSystemMount.property.directory">directory</a></code> | <code>string</code> | The path where the NFS volume should be mounted. |
| <code><a href="#shady-island.servers.ElasticFileSystemMount.property.fileSystem">fileSystem</a></code> | <code>aws-cdk-lib.aws_efs.IFileSystem</code> | The EFS filesystem to mount. |

---

##### `directory`<sup>Required</sup> <a name="directory" id="shady-island.servers.ElasticFileSystemMount.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

The path where the NFS volume should be mounted.

---

##### `fileSystem`<sup>Required</sup> <a name="fileSystem" id="shady-island.servers.ElasticFileSystemMount.property.fileSystem"></a>

```typescript
public readonly fileSystem: IFileSystem;
```

- *Type:* aws-cdk-lib.aws_efs.IFileSystem

The EFS filesystem to mount.

---

### UbuntuLinuxBastionProps <a name="UbuntuLinuxBastionProps" id="shady-island.servers.UbuntuLinuxBastionProps"></a>

Properties for the UbuntuLinuxBastion constructor.

#### Initializer <a name="Initializer" id="shady-island.servers.UbuntuLinuxBastionProps.Initializer"></a>

```typescript
import { servers } from 'shady-island'

const ubuntuLinuxBastionProps: servers.UbuntuLinuxBastionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the bastion will reside. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.aptPackages">aptPackages</a></code> | <code>string[]</code> | An array of APT package names to install. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.aptRepositories">aptRepositories</a></code> | <code>string[]</code> | The names of repositories to enable using apt-add-repository. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceArchitecture</code> | The CPU architecture for the bastion. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.customDomain">customDomain</a></code> | <code><a href="#shady-island.servers.CustomDomainOptions">CustomDomainOptions</a></code> | The options for creating DNS records upon launch. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.enableIpv6">enableIpv6</a></code> | <code>boolean</code> | Whether to enable IPv6. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.fileSystems">fileSystems</a></code> | <code><a href="#shady-island.servers.ElasticFileSystemMount">ElasticFileSystemMount</a>[]</code> | The Elastic Filesystems to mount. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.installAwsCli">installAwsCli</a></code> | <code>boolean</code> | Whether to install the AWS CLI Snap package. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | The instance type for the bastion. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.keyPair">keyPair</a></code> | <code>aws-cdk-lib.aws_ec2.IKeyPair</code> | The key pair to use for this instance. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The instance role (the trust policy must permit ec2.amazonaws.com). |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.secrets">secrets</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_secretsmanager.ISecret}</code> | The secrets containing database credentials. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group to attach to the bastion instance. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.ubuntuVersion">ubuntuVersion</a></code> | <code>string</code> | The version of Ubuntu to use. |
| <code><a href="#shady-island.servers.UbuntuLinuxBastionProps.property.volumeSize">volumeSize</a></code> | <code>number</code> | The size in gibibytes (GiB) of the primary disk volume. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.servers.UbuntuLinuxBastionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the bastion will reside.

---

##### `aptPackages`<sup>Optional</sup> <a name="aptPackages" id="shady-island.servers.UbuntuLinuxBastionProps.property.aptPackages"></a>

```typescript
public readonly aptPackages: string[];
```

- *Type:* string[]

An array of APT package names to install.

If you supply any Elastic Filesystems to mount, this construct will also
install the "nfs-common" package.

---

##### `aptRepositories`<sup>Optional</sup> <a name="aptRepositories" id="shady-island.servers.UbuntuLinuxBastionProps.property.aptRepositories"></a>

```typescript
public readonly aptRepositories: string[];
```

- *Type:* string[]

The names of repositories to enable using apt-add-repository.

e.g. ppa:redislabs/redis

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="shady-island.servers.UbuntuLinuxBastionProps.property.architecture"></a>

```typescript
public readonly architecture: InstanceArchitecture;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceArchitecture
- *Default:* InstanceArchitecture.ARM_64

The CPU architecture for the bastion.

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="shady-island.servers.UbuntuLinuxBastionProps.property.customDomain"></a>

```typescript
public readonly customDomain: CustomDomainOptions;
```

- *Type:* <a href="#shady-island.servers.CustomDomainOptions">CustomDomainOptions</a>

The options for creating DNS records upon launch.

---

##### `enableIpv6`<sup>Optional</sup> <a name="enableIpv6" id="shady-island.servers.UbuntuLinuxBastionProps.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable IPv6.

---

##### `fileSystems`<sup>Optional</sup> <a name="fileSystems" id="shady-island.servers.UbuntuLinuxBastionProps.property.fileSystems"></a>

```typescript
public readonly fileSystems: ElasticFileSystemMount[];
```

- *Type:* <a href="#shady-island.servers.ElasticFileSystemMount">ElasticFileSystemMount</a>[]

The Elastic Filesystems to mount.

---

##### `installAwsCli`<sup>Optional</sup> <a name="installAwsCli" id="shady-island.servers.UbuntuLinuxBastionProps.property.installAwsCli"></a>

```typescript
public readonly installAwsCli: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to install the AWS CLI Snap package.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="shady-island.servers.UbuntuLinuxBastionProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* t3.micro for X86_64, t4g.micro for ARM_64

The instance type for the bastion.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="shady-island.servers.UbuntuLinuxBastionProps.property.keyPair"></a>

```typescript
public readonly keyPair: IKeyPair;
```

- *Type:* aws-cdk-lib.aws_ec2.IKeyPair
- *Default:* A new key pair is generated and stored in SSM Parameter Store

The key pair to use for this instance.

---

##### `role`<sup>Optional</sup> <a name="role" id="shady-island.servers.UbuntuLinuxBastionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The instance role (the trust policy must permit ec2.amazonaws.com).

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="shady-island.servers.UbuntuLinuxBastionProps.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: ISecret};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_secretsmanager.ISecret}

The secrets containing database credentials.

The key of the object corresponds to the filename in `/run/secrets`.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="shady-island.servers.UbuntuLinuxBastionProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* A new security group is created

The security group to attach to the bastion instance.

---

##### `ubuntuVersion`<sup>Optional</sup> <a name="ubuntuVersion" id="shady-island.servers.UbuntuLinuxBastionProps.property.ubuntuVersion"></a>

```typescript
public readonly ubuntuVersion: string;
```

- *Type:* string
- *Default:* 24.04

The version of Ubuntu to use.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="shady-island.servers.UbuntuLinuxBastionProps.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number
- *Default:* 10

The size in gibibytes (GiB) of the primary disk volume.

---



