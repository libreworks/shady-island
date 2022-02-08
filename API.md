# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

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

