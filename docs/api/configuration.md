# `configuration` Submodule <a name="`configuration` Submodule" id="shady-island.configuration"></a>


## Structs <a name="Structs" id="Structs"></a>

### AddDirectoryOptions <a name="AddDirectoryOptions" id="shady-island.configuration.AddDirectoryOptions"></a>

Options for the `ShellCommands.addDirectory` method.

#### Initializer <a name="Initializer" id="shady-island.configuration.AddDirectoryOptions.Initializer"></a>

```typescript
import { configuration } from 'shady-island'

const addDirectoryOptions: configuration.AddDirectoryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.configuration.AddDirectoryOptions.property.group">group</a></code> | <code>string</code> | The group name or numeric group ID to assign as the directory group. |
| <code><a href="#shady-island.configuration.AddDirectoryOptions.property.mode">mode</a></code> | <code>string</code> | The file mode, e.g. 2755, 0400. |
| <code><a href="#shady-island.configuration.AddDirectoryOptions.property.owner">owner</a></code> | <code>string</code> | The username or numeric user ID to assign as the directory owner. |

---

##### `group`<sup>Optional</sup> <a name="group" id="shady-island.configuration.AddDirectoryOptions.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The group name or numeric group ID to assign as the directory group.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="shady-island.configuration.AddDirectoryOptions.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The file mode, e.g. 2755, 0400.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="shady-island.configuration.AddDirectoryOptions.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The username or numeric user ID to assign as the directory owner.

---

### ElasticFileSystemAddOnProps <a name="ElasticFileSystemAddOnProps" id="shady-island.configuration.ElasticFileSystemAddOnProps"></a>

Constructor properties for ElasticFileSystemAddOn.

#### Initializer <a name="Initializer" id="shady-island.configuration.ElasticFileSystemAddOnProps.Initializer"></a>

```typescript
import { configuration } from 'shady-island'

const elasticFileSystemAddOnProps: configuration.ElasticFileSystemAddOnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.configuration.ElasticFileSystemAddOnProps.property.priority">priority</a></code> | <code>number</code> | The priority for the script added by this add-on. |
| <code><a href="#shady-island.configuration.ElasticFileSystemAddOnProps.property.chgrp">chgrp</a></code> | <code>string</code> | The intended Linux group name or ID of the group of the mounted directory. |
| <code><a href="#shady-island.configuration.ElasticFileSystemAddOnProps.property.chmod">chmod</a></code> | <code>number</code> | The intended file mode of the mounted directory. |
| <code><a href="#shady-island.configuration.ElasticFileSystemAddOnProps.property.chown">chown</a></code> | <code>string</code> | The intended Linux username or ID of the owner of the mounted directory. |

---

##### `priority`<sup>Optional</sup> <a name="priority" id="shady-island.configuration.ElasticFileSystemAddOnProps.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number
- *Default:* 10

The priority for the script added by this add-on.

---

##### `chgrp`<sup>Optional</sup> <a name="chgrp" id="shady-island.configuration.ElasticFileSystemAddOnProps.property.chgrp"></a>

```typescript
public readonly chgrp: string;
```

- *Type:* string
- *Default:* No chrp command is executed

The intended Linux group name or ID of the group of the mounted directory.

---

##### `chmod`<sup>Optional</sup> <a name="chmod" id="shady-island.configuration.ElasticFileSystemAddOnProps.property.chmod"></a>

```typescript
public readonly chmod: number;
```

- *Type:* number
- *Default:* No chmod command is executed

The intended file mode of the mounted directory.

---

##### `chown`<sup>Optional</sup> <a name="chown" id="shady-island.configuration.ElasticFileSystemAddOnProps.property.chown"></a>

```typescript
public readonly chown: string;
```

- *Type:* string
- *Default:* No chown command is executed

The intended Linux username or ID of the owner of the mounted directory.

---

### OutputFileOptions <a name="OutputFileOptions" id="shady-island.configuration.OutputFileOptions"></a>

Options for the `ShellCommands.outputFile` method.

#### Initializer <a name="Initializer" id="shady-island.configuration.OutputFileOptions.Initializer"></a>

