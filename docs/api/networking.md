# `networking` Submodule <a name="`networking` Submodule" id="shady-island.networking"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticIp <a name="ElasticIp" id="shady-island.networking.ElasticIp"></a>

- *Implements:* <a href="#shady-island.networking.IElasticIp">IElasticIp</a>

An EC2 Elastic IP address.

#### Initializers <a name="Initializers" id="shady-island.networking.ElasticIp.Initializer"></a>

```typescript
import { networking } from 'shady-island'

new networking.ElasticIp(scope: Construct, id: string, props?: ElasticIpProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.ElasticIp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.networking.ElasticIp.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.networking.ElasticIp.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.networking.ElasticIpProps">ElasticIpProps</a></code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.networking.ElasticIp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.networking.ElasticIp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Optional</sup> <a name="props" id="shady-island.networking.ElasticIp.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.networking.ElasticIpProps">ElasticIpProps</a>

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.ElasticIp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.networking.ElasticIp.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#shady-island.networking.ElasticIp.grant">grant</a></code> | Grant the given identity custom permissions. |

---

##### `toString` <a name="toString" id="shady-island.networking.ElasticIp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="shady-island.networking.ElasticIp.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="shady-island.networking.ElasticIp.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grant` <a name="grant" id="shady-island.networking.ElasticIp.grant"></a>

```typescript
public grant(identity: IGrantable, actions: ...string[]): Grant
```

Grant the given identity custom permissions.

e.g. `ec2:AssociateAddress`, `ec2:DisableAddressTransfer`,
`ec2:DisassociateAddress`, `ec2:EnableAddressTransfer`, among others.

###### `identity`<sup>Required</sup> <a name="identity" id="shady-island.networking.ElasticIp.grant.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="shady-island.networking.ElasticIp.grant.parameter.actions"></a>

- *Type:* ...string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.ElasticIp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#shady-island.networking.ElasticIp.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#shady-island.networking.ElasticIp.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#shady-island.networking.ElasticIp.fromAllocationId">fromAllocationId</a></code> | Import an existing EIP from the given allocation ID. |
| <code><a href="#shady-island.networking.ElasticIp.fromElasticIpArn">fromElasticIpArn</a></code> | Import an existing EIP from its ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.networking.ElasticIp.isConstruct"></a>

```typescript
import { networking } from 'shady-island'

networking.ElasticIp.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.networking.ElasticIp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="shady-island.networking.ElasticIp.isOwnedResource"></a>

```typescript
import { networking } from 'shady-island'

networking.ElasticIp.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="shady-island.networking.ElasticIp.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="shady-island.networking.ElasticIp.isResource"></a>

```typescript
import { networking } from 'shady-island'

networking.ElasticIp.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="shady-island.networking.ElasticIp.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromAllocationId` <a name="fromAllocationId" id="shady-island.networking.ElasticIp.fromAllocationId"></a>

```typescript
import { networking } from 'shady-island'

networking.ElasticIp.fromAllocationId(scope: Construct, id: string, allocationId: string)
```

Import an existing EIP from the given allocation ID.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.networking.ElasticIp.fromAllocationId.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.networking.ElasticIp.fromAllocationId.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

###### `allocationId`<sup>Required</sup> <a name="allocationId" id="shady-island.networking.ElasticIp.fromAllocationId.parameter.allocationId"></a>

- *Type:* string

The EIP allocation ID.

---

##### `fromElasticIpArn` <a name="fromElasticIpArn" id="shady-island.networking.ElasticIp.fromElasticIpArn"></a>

```typescript
import { networking } from 'shady-island'

networking.ElasticIp.fromElasticIpArn(scope: Construct, id: string, arn: string)
```

Import an existing EIP from its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.networking.ElasticIp.fromElasticIpArn.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.networking.ElasticIp.fromElasticIpArn.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

###### `arn`<sup>Required</sup> <a name="arn" id="shady-island.networking.ElasticIp.fromElasticIpArn.parameter.arn"></a>

- *Type:* string

The EIP ARN.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.ElasticIp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.networking.ElasticIp.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#shady-island.networking.ElasticIp.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#shady-island.networking.ElasticIp.property.allocationId">allocationId</a></code> | <code>string</code> | The allocation ID of the Elastic IP address. |
| <code><a href="#shady-island.networking.ElasticIp.property.elasticIpArn">elasticIpArn</a></code> | <code>string</code> | The ARN of the Elastic IP address. |
| <code><a href="#shady-island.networking.ElasticIp.property.publicIp">publicIp</a></code> | <code>string</code> | The IPv4 address. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.networking.ElasticIp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="shady-island.networking.ElasticIp.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="shady-island.networking.ElasticIp.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `allocationId`<sup>Required</sup> <a name="allocationId" id="shady-island.networking.ElasticIp.property.allocationId"></a>

```typescript
public readonly allocationId: string;
```

- *Type:* string

The allocation ID of the Elastic IP address.

---

##### `elasticIpArn`<sup>Required</sup> <a name="elasticIpArn" id="shady-island.networking.ElasticIp.property.elasticIpArn"></a>

```typescript
public readonly elasticIpArn: string;
```

- *Type:* string

The ARN of the Elastic IP address.

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="shady-island.networking.ElasticIp.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

The IPv4 address.

---


### NetworkInterface <a name="NetworkInterface" id="shady-island.networking.NetworkInterface"></a>

- *Implements:* <a href="#shady-island.networking.INetworkInterface">INetworkInterface</a>

A Network Interface.

#### Initializers <a name="Initializers" id="shady-island.networking.NetworkInterface.Initializer"></a>

```typescript
import { networking } from 'shady-island'

new networking.NetworkInterface(scope: Construct, id: string, props: NetworkInterfaceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.NetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.networking.NetworkInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.networking.NetworkInterface.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.networking.NetworkInterfaceProps">NetworkInterfaceProps</a></code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.networking.NetworkInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.networking.NetworkInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.networking.NetworkInterface.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.networking.NetworkInterfaceProps">NetworkInterfaceProps</a>

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.NetworkInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.networking.NetworkInterface.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="shady-island.networking.NetworkInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="shady-island.networking.NetworkInterface.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="shady-island.networking.NetworkInterface.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.NetworkInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#shady-island.networking.NetworkInterface.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#shady-island.networking.NetworkInterface.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#shady-island.networking.NetworkInterface.fromNetworkInterfaceAttributes">fromNetworkInterfaceAttributes</a></code> | Import an existing Network Interface from the given attributes. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.networking.NetworkInterface.isConstruct"></a>

```typescript
import { networking } from 'shady-island'

networking.NetworkInterface.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.networking.NetworkInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="shady-island.networking.NetworkInterface.isOwnedResource"></a>

```typescript
import { networking } from 'shady-island'

networking.NetworkInterface.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="shady-island.networking.NetworkInterface.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="shady-island.networking.NetworkInterface.isResource"></a>

```typescript
import { networking } from 'shady-island'

networking.NetworkInterface.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="shady-island.networking.NetworkInterface.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromNetworkInterfaceAttributes` <a name="fromNetworkInterfaceAttributes" id="shady-island.networking.NetworkInterface.fromNetworkInterfaceAttributes"></a>

```typescript
import { networking } from 'shady-island'

networking.NetworkInterface.fromNetworkInterfaceAttributes(scope: Construct, id: string, attribs: NetworkInterfaceAttributes)
```

Import an existing Network Interface from the given attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.networking.NetworkInterface.fromNetworkInterfaceAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.networking.NetworkInterface.fromNetworkInterfaceAttributes.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

###### `attribs`<sup>Required</sup> <a name="attribs" id="shady-island.networking.NetworkInterface.fromNetworkInterfaceAttributes.parameter.attribs"></a>

- *Type:* <a href="#shady-island.networking.NetworkInterfaceAttributes">NetworkInterfaceAttributes</a>

The Network Interface attributes.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.NetworkInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.networking.NetworkInterface.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#shady-island.networking.NetworkInterface.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#shady-island.networking.NetworkInterface.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#shady-island.networking.NetworkInterface.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#shady-island.networking.NetworkInterface.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | The ID of this Network Interface. |
| <code><a href="#shady-island.networking.NetworkInterface.property.privateIpv4Address">privateIpv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#shady-island.networking.NetworkInterface.property.subnet">subnet</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet</code> | The subnet of this Network Interface. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.networking.NetworkInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="shady-island.networking.NetworkInterface.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="shady-island.networking.NetworkInterface.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `connections`<sup>Required</sup> <a name="connections" id="shady-island.networking.NetworkInterface.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="shady-island.networking.NetworkInterface.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="shady-island.networking.NetworkInterface.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

The ID of this Network Interface.

---

##### `privateIpv4Address`<sup>Required</sup> <a name="privateIpv4Address" id="shady-island.networking.NetworkInterface.property.privateIpv4Address"></a>

```typescript
public readonly privateIpv4Address: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="shady-island.networking.NetworkInterface.property.subnet"></a>

```typescript
public readonly subnet: ISubnet;
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet

The subnet of this Network Interface.

---


### SecretHttpHeader <a name="SecretHttpHeader" id="shady-island.networking.SecretHttpHeader"></a>

- *Implements:* <a href="#shady-island.networking.ISecretHttpHeader">ISecretHttpHeader</a>

