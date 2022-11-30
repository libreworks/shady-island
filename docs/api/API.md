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
| [`enableAutomaticBackups`](#shadyislandencryptedfilesystempropspropertyenableautomaticbackups) | `boolean` | Whether to enable automatic backups for the file system. |
| [`encrypted`](#shadyislandencryptedfilesystempropspropertyencrypted) | `boolean` | Defines if the data at rest in the file system is encrypted or not. |
| [`fileSystemName`](#shadyislandencryptedfilesystempropspropertyfilesystemname) | `string` | The file system's name. |
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
- *Default:* If your application has the '

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

##### `kmsKey`<sup>Optional</sup> <a name="shady-island.EncryptedFileSystemProps.property.kmsKey" id="shadyislandencryptedfilesystempropspropertykmskey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)
- *Default:* if 'encrypted' is true, the default key for EFS (/aws/elasticfilesystem) is used

The KMS key used for encryption.

This is required to encrypt the data at rest if @encrypted is set to true.

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

#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`parse`](#shadyislandtierparse) | Return the deployment tier that corresponds to the provided value. |

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