```typescript
import { configuration } from 'shady-island'

const outputFileOptions: configuration.OutputFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.configuration.OutputFileOptions.property.delimiter">delimiter</a></code> | <code>string</code> | The bash heredoc delimiter. |
| <code><a href="#shady-island.configuration.OutputFileOptions.property.substitution">substitution</a></code> | <code>boolean</code> | Use `true` to enable variable and command substitution inside the heredoc. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="shady-island.configuration.OutputFileOptions.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string
- *Default:* END_OF_FILE

The bash heredoc delimiter.

---

##### `substitution`<sup>Optional</sup> <a name="substitution" id="shady-island.configuration.OutputFileOptions.property.substitution"></a>

```typescript
public readonly substitution: boolean;
```

- *Type:* boolean
- *Default:* disabled

Use `true` to enable variable and command substitution inside the heredoc.

---

### SinglePriorityProps <a name="SinglePriorityProps" id="shady-island.configuration.SinglePriorityProps"></a>

Properties for starter add-ons that add a single script.

#### Initializer <a name="Initializer" id="shady-island.configuration.SinglePriorityProps.Initializer"></a>

```typescript
import { configuration } from 'shady-island'

const singlePriorityProps: configuration.SinglePriorityProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.configuration.SinglePriorityProps.property.priority">priority</a></code> | <code>number</code> | The priority for the script added by this add-on. |

---

##### `priority`<sup>Optional</sup> <a name="priority" id="shady-island.configuration.SinglePriorityProps.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number
- *Default:* 10

The priority for the script added by this add-on.

---

### UpdateRoute53AddOnProps <a name="UpdateRoute53AddOnProps" id="shady-island.configuration.UpdateRoute53AddOnProps"></a>

Constructor properties for UpdateRoute53AddOn.

#### Initializer <a name="Initializer" id="shady-island.configuration.UpdateRoute53AddOnProps.Initializer"></a>

```typescript
import { configuration } from 'shady-island'

const updateRoute53AddOnProps: configuration.UpdateRoute53AddOnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.configuration.UpdateRoute53AddOnProps.property.priority">priority</a></code> | <code>number</code> | The priority for the script added by this add-on. |
| <code><a href="#shady-island.configuration.UpdateRoute53AddOnProps.property.ipv4">ipv4</a></code> | <code>boolean</code> | Whether to create/update an "A" record for the instance. |
| <code><a href="#shady-island.configuration.UpdateRoute53AddOnProps.property.ipv6">ipv6</a></code> | <code>boolean</code> | Whether to create/update an "AAAA" record for the instance. |

---

##### `priority`<sup>Optional</sup> <a name="priority" id="shady-island.configuration.UpdateRoute53AddOnProps.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number
- *Default:* 10

The priority for the script added by this add-on.

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="shady-island.configuration.UpdateRoute53AddOnProps.property.ipv4"></a>

```typescript
public readonly ipv4: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to create/update an "A" record for the instance.

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="shady-island.configuration.UpdateRoute53AddOnProps.property.ipv6"></a>

```typescript
public readonly ipv6: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to create/update an "AAAA" record for the instance.

---

## Classes <a name="Classes" id="Classes"></a>

### BucketSyncAddOn <a name="BucketSyncAddOn" id="shady-island.configuration.BucketSyncAddOn"></a>

- *Implements:* <a href="#shady-island.configuration.IStarterAddOn">IStarterAddOn</a>

An add-on that synchronizes files from S3 to directories on the instance.

This add-on also grants read access to the bucket.

#### Initializers <a name="Initializers" id="shady-island.configuration.BucketSyncAddOn.Initializer"></a>

```typescript
import { configuration } from 'shady-island'