Configure a secret header an ALB can require for every request.

#### Initializers <a name="Initializers" id="shady-island.networking.SecretHttpHeader.Initializer"></a>

```typescript
import { networking } from 'shady-island'

new networking.SecretHttpHeader(scope: Construct, id: string, props?: SecretHttpHeaderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.SecretHttpHeader.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The parent scope. |
| <code><a href="#shady-island.networking.SecretHttpHeader.Initializer.parameter.id">id</a></code> | <code>string</code> | - The construct identifier. |
| <code><a href="#shady-island.networking.SecretHttpHeader.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.networking.SecretHttpHeaderProps">SecretHttpHeaderProps</a></code> | - The configuration properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.networking.SecretHttpHeader.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent scope.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.networking.SecretHttpHeader.Initializer.parameter.id"></a>

- *Type:* string

The construct identifier.

---

##### `props`<sup>Optional</sup> <a name="props" id="shady-island.networking.SecretHttpHeader.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.networking.SecretHttpHeaderProps">SecretHttpHeaderProps</a>

The configuration properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.SecretHttpHeader.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.networking.SecretHttpHeader.createListenerCondition">createListenerCondition</a></code> | *No description.* |
| <code><a href="#shady-island.networking.SecretHttpHeader.createOriginCustomHeaders">createOriginCustomHeaders</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="shady-island.networking.SecretHttpHeader.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createListenerCondition` <a name="createListenerCondition" id="shady-island.networking.SecretHttpHeader.createListenerCondition"></a>

```typescript
public createListenerCondition(): ListenerCondition
```

##### `createOriginCustomHeaders` <a name="createOriginCustomHeaders" id="shady-island.networking.SecretHttpHeader.createOriginCustomHeaders"></a>

```typescript
public createOriginCustomHeaders(): {[ key: string ]: string}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.SecretHttpHeader.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#shady-island.networking.SecretHttpHeader.fromSecret">fromSecret</a></code> | Create a SecretHttpHeader from an existing Secrets Manager secret. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.networking.SecretHttpHeader.isConstruct"></a>

```typescript
import { networking } from 'shady-island'

networking.SecretHttpHeader.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.networking.SecretHttpHeader.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromSecret` <a name="fromSecret" id="shady-island.networking.SecretHttpHeader.fromSecret"></a>

```typescript
import { networking } from 'shady-island'

networking.SecretHttpHeader.fromSecret(scope: Construct, id: string, secret: ISecret)
```

Create a SecretHttpHeader from an existing Secrets Manager secret.

The secret must be in JSON format and have two fields: `name` and `value`.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.networking.SecretHttpHeader.fromSecret.parameter.scope"></a>

- *Type:* constructs.Construct

The parent scope.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.networking.SecretHttpHeader.fromSecret.parameter.id"></a>

- *Type:* string

The ID for the new construct.

---

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.networking.SecretHttpHeader.fromSecret.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The existing Secrets Manager secret.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.SecretHttpHeader.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.networking.SecretHttpHeader.property.defaultHeaderName">defaultHeaderName</a></code> | <code>string</code> | Gets the default header name. |
| <code><a href="#shady-island.networking.SecretHttpHeader.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#shady-island.networking.SecretHttpHeader.property.headerValue">headerValue</a></code> | <code>aws-cdk-lib.SecretValue</code> | *No description.* |
| <code><a href="#shady-island.networking.SecretHttpHeader.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | The Secrets Manager secret that contains the name and value of the header. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.networking.SecretHttpHeader.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `defaultHeaderName`<sup>Required</sup> <a name="defaultHeaderName" id="shady-island.networking.SecretHttpHeader.property.defaultHeaderName"></a>

```typescript
public readonly defaultHeaderName: string;
```

- *Type:* string

Gets the default header name.

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="shady-island.networking.SecretHttpHeader.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="shady-island.networking.SecretHttpHeader.property.headerValue"></a>

```typescript
public readonly headerValue: SecretValue;
```

- *Type:* aws-cdk-lib.SecretValue

---

##### `secret`<sup>Required</sup> <a name="secret" id="shady-island.networking.SecretHttpHeader.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The Secrets Manager secret that contains the name and value of the header.

---


### SingletonLaunchTemplate <a name="SingletonLaunchTemplate" id="shady-island.networking.SingletonLaunchTemplate"></a>

A launch template bound to a single Elastic Network Interface.

#### Initializers <a name="Initializers" id="shady-island.networking.SingletonLaunchTemplate.Initializer"></a>

```typescript
import { networking } from 'shady-island'

