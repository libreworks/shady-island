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