new configuration.BucketSyncAddOn(bucket: IBucket, destinations: {[ key: string ]: string}, props?: SinglePriorityProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.configuration.BucketSyncAddOn.Initializer.parameter.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | - The S3 bucket from which files can be downloaded. |
| <code><a href="#shady-island.configuration.BucketSyncAddOn.Initializer.parameter.destinations">destinations</a></code> | <code>{[ key: string ]: string}</code> | - An object where keys are S3 object key prefixes and values are filesystem directories. |
| <code><a href="#shady-island.configuration.BucketSyncAddOn.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.configuration.SinglePriorityProps">SinglePriorityProps</a></code> | - Optional configuration properties. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="shady-island.configuration.BucketSyncAddOn.Initializer.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 bucket from which files can be downloaded.

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="shady-island.configuration.BucketSyncAddOn.Initializer.parameter.destinations"></a>

- *Type:* {[ key: string ]: string}

An object where keys are S3 object key prefixes and values are filesystem directories.

---

##### `props`<sup>Optional</sup> <a name="props" id="shady-island.configuration.BucketSyncAddOn.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.configuration.SinglePriorityProps">SinglePriorityProps</a>

Optional configuration properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.configuration.BucketSyncAddOn.configure">configure</a></code> | Any configuration or customization of the virtual machine takes place here. |

---

##### `configure` <a name="configure" id="shady-island.configuration.BucketSyncAddOn.configure"></a>

```typescript
public configure(starter: Starter): void
```

Any configuration or customization of the virtual machine takes place here.

###### `starter`<sup>Required</sup> <a name="starter" id="shady-island.configuration.BucketSyncAddOn.configure.parameter.starter"></a>

- *Type:* <a href="#shady-island.configuration.Starter">Starter</a>

---




### ElasticFileSystemAddOn <a name="ElasticFileSystemAddOn" id="shady-island.configuration.ElasticFileSystemAddOn"></a>

- *Implements:* <a href="#shady-island.configuration.IStarterAddOn">IStarterAddOn</a>

An add-on that configures a mount point for an EFS filesystem.

This add-on will produce a startup script to:
- Create the mount directory
- Mount the NFS filesystem to the mount point
- Optionally change the mode or ownership of the mount point

This visitor also configures the Security Groups on both ends.

#### Initializers <a name="Initializers" id="shady-island.configuration.ElasticFileSystemAddOn.Initializer"></a>

```typescript
import { configuration } from 'shady-island'

new configuration.ElasticFileSystemAddOn(filesystem: IFileSystem, destination: string, props?: ElasticFileSystemAddOnProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.configuration.ElasticFileSystemAddOn.Initializer.parameter.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_efs.IFileSystem</code> | - The elastic filesystem to mount. |
| <code><a href="#shady-island.configuration.ElasticFileSystemAddOn.Initializer.parameter.destination">destination</a></code> | <code>string</code> | - The directory to use as the mount point. |
| <code><a href="#shady-island.configuration.ElasticFileSystemAddOn.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.configuration.ElasticFileSystemAddOnProps">ElasticFileSystemAddOnProps</a></code> | - Optional configuration properties. |

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="shady-island.configuration.ElasticFileSystemAddOn.Initializer.parameter.filesystem"></a>

- *Type:* aws-cdk-lib.aws_efs.IFileSystem

The elastic filesystem to mount.

---

##### `destination`<sup>Required</sup> <a name="destination" id="shady-island.configuration.ElasticFileSystemAddOn.Initializer.parameter.destination"></a>

- *Type:* string

The directory to use as the mount point.

---

##### `props`<sup>Optional</sup> <a name="props" id="shady-island.configuration.ElasticFileSystemAddOn.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.configuration.ElasticFileSystemAddOnProps">ElasticFileSystemAddOnProps</a>

Optional configuration properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.configuration.ElasticFileSystemAddOn.configure">configure</a></code> | Any configuration or customization of the virtual machine takes place here. |

---

##### `configure` <a name="configure" id="shady-island.configuration.ElasticFileSystemAddOn.configure"></a>

```typescript
public configure(starter: Starter): void
```

Any configuration or customization of the virtual machine takes place here.

###### `starter`<sup>Required</sup> <a name="starter" id="shady-island.configuration.ElasticFileSystemAddOn.configure.parameter.starter"></a>

- *Type:* <a href="#shady-island.configuration.Starter">Starter</a>

---




### InstanceFirewall <a name="InstanceFirewall" id="shady-island.configuration.InstanceFirewall"></a>

Produces the appropriate commands to configure an on-instance firewall.

#### Initializers <a name="Initializers" id="shady-island.configuration.InstanceFirewall.Initializer"></a>

```typescript
import { configuration } from 'shady-island'

new configuration.InstanceFirewall()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.configuration.InstanceFirewall.iptables">iptables</a></code> | Define an instance firewall using iptables/ip6tables. |

---

##### `iptables` <a name="iptables" id="shady-island.configuration.InstanceFirewall.iptables"></a>

```typescript
import { configuration } from 'shady-island'

configuration.InstanceFirewall.iptables()
```

Define an instance firewall using iptables/ip6tables.



### InstanceFirewallAddOn <a name="InstanceFirewallAddOn" id="shady-island.configuration.InstanceFirewallAddOn"></a>

- *Implements:* <a href="#shady-island.configuration.IStarterAddOn">IStarterAddOn</a>

An add-on that configures an on-instance firewall.

#### Initializers <a name="Initializers" id="shady-island.configuration.InstanceFirewallAddOn.Initializer"></a>

```typescript
import { configuration } from 'shady-island'

new configuration.InstanceFirewallAddOn(rules: IFirewallRules, props?: SinglePriorityProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.configuration.InstanceFirewallAddOn.Initializer.parameter.rules">rules</a></code> | <code><a href="#shady-island.configuration.IFirewallRules">IFirewallRules</a></code> | - The instance firewall rules. |
| <code><a href="#shady-island.configuration.InstanceFirewallAddOn.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.configuration.SinglePriorityProps">SinglePriorityProps</a></code> | - Optional configuration properties. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="shady-island.configuration.InstanceFirewallAddOn.Initializer.parameter.rules"></a>

- *Type:* <a href="#shady-island.configuration.IFirewallRules">IFirewallRules</a>

The instance firewall rules.

---

##### `props`<sup>Optional</sup> <a name="props" id="shady-island.configuration.InstanceFirewallAddOn.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.configuration.SinglePriorityProps">SinglePriorityProps</a>

Optional configuration properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.configuration.InstanceFirewallAddOn.configure">configure</a></code> | Any configuration or customization of the virtual machine takes place here. |

---

##### `configure` <a name="configure" id="shady-island.configuration.InstanceFirewallAddOn.configure"></a>

```typescript
public configure(starter: Starter): void
```

Any configuration or customization of the virtual machine takes place here.

###### `starter`<sup>Required</sup> <a name="starter" id="shady-island.configuration.InstanceFirewallAddOn.configure.parameter.starter"></a>

- *Type:* <a href="#shady-island.configuration.Starter">Starter</a>

---




### ShellCommands <a name="ShellCommands" id="shady-island.configuration.ShellCommands"></a>

A utility class that provides POSIX shell commands for User Data scripts.

#### Initializers <a name="Initializers" id="shady-island.configuration.ShellCommands.Initializer"></a>

```typescript
import { configuration } from 'shady-island'

new configuration.ShellCommands()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.configuration.ShellCommands.addDirectory">addDirectory</a></code> | Uses either `mkdir` or `install` to create a directory. |
| <code><a href="#shady-island.configuration.ShellCommands.changeOwnership">changeOwnership</a></code> | Gets a command to change the ownership and/or group membership of a file. |
| <code><a href="#shady-island.configuration.ShellCommands.disableUnattendedUpgrades">disableUnattendedUpgrades</a></code> | Gets a command to disable unattended package upgrades on Debian/Ubuntu. |
| <code><a href="#shady-island.configuration.ShellCommands.downloadSecret">downloadSecret</a></code> | Gets the command to download a Secrets Manager secret to the filesystem. |
| <code><a href="#shady-island.configuration.ShellCommands.mountElasticFileSystem">mountElasticFileSystem</a></code> | Gets the command to mount an EFS filesystem to a destination path. |
| <code><a href="#shady-island.configuration.ShellCommands.outputFile">outputFile</a></code> | Writes the literal contents of a string to a destination file. |
| <code><a href="#shady-island.configuration.ShellCommands.syncFromBucket">syncFromBucket</a></code> | Gets commands to synchronize objects from an S3 bucket to the filesystem. |

---

##### `addDirectory` <a name="addDirectory" id="shady-island.configuration.ShellCommands.addDirectory"></a>

```typescript
import { configuration } from 'shady-island'

configuration.ShellCommands.addDirectory(name: string, options?: AddDirectoryOptions)
```

Uses either `mkdir` or `install` to create a directory.

###### `name`<sup>Required</sup> <a name="name" id="shady-island.configuration.ShellCommands.addDirectory.parameter.name"></a>

- *Type:* string

The name of the directory to create.

---

###### `options`<sup>Optional</sup> <a name="options" id="shady-island.configuration.ShellCommands.addDirectory.parameter.options"></a>

- *Type:* <a href="#shady-island.configuration.AddDirectoryOptions">AddDirectoryOptions</a>

Configuration options.

---

##### `changeOwnership` <a name="changeOwnership" id="shady-island.configuration.ShellCommands.changeOwnership"></a>

```typescript
import { configuration } from 'shady-island'

configuration.ShellCommands.changeOwnership(filename: string, uid?: string, gid?: string)
```

Gets a command to change the ownership and/or group membership of a file.

If both `uid` and `gid` are provided, this method returns a single
`chown` command to set both values. If just `uid` is provided, this method
returns a single `chown` command that sets the owner. If just `gid` is
provided, this method returns a single `chgrp` command. If neither are
provided, this method returns an empty array.

###### `filename`<sup>Required</sup> <a name="filename" id="shady-island.configuration.ShellCommands.changeOwnership.parameter.filename"></a>

- *Type:* string

The local filesystem path to the file or directory.

---

###### `uid`<sup>Optional</sup> <a name="uid" id="shady-island.configuration.ShellCommands.changeOwnership.parameter.uid"></a>

- *Type:* string

Optional.

The owner username or uid.

---

###### `gid`<sup>Optional</sup> <a name="gid" id="shady-island.configuration.ShellCommands.changeOwnership.parameter.gid"></a>

- *Type:* string

Optional.

The group name or gid.

---

##### `disableUnattendedUpgrades` <a name="disableUnattendedUpgrades" id="shady-island.configuration.ShellCommands.disableUnattendedUpgrades"></a>

```typescript
import { configuration } from 'shady-island'

configuration.ShellCommands.disableUnattendedUpgrades()
```

Gets a command to disable unattended package upgrades on Debian/Ubuntu.

##### `downloadSecret` <a name="downloadSecret" id="shady-island.configuration.ShellCommands.downloadSecret"></a>

```typescript
import { configuration } from 'shady-island'

configuration.ShellCommands.downloadSecret(secret: ISecret, destination: string)
```

Gets the command to download a Secrets Manager secret to the filesystem.

Be sure to grant your autoscaling group or EC2 instance read access.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.configuration.ShellCommands.downloadSecret.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The secret to download.

---

###### `destination`<sup>Required</sup> <a name="destination" id="shady-island.configuration.ShellCommands.downloadSecret.parameter.destination"></a>

- *Type:* string

The local filesystem path where the secret is stored.

---

##### `mountElasticFileSystem` <a name="mountElasticFileSystem" id="shady-island.configuration.ShellCommands.mountElasticFileSystem"></a>

```typescript
import { configuration } from 'shady-island'

configuration.ShellCommands.mountElasticFileSystem(filesystem: IFileSystem, destination: string)
```

Gets the command to mount an EFS filesystem to a destination path.

Be sure to grant your autoscaling group or EC2 instance network access.

###### `filesystem`<sup>Required</sup> <a name="filesystem" id="shady-island.configuration.ShellCommands.mountElasticFileSystem.parameter.filesystem"></a>

- *Type:* aws-cdk-lib.aws_efs.IFileSystem

The EFS filesystem.

---

###### `destination`<sup>Required</sup> <a name="destination" id="shady-island.configuration.ShellCommands.mountElasticFileSystem.parameter.destination"></a>

- *Type:* string

The local filesystem path for the mount point.

---

##### `outputFile` <a name="outputFile" id="shady-island.configuration.ShellCommands.outputFile"></a>

```typescript
import { configuration } from 'shady-island'

configuration.ShellCommands.outputFile(contents: string, destination: string, options?: OutputFileOptions)
```

Writes the literal contents of a string to a destination file.

###### `contents`<sup>Required</sup> <a name="contents" id="shady-island.configuration.ShellCommands.outputFile.parameter.contents"></a>

- *Type:* string

The file contents.

---

###### `destination`<sup>Required</sup> <a name="destination" id="shady-island.configuration.ShellCommands.outputFile.parameter.destination"></a>

- *Type:* string

The filename to output.

---

###### `options`<sup>Optional</sup> <a name="options" id="shady-island.configuration.ShellCommands.outputFile.parameter.options"></a>

- *Type:* <a href="#shady-island.configuration.OutputFileOptions">OutputFileOptions</a>

Configuration options.

---

##### `syncFromBucket` <a name="syncFromBucket" id="shady-island.configuration.ShellCommands.syncFromBucket"></a>

```typescript
import { configuration } from 'shady-island'

configuration.ShellCommands.syncFromBucket(bucket: IBucket, destinations: {[ key: string ]: string})
```

Gets commands to synchronize objects from an S3 bucket to the filesystem.

e.g. `syncFromBucket(bucket, {"nginx-config": "/etc/nginx"})`.

Be sure to grant your autoscaling group or EC2 instance read access.

###### `bucket`<sup>Required</sup> <a name="bucket" id="shady-island.configuration.ShellCommands.syncFromBucket.parameter.bucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

The source bucket.

---

###### `destinations`<sup>Required</sup> <a name="destinations" id="shady-island.configuration.ShellCommands.syncFromBucket.parameter.destinations"></a>

- *Type:* {[ key: string ]: string}

Record with S3 object keys to filesystem path values.

---



### Starter <a name="Starter" id="shady-island.configuration.Starter"></a>

- *Implements:* aws-cdk-lib.aws_ec2.IConnectable, aws-cdk-lib.aws_iam.IGrantable

Orchestrates the startup process of EC2 instances.

A `Starter` is a registry for add-ons. Each add-on can add permissions to the
role, network rules to the security group, or scripts to the user data.

Scripts are prioritized, so add-ons can be registered out of order but their
scripts will appear in the user data in order of priority.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.configuration.Starter.addScript">addScript</a></code> | Add one or more commands to the user data at a specific priority. |
| <code><a href="#shady-island.configuration.Starter.withAddOns">withAddOns</a></code> | Register add-ons with this Starter. |

---

##### `addScript` <a name="addScript" id="shady-island.configuration.Starter.addScript"></a>

```typescript
public addScript(priority: number, commands: ...string[]): Starter
```

Add one or more commands to the user data at a specific priority.

###### `priority`<sup>Required</sup> <a name="priority" id="shady-island.configuration.Starter.addScript.parameter.priority"></a>

- *Type:* number

The priority of these lines (lower executes earlier).

---

###### `commands`<sup>Required</sup> <a name="commands" id="shady-island.configuration.Starter.addScript.parameter.commands"></a>

- *Type:* ...string[]

The lines to add.

---

##### `withAddOns` <a name="withAddOns" id="shady-island.configuration.Starter.withAddOns"></a>

```typescript
public withAddOns(addons: ...IStarterAddOn[]): Starter
```

Register add-ons with this Starter.

###### `addons`<sup>Required</sup> <a name="addons" id="shady-island.configuration.Starter.withAddOns.parameter.addons"></a>

- *Type:* ...<a href="#shady-island.configuration.IStarterAddOn">IStarterAddOn</a>[]

The add-ons to register.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.configuration.Starter.forAutoScalingGroup">forAutoScalingGroup</a></code> | Create a Starter for an auto-scaling group. |
| <code><a href="#shady-island.configuration.Starter.forInstance">forInstance</a></code> | Create a Starter for a single EC2 instance3. |
| <code><a href="#shady-island.configuration.Starter.forLaunchTemplate">forLaunchTemplate</a></code> | Create a Starter for a Launch Template. |

---

##### `forAutoScalingGroup` <a name="forAutoScalingGroup" id="shady-island.configuration.Starter.forAutoScalingGroup"></a>

```typescript
import { configuration } from 'shady-island'

configuration.Starter.forAutoScalingGroup(group: AutoScalingGroup)
```

Create a Starter for an auto-scaling group.

###### `group`<sup>Required</sup> <a name="group" id="shady-island.configuration.Starter.forAutoScalingGroup.parameter.group"></a>

- *Type:* aws-cdk-lib.aws_autoscaling.AutoScalingGroup

The auto-scaling group.

---

##### `forInstance` <a name="forInstance" id="shady-island.configuration.Starter.forInstance"></a>

```typescript
import { configuration } from 'shady-island'

configuration.Starter.forInstance(instance: Instance)
```

Create a Starter for a single EC2 instance3.

###### `instance`<sup>Required</sup> <a name="instance" id="shady-island.configuration.Starter.forInstance.parameter.instance"></a>

- *Type:* aws-cdk-lib.aws_ec2.Instance

The instance.

---

##### `forLaunchTemplate` <a name="forLaunchTemplate" id="shady-island.configuration.Starter.forLaunchTemplate"></a>

```typescript
import { configuration } from 'shady-island'

configuration.Starter.forLaunchTemplate(template: LaunchTemplate)
```

Create a Starter for a Launch Template.

The launch template _must_ have a defined user data property, or this
method will throw an error.

###### `template`<sup>Required</sup> <a name="template" id="shady-island.configuration.Starter.forLaunchTemplate.parameter.template"></a>

- *Type:* aws-cdk-lib.aws_ec2.LaunchTemplate

The launch template.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.configuration.Starter.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#shady-island.configuration.Starter.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#shady-island.configuration.Starter.property.orderedLines">orderedLines</a></code> | <code>string[]</code> | All lines of the startup script in priority order. |

---

##### `connections`<sup>Required</sup> <a name="connections" id="shady-island.configuration.Starter.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="shady-island.configuration.Starter.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `orderedLines`<sup>Required</sup> <a name="orderedLines" id="shady-island.configuration.Starter.property.orderedLines"></a>

```typescript
public readonly orderedLines: string[];
```

- *Type:* string[]

All lines of the startup script in priority order.

---


### UpdateRoute53AddOn <a name="UpdateRoute53AddOn" id="shady-island.configuration.UpdateRoute53AddOn"></a>

- *Implements:* <a href="#shady-island.configuration.IStarterAddOn">IStarterAddOn</a>

An add-on that updates Route 53 with instance public-facing IP addresses.

This add-on also configures the necessary IAM policy.

#### Initializers <a name="Initializers" id="shady-island.configuration.UpdateRoute53AddOn.Initializer"></a>

```typescript
import { configuration } from 'shady-island'

new configuration.UpdateRoute53AddOn(zone: IHostedZone, subdomain: string, props?: UpdateRoute53AddOnProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.configuration.UpdateRoute53AddOn.Initializer.parameter.zone">zone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | - The Route 53 hosted zone. |
| <code><a href="#shady-island.configuration.UpdateRoute53AddOn.Initializer.parameter.subdomain">subdomain</a></code> | <code>string</code> | - The subdomain of the DNS record. |
| <code><a href="#shady-island.configuration.UpdateRoute53AddOn.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.configuration.UpdateRoute53AddOnProps">UpdateRoute53AddOnProps</a></code> | - Optional configuration properties. |

---

##### `zone`<sup>Required</sup> <a name="zone" id="shady-island.configuration.UpdateRoute53AddOn.Initializer.parameter.zone"></a>

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

The Route 53 hosted zone.

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="shady-island.configuration.UpdateRoute53AddOn.Initializer.parameter.subdomain"></a>

- *Type:* string

The subdomain of the DNS record.

---

##### `props`<sup>Optional</sup> <a name="props" id="shady-island.configuration.UpdateRoute53AddOn.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.configuration.UpdateRoute53AddOnProps">UpdateRoute53AddOnProps</a>

Optional configuration properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.configuration.UpdateRoute53AddOn.configure">configure</a></code> | Any configuration or customization of the virtual machine takes place here. |

---

##### `configure` <a name="configure" id="shady-island.configuration.UpdateRoute53AddOn.configure"></a>

```typescript
public configure(starter: Starter): void
```

Any configuration or customization of the virtual machine takes place here.

###### `starter`<sup>Required</sup> <a name="starter" id="shady-island.configuration.UpdateRoute53AddOn.configure.parameter.starter"></a>

- *Type:* <a href="#shady-island.configuration.Starter">Starter</a>

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IFirewallRules <a name="IFirewallRules" id="shady-island.configuration.IFirewallRules"></a>

- *Implemented By:* <a href="#shady-island.configuration.IFirewallRules">IFirewallRules</a>

Used to configure on-instance firewall rules (e.g. iptables, firewalld).

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.configuration.IFirewallRules.buildCommands">buildCommands</a></code> | Retrieves the shell commands used to configure the instance firewall. |
| <code><a href="#shady-island.configuration.IFirewallRules.inbound">inbound</a></code> | Declare an inbound rule. |
| <code><a href="#shady-island.configuration.IFirewallRules.inboundFromAnyIpv4">inboundFromAnyIpv4</a></code> | Declare an inbound rule that covers all IPv4 addresses. |
| <code><a href="#shady-island.configuration.IFirewallRules.inboundFromAnyIpv6">inboundFromAnyIpv6</a></code> | Declare an inbound rule that covers all IPv6 addresses. |
| <code><a href="#shady-island.configuration.IFirewallRules.outbound">outbound</a></code> | Declare an outbound rule. |
| <code><a href="#shady-island.configuration.IFirewallRules.outboundToAnyIpv4">outboundToAnyIpv4</a></code> | Declare an outbound rule that covers all IPv4 addresses. |
| <code><a href="#shady-island.configuration.IFirewallRules.outboundToAnyIpv6">outboundToAnyIpv6</a></code> | Declare an outbound rule that covers all IPv6 addresses. |

---

##### `buildCommands` <a name="buildCommands" id="shady-island.configuration.IFirewallRules.buildCommands"></a>

```typescript
public buildCommands(): string[]
```

Retrieves the shell commands used to configure the instance firewall.

##### `inbound` <a name="inbound" id="shady-island.configuration.IFirewallRules.inbound"></a>

```typescript
public inbound(port: Port, address: Address): IFirewallRules
```

Declare an inbound rule.

Only the following protocols are allowed: TCP, UDP, ICMP, and ICMPv6. The
address can be a single address or a range of addresses in CIDR notation.

###### `port`<sup>Required</sup> <a name="port" id="shady-island.configuration.IFirewallRules.inbound.parameter.port"></a>

- *Type:* aws-cdk-lib.aws_ec2.Port

The ingress port.

---

###### `address`<sup>Required</sup> <a name="address" id="shady-island.configuration.IFirewallRules.inbound.parameter.address"></a>

- *Type:* shady-island.networking.Address

The source address.

---

##### `inboundFromAnyIpv4` <a name="inboundFromAnyIpv4" id="shady-island.configuration.IFirewallRules.inboundFromAnyIpv4"></a>

```typescript
public inboundFromAnyIpv4(port: Port): IFirewallRules
```

Declare an inbound rule that covers all IPv4 addresses.

Only the following protocols are allowed: TCP, UDP, ICMP, and ICMPv6.

###### `port`<sup>Required</sup> <a name="port" id="shady-island.configuration.IFirewallRules.inboundFromAnyIpv4.parameter.port"></a>

- *Type:* aws-cdk-lib.aws_ec2.Port

The ingress port.

---

##### `inboundFromAnyIpv6` <a name="inboundFromAnyIpv6" id="shady-island.configuration.IFirewallRules.inboundFromAnyIpv6"></a>

```typescript
public inboundFromAnyIpv6(port: Port): IFirewallRules
```

Declare an inbound rule that covers all IPv6 addresses.

Only the following protocols are allowed: TCP, UDP, ICMP, and ICMPv6.

###### `port`<sup>Required</sup> <a name="port" id="shady-island.configuration.IFirewallRules.inboundFromAnyIpv6.parameter.port"></a>

- *Type:* aws-cdk-lib.aws_ec2.Port

The ingress port.

---

##### `outbound` <a name="outbound" id="shady-island.configuration.IFirewallRules.outbound"></a>

```typescript
public outbound(port: Port, address: Address): IFirewallRules
```

Declare an outbound rule.

Only the following protocols are allowed: TCP, UDP, ICMP, and ICMPv6. The
address can be a single address or a range of addresses in CIDR notation.

###### `port`<sup>Required</sup> <a name="port" id="shady-island.configuration.IFirewallRules.outbound.parameter.port"></a>

- *Type:* aws-cdk-lib.aws_ec2.Port

The egress port.

---

###### `address`<sup>Required</sup> <a name="address" id="shady-island.configuration.IFirewallRules.outbound.parameter.address"></a>

- *Type:* shady-island.networking.Address

The target address.

---

##### `outboundToAnyIpv4` <a name="outboundToAnyIpv4" id="shady-island.configuration.IFirewallRules.outboundToAnyIpv4"></a>

```typescript
public outboundToAnyIpv4(port: Port): IFirewallRules
```

Declare an outbound rule that covers all IPv4 addresses.

Only the following protocols are allowed: TCP, UDP, and ICMP.

###### `port`<sup>Required</sup> <a name="port" id="shady-island.configuration.IFirewallRules.outboundToAnyIpv4.parameter.port"></a>

- *Type:* aws-cdk-lib.aws_ec2.Port

The egress port.

---

##### `outboundToAnyIpv6` <a name="outboundToAnyIpv6" id="shady-island.configuration.IFirewallRules.outboundToAnyIpv6"></a>

```typescript
public outboundToAnyIpv6(port: Port): IFirewallRules
```

Declare an outbound rule that covers all IPv6 addresses.

Only the following protocols are allowed: TCP, UDP, and ICMPv6.

###### `port`<sup>Required</sup> <a name="port" id="shady-island.configuration.IFirewallRules.outboundToAnyIpv6.parameter.port"></a>

- *Type:* aws-cdk-lib.aws_ec2.Port

The egress port.

---


### IStarterAddOn <a name="IStarterAddOn" id="shady-island.configuration.IStarterAddOn"></a>

- *Implemented By:* <a href="#shady-island.configuration.BucketSyncAddOn">BucketSyncAddOn</a>, <a href="#shady-island.configuration.ElasticFileSystemAddOn">ElasticFileSystemAddOn</a>, <a href="#shady-island.configuration.InstanceFirewallAddOn">InstanceFirewallAddOn</a>, <a href="#shady-island.configuration.UpdateRoute53AddOn">UpdateRoute53AddOn</a>, <a href="#shady-island.configuration.IStarterAddOn">IStarterAddOn</a>

A component involved in the startup process of an EC2 instance.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.configuration.IStarterAddOn.configure">configure</a></code> | Any configuration or customization of the virtual machine takes place here. |

---

##### `configure` <a name="configure" id="shady-island.configuration.IStarterAddOn.configure"></a>

```typescript
public configure(starter: Starter): void
```

Any configuration or customization of the virtual machine takes place here.

###### `starter`<sup>Required</sup> <a name="starter" id="shady-island.configuration.IStarterAddOn.configure.parameter.starter"></a>

- *Type:* <a href="#shady-island.configuration.Starter">Starter</a>

The starter that can be configured.

---