new networking.SingletonLaunchTemplate(scope: Construct, id: string, props: SingletonLaunchTemplateProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.networking.SingletonLaunchTemplateProps">SingletonLaunchTemplateProps</a></code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.networking.SingletonLaunchTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.networking.SingletonLaunchTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.networking.SingletonLaunchTemplate.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.networking.SingletonLaunchTemplateProps">SingletonLaunchTemplateProps</a>

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.addSecurityGroup">addSecurityGroup</a></code> | Add the security group to the instance. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.createAutoScalingGroup">createAutoScalingGroup</a></code> | Creates an auto-scaling group for this launch template. |

---

##### `toString` <a name="toString" id="shady-island.networking.SingletonLaunchTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="shady-island.networking.SingletonLaunchTemplate.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="shady-island.networking.SingletonLaunchTemplate.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addSecurityGroup` <a name="addSecurityGroup" id="shady-island.networking.SingletonLaunchTemplate.addSecurityGroup"></a>

```typescript
public addSecurityGroup(securityGroup: ISecurityGroup): void
```

Add the security group to the instance.

###### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="shady-island.networking.SingletonLaunchTemplate.addSecurityGroup.parameter.securityGroup"></a>

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

---

##### `createAutoScalingGroup` <a name="createAutoScalingGroup" id="shady-island.networking.SingletonLaunchTemplate.createAutoScalingGroup"></a>

```typescript
public createAutoScalingGroup(id: string, props: AutoScalingGroupProps): AutoScalingGroup
```

Creates an auto-scaling group for this launch template.

The following properties are ignored (if specified): `launchTemplate`,
`minCapacity`, and `maxCapacity`.

###### `id`<sup>Required</sup> <a name="id" id="shady-island.networking.SingletonLaunchTemplate.createAutoScalingGroup.parameter.id"></a>

- *Type:* string

The ID of the auto-scaling group.

---

###### `props`<sup>Required</sup> <a name="props" id="shady-island.networking.SingletonLaunchTemplate.createAutoScalingGroup.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_autoscaling.AutoScalingGroupProps

Constructor properties of the AutoScalingGroup.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.fromLaunchTemplateAttributes">fromLaunchTemplateAttributes</a></code> | Import an existing LaunchTemplate. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.networking.SingletonLaunchTemplate.isConstruct"></a>

```typescript
import { networking } from 'shady-island'

networking.SingletonLaunchTemplate.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.networking.SingletonLaunchTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="shady-island.networking.SingletonLaunchTemplate.isOwnedResource"></a>

```typescript
import { networking } from 'shady-island'

networking.SingletonLaunchTemplate.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="shady-island.networking.SingletonLaunchTemplate.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="shady-island.networking.SingletonLaunchTemplate.isResource"></a>

```typescript
import { networking } from 'shady-island'

networking.SingletonLaunchTemplate.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="shady-island.networking.SingletonLaunchTemplate.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLaunchTemplateAttributes` <a name="fromLaunchTemplateAttributes" id="shady-island.networking.SingletonLaunchTemplate.fromLaunchTemplateAttributes"></a>

```typescript
import { networking } from 'shady-island'

networking.SingletonLaunchTemplate.fromLaunchTemplateAttributes(scope: Construct, id: string, attrs: LaunchTemplateAttributes)
```

Import an existing LaunchTemplate.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.networking.SingletonLaunchTemplate.fromLaunchTemplateAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.networking.SingletonLaunchTemplate.fromLaunchTemplateAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="shady-island.networking.SingletonLaunchTemplate.fromLaunchTemplateAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ec2.LaunchTemplateAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Allows specifying security group connections for the instance. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.defaultVersionNumber">defaultVersionNumber</a></code> | <code>string</code> | The default version for the launch template. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | Principal to grant permissions to. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.latestVersionNumber">latestVersionNumber</a></code> | <code>string</code> | The latest version of the launch template. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.versionNumber">versionNumber</a></code> | <code>string</code> | The version number of this launch template to use. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.imageId">imageId</a></code> | <code>string</code> | The AMI ID of the image to use. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | Type of instance to launch. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | The identifier of the Launch Template. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | The name of the Launch Template. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.osType">osType</a></code> | <code>aws-cdk-lib.aws_ec2.OperatingSystemType</code> | The type of OS the instance is running. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | IAM Role assumed by instances that are launched from this template. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.userData">userData</a></code> | <code>aws-cdk-lib.aws_ec2.UserData</code> | UserData executed by instances that are launched from this template. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplate.property.networkInterface">networkInterface</a></code> | <code><a href="#shady-island.networking.INetworkInterface">INetworkInterface</a></code> | The network interface used by this launch template. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.networking.SingletonLaunchTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="shady-island.networking.SingletonLaunchTemplate.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="shady-island.networking.SingletonLaunchTemplate.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `connections`<sup>Required</sup> <a name="connections" id="shady-island.networking.SingletonLaunchTemplate.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Allows specifying security group connections for the instance.

---

##### `defaultVersionNumber`<sup>Required</sup> <a name="defaultVersionNumber" id="shady-island.networking.SingletonLaunchTemplate.property.defaultVersionNumber"></a>

```typescript
public readonly defaultVersionNumber: string;
```

- *Type:* string

The default version for the launch template.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="shady-island.networking.SingletonLaunchTemplate.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

Principal to grant permissions to.

---

##### `latestVersionNumber`<sup>Required</sup> <a name="latestVersionNumber" id="shady-island.networking.SingletonLaunchTemplate.property.latestVersionNumber"></a>

```typescript
public readonly latestVersionNumber: string;
```

- *Type:* string

The latest version of the launch template.

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="shady-island.networking.SingletonLaunchTemplate.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

The version number of this launch template to use.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="shady-island.networking.SingletonLaunchTemplate.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

The AMI ID of the image to use.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="shady-island.networking.SingletonLaunchTemplate.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

Type of instance to launch.

---

##### `launchTemplateId`<sup>Optional</sup> <a name="launchTemplateId" id="shady-island.networking.SingletonLaunchTemplate.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

The identifier of the Launch Template.

Exactly one of `launchTemplateId` and `launchTemplateName` will be set.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="shady-island.networking.SingletonLaunchTemplate.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

The name of the Launch Template.

Exactly one of `launchTemplateId` and `launchTemplateName` will be set.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="shady-island.networking.SingletonLaunchTemplate.property.osType"></a>

```typescript
public readonly osType: OperatingSystemType;
```

- *Type:* aws-cdk-lib.aws_ec2.OperatingSystemType

The type of OS the instance is running.

---

##### `role`<sup>Optional</sup> <a name="role" id="shady-island.networking.SingletonLaunchTemplate.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

IAM Role assumed by instances that are launched from this template.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="shady-island.networking.SingletonLaunchTemplate.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData

UserData executed by instances that are launched from this template.

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="shady-island.networking.SingletonLaunchTemplate.property.networkInterface"></a>

```typescript
public readonly networkInterface: INetworkInterface;
```

- *Type:* <a href="#shady-island.networking.INetworkInterface">INetworkInterface</a>

The network interface used by this launch template.

---


### WebLoadBalancing <a name="WebLoadBalancing" id="shady-island.networking.WebLoadBalancing"></a>

A utility for creating a public-facing Application Load Balancer.

#### Initializers <a name="Initializers" id="shady-island.networking.WebLoadBalancing.Initializer"></a>

```typescript
import { networking } from 'shady-island'

new networking.WebLoadBalancing(scope: Construct, id: string, props: WebLoadBalancingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.WebLoadBalancing.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.networking.WebLoadBalancing.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.networking.WebLoadBalancing.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.networking.WebLoadBalancingProps">WebLoadBalancingProps</a></code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.networking.WebLoadBalancing.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.networking.WebLoadBalancing.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.networking.WebLoadBalancing.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.networking.WebLoadBalancingProps">WebLoadBalancingProps</a>

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.WebLoadBalancing.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.networking.WebLoadBalancing.addTarget">addTarget</a></code> | Adds a target to the listener. |

---

##### `toString` <a name="toString" id="shady-island.networking.WebLoadBalancing.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addTarget` <a name="addTarget" id="shady-island.networking.WebLoadBalancing.addTarget"></a>

```typescript
public addTarget(id: string, target: IApplicationLoadBalancerTarget, options?: TargetOptions): IApplicationTargetGroup
```

Adds a target to the listener.

If the following options are left undefined, these defaults will be used.
- `port`: 443
- `protocol`: HTTPS
- `deregistrationDelay`: load balancer idle timeout
- `healthCheck.path`: /
- `healthCheck.healthyThresholdCount`: 2
- `healthCheck.interval`: 30 seconds
- `healthCheck.timeout`: 29 seconds

###### `id`<sup>Required</sup> <a name="id" id="shady-island.networking.WebLoadBalancing.addTarget.parameter.id"></a>

- *Type:* string

The ID of the new target group.

---

###### `target`<sup>Required</sup> <a name="target" id="shady-island.networking.WebLoadBalancing.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancerTarget

The load balancing target to receive traffic.

---

###### `options`<sup>Optional</sup> <a name="options" id="shady-island.networking.WebLoadBalancing.addTarget.parameter.options"></a>

- *Type:* <a href="#shady-island.networking.TargetOptions">TargetOptions</a>

The target group options.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.WebLoadBalancing.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.networking.WebLoadBalancing.isConstruct"></a>

```typescript
import { networking } from 'shady-island'

networking.WebLoadBalancing.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.networking.WebLoadBalancing.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.WebLoadBalancing.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.networking.WebLoadBalancing.property.listener">listener</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationListener</code> | The HTTPS listener. |
| <code><a href="#shady-island.networking.WebLoadBalancing.property.loadBalancer">loadBalancer</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer</code> | The load balancer itself. |
| <code><a href="#shady-island.networking.WebLoadBalancing.property.secretHeader">secretHeader</a></code> | <code><a href="#shady-island.networking.ISecretHttpHeader">ISecretHttpHeader</a></code> | The secret header (if `requireSecretHeader` was set to `true`). |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.networking.WebLoadBalancing.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `listener`<sup>Required</sup> <a name="listener" id="shady-island.networking.WebLoadBalancing.property.listener"></a>

```typescript
public readonly listener: IApplicationListener;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationListener

The HTTPS listener.

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="shady-island.networking.WebLoadBalancing.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: IApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer

The load balancer itself.

---

##### `secretHeader`<sup>Optional</sup> <a name="secretHeader" id="shady-island.networking.WebLoadBalancing.property.secretHeader"></a>

```typescript
public readonly secretHeader: ISecretHttpHeader;
```

- *Type:* <a href="#shady-island.networking.ISecretHttpHeader">ISecretHttpHeader</a>

The secret header (if `requireSecretHeader` was set to `true`).

---


## Structs <a name="Structs" id="Structs"></a>

### ElasticIpProps <a name="ElasticIpProps" id="shady-island.networking.ElasticIpProps"></a>

Constructor properties for ElasticIp.

#### Initializer <a name="Initializer" id="shady-island.networking.ElasticIpProps.Initializer"></a>

```typescript
import { networking } from 'shady-island'

const elasticIpProps: networking.ElasticIpProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.ElasticIpProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy for this resource. |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="shady-island.networking.ElasticIpProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

The removal policy for this resource.

---

### NetworkInterfaceAttributes <a name="NetworkInterfaceAttributes" id="shady-island.networking.NetworkInterfaceAttributes"></a>

Attributes to import an existing Network Interface.

#### Initializer <a name="Initializer" id="shady-island.networking.NetworkInterfaceAttributes.Initializer"></a>

```typescript
import { networking } from 'shady-island'

const networkInterfaceAttributes: networking.NetworkInterfaceAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.NetworkInterfaceAttributes.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | The ID of this Network Interface. |
| <code><a href="#shady-island.networking.NetworkInterfaceAttributes.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The security groups assigned to the Network Interface. |
| <code><a href="#shady-island.networking.NetworkInterfaceAttributes.property.subnet">subnet</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet</code> | The subnet where this Network Interface will be created. |

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="shady-island.networking.NetworkInterfaceAttributes.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

The ID of this Network Interface.

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="shady-island.networking.NetworkInterfaceAttributes.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

The security groups assigned to the Network Interface.

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="shady-island.networking.NetworkInterfaceAttributes.property.subnet"></a>

```typescript
public readonly subnet: ISubnet;
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet

The subnet where this Network Interface will be created.

---

### NetworkInterfaceProps <a name="NetworkInterfaceProps" id="shady-island.networking.NetworkInterfaceProps"></a>

Constructor properties for NetworkInterface.

#### Initializer <a name="Initializer" id="shady-island.networking.NetworkInterfaceProps.Initializer"></a>

```typescript
import { networking } from 'shady-island'

const networkInterfaceProps: networking.NetworkInterfaceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.NetworkInterfaceProps.property.subnet">subnet</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet</code> | The subnet where this Network Interface will be created. |
| <code><a href="#shady-island.networking.NetworkInterfaceProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where this Network Interface will be created. |
| <code><a href="#shady-island.networking.NetworkInterfaceProps.property.description">description</a></code> | <code>string</code> | A description for this Network Interface. |
| <code><a href="#shady-island.networking.NetworkInterfaceProps.property.elasticIp">elasticIp</a></code> | <code><a href="#shady-island.networking.IElasticIp">IElasticIp</a></code> | An Elastic IP Address to associate with this Network Interface. |
| <code><a href="#shady-island.networking.NetworkInterfaceProps.property.enableSourceDestCheck">enableSourceDestCheck</a></code> | <code>boolean</code> | Enable the source/destination check. |
| <code><a href="#shady-island.networking.NetworkInterfaceProps.property.interfaceType">interfaceType</a></code> | <code><a href="#shady-island.networking.InterfaceType">InterfaceType</a></code> | The type of interface (i.e. interface, efa, trunk). |
| <code><a href="#shady-island.networking.NetworkInterfaceProps.property.ipv4">ipv4</a></code> | <code><a href="#shady-island.networking.AddressingV4">AddressingV4</a></code> | How to assign IPv4 addresses. |
| <code><a href="#shady-island.networking.NetworkInterfaceProps.property.ipv6">ipv6</a></code> | <code><a href="#shady-island.networking.AddressingV6">AddressingV6</a></code> | How to assign IPv6 addresses. |
| <code><a href="#shady-island.networking.NetworkInterfaceProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy for this resource. |
| <code><a href="#shady-island.networking.NetworkInterfaceProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The security groups to assign to the Network Interface. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="shady-island.networking.NetworkInterfaceProps.property.subnet"></a>

```typescript
public readonly subnet: ISubnet;
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet

The subnet where this Network Interface will be created.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.networking.NetworkInterfaceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where this Network Interface will be created.

---

##### `description`<sup>Optional</sup> <a name="description" id="shady-island.networking.NetworkInterfaceProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for this Network Interface.

---

##### `elasticIp`<sup>Optional</sup> <a name="elasticIp" id="shady-island.networking.NetworkInterfaceProps.property.elasticIp"></a>

```typescript
public readonly elasticIp: IElasticIp;
```

- *Type:* <a href="#shady-island.networking.IElasticIp">IElasticIp</a>

An Elastic IP Address to associate with this Network Interface.

Provding an Elastic IP

---

##### `enableSourceDestCheck`<sup>Optional</sup> <a name="enableSourceDestCheck" id="shady-island.networking.NetworkInterfaceProps.property.enableSourceDestCheck"></a>

```typescript
public readonly enableSourceDestCheck: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the source/destination check.

---

##### `interfaceType`<sup>Optional</sup> <a name="interfaceType" id="shady-island.networking.NetworkInterfaceProps.property.interfaceType"></a>

```typescript
public readonly interfaceType: InterfaceType;
```

- *Type:* <a href="#shady-island.networking.InterfaceType">InterfaceType</a>
- *Default:* InterfaceType.INTERFACE

The type of interface (i.e. interface, efa, trunk).

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="shady-island.networking.NetworkInterfaceProps.property.ipv4"></a>

```typescript
public readonly ipv4: AddressingV4;
```

- *Type:* <a href="#shady-island.networking.AddressingV4">AddressingV4</a>
- *Default:* Dependent on VPC settings

How to assign IPv4 addresses.

The default behavior depends on the VPC. If it's a dual stack VPC, EC2 will
allocate a single private IP address from the VPC IPv4 CIDR range. If it's
IPv6-only, EC2 won't allocate an IPv4 address.

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="shady-island.networking.NetworkInterfaceProps.property.ipv6"></a>

```typescript
public readonly ipv6: AddressingV6;
```

- *Type:* <a href="#shady-island.networking.AddressingV6">AddressingV6</a>
- *Default:* Dependent on VPC and subnet settings.

How to assign IPv6 addresses.

The default behavior depends on the VPC. If there are no IPv6 CIDRs defined
for the VPC, EC2 won't allocate an IPv6 address. If it's a dual stack or an
IPv6-only VPC, EC2 will allocate an IPv6 address if the subnet auto-assigns
one.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="shady-island.networking.NetworkInterfaceProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

The removal policy for this resource.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="shady-island.networking.NetworkInterfaceProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* A new one is created

The security groups to assign to the Network Interface.

---

### SecretHttpHeaderProps <a name="SecretHttpHeaderProps" id="shady-island.networking.SecretHttpHeaderProps"></a>

Properties for the SecretHttpHeader constructor.

#### Initializer <a name="Initializer" id="shady-island.networking.SecretHttpHeaderProps.Initializer"></a>

```typescript
import { networking } from 'shady-island'

const secretHttpHeaderProps: networking.SecretHttpHeaderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.SecretHttpHeaderProps.property.headerName">headerName</a></code> | <code>string</code> | The name of the secret HTTP header. |

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="shady-island.networking.SecretHttpHeaderProps.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string
- *Default:* X-Secret-Passphrase

The name of the secret HTTP header.

---

### SingletonLaunchTemplateProps <a name="SingletonLaunchTemplateProps" id="shady-island.networking.SingletonLaunchTemplateProps"></a>

Constructor properties for SingletonLaunchTemplate.

#### Initializer <a name="Initializer" id="shady-island.networking.SingletonLaunchTemplateProps.Initializer"></a>

```typescript
import { networking } from 'shady-island'

const singletonLaunchTemplateProps: networking.SingletonLaunchTemplateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean</code> | Whether instances should have a public IP addresses associated with them. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.blockDevices">blockDevices</a></code> | <code>aws-cdk-lib.aws_ec2.BlockDevice[]</code> | Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.cpuCredits">cpuCredits</a></code> | <code>aws-cdk-lib.aws_ec2.CpuCredits</code> | CPU credit type for burstable EC2 instance types. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.detailedMonitoring">detailedMonitoring</a></code> | <code>boolean</code> | If set to true, then detailed monitoring will be enabled on instances created with this launch template. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean</code> | If you set this parameter to true, you cannot terminate the instances launched with this launch template using the Amazon EC2 console, CLI, or API; |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean</code> | Indicates whether the instances are optimized for Amazon EBS I/O. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.hibernationConfigured">hibernationConfigured</a></code> | <code>boolean</code> | If you set this parameter to true, the instance is enabled for hibernation. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.httpEndpoint">httpEndpoint</a></code> | <code>boolean</code> | Enables or disables the HTTP metadata endpoint on your instances. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.httpProtocolIpv6">httpProtocolIpv6</a></code> | <code>boolean</code> | Enables or disables the IPv6 endpoint for the instance metadata service. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | The desired HTTP PUT response hop limit for instance metadata requests. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.httpTokens">httpTokens</a></code> | <code>aws-cdk-lib.aws_ec2.LaunchTemplateHttpTokens</code> | The state of token usage for your instance metadata requests. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceInitiatedShutdownBehavior</code> | Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown). |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>boolean</code> | Set to enabled to allow access to instance tags from the instance metadata. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.instanceProfile">instanceProfile</a></code> | <code>aws-cdk-lib.aws_iam.IInstanceProfile</code> | The instance profile used to pass role information to EC2 instances. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | Type of instance to launch. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.keyName">keyName</a></code> | <code>string</code> | Name of SSH keypair to grant access to instance. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.keyPair">keyPair</a></code> | <code>aws-cdk-lib.aws_ec2.IKeyPair</code> | The SSH keypair to grant access to the instance. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | Name for this launch template. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.machineImage">machineImage</a></code> | <code>aws-cdk-lib.aws_ec2.IMachineImage</code> | The AMI that will be used by instances. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.nitroEnclaveEnabled">nitroEnclaveEnabled</a></code> | <code>boolean</code> | If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves; |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.requireImdsv2">requireImdsv2</a></code> | <code>boolean</code> | Whether IMDSv2 should be required on launched instances. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | An IAM role to associate with the instance profile that is used by instances. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security group to assign to instances created with the launch template. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.spotOptions">spotOptions</a></code> | <code>aws-cdk-lib.aws_ec2.LaunchTemplateSpotOptions</code> | If this property is defined, then the Launch Template's InstanceMarketOptions will be set to use Spot instances, and the options for the Spot instances will be as defined. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.userData">userData</a></code> | <code>aws-cdk-lib.aws_ec2.UserData</code> | The AMI that will be used by instances. |
| <code><a href="#shady-island.networking.SingletonLaunchTemplateProps.property.networkInterface">networkInterface</a></code> | <code><a href="#shady-island.networking.INetworkInterface">INetworkInterface</a></code> | The Elastic Network Interface to use. |

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="shady-island.networking.SingletonLaunchTemplateProps.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean;
```

- *Type:* boolean
- *Default:* Use subnet settings

Whether instances should have a public IP addresses associated with them.

---

##### `blockDevices`<sup>Optional</sup> <a name="blockDevices" id="shady-island.networking.SingletonLaunchTemplateProps.property.blockDevices"></a>

```typescript
public readonly blockDevices: BlockDevice[];
```

- *Type:* aws-cdk-lib.aws_ec2.BlockDevice[]
- *Default:* Uses the block device mapping of the AMI

Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.

Each instance that is launched has an associated root device volume,
either an Amazon EBS volume or an instance store volume.
You can use block device mappings to specify additional EBS volumes or
instance store volumes to attach to an instance when it is launched.

> [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html)

---

##### `cpuCredits`<sup>Optional</sup> <a name="cpuCredits" id="shady-island.networking.SingletonLaunchTemplateProps.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: CpuCredits;
```

- *Type:* aws-cdk-lib.aws_ec2.CpuCredits
- *Default:* No credit type is specified in the Launch Template.

CPU credit type for burstable EC2 instance types.

> [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html)

---

##### `detailedMonitoring`<sup>Optional</sup> <a name="detailedMonitoring" id="shady-island.networking.SingletonLaunchTemplateProps.property.detailedMonitoring"></a>

```typescript
public readonly detailedMonitoring: boolean;
```

- *Type:* boolean
- *Default:* False - Detailed monitoring is disabled.

If set to true, then detailed monitoring will be enabled on instances created with this launch template.

> [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html)

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="shady-island.networking.SingletonLaunchTemplateProps.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean;
```

- *Type:* boolean
- *Default:* The API termination setting is not specified in the Launch Template.

If you set this parameter to true, you cannot terminate the instances launched with this launch template using the Amazon EC2 console, CLI, or API;

otherwise, you can.

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="shady-island.networking.SingletonLaunchTemplateProps.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean;
```

- *Type:* boolean
- *Default:* EBS optimization is not specified in the launch template.

Indicates whether the instances are optimized for Amazon EBS I/O.

This optimization provides dedicated throughput
to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization
isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.

---

##### `hibernationConfigured`<sup>Optional</sup> <a name="hibernationConfigured" id="shady-island.networking.SingletonLaunchTemplateProps.property.hibernationConfigured"></a>

```typescript
public readonly hibernationConfigured: boolean;
```

- *Type:* boolean
- *Default:* Hibernation configuration is not specified in the launch template; defaulting to false.

If you set this parameter to true, the instance is enabled for hibernation.

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="shady-island.networking.SingletonLaunchTemplateProps.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: boolean;
```

- *Type:* boolean
- *Default:* true

Enables or disables the HTTP metadata endpoint on your instances.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-metadataoptions.html#cfn-ec2-launchtemplate-launchtemplatedata-metadataoptions-httpendpoint](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-metadataoptions.html#cfn-ec2-launchtemplate-launchtemplatedata-metadataoptions-httpendpoint)

---

##### `httpProtocolIpv6`<sup>Optional</sup> <a name="httpProtocolIpv6" id="shady-island.networking.SingletonLaunchTemplateProps.property.httpProtocolIpv6"></a>

```typescript
public readonly httpProtocolIpv6: boolean;
```

- *Type:* boolean
- *Default:* true

Enables or disables the IPv6 endpoint for the instance metadata service.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-metadataoptions.html#cfn-ec2-launchtemplate-launchtemplatedata-metadataoptions-httpprotocolipv6](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-metadataoptions.html#cfn-ec2-launchtemplate-launchtemplatedata-metadataoptions-httpprotocolipv6)

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="shady-island.networking.SingletonLaunchTemplateProps.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number
- *Default:* 1

The desired HTTP PUT response hop limit for instance metadata requests.

The larger the number, the further instance metadata requests can travel.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-metadataoptions.html#cfn-ec2-launchtemplate-launchtemplatedata-metadataoptions-httpputresponsehoplimit](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-metadataoptions.html#cfn-ec2-launchtemplate-launchtemplatedata-metadataoptions-httpputresponsehoplimit)

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="shady-island.networking.SingletonLaunchTemplateProps.property.httpTokens"></a>

```typescript
public readonly httpTokens: LaunchTemplateHttpTokens;
```

- *Type:* aws-cdk-lib.aws_ec2.LaunchTemplateHttpTokens
- *Default:* LaunchTemplateHttpTokens.OPTIONAL

The state of token usage for your instance metadata requests.

The default state is `optional` if not specified. However,
if requireImdsv2 is true, the state must be `required`.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-metadataoptions.html#cfn-ec2-launchtemplate-launchtemplatedata-metadataoptions-httptokens](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-metadataoptions.html#cfn-ec2-launchtemplate-launchtemplatedata-metadataoptions-httptokens)

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="shady-island.networking.SingletonLaunchTemplateProps.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: InstanceInitiatedShutdownBehavior;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceInitiatedShutdownBehavior
- *Default:* Shutdown behavior is not specified in the launch template; defaults to STOP.

Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).

> [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingInstanceInitiatedShutdownBehavior](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#Using_ChangingInstanceInitiatedShutdownBehavior)

---

##### `instanceMetadataTags`<sup>Optional</sup> <a name="instanceMetadataTags" id="shady-island.networking.SingletonLaunchTemplateProps.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: boolean;
```

- *Type:* boolean
- *Default:* false

Set to enabled to allow access to instance tags from the instance metadata.

Set to disabled to turn off access to instance tags from the instance metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-metadataoptions.html#cfn-ec2-launchtemplate-launchtemplatedata-metadataoptions-instancemetadatatags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-metadataoptions.html#cfn-ec2-launchtemplate-launchtemplatedata-metadataoptions-instancemetadatatags)

---

##### `instanceProfile`<sup>Optional</sup> <a name="instanceProfile" id="shady-island.networking.SingletonLaunchTemplateProps.property.instanceProfile"></a>

```typescript
public readonly instanceProfile: IInstanceProfile;
```

- *Type:* aws-cdk-lib.aws_iam.IInstanceProfile
- *Default:* No instance profile

The instance profile used to pass role information to EC2 instances.

Note: You can provide an instanceProfile or a role, but not both.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="shady-island.networking.SingletonLaunchTemplateProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* This Launch Template does not specify a default Instance Type.

Type of instance to launch.

---

##### ~~`keyName`~~<sup>Optional</sup> <a name="keyName" id="shady-island.networking.SingletonLaunchTemplateProps.property.keyName"></a>

- *Deprecated:* - Use `keyPair` instead - https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2-readme.html#using-an-existing-ec2-key-pair

```typescript
public readonly keyName: string;
```

- *Type:* string
- *Default:* No SSH access will be possible.

Name of SSH keypair to grant access to instance.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="shady-island.networking.SingletonLaunchTemplateProps.property.keyPair"></a>

```typescript
public readonly keyPair: IKeyPair;
```

- *Type:* aws-cdk-lib.aws_ec2.IKeyPair
- *Default:* No SSH access will be possible.

The SSH keypair to grant access to the instance.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="shady-island.networking.SingletonLaunchTemplateProps.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string
- *Default:* Automatically generated name

Name for this launch template.

---

##### `machineImage`<sup>Optional</sup> <a name="machineImage" id="shady-island.networking.SingletonLaunchTemplateProps.property.machineImage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* aws-cdk-lib.aws_ec2.IMachineImage
- *Default:* This Launch Template does not specify a default AMI.

The AMI that will be used by instances.

---

##### `nitroEnclaveEnabled`<sup>Optional</sup> <a name="nitroEnclaveEnabled" id="shady-island.networking.SingletonLaunchTemplateProps.property.nitroEnclaveEnabled"></a>

```typescript
public readonly nitroEnclaveEnabled: boolean;
```

- *Type:* boolean
- *Default:* Enablement of Nitro enclaves is not specified in the launch template; defaulting to false.

If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves;

otherwise, it is not enabled for AWS Nitro Enclaves.

---

##### `requireImdsv2`<sup>Optional</sup> <a name="requireImdsv2" id="shady-island.networking.SingletonLaunchTemplateProps.property.requireImdsv2"></a>

```typescript
public readonly requireImdsv2: boolean;
```

- *Type:* boolean
- *Default:* false

Whether IMDSv2 should be required on launched instances.

---

##### `role`<sup>Optional</sup> <a name="role" id="shady-island.networking.SingletonLaunchTemplateProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* No new role is created.

An IAM role to associate with the instance profile that is used by instances.

The role must be assumable by the service principal `ec2.amazonaws.com`.
Note: You can provide an instanceProfile or a role, but not both.

---

*Example*

```typescript
const role = new iam.Role(this, 'MyRole', {
  assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com')
});
```


##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="shady-island.networking.SingletonLaunchTemplateProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* No security group is assigned.

Security group to assign to instances created with the launch template.

---

##### `spotOptions`<sup>Optional</sup> <a name="spotOptions" id="shady-island.networking.SingletonLaunchTemplateProps.property.spotOptions"></a>

```typescript
public readonly spotOptions: LaunchTemplateSpotOptions;
```

- *Type:* aws-cdk-lib.aws_ec2.LaunchTemplateSpotOptions
- *Default:* Instance launched with this template will not be spot instances.

If this property is defined, then the Launch Template's InstanceMarketOptions will be set to use Spot instances, and the options for the Spot instances will be as defined.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="shady-island.networking.SingletonLaunchTemplateProps.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData
- *Default:* This Launch Template creates a UserData based on the type of provided machineImage; no UserData is created if a machineImage is not provided

The AMI that will be used by instances.

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="shady-island.networking.SingletonLaunchTemplateProps.property.networkInterface"></a>

```typescript
public readonly networkInterface: INetworkInterface;
```

- *Type:* <a href="#shady-island.networking.INetworkInterface">INetworkInterface</a>

The Elastic Network Interface to use.

---

### TargetOptions <a name="TargetOptions" id="shady-island.networking.TargetOptions"></a>

Options for adding a new target group.

#### Initializer <a name="Initializer" id="shady-island.networking.TargetOptions.Initializer"></a>

```typescript
import { networking } from 'shady-island'

const targetOptions: networking.TargetOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.TargetOptions.property.deregistrationDelay">deregistrationDelay</a></code> | <code>aws-cdk-lib.Duration</code> | The amount of time for Elastic Load Balancing to wait before deregistering a target. |
| <code><a href="#shady-island.networking.TargetOptions.property.healthCheck">healthCheck</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.HealthCheck</code> | Health check configuration. |
| <code><a href="#shady-island.networking.TargetOptions.property.targetGroupName">targetGroupName</a></code> | <code>string</code> | The name of the target group. |
| <code><a href="#shady-island.networking.TargetOptions.property.targetType">targetType</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.TargetType</code> | The type of targets registered to this TargetGroup, either IP or Instance. |
| <code><a href="#shady-island.networking.TargetOptions.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The virtual private cloud (VPC). |
| <code><a href="#shady-island.networking.TargetOptions.property.loadBalancingAlgorithmType">loadBalancingAlgorithmType</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.TargetGroupLoadBalancingAlgorithmType</code> | The load balancing algorithm to select targets for routing requests. |
| <code><a href="#shady-island.networking.TargetOptions.property.port">port</a></code> | <code>number</code> | The port on which the target receives traffic. |
| <code><a href="#shady-island.networking.TargetOptions.property.protocol">protocol</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol</code> | The protocol used for communication with the target. |
| <code><a href="#shady-island.networking.TargetOptions.property.protocolVersion">protocolVersion</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocolVersion</code> | The protocol version to use. |
| <code><a href="#shady-island.networking.TargetOptions.property.slowStart">slowStart</a></code> | <code>aws-cdk-lib.Duration</code> | The time period during which the load balancer sends a newly registered target a linearly increasing share of the traffic to the target group. |
| <code><a href="#shady-island.networking.TargetOptions.property.stickinessCookieDuration">stickinessCookieDuration</a></code> | <code>aws-cdk-lib.Duration</code> | The stickiness cookie expiration period. |
| <code><a href="#shady-island.networking.TargetOptions.property.stickinessCookieName">stickinessCookieName</a></code> | <code>string</code> | The name of an application-based stickiness cookie. |
| <code><a href="#shady-island.networking.TargetOptions.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancerTarget[]</code> | The targets to add to this target group. |
| <code><a href="#shady-island.networking.TargetOptions.property.hostnames">hostnames</a></code> | <code>string[]</code> | The hostnames on which traffic is served. |
| <code><a href="#shady-island.networking.TargetOptions.property.priority">priority</a></code> | <code>number</code> | The priority of the listener rule. |

---

##### `deregistrationDelay`<sup>Optional</sup> <a name="deregistrationDelay" id="shady-island.networking.TargetOptions.property.deregistrationDelay"></a>

```typescript
public readonly deregistrationDelay: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 300

The amount of time for Elastic Load Balancing to wait before deregistering a target.

The range is 0-3600 seconds.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="shady-island.networking.TargetOptions.property.healthCheck"></a>

```typescript
public readonly healthCheck: HealthCheck;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.HealthCheck
- *Default:* The default value for each property in this configuration varies depending on the target.

Health check configuration.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#aws-resource-elasticloadbalancingv2-targetgroup-properties](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#aws-resource-elasticloadbalancingv2-targetgroup-properties)

---

##### `targetGroupName`<sup>Optional</sup> <a name="targetGroupName" id="shady-island.networking.TargetOptions.property.targetGroupName"></a>

```typescript
public readonly targetGroupName: string;
```

- *Type:* string
- *Default:* Automatically generated.

The name of the target group.

This name must be unique per region per account, can have a maximum of
32 characters, must contain only alphanumeric characters or hyphens, and
must not begin or end with a hyphen.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="shady-island.networking.TargetOptions.property.targetType"></a>

```typescript
public readonly targetType: TargetType;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.TargetType
- *Default:* Determined automatically.

The type of targets registered to this TargetGroup, either IP or Instance.

All targets registered into the group must be of this type. If you
register targets to the TargetGroup in the CDK app, the TargetType is
determined automatically.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="shady-island.networking.TargetOptions.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* undefined

The virtual private cloud (VPC).

only if `TargetType` is `Ip` or `InstanceId`

---

##### `loadBalancingAlgorithmType`<sup>Optional</sup> <a name="loadBalancingAlgorithmType" id="shady-island.networking.TargetOptions.property.loadBalancingAlgorithmType"></a>

```typescript
public readonly loadBalancingAlgorithmType: TargetGroupLoadBalancingAlgorithmType;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.TargetGroupLoadBalancingAlgorithmType
- *Default:* TargetGroupLoadBalancingAlgorithmType.ROUND_ROBIN

The load balancing algorithm to select targets for routing requests.

---

##### `port`<sup>Optional</sup> <a name="port" id="shady-island.networking.TargetOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* Determined from protocol if known

The port on which the target receives traffic.

This is not applicable for Lambda targets.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="shady-island.networking.TargetOptions.property.protocol"></a>

```typescript
public readonly protocol: ApplicationProtocol;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol
- *Default:* Determined from port if known

The protocol used for communication with the target.

This is not applicable for Lambda targets.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="shady-island.networking.TargetOptions.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: ApplicationProtocolVersion;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocolVersion
- *Default:* ApplicationProtocolVersion.HTTP1

The protocol version to use.

---

##### `slowStart`<sup>Optional</sup> <a name="slowStart" id="shady-island.networking.TargetOptions.property.slowStart"></a>

```typescript
public readonly slowStart: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 0

The time period during which the load balancer sends a newly registered target a linearly increasing share of the traffic to the target group.

The range is 30-900 seconds (15 minutes).

---

##### `stickinessCookieDuration`<sup>Optional</sup> <a name="stickinessCookieDuration" id="shady-island.networking.TargetOptions.property.stickinessCookieDuration"></a>

```typescript
public readonly stickinessCookieDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.days(1)

The stickiness cookie expiration period.

Setting this value enables load balancer stickiness.

After this period, the cookie is considered stale. The minimum value is
1 second and the maximum value is 7 days (604800 seconds).

---

##### `stickinessCookieName`<sup>Optional</sup> <a name="stickinessCookieName" id="shady-island.networking.TargetOptions.property.stickinessCookieName"></a>

```typescript
public readonly stickinessCookieName: string;
```

- *Type:* string
- *Default:* If `stickinessCookieDuration` is set, a load-balancer generated cookie is used. Otherwise, no stickiness is defined.

The name of an application-based stickiness cookie.

Names that start with the following prefixes are not allowed: AWSALB, AWSALBAPP,
and AWSALBTG; they're reserved for use by the load balancer.

Note: `stickinessCookieName` parameter depends on the presence of `stickinessCookieDuration` parameter.
If `stickinessCookieDuration` is not set, `stickinessCookieName` will be omitted.

> [https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html)

---

##### `targets`<sup>Optional</sup> <a name="targets" id="shady-island.networking.TargetOptions.property.targets"></a>

```typescript
public readonly targets: IApplicationLoadBalancerTarget[];
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancerTarget[]
- *Default:* No targets.

The targets to add to this target group.

Can be `Instance`, `IPAddress`, or any self-registering load balancing
target. If you use either `Instance` or `IPAddress` as targets, all
target must be of the same type.

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="shady-island.networking.TargetOptions.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

The hostnames on which traffic is served.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="shady-island.networking.TargetOptions.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number
- *Default:* Automatically determined

The priority of the listener rule.

---

### WebLoadBalancingProps <a name="WebLoadBalancingProps" id="shady-island.networking.WebLoadBalancingProps"></a>

Constructor properties for WebLoadBalancing.

#### Initializer <a name="Initializer" id="shady-island.networking.WebLoadBalancingProps.Initializer"></a>

```typescript
import { networking } from 'shady-island'

const webLoadBalancingProps: networking.WebLoadBalancingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.WebLoadBalancingProps.property.certificates">certificates</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate[]</code> | The certificate to attach to the load balancer and CloudFront distribution. |
| <code><a href="#shady-island.networking.WebLoadBalancingProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where these resources should be deployed. |
| <code><a href="#shady-island.networking.WebLoadBalancingProps.property.idleTimeout">idleTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The load balancer idle timeout, in seconds. |
| <code><a href="#shady-island.networking.WebLoadBalancingProps.property.ipAddressType">ipAddressType</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IpAddressType</code> | The type of IP addresses to use (IPv4 or Dual Stack). |
| <code><a href="#shady-island.networking.WebLoadBalancingProps.property.requireKnownHostname">requireKnownHostname</a></code> | <code>boolean</code> | Forbid requests that ask for an unknown hostname. |
| <code><a href="#shady-island.networking.WebLoadBalancingProps.property.requireSecretHeader">requireSecretHeader</a></code> | <code>boolean</code> | Forbid requests that are missing an HTTP header with a specific value. |
| <code><a href="#shady-island.networking.WebLoadBalancingProps.property.secretHeaderName">secretHeaderName</a></code> | <code>string</code> | The name of the secret HTTP header. |
| <code><a href="#shady-island.networking.WebLoadBalancingProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | A security group for the load balancer itself. |

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="shady-island.networking.WebLoadBalancingProps.property.certificates"></a>

```typescript
public readonly certificates: ICertificate[];
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate[]

The certificate to attach to the load balancer and CloudFront distribution.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.networking.WebLoadBalancingProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where these resources should be deployed.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="shady-island.networking.WebLoadBalancingProps.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 59 seconds

The load balancer idle timeout, in seconds.

If you have a reverse proxy in front of this load balancer, such as
CloudFront, this number should be less than the reverse proxy's request
timeout.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="shady-island.networking.WebLoadBalancingProps.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: IpAddressType;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IpAddressType
- *Default:* IPv4 only

The type of IP addresses to use (IPv4 or Dual Stack).

---

##### `requireKnownHostname`<sup>Optional</sup> <a name="requireKnownHostname" id="shady-island.networking.WebLoadBalancingProps.property.requireKnownHostname"></a>

```typescript
public readonly requireKnownHostname: boolean;
```

- *Type:* boolean
- *Default:* false

Forbid requests that ask for an unknown hostname.

Requests for an unknown hostname will receive an HTTP 421 status response.

---

##### `requireSecretHeader`<sup>Optional</sup> <a name="requireSecretHeader" id="shady-island.networking.WebLoadBalancingProps.property.requireSecretHeader"></a>

```typescript
public readonly requireSecretHeader: boolean;
```

- *Type:* boolean
- *Default:* false

Forbid requests that are missing an HTTP header with a specific value.

If this option is set to `true`, this construct will provide a new
`SecretHttpHeader` accessible on the `secretHeader` property.

Requests without the correct header name and value will receive an HTTP 421
status response.

---

##### `secretHeaderName`<sup>Optional</sup> <a name="secretHeaderName" id="shady-island.networking.WebLoadBalancingProps.property.secretHeaderName"></a>

```typescript
public readonly secretHeaderName: string;
```

- *Type:* string
- *Default:* X-Secret-Passphrase

The name of the secret HTTP header.

Providing this option implies that `requireSecretHeader` is `true`.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="shady-island.networking.WebLoadBalancingProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* A new security group will be created

A security group for the load balancer itself.

---

## Classes <a name="Classes" id="Classes"></a>

### Address <a name="Address" id="shady-island.networking.Address"></a>

An IPv4 or IPv6 address (or range of addresses).

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.Address.isAny">isAny</a></code> | Whether this address represents everything in the addressing space. |
| <code><a href="#shady-island.networking.Address.isIpv4">isIpv4</a></code> | Whether this address is an IPv4 address. |
| <code><a href="#shady-island.networking.Address.isIpv6">isIpv6</a></code> | Whether this address is an IPv6 address. |
| <code><a href="#shady-island.networking.Address.toString">toString</a></code> | *No description.* |

---

##### `isAny` <a name="isAny" id="shady-island.networking.Address.isAny"></a>

```typescript
public isAny(): boolean
```

Whether this address represents everything in the addressing space.

##### `isIpv4` <a name="isIpv4" id="shady-island.networking.Address.isIpv4"></a>

```typescript
public isIpv4(): boolean
```

Whether this address is an IPv4 address.

##### `isIpv6` <a name="isIpv6" id="shady-island.networking.Address.isIpv6"></a>

```typescript
public isIpv6(): boolean
```

Whether this address is an IPv6 address.

##### `toString` <a name="toString" id="shady-island.networking.Address.toString"></a>

```typescript
public toString(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.Address.anyIpv4">anyIpv4</a></code> | Creates an address that represents the entire IPv4 addressing space. |
| <code><a href="#shady-island.networking.Address.anyIpv6">anyIpv6</a></code> | Creates an address that represents the entire IPv4 addressing space. |
| <code><a href="#shady-island.networking.Address.ipv4">ipv4</a></code> | Creates an IPv4 network address (either a single address or a range). |
| <code><a href="#shady-island.networking.Address.ipv6">ipv6</a></code> | Creates an IPv6 network address (either a single address or a range). |

---

##### `anyIpv4` <a name="anyIpv4" id="shady-island.networking.Address.anyIpv4"></a>

```typescript
import { networking } from 'shady-island'

networking.Address.anyIpv4()
```

Creates an address that represents the entire IPv4 addressing space.

##### `anyIpv6` <a name="anyIpv6" id="shady-island.networking.Address.anyIpv6"></a>

```typescript
import { networking } from 'shady-island'

networking.Address.anyIpv6()
```

Creates an address that represents the entire IPv4 addressing space.

##### `ipv4` <a name="ipv4" id="shady-island.networking.Address.ipv4"></a>

```typescript
import { networking } from 'shady-island'

networking.Address.ipv4(address: string)
```

Creates an IPv4 network address (either a single address or a range).

###### `address`<sup>Required</sup> <a name="address" id="shady-island.networking.Address.ipv4.parameter.address"></a>

- *Type:* string

The IP address (with optional netmask).

---

##### `ipv6` <a name="ipv6" id="shady-island.networking.Address.ipv6"></a>

```typescript
import { networking } from 'shady-island'

networking.Address.ipv6(address: string)
```

Creates an IPv6 network address (either a single address or a range).

###### `address`<sup>Required</sup> <a name="address" id="shady-island.networking.Address.ipv6.parameter.address"></a>

- *Type:* string

The IP address (with optional prefix length).

---



### AddressingV4 <a name="AddressingV4" id="shady-island.networking.AddressingV4"></a>

Used to assign IPv4 addresses to a Network Interface.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.AddressingV4.prefixCount">prefixCount</a></code> | Specify a number of IPv4 delegated prefixes to automatically assign. |
| <code><a href="#shady-island.networking.AddressingV4.prefixes">prefixes</a></code> | Specify one or more IPv4 delegated prefixes to assign. |
| <code><a href="#shady-island.networking.AddressingV4.privateAddress">privateAddress</a></code> | Specify a private IPv4 address. |
| <code><a href="#shady-island.networking.AddressingV4.privateAddressAndSecondaryCount">privateAddressAndSecondaryCount</a></code> | Specify a primary IPv4 address and a number of secondary addresses. |
| <code><a href="#shady-island.networking.AddressingV4.privateAddresses">privateAddresses</a></code> | Specify a primary IPv4 address and one or more secondary IPv4 addresses. |

---

##### `prefixCount` <a name="prefixCount" id="shady-island.networking.AddressingV4.prefixCount"></a>

```typescript
import { networking } from 'shady-island'

networking.AddressingV4.prefixCount(count: number)
```

Specify a number of IPv4 delegated prefixes to automatically assign.

###### `count`<sup>Required</sup> <a name="count" id="shady-island.networking.AddressingV4.prefixCount.parameter.count"></a>

- *Type:* number

The number of automatic IPv4 delegated prefixes.

---

##### `prefixes` <a name="prefixes" id="shady-island.networking.AddressingV4.prefixes"></a>

```typescript
import { networking } from 'shady-island'

networking.AddressingV4.prefixes(prefixes: string[])
```

Specify one or more IPv4 delegated prefixes to assign.

IPv4 prefixes must be within a CIDR of /28.

###### `prefixes`<sup>Required</sup> <a name="prefixes" id="shady-island.networking.AddressingV4.prefixes.parameter.prefixes"></a>

- *Type:* string[]

The IPv4 delegated prefixes.

---

##### `privateAddress` <a name="privateAddress" id="shady-island.networking.AddressingV4.privateAddress"></a>

```typescript
import { networking } from 'shady-island'

networking.AddressingV4.privateAddress(ip: string)
```

Specify a private IPv4 address.

###### `ip`<sup>Required</sup> <a name="ip" id="shady-island.networking.AddressingV4.privateAddress.parameter.ip"></a>

- *Type:* string

The actual IP address.

---

##### `privateAddressAndSecondaryCount` <a name="privateAddressAndSecondaryCount" id="shady-island.networking.AddressingV4.privateAddressAndSecondaryCount"></a>

```typescript
import { networking } from 'shady-island'

networking.AddressingV4.privateAddressAndSecondaryCount(primary: string, count: number)
```

Specify a primary IPv4 address and a number of secondary addresses.

###### `primary`<sup>Required</sup> <a name="primary" id="shady-island.networking.AddressingV4.privateAddressAndSecondaryCount.parameter.primary"></a>

- *Type:* string

The primary address.

---

###### `count`<sup>Required</sup> <a name="count" id="shady-island.networking.AddressingV4.privateAddressAndSecondaryCount.parameter.count"></a>

- *Type:* number

The number of secondary addresses.

---

##### `privateAddresses` <a name="privateAddresses" id="shady-island.networking.AddressingV4.privateAddresses"></a>

```typescript
import { networking } from 'shady-island'

networking.AddressingV4.privateAddresses(primary: string, secondary: ...string[])
```

Specify a primary IPv4 address and one or more secondary IPv4 addresses.

###### `primary`<sup>Required</sup> <a name="primary" id="shady-island.networking.AddressingV4.privateAddresses.parameter.primary"></a>

- *Type:* string

The primary address.

---

###### `secondary`<sup>Required</sup> <a name="secondary" id="shady-island.networking.AddressingV4.privateAddresses.parameter.secondary"></a>

- *Type:* ...string[]

Any secondary addresses.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.AddressingV4.property.props">props</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.networking.AddressingV4.property.props"></a>

```typescript
public readonly props: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---


### AddressingV6 <a name="AddressingV6" id="shady-island.networking.AddressingV6"></a>

Used to assign IPv6 addresses to a Network Interface.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.AddressingV6.addressCount">addressCount</a></code> | Specify a number of IPv6 addresses to automatically assign. |
| <code><a href="#shady-island.networking.AddressingV6.addresses">addresses</a></code> | Specify one or more IPv6 addresses to assign. |
| <code><a href="#shady-island.networking.AddressingV6.prefixCount">prefixCount</a></code> | Specify a number of IPv6 delegated prefixes to automatically assign. |
| <code><a href="#shady-island.networking.AddressingV6.prefixes">prefixes</a></code> | Specify one or more IPv6 delegated prefixes to assign. |

---

##### `addressCount` <a name="addressCount" id="shady-island.networking.AddressingV6.addressCount"></a>

```typescript
import { networking } from 'shady-island'

networking.AddressingV6.addressCount(count: number, enablePrimary?: boolean)
```

Specify a number of IPv6 addresses to automatically assign.

###### `count`<sup>Required</sup> <a name="count" id="shady-island.networking.AddressingV6.addressCount.parameter.count"></a>

- *Type:* number

The number of automatic IPv6 addresses.

---

###### `enablePrimary`<sup>Optional</sup> <a name="enablePrimary" id="shady-island.networking.AddressingV6.addressCount.parameter.enablePrimary"></a>

- *Type:* boolean

Whether to enable a primary IPv6 GUA (default: no).

---

##### `addresses` <a name="addresses" id="shady-island.networking.AddressingV6.addresses"></a>

```typescript
import { networking } from 'shady-island'

networking.AddressingV6.addresses(ips: string[], enablePrimary?: boolean)
```

Specify one or more IPv6 addresses to assign.

###### `ips`<sup>Required</sup> <a name="ips" id="shady-island.networking.AddressingV6.addresses.parameter.ips"></a>

- *Type:* string[]

The IPv6 addresses.

---

###### `enablePrimary`<sup>Optional</sup> <a name="enablePrimary" id="shady-island.networking.AddressingV6.addresses.parameter.enablePrimary"></a>

- *Type:* boolean

Whether to enable a primary IPv6 GUA (default: no).

---

##### `prefixCount` <a name="prefixCount" id="shady-island.networking.AddressingV6.prefixCount"></a>

```typescript
import { networking } from 'shady-island'

networking.AddressingV6.prefixCount(count: number, enablePrimary?: boolean)
```

Specify a number of IPv6 delegated prefixes to automatically assign.

###### `count`<sup>Required</sup> <a name="count" id="shady-island.networking.AddressingV6.prefixCount.parameter.count"></a>

- *Type:* number

The number of automatic IPv6 delegated prefixes.

---

###### `enablePrimary`<sup>Optional</sup> <a name="enablePrimary" id="shady-island.networking.AddressingV6.prefixCount.parameter.enablePrimary"></a>

- *Type:* boolean

Whether to enable a primary IPv6 GUA (default: no).

---

##### `prefixes` <a name="prefixes" id="shady-island.networking.AddressingV6.prefixes"></a>

```typescript
import { networking } from 'shady-island'

networking.AddressingV6.prefixes(prefixes: string[], enablePrimary?: boolean)
```

Specify one or more IPv6 delegated prefixes to assign.

IPv6 prefixes must be within a CIDR of /80.

###### `prefixes`<sup>Required</sup> <a name="prefixes" id="shady-island.networking.AddressingV6.prefixes.parameter.prefixes"></a>

- *Type:* string[]

The IPv6 delegated prefixes.

---

###### `enablePrimary`<sup>Optional</sup> <a name="enablePrimary" id="shady-island.networking.AddressingV6.prefixes.parameter.enablePrimary"></a>

- *Type:* boolean

Whether to enable a primary IPv6 GUA (default: no).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.AddressingV6.property.props">props</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.networking.AddressingV6.property.props"></a>

```typescript
public readonly props: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IElasticIp <a name="IElasticIp" id="shady-island.networking.IElasticIp"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#shady-island.networking.ElasticIp">ElasticIp</a>, <a href="#shady-island.networking.IElasticIp">IElasticIp</a>

An EC2 Elastic IP address.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.IElasticIp.grant">grant</a></code> | Grant the given identity custom permissions. |

---

##### `grant` <a name="grant" id="shady-island.networking.IElasticIp.grant"></a>

```typescript
public grant(identity: IGrantable, actions: ...string[]): Grant
```

Grant the given identity custom permissions.

e.g. `ec2:AssociateAddress`, `ec2:DisableAddressTransfer`,
`ec2:DisassociateAddress`, `ec2:EnableAddressTransfer`, among others.

###### `identity`<sup>Required</sup> <a name="identity" id="shady-island.networking.IElasticIp.grant.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The resource with a grantPrincipal property.

---

###### `actions`<sup>Required</sup> <a name="actions" id="shady-island.networking.IElasticIp.grant.parameter.actions"></a>

- *Type:* ...string[]

The IAM actions to allow.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.IElasticIp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.networking.IElasticIp.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#shady-island.networking.IElasticIp.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#shady-island.networking.IElasticIp.property.allocationId">allocationId</a></code> | <code>string</code> | The allocation ID of the Elastic IP address. |
| <code><a href="#shady-island.networking.IElasticIp.property.elasticIpArn">elasticIpArn</a></code> | <code>string</code> | The ARN of the Elastic IP address. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.networking.IElasticIp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="shady-island.networking.IElasticIp.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="shady-island.networking.IElasticIp.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `allocationId`<sup>Required</sup> <a name="allocationId" id="shady-island.networking.IElasticIp.property.allocationId"></a>

```typescript
public readonly allocationId: string;
```

- *Type:* string

The allocation ID of the Elastic IP address.

---

##### `elasticIpArn`<sup>Required</sup> <a name="elasticIpArn" id="shady-island.networking.IElasticIp.property.elasticIpArn"></a>

```typescript
public readonly elasticIpArn: string;
```

- *Type:* string

The ARN of the Elastic IP address.

---

### INetworkInterface <a name="INetworkInterface" id="shady-island.networking.INetworkInterface"></a>

- *Extends:* constructs.IConstruct, aws-cdk-lib.aws_ec2.IConnectable

- *Implemented By:* <a href="#shady-island.networking.NetworkInterface">NetworkInterface</a>, <a href="#shady-island.networking.INetworkInterface">INetworkInterface</a>

An Elastic Network Interface.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.INetworkInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.networking.INetworkInterface.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#shady-island.networking.INetworkInterface.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | The ID of this Network Interface. |
| <code><a href="#shady-island.networking.INetworkInterface.property.subnet">subnet</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet</code> | The subnet of this Network Interface. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.networking.INetworkInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `connections`<sup>Required</sup> <a name="connections" id="shady-island.networking.INetworkInterface.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="shady-island.networking.INetworkInterface.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

The ID of this Network Interface.

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="shady-island.networking.INetworkInterface.property.subnet"></a>

```typescript
public readonly subnet: ISubnet;
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet

The subnet of this Network Interface.

---

### ISecretHttpHeader <a name="ISecretHttpHeader" id="shady-island.networking.ISecretHttpHeader"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* <a href="#shady-island.networking.SecretHttpHeader">SecretHttpHeader</a>, <a href="#shady-island.networking.ISecretHttpHeader">ISecretHttpHeader</a>

Interface for SecretHttpHeader.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.ISecretHttpHeader.createListenerCondition">createListenerCondition</a></code> | Get a ListenerCondition that represents this secret header. |
| <code><a href="#shady-island.networking.ISecretHttpHeader.createOriginCustomHeaders">createOriginCustomHeaders</a></code> | Gets the custom headers for a CloudFront origin configuration. |

---

##### `createListenerCondition` <a name="createListenerCondition" id="shady-island.networking.ISecretHttpHeader.createListenerCondition"></a>

```typescript
public createListenerCondition(): ListenerCondition
```

Get a ListenerCondition that represents this secret header.

##### `createOriginCustomHeaders` <a name="createOriginCustomHeaders" id="shady-island.networking.ISecretHttpHeader.createOriginCustomHeaders"></a>

```typescript
public createOriginCustomHeaders(): {[ key: string ]: string}
```

Gets the custom headers for a CloudFront origin configuration.

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.networking.ISecretHttpHeader.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.networking.ISecretHttpHeader.property.headerName">headerName</a></code> | <code>string</code> | The name of the secret header. |
| <code><a href="#shady-island.networking.ISecretHttpHeader.property.headerValue">headerValue</a></code> | <code>aws-cdk-lib.SecretValue</code> | The value of the secret header. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.networking.ISecretHttpHeader.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="shady-island.networking.ISecretHttpHeader.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

The name of the secret header.

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="shady-island.networking.ISecretHttpHeader.property.headerValue"></a>

```typescript
public readonly headerValue: SecretValue;
```

- *Type:* aws-cdk-lib.SecretValue

The value of the secret header.

---

## Enums <a name="Enums" id="Enums"></a>

### InterfaceType <a name="InterfaceType" id="shady-island.networking.InterfaceType"></a>

The type of Network Interface.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.InterfaceType.INTERFACE">INTERFACE</a></code> | A standard ENI. |
| <code><a href="#shady-island.networking.InterfaceType.EFA">EFA</a></code> | An Elastic Fabric Adapter ENI. |
| <code><a href="#shady-island.networking.InterfaceType.TRUNK">TRUNK</a></code> | An ENI for use with ECS awsvpc trunking. |

---

##### `INTERFACE` <a name="INTERFACE" id="shady-island.networking.InterfaceType.INTERFACE"></a>

A standard ENI.

---


##### `EFA` <a name="EFA" id="shady-island.networking.InterfaceType.EFA"></a>

An Elastic Fabric Adapter ENI.

---


##### `TRUNK` <a name="TRUNK" id="shady-island.networking.InterfaceType.TRUNK"></a>

An ENI for use with ECS awsvpc trunking.

---

