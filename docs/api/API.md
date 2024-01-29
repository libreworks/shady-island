# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### AssignOnLaunch <a name="shady-island.AssignOnLaunch" id="shadyislandassignonlaunch"></a>

- *Implements:* [`shady-island.IAssignOnLaunch`](#shady-island.IAssignOnLaunch)

Enables the "assignIpv6AddressOnCreation" attribute on selected subnets.

> {@link https://github.com/aws/aws-cdk/issues/5927}

#### Initializers <a name="shady-island.AssignOnLaunch.Initializer" id="shadyislandassignonlaunchinitializer"></a>

```typescript
import { AssignOnLaunch } from 'shady-island'

new AssignOnLaunch(scope: Construct, id: string, options: AssignOnLaunchProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#shadyislandassignonlaunchparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The construct scope. |
| [`id`](#shadyislandassignonlaunchparameterid)<span title="Required">*</span> | `string` | The construct ID. |
| [`options`](#shadyislandassignonlaunchparameteroptions)<span title="Required">*</span> | [`shady-island.AssignOnLaunchProps`](#shady-island.AssignOnLaunchProps) | The constructor options. |

---

##### `scope`<sup>Required</sup> <a name="shady-island.AssignOnLaunch.parameter.scope" id="shadyislandassignonlaunchparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The construct scope.

---

##### `id`<sup>Required</sup> <a name="shady-island.AssignOnLaunch.parameter.id" id="shadyislandassignonlaunchparameterid"></a>

- *Type:* `string`

The construct ID.

---

##### `options`<sup>Required</sup> <a name="shady-island.AssignOnLaunch.parameter.options" id="shadyislandassignonlaunchparameteroptions"></a>

- *Type:* [`shady-island.AssignOnLaunchProps`](#shady-island.AssignOnLaunchProps)

The constructor options.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vpc`](#shadyislandassignonlaunchpropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The IPv6-enabled VPC. |
| [`vpcPlacement`](#shadyislandassignonlaunchpropertyvpcplacement)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.SelectedSubnets`](#aws-cdk-lib.aws_ec2.SelectedSubnets) | The chosen subnets for address assignment on ENI launch. |

---

##### `vpc`<sup>Required</sup> <a name="shady-island.AssignOnLaunch.property.vpc" id="shadyislandassignonlaunchpropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The IPv6-enabled VPC.

---

##### `vpcPlacement`<sup>Required</sup> <a name="shady-island.AssignOnLaunch.property.vpcPlacement" id="shadyislandassignonlaunchpropertyvpcplacement"></a>

```typescript
public readonly vpcPlacement: SelectedSubnets;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SelectedSubnets`](#aws-cdk-lib.aws_ec2.SelectedSubnets)

The chosen subnets for address assignment on ENI launch.

---


### BaseDatabase <a name="shady-island.BaseDatabase" id="shadyislandbasedatabase"></a>

- *Implements:* [`shady-island.IDatabase`](#shady-island.IDatabase)

A database.

#### Initializers <a name="shady-island.BaseDatabase.Initializer" id="shadyislandbasedatabaseinitializer"></a>

```typescript
import { BaseDatabase } from 'shady-island'

new BaseDatabase(scope: IConstruct, id: string, props: BaseDatabaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#shadyislandbasedatabaseparameterscope)<span title="Required">*</span> | [`constructs.IConstruct`](#constructs.IConstruct) | The Construct that contains this one. |
| [`id`](#shadyislandbasedatabaseparameterid)<span title="Required">*</span> | `string` | The identifier of this construct. |
| [`props`](#shadyislandbasedatabaseparameterprops)<span title="Required">*</span> | [`shady-island.BaseDatabaseProps`](#shady-island.BaseDatabaseProps) | The configuration properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="shady-island.BaseDatabase.parameter.scope" id="shadyislandbasedatabaseparameterscope"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

The Construct that contains this one.

---

##### `id`<sup>Required</sup> <a name="shady-island.BaseDatabase.parameter.id" id="shadyislandbasedatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

##### `props`<sup>Required</sup> <a name="shady-island.BaseDatabase.parameter.props" id="shadyislandbasedatabaseparameterprops"></a>

- *Type:* [`shady-island.BaseDatabaseProps`](#shady-island.BaseDatabaseProps)

The configuration properties for this construct.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`addUserAsOwner`](#shadyislandbasedatabaseadduserasowner) | Declares a new database user to be assigned ownership permissions. |
| [`addUserAsReader`](#shadyislandbasedatabaseadduserasreader) | Declares a new database user to be assigned read-only permissions. |
| [`addUserAsUnprivileged`](#shadyislandbasedatabaseadduserasunprivileged) | Declares a new database user with no permissions. |

---

##### `addUserAsOwner` <a name="shady-island.BaseDatabase.addUserAsOwner" id="shadyislandbasedatabaseadduserasowner"></a>

```typescript
public addUserAsOwner(secret: ISecret)
```

###### `secret`<sup>Required</sup> <a name="shady-island.BaseDatabase.parameter.secret" id="shadyislandbasedatabaseparametersecret"></a>

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---

##### `addUserAsReader` <a name="shady-island.BaseDatabase.addUserAsReader" id="shadyislandbasedatabaseadduserasreader"></a>

```typescript
public addUserAsReader(secret: ISecret)
```

###### `secret`<sup>Required</sup> <a name="shady-island.BaseDatabase.parameter.secret" id="shadyislandbasedatabaseparametersecret"></a>

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---

##### `addUserAsUnprivileged` <a name="shady-island.BaseDatabase.addUserAsUnprivileged" id="shadyislandbasedatabaseadduserasunprivileged"></a>

```typescript
public addUserAsUnprivileged(secret: ISecret)
```

###### `secret`<sup>Required</sup> <a name="shady-island.BaseDatabase.parameter.secret" id="shadyislandbasedatabaseparametersecret"></a>

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`databaseName`](#shadyislandbasedatabasepropertydatabasename)<span title="Required">*</span> | `string` | The name of the database/catalog. |
| [`endpoint`](#shadyislandbasedatabasepropertyendpoint)<span title="Required">*</span> | [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint) | The cluster or instance endpoint. |
| [`trigger`](#shadyislandbasedatabasepropertytrigger)<span title="Required">*</span> | [`aws-cdk-lib.triggers.ITrigger`](#aws-cdk-lib.triggers.ITrigger) | The CDK Trigger that kicks off the process. |

---

##### `databaseName`<sup>Required</sup> <a name="shady-island.BaseDatabase.property.databaseName" id="shadyislandbasedatabasepropertydatabasename"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* `string`

The name of the database/catalog.

---

##### `endpoint`<sup>Required</sup> <a name="shady-island.BaseDatabase.property.endpoint" id="shadyislandbasedatabasepropertyendpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint)

The cluster or instance endpoint.

---

##### `trigger`<sup>Required</sup> <a name="shady-island.BaseDatabase.property.trigger" id="shadyislandbasedatabasepropertytrigger"></a>

```typescript
public readonly trigger: ITrigger;
```

- *Type:* [`aws-cdk-lib.triggers.ITrigger`](#aws-cdk-lib.triggers.ITrigger)

The CDK Trigger that kicks off the process.

You can further customize when the trigger fires using `executeAfter`.

---


### CidrContext <a name="shady-island.CidrContext" id="shadyislandcidrcontext"></a>

- *Implements:* [`shady-island.ICidrContext`](#shady-island.ICidrContext)

Allocates IPv6 CIDRs and routes for subnets in a VPC.

> {@link https://github.com/aws/aws-cdk/issues/5927}

#### Initializers <a name="shady-island.CidrContext.Initializer" id="shadyislandcidrcontextinitializer"></a>

```typescript
import { CidrContext } from 'shady-island'

new CidrContext(scope: Construct, id: string, options: CidrContextProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#shadyislandcidrcontextparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The construct scope. |
| [`id`](#shadyislandcidrcontextparameterid)<span title="Required">*</span> | `string` | The construct ID. |
| [`options`](#shadyislandcidrcontextparameteroptions)<span title="Required">*</span> | [`shady-island.CidrContextProps`](#shady-island.CidrContextProps) | The constructor options. |

---

##### `scope`<sup>Required</sup> <a name="shady-island.CidrContext.parameter.scope" id="shadyislandcidrcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The construct scope.

---

##### `id`<sup>Required</sup> <a name="shady-island.CidrContext.parameter.id" id="shadyislandcidrcontextparameterid"></a>

- *Type:* `string`

The construct ID.

---

##### `options`<sup>Required</sup> <a name="shady-island.CidrContext.parameter.options" id="shadyislandcidrcontextparameteroptions"></a>

- *Type:* [`shady-island.CidrContextProps`](#shady-island.CidrContextProps)

The constructor options.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vpc`](#shadyislandcidrcontextpropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The IPv6-enabled VPC. |

---

##### `vpc`<sup>Required</sup> <a name="shady-island.CidrContext.property.vpc" id="shadyislandcidrcontextpropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The IPv6-enabled VPC.

---


### ContextLoadingStage <a name="shady-island.ContextLoadingStage" id="shadyislandcontextloadingstage"></a>

A Stage that can load context values from a JSON file.

#### Initializers <a name="shady-island.ContextLoadingStage.Initializer" id="shadyislandcontextloadingstageinitializer"></a>

```typescript
import { ContextLoadingStage } from 'shady-island'

new ContextLoadingStage(scope: Construct, id: string, props: ContextLoadingStageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#shadyislandcontextloadingstageparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#shadyislandcontextloadingstageparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`props`](#shadyislandcontextloadingstageparameterprops)<span title="Required">*</span> | [`shady-island.ContextLoadingStageProps`](#shady-island.ContextLoadingStageProps) | Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="shady-island.ContextLoadingStage.parameter.scope" id="shadyislandcontextloadingstageparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="shady-island.ContextLoadingStage.parameter.id" id="shadyislandcontextloadingstageparameterid"></a>

- *Type:* `string`

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="shady-island.ContextLoadingStage.parameter.props" id="shadyislandcontextloadingstageparameterprops"></a>

- *Type:* [`shady-island.ContextLoadingStageProps`](#shady-island.ContextLoadingStageProps)

Initialization properties for this construct.

---





### DeploymentTierStage <a name="shady-island.DeploymentTierStage" id="shadyislanddeploymenttierstage"></a>

A Stage whose stacks are part of a single deployment tier.

#### Initializers <a name="shady-island.DeploymentTierStage.Initializer" id="shadyislanddeploymenttierstageinitializer"></a>

```typescript
import { DeploymentTierStage } from 'shady-island'

new DeploymentTierStage(scope: Construct, id: string, props: DeploymentTierStageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#shadyislanddeploymenttierstageparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#shadyislanddeploymenttierstageparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`props`](#shadyislanddeploymenttierstageparameterprops)<span title="Required">*</span> | [`shady-island.DeploymentTierStageProps`](#shady-island.DeploymentTierStageProps) | Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="shady-island.DeploymentTierStage.parameter.scope" id="shadyislanddeploymenttierstageparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="shady-island.DeploymentTierStage.parameter.id" id="shadyislanddeploymenttierstageparameterid"></a>

- *Type:* `string`

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="shady-island.DeploymentTierStage.parameter.props" id="shadyislanddeploymenttierstageparameterprops"></a>

- *Type:* [`shady-island.DeploymentTierStageProps`](#shady-island.DeploymentTierStageProps)

Initialization properties for this construct.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`inProduction`](#shadyislanddeploymenttierstagepropertyinproduction)<span title="Required">*</span> | `boolean` | Whether this stage is considered a production deployment. |
| [`tier`](#shadyislanddeploymenttierstagepropertytier)<span title="Required">*</span> | [`shady-island.Tier`](#shady-island.Tier) | *No description.* |

---

##### `inProduction`<sup>Required</sup> <a name="shady-island.DeploymentTierStage.property.inProduction" id="shadyislanddeploymenttierstagepropertyinproduction"></a>

```typescript
public readonly inProduction: boolean;
```

- *Type:* `boolean`

Whether this stage is considered a production deployment.

---

##### `tier`<sup>Required</sup> <a name="shady-island.DeploymentTierStage.property.tier" id="shadyislanddeploymenttierstagepropertytier"></a>

```typescript
public readonly tier: Tier;
```

- *Type:* [`shady-island.Tier`](#shady-island.Tier)

---


### EncryptedFileSystem <a name="shady-island.EncryptedFileSystem" id="shadyislandencryptedfilesystem"></a>

- *Implements:* [`shady-island.IEncryptedFileSystem`](#shady-island.IEncryptedFileSystem)

An EncryptedFileSystem.

#### Initializers <a name="shady-island.EncryptedFileSystem.Initializer" id="shadyislandencryptedfilesysteminitializer"></a>

```typescript
import { EncryptedFileSystem } from 'shady-island'

new EncryptedFileSystem(scope: IConstruct, id: string, props: EncryptedFileSystemProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#shadyislandencryptedfilesystemparameterscope)<span title="Required">*</span> | [`constructs.IConstruct`](#constructs.IConstruct) | The Construct that contains this one. |
| [`id`](#shadyislandencryptedfilesystemparameterid)<span title="Required">*</span> | `string` | The identifier of this construct. |
| [`props`](#shadyislandencryptedfilesystemparameterprops)<span title="Required">*</span> | [`shady-island.EncryptedFileSystemProps`](#shady-island.EncryptedFileSystemProps) | The configuration properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="shady-island.EncryptedFileSystem.parameter.scope" id="shadyislandencryptedfilesystemparameterscope"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

The Construct that contains this one.

---

##### `id`<sup>Required</sup> <a name="shady-island.EncryptedFileSystem.parameter.id" id="shadyislandencryptedfilesystemparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

##### `props`<sup>Required</sup> <a name="shady-island.EncryptedFileSystem.parameter.props" id="shadyislandencryptedfilesystemparameterprops"></a>

- *Type:* [`shady-island.EncryptedFileSystemProps`](#shady-island.EncryptedFileSystemProps)

The configuration properties for this construct.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`fileSystem`](#shadyislandencryptedfilesystempropertyfilesystem)<span title="Required">*</span> | [`aws-cdk-lib.aws_efs.IFileSystem`](#aws-cdk-lib.aws_efs.IFileSystem) | The EFS file system. |
| [`key`](#shadyislandencryptedfilesystempropertykey)<span title="Required">*</span> | [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey) | The KMS encryption key. |

---

##### `fileSystem`<sup>Required</sup> <a name="shady-island.EncryptedFileSystem.property.fileSystem" id="shadyislandencryptedfilesystempropertyfilesystem"></a>

```typescript
public readonly fileSystem: IFileSystem;
```

- *Type:* [`aws-cdk-lib.aws_efs.IFileSystem`](#aws-cdk-lib.aws_efs.IFileSystem)

The EFS file system.

---

##### `key`<sup>Required</sup> <a name="shady-island.EncryptedFileSystem.property.key" id="shadyislandencryptedfilesystempropertykey"></a>

```typescript
public readonly key: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)

The KMS encryption key.

---


### EncryptedLogGroup <a name="shady-island.EncryptedLogGroup" id="shadyislandencryptedloggroup"></a>

- *Implements:* [`shady-island.IEncryptedLogGroup`](#shady-island.IEncryptedLogGroup)

A log group encrypted by a KMS customer managed key.

#### Initializers <a name="shady-island.EncryptedLogGroup.Initializer" id="shadyislandencryptedloggroupinitializer"></a>

```typescript
import { EncryptedLogGroup } from 'shady-island'

new EncryptedLogGroup(scope: Construct, id: string, props: EncryptedLogGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#shadyislandencryptedloggroupparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#shadyislandencryptedloggroupparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#shadyislandencryptedloggroupparameterprops)<span title="Required">*</span> | [`shady-island.EncryptedLogGroupProps`](#shady-island.EncryptedLogGroupProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="shady-island.EncryptedLogGroup.parameter.scope" id="shadyislandencryptedloggroupparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="shady-island.EncryptedLogGroup.parameter.id" id="shadyislandencryptedloggroupparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="shady-island.EncryptedLogGroup.parameter.props" id="shadyislandencryptedloggroupparameterprops"></a>

- *Type:* [`shady-island.EncryptedLogGroupProps`](#shady-island.EncryptedLogGroupProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#shadyislandencryptedloggrouppropertykey)<span title="Required">*</span> | [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey) | The KMS encryption key. |
| [`logGroup`](#shadyislandencryptedloggrouppropertyloggroup)<span title="Required">*</span> | [`aws-cdk-lib.aws_logs.ILogGroup`](#aws-cdk-lib.aws_logs.ILogGroup) | The log group. |

---

##### `key`<sup>Required</sup> <a name="shady-island.EncryptedLogGroup.property.key" id="shadyislandencryptedloggrouppropertykey"></a>

```typescript
public readonly key: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)

The KMS encryption key.

---

##### `logGroup`<sup>Required</sup> <a name="shady-island.EncryptedLogGroup.property.logGroup" id="shadyislandencryptedloggrouppropertyloggroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* [`aws-cdk-lib.aws_logs.ILogGroup`](#aws-cdk-lib.aws_logs.ILogGroup)

The log group.

---


### FargateTask <a name="shady-island.FargateTask" id="shadyislandfargatetask"></a>

- *Implements:* [`shady-island.IFargateTask`](#shady-island.IFargateTask)

An FargateTask.

If `vpcSubnets` is blank but `assignPublicIp` is set, the task will launch in Public subnets, otherwise the first available one of Private, Isolated, Public, in that order.

#### Initializers <a name="shady-island.FargateTask.Initializer" id="shadyislandfargatetaskinitializer"></a>

```typescript
import { FargateTask } from 'shady-island'

new FargateTask(scope: Construct, id: string, props: FargateTaskProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#shadyislandfargatetaskparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#shadyislandfargatetaskparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#shadyislandfargatetaskparameterprops)<span title="Required">*</span> | [`shady-island.FargateTaskProps`](#shady-island.FargateTaskProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="shady-island.FargateTask.parameter.scope" id="shadyislandfargatetaskparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="shady-island.FargateTask.parameter.id" id="shadyislandfargatetaskparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="shady-island.FargateTask.parameter.props" id="shadyislandfargatetaskparameterprops"></a>

- *Type:* [`shady-island.FargateTaskProps`](#shady-island.FargateTaskProps)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`grantRun`](#shadyislandfargatetaskgrantrun) | Grants permission to invoke ecs:RunTask on this task's cluster. |

---

##### `grantRun` <a name="shady-island.FargateTask.grantRun" id="shadyislandfargatetaskgrantrun"></a>

```typescript
public grantRun(grantee: IGrantable)
```

###### `grantee`<sup>Required</sup> <a name="shady-island.FargateTask.parameter.grantee" id="shadyislandfargatetaskparametergrantee"></a>

- *Type:* [`aws-cdk-lib.aws_iam.IGrantable`](#aws-cdk-lib.aws_iam.IGrantable)

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`awsVpcNetworkConfig`](#shadyislandfargatetaskpropertyawsvpcnetworkconfig)<span title="Required">*</span> | [`shady-island.FargateAwsVpcConfiguration`](#shady-island.FargateAwsVpcConfiguration) | Get the networkConfiguration.awsvpcConfiguration property to run this task. |
| [`cluster`](#shadyislandfargatetaskpropertycluster)<span title="Required">*</span> | [`aws-cdk-lib.aws_ecs.ICluster`](#aws-cdk-lib.aws_ecs.ICluster) | The name of the cluster that hosts the service. |
| [`connections`](#shadyislandfargatetaskpropertyconnections)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.Connections`](#aws-cdk-lib.aws_ec2.Connections) | The network connections associated with this resource. |
| [`taskDefinition`](#shadyislandfargatetaskpropertytaskdefinition)<span title="Required">*</span> | [`aws-cdk-lib.aws_ecs.FargateTaskDefinition`](#aws-cdk-lib.aws_ecs.FargateTaskDefinition) | The task definition that can be launched. |

---

##### `awsVpcNetworkConfig`<sup>Required</sup> <a name="shady-island.FargateTask.property.awsVpcNetworkConfig" id="shadyislandfargatetaskpropertyawsvpcnetworkconfig"></a>

```typescript
public readonly awsVpcNetworkConfig: FargateAwsVpcConfiguration;
```

- *Type:* [`shady-island.FargateAwsVpcConfiguration`](#shady-island.FargateAwsVpcConfiguration)

Get the networkConfiguration.awsvpcConfiguration property to run this task.

---

##### `cluster`<sup>Required</sup> <a name="shady-island.FargateTask.property.cluster" id="shadyislandfargatetaskpropertycluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* [`aws-cdk-lib.aws_ecs.ICluster`](#aws-cdk-lib.aws_ecs.ICluster)

The name of the cluster that hosts the service.

---

##### `connections`<sup>Required</sup> <a name="shady-island.FargateTask.property.connections" id="shadyislandfargatetaskpropertyconnections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* [`aws-cdk-lib.aws_ec2.Connections`](#aws-cdk-lib.aws_ec2.Connections)

The network connections associated with this resource.

---

##### `taskDefinition`<sup>Required</sup> <a name="shady-island.FargateTask.property.taskDefinition" id="shadyislandfargatetaskpropertytaskdefinition"></a>

```typescript
public readonly taskDefinition: FargateTaskDefinition;
```

- *Type:* [`aws-cdk-lib.aws_ecs.FargateTaskDefinition`](#aws-cdk-lib.aws_ecs.FargateTaskDefinition)

The task definition that can be launched.

---


### MysqlDatabase <a name="shady-island.MysqlDatabase" id="shadyislandmysqldatabase"></a>

A MySQL database.

#### Initializers <a name="shady-island.MysqlDatabase.Initializer" id="shadyislandmysqldatabaseinitializer"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

new MysqlDatabase(scope: IConstruct, id: string, props: MysqlDatabaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#shadyislandmysqldatabaseparameterscope)<span title="Required">*</span> | [`constructs.IConstruct`](#constructs.IConstruct) | The Construct that contains this one. |
| [`id`](#shadyislandmysqldatabaseparameterid)<span title="Required">*</span> | `string` | The identifier of this construct. |
| [`props`](#shadyislandmysqldatabaseparameterprops)<span title="Required">*</span> | [`shady-island.MysqlDatabaseProps`](#shady-island.MysqlDatabaseProps) | The configuration properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.scope" id="shadyislandmysqldatabaseparameterscope"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

The Construct that contains this one.

---

##### `id`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.id" id="shadyislandmysqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

##### `props`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.props" id="shadyislandmysqldatabaseparameterprops"></a>

- *Type:* [`shady-island.MysqlDatabaseProps`](#shady-island.MysqlDatabaseProps)

The configuration properties for this construct.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`addUserAsOwner`](#shadyislandmysqldatabaseadduserasowner) | Declares a new database user to be assigned ownership permissions. |
| [`addUserAsReader`](#shadyislandmysqldatabaseadduserasreader) | Declares a new database user to be assigned read-only permissions. |
| [`addUserAsUnprivileged`](#shadyislandmysqldatabaseadduserasunprivileged) | Declares a new database user with no permissions. |

---

##### `addUserAsOwner` <a name="shady-island.MysqlDatabase.addUserAsOwner" id="shadyislandmysqldatabaseadduserasowner"></a>

```typescript
public addUserAsOwner(secret: ISecret)
```

###### `secret`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.secret" id="shadyislandmysqldatabaseparametersecret"></a>

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---

##### `addUserAsReader` <a name="shady-island.MysqlDatabase.addUserAsReader" id="shadyislandmysqldatabaseadduserasreader"></a>

```typescript
public addUserAsReader(secret: ISecret)
```

###### `secret`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.secret" id="shadyislandmysqldatabaseparametersecret"></a>

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---

##### `addUserAsUnprivileged` <a name="shady-island.MysqlDatabase.addUserAsUnprivileged" id="shadyislandmysqldatabaseadduserasunprivileged"></a>

```typescript
public addUserAsUnprivileged(secret: ISecret)
```

###### `secret`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.secret" id="shadyislandmysqldatabaseparametersecret"></a>

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---

#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`forCluster`](#shadyislandmysqldatabaseforcluster) | Create a new MysqlDatabase inside a DatabaseCluster. |
| [`forClusterFromSnapshot`](#shadyislandmysqldatabaseforclusterfromsnapshot) | Create a new MysqlDatabase inside a DatabaseClusterFromSnapshot. |
| [`forInstance`](#shadyislandmysqldatabaseforinstance) | Create a new MysqlDatabase inside a DatabaseInstance. |
| [`forInstanceFromSnapshot`](#shadyislandmysqldatabaseforinstancefromsnapshot) | Create a new MysqlDatabase inside a DatabaseInstanceFromSnapshot. |
| [`forServerlessCluster`](#shadyislandmysqldatabaseforserverlesscluster) | Create a new MysqlDatabase inside a DatabaseCluster. |
| [`forServerlessClusterFromSnapshot`](#shadyislandmysqldatabaseforserverlessclusterfromsnapshot) | Create a new MysqlDatabase inside a DatabaseClusterFromSnapshot. |

---

##### `forCluster` <a name="shady-island.MysqlDatabase.forCluster" id="shadyislandmysqldatabaseforcluster"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.forCluster(scope: Construct, id: string, cluster: DatabaseCluster, options: MysqlDatabaseForClusterOptions)
```

###### `scope`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.scope" id="shadyislandmysqldatabaseparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.id" id="shadyislandmysqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.cluster" id="shadyislandmysqldatabaseparametercluster"></a>

- *Type:* [`aws-cdk-lib.aws_rds.DatabaseCluster`](#aws-cdk-lib.aws_rds.DatabaseCluster)

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.options" id="shadyislandmysqldatabaseparameteroptions"></a>

- *Type:* [`shady-island.MysqlDatabaseForClusterOptions`](#shady-island.MysqlDatabaseForClusterOptions)

The configuration properties for this construct.

---

##### `forClusterFromSnapshot` <a name="shady-island.MysqlDatabase.forClusterFromSnapshot" id="shadyislandmysqldatabaseforclusterfromsnapshot"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.forClusterFromSnapshot(scope: Construct, id: string, cluster: DatabaseClusterFromSnapshot, options: MysqlDatabaseForClusterOptions)
```

###### `scope`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.scope" id="shadyislandmysqldatabaseparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.id" id="shadyislandmysqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.cluster" id="shadyislandmysqldatabaseparametercluster"></a>

- *Type:* [`aws-cdk-lib.aws_rds.DatabaseClusterFromSnapshot`](#aws-cdk-lib.aws_rds.DatabaseClusterFromSnapshot)

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.options" id="shadyislandmysqldatabaseparameteroptions"></a>

- *Type:* [`shady-island.MysqlDatabaseForClusterOptions`](#shady-island.MysqlDatabaseForClusterOptions)

The configuration properties for this construct.

---

##### `forInstance` <a name="shady-island.MysqlDatabase.forInstance" id="shadyislandmysqldatabaseforinstance"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.forInstance(scope: Construct, id: string, instance: DatabaseInstance, options: MysqlDatabaseForClusterOptions)
```

###### `scope`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.scope" id="shadyislandmysqldatabaseparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.id" id="shadyislandmysqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

###### `instance`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.instance" id="shadyislandmysqldatabaseparameterinstance"></a>

- *Type:* [`aws-cdk-lib.aws_rds.DatabaseInstance`](#aws-cdk-lib.aws_rds.DatabaseInstance)

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.options" id="shadyislandmysqldatabaseparameteroptions"></a>

- *Type:* [`shady-island.MysqlDatabaseForClusterOptions`](#shady-island.MysqlDatabaseForClusterOptions)

The configuration properties for this construct.

---

##### `forInstanceFromSnapshot` <a name="shady-island.MysqlDatabase.forInstanceFromSnapshot" id="shadyislandmysqldatabaseforinstancefromsnapshot"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.forInstanceFromSnapshot(scope: Construct, id: string, instance: DatabaseInstanceFromSnapshot, options: MysqlDatabaseForClusterOptions)
```

###### `scope`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.scope" id="shadyislandmysqldatabaseparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.id" id="shadyislandmysqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

###### `instance`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.instance" id="shadyislandmysqldatabaseparameterinstance"></a>

- *Type:* [`aws-cdk-lib.aws_rds.DatabaseInstanceFromSnapshot`](#aws-cdk-lib.aws_rds.DatabaseInstanceFromSnapshot)

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.options" id="shadyislandmysqldatabaseparameteroptions"></a>

- *Type:* [`shady-island.MysqlDatabaseForClusterOptions`](#shady-island.MysqlDatabaseForClusterOptions)

The configuration properties for this construct.

---

##### `forServerlessCluster` <a name="shady-island.MysqlDatabase.forServerlessCluster" id="shadyislandmysqldatabaseforserverlesscluster"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.forServerlessCluster(scope: Construct, id: string, cluster: ServerlessCluster, options: MysqlDatabaseForServerlessClusterOptions)
```

###### `scope`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.scope" id="shadyislandmysqldatabaseparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.id" id="shadyislandmysqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.cluster" id="shadyislandmysqldatabaseparametercluster"></a>

- *Type:* [`aws-cdk-lib.aws_rds.ServerlessCluster`](#aws-cdk-lib.aws_rds.ServerlessCluster)

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.options" id="shadyislandmysqldatabaseparameteroptions"></a>

- *Type:* [`shady-island.MysqlDatabaseForServerlessClusterOptions`](#shady-island.MysqlDatabaseForServerlessClusterOptions)

The configuration properties for this construct.

---

##### `forServerlessClusterFromSnapshot` <a name="shady-island.MysqlDatabase.forServerlessClusterFromSnapshot" id="shadyislandmysqldatabaseforserverlessclusterfromsnapshot"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.forServerlessClusterFromSnapshot(scope: Construct, id: string, cluster: ServerlessClusterFromSnapshot, options: MysqlDatabaseForServerlessClusterOptions)
```

###### `scope`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.scope" id="shadyislandmysqldatabaseparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.id" id="shadyislandmysqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.cluster" id="shadyislandmysqldatabaseparametercluster"></a>

- *Type:* [`aws-cdk-lib.aws_rds.ServerlessClusterFromSnapshot`](#aws-cdk-lib.aws_rds.ServerlessClusterFromSnapshot)

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="shady-island.MysqlDatabase.parameter.options" id="shadyislandmysqldatabaseparameteroptions"></a>

- *Type:* [`shady-island.MysqlDatabaseForServerlessClusterOptions`](#shady-island.MysqlDatabaseForServerlessClusterOptions)

The configuration properties for this construct.

---

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`trigger`](#shadyislandmysqldatabasepropertytrigger)<span title="Required">*</span> | [`aws-cdk-lib.triggers.ITrigger`](#aws-cdk-lib.triggers.ITrigger) | The CDK Trigger that kicks off the process. |

---

##### `trigger`<sup>Required</sup> <a name="shady-island.MysqlDatabase.property.trigger" id="shadyislandmysqldatabasepropertytrigger"></a>

```typescript
public readonly trigger: ITrigger;
```

- *Type:* [`aws-cdk-lib.triggers.ITrigger`](#aws-cdk-lib.triggers.ITrigger)

The CDK Trigger that kicks off the process.

You can further customize when the trigger fires using `executeAfter`.

---


### PostgresqlDatabase <a name="shady-island.PostgresqlDatabase" id="shadyislandpostgresqldatabase"></a>

A PostgreSQL database.

#### Initializers <a name="shady-island.PostgresqlDatabase.Initializer" id="shadyislandpostgresqldatabaseinitializer"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

new PostgresqlDatabase(scope: IConstruct, id: string, props: PostgresqlDatabaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#shadyislandpostgresqldatabaseparameterscope)<span title="Required">*</span> | [`constructs.IConstruct`](#constructs.IConstruct) | The Construct that contains this one. |
| [`id`](#shadyislandpostgresqldatabaseparameterid)<span title="Required">*</span> | `string` | The identifier of this construct. |
| [`props`](#shadyislandpostgresqldatabaseparameterprops)<span title="Required">*</span> | [`shady-island.PostgresqlDatabaseProps`](#shady-island.PostgresqlDatabaseProps) | The configuration properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.scope" id="shadyislandpostgresqldatabaseparameterscope"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

The Construct that contains this one.

---

##### `id`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.id" id="shadyislandpostgresqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

##### `props`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.props" id="shadyislandpostgresqldatabaseparameterprops"></a>

- *Type:* [`shady-island.PostgresqlDatabaseProps`](#shady-island.PostgresqlDatabaseProps)

The configuration properties for this construct.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`addUserAsOwner`](#shadyislandpostgresqldatabaseadduserasowner) | Declares a new database user to be assigned ownership permissions. |
| [`addUserAsReader`](#shadyislandpostgresqldatabaseadduserasreader) | Declares a new database user to be assigned read-only permissions. |
| [`addUserAsUnprivileged`](#shadyislandpostgresqldatabaseadduserasunprivileged) | Declares a new database user with no permissions. |

---

##### `addUserAsOwner` <a name="shady-island.PostgresqlDatabase.addUserAsOwner" id="shadyislandpostgresqldatabaseadduserasowner"></a>

```typescript
public addUserAsOwner(secret: ISecret)
```

###### `secret`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.secret" id="shadyislandpostgresqldatabaseparametersecret"></a>

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---

##### `addUserAsReader` <a name="shady-island.PostgresqlDatabase.addUserAsReader" id="shadyislandpostgresqldatabaseadduserasreader"></a>

```typescript
public addUserAsReader(secret: ISecret)
```

###### `secret`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.secret" id="shadyislandpostgresqldatabaseparametersecret"></a>

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---

##### `addUserAsUnprivileged` <a name="shady-island.PostgresqlDatabase.addUserAsUnprivileged" id="shadyislandpostgresqldatabaseadduserasunprivileged"></a>

```typescript
public addUserAsUnprivileged(secret: ISecret)
```

###### `secret`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.secret" id="shadyislandpostgresqldatabaseparametersecret"></a>

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---

#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`forCluster`](#shadyislandpostgresqldatabaseforcluster) | Create a new PostgresqlDatabase inside a DatabaseCluster. |
| [`forClusterFromSnapshot`](#shadyislandpostgresqldatabaseforclusterfromsnapshot) | Create a new PostgresqlDatabase inside a DatabaseClusterFromSnapshot. |
| [`forInstance`](#shadyislandpostgresqldatabaseforinstance) | Create a new PostgresqlDatabase inside a DatabaseInstance. |
| [`forInstanceFromSnapshot`](#shadyislandpostgresqldatabaseforinstancefromsnapshot) | Create a new PostgresqlDatabase inside a DatabaseInstanceFromSnapshot. |
| [`forServerlessCluster`](#shadyislandpostgresqldatabaseforserverlesscluster) | Create a new PostgresqlDatabase inside a DatabaseCluster. |
| [`forServerlessClusterFromSnapshot`](#shadyislandpostgresqldatabaseforserverlessclusterfromsnapshot) | Create a new PostgresqlDatabase inside a DatabaseClusterFromSnapshot. |

---

##### `forCluster` <a name="shady-island.PostgresqlDatabase.forCluster" id="shadyislandpostgresqldatabaseforcluster"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.forCluster(scope: Construct, id: string, cluster: DatabaseCluster, options: PostgresqlDatabaseForClusterOptions)
```

###### `scope`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.scope" id="shadyislandpostgresqldatabaseparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.id" id="shadyislandpostgresqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.cluster" id="shadyislandpostgresqldatabaseparametercluster"></a>

- *Type:* [`aws-cdk-lib.aws_rds.DatabaseCluster`](#aws-cdk-lib.aws_rds.DatabaseCluster)

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.options" id="shadyislandpostgresqldatabaseparameteroptions"></a>

- *Type:* [`shady-island.PostgresqlDatabaseForClusterOptions`](#shady-island.PostgresqlDatabaseForClusterOptions)

The configuration properties for this construct.

---

##### `forClusterFromSnapshot` <a name="shady-island.PostgresqlDatabase.forClusterFromSnapshot" id="shadyislandpostgresqldatabaseforclusterfromsnapshot"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.forClusterFromSnapshot(scope: Construct, id: string, cluster: DatabaseClusterFromSnapshot, options: PostgresqlDatabaseForClusterOptions)
```

###### `scope`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.scope" id="shadyislandpostgresqldatabaseparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.id" id="shadyislandpostgresqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.cluster" id="shadyislandpostgresqldatabaseparametercluster"></a>

- *Type:* [`aws-cdk-lib.aws_rds.DatabaseClusterFromSnapshot`](#aws-cdk-lib.aws_rds.DatabaseClusterFromSnapshot)

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.options" id="shadyislandpostgresqldatabaseparameteroptions"></a>

- *Type:* [`shady-island.PostgresqlDatabaseForClusterOptions`](#shady-island.PostgresqlDatabaseForClusterOptions)

The configuration properties for this construct.

---

##### `forInstance` <a name="shady-island.PostgresqlDatabase.forInstance" id="shadyislandpostgresqldatabaseforinstance"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.forInstance(scope: Construct, id: string, instance: DatabaseInstance, options: PostgresqlDatabaseForClusterOptions)
```

###### `scope`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.scope" id="shadyislandpostgresqldatabaseparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.id" id="shadyislandpostgresqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

###### `instance`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.instance" id="shadyislandpostgresqldatabaseparameterinstance"></a>

- *Type:* [`aws-cdk-lib.aws_rds.DatabaseInstance`](#aws-cdk-lib.aws_rds.DatabaseInstance)

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.options" id="shadyislandpostgresqldatabaseparameteroptions"></a>

- *Type:* [`shady-island.PostgresqlDatabaseForClusterOptions`](#shady-island.PostgresqlDatabaseForClusterOptions)

The configuration properties for this construct.

---

##### `forInstanceFromSnapshot` <a name="shady-island.PostgresqlDatabase.forInstanceFromSnapshot" id="shadyislandpostgresqldatabaseforinstancefromsnapshot"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.forInstanceFromSnapshot(scope: Construct, id: string, instance: DatabaseInstanceFromSnapshot, options: PostgresqlDatabaseForClusterOptions)
```

###### `scope`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.scope" id="shadyislandpostgresqldatabaseparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.id" id="shadyislandpostgresqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

###### `instance`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.instance" id="shadyislandpostgresqldatabaseparameterinstance"></a>

- *Type:* [`aws-cdk-lib.aws_rds.DatabaseInstanceFromSnapshot`](#aws-cdk-lib.aws_rds.DatabaseInstanceFromSnapshot)

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.options" id="shadyislandpostgresqldatabaseparameteroptions"></a>

- *Type:* [`shady-island.PostgresqlDatabaseForClusterOptions`](#shady-island.PostgresqlDatabaseForClusterOptions)

The configuration properties for this construct.

---

##### `forServerlessCluster` <a name="shady-island.PostgresqlDatabase.forServerlessCluster" id="shadyislandpostgresqldatabaseforserverlesscluster"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.forServerlessCluster(scope: Construct, id: string, cluster: ServerlessCluster, options: PostgresqlDatabaseForServerlessClusterOptions)
```

###### `scope`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.scope" id="shadyislandpostgresqldatabaseparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.id" id="shadyislandpostgresqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.cluster" id="shadyislandpostgresqldatabaseparametercluster"></a>

- *Type:* [`aws-cdk-lib.aws_rds.ServerlessCluster`](#aws-cdk-lib.aws_rds.ServerlessCluster)

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.options" id="shadyislandpostgresqldatabaseparameteroptions"></a>

- *Type:* [`shady-island.PostgresqlDatabaseForServerlessClusterOptions`](#shady-island.PostgresqlDatabaseForServerlessClusterOptions)

The configuration properties for this construct.

---

##### `forServerlessClusterFromSnapshot` <a name="shady-island.PostgresqlDatabase.forServerlessClusterFromSnapshot" id="shadyislandpostgresqldatabaseforserverlessclusterfromsnapshot"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.forServerlessClusterFromSnapshot(scope: Construct, id: string, cluster: ServerlessClusterFromSnapshot, options: PostgresqlDatabaseForServerlessClusterOptions)
```

###### `scope`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.scope" id="shadyislandpostgresqldatabaseparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.id" id="shadyislandpostgresqldatabaseparameterid"></a>

- *Type:* `string`

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.cluster" id="shadyislandpostgresqldatabaseparametercluster"></a>

- *Type:* [`aws-cdk-lib.aws_rds.ServerlessClusterFromSnapshot`](#aws-cdk-lib.aws_rds.ServerlessClusterFromSnapshot)

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.parameter.options" id="shadyislandpostgresqldatabaseparameteroptions"></a>

- *Type:* [`shady-island.PostgresqlDatabaseForServerlessClusterOptions`](#shady-island.PostgresqlDatabaseForServerlessClusterOptions)

The configuration properties for this construct.

---

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`trigger`](#shadyislandpostgresqldatabasepropertytrigger)<span title="Required">*</span> | [`aws-cdk-lib.triggers.ITrigger`](#aws-cdk-lib.triggers.ITrigger) | The CDK Trigger that kicks off the process. |

---

##### `trigger`<sup>Required</sup> <a name="shady-island.PostgresqlDatabase.property.trigger" id="shadyislandpostgresqldatabasepropertytrigger"></a>

```typescript
public readonly trigger: ITrigger;
```

- *Type:* [`aws-cdk-lib.triggers.ITrigger`](#aws-cdk-lib.triggers.ITrigger)

The CDK Trigger that kicks off the process.

You can further customize when the trigger fires using `executeAfter`.

---


### Workload <a name="shady-island.Workload" id="shadyislandworkload"></a>

A collection of Stacks in an Environment representing a deployment Tier.

Consider deriving a subclass of `Workload` and creating your `Stack` objects within its constructor.  The difference between this class and a `Stage` is that a `Stage` is meant to be deployed with CDK Pipelines. This class can be used with `cdk deploy`. This class also provides context loading capabilities.  It is an anti-pattern to provide a `Workload` instance as the parent scope to the `aws-cdk-lib.Stack` constructor. You should either use the `createStack()` method, create your own sub-class of `Stack` and provide a `Workload` instance as the parent scope, or use the `import()` method to essentially _import_ a `Stack` and its constructs into a `Workload` without changing its scope.

#### Initializers <a name="shady-island.Workload.Initializer" id="shadyislandworkloadinitializer"></a>

```typescript
import { Workload } from 'shady-island'

new Workload(scope: Construct, id: string, props: WorkloadProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#shadyislandworkloadparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The construct scope. |
| [`id`](#shadyislandworkloadparameterid)<span title="Required">*</span> | `string` | The construct ID. |
| [`props`](#shadyislandworkloadparameterprops)<span title="Required">*</span> | [`shady-island.WorkloadProps`](#shady-island.WorkloadProps) | The constructor options. |

---

##### `scope`<sup>Required</sup> <a name="shady-island.Workload.parameter.scope" id="shadyislandworkloadparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The construct scope.

---

##### `id`<sup>Required</sup> <a name="shady-island.Workload.parameter.id" id="shadyislandworkloadparameterid"></a>

- *Type:* `string`

The construct ID.

---

##### `props`<sup>Required</sup> <a name="shady-island.Workload.parameter.props" id="shadyislandworkloadparameterprops"></a>

- *Type:* [`shady-island.WorkloadProps`](#shady-island.WorkloadProps)

The constructor options.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`createStack`](#shadyislandworkloadcreatestack) | Adds a stack to the Workload. |
| [`import`](#shadyislandworkloadimport) | Forces a return value for `Workload.of` for one or more `Stack` objects. |

---

##### `createStack` <a name="shady-island.Workload.createStack" id="shadyislandworkloadcreatestack"></a>

```typescript
public createStack(id: string, props?: StackProps)
```

###### `id`<sup>Required</sup> <a name="shady-island.Workload.parameter.id" id="shadyislandworkloadparameterid"></a>

- *Type:* `string`

The Stack construct id (e.g. "Network").

---

###### `props`<sup>Optional</sup> <a name="shady-island.Workload.parameter.props" id="shadyislandworkloadparameterprops"></a>

- *Type:* [`aws-cdk-lib.StackProps`](#aws-cdk-lib.StackProps)

The new Stack properties.

---

##### `import` <a name="shady-island.Workload.import" id="shadyislandworkloadimport"></a>

```typescript
public import(stacks: Stack)
```

###### `stacks`<sup>Required</sup> <a name="shady-island.Workload.parameter.stacks" id="shadyislandworkloadparameterstacks"></a>

- *Type:* [`aws-cdk-lib.Stack`](#aws-cdk-lib.Stack)

The `Stack` instances to import to this `Workload`.

---

#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`isWorkload`](#shadyislandworkloadisworkload) | Test whether the given construct is a Workload. |
| [`of`](#shadyislandworkloadof) | Return the Workload the construct is contained within, fails if there is no workload up the tree. |

---

##### `isWorkload` <a name="shady-island.Workload.isWorkload" id="shadyislandworkloadisworkload"></a>

```typescript
import { Workload } from 'shady-island'

Workload.isWorkload(x: any)
```

###### `x`<sup>Required</sup> <a name="shady-island.Workload.parameter.x" id="shadyislandworkloadparameterx"></a>

- *Type:* `any`

The value to test.

---

##### `of` <a name="shady-island.Workload.of" id="shadyislandworkloadof"></a>

```typescript
import { Workload } from 'shady-island'

Workload.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="shady-island.Workload.parameter.construct" id="shadyislandworkloadparameterconstruct"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

The construct whose parent nodes will be searched.

---

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`stacks`](#shadyislandworkloadpropertystacks)<span title="Required">*</span> | [`aws-cdk-lib.Stack`](#aws-cdk-lib.Stack)[] | *No description.* |
| [`tier`](#shadyislandworkloadpropertytier)<span title="Required">*</span> | [`shady-island.Tier`](#shady-island.Tier) | The deployment tier. |
| [`workloadName`](#shadyislandworkloadpropertyworkloadname)<span title="Required">*</span> | `string` | The prefix used in the default `stackName` provided to child Stacks. |
| [`account`](#shadyislandworkloadpropertyaccount) | `string` | The default account for all resources defined within this workload. |
| [`publicDomainName`](#shadyislandworkloadpropertypublicdomainname) | `string` | The domain name to use for resources that expose public endpoints. |
| [`region`](#shadyislandworkloadpropertyregion) | `string` | The default region for all resources defined within this workload. |

---

##### `stacks`<sup>Required</sup> <a name="shady-island.Workload.property.stacks" id="shadyislandworkloadpropertystacks"></a>

```typescript
public readonly stacks: Stack[];
```

- *Type:* [`aws-cdk-lib.Stack`](#aws-cdk-lib.Stack)[]

---

##### `tier`<sup>Required</sup> <a name="shady-island.Workload.property.tier" id="shadyislandworkloadpropertytier"></a>

```typescript
public readonly tier: Tier;
```

- *Type:* [`shady-island.Tier`](#shady-island.Tier)

The deployment tier.

---

##### `workloadName`<sup>Required</sup> <a name="shady-island.Workload.property.workloadName" id="shadyislandworkloadpropertyworkloadname"></a>

```typescript
public readonly workloadName: string;
```

- *Type:* `string`

The prefix used in the default `stackName` provided to child Stacks.

---

##### `account`<sup>Optional</sup> <a name="shady-island.Workload.property.account" id="shadyislandworkloadpropertyaccount"></a>

```typescript
public readonly account: string;
```

- *Type:* `string`

The default account for all resources defined within this workload.

---

##### `publicDomainName`<sup>Optional</sup> <a name="shady-island.Workload.property.publicDomainName" id="shadyislandworkloadpropertypublicdomainname"></a>

```typescript
public readonly publicDomainName: string;
```

- *Type:* `string`
- *Default:* If `baseDomainName` was empty, this will be `undefined`

The domain name to use for resources that expose public endpoints.

You can use `Workload.of(this).publicDomainName` as the `zoneName` of a Route 53 hosted zone.  Any construct that creates public DNS resources (e.g. those of API Gateway, Application Load Balancing, CloudFront) can use this property to format a FQDN for itself by adding a subdomain.

---

##### `region`<sup>Optional</sup> <a name="shady-island.Workload.property.region" id="shadyislandworkloadpropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

The default region for all resources defined within this workload.

---


## Structs <a name="Structs" id="structs"></a>

### AssignOnLaunchProps <a name="shady-island.AssignOnLaunchProps" id="shadyislandassignonlaunchprops"></a>

Properties for creating a new {@link AssignOnLaunch}.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AssignOnLaunchProps } from 'shady-island'

const assignOnLaunchProps: AssignOnLaunchProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vpc`](#shadyislandassignonlaunchpropspropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The VPC whose subnets will be configured. |
| [`vpcSubnets`](#shadyislandassignonlaunchpropspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | Which subnets to assign IPv6 addresses upon ENI creation. |

---

##### `vpc`<sup>Required</sup> <a name="shady-island.AssignOnLaunchProps.property.vpc" id="shadyislandassignonlaunchpropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The VPC whose subnets will be configured.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="shady-island.AssignOnLaunchProps.property.vpcSubnets" id="shadyislandassignonlaunchpropspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)

Which subnets to assign IPv6 addresses upon ENI creation.

---

### BaseDatabaseOptions <a name="shady-island.BaseDatabaseOptions" id="shadyislandbasedatabaseoptions"></a>

These options cannot be determined from existing Database constructs.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { BaseDatabaseOptions } from 'shady-island'

const baseDatabaseOptions: BaseDatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`databaseName`](#shadyislandbasedatabaseoptionspropertydatabasename)<span title="Required">*</span> | `string` | The name of the database/catalog to create. |
| [`securityGroup`](#shadyislandbasedatabaseoptionspropertysecuritygroup) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup) | The security group for the Lambda function. |
| [`vpcSubnets`](#shadyislandbasedatabaseoptionspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | The type of subnets in the VPC where the Lambda function will run. |

---

##### `databaseName`<sup>Required</sup> <a name="shady-island.BaseDatabaseOptions.property.databaseName" id="shadyislandbasedatabaseoptionspropertydatabasename"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* `string`

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="shady-island.BaseDatabaseOptions.property.securityGroup" id="shadyislandbasedatabaseoptionspropertysecuritygroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="shady-island.BaseDatabaseOptions.property.vpcSubnets" id="shadyislandbasedatabaseoptionspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

### BaseDatabaseProps <a name="shady-island.BaseDatabaseProps" id="shadyislandbasedatabaseprops"></a>

The properties for a database.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { BaseDatabaseProps } from 'shady-island'

const baseDatabaseProps: BaseDatabaseProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`databaseName`](#shadyislandbasedatabasepropspropertydatabasename)<span title="Required">*</span> | `string` | The name of the database/catalog to create. |
| [`securityGroup`](#shadyislandbasedatabasepropspropertysecuritygroup) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup) | The security group for the Lambda function. |
| [`vpcSubnets`](#shadyislandbasedatabasepropspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | The type of subnets in the VPC where the Lambda function will run. |
| [`adminSecret`](#shadyislandbasedatabasepropspropertyadminsecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | A Secrets Manager secret that contains administrative credentials. |
| [`endpoint`](#shadyislandbasedatabasepropspropertyendpoint)<span title="Required">*</span> | [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint) | The cluster or instance endpoint. |
| [`target`](#shadyislandbasedatabasepropspropertytarget)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IConnectable`](#aws-cdk-lib.aws_ec2.IConnectable) | The target service or database. |
| [`vpc`](#shadyislandbasedatabasepropspropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The VPC where the Lambda function will run. |

---

##### `databaseName`<sup>Required</sup> <a name="shady-island.BaseDatabaseProps.property.databaseName" id="shadyislandbasedatabasepropspropertydatabasename"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* `string`

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="shady-island.BaseDatabaseProps.property.securityGroup" id="shadyislandbasedatabasepropspropertysecuritygroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="shady-island.BaseDatabaseProps.property.vpcSubnets" id="shadyislandbasedatabasepropspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Required</sup> <a name="shady-island.BaseDatabaseProps.property.adminSecret" id="shadyislandbasedatabasepropspropertyadminsecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

A Secrets Manager secret that contains administrative credentials.

---

##### `endpoint`<sup>Required</sup> <a name="shady-island.BaseDatabaseProps.property.endpoint" id="shadyislandbasedatabasepropspropertyendpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint)

The cluster or instance endpoint.

---

##### `target`<sup>Required</sup> <a name="shady-island.BaseDatabaseProps.property.target" id="shadyislandbasedatabasepropspropertytarget"></a>

```typescript
public readonly target: IConnectable;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IConnectable`](#aws-cdk-lib.aws_ec2.IConnectable)

The target service or database.

---

##### `vpc`<sup>Required</sup> <a name="shady-island.BaseDatabaseProps.property.vpc" id="shadyislandbasedatabasepropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The VPC where the Lambda function will run.

---

### CidrContextProps <a name="shady-island.CidrContextProps" id="shadyislandcidrcontextprops"></a>

Properties for creating a new {@link CidrContext}.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CidrContextProps } from 'shady-island'

const cidrContextProps: CidrContextProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vpc`](#shadyislandcidrcontextpropspropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The VPC whose subnets will be configured. |
| [`addressPool`](#shadyislandcidrcontextpropspropertyaddresspool) | `string` | The ID of a BYOIP IPv6 address pool from which to allocate the CIDR block. |
| [`assignAddressOnLaunch`](#shadyislandcidrcontextpropspropertyassignaddressonlaunch) | `boolean` | Whether this VPC should auto-assign an IPv6 address to launched ENIs. |
| [`cidrBlock`](#shadyislandcidrcontextpropspropertycidrblock) | `string` | An IPv6 CIDR block from the IPv6 address pool to use for this VPC. |
| [`cidrCount`](#shadyislandcidrcontextpropspropertycidrcount) | `number` | Split the CIDRs into this many groups (by default one for each subnet). |

---

##### `vpc`<sup>Required</sup> <a name="shady-island.CidrContextProps.property.vpc" id="shadyislandcidrcontextpropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The VPC whose subnets will be configured.

---

##### `addressPool`<sup>Optional</sup> <a name="shady-island.CidrContextProps.property.addressPool" id="shadyislandcidrcontextpropspropertyaddresspool"></a>

```typescript
public readonly addressPool: string;
```

- *Type:* `string`

The ID of a BYOIP IPv6 address pool from which to allocate the CIDR block.

If this parameter is not specified or is undefined, the CIDR block will be provided by AWS.

---

##### ~~`assignAddressOnLaunch`~~<sup>Optional</sup> <a name="shady-island.CidrContextProps.property.assignAddressOnLaunch" id="shadyislandcidrcontextpropspropertyassignaddressonlaunch"></a>

- *Deprecated:* - Launch templates now support specifying IPv6 addresses

```typescript
public readonly assignAddressOnLaunch: boolean;
```

- *Type:* `boolean`

Whether this VPC should auto-assign an IPv6 address to launched ENIs.

True by default.

---

##### `cidrBlock`<sup>Optional</sup> <a name="shady-island.CidrContextProps.property.cidrBlock" id="shadyislandcidrcontextpropspropertycidrblock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* `string`

An IPv6 CIDR block from the IPv6 address pool to use for this VPC.

The {@link EnableIpv6Props#addressPool} attribute is required if this parameter is specified.

---

##### `cidrCount`<sup>Optional</sup> <a name="shady-island.CidrContextProps.property.cidrCount" id="shadyislandcidrcontextpropspropertycidrcount"></a>

```typescript
public readonly cidrCount: number;
```

- *Type:* `number`

Split the CIDRs into this many groups (by default one for each subnet).

---

### ContextLoadingStageProps <a name="shady-island.ContextLoadingStageProps" id="shadyislandcontextloadingstageprops"></a>

Constructor properties for ContextLoadingStage.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ContextLoadingStageProps } from 'shady-island'

const contextLoadingStageProps: ContextLoadingStageProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`env`](#shadyislandcontextloadingstagepropspropertyenv) | [`aws-cdk-lib.Environment`](#aws-cdk-lib.Environment) | Default AWS environment (account/region) for `Stack`s in this `Stage`. |
| [`outdir`](#shadyislandcontextloadingstagepropspropertyoutdir) | `string` | The output directory into which to emit synthesized artifacts. |
| [`permissionsBoundary`](#shadyislandcontextloadingstagepropspropertypermissionsboundary) | [`aws-cdk-lib.PermissionsBoundary`](#aws-cdk-lib.PermissionsBoundary) | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| [`policyValidationBeta1`](#shadyislandcontextloadingstagepropspropertypolicyvalidationbeta1) | [`aws-cdk-lib.IPolicyValidationPluginBeta1`](#aws-cdk-lib.IPolicyValidationPluginBeta1)[] | Validation plugins to run during synthesis. |
| [`stageName`](#shadyislandcontextloadingstagepropspropertystagename) | `string` | Name of this stage. |
| [`contextFile`](#shadyislandcontextloadingstagepropspropertycontextfile) | `string` | The filesystem path to a JSON file that contains context values to load. |

---

##### `env`<sup>Optional</sup> <a name="shady-island.ContextLoadingStageProps.property.env" id="shadyislandcontextloadingstagepropspropertyenv"></a>

```typescript
public readonly env: Environment;
```

- *Type:* [`aws-cdk-lib.Environment`](#aws-cdk-lib.Environment)
- *Default:* The environments should be configured on the `Stack`s.

Default AWS environment (account/region) for `Stack`s in this `Stage`.

Stacks defined inside this `Stage` with either `region` or `account` missing from its env will use the corresponding field given here.  If either `region` or `account`is is not configured for `Stack` (either on the `Stack` itself or on the containing `Stage`), the Stack will be *environment-agnostic*.  Environment-agnostic stacks can be deployed to any environment, may not be able to take advantage of all features of the CDK. For example, they will not be able to use environmental context lookups, will not automatically translate Service Principals to the right format based on the environment's AWS partition, and other such enhancements.

---

##### `outdir`<sup>Optional</sup> <a name="shady-island.ContextLoadingStageProps.property.outdir" id="shadyislandcontextloadingstagepropspropertyoutdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* `string`
- *Default:* for nested stages, outdir will be determined as a relative directory to the outdir of the app. For apps, if outdir is not specified, a temporary directory will be created.

The output directory into which to emit synthesized artifacts.

Can only be specified if this stage is the root stage (the app). If this is specified and this stage is nested within another stage, an error will be thrown.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="shady-island.ContextLoadingStageProps.property.permissionsBoundary" id="shadyislandcontextloadingstagepropspropertypermissionsboundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* [`aws-cdk-lib.PermissionsBoundary`](#aws-cdk-lib.PermissionsBoundary)
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `policyValidationBeta1`<sup>Optional</sup> <a name="shady-island.ContextLoadingStageProps.property.policyValidationBeta1" id="shadyislandcontextloadingstagepropspropertypolicyvalidationbeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* [`aws-cdk-lib.IPolicyValidationPluginBeta1`](#aws-cdk-lib.IPolicyValidationPluginBeta1)[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation, synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Optional</sup> <a name="shady-island.ContextLoadingStageProps.property.stageName" id="shadyislandcontextloadingstagepropspropertystagename"></a>

```typescript
public readonly stageName: string;
```

- *Type:* `string`
- *Default:* Derived from the id.

Name of this stage.

---

##### `contextFile`<sup>Optional</sup> <a name="shady-island.ContextLoadingStageProps.property.contextFile" id="shadyislandcontextloadingstagepropspropertycontextfile"></a>

```typescript
public readonly contextFile: string;
```

- *Type:* `string`

The filesystem path to a JSON file that contains context values to load.

Using this property allows you to load different context values within each Stage, directly from a file you can check into source control.

---

### DeploymentTierStageProps <a name="shady-island.DeploymentTierStageProps" id="shadyislanddeploymenttierstageprops"></a>

Constructor properties for DeploymentTierStage.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DeploymentTierStageProps } from 'shady-island'

const deploymentTierStageProps: DeploymentTierStageProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`env`](#shadyislanddeploymenttierstagepropspropertyenv) | [`aws-cdk-lib.Environment`](#aws-cdk-lib.Environment) | Default AWS environment (account/region) for `Stack`s in this `Stage`. |
| [`outdir`](#shadyislanddeploymenttierstagepropspropertyoutdir) | `string` | The output directory into which to emit synthesized artifacts. |
| [`permissionsBoundary`](#shadyislanddeploymenttierstagepropspropertypermissionsboundary) | [`aws-cdk-lib.PermissionsBoundary`](#aws-cdk-lib.PermissionsBoundary) | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| [`policyValidationBeta1`](#shadyislanddeploymenttierstagepropspropertypolicyvalidationbeta1) | [`aws-cdk-lib.IPolicyValidationPluginBeta1`](#aws-cdk-lib.IPolicyValidationPluginBeta1)[] | Validation plugins to run during synthesis. |
| [`stageName`](#shadyislanddeploymenttierstagepropspropertystagename) | `string` | Name of this stage. |
| [`contextFile`](#shadyislanddeploymenttierstagepropspropertycontextfile) | `string` | The filesystem path to a JSON file that contains context values to load. |
| [`tier`](#shadyislanddeploymenttierstagepropspropertytier)<span title="Required">*</span> | [`shady-island.Tier`](#shady-island.Tier) | The deployment tier. |
| [`addTag`](#shadyislanddeploymenttierstagepropspropertyaddtag) | `boolean` | Whether a `DeploymentTier` tag is added to nested constructs. |

---

##### `env`<sup>Optional</sup> <a name="shady-island.DeploymentTierStageProps.property.env" id="shadyislanddeploymenttierstagepropspropertyenv"></a>

```typescript
public readonly env: Environment;
```

- *Type:* [`aws-cdk-lib.Environment`](#aws-cdk-lib.Environment)
- *Default:* The environments should be configured on the `Stack`s.

Default AWS environment (account/region) for `Stack`s in this `Stage`.

Stacks defined inside this `Stage` with either `region` or `account` missing from its env will use the corresponding field given here.  If either `region` or `account`is is not configured for `Stack` (either on the `Stack` itself or on the containing `Stage`), the Stack will be *environment-agnostic*.  Environment-agnostic stacks can be deployed to any environment, may not be able to take advantage of all features of the CDK. For example, they will not be able to use environmental context lookups, will not automatically translate Service Principals to the right format based on the environment's AWS partition, and other such enhancements.

---

##### `outdir`<sup>Optional</sup> <a name="shady-island.DeploymentTierStageProps.property.outdir" id="shadyislanddeploymenttierstagepropspropertyoutdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* `string`
- *Default:* for nested stages, outdir will be determined as a relative directory to the outdir of the app. For apps, if outdir is not specified, a temporary directory will be created.

The output directory into which to emit synthesized artifacts.

Can only be specified if this stage is the root stage (the app). If this is specified and this stage is nested within another stage, an error will be thrown.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="shady-island.DeploymentTierStageProps.property.permissionsBoundary" id="shadyislanddeploymenttierstagepropspropertypermissionsboundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* [`aws-cdk-lib.PermissionsBoundary`](#aws-cdk-lib.PermissionsBoundary)
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `policyValidationBeta1`<sup>Optional</sup> <a name="shady-island.DeploymentTierStageProps.property.policyValidationBeta1" id="shadyislanddeploymenttierstagepropspropertypolicyvalidationbeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* [`aws-cdk-lib.IPolicyValidationPluginBeta1`](#aws-cdk-lib.IPolicyValidationPluginBeta1)[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation, synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Optional</sup> <a name="shady-island.DeploymentTierStageProps.property.stageName" id="shadyislanddeploymenttierstagepropspropertystagename"></a>

```typescript
public readonly stageName: string;
```

- *Type:* `string`
- *Default:* Derived from the id.

Name of this stage.

---

##### `contextFile`<sup>Optional</sup> <a name="shady-island.DeploymentTierStageProps.property.contextFile" id="shadyislanddeploymenttierstagepropspropertycontextfile"></a>

```typescript
public readonly contextFile: string;
```

- *Type:* `string`

The filesystem path to a JSON file that contains context values to load.

Using this property allows you to load different context values within each Stage, directly from a file you can check into source control.

---

##### `tier`<sup>Required</sup> <a name="shady-island.DeploymentTierStageProps.property.tier" id="shadyislanddeploymenttierstagepropspropertytier"></a>

```typescript
public readonly tier: Tier;
```

- *Type:* [`shady-island.Tier`](#shady-island.Tier)

The deployment tier.

---

##### `addTag`<sup>Optional</sup> <a name="shady-island.DeploymentTierStageProps.property.addTag" id="shadyislanddeploymenttierstagepropspropertyaddtag"></a>

```typescript
public readonly addTag: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether a `DeploymentTier` tag is added to nested constructs.

---

### EncryptedFileSystemProps <a name="shady-island.EncryptedFileSystemProps" id="shadyislandencryptedfilesystemprops"></a>

Constructor parameters for EncryptedFileSystem.

The `encrypted` argument is ignored.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { EncryptedFileSystemProps } from 'shady-island'

const encryptedFileSystemProps: EncryptedFileSystemProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vpc`](#shadyislandencryptedfilesystempropspropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | VPC to launch the file system in. |
| [`allowAnonymousAccess`](#shadyislandencryptedfilesystempropspropertyallowanonymousaccess) | `boolean` | Allow access from anonymous client that doesn't use IAM authentication. |
| [`enableAutomaticBackups`](#shadyislandencryptedfilesystempropspropertyenableautomaticbackups) | `boolean` | Whether to enable automatic backups for the file system. |
| [`encrypted`](#shadyislandencryptedfilesystempropspropertyencrypted) | `boolean` | Defines if the data at rest in the file system is encrypted or not. |
| [`fileSystemName`](#shadyislandencryptedfilesystempropspropertyfilesystemname) | `string` | The file system's name. |
| [`fileSystemPolicy`](#shadyislandencryptedfilesystempropspropertyfilesystempolicy) | [`aws-cdk-lib.aws_iam.PolicyDocument`](#aws-cdk-lib.aws_iam.PolicyDocument) | File system policy is an IAM resource policy used to control NFS access to an EFS file system. |
| [`kmsKey`](#shadyislandencryptedfilesystempropspropertykmskey) | [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey) | The KMS key used for encryption. |
| [`lifecyclePolicy`](#shadyislandencryptedfilesystempropspropertylifecyclepolicy) | [`aws-cdk-lib.aws_efs.LifecyclePolicy`](#aws-cdk-lib.aws_efs.LifecyclePolicy) | A policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class. |
| [`outOfInfrequentAccessPolicy`](#shadyislandencryptedfilesystempropspropertyoutofinfrequentaccesspolicy) | [`aws-cdk-lib.aws_efs.OutOfInfrequentAccessPolicy`](#aws-cdk-lib.aws_efs.OutOfInfrequentAccessPolicy) | A policy used by EFS lifecycle management to transition files from Infrequent Access (IA) storage class to primary storage class. |
| [`performanceMode`](#shadyislandencryptedfilesystempropspropertyperformancemode) | [`aws-cdk-lib.aws_efs.PerformanceMode`](#aws-cdk-lib.aws_efs.PerformanceMode) | The performance mode that the file system will operate under. |
| [`provisionedThroughputPerSecond`](#shadyislandencryptedfilesystempropspropertyprovisionedthroughputpersecond) | [`aws-cdk-lib.Size`](#aws-cdk-lib.Size) | Provisioned throughput for the file system. |
| [`removalPolicy`](#shadyislandencryptedfilesystempropspropertyremovalpolicy) | [`aws-cdk-lib.RemovalPolicy`](#aws-cdk-lib.RemovalPolicy) | The removal policy to apply to the file system. |
| [`securityGroup`](#shadyislandencryptedfilesystempropspropertysecuritygroup) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup) | Security Group to assign to this file system. |
| [`throughputMode`](#shadyislandencryptedfilesystempropspropertythroughputmode) | [`aws-cdk-lib.aws_efs.ThroughputMode`](#aws-cdk-lib.aws_efs.ThroughputMode) | Enum to mention the throughput mode of the file system. |
| [`vpcSubnets`](#shadyislandencryptedfilesystempropspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | Which subnets to place the mount target in the VPC. |

---

##### `vpc`<sup>Required</sup> <a name="shady-island.EncryptedFileSystemProps.property.vpc" id="shadyislandencryptedfilesystempropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

VPC to launch the file system in.

---

##### `allowAnonymousAccess`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.allowAnonymousAccess" id="shadyislandencryptedfilesystempropspropertyallowanonymousaccess"></a>

```typescript
public readonly allowAnonymousAccess: boolean;
```

- *Type:* `boolean`
- *Default:* false when using `grantRead`, `grantWrite`, `grantRootAccess` or set `@aws-cdk/aws-efs:denyAnonymousAccess` feature flag, otherwise true

Allow access from anonymous client that doesn't use IAM authentication.

---

##### `enableAutomaticBackups`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.enableAutomaticBackups" id="shadyislandencryptedfilesystempropspropertyenableautomaticbackups"></a>

```typescript
public readonly enableAutomaticBackups: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to enable automatic backups for the file system.

---

##### `encrypted`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.encrypted" id="shadyislandencryptedfilesystempropspropertyencrypted"></a>

```typescript
public readonly encrypted: boolean;
```

- *Type:* `boolean`
- *Default:* If your application has the '@aws-cdk/aws-efs:defaultEncryptionAtRest' feature flag set, the default is true, otherwise, the default is false.

Defines if the data at rest in the file system is encrypted or not.

> [https://docs.aws.amazon.com/cdk/latest/guide/featureflags.html](https://docs.aws.amazon.com/cdk/latest/guide/featureflags.html)

---

##### `fileSystemName`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.fileSystemName" id="shadyislandencryptedfilesystempropspropertyfilesystemname"></a>

```typescript
public readonly fileSystemName: string;
```

- *Type:* `string`
- *Default:* CDK generated name

The file system's name.

---

##### `fileSystemPolicy`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.fileSystemPolicy" id="shadyislandencryptedfilesystempropspropertyfilesystempolicy"></a>

```typescript
public readonly fileSystemPolicy: PolicyDocument;
```

- *Type:* [`aws-cdk-lib.aws_iam.PolicyDocument`](#aws-cdk-lib.aws_iam.PolicyDocument)
- *Default:* none

File system policy is an IAM resource policy used to control NFS access to an EFS file system.

---

##### `kmsKey`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.kmsKey" id="shadyislandencryptedfilesystempropspropertykmskey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)
- *Default:* if 'encrypted' is true, the default key for EFS (/aws/elasticfilesystem) is used

The KMS key used for encryption.

This is required to encrypt the data at rest if

---

##### `lifecyclePolicy`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.lifecyclePolicy" id="shadyislandencryptedfilesystempropspropertylifecyclepolicy"></a>

```typescript
public readonly lifecyclePolicy: LifecyclePolicy;
```

- *Type:* [`aws-cdk-lib.aws_efs.LifecyclePolicy`](#aws-cdk-lib.aws_efs.LifecyclePolicy)
- *Default:* None. EFS will not transition files to the IA storage class.

A policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.

---

##### `outOfInfrequentAccessPolicy`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.outOfInfrequentAccessPolicy" id="shadyislandencryptedfilesystempropspropertyoutofinfrequentaccesspolicy"></a>

```typescript
public readonly outOfInfrequentAccessPolicy: OutOfInfrequentAccessPolicy;
```

- *Type:* [`aws-cdk-lib.aws_efs.OutOfInfrequentAccessPolicy`](#aws-cdk-lib.aws_efs.OutOfInfrequentAccessPolicy)
- *Default:* None. EFS will not transition files from IA storage to primary storage.

A policy used by EFS lifecycle management to transition files from Infrequent Access (IA) storage class to primary storage class.

---

##### `performanceMode`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.performanceMode" id="shadyislandencryptedfilesystempropspropertyperformancemode"></a>

```typescript
public readonly performanceMode: PerformanceMode;
```

- *Type:* [`aws-cdk-lib.aws_efs.PerformanceMode`](#aws-cdk-lib.aws_efs.PerformanceMode)
- *Default:* PerformanceMode.GENERAL_PURPOSE

The performance mode that the file system will operate under.

An Amazon EFS file system's performance mode can't be changed after the file system has been created. Updating this property will replace the file system.

---

##### `provisionedThroughputPerSecond`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.provisionedThroughputPerSecond" id="shadyislandencryptedfilesystempropspropertyprovisionedthroughputpersecond"></a>

```typescript
public readonly provisionedThroughputPerSecond: Size;
```

- *Type:* [`aws-cdk-lib.Size`](#aws-cdk-lib.Size)
- *Default:* none, errors out

Provisioned throughput for the file system.

This is a required property if the throughput mode is set to PROVISIONED. Must be at least 1MiB/s.

---

##### `removalPolicy`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.removalPolicy" id="shadyislandencryptedfilesystempropspropertyremovalpolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* [`aws-cdk-lib.RemovalPolicy`](#aws-cdk-lib.RemovalPolicy)
- *Default:* RemovalPolicy.RETAIN

The removal policy to apply to the file system.

---

##### `securityGroup`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.securityGroup" id="shadyislandencryptedfilesystempropspropertysecuritygroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)
- *Default:* creates new security group which allows all outbound traffic

Security Group to assign to this file system.

---

##### `throughputMode`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.throughputMode" id="shadyislandencryptedfilesystempropspropertythroughputmode"></a>

```typescript
public readonly throughputMode: ThroughputMode;
```

- *Type:* [`aws-cdk-lib.aws_efs.ThroughputMode`](#aws-cdk-lib.aws_efs.ThroughputMode)
- *Default:* ThroughputMode.BURSTING

Enum to mention the throughput mode of the file system.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.vpcSubnets" id="shadyislandencryptedfilesystempropspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the Vpc default strategy if not specified

Which subnets to place the mount target in the VPC.

---

### EncryptedLogGroupProps <a name="shady-island.EncryptedLogGroupProps" id="shadyislandencryptedloggroupprops"></a>

Constructor properties for EncryptedLogGroup.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { EncryptedLogGroupProps } from 'shady-island'

const encryptedLogGroupProps: EncryptedLogGroupProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`logGroupName`](#shadyislandencryptedloggrouppropspropertyloggroupname)<span title="Required">*</span> | `string` | Name of the log group. |
| [`encryptionKey`](#shadyislandencryptedloggrouppropspropertyencryptionkey) | [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey) | The KMS Key to encrypt the log group with. |
| [`removalPolicy`](#shadyislandencryptedloggrouppropspropertyremovalpolicy) | [`aws-cdk-lib.RemovalPolicy`](#aws-cdk-lib.RemovalPolicy) | Whether the key and group should be retained when they are removed from the Stack. |
| [`retention`](#shadyislandencryptedloggrouppropspropertyretention) | [`aws-cdk-lib.aws_logs.RetentionDays`](#aws-cdk-lib.aws_logs.RetentionDays) | How long, in days, the log contents will be retained. |

---

##### `logGroupName`<sup>Required</sup> <a name="shady-island.EncryptedLogGroupProps.property.logGroupName" id="shadyislandencryptedloggrouppropspropertyloggroupname"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* `string`

Name of the log group.

We need a log group name ahead of time because otherwise the key policy would create a cyclical dependency.

---

##### `encryptionKey`<sup>Optional</sup> <a name="shady-island.EncryptedLogGroupProps.property.encryptionKey" id="shadyislandencryptedloggrouppropspropertyencryptionkey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)
- *Default:* A new KMS key will be created

The KMS Key to encrypt the log group with.

---

##### `removalPolicy`<sup>Optional</sup> <a name="shady-island.EncryptedLogGroupProps.property.removalPolicy" id="shadyislandencryptedloggrouppropspropertyremovalpolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* [`aws-cdk-lib.RemovalPolicy`](#aws-cdk-lib.RemovalPolicy)
- *Default:* RemovalPolicy.RETAIN

Whether the key and group should be retained when they are removed from the Stack.

---

##### `retention`<sup>Optional</sup> <a name="shady-island.EncryptedLogGroupProps.property.retention" id="shadyislandencryptedloggrouppropspropertyretention"></a>

```typescript
public readonly retention: RetentionDays;
```

- *Type:* [`aws-cdk-lib.aws_logs.RetentionDays`](#aws-cdk-lib.aws_logs.RetentionDays)
- *Default:* RetentionDays.TWO_YEARS

How long, in days, the log contents will be retained.

---

### FargateAwsVpcConfiguration <a name="shady-island.FargateAwsVpcConfiguration" id="shadyislandfargateawsvpcconfiguration"></a>

The `networkConfiguration.awsvpcConfiguration` values for `ecs.RunTask`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { FargateAwsVpcConfiguration } from 'shady-island'

const fargateAwsVpcConfiguration: FargateAwsVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`assignPublicIp`](#shadyislandfargateawsvpcconfigurationpropertyassignpublicip) | `string` | Whether the task's elastic network interface receives a public IP address. |
| [`securityGroups`](#shadyislandfargateawsvpcconfigurationpropertysecuritygroups) | `string`[] | The IDs of the security groups associated with the task or service. |
| [`subnets`](#shadyislandfargateawsvpcconfigurationpropertysubnets) | `string`[] | The IDs of the subnets associated with the task or service. |

---

##### `assignPublicIp`<sup>Optional</sup> <a name="shady-island.FargateAwsVpcConfiguration.property.assignPublicIp" id="shadyislandfargateawsvpcconfigurationpropertyassignpublicip"></a>

```typescript
public readonly assignPublicIp: string;
```

- *Type:* `string`

Whether the task's elastic network interface receives a public IP address.

The default value is `DISABLED` .

> http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html#cfn-ecs-service-awsvpcconfiguration-assignpublicip

---

##### `securityGroups`<sup>Optional</sup> <a name="shady-island.FargateAwsVpcConfiguration.property.securityGroups" id="shadyislandfargateawsvpcconfigurationpropertysecuritygroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* `string`[]

The IDs of the security groups associated with the task or service.

If you don't specify a security group, the default security group for the VPC is used. There's a limit of 5 security groups that can be specified per `AwsVpcConfiguration` .  > All specified security groups must be from the same VPC.

> http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html#cfn-ecs-service-awsvpcconfiguration-securitygroups

---

##### `subnets`<sup>Optional</sup> <a name="shady-island.FargateAwsVpcConfiguration.property.subnets" id="shadyislandfargateawsvpcconfigurationpropertysubnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* `string`[]

The IDs of the subnets associated with the task or service.

There's a limit of 16 subnets that can be specified per `AwsVpcConfiguration` .  > All specified subnets must be from the same VPC.

> http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html#cfn-ecs-service-awsvpcconfiguration-subnets

---

### FargateTaskProps <a name="shady-island.FargateTaskProps" id="shadyislandfargatetaskprops"></a>

Constructor parameters for FargateTask.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { FargateTaskProps } from 'shady-island'

const fargateTaskProps: FargateTaskProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`cluster`](#shadyislandfargatetaskpropspropertycluster)<span title="Required">*</span> | [`aws-cdk-lib.aws_ecs.ICluster`](#aws-cdk-lib.aws_ecs.ICluster) | The name of the cluster that hosts the service. |
| [`taskDefinition`](#shadyislandfargatetaskpropspropertytaskdefinition)<span title="Required">*</span> | [`aws-cdk-lib.aws_ecs.FargateTaskDefinition`](#aws-cdk-lib.aws_ecs.FargateTaskDefinition) | The task definition that can be launched. |
| [`assignPublicIp`](#shadyislandfargatetaskpropspropertyassignpublicip) | `boolean` | Specifies whether the task's elastic network interface receives a public IP address. |
| [`securityGroups`](#shadyislandfargatetaskpropspropertysecuritygroups) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)[] | Existing security groups to use for your task. |
| [`vpcSubnets`](#shadyislandfargatetaskpropspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | The subnets to associate with the task. |

---

##### `cluster`<sup>Required</sup> <a name="shady-island.FargateTaskProps.property.cluster" id="shadyislandfargatetaskpropspropertycluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* [`aws-cdk-lib.aws_ecs.ICluster`](#aws-cdk-lib.aws_ecs.ICluster)

The name of the cluster that hosts the service.

---

##### `taskDefinition`<sup>Required</sup> <a name="shady-island.FargateTaskProps.property.taskDefinition" id="shadyislandfargatetaskpropspropertytaskdefinition"></a>

```typescript
public readonly taskDefinition: FargateTaskDefinition;
```

- *Type:* [`aws-cdk-lib.aws_ecs.FargateTaskDefinition`](#aws-cdk-lib.aws_ecs.FargateTaskDefinition)

The task definition that can be launched.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="shady-island.FargateTaskProps.property.assignPublicIp" id="shadyislandfargatetaskpropspropertyassignpublicip"></a>

```typescript
public readonly assignPublicIp: boolean;
```

- *Type:* `boolean`
- *Default:* false

Specifies whether the task's elastic network interface receives a public IP address.

If true, the task will receive a public IP address.

---

##### `securityGroups`<sup>Optional</sup> <a name="shady-island.FargateTaskProps.property.securityGroups" id="shadyislandfargatetaskpropspropertysecuritygroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)[]
- *Default:* a new security group will be created.

Existing security groups to use for your task.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="shady-island.FargateTaskProps.property.vpcSubnets" id="shadyislandfargatetaskpropspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* Public subnets if `assignPublicIp` is set, otherwise the first available one of Private, Isolated, Public, in that order.

The subnets to associate with the task.

---

### MysqlDatabaseForClusterOptions <a name="shady-island.MysqlDatabaseForClusterOptions" id="shadyislandmysqldatabaseforclusteroptions"></a>

Properties to specify when using MysqlDatabase.forCluster().

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { MysqlDatabaseForClusterOptions } from 'shady-island'

const mysqlDatabaseForClusterOptions: MysqlDatabaseForClusterOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`characterSet`](#shadyislandmysqldatabaseforclusteroptionspropertycharacterset) | `string` | The database default character set to use. |
| [`collation`](#shadyislandmysqldatabaseforclusteroptionspropertycollation) | `string` | The database default collation to use. |
| [`databaseName`](#shadyislandmysqldatabaseforclusteroptionspropertydatabasename)<span title="Required">*</span> | `string` | The name of the database/catalog to create. |
| [`securityGroup`](#shadyislandmysqldatabaseforclusteroptionspropertysecuritygroup) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup) | The security group for the Lambda function. |
| [`vpcSubnets`](#shadyislandmysqldatabaseforclusteroptionspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | The type of subnets in the VPC where the Lambda function will run. |
| [`adminSecret`](#shadyislandmysqldatabaseforclusteroptionspropertyadminsecret) | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | A Secrets Manager secret that contains administrative credentials. |

---

##### `characterSet`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseForClusterOptions.property.characterSet" id="shadyislandmysqldatabaseforclusteroptionspropertycharacterset"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* `string`
- *Default:* "utf8mb4"

The database default character set to use.

---

##### `collation`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseForClusterOptions.property.collation" id="shadyislandmysqldatabaseforclusteroptionspropertycollation"></a>

```typescript
public readonly collation: string;
```

- *Type:* `string`
- *Default:* rely on MySQL to choose the default collation.

The database default collation to use.

---

##### `databaseName`<sup>Required</sup> <a name="shady-island.MysqlDatabaseForClusterOptions.property.databaseName" id="shadyislandmysqldatabaseforclusteroptionspropertydatabasename"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* `string`

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseForClusterOptions.property.securityGroup" id="shadyislandmysqldatabaseforclusteroptionspropertysecuritygroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseForClusterOptions.property.vpcSubnets" id="shadyislandmysqldatabaseforclusteroptionspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseForClusterOptions.property.adminSecret" id="shadyislandmysqldatabaseforclusteroptionspropertyadminsecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

A Secrets Manager secret that contains administrative credentials.

---

### MysqlDatabaseForServerlessClusterOptions <a name="shady-island.MysqlDatabaseForServerlessClusterOptions" id="shadyislandmysqldatabaseforserverlessclusteroptions"></a>

Properties to specify when using MysqlDatabase.forServerlessCluster().

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { MysqlDatabaseForServerlessClusterOptions } from 'shady-island'

const mysqlDatabaseForServerlessClusterOptions: MysqlDatabaseForServerlessClusterOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`characterSet`](#shadyislandmysqldatabaseforserverlessclusteroptionspropertycharacterset) | `string` | The database default character set to use. |
| [`collation`](#shadyislandmysqldatabaseforserverlessclusteroptionspropertycollation) | `string` | The database default collation to use. |
| [`databaseName`](#shadyislandmysqldatabaseforserverlessclusteroptionspropertydatabasename)<span title="Required">*</span> | `string` | The name of the database/catalog to create. |
| [`securityGroup`](#shadyislandmysqldatabaseforserverlessclusteroptionspropertysecuritygroup) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup) | The security group for the Lambda function. |
| [`vpcSubnets`](#shadyislandmysqldatabaseforserverlessclusteroptionspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | The type of subnets in the VPC where the Lambda function will run. |
| [`adminSecret`](#shadyislandmysqldatabaseforserverlessclusteroptionspropertyadminsecret) | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | A Secrets Manager secret that contains administrative credentials. |
| [`vpc`](#shadyislandmysqldatabaseforserverlessclusteroptionspropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The VPC where the Lambda function will run. |

---

##### `characterSet`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseForServerlessClusterOptions.property.characterSet" id="shadyislandmysqldatabaseforserverlessclusteroptionspropertycharacterset"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* `string`
- *Default:* "utf8mb4"

The database default character set to use.

---

##### `collation`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseForServerlessClusterOptions.property.collation" id="shadyislandmysqldatabaseforserverlessclusteroptionspropertycollation"></a>

```typescript
public readonly collation: string;
```

- *Type:* `string`
- *Default:* rely on MySQL to choose the default collation.

The database default collation to use.

---

##### `databaseName`<sup>Required</sup> <a name="shady-island.MysqlDatabaseForServerlessClusterOptions.property.databaseName" id="shadyislandmysqldatabaseforserverlessclusteroptionspropertydatabasename"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* `string`

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseForServerlessClusterOptions.property.securityGroup" id="shadyislandmysqldatabaseforserverlessclusteroptionspropertysecuritygroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseForServerlessClusterOptions.property.vpcSubnets" id="shadyislandmysqldatabaseforserverlessclusteroptionspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseForServerlessClusterOptions.property.adminSecret" id="shadyislandmysqldatabaseforserverlessclusteroptionspropertyadminsecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

A Secrets Manager secret that contains administrative credentials.

---

##### `vpc`<sup>Required</sup> <a name="shady-island.MysqlDatabaseForServerlessClusterOptions.property.vpc" id="shadyislandmysqldatabaseforserverlessclusteroptionspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The VPC where the Lambda function will run.

---

### MysqlDatabaseOptions <a name="shady-island.MysqlDatabaseOptions" id="shadyislandmysqldatabaseoptions"></a>

MySQL-specific options.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { MysqlDatabaseOptions } from 'shady-island'

const mysqlDatabaseOptions: MysqlDatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`characterSet`](#shadyislandmysqldatabaseoptionspropertycharacterset) | `string` | The database default character set to use. |
| [`collation`](#shadyislandmysqldatabaseoptionspropertycollation) | `string` | The database default collation to use. |

---

##### `characterSet`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseOptions.property.characterSet" id="shadyislandmysqldatabaseoptionspropertycharacterset"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* `string`
- *Default:* "utf8mb4"

The database default character set to use.

---

##### `collation`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseOptions.property.collation" id="shadyislandmysqldatabaseoptionspropertycollation"></a>

```typescript
public readonly collation: string;
```

- *Type:* `string`
- *Default:* rely on MySQL to choose the default collation.

The database default collation to use.

---

### MysqlDatabaseProps <a name="shady-island.MysqlDatabaseProps" id="shadyislandmysqldatabaseprops"></a>

Constructor properties for MysqlDatabase.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { MysqlDatabaseProps } from 'shady-island'

const mysqlDatabaseProps: MysqlDatabaseProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`databaseName`](#shadyislandmysqldatabasepropspropertydatabasename)<span title="Required">*</span> | `string` | The name of the database/catalog to create. |
| [`securityGroup`](#shadyislandmysqldatabasepropspropertysecuritygroup) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup) | The security group for the Lambda function. |
| [`vpcSubnets`](#shadyislandmysqldatabasepropspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | The type of subnets in the VPC where the Lambda function will run. |
| [`adminSecret`](#shadyislandmysqldatabasepropspropertyadminsecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | A Secrets Manager secret that contains administrative credentials. |
| [`endpoint`](#shadyislandmysqldatabasepropspropertyendpoint)<span title="Required">*</span> | [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint) | The cluster or instance endpoint. |
| [`target`](#shadyislandmysqldatabasepropspropertytarget)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IConnectable`](#aws-cdk-lib.aws_ec2.IConnectable) | The target service or database. |
| [`vpc`](#shadyislandmysqldatabasepropspropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The VPC where the Lambda function will run. |
| [`characterSet`](#shadyislandmysqldatabasepropspropertycharacterset) | `string` | The database default character set to use. |
| [`collation`](#shadyislandmysqldatabasepropspropertycollation) | `string` | The database default collation to use. |

---

##### `databaseName`<sup>Required</sup> <a name="shady-island.MysqlDatabaseProps.property.databaseName" id="shadyislandmysqldatabasepropspropertydatabasename"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* `string`

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseProps.property.securityGroup" id="shadyislandmysqldatabasepropspropertysecuritygroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseProps.property.vpcSubnets" id="shadyislandmysqldatabasepropspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Required</sup> <a name="shady-island.MysqlDatabaseProps.property.adminSecret" id="shadyislandmysqldatabasepropspropertyadminsecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

A Secrets Manager secret that contains administrative credentials.

---

##### `endpoint`<sup>Required</sup> <a name="shady-island.MysqlDatabaseProps.property.endpoint" id="shadyislandmysqldatabasepropspropertyendpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint)

The cluster or instance endpoint.

---

##### `target`<sup>Required</sup> <a name="shady-island.MysqlDatabaseProps.property.target" id="shadyislandmysqldatabasepropspropertytarget"></a>

```typescript
public readonly target: IConnectable;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IConnectable`](#aws-cdk-lib.aws_ec2.IConnectable)

The target service or database.

---

##### `vpc`<sup>Required</sup> <a name="shady-island.MysqlDatabaseProps.property.vpc" id="shadyislandmysqldatabasepropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The VPC where the Lambda function will run.

---

##### `characterSet`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseProps.property.characterSet" id="shadyislandmysqldatabasepropspropertycharacterset"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* `string`
- *Default:* "utf8mb4"

The database default character set to use.

---

##### `collation`<sup>Optional</sup> <a name="shady-island.MysqlDatabaseProps.property.collation" id="shadyislandmysqldatabasepropspropertycollation"></a>

```typescript
public readonly collation: string;
```

- *Type:* `string`
- *Default:* rely on MySQL to choose the default collation.

The database default collation to use.

---

### PostgresqlDatabaseForClusterOptions <a name="shady-island.PostgresqlDatabaseForClusterOptions" id="shadyislandpostgresqldatabaseforclusteroptions"></a>

Properties to specify when using PostgresqlDatabase.forCluster().

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PostgresqlDatabaseForClusterOptions } from 'shady-island'

const postgresqlDatabaseForClusterOptions: PostgresqlDatabaseForClusterOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ownerSecret`](#shadyislandpostgresqldatabaseforclusteroptionspropertyownersecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | The Secrets Manager secret for the owner of the schema. |
| [`certificateAuthoritiesUrl`](#shadyislandpostgresqldatabaseforclusteroptionspropertycertificateauthoritiesurl) | `string` | The URL to the PEM-encoded Certificate Authority file. |
| [`encoding`](#shadyislandpostgresqldatabaseforclusteroptionspropertyencoding) | `string` | The database default encoding set to use. |
| [`locale`](#shadyislandpostgresqldatabaseforclusteroptionspropertylocale) | `string` | The database default locale to use. |
| [`schemaName`](#shadyislandpostgresqldatabaseforclusteroptionspropertyschemaname) | `string` | The name of the schema to create. |
| [`databaseName`](#shadyislandpostgresqldatabaseforclusteroptionspropertydatabasename)<span title="Required">*</span> | `string` | The name of the database/catalog to create. |
| [`securityGroup`](#shadyislandpostgresqldatabaseforclusteroptionspropertysecuritygroup) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup) | The security group for the Lambda function. |
| [`vpcSubnets`](#shadyislandpostgresqldatabaseforclusteroptionspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | The type of subnets in the VPC where the Lambda function will run. |
| [`adminSecret`](#shadyislandpostgresqldatabaseforclusteroptionspropertyadminsecret) | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | A Secrets Manager secret that contains administrative credentials. |

---

##### `ownerSecret`<sup>Required</sup> <a name="shady-island.PostgresqlDatabaseForClusterOptions.property.ownerSecret" id="shadyislandpostgresqldatabaseforclusteroptionspropertyownersecret"></a>

```typescript
public readonly ownerSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

The Secrets Manager secret for the owner of the schema.

---

##### `certificateAuthoritiesUrl`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForClusterOptions.property.certificateAuthoritiesUrl" id="shadyislandpostgresqldatabaseforclusteroptionspropertycertificateauthoritiesurl"></a>

```typescript
public readonly certificateAuthoritiesUrl: string;
```

- *Type:* `string`
- *Default:* https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem

The URL to the PEM-encoded Certificate Authority file.

Normally, we would just assume the Lambda runtime has the certificates to trust already installed. Since the current Lambda runtime environments lack the newer RDS certificate authority certificates, this option can be used to specify a URL to a remote file containing the CAs.

> https://github.com/aws/aws-lambda-base-images/issues/123

---

##### `encoding`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForClusterOptions.property.encoding" id="shadyislandpostgresqldatabaseforclusteroptionspropertyencoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* `string`
- *Default:* "UTF8"

The database default encoding set to use.

---

##### `locale`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForClusterOptions.property.locale" id="shadyislandpostgresqldatabaseforclusteroptionspropertylocale"></a>

```typescript
public readonly locale: string;
```

- *Type:* `string`
- *Default:* rely on PostgreSQL to choose the default locale.

The database default locale to use.

---

##### `schemaName`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForClusterOptions.property.schemaName" id="shadyislandpostgresqldatabaseforclusteroptionspropertyschemaname"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* `string`
- *Default:* The username of the ownerSecret.

The name of the schema to create.

---

##### `databaseName`<sup>Required</sup> <a name="shady-island.PostgresqlDatabaseForClusterOptions.property.databaseName" id="shadyislandpostgresqldatabaseforclusteroptionspropertydatabasename"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* `string`

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForClusterOptions.property.securityGroup" id="shadyislandpostgresqldatabaseforclusteroptionspropertysecuritygroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForClusterOptions.property.vpcSubnets" id="shadyislandpostgresqldatabaseforclusteroptionspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForClusterOptions.property.adminSecret" id="shadyislandpostgresqldatabaseforclusteroptionspropertyadminsecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

A Secrets Manager secret that contains administrative credentials.

---

### PostgresqlDatabaseForServerlessClusterOptions <a name="shady-island.PostgresqlDatabaseForServerlessClusterOptions" id="shadyislandpostgresqldatabaseforserverlessclusteroptions"></a>

Properties to specify when using PostgresqlDatabase.forServerlessCluster().

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PostgresqlDatabaseForServerlessClusterOptions } from 'shady-island'

const postgresqlDatabaseForServerlessClusterOptions: PostgresqlDatabaseForServerlessClusterOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ownerSecret`](#shadyislandpostgresqldatabaseforserverlessclusteroptionspropertyownersecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | The Secrets Manager secret for the owner of the schema. |
| [`certificateAuthoritiesUrl`](#shadyislandpostgresqldatabaseforserverlessclusteroptionspropertycertificateauthoritiesurl) | `string` | The URL to the PEM-encoded Certificate Authority file. |
| [`encoding`](#shadyislandpostgresqldatabaseforserverlessclusteroptionspropertyencoding) | `string` | The database default encoding set to use. |
| [`locale`](#shadyislandpostgresqldatabaseforserverlessclusteroptionspropertylocale) | `string` | The database default locale to use. |
| [`schemaName`](#shadyislandpostgresqldatabaseforserverlessclusteroptionspropertyschemaname) | `string` | The name of the schema to create. |
| [`databaseName`](#shadyislandpostgresqldatabaseforserverlessclusteroptionspropertydatabasename)<span title="Required">*</span> | `string` | The name of the database/catalog to create. |
| [`securityGroup`](#shadyislandpostgresqldatabaseforserverlessclusteroptionspropertysecuritygroup) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup) | The security group for the Lambda function. |
| [`vpcSubnets`](#shadyislandpostgresqldatabaseforserverlessclusteroptionspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | The type of subnets in the VPC where the Lambda function will run. |
| [`adminSecret`](#shadyislandpostgresqldatabaseforserverlessclusteroptionspropertyadminsecret) | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | A Secrets Manager secret that contains administrative credentials. |
| [`vpc`](#shadyislandpostgresqldatabaseforserverlessclusteroptionspropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The VPC where the Lambda function will run. |

---

##### `ownerSecret`<sup>Required</sup> <a name="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.ownerSecret" id="shadyislandpostgresqldatabaseforserverlessclusteroptionspropertyownersecret"></a>

```typescript
public readonly ownerSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

The Secrets Manager secret for the owner of the schema.

---

##### `certificateAuthoritiesUrl`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.certificateAuthoritiesUrl" id="shadyislandpostgresqldatabaseforserverlessclusteroptionspropertycertificateauthoritiesurl"></a>

```typescript
public readonly certificateAuthoritiesUrl: string;
```

- *Type:* `string`
- *Default:* https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem

The URL to the PEM-encoded Certificate Authority file.

Normally, we would just assume the Lambda runtime has the certificates to trust already installed. Since the current Lambda runtime environments lack the newer RDS certificate authority certificates, this option can be used to specify a URL to a remote file containing the CAs.

> https://github.com/aws/aws-lambda-base-images/issues/123

---

##### `encoding`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.encoding" id="shadyislandpostgresqldatabaseforserverlessclusteroptionspropertyencoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* `string`
- *Default:* "UTF8"

The database default encoding set to use.

---

##### `locale`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.locale" id="shadyislandpostgresqldatabaseforserverlessclusteroptionspropertylocale"></a>

```typescript
public readonly locale: string;
```

- *Type:* `string`
- *Default:* rely on PostgreSQL to choose the default locale.

The database default locale to use.

---

##### `schemaName`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.schemaName" id="shadyislandpostgresqldatabaseforserverlessclusteroptionspropertyschemaname"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* `string`
- *Default:* The username of the ownerSecret.

The name of the schema to create.

---

##### `databaseName`<sup>Required</sup> <a name="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.databaseName" id="shadyislandpostgresqldatabaseforserverlessclusteroptionspropertydatabasename"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* `string`

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.securityGroup" id="shadyislandpostgresqldatabaseforserverlessclusteroptionspropertysecuritygroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.vpcSubnets" id="shadyislandpostgresqldatabaseforserverlessclusteroptionspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.adminSecret" id="shadyislandpostgresqldatabaseforserverlessclusteroptionspropertyadminsecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

A Secrets Manager secret that contains administrative credentials.

---

##### `vpc`<sup>Required</sup> <a name="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.vpc" id="shadyislandpostgresqldatabaseforserverlessclusteroptionspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The VPC where the Lambda function will run.

---

### PostgresqlDatabaseOptions <a name="shady-island.PostgresqlDatabaseOptions" id="shadyislandpostgresqldatabaseoptions"></a>

PostgreSQL-specific options.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PostgresqlDatabaseOptions } from 'shady-island'

const postgresqlDatabaseOptions: PostgresqlDatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ownerSecret`](#shadyislandpostgresqldatabaseoptionspropertyownersecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | The Secrets Manager secret for the owner of the schema. |
| [`certificateAuthoritiesUrl`](#shadyislandpostgresqldatabaseoptionspropertycertificateauthoritiesurl) | `string` | The URL to the PEM-encoded Certificate Authority file. |
| [`encoding`](#shadyislandpostgresqldatabaseoptionspropertyencoding) | `string` | The database default encoding set to use. |
| [`locale`](#shadyislandpostgresqldatabaseoptionspropertylocale) | `string` | The database default locale to use. |
| [`schemaName`](#shadyislandpostgresqldatabaseoptionspropertyschemaname) | `string` | The name of the schema to create. |

---

##### `ownerSecret`<sup>Required</sup> <a name="shady-island.PostgresqlDatabaseOptions.property.ownerSecret" id="shadyislandpostgresqldatabaseoptionspropertyownersecret"></a>

```typescript
public readonly ownerSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

The Secrets Manager secret for the owner of the schema.

---

##### `certificateAuthoritiesUrl`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseOptions.property.certificateAuthoritiesUrl" id="shadyislandpostgresqldatabaseoptionspropertycertificateauthoritiesurl"></a>

```typescript
public readonly certificateAuthoritiesUrl: string;
```

- *Type:* `string`
- *Default:* https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem

The URL to the PEM-encoded Certificate Authority file.

Normally, we would just assume the Lambda runtime has the certificates to trust already installed. Since the current Lambda runtime environments lack the newer RDS certificate authority certificates, this option can be used to specify a URL to a remote file containing the CAs.

> https://github.com/aws/aws-lambda-base-images/issues/123

---

##### `encoding`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseOptions.property.encoding" id="shadyislandpostgresqldatabaseoptionspropertyencoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* `string`
- *Default:* "UTF8"

The database default encoding set to use.

---

##### `locale`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseOptions.property.locale" id="shadyislandpostgresqldatabaseoptionspropertylocale"></a>

```typescript
public readonly locale: string;
```

- *Type:* `string`
- *Default:* rely on PostgreSQL to choose the default locale.

The database default locale to use.

---

##### `schemaName`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseOptions.property.schemaName" id="shadyislandpostgresqldatabaseoptionspropertyschemaname"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* `string`
- *Default:* The username of the ownerSecret.

The name of the schema to create.

---

### PostgresqlDatabaseProps <a name="shady-island.PostgresqlDatabaseProps" id="shadyislandpostgresqldatabaseprops"></a>

Constructor properties for PostgresqlDatabase.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PostgresqlDatabaseProps } from 'shady-island'

const postgresqlDatabaseProps: PostgresqlDatabaseProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`databaseName`](#shadyislandpostgresqldatabasepropspropertydatabasename)<span title="Required">*</span> | `string` | The name of the database/catalog to create. |
| [`securityGroup`](#shadyislandpostgresqldatabasepropspropertysecuritygroup) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup) | The security group for the Lambda function. |
| [`vpcSubnets`](#shadyislandpostgresqldatabasepropspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | The type of subnets in the VPC where the Lambda function will run. |
| [`adminSecret`](#shadyislandpostgresqldatabasepropspropertyadminsecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | A Secrets Manager secret that contains administrative credentials. |
| [`endpoint`](#shadyislandpostgresqldatabasepropspropertyendpoint)<span title="Required">*</span> | [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint) | The cluster or instance endpoint. |
| [`target`](#shadyislandpostgresqldatabasepropspropertytarget)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IConnectable`](#aws-cdk-lib.aws_ec2.IConnectable) | The target service or database. |
| [`vpc`](#shadyislandpostgresqldatabasepropspropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The VPC where the Lambda function will run. |
| [`ownerSecret`](#shadyislandpostgresqldatabasepropspropertyownersecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | The Secrets Manager secret for the owner of the schema. |
| [`certificateAuthoritiesUrl`](#shadyislandpostgresqldatabasepropspropertycertificateauthoritiesurl) | `string` | The URL to the PEM-encoded Certificate Authority file. |
| [`encoding`](#shadyislandpostgresqldatabasepropspropertyencoding) | `string` | The database default encoding set to use. |
| [`locale`](#shadyislandpostgresqldatabasepropspropertylocale) | `string` | The database default locale to use. |
| [`schemaName`](#shadyislandpostgresqldatabasepropspropertyschemaname) | `string` | The name of the schema to create. |

---

##### `databaseName`<sup>Required</sup> <a name="shady-island.PostgresqlDatabaseProps.property.databaseName" id="shadyislandpostgresqldatabasepropspropertydatabasename"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* `string`

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseProps.property.securityGroup" id="shadyislandpostgresqldatabasepropspropertysecuritygroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseProps.property.vpcSubnets" id="shadyislandpostgresqldatabasepropspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Required</sup> <a name="shady-island.PostgresqlDatabaseProps.property.adminSecret" id="shadyislandpostgresqldatabasepropspropertyadminsecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

A Secrets Manager secret that contains administrative credentials.

---

##### `endpoint`<sup>Required</sup> <a name="shady-island.PostgresqlDatabaseProps.property.endpoint" id="shadyislandpostgresqldatabasepropspropertyendpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint)

The cluster or instance endpoint.

---

##### `target`<sup>Required</sup> <a name="shady-island.PostgresqlDatabaseProps.property.target" id="shadyislandpostgresqldatabasepropspropertytarget"></a>

```typescript
public readonly target: IConnectable;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IConnectable`](#aws-cdk-lib.aws_ec2.IConnectable)

The target service or database.

---

##### `vpc`<sup>Required</sup> <a name="shady-island.PostgresqlDatabaseProps.property.vpc" id="shadyislandpostgresqldatabasepropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The VPC where the Lambda function will run.

---

##### `ownerSecret`<sup>Required</sup> <a name="shady-island.PostgresqlDatabaseProps.property.ownerSecret" id="shadyislandpostgresqldatabasepropspropertyownersecret"></a>

```typescript
public readonly ownerSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

The Secrets Manager secret for the owner of the schema.

---

##### `certificateAuthoritiesUrl`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseProps.property.certificateAuthoritiesUrl" id="shadyislandpostgresqldatabasepropspropertycertificateauthoritiesurl"></a>

```typescript
public readonly certificateAuthoritiesUrl: string;
```

- *Type:* `string`
- *Default:* https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem

The URL to the PEM-encoded Certificate Authority file.

Normally, we would just assume the Lambda runtime has the certificates to trust already installed. Since the current Lambda runtime environments lack the newer RDS certificate authority certificates, this option can be used to specify a URL to a remote file containing the CAs.

> https://github.com/aws/aws-lambda-base-images/issues/123

---

##### `encoding`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseProps.property.encoding" id="shadyislandpostgresqldatabasepropspropertyencoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* `string`
- *Default:* "UTF8"

The database default encoding set to use.

---

##### `locale`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseProps.property.locale" id="shadyislandpostgresqldatabasepropspropertylocale"></a>

```typescript
public readonly locale: string;
```

- *Type:* `string`
- *Default:* rely on PostgreSQL to choose the default locale.

The database default locale to use.

---

##### `schemaName`<sup>Optional</sup> <a name="shady-island.PostgresqlDatabaseProps.property.schemaName" id="shadyislandpostgresqldatabasepropspropertyschemaname"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* `string`
- *Default:* The username of the ownerSecret.

The name of the schema to create.

---

### PrioritizedLines <a name="shady-island.PrioritizedLines" id="shadyislandprioritizedlines"></a>

A container for lines of a User Data script, sortable by `priority`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PrioritizedLines } from 'shady-island'

const prioritizedLines: PrioritizedLines = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`lines`](#shadyislandprioritizedlinespropertylines)<span title="Required">*</span> | `string`[] | The command lines. |
| [`priority`](#shadyislandprioritizedlinespropertypriority)<span title="Required">*</span> | `number` | The priority for this set of commands. |

---

##### `lines`<sup>Required</sup> <a name="shady-island.PrioritizedLines.property.lines" id="shadyislandprioritizedlinespropertylines"></a>

```typescript
public readonly lines: string[];
```

- *Type:* `string`[]

The command lines.

---

##### `priority`<sup>Required</sup> <a name="shady-island.PrioritizedLines.property.priority" id="shadyislandprioritizedlinespropertypriority"></a>

```typescript
public readonly priority: number;
```

- *Type:* `number`

The priority for this set of commands.

---

### WorkloadProps <a name="shady-island.WorkloadProps" id="shadyislandworkloadprops"></a>

Constructor properties for a Workload.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { WorkloadProps } from 'shady-island'

const workloadProps: WorkloadProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tier`](#shadyislandworkloadpropspropertytier)<span title="Required">*</span> | [`shady-island.Tier`](#shady-island.Tier) | The deployment tier. |
| [`baseDomainName`](#shadyislandworkloadpropspropertybasedomainname) | `string` | The base domain name used to create the FQDN for public resources. |
| [`contextFile`](#shadyislandworkloadpropspropertycontextfile) | `string` | The filesystem path to a JSON file that contains context values to load. |
| [`env`](#shadyislandworkloadpropspropertyenv) | [`aws-cdk-lib.Environment`](#aws-cdk-lib.Environment) | The AWS environment (account/region) where this stack will be deployed. |
| [`workloadName`](#shadyislandworkloadpropspropertyworkloadname) | `string` | The machine identifier for this workload. |

---

##### `tier`<sup>Required</sup> <a name="shady-island.WorkloadProps.property.tier" id="shadyislandworkloadpropspropertytier"></a>

```typescript
public readonly tier: Tier;
```

- *Type:* [`shady-island.Tier`](#shady-island.Tier)

The deployment tier.

---

##### `baseDomainName`<sup>Optional</sup> <a name="shady-island.WorkloadProps.property.baseDomainName" id="shadyislandworkloadpropspropertybasedomainname"></a>

```typescript
public readonly baseDomainName: string;
```

- *Type:* `string`

The base domain name used to create the FQDN for public resources.

---

##### `contextFile`<sup>Optional</sup> <a name="shady-island.WorkloadProps.property.contextFile" id="shadyislandworkloadpropspropertycontextfile"></a>

```typescript
public readonly contextFile: string;
```

- *Type:* `string`

The filesystem path to a JSON file that contains context values to load.

Using this property allows you to load different context values within each instantiated `Workload`, directly from a file you can check into source control.

---

##### `env`<sup>Optional</sup> <a name="shady-island.WorkloadProps.property.env" id="shadyislandworkloadpropspropertyenv"></a>

```typescript
public readonly env: Environment;
```

- *Type:* [`aws-cdk-lib.Environment`](#aws-cdk-lib.Environment)

The AWS environment (account/region) where this stack will be deployed.

---

##### `workloadName`<sup>Optional</sup> <a name="shady-island.WorkloadProps.property.workloadName" id="shadyislandworkloadpropspropertyworkloadname"></a>

```typescript
public readonly workloadName: string;
```

- *Type:* `string`
- *Default:* The id passed to the `Workload` constructor, but in lowercase

The machine identifier for this workload.

This value will be used to create the `publicDomainName` property.  By default, the `stackName` property used to create `Stack` constructs in the `createStack` method will begin with this Workload's `workloadName` and its `tier` separated by hyphens.  Consider providing a constant `workloadName` value to the superclass constructor in your derived class.

---

## Classes <a name="Classes" id="classes"></a>

### ContextLoader <a name="shady-island.ContextLoader" id="shadyislandcontextloader"></a>

A utility to load context values into a construct node.

If you want to use this utility in your own construct, make sure to invoke it before you create any child constructs.

#### Initializers <a name="shady-island.ContextLoader.Initializer" id="shadyislandcontextloaderinitializer"></a>

```typescript
import { ContextLoader } from 'shady-island'

new ContextLoader()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`loadContext`](#shadyislandcontextloaderloadcontext) | Parses JSON file contents, then provides the values to a Node's context. |

---

##### `loadContext` <a name="shady-island.ContextLoader.loadContext" id="shadyislandcontextloaderloadcontext"></a>

```typescript
import { ContextLoader } from 'shady-island'

ContextLoader.loadContext(filename: string, node: Node)
```

###### `filename`<sup>Required</sup> <a name="shady-island.ContextLoader.parameter.filename" id="shadyislandcontextloaderparameterfilename"></a>

- *Type:* `string`

The JSON file with an object to use as context values.

---

###### `node`<sup>Required</sup> <a name="shady-island.ContextLoader.parameter.node" id="shadyislandcontextloaderparameternode"></a>

- *Type:* [`constructs.Node`](#constructs.Node)

The constructs node to receive the context values.

---



### Tier <a name="shady-island.Tier" id="shadyislandtier"></a>

A deployment environment with a specific purpose and audience.

You can create any Tier you like, but we include those explained by DTAP.

> https://en.wikipedia.org/wiki/Development,_testing,_acceptance_and_production

#### Initializers <a name="shady-island.Tier.Initializer" id="shadyislandtierinitializer"></a>

```typescript
import { Tier } from 'shady-island'

new Tier(id: string, label: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#shadyislandtierparameterid)<span title="Required">*</span> | `string` | The machine-readable identifier for this tier (e.g. prod). |
| [`label`](#shadyislandtierparameterlabel)<span title="Required">*</span> | `string` | The human-readable label for this tier (e.g. Production). |

---

##### `id`<sup>Required</sup> <a name="shady-island.Tier.parameter.id" id="shadyislandtierparameterid"></a>

- *Type:* `string`

The machine-readable identifier for this tier (e.g. prod).

---

##### `label`<sup>Required</sup> <a name="shady-island.Tier.parameter.label" id="shadyislandtierparameterlabel"></a>

- *Type:* `string`

The human-readable label for this tier (e.g. Production).

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`applyTags`](#shadyislandtierapplytags) | Adds the label of this tier as a tag to the provided construct. |
| [`assignTo`](#shadyislandtierassignto) | Assigns this tier to a construct. |
| [`matches`](#shadyislandtiermatches) | Compares this tier to the provided value and tests for equality. |

---

##### `applyTags` <a name="shady-island.Tier.applyTags" id="shadyislandtierapplytags"></a>

```typescript
public applyTags(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="shady-island.Tier.parameter.construct" id="shadyislandtierparameterconstruct"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `assignTo` <a name="shady-island.Tier.assignTo" id="shadyislandtierassignto"></a>

```typescript
public assignTo(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="shady-island.Tier.parameter.construct" id="shadyislandtierparameterconstruct"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

The construct to receive the tier assignment.

---

##### `matches` <a name="shady-island.Tier.matches" id="shadyislandtiermatches"></a>

```typescript
public matches(other: Tier)
```

###### `other`<sup>Required</sup> <a name="shady-island.Tier.parameter.other" id="shadyislandtierparameterother"></a>

- *Type:* [`shady-island.Tier`](#shady-island.Tier)

The value to compare.

---

#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`of`](#shadyislandtierof) | Finds the deployment tier of the given construct. |
| [`parse`](#shadyislandtierparse) | Return the deployment tier that corresponds to the provided value. |

---

##### `of` <a name="shady-island.Tier.of" id="shadyislandtierof"></a>

```typescript
import { Tier } from 'shady-island'

Tier.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="shady-island.Tier.parameter.construct" id="shadyislandtierparameterconstruct"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

The construct to inspect.

---

##### `parse` <a name="shady-island.Tier.parse" id="shadyislandtierparse"></a>

```typescript
import { Tier } from 'shady-island'

Tier.parse(value: string)
```

###### `value`<sup>Required</sup> <a name="shady-island.Tier.parameter.value" id="shadyislandtierparametervalue"></a>

- *Type:* `string`

The value to parse, case-insensitive.

---

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#shadyislandtierpropertyid)<span title="Required">*</span> | `string` | The machine-readable identifier for this tier (e.g. prod). |
| [`label`](#shadyislandtierpropertylabel)<span title="Required">*</span> | `string` | The human-readable label for this tier (e.g. Production). |

---

##### `id`<sup>Required</sup> <a name="shady-island.Tier.property.id" id="shadyislandtierpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

The machine-readable identifier for this tier (e.g. prod).

---

##### `label`<sup>Required</sup> <a name="shady-island.Tier.property.label" id="shadyislandtierpropertylabel"></a>

```typescript
public readonly label: string;
```

- *Type:* `string`

The human-readable label for this tier (e.g. Production).

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ACCEPTANCE`](#shadyislandtierpropertyacceptance)<span title="Required">*</span> | [`shady-island.Tier`](#shady-island.Tier) | A tier that represents an acceptance environment. |
| [`DEVELOPMENT`](#shadyislandtierpropertydevelopment)<span title="Required">*</span> | [`shady-island.Tier`](#shady-island.Tier) | A tier that represents a development environment. |
| [`PRODUCTION`](#shadyislandtierpropertyproduction)<span title="Required">*</span> | [`shady-island.Tier`](#shady-island.Tier) | A tier that represents a production environment. |
| [`TESTING`](#shadyislandtierpropertytesting)<span title="Required">*</span> | [`shady-island.Tier`](#shady-island.Tier) | A tier that represents a testing environment. |

---

##### `ACCEPTANCE` <a name="shady-island.Tier.property.ACCEPTANCE" id="shadyislandtierpropertyacceptance"></a>

- *Type:* [`shady-island.Tier`](#shady-island.Tier)

A tier that represents an acceptance environment.

---

##### `DEVELOPMENT` <a name="shady-island.Tier.property.DEVELOPMENT" id="shadyislandtierpropertydevelopment"></a>

- *Type:* [`shady-island.Tier`](#shady-island.Tier)

A tier that represents a development environment.

---

##### `PRODUCTION` <a name="shady-island.Tier.property.PRODUCTION" id="shadyislandtierpropertyproduction"></a>

- *Type:* [`shady-island.Tier`](#shady-island.Tier)

A tier that represents a production environment.

---

##### `TESTING` <a name="shady-island.Tier.property.TESTING" id="shadyislandtierpropertytesting"></a>

- *Type:* [`shady-island.Tier`](#shady-island.Tier)

A tier that represents a testing environment.

---

### TierTagger <a name="shady-island.TierTagger" id="shadyislandtiertagger"></a>

- *Implements:* [`aws-cdk-lib.IAspect`](#aws-cdk-lib.IAspect)

A CDK Aspect to apply the `DeploymentTier` tag to Stacks.

#### Initializers <a name="shady-island.TierTagger.Initializer" id="shadyislandtiertaggerinitializer"></a>

```typescript
import { TierTagger } from 'shady-island'

new TierTagger(tier: Tier)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tier`](#shadyislandtiertaggerparametertier)<span title="Required">*</span> | [`shady-island.Tier`](#shady-island.Tier) | The deployment tier. |

---

##### `tier`<sup>Required</sup> <a name="shady-island.TierTagger.parameter.tier" id="shadyislandtiertaggerparametertier"></a>

- *Type:* [`shady-island.Tier`](#shady-island.Tier)

The deployment tier.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`visit`](#shadyislandtiertaggervisit) | All aspects can visit an IConstruct. |

---

##### `visit` <a name="shady-island.TierTagger.visit" id="shadyislandtiertaggervisit"></a>

```typescript
public visit(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="shady-island.TierTagger.parameter.node" id="shadyislandtiertaggerparameternode"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---




### UserDataBuilder <a name="shady-island.UserDataBuilder" id="shadyislanduserdatabuilder"></a>

A utility class to assist with composing instance User Data.

This class allows multiple observers in code to add lines to the same end result UserData without clobbering each other. Just like `conf.d` directories with priority number prefixes, you can declare the proper execution order of your UserData commands without having to add them in that order.

#### Initializers <a name="shady-island.UserDataBuilder.Initializer" id="shadyislanduserdatabuilderinitializer"></a>

```typescript
import { UserDataBuilder } from 'shady-island'

new UserDataBuilder()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`addCommands`](#shadyislanduserdatabuilderaddcommands) | Add one or more commands to the user data with a priority of `0`. |
| [`buildUserData`](#shadyislanduserdatabuilderbuilduserdata) | Produces the User Data script with all lines sorted in priority order. |
| [`insertCommands`](#shadyislanduserdatabuilderinsertcommands) | Add one or more commands to the user data at a specific priority. |

---

##### `addCommands` <a name="shady-island.UserDataBuilder.addCommands" id="shadyislanduserdatabuilderaddcommands"></a>

```typescript
public addCommands(commands: string)
```

###### `commands`<sup>Required</sup> <a name="shady-island.UserDataBuilder.parameter.commands" id="shadyislanduserdatabuilderparametercommands"></a>

- *Type:* `string`

The lines to add.

---

##### `buildUserData` <a name="shady-island.UserDataBuilder.buildUserData" id="shadyislanduserdatabuilderbuilduserdata"></a>

```typescript
public buildUserData()
```

##### `insertCommands` <a name="shady-island.UserDataBuilder.insertCommands" id="shadyislanduserdatabuilderinsertcommands"></a>

```typescript
public insertCommands(priority: number, commands: string)
```

###### `priority`<sup>Required</sup> <a name="shady-island.UserDataBuilder.parameter.priority" id="shadyislanduserdatabuilderparameterpriority"></a>

- *Type:* `number`

The priority of these lines (lower executes earlier).

---

###### `commands`<sup>Required</sup> <a name="shady-island.UserDataBuilder.parameter.commands" id="shadyislanduserdatabuilderparametercommands"></a>

- *Type:* `string`

The lines to add.

---

#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`forLinux`](#shadyislanduserdatabuilderforlinux) | Returns a user data builder for GNU/Linux operating systems. |
| [`forWindows`](#shadyislanduserdatabuilderforwindows) | Returns a user data builder for Windows operating systems. |

---

##### `forLinux` <a name="shady-island.UserDataBuilder.forLinux" id="shadyislanduserdatabuilderforlinux"></a>

```typescript
import { UserDataBuilder } from 'shady-island'

UserDataBuilder.forLinux(options?: LinuxUserDataOptions)
```

###### `options`<sup>Optional</sup> <a name="shady-island.UserDataBuilder.parameter.options" id="shadyislanduserdatabuilderparameteroptions"></a>

- *Type:* [`aws-cdk-lib.aws_ec2.LinuxUserDataOptions`](#aws-cdk-lib.aws_ec2.LinuxUserDataOptions)

The Linux UserData constructor options.

---

##### `forWindows` <a name="shady-island.UserDataBuilder.forWindows" id="shadyislanduserdatabuilderforwindows"></a>

```typescript
import { UserDataBuilder } from 'shady-island'

UserDataBuilder.forWindows()
```



## Protocols <a name="Protocols" id="protocols"></a>

### IAssignOnLaunch <a name="shady-island.IAssignOnLaunch" id="shadyislandiassignonlaunch"></a>

- *Implemented By:* [`shady-island.AssignOnLaunch`](#shady-island.AssignOnLaunch), [`shady-island.IAssignOnLaunch`](#shady-island.IAssignOnLaunch)

Interface for the AssignOnLaunch class.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vpc`](#shadyislandiassignonlaunchpropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The IPv6-enabled VPC. |
| [`vpcPlacement`](#shadyislandiassignonlaunchpropertyvpcplacement)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.SelectedSubnets`](#aws-cdk-lib.aws_ec2.SelectedSubnets) | The chosen subnets for address assignment on ENI launch. |

---

##### `vpc`<sup>Required</sup> <a name="shady-island.IAssignOnLaunch.property.vpc" id="shadyislandiassignonlaunchpropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The IPv6-enabled VPC.

---

##### `vpcPlacement`<sup>Required</sup> <a name="shady-island.IAssignOnLaunch.property.vpcPlacement" id="shadyislandiassignonlaunchpropertyvpcplacement"></a>

```typescript
public readonly vpcPlacement: SelectedSubnets;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SelectedSubnets`](#aws-cdk-lib.aws_ec2.SelectedSubnets)

The chosen subnets for address assignment on ENI launch.

---

### ICidrContext <a name="shady-island.ICidrContext" id="shadyislandicidrcontext"></a>

- *Implemented By:* [`shady-island.CidrContext`](#shady-island.CidrContext), [`shady-island.ICidrContext`](#shady-island.ICidrContext)

Interface for the CidrContext class.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vpc`](#shadyislandicidrcontextpropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The IPv6-enabled VPC. |

---

##### `vpc`<sup>Required</sup> <a name="shady-island.ICidrContext.property.vpc" id="shadyislandicidrcontextpropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The IPv6-enabled VPC.

---

### IDatabase <a name="shady-island.IDatabase" id="shadyislandidatabase"></a>

- *Extends:* [`constructs.IConstruct`](#constructs.IConstruct)

- *Implemented By:* [`shady-island.BaseDatabase`](#shady-island.BaseDatabase), [`shady-island.MysqlDatabase`](#shady-island.MysqlDatabase), [`shady-island.PostgresqlDatabase`](#shady-island.PostgresqlDatabase), [`shady-island.IDatabase`](#shady-island.IDatabase)

The definition used to create a database.

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`addUserAsOwner`](#shadyislandidatabaseadduserasowner) | Declares a new database user to be assigned ownership permissions. |
| [`addUserAsReader`](#shadyislandidatabaseadduserasreader) | Declares a new database user to be assigned read-only permissions. |
| [`addUserAsUnprivileged`](#shadyislandidatabaseadduserasunprivileged) | Declares a new database user with no permissions. |

---

##### `addUserAsOwner` <a name="shady-island.IDatabase.addUserAsOwner" id="shadyislandidatabaseadduserasowner"></a>

```typescript
public addUserAsOwner(secret: ISecret)
```

###### `secret`<sup>Required</sup> <a name="shady-island.IDatabase.parameter.secret" id="shadyislandidatabaseparametersecret"></a>

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

The Secrets Manager secret containing credentials.

---

##### `addUserAsReader` <a name="shady-island.IDatabase.addUserAsReader" id="shadyislandidatabaseadduserasreader"></a>

```typescript
public addUserAsReader(secret: ISecret)
```

###### `secret`<sup>Required</sup> <a name="shady-island.IDatabase.parameter.secret" id="shadyislandidatabaseparametersecret"></a>

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

The Secrets Manager secret containing credentials.

---

##### `addUserAsUnprivileged` <a name="shady-island.IDatabase.addUserAsUnprivileged" id="shadyislandidatabaseadduserasunprivileged"></a>

```typescript
public addUserAsUnprivileged(secret: ISecret)
```

###### `secret`<sup>Required</sup> <a name="shady-island.IDatabase.parameter.secret" id="shadyislandidatabaseparametersecret"></a>

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

The Secrets Manager secret containing credentials.

---

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`node`](#shadyislandidatabasepropertynode)<span title="Required">*</span> | [`constructs.Node`](#constructs.Node) | The tree node. |
| [`databaseName`](#shadyislandidatabasepropertydatabasename)<span title="Required">*</span> | `string` | The name of the database/catalog. |
| [`endpoint`](#shadyislandidatabasepropertyendpoint)<span title="Required">*</span> | [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint) | The cluster or instance endpoint. |
| [`trigger`](#shadyislandidatabasepropertytrigger)<span title="Required">*</span> | [`aws-cdk-lib.triggers.ITrigger`](#aws-cdk-lib.triggers.ITrigger) | The CDK Trigger that kicks off the process. |

---

##### `node`<sup>Required</sup> <a name="shady-island.IDatabase.property.node" id="shadyislandidatabasepropertynode"></a>

```typescript
public readonly node: Node;
```

- *Type:* [`constructs.Node`](#constructs.Node)

The tree node.

---

##### `databaseName`<sup>Required</sup> <a name="shady-island.IDatabase.property.databaseName" id="shadyislandidatabasepropertydatabasename"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* `string`

The name of the database/catalog.

---

##### `endpoint`<sup>Required</sup> <a name="shady-island.IDatabase.property.endpoint" id="shadyislandidatabasepropertyendpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* [`aws-cdk-lib.aws_rds.Endpoint`](#aws-cdk-lib.aws_rds.Endpoint)

The cluster or instance endpoint.

---

##### `trigger`<sup>Required</sup> <a name="shady-island.IDatabase.property.trigger" id="shadyislandidatabasepropertytrigger"></a>

```typescript
public readonly trigger: ITrigger;
```

- *Type:* [`aws-cdk-lib.triggers.ITrigger`](#aws-cdk-lib.triggers.ITrigger)

The CDK Trigger that kicks off the process.

You can further customize when the trigger fires using `executeAfter`.

---

### IEncryptedFileSystem <a name="shady-island.IEncryptedFileSystem" id="shadyislandiencryptedfilesystem"></a>

- *Extends:* [`constructs.IConstruct`](#constructs.IConstruct)

- *Implemented By:* [`shady-island.EncryptedFileSystem`](#shady-island.EncryptedFileSystem), [`shady-island.IEncryptedFileSystem`](#shady-island.IEncryptedFileSystem)

Interface for EncryptedFileSystem.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`node`](#shadyislandiencryptedfilesystempropertynode)<span title="Required">*</span> | [`constructs.Node`](#constructs.Node) | The tree node. |
| [`fileSystem`](#shadyislandiencryptedfilesystempropertyfilesystem)<span title="Required">*</span> | [`aws-cdk-lib.aws_efs.IFileSystem`](#aws-cdk-lib.aws_efs.IFileSystem) | The EFS file system. |
| [`key`](#shadyislandiencryptedfilesystempropertykey)<span title="Required">*</span> | [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey) | The KMS encryption key. |

---

##### `node`<sup>Required</sup> <a name="shady-island.IEncryptedFileSystem.property.node" id="shadyislandiencryptedfilesystempropertynode"></a>

```typescript
public readonly node: Node;
```

- *Type:* [`constructs.Node`](#constructs.Node)

The tree node.

---

##### `fileSystem`<sup>Required</sup> <a name="shady-island.IEncryptedFileSystem.property.fileSystem" id="shadyislandiencryptedfilesystempropertyfilesystem"></a>

```typescript
public readonly fileSystem: IFileSystem;
```

- *Type:* [`aws-cdk-lib.aws_efs.IFileSystem`](#aws-cdk-lib.aws_efs.IFileSystem)

The EFS file system.

---

##### `key`<sup>Required</sup> <a name="shady-island.IEncryptedFileSystem.property.key" id="shadyislandiencryptedfilesystempropertykey"></a>

```typescript
public readonly key: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)

The KMS encryption key.

---

### IEncryptedLogGroup <a name="shady-island.IEncryptedLogGroup" id="shadyislandiencryptedloggroup"></a>

- *Implemented By:* [`shady-island.EncryptedLogGroup`](#shady-island.EncryptedLogGroup), [`shady-island.IEncryptedLogGroup`](#shady-island.IEncryptedLogGroup)

A log group encrypted by a KMS customer managed key.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#shadyislandiencryptedloggrouppropertykey)<span title="Required">*</span> | [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey) | The KMS encryption key. |
| [`logGroup`](#shadyislandiencryptedloggrouppropertyloggroup)<span title="Required">*</span> | [`aws-cdk-lib.aws_logs.ILogGroup`](#aws-cdk-lib.aws_logs.ILogGroup) | The log group. |

---

##### `key`<sup>Required</sup> <a name="shady-island.IEncryptedLogGroup.property.key" id="shadyislandiencryptedloggrouppropertykey"></a>

```typescript
public readonly key: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)

The KMS encryption key.

---

##### `logGroup`<sup>Required</sup> <a name="shady-island.IEncryptedLogGroup.property.logGroup" id="shadyislandiencryptedloggrouppropertyloggroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* [`aws-cdk-lib.aws_logs.ILogGroup`](#aws-cdk-lib.aws_logs.ILogGroup)

The log group.

---

### IFargateTask <a name="shady-island.IFargateTask" id="shadyislandifargatetask"></a>

- *Extends:* [`aws-cdk-lib.aws_ec2.IConnectable`](#aws-cdk-lib.aws_ec2.IConnectable), [`constructs.IConstruct`](#constructs.IConstruct)

- *Implemented By:* [`shady-island.FargateTask`](#shady-island.FargateTask), [`shady-island.IFargateTask`](#shady-island.IFargateTask)

Interface for FargateTask.

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`grantRun`](#shadyislandifargatetaskgrantrun) | Grants permission to invoke ecs:RunTask on this task's cluster. |

---

##### `grantRun` <a name="shady-island.IFargateTask.grantRun" id="shadyislandifargatetaskgrantrun"></a>

```typescript
public grantRun(grantee: IGrantable)
```

###### `grantee`<sup>Required</sup> <a name="shady-island.IFargateTask.parameter.grantee" id="shadyislandifargatetaskparametergrantee"></a>

- *Type:* [`aws-cdk-lib.aws_iam.IGrantable`](#aws-cdk-lib.aws_iam.IGrantable)

The recipient of the permissions.

---

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`connections`](#shadyislandifargatetaskpropertyconnections)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.Connections`](#aws-cdk-lib.aws_ec2.Connections) | The network connections associated with this resource. |
| [`node`](#shadyislandifargatetaskpropertynode)<span title="Required">*</span> | [`constructs.Node`](#constructs.Node) | The tree node. |
| [`awsVpcNetworkConfig`](#shadyislandifargatetaskpropertyawsvpcnetworkconfig)<span title="Required">*</span> | [`shady-island.FargateAwsVpcConfiguration`](#shady-island.FargateAwsVpcConfiguration) | Get the networkConfiguration.awsvpcConfiguration property to run this task. |
| [`cluster`](#shadyislandifargatetaskpropertycluster)<span title="Required">*</span> | [`aws-cdk-lib.aws_ecs.ICluster`](#aws-cdk-lib.aws_ecs.ICluster) | The name of the cluster that hosts the service. |
| [`taskDefinition`](#shadyislandifargatetaskpropertytaskdefinition)<span title="Required">*</span> | [`aws-cdk-lib.aws_ecs.FargateTaskDefinition`](#aws-cdk-lib.aws_ecs.FargateTaskDefinition) | The task definition that can be launched. |

---

##### `connections`<sup>Required</sup> <a name="shady-island.IFargateTask.property.connections" id="shadyislandifargatetaskpropertyconnections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* [`aws-cdk-lib.aws_ec2.Connections`](#aws-cdk-lib.aws_ec2.Connections)

The network connections associated with this resource.

---

##### `node`<sup>Required</sup> <a name="shady-island.IFargateTask.property.node" id="shadyislandifargatetaskpropertynode"></a>

```typescript
public readonly node: Node;
```

- *Type:* [`constructs.Node`](#constructs.Node)

The tree node.

---

##### `awsVpcNetworkConfig`<sup>Required</sup> <a name="shady-island.IFargateTask.property.awsVpcNetworkConfig" id="shadyislandifargatetaskpropertyawsvpcnetworkconfig"></a>

```typescript
public readonly awsVpcNetworkConfig: FargateAwsVpcConfiguration;
```

- *Type:* [`shady-island.FargateAwsVpcConfiguration`](#shady-island.FargateAwsVpcConfiguration)

Get the networkConfiguration.awsvpcConfiguration property to run this task.

---

##### `cluster`<sup>Required</sup> <a name="shady-island.IFargateTask.property.cluster" id="shadyislandifargatetaskpropertycluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* [`aws-cdk-lib.aws_ecs.ICluster`](#aws-cdk-lib.aws_ecs.ICluster)

The name of the cluster that hosts the service.

---

##### `taskDefinition`<sup>Required</sup> <a name="shady-island.IFargateTask.property.taskDefinition" id="shadyislandifargatetaskpropertytaskdefinition"></a>

```typescript
public readonly taskDefinition: FargateTaskDefinition;
```

- *Type:* [`aws-cdk-lib.aws_ecs.FargateTaskDefinition`](#aws-cdk-lib.aws_ecs.FargateTaskDefinition)

The task definition that can be launched.

---

