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


### Workload <a name="shady-island.Workload" id="shadyislandworkload"></a>

A collection of Stacks in an Environment representing a deployment Tier.

Derive a subclass of `Workload` and create your stacks within.  The difference between this object and a `Stage` is that a `Stage` is meant to be deployed with CDK Pipelines. This class can be used with `cdk deploy`. This class also provides context loading capabilities.

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
| [`stackNamePrefix`](#shadyislandworkloadpropertystacknameprefix)<span title="Required">*</span> | `string` | The prefix used in the default `stackName` provided to child Stacks. |
| [`stacks`](#shadyislandworkloadpropertystacks)<span title="Required">*</span> | [`aws-cdk-lib.Stack`](#aws-cdk-lib.Stack)[] | *No description.* |
| [`tier`](#shadyislandworkloadpropertytier)<span title="Required">*</span> | [`shady-island.Tier`](#shady-island.Tier) | The deployment tier. |
| [`account`](#shadyislandworkloadpropertyaccount) | `string` | The default account for all resources defined within this workload. |
| [`region`](#shadyislandworkloadpropertyregion) | `string` | The default region for all resources defined within this workload. |

---

##### `stackNamePrefix`<sup>Required</sup> <a name="shady-island.Workload.property.stackNamePrefix" id="shadyislandworkloadpropertystacknameprefix"></a>

```typescript
public readonly stackNamePrefix: string;
```

- *Type:* `string`

The prefix used in the default `stackName` provided to child Stacks.

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

##### `account`<sup>Optional</sup> <a name="shady-island.Workload.property.account" id="shadyislandworkloadpropertyaccount"></a>

```typescript
public readonly account: string;
```

- *Type:* `string`

The default account for all resources defined within this workload.

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

##### `assignAddressOnLaunch`<sup>Optional</sup> <a name="shady-island.CidrContextProps.property.assignAddressOnLaunch" id="shadyislandcidrcontextpropspropertyassignaddressonlaunch"></a>

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
| [`contextFile`](#shadyislandworkloadpropspropertycontextfile) | `string` | The filesystem path to a JSON file that contains context values to load. |
| [`env`](#shadyislandworkloadpropspropertyenv) | [`aws-cdk-lib.Environment`](#aws-cdk-lib.Environment) | The AWS environment (account/region) where this stack will be deployed. |
| [`stackNamePrefix`](#shadyislandworkloadpropspropertystacknameprefix) | `string` | The prefix used in the default `stackName` provided to a child `Stack`. |

---

##### `tier`<sup>Required</sup> <a name="shady-island.WorkloadProps.property.tier" id="shadyislandworkloadpropspropertytier"></a>

```typescript
public readonly tier: Tier;
```

- *Type:* [`shady-island.Tier`](#shady-island.Tier)

The deployment tier.

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

##### `stackNamePrefix`<sup>Optional</sup> <a name="shady-island.WorkloadProps.property.stackNamePrefix" id="shadyislandworkloadpropspropertystacknameprefix"></a>

```typescript
public readonly stackNamePrefix: string;
```

- *Type:* `string`
- *Default:* The id passed to the `Workload` constructor, but in lowercase

The prefix used in the default `stackName` provided to a child `Stack`.

By default, the `stackName` property provided to the `Stack` will begin with this Workload's `stackNamePrefix` and its `tier` separated by hyphens.  Consider providing a constant `stackNamePrefix` value to the superclass constructor in your derived class.

---

## Classes <a name="Classes" id="classes"></a>

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
| [`matches`](#shadyislandtiermatches) | Compares this tier to the provided value and tests for equality. |

---

##### `applyTags` <a name="shady-island.Tier.applyTags" id="shadyislandtierapplytags"></a>

```typescript
public applyTags(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="shady-island.Tier.parameter.construct" id="shadyislandtierparameterconstruct"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `matches` <a name="shady-island.Tier.matches" id="shadyislandtiermatches"></a>

```typescript
public matches(other: Tier)
```

###### `other`<sup>Required</sup> <a name="shady-island.Tier.parameter.other" id="shadyislandtierparameterother"></a>

- *Type:* [`shady-island.Tier`](#shady-island.Tier)

The value to compare.

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

