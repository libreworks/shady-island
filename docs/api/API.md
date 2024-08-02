# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AssignOnLaunch <a name="AssignOnLaunch" id="shady-island.AssignOnLaunch"></a>

- *Implements:* <a href="#shady-island.IAssignOnLaunch">IAssignOnLaunch</a>

Enables the "assignIpv6AddressOnCreation" attribute on selected subnets.

> [{@link https://github.com/aws/aws-cdk/issues/5927}]({@link https://github.com/aws/aws-cdk/issues/5927})

#### Initializers <a name="Initializers" id="shady-island.AssignOnLaunch.Initializer"></a>

```typescript
import { AssignOnLaunch } from 'shady-island'

new AssignOnLaunch(scope: Construct, id: string, options: AssignOnLaunchProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.AssignOnLaunch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The construct scope. |
| <code><a href="#shady-island.AssignOnLaunch.Initializer.parameter.id">id</a></code> | <code>string</code> | - The construct ID. |
| <code><a href="#shady-island.AssignOnLaunch.Initializer.parameter.options">options</a></code> | <code><a href="#shady-island.AssignOnLaunchProps">AssignOnLaunchProps</a></code> | - The constructor options. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.AssignOnLaunch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.AssignOnLaunch.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `options`<sup>Required</sup> <a name="options" id="shady-island.AssignOnLaunch.Initializer.parameter.options"></a>

- *Type:* <a href="#shady-island.AssignOnLaunchProps">AssignOnLaunchProps</a>

The constructor options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.AssignOnLaunch.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="shady-island.AssignOnLaunch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.AssignOnLaunch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.AssignOnLaunch.isConstruct"></a>

```typescript
import { AssignOnLaunch } from 'shady-island'

AssignOnLaunch.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.AssignOnLaunch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.AssignOnLaunch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.AssignOnLaunch.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The IPv6-enabled VPC. |
| <code><a href="#shady-island.AssignOnLaunch.property.vpcPlacement">vpcPlacement</a></code> | <code>aws-cdk-lib.aws_ec2.SelectedSubnets</code> | The chosen subnets for address assignment on ENI launch. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.AssignOnLaunch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.AssignOnLaunch.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The IPv6-enabled VPC.

---

##### `vpcPlacement`<sup>Required</sup> <a name="vpcPlacement" id="shady-island.AssignOnLaunch.property.vpcPlacement"></a>

```typescript
public readonly vpcPlacement: SelectedSubnets;
```

- *Type:* aws-cdk-lib.aws_ec2.SelectedSubnets

The chosen subnets for address assignment on ENI launch.

---


### BaseDatabase <a name="BaseDatabase" id="shady-island.BaseDatabase"></a>

- *Implements:* <a href="#shady-island.IDatabase">IDatabase</a>

A database.

#### Initializers <a name="Initializers" id="shady-island.BaseDatabase.Initializer"></a>

```typescript
import { BaseDatabase } from 'shady-island'

new BaseDatabase(scope: IConstruct, id: string, props: BaseDatabaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.BaseDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | - The Construct that contains this one. |
| <code><a href="#shady-island.BaseDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | - The identifier of this construct. |
| <code><a href="#shady-island.BaseDatabase.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.BaseDatabaseProps">BaseDatabaseProps</a></code> | - The configuration properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.BaseDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

The Construct that contains this one.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.BaseDatabase.Initializer.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.BaseDatabase.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.BaseDatabaseProps">BaseDatabaseProps</a>

The configuration properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.BaseDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.BaseDatabase.addUserAsOwner">addUserAsOwner</a></code> | Declares a new database user to be assigned ownership permissions. |
| <code><a href="#shady-island.BaseDatabase.addUserAsReader">addUserAsReader</a></code> | Declares a new database user to be assigned read-only permissions. |
| <code><a href="#shady-island.BaseDatabase.addUserAsUnprivileged">addUserAsUnprivileged</a></code> | Declares a new database user with no permissions. |

---

##### `toString` <a name="toString" id="shady-island.BaseDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addUserAsOwner` <a name="addUserAsOwner" id="shady-island.BaseDatabase.addUserAsOwner"></a>

```typescript
public addUserAsOwner(secret: ISecret): void
```

Declares a new database user to be assigned ownership permissions.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.BaseDatabase.addUserAsOwner.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `addUserAsReader` <a name="addUserAsReader" id="shady-island.BaseDatabase.addUserAsReader"></a>

```typescript
public addUserAsReader(secret: ISecret): void
```

Declares a new database user to be assigned read-only permissions.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.BaseDatabase.addUserAsReader.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `addUserAsUnprivileged` <a name="addUserAsUnprivileged" id="shady-island.BaseDatabase.addUserAsUnprivileged"></a>

```typescript
public addUserAsUnprivileged(secret: ISecret): void
```

Declares a new database user with no permissions.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.BaseDatabase.addUserAsUnprivileged.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.BaseDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.BaseDatabase.isConstruct"></a>

```typescript
import { BaseDatabase } from 'shady-island'

BaseDatabase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.BaseDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.BaseDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.BaseDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database/catalog. |
| <code><a href="#shady-island.BaseDatabase.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The cluster or instance endpoint. |
| <code><a href="#shady-island.BaseDatabase.property.trigger">trigger</a></code> | <code>aws-cdk-lib.triggers.ITrigger</code> | The CDK Trigger that kicks off the process. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.BaseDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="shady-island.BaseDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database/catalog.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="shady-island.BaseDatabase.property.endpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The cluster or instance endpoint.

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="shady-island.BaseDatabase.property.trigger"></a>

```typescript
public readonly trigger: ITrigger;
```

- *Type:* aws-cdk-lib.triggers.ITrigger

The CDK Trigger that kicks off the process.

You can further customize when the trigger fires using `executeAfter`.

---


### CidrContext <a name="CidrContext" id="shady-island.CidrContext"></a>

- *Implements:* <a href="#shady-island.ICidrContext">ICidrContext</a>

Allocates IPv6 CIDRs and routes for subnets in a VPC.

> [{@link https://github.com/aws/aws-cdk/issues/5927}]({@link https://github.com/aws/aws-cdk/issues/5927})

#### Initializers <a name="Initializers" id="shady-island.CidrContext.Initializer"></a>

```typescript
import { CidrContext } from 'shady-island'

new CidrContext(scope: Construct, id: string, options: CidrContextProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.CidrContext.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The construct scope. |
| <code><a href="#shady-island.CidrContext.Initializer.parameter.id">id</a></code> | <code>string</code> | - The construct ID. |
| <code><a href="#shady-island.CidrContext.Initializer.parameter.options">options</a></code> | <code><a href="#shady-island.CidrContextProps">CidrContextProps</a></code> | - The constructor options. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.CidrContext.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.CidrContext.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `options`<sup>Required</sup> <a name="options" id="shady-island.CidrContext.Initializer.parameter.options"></a>

- *Type:* <a href="#shady-island.CidrContextProps">CidrContextProps</a>

The constructor options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.CidrContext.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="shady-island.CidrContext.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.CidrContext.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.CidrContext.isConstruct"></a>

```typescript
import { CidrContext } from 'shady-island'

CidrContext.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.CidrContext.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.CidrContext.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.CidrContext.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The IPv6-enabled VPC. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.CidrContext.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.CidrContext.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The IPv6-enabled VPC.

---


### ContainerImagePipeline <a name="ContainerImagePipeline" id="shady-island.automation.ContainerImagePipeline"></a>

Allows images pushed to an ECR repo to trigger updates to an ECS service.

This construct produces a CodePipeline pipeline using the "ECR Source"
action, an "ECS Deploy" action, and a custom Lambda handler in between that
transforms the JSON from the "Source" action into the JSON needed for the
"Deploy" action.

#### Initializers <a name="Initializers" id="shady-island.automation.ContainerImagePipeline.Initializer"></a>

```typescript
import { automation } from 'shady-island'

new automation.ContainerImagePipeline(scope: Construct, id: string, props: ContainerImagePipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.ContainerImagePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.automation.ContainerImagePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.automation.ContainerImagePipeline.Initializer.parameter.props">props</a></code> | <code>shady-island.automation.ContainerImagePipelineProps</code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.automation.ContainerImagePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.automation.ContainerImagePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.automation.ContainerImagePipeline.Initializer.parameter.props"></a>

- *Type:* shady-island.automation.ContainerImagePipelineProps

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.automation.ContainerImagePipeline.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="shady-island.automation.ContainerImagePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.automation.ContainerImagePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.automation.ContainerImagePipeline.isConstruct"></a>

```typescript
import { automation } from 'shady-island'

automation.ContainerImagePipeline.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.automation.ContainerImagePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.ContainerImagePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.automation.ContainerImagePipeline.property.pipeline">pipeline</a></code> | <code>aws-cdk-lib.aws_codepipeline.Pipeline</code> | The CodePipeline pipeline. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.automation.ContainerImagePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="shady-island.automation.ContainerImagePipeline.property.pipeline"></a>

```typescript
public readonly pipeline: Pipeline;
```

- *Type:* aws-cdk-lib.aws_codepipeline.Pipeline

The CodePipeline pipeline.

---


### ContextLoadingStage <a name="ContextLoadingStage" id="shady-island.ContextLoadingStage"></a>

A Stage that can load context values from a JSON file.

#### Initializers <a name="Initializers" id="shady-island.ContextLoadingStage.Initializer"></a>

```typescript
import { ContextLoadingStage } from 'shady-island'

new ContextLoadingStage(scope: Construct, id: string, props: ContextLoadingStageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.ContextLoadingStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.ContextLoadingStage.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.ContextLoadingStage.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.ContextLoadingStageProps">ContextLoadingStageProps</a></code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.ContextLoadingStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.ContextLoadingStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.ContextLoadingStage.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.ContextLoadingStageProps">ContextLoadingStageProps</a>

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.ContextLoadingStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.ContextLoadingStage.synth">synth</a></code> | Synthesize this stage into a cloud assembly. |

---

##### `toString` <a name="toString" id="shady-island.ContextLoadingStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="shady-island.ContextLoadingStage.synth"></a>

```typescript
public synth(options?: StageSynthesisOptions): CloudAssembly
```

Synthesize this stage into a cloud assembly.

Once an assembly has been synthesized, it cannot be modified. Subsequent
calls will return the same assembly.

###### `options`<sup>Optional</sup> <a name="options" id="shady-island.ContextLoadingStage.synth.parameter.options"></a>

- *Type:* aws-cdk-lib.StageSynthesisOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.ContextLoadingStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#shady-island.ContextLoadingStage.isStage">isStage</a></code> | Test whether the given construct is a stage. |
| <code><a href="#shady-island.ContextLoadingStage.of">of</a></code> | Return the stage this construct is contained with, if available. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.ContextLoadingStage.isConstruct"></a>

```typescript
import { ContextLoadingStage } from 'shady-island'

ContextLoadingStage.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.ContextLoadingStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStage` <a name="isStage" id="shady-island.ContextLoadingStage.isStage"></a>

```typescript
import { ContextLoadingStage } from 'shady-island'

ContextLoadingStage.isStage(x: any)
```

Test whether the given construct is a stage.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.ContextLoadingStage.isStage.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="shady-island.ContextLoadingStage.of"></a>

```typescript
import { ContextLoadingStage } from 'shady-island'

ContextLoadingStage.of(construct: IConstruct)
```

Return the stage this construct is contained with, if available.

If called
on a nested stage, returns its parent.

###### `construct`<sup>Required</sup> <a name="construct" id="shady-island.ContextLoadingStage.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.ContextLoadingStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.ContextLoadingStage.property.artifactId">artifactId</a></code> | <code>string</code> | Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string. |
| <code><a href="#shady-island.ContextLoadingStage.property.assetOutdir">assetOutdir</a></code> | <code>string</code> | The cloud assembly asset output directory. |
| <code><a href="#shady-island.ContextLoadingStage.property.outdir">outdir</a></code> | <code>string</code> | The cloud assembly output directory. |
| <code><a href="#shady-island.ContextLoadingStage.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#shady-island.ContextLoadingStage.property.stageName">stageName</a></code> | <code>string</code> | The name of the stage. |
| <code><a href="#shady-island.ContextLoadingStage.property.account">account</a></code> | <code>string</code> | The default account for all resources defined within this stage. |
| <code><a href="#shady-island.ContextLoadingStage.property.parentStage">parentStage</a></code> | <code>aws-cdk-lib.Stage</code> | The parent stage or `undefined` if this is the app. |
| <code><a href="#shady-island.ContextLoadingStage.property.region">region</a></code> | <code>string</code> | The default region for all resources defined within this stage. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.ContextLoadingStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="shady-island.ContextLoadingStage.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string.

Derived from the construct path.

---

##### `assetOutdir`<sup>Required</sup> <a name="assetOutdir" id="shady-island.ContextLoadingStage.property.assetOutdir"></a>

```typescript
public readonly assetOutdir: string;
```

- *Type:* string

The cloud assembly asset output directory.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="shady-island.ContextLoadingStage.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The cloud assembly output directory.

---

##### `policyValidationBeta1`<sup>Required</sup> <a name="policyValidationBeta1" id="shady-island.ContextLoadingStage.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="shady-island.ContextLoadingStage.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The name of the stage.

Based on names of the parent stages separated by
hypens.

---

##### `account`<sup>Optional</sup> <a name="account" id="shady-island.ContextLoadingStage.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The default account for all resources defined within this stage.

---

##### `parentStage`<sup>Optional</sup> <a name="parentStage" id="shady-island.ContextLoadingStage.property.parentStage"></a>

```typescript
public readonly parentStage: Stage;
```

- *Type:* aws-cdk-lib.Stage

The parent stage or `undefined` if this is the app.

*

---

##### `region`<sup>Optional</sup> <a name="region" id="shady-island.ContextLoadingStage.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The default region for all resources defined within this stage.

---


### DeploymentTierStage <a name="DeploymentTierStage" id="shady-island.DeploymentTierStage"></a>

A Stage whose stacks are part of a single deployment tier.

#### Initializers <a name="Initializers" id="shady-island.DeploymentTierStage.Initializer"></a>

```typescript
import { DeploymentTierStage } from 'shady-island'

new DeploymentTierStage(scope: Construct, id: string, props: DeploymentTierStageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.DeploymentTierStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.DeploymentTierStage.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.DeploymentTierStage.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.DeploymentTierStageProps">DeploymentTierStageProps</a></code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.DeploymentTierStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.DeploymentTierStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.DeploymentTierStage.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.DeploymentTierStageProps">DeploymentTierStageProps</a>

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.DeploymentTierStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.DeploymentTierStage.synth">synth</a></code> | Synthesize this stage into a cloud assembly. |

---

##### `toString` <a name="toString" id="shady-island.DeploymentTierStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="shady-island.DeploymentTierStage.synth"></a>

```typescript
public synth(options?: StageSynthesisOptions): CloudAssembly
```

Synthesize this stage into a cloud assembly.

Once an assembly has been synthesized, it cannot be modified. Subsequent
calls will return the same assembly.

###### `options`<sup>Optional</sup> <a name="options" id="shady-island.DeploymentTierStage.synth.parameter.options"></a>

- *Type:* aws-cdk-lib.StageSynthesisOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.DeploymentTierStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#shady-island.DeploymentTierStage.isStage">isStage</a></code> | Test whether the given construct is a stage. |
| <code><a href="#shady-island.DeploymentTierStage.of">of</a></code> | Return the stage this construct is contained with, if available. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.DeploymentTierStage.isConstruct"></a>

```typescript
import { DeploymentTierStage } from 'shady-island'

DeploymentTierStage.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.DeploymentTierStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStage` <a name="isStage" id="shady-island.DeploymentTierStage.isStage"></a>

```typescript
import { DeploymentTierStage } from 'shady-island'

DeploymentTierStage.isStage(x: any)
```

Test whether the given construct is a stage.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.DeploymentTierStage.isStage.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="shady-island.DeploymentTierStage.of"></a>

```typescript
import { DeploymentTierStage } from 'shady-island'

DeploymentTierStage.of(construct: IConstruct)
```

Return the stage this construct is contained with, if available.

If called
on a nested stage, returns its parent.

###### `construct`<sup>Required</sup> <a name="construct" id="shady-island.DeploymentTierStage.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.DeploymentTierStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.DeploymentTierStage.property.artifactId">artifactId</a></code> | <code>string</code> | Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string. |
| <code><a href="#shady-island.DeploymentTierStage.property.assetOutdir">assetOutdir</a></code> | <code>string</code> | The cloud assembly asset output directory. |
| <code><a href="#shady-island.DeploymentTierStage.property.outdir">outdir</a></code> | <code>string</code> | The cloud assembly output directory. |
| <code><a href="#shady-island.DeploymentTierStage.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#shady-island.DeploymentTierStage.property.stageName">stageName</a></code> | <code>string</code> | The name of the stage. |
| <code><a href="#shady-island.DeploymentTierStage.property.account">account</a></code> | <code>string</code> | The default account for all resources defined within this stage. |
| <code><a href="#shady-island.DeploymentTierStage.property.parentStage">parentStage</a></code> | <code>aws-cdk-lib.Stage</code> | The parent stage or `undefined` if this is the app. |
| <code><a href="#shady-island.DeploymentTierStage.property.region">region</a></code> | <code>string</code> | The default region for all resources defined within this stage. |
| <code><a href="#shady-island.DeploymentTierStage.property.inProduction">inProduction</a></code> | <code>boolean</code> | Whether this stage is considered a production deployment. |
| <code><a href="#shady-island.DeploymentTierStage.property.tier">tier</a></code> | <code><a href="#shady-island.Tier">Tier</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.DeploymentTierStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="shady-island.DeploymentTierStage.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string.

Derived from the construct path.

---

##### `assetOutdir`<sup>Required</sup> <a name="assetOutdir" id="shady-island.DeploymentTierStage.property.assetOutdir"></a>

```typescript
public readonly assetOutdir: string;
```

- *Type:* string

The cloud assembly asset output directory.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="shady-island.DeploymentTierStage.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The cloud assembly output directory.

---

##### `policyValidationBeta1`<sup>Required</sup> <a name="policyValidationBeta1" id="shady-island.DeploymentTierStage.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="shady-island.DeploymentTierStage.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The name of the stage.

Based on names of the parent stages separated by
hypens.

---

##### `account`<sup>Optional</sup> <a name="account" id="shady-island.DeploymentTierStage.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The default account for all resources defined within this stage.

---

##### `parentStage`<sup>Optional</sup> <a name="parentStage" id="shady-island.DeploymentTierStage.property.parentStage"></a>

```typescript
public readonly parentStage: Stage;
```

- *Type:* aws-cdk-lib.Stage

The parent stage or `undefined` if this is the app.

*

---

##### `region`<sup>Optional</sup> <a name="region" id="shady-island.DeploymentTierStage.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The default region for all resources defined within this stage.

---

##### `inProduction`<sup>Required</sup> <a name="inProduction" id="shady-island.DeploymentTierStage.property.inProduction"></a>

```typescript
public readonly inProduction: boolean;
```

- *Type:* boolean

Whether this stage is considered a production deployment.

---

##### `tier`<sup>Required</sup> <a name="tier" id="shady-island.DeploymentTierStage.property.tier"></a>

```typescript
public readonly tier: Tier;
```

- *Type:* <a href="#shady-island.Tier">Tier</a>

---


### ElasticIp <a name="ElasticIp" id="shady-island.networking.ElasticIp"></a>

- *Implements:* shady-island.networking.IElasticIp

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
| <code><a href="#shady-island.networking.ElasticIp.Initializer.parameter.props">props</a></code> | <code>shady-island.networking.ElasticIpProps</code> | - Initialization properties for this construct. |

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

- *Type:* shady-island.networking.ElasticIpProps

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
public grant(identity: IGrantable, actions: string): Grant
```

Grant the given identity custom permissions.

e.g. `ec2:AssociateAddress`, `ec2:DisableAddressTransfer`,
`ec2:DisassociateAddress`, `ec2:EnableAddressTransfer`, among others.

###### `identity`<sup>Required</sup> <a name="identity" id="shady-island.networking.ElasticIp.grant.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="shady-island.networking.ElasticIp.grant.parameter.actions"></a>

- *Type:* string

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


### EncryptedFileSystem <a name="EncryptedFileSystem" id="shady-island.EncryptedFileSystem"></a>

- *Implements:* <a href="#shady-island.IEncryptedFileSystem">IEncryptedFileSystem</a>

An EncryptedFileSystem.

#### Initializers <a name="Initializers" id="shady-island.EncryptedFileSystem.Initializer"></a>

```typescript
import { EncryptedFileSystem } from 'shady-island'

new EncryptedFileSystem(scope: IConstruct, id: string, props: EncryptedFileSystemProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.EncryptedFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | - The Construct that contains this one. |
| <code><a href="#shady-island.EncryptedFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | - The identifier of this construct. |
| <code><a href="#shady-island.EncryptedFileSystem.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.EncryptedFileSystemProps">EncryptedFileSystemProps</a></code> | - The configuration properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.EncryptedFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

The Construct that contains this one.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.EncryptedFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.EncryptedFileSystem.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.EncryptedFileSystemProps">EncryptedFileSystemProps</a>

The configuration properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.EncryptedFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="shady-island.EncryptedFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.EncryptedFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.EncryptedFileSystem.isConstruct"></a>

```typescript
import { EncryptedFileSystem } from 'shady-island'

EncryptedFileSystem.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.EncryptedFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.EncryptedFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.EncryptedFileSystem.property.fileSystem">fileSystem</a></code> | <code>aws-cdk-lib.aws_efs.IFileSystem</code> | The EFS file system. |
| <code><a href="#shady-island.EncryptedFileSystem.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS encryption key. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.EncryptedFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fileSystem`<sup>Required</sup> <a name="fileSystem" id="shady-island.EncryptedFileSystem.property.fileSystem"></a>

```typescript
public readonly fileSystem: IFileSystem;
```

- *Type:* aws-cdk-lib.aws_efs.IFileSystem

The EFS file system.

---

##### `key`<sup>Required</sup> <a name="key" id="shady-island.EncryptedFileSystem.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS encryption key.

---


### EncryptedLogGroup <a name="EncryptedLogGroup" id="shady-island.EncryptedLogGroup"></a>

- *Implements:* <a href="#shady-island.IEncryptedLogGroup">IEncryptedLogGroup</a>

A log group encrypted by a KMS customer managed key.

#### Initializers <a name="Initializers" id="shady-island.EncryptedLogGroup.Initializer"></a>

```typescript
import { EncryptedLogGroup } from 'shady-island'

new EncryptedLogGroup(scope: Construct, id: string, props: EncryptedLogGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.EncryptedLogGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#shady-island.EncryptedLogGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#shady-island.EncryptedLogGroup.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.EncryptedLogGroupProps">EncryptedLogGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.EncryptedLogGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.EncryptedLogGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.EncryptedLogGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.EncryptedLogGroupProps">EncryptedLogGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.EncryptedLogGroup.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="shady-island.EncryptedLogGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.EncryptedLogGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.EncryptedLogGroup.isConstruct"></a>

```typescript
import { EncryptedLogGroup } from 'shady-island'

EncryptedLogGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.EncryptedLogGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.EncryptedLogGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.EncryptedLogGroup.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS encryption key. |
| <code><a href="#shady-island.EncryptedLogGroup.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.EncryptedLogGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `key`<sup>Required</sup> <a name="key" id="shady-island.EncryptedLogGroup.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS encryption key.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="shady-island.EncryptedLogGroup.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The log group.

---


### FargateTask <a name="FargateTask" id="shady-island.FargateTask"></a>

- *Implements:* <a href="#shady-island.IFargateTask">IFargateTask</a>

An ECS Fargate Task.

If `vpcSubnets` is blank but `assignPublicIp` is set, the task will launch
in Public subnets, otherwise the first available one of Private, Isolated,
Public, in that order.

#### Initializers <a name="Initializers" id="shady-island.FargateTask.Initializer"></a>

```typescript
import { FargateTask } from 'shady-island'

new FargateTask(scope: Construct, id: string, props: FargateTaskProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.FargateTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#shady-island.FargateTask.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#shady-island.FargateTask.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.FargateTaskProps">FargateTaskProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.FargateTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.FargateTask.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.FargateTask.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.FargateTaskProps">FargateTaskProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.FargateTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.FargateTask.createRuleTarget">createRuleTarget</a></code> | Create a new EventBridge Rule Target that launches this ECS task. |
| <code><a href="#shady-island.FargateTask.createStateMachineTask">createStateMachineTask</a></code> | Create a new Step Functions task that launches this ECS task. |
| <code><a href="#shady-island.FargateTask.grantRun">grantRun</a></code> | Grants permission to invoke ecs:RunTask on this task's cluster. |

---

##### `toString` <a name="toString" id="shady-island.FargateTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createRuleTarget` <a name="createRuleTarget" id="shady-island.FargateTask.createRuleTarget"></a>

```typescript
public createRuleTarget(props: EventTargetProps): EcsTask
```

Create a new EventBridge Rule Target that launches this ECS task.

###### `props`<sup>Required</sup> <a name="props" id="shady-island.FargateTask.createRuleTarget.parameter.props"></a>

- *Type:* <a href="#shady-island.EventTargetProps">EventTargetProps</a>

---

##### `createStateMachineTask` <a name="createStateMachineTask" id="shady-island.FargateTask.createStateMachineTask"></a>

```typescript
public createStateMachineTask(id: string, props: StateMachineTaskProps): EcsRunTask
```

Create a new Step Functions task that launches this ECS task.

###### `id`<sup>Required</sup> <a name="id" id="shady-island.FargateTask.createStateMachineTask.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="shady-island.FargateTask.createStateMachineTask.parameter.props"></a>

- *Type:* <a href="#shady-island.StateMachineTaskProps">StateMachineTaskProps</a>

---

##### `grantRun` <a name="grantRun" id="shady-island.FargateTask.grantRun"></a>

```typescript
public grantRun(grantee: IGrantable): Grant
```

Grants permission to invoke ecs:RunTask on this task's cluster.

###### `grantee`<sup>Required</sup> <a name="grantee" id="shady-island.FargateTask.grantRun.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.FargateTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.FargateTask.isConstruct"></a>

```typescript
import { FargateTask } from 'shady-island'

FargateTask.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.FargateTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.FargateTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.FargateTask.property.awsVpcNetworkConfig">awsVpcNetworkConfig</a></code> | <code><a href="#shady-island.FargateAwsVpcConfiguration">FargateAwsVpcConfiguration</a></code> | Get the networkConfiguration.awsvpcConfiguration property to run this task. |
| <code><a href="#shady-island.FargateTask.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The name of the cluster that hosts the service. |
| <code><a href="#shady-island.FargateTask.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#shady-island.FargateTask.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.FargateTaskDefinition</code> | The task definition that can be launched. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.FargateTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `awsVpcNetworkConfig`<sup>Required</sup> <a name="awsVpcNetworkConfig" id="shady-island.FargateTask.property.awsVpcNetworkConfig"></a>

```typescript
public readonly awsVpcNetworkConfig: FargateAwsVpcConfiguration;
```

- *Type:* <a href="#shady-island.FargateAwsVpcConfiguration">FargateAwsVpcConfiguration</a>

Get the networkConfiguration.awsvpcConfiguration property to run this task.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="shady-island.FargateTask.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

The name of the cluster that hosts the service.

---

##### `connections`<sup>Required</sup> <a name="connections" id="shady-island.FargateTask.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="shady-island.FargateTask.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: FargateTaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.FargateTaskDefinition

The task definition that can be launched.

---


### MysqlDatabase <a name="MysqlDatabase" id="shady-island.MysqlDatabase"></a>

A MySQL database.

#### Initializers <a name="Initializers" id="shady-island.MysqlDatabase.Initializer"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

new MysqlDatabase(scope: IConstruct, id: string, props: MysqlDatabaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.MysqlDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | - The Construct that contains this one. |
| <code><a href="#shady-island.MysqlDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | - The identifier of this construct. |
| <code><a href="#shady-island.MysqlDatabase.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.MysqlDatabaseProps">MysqlDatabaseProps</a></code> | - The configuration properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.MysqlDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

The Construct that contains this one.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.MysqlDatabase.Initializer.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.MysqlDatabase.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.MysqlDatabaseProps">MysqlDatabaseProps</a>

The configuration properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.MysqlDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.MysqlDatabase.addUserAsOwner">addUserAsOwner</a></code> | Declares a new database user to be assigned ownership permissions. |
| <code><a href="#shady-island.MysqlDatabase.addUserAsReader">addUserAsReader</a></code> | Declares a new database user to be assigned read-only permissions. |
| <code><a href="#shady-island.MysqlDatabase.addUserAsUnprivileged">addUserAsUnprivileged</a></code> | Declares a new database user with no permissions. |

---

##### `toString` <a name="toString" id="shady-island.MysqlDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addUserAsOwner` <a name="addUserAsOwner" id="shady-island.MysqlDatabase.addUserAsOwner"></a>

```typescript
public addUserAsOwner(secret: ISecret): void
```

Declares a new database user to be assigned ownership permissions.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.MysqlDatabase.addUserAsOwner.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `addUserAsReader` <a name="addUserAsReader" id="shady-island.MysqlDatabase.addUserAsReader"></a>

```typescript
public addUserAsReader(secret: ISecret): void
```

Declares a new database user to be assigned read-only permissions.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.MysqlDatabase.addUserAsReader.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `addUserAsUnprivileged` <a name="addUserAsUnprivileged" id="shady-island.MysqlDatabase.addUserAsUnprivileged"></a>

```typescript
public addUserAsUnprivileged(secret: ISecret): void
```

Declares a new database user with no permissions.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.MysqlDatabase.addUserAsUnprivileged.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.MysqlDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#shady-island.MysqlDatabase.forCluster">forCluster</a></code> | Create a new MysqlDatabase inside a DatabaseCluster. |
| <code><a href="#shady-island.MysqlDatabase.forClusterFromSnapshot">forClusterFromSnapshot</a></code> | Create a new MysqlDatabase inside a DatabaseClusterFromSnapshot. |
| <code><a href="#shady-island.MysqlDatabase.forInstance">forInstance</a></code> | Create a new MysqlDatabase inside a DatabaseInstance. |
| <code><a href="#shady-island.MysqlDatabase.forInstanceFromSnapshot">forInstanceFromSnapshot</a></code> | Create a new MysqlDatabase inside a DatabaseInstanceFromSnapshot. |
| <code><a href="#shady-island.MysqlDatabase.forServerlessCluster">forServerlessCluster</a></code> | Create a new MysqlDatabase inside a DatabaseCluster. |
| <code><a href="#shady-island.MysqlDatabase.forServerlessClusterFromSnapshot">forServerlessClusterFromSnapshot</a></code> | Create a new MysqlDatabase inside a DatabaseClusterFromSnapshot. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.MysqlDatabase.isConstruct"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.MysqlDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `forCluster` <a name="forCluster" id="shady-island.MysqlDatabase.forCluster"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.forCluster(scope: Construct, id: string, cluster: DatabaseCluster, options: MysqlDatabaseForClusterOptions)
```

Create a new MysqlDatabase inside a DatabaseCluster.

This method automatically adds the cluster to the CloudFormation
dependencies of the CDK Trigger.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.MysqlDatabase.forCluster.parameter.scope"></a>

- *Type:* constructs.Construct

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.MysqlDatabase.forCluster.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="cluster" id="shady-island.MysqlDatabase.forCluster.parameter.cluster"></a>

- *Type:* aws-cdk-lib.aws_rds.DatabaseCluster

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.MysqlDatabase.forCluster.parameter.options"></a>

- *Type:* <a href="#shady-island.MysqlDatabaseForClusterOptions">MysqlDatabaseForClusterOptions</a>

The configuration properties for this construct.

---

##### `forClusterFromSnapshot` <a name="forClusterFromSnapshot" id="shady-island.MysqlDatabase.forClusterFromSnapshot"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.forClusterFromSnapshot(scope: Construct, id: string, cluster: DatabaseClusterFromSnapshot, options: MysqlDatabaseForClusterOptions)
```

Create a new MysqlDatabase inside a DatabaseClusterFromSnapshot.

This method automatically adds the cluster to the CloudFormation
dependencies of the CDK Trigger.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.MysqlDatabase.forClusterFromSnapshot.parameter.scope"></a>

- *Type:* constructs.Construct

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.MysqlDatabase.forClusterFromSnapshot.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="cluster" id="shady-island.MysqlDatabase.forClusterFromSnapshot.parameter.cluster"></a>

- *Type:* aws-cdk-lib.aws_rds.DatabaseClusterFromSnapshot

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.MysqlDatabase.forClusterFromSnapshot.parameter.options"></a>

- *Type:* <a href="#shady-island.MysqlDatabaseForClusterOptions">MysqlDatabaseForClusterOptions</a>

The configuration properties for this construct.

---

##### `forInstance` <a name="forInstance" id="shady-island.MysqlDatabase.forInstance"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.forInstance(scope: Construct, id: string, instance: DatabaseInstance, options: MysqlDatabaseForClusterOptions)
```

Create a new MysqlDatabase inside a DatabaseInstance.

This method automatically adds the instance to the CloudFormation
dependencies of the CDK Trigger.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.MysqlDatabase.forInstance.parameter.scope"></a>

- *Type:* constructs.Construct

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.MysqlDatabase.forInstance.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

###### `instance`<sup>Required</sup> <a name="instance" id="shady-island.MysqlDatabase.forInstance.parameter.instance"></a>

- *Type:* aws-cdk-lib.aws_rds.DatabaseInstance

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.MysqlDatabase.forInstance.parameter.options"></a>

- *Type:* <a href="#shady-island.MysqlDatabaseForClusterOptions">MysqlDatabaseForClusterOptions</a>

The configuration properties for this construct.

---

##### `forInstanceFromSnapshot` <a name="forInstanceFromSnapshot" id="shady-island.MysqlDatabase.forInstanceFromSnapshot"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.forInstanceFromSnapshot(scope: Construct, id: string, instance: DatabaseInstanceFromSnapshot, options: MysqlDatabaseForClusterOptions)
```

Create a new MysqlDatabase inside a DatabaseInstanceFromSnapshot.

This method automatically adds the instance to the CloudFormation
dependencies of the CDK Trigger.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.MysqlDatabase.forInstanceFromSnapshot.parameter.scope"></a>

- *Type:* constructs.Construct

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.MysqlDatabase.forInstanceFromSnapshot.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

###### `instance`<sup>Required</sup> <a name="instance" id="shady-island.MysqlDatabase.forInstanceFromSnapshot.parameter.instance"></a>

- *Type:* aws-cdk-lib.aws_rds.DatabaseInstanceFromSnapshot

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.MysqlDatabase.forInstanceFromSnapshot.parameter.options"></a>

- *Type:* <a href="#shady-island.MysqlDatabaseForClusterOptions">MysqlDatabaseForClusterOptions</a>

The configuration properties for this construct.

---

##### `forServerlessCluster` <a name="forServerlessCluster" id="shady-island.MysqlDatabase.forServerlessCluster"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.forServerlessCluster(scope: Construct, id: string, cluster: ServerlessCluster, options: MysqlDatabaseForServerlessClusterOptions)
```

Create a new MysqlDatabase inside a DatabaseCluster.

This method automatically adds the cluster to the CloudFormation
dependencies of the CDK Trigger.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.MysqlDatabase.forServerlessCluster.parameter.scope"></a>

- *Type:* constructs.Construct

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.MysqlDatabase.forServerlessCluster.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="cluster" id="shady-island.MysqlDatabase.forServerlessCluster.parameter.cluster"></a>

- *Type:* aws-cdk-lib.aws_rds.ServerlessCluster

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.MysqlDatabase.forServerlessCluster.parameter.options"></a>

- *Type:* <a href="#shady-island.MysqlDatabaseForServerlessClusterOptions">MysqlDatabaseForServerlessClusterOptions</a>

The configuration properties for this construct.

---

##### `forServerlessClusterFromSnapshot` <a name="forServerlessClusterFromSnapshot" id="shady-island.MysqlDatabase.forServerlessClusterFromSnapshot"></a>

```typescript
import { MysqlDatabase } from 'shady-island'

MysqlDatabase.forServerlessClusterFromSnapshot(scope: Construct, id: string, cluster: ServerlessClusterFromSnapshot, options: MysqlDatabaseForServerlessClusterOptions)
```

Create a new MysqlDatabase inside a DatabaseClusterFromSnapshot.

This method automatically adds the cluster to the CloudFormation
dependencies of the CDK Trigger.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.MysqlDatabase.forServerlessClusterFromSnapshot.parameter.scope"></a>

- *Type:* constructs.Construct

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.MysqlDatabase.forServerlessClusterFromSnapshot.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="cluster" id="shady-island.MysqlDatabase.forServerlessClusterFromSnapshot.parameter.cluster"></a>

- *Type:* aws-cdk-lib.aws_rds.ServerlessClusterFromSnapshot

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.MysqlDatabase.forServerlessClusterFromSnapshot.parameter.options"></a>

- *Type:* <a href="#shady-island.MysqlDatabaseForServerlessClusterOptions">MysqlDatabaseForServerlessClusterOptions</a>

The configuration properties for this construct.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.MysqlDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.MysqlDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database/catalog. |
| <code><a href="#shady-island.MysqlDatabase.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The cluster or instance endpoint. |
| <code><a href="#shady-island.MysqlDatabase.property.trigger">trigger</a></code> | <code>aws-cdk-lib.triggers.ITrigger</code> | The CDK Trigger that kicks off the process. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.MysqlDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="shady-island.MysqlDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database/catalog.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="shady-island.MysqlDatabase.property.endpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The cluster or instance endpoint.

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="shady-island.MysqlDatabase.property.trigger"></a>

```typescript
public readonly trigger: ITrigger;
```

- *Type:* aws-cdk-lib.triggers.ITrigger

The CDK Trigger that kicks off the process.

You can further customize when the trigger fires using `executeAfter`.

---


### PostgresqlDatabase <a name="PostgresqlDatabase" id="shady-island.PostgresqlDatabase"></a>

A PostgreSQL database.

#### Initializers <a name="Initializers" id="shady-island.PostgresqlDatabase.Initializer"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

new PostgresqlDatabase(scope: IConstruct, id: string, props: PostgresqlDatabaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.PostgresqlDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | - The Construct that contains this one. |
| <code><a href="#shady-island.PostgresqlDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | - The identifier of this construct. |
| <code><a href="#shady-island.PostgresqlDatabase.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.PostgresqlDatabaseProps">PostgresqlDatabaseProps</a></code> | - The configuration properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.PostgresqlDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

The Construct that contains this one.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.PostgresqlDatabase.Initializer.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.PostgresqlDatabase.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.PostgresqlDatabaseProps">PostgresqlDatabaseProps</a>

The configuration properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.PostgresqlDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.PostgresqlDatabase.addUserAsOwner">addUserAsOwner</a></code> | Declares a new database user to be assigned ownership permissions. |
| <code><a href="#shady-island.PostgresqlDatabase.addUserAsReader">addUserAsReader</a></code> | Declares a new database user to be assigned read-only permissions. |
| <code><a href="#shady-island.PostgresqlDatabase.addUserAsUnprivileged">addUserAsUnprivileged</a></code> | Declares a new database user with no permissions. |

---

##### `toString` <a name="toString" id="shady-island.PostgresqlDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addUserAsOwner` <a name="addUserAsOwner" id="shady-island.PostgresqlDatabase.addUserAsOwner"></a>

```typescript
public addUserAsOwner(secret: ISecret): void
```

Declares a new database user to be assigned ownership permissions.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.PostgresqlDatabase.addUserAsOwner.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `addUserAsReader` <a name="addUserAsReader" id="shady-island.PostgresqlDatabase.addUserAsReader"></a>

```typescript
public addUserAsReader(secret: ISecret): void
```

Declares a new database user to be assigned read-only permissions.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.PostgresqlDatabase.addUserAsReader.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `addUserAsUnprivileged` <a name="addUserAsUnprivileged" id="shady-island.PostgresqlDatabase.addUserAsUnprivileged"></a>

```typescript
public addUserAsUnprivileged(secret: ISecret): void
```

Declares a new database user with no permissions.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.PostgresqlDatabase.addUserAsUnprivileged.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.PostgresqlDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#shady-island.PostgresqlDatabase.forCluster">forCluster</a></code> | Create a new PostgresqlDatabase inside a DatabaseCluster. |
| <code><a href="#shady-island.PostgresqlDatabase.forClusterFromSnapshot">forClusterFromSnapshot</a></code> | Create a new PostgresqlDatabase inside a DatabaseClusterFromSnapshot. |
| <code><a href="#shady-island.PostgresqlDatabase.forInstance">forInstance</a></code> | Create a new PostgresqlDatabase inside a DatabaseInstance. |
| <code><a href="#shady-island.PostgresqlDatabase.forInstanceFromSnapshot">forInstanceFromSnapshot</a></code> | Create a new PostgresqlDatabase inside a DatabaseInstanceFromSnapshot. |
| <code><a href="#shady-island.PostgresqlDatabase.forServerlessCluster">forServerlessCluster</a></code> | Create a new PostgresqlDatabase inside a DatabaseCluster. |
| <code><a href="#shady-island.PostgresqlDatabase.forServerlessClusterFromSnapshot">forServerlessClusterFromSnapshot</a></code> | Create a new PostgresqlDatabase inside a DatabaseClusterFromSnapshot. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.PostgresqlDatabase.isConstruct"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.PostgresqlDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `forCluster` <a name="forCluster" id="shady-island.PostgresqlDatabase.forCluster"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.forCluster(scope: Construct, id: string, cluster: DatabaseCluster, options: PostgresqlDatabaseForClusterOptions)
```

Create a new PostgresqlDatabase inside a DatabaseCluster.

This method automatically adds the cluster to the CloudFormation
dependencies of the CDK Trigger.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.PostgresqlDatabase.forCluster.parameter.scope"></a>

- *Type:* constructs.Construct

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.PostgresqlDatabase.forCluster.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="cluster" id="shady-island.PostgresqlDatabase.forCluster.parameter.cluster"></a>

- *Type:* aws-cdk-lib.aws_rds.DatabaseCluster

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.PostgresqlDatabase.forCluster.parameter.options"></a>

- *Type:* <a href="#shady-island.PostgresqlDatabaseForClusterOptions">PostgresqlDatabaseForClusterOptions</a>

The configuration properties for this construct.

---

##### `forClusterFromSnapshot` <a name="forClusterFromSnapshot" id="shady-island.PostgresqlDatabase.forClusterFromSnapshot"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.forClusterFromSnapshot(scope: Construct, id: string, cluster: DatabaseClusterFromSnapshot, options: PostgresqlDatabaseForClusterOptions)
```

Create a new PostgresqlDatabase inside a DatabaseClusterFromSnapshot.

This method automatically adds the cluster to the CloudFormation
dependencies of the CDK Trigger.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.PostgresqlDatabase.forClusterFromSnapshot.parameter.scope"></a>

- *Type:* constructs.Construct

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.PostgresqlDatabase.forClusterFromSnapshot.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="cluster" id="shady-island.PostgresqlDatabase.forClusterFromSnapshot.parameter.cluster"></a>

- *Type:* aws-cdk-lib.aws_rds.DatabaseClusterFromSnapshot

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.PostgresqlDatabase.forClusterFromSnapshot.parameter.options"></a>

- *Type:* <a href="#shady-island.PostgresqlDatabaseForClusterOptions">PostgresqlDatabaseForClusterOptions</a>

The configuration properties for this construct.

---

##### `forInstance` <a name="forInstance" id="shady-island.PostgresqlDatabase.forInstance"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.forInstance(scope: Construct, id: string, instance: DatabaseInstance, options: PostgresqlDatabaseForClusterOptions)
```

Create a new PostgresqlDatabase inside a DatabaseInstance.

This method automatically adds the instance to the CloudFormation
dependencies of the CDK Trigger.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.PostgresqlDatabase.forInstance.parameter.scope"></a>

- *Type:* constructs.Construct

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.PostgresqlDatabase.forInstance.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

###### `instance`<sup>Required</sup> <a name="instance" id="shady-island.PostgresqlDatabase.forInstance.parameter.instance"></a>

- *Type:* aws-cdk-lib.aws_rds.DatabaseInstance

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.PostgresqlDatabase.forInstance.parameter.options"></a>

- *Type:* <a href="#shady-island.PostgresqlDatabaseForClusterOptions">PostgresqlDatabaseForClusterOptions</a>

The configuration properties for this construct.

---

##### `forInstanceFromSnapshot` <a name="forInstanceFromSnapshot" id="shady-island.PostgresqlDatabase.forInstanceFromSnapshot"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.forInstanceFromSnapshot(scope: Construct, id: string, instance: DatabaseInstanceFromSnapshot, options: PostgresqlDatabaseForClusterOptions)
```

Create a new PostgresqlDatabase inside a DatabaseInstanceFromSnapshot.

This method automatically adds the instance to the CloudFormation
dependencies of the CDK Trigger.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.PostgresqlDatabase.forInstanceFromSnapshot.parameter.scope"></a>

- *Type:* constructs.Construct

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.PostgresqlDatabase.forInstanceFromSnapshot.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

###### `instance`<sup>Required</sup> <a name="instance" id="shady-island.PostgresqlDatabase.forInstanceFromSnapshot.parameter.instance"></a>

- *Type:* aws-cdk-lib.aws_rds.DatabaseInstanceFromSnapshot

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.PostgresqlDatabase.forInstanceFromSnapshot.parameter.options"></a>

- *Type:* <a href="#shady-island.PostgresqlDatabaseForClusterOptions">PostgresqlDatabaseForClusterOptions</a>

The configuration properties for this construct.

---

##### `forServerlessCluster` <a name="forServerlessCluster" id="shady-island.PostgresqlDatabase.forServerlessCluster"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.forServerlessCluster(scope: Construct, id: string, cluster: ServerlessCluster, options: PostgresqlDatabaseForServerlessClusterOptions)
```

Create a new PostgresqlDatabase inside a DatabaseCluster.

This method automatically adds the cluster to the CloudFormation
dependencies of the CDK Trigger.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.PostgresqlDatabase.forServerlessCluster.parameter.scope"></a>

- *Type:* constructs.Construct

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.PostgresqlDatabase.forServerlessCluster.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="cluster" id="shady-island.PostgresqlDatabase.forServerlessCluster.parameter.cluster"></a>

- *Type:* aws-cdk-lib.aws_rds.ServerlessCluster

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.PostgresqlDatabase.forServerlessCluster.parameter.options"></a>

- *Type:* <a href="#shady-island.PostgresqlDatabaseForServerlessClusterOptions">PostgresqlDatabaseForServerlessClusterOptions</a>

The configuration properties for this construct.

---

##### `forServerlessClusterFromSnapshot` <a name="forServerlessClusterFromSnapshot" id="shady-island.PostgresqlDatabase.forServerlessClusterFromSnapshot"></a>

```typescript
import { PostgresqlDatabase } from 'shady-island'

PostgresqlDatabase.forServerlessClusterFromSnapshot(scope: Construct, id: string, cluster: ServerlessClusterFromSnapshot, options: PostgresqlDatabaseForServerlessClusterOptions)
```

Create a new PostgresqlDatabase inside a DatabaseClusterFromSnapshot.

This method automatically adds the cluster to the CloudFormation
dependencies of the CDK Trigger.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.PostgresqlDatabase.forServerlessClusterFromSnapshot.parameter.scope"></a>

- *Type:* constructs.Construct

The Construct that contains this one.

---

###### `id`<sup>Required</sup> <a name="id" id="shady-island.PostgresqlDatabase.forServerlessClusterFromSnapshot.parameter.id"></a>

- *Type:* string

The identifier of this construct.

---

###### `cluster`<sup>Required</sup> <a name="cluster" id="shady-island.PostgresqlDatabase.forServerlessClusterFromSnapshot.parameter.cluster"></a>

- *Type:* aws-cdk-lib.aws_rds.ServerlessClusterFromSnapshot

The database cluster construct.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.PostgresqlDatabase.forServerlessClusterFromSnapshot.parameter.options"></a>

- *Type:* <a href="#shady-island.PostgresqlDatabaseForServerlessClusterOptions">PostgresqlDatabaseForServerlessClusterOptions</a>

The configuration properties for this construct.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.PostgresqlDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.PostgresqlDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database/catalog. |
| <code><a href="#shady-island.PostgresqlDatabase.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The cluster or instance endpoint. |
| <code><a href="#shady-island.PostgresqlDatabase.property.trigger">trigger</a></code> | <code>aws-cdk-lib.triggers.ITrigger</code> | The CDK Trigger that kicks off the process. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.PostgresqlDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="shady-island.PostgresqlDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database/catalog.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="shady-island.PostgresqlDatabase.property.endpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The cluster or instance endpoint.

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="shady-island.PostgresqlDatabase.property.trigger"></a>

```typescript
public readonly trigger: ITrigger;
```

- *Type:* aws-cdk-lib.triggers.ITrigger

The CDK Trigger that kicks off the process.

You can further customize when the trigger fires using `executeAfter`.

---


### RunnableFargateTask <a name="RunnableFargateTask" id="shady-island.RunnableFargateTask"></a>

- *Implements:* <a href="#shady-island.IRunnableFargateTask">IRunnableFargateTask</a>

An RunnableFargateTask construct.

#### Initializers <a name="Initializers" id="shady-island.RunnableFargateTask.Initializer"></a>

```typescript
import { RunnableFargateTask } from 'shady-island'

new RunnableFargateTask(scope: Construct, id: string, props: RunnableFargateTaskProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.RunnableFargateTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.RunnableFargateTask.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.RunnableFargateTask.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.RunnableFargateTaskProps">RunnableFargateTaskProps</a></code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.RunnableFargateTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.RunnableFargateTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.RunnableFargateTask.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.RunnableFargateTaskProps">RunnableFargateTaskProps</a>

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.RunnableFargateTask.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="shady-island.RunnableFargateTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.RunnableFargateTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.RunnableFargateTask.isConstruct"></a>

```typescript
import { RunnableFargateTask } from 'shady-island'

RunnableFargateTask.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.RunnableFargateTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.RunnableFargateTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.RunnableFargateTask.property.task">task</a></code> | <code><a href="#shady-island.IFargateTask">IFargateTask</a></code> | The FargateTask in this construct. |
| <code><a href="#shady-island.RunnableFargateTask.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.FargateTaskDefinition</code> | The FargateTaskDefinition in this construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.RunnableFargateTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `task`<sup>Required</sup> <a name="task" id="shady-island.RunnableFargateTask.property.task"></a>

```typescript
public readonly task: IFargateTask;
```

- *Type:* <a href="#shady-island.IFargateTask">IFargateTask</a>

The FargateTask in this construct.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="shady-island.RunnableFargateTask.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: FargateTaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.FargateTaskDefinition

The FargateTaskDefinition in this construct.

---


### SecretHttpHeader <a name="SecretHttpHeader" id="shady-island.networking.SecretHttpHeader"></a>

- *Implements:* shady-island.networking.ISecretHttpHeader

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
| <code><a href="#shady-island.networking.SecretHttpHeader.Initializer.parameter.props">props</a></code> | <code>shady-island.networking.SecretHttpHeaderProps</code> | - The configuration properties. |

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

- *Type:* shady-island.networking.SecretHttpHeaderProps

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
| <code><a href="#shady-island.networking.WebLoadBalancing.Initializer.parameter.props">props</a></code> | <code>shady-island.networking.WebLoadBalancingProps</code> | - Initialization properties for this construct. |

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

- *Type:* shady-island.networking.WebLoadBalancingProps

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

- *Type:* shady-island.networking.TargetOptions

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
| <code><a href="#shady-island.networking.WebLoadBalancing.property.secretHeader">secretHeader</a></code> | <code>shady-island.networking.ISecretHttpHeader</code> | The secret header (if `requireSecretHeader` was set to `true`). |

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

- *Type:* shady-island.networking.ISecretHttpHeader

The secret header (if `requireSecretHeader` was set to `true`).

---


### Workload <a name="Workload" id="shady-island.Workload"></a>

A collection of Stacks in an Environment representing a deployment Tier.

Consider deriving a subclass of `Workload` and creating your `Stack` objects
within its constructor.

The difference between this class and a `Stage` is that a `Stage` is meant to
be deployed with CDK Pipelines. This class can be used with `cdk deploy`.
This class also provides context loading capabilities.

It is an anti-pattern to provide a `Workload` instance as the parent scope to
the `aws-cdk-lib.Stack` constructor. You should either use the
`createStack()` method, create your own sub-class of `Stack` and provide a
`Workload` instance as the parent scope, or use the `import()` method to
essentially _import_ a `Stack` and its constructs into a `Workload` without
changing its scope.

#### Initializers <a name="Initializers" id="shady-island.Workload.Initializer"></a>

```typescript
import { Workload } from 'shady-island'

new Workload(scope: Construct, id: string, props: WorkloadProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.Workload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The construct scope. |
| <code><a href="#shady-island.Workload.Initializer.parameter.id">id</a></code> | <code>string</code> | - The construct ID. |
| <code><a href="#shady-island.Workload.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.WorkloadProps">WorkloadProps</a></code> | - The constructor options. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.Workload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The construct scope.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.Workload.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.Workload.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.WorkloadProps">WorkloadProps</a>

The constructor options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.Workload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.Workload.createStack">createStack</a></code> | Adds a stack to the Workload. |
| <code><a href="#shady-island.Workload.import">import</a></code> | Forces a return value for `Workload.of` for one or more `Stack` objects. |

---

##### `toString` <a name="toString" id="shady-island.Workload.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createStack` <a name="createStack" id="shady-island.Workload.createStack"></a>

```typescript
public createStack(id: string, props?: StackProps): Stack
```

Adds a stack to the Workload.

This method will return a `Stack` with this Workload as its scope. By
default, the `stackName` property provided to the `Stack` will be this
Workload's `workloadName`, its `tier`, and the value of the `id`
parameter separated by hyphens, all in lowercase.

*Example*

```typescript
const exampleDev = new Workload(app, 'Example', {
  tier: Tier.DEVELOPMENT,
  env: { account: '123456789012', region: 'us-east-1' },
});
const networkStack = exampleDev.createStack('Network', {});
assert.strictEqual(networkStack.stackName, 'example-dev-network').

You can override the `env` and `stackName` properties in the `props`
argument if desired.

The stack will have a `DeploymentTier` tag added, set to the tier label.
```


###### `id`<sup>Required</sup> <a name="id" id="shady-island.Workload.createStack.parameter.id"></a>

- *Type:* string

The Stack construct id (e.g. "Network").

---

###### `props`<sup>Optional</sup> <a name="props" id="shady-island.Workload.createStack.parameter.props"></a>

- *Type:* aws-cdk-lib.StackProps

The new Stack properties.

---

##### `import` <a name="import" id="shady-island.Workload.import"></a>

```typescript
public import(stacks: Stack): void
```

Forces a return value for `Workload.of` for one or more `Stack` objects.

Normally, a construct must be within the scope of the `Workload` instance,
such as a construct that is a descendant of a `Stack` returned from
`createStack()`.

That means that any `Stack` instances you created in your CDK application
_before_ installing the `shady-island` library would not be able to be part
of a `Workload` unless you changed the `scope` argument of the `Stack`
constructor from the `App` or `Stage` to the desired `Workload` instance.
However, that's bad news for a `Stack` that has already been deployed to
CloudFormation because the resource identifier of persistent child
constructs (e.g. RDS databases, S3 buckets) would change.

A successful call to this method will register the provided `Stack` objects
and all their construct descendants as members of that `Workload` instance.
Calling `Workload.of()` with any of the provided `Stack` objects or their
descendant constructs will return that `Workload` instance.

If any of the `Stack` objects provided to this method already belong to a
different `Workload` object, or whose parent scope is not identical to the
parent scope of this `Workload` (i.e. the `Stage` or the `App`), an error
will be thrown.

###### `stacks`<sup>Required</sup> <a name="stacks" id="shady-island.Workload.import.parameter.stacks"></a>

- *Type:* aws-cdk-lib.Stack

The `Stack` instances to import to this `Workload`.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.Workload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#shady-island.Workload.isWorkload">isWorkload</a></code> | Test whether the given construct is a Workload. |
| <code><a href="#shady-island.Workload.of">of</a></code> | Return the Workload the construct is contained within, fails if there is no workload up the tree. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.Workload.isConstruct"></a>

```typescript
import { Workload } from 'shady-island'

Workload.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.Workload.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isWorkload` <a name="isWorkload" id="shady-island.Workload.isWorkload"></a>

```typescript
import { Workload } from 'shady-island'

Workload.isWorkload(x: any)
```

Test whether the given construct is a Workload.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.Workload.isWorkload.parameter.x"></a>

- *Type:* any

The value to test.

---

##### `of` <a name="of" id="shady-island.Workload.of"></a>

```typescript
import { Workload } from 'shady-island'

Workload.of(construct: IConstruct)
```

Return the Workload the construct is contained within, fails if there is no workload up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="shady-island.Workload.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct whose parent nodes will be searched.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.Workload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.Workload.property.stacks">stacks</a></code> | <code>aws-cdk-lib.Stack[]</code> | *No description.* |
| <code><a href="#shady-island.Workload.property.tier">tier</a></code> | <code><a href="#shady-island.Tier">Tier</a></code> | The deployment tier. |
| <code><a href="#shady-island.Workload.property.workloadName">workloadName</a></code> | <code>string</code> | The prefix used in the default `stackName` provided to child Stacks. |
| <code><a href="#shady-island.Workload.property.account">account</a></code> | <code>string</code> | The default account for all resources defined within this workload. |
| <code><a href="#shady-island.Workload.property.publicDomainName">publicDomainName</a></code> | <code>string</code> | The domain name to use for resources that expose public endpoints. |
| <code><a href="#shady-island.Workload.property.region">region</a></code> | <code>string</code> | The default region for all resources defined within this workload. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.Workload.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `stacks`<sup>Required</sup> <a name="stacks" id="shady-island.Workload.property.stacks"></a>

```typescript
public readonly stacks: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

---

##### `tier`<sup>Required</sup> <a name="tier" id="shady-island.Workload.property.tier"></a>

```typescript
public readonly tier: Tier;
```

- *Type:* <a href="#shady-island.Tier">Tier</a>

The deployment tier.

---

##### `workloadName`<sup>Required</sup> <a name="workloadName" id="shady-island.Workload.property.workloadName"></a>

```typescript
public readonly workloadName: string;
```

- *Type:* string

The prefix used in the default `stackName` provided to child Stacks.

---

##### `account`<sup>Optional</sup> <a name="account" id="shady-island.Workload.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The default account for all resources defined within this workload.

---

##### `publicDomainName`<sup>Optional</sup> <a name="publicDomainName" id="shady-island.Workload.property.publicDomainName"></a>

```typescript
public readonly publicDomainName: string;
```

- *Type:* string
- *Default:* If `baseDomainName` was empty, this will be `undefined`

The domain name to use for resources that expose public endpoints.

You can use `Workload.of(this).publicDomainName` as the `zoneName` of a
Route 53 hosted zone.

Any construct that creates public DNS resources (e.g. those of API Gateway,
Application Load Balancing, CloudFront) can use this property to format
a FQDN for itself by adding a subdomain.

---

*Example*

```typescript
const app = new App();
const workload = new Workload(app, "Foobar", {
  tier: Tier.PRODUCTION,
  baseDomainName: 'example.com'
});
assert.strictEqual(workload.publicDomainName, 'prod.foobar.example.com');
const stack = workload.createStack("DNS");
const hostedZone = new HostedZone(stack, "HostedZone", {
  zoneName: `${workload.publicDomainName}`
});
const api = new RestApi(stack, "API", {
  restApiName: "foobar",
  domainName: { domainName: `api.${workload.publicDomainName}` },
});
```


##### `region`<sup>Optional</sup> <a name="region" id="shady-island.Workload.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The default region for all resources defined within this workload.

---


## Structs <a name="Structs" id="Structs"></a>

### AssignOnLaunchProps <a name="AssignOnLaunchProps" id="shady-island.AssignOnLaunchProps"></a>

Properties for creating a new {@link AssignOnLaunch}.

#### Initializer <a name="Initializer" id="shady-island.AssignOnLaunchProps.Initializer"></a>

```typescript
import { AssignOnLaunchProps } from 'shady-island'

const assignOnLaunchProps: AssignOnLaunchProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.AssignOnLaunchProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC whose subnets will be configured. |
| <code><a href="#shady-island.AssignOnLaunchProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Which subnets to assign IPv6 addresses upon ENI creation. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.AssignOnLaunchProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC whose subnets will be configured.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.AssignOnLaunchProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Which subnets to assign IPv6 addresses upon ENI creation.

---

### BaseDatabaseOptions <a name="BaseDatabaseOptions" id="shady-island.BaseDatabaseOptions"></a>

These options cannot be determined from existing Database constructs.

#### Initializer <a name="Initializer" id="shady-island.BaseDatabaseOptions.Initializer"></a>

```typescript
import { BaseDatabaseOptions } from 'shady-island'

const baseDatabaseOptions: BaseDatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.BaseDatabaseOptions.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database/catalog to create. |
| <code><a href="#shady-island.BaseDatabaseOptions.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group for the Lambda function. |
| <code><a href="#shady-island.BaseDatabaseOptions.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The type of subnets in the VPC where the Lambda function will run. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="shady-island.BaseDatabaseOptions.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="shady-island.BaseDatabaseOptions.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.BaseDatabaseOptions.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

### BaseDatabaseProps <a name="BaseDatabaseProps" id="shady-island.BaseDatabaseProps"></a>

The properties for a database.

#### Initializer <a name="Initializer" id="shady-island.BaseDatabaseProps.Initializer"></a>

```typescript
import { BaseDatabaseProps } from 'shady-island'

const baseDatabaseProps: BaseDatabaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.BaseDatabaseProps.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database/catalog to create. |
| <code><a href="#shady-island.BaseDatabaseProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group for the Lambda function. |
| <code><a href="#shady-island.BaseDatabaseProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The type of subnets in the VPC where the Lambda function will run. |
| <code><a href="#shady-island.BaseDatabaseProps.property.adminSecret">adminSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | A Secrets Manager secret that contains administrative credentials. |
| <code><a href="#shady-island.BaseDatabaseProps.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The cluster or instance endpoint. |
| <code><a href="#shady-island.BaseDatabaseProps.property.target">target</a></code> | <code>aws-cdk-lib.aws_ec2.IConnectable</code> | The target service or database. |
| <code><a href="#shady-island.BaseDatabaseProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the Lambda function will run. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="shady-island.BaseDatabaseProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="shady-island.BaseDatabaseProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.BaseDatabaseProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Required</sup> <a name="adminSecret" id="shady-island.BaseDatabaseProps.property.adminSecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

A Secrets Manager secret that contains administrative credentials.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="shady-island.BaseDatabaseProps.property.endpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The cluster or instance endpoint.

---

##### `target`<sup>Required</sup> <a name="target" id="shady-island.BaseDatabaseProps.property.target"></a>

```typescript
public readonly target: IConnectable;
```

- *Type:* aws-cdk-lib.aws_ec2.IConnectable

The target service or database.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.BaseDatabaseProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the Lambda function will run.

---

### BaseFargateTaskProps <a name="BaseFargateTaskProps" id="shady-island.BaseFargateTaskProps"></a>

Common parameters for Fargate Tasks.

#### Initializer <a name="Initializer" id="shady-island.BaseFargateTaskProps.Initializer"></a>

```typescript
import { BaseFargateTaskProps } from 'shady-island'

const baseFargateTaskProps: BaseFargateTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.BaseFargateTaskProps.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean</code> | Specifies whether the task's elastic network interface receives a public IP address. |
| <code><a href="#shady-island.BaseFargateTaskProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | Existing security groups to use for your task. |
| <code><a href="#shady-island.BaseFargateTaskProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets to associate with the task. |

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="shady-island.BaseFargateTaskProps.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether the task's elastic network interface receives a public IP address.

If true, the task will receive a public IP address.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="shady-island.BaseFargateTaskProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* a new security group will be created.

Existing security groups to use for your task.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.BaseFargateTaskProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* Public subnets if `assignPublicIp` is set, otherwise the first available one of Private, Isolated, Public, in that order.

The subnets to associate with the task.

---

### CidrContextProps <a name="CidrContextProps" id="shady-island.CidrContextProps"></a>

Properties for creating a new {@link CidrContext}.

#### Initializer <a name="Initializer" id="shady-island.CidrContextProps.Initializer"></a>

```typescript
import { CidrContextProps } from 'shady-island'

const cidrContextProps: CidrContextProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.CidrContextProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC whose subnets will be configured. |
| <code><a href="#shady-island.CidrContextProps.property.addressPool">addressPool</a></code> | <code>string</code> | The ID of a BYOIP IPv6 address pool from which to allocate the CIDR block. |
| <code><a href="#shady-island.CidrContextProps.property.assignAddressOnLaunch">assignAddressOnLaunch</a></code> | <code>boolean</code> | Whether this VPC should auto-assign an IPv6 address to launched ENIs. |
| <code><a href="#shady-island.CidrContextProps.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | An IPv6 CIDR block from the IPv6 address pool to use for this VPC. |
| <code><a href="#shady-island.CidrContextProps.property.cidrCount">cidrCount</a></code> | <code>number</code> | Split the CIDRs into this many groups (by default one for each subnet). |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.CidrContextProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC whose subnets will be configured.

---

##### `addressPool`<sup>Optional</sup> <a name="addressPool" id="shady-island.CidrContextProps.property.addressPool"></a>

```typescript
public readonly addressPool: string;
```

- *Type:* string

The ID of a BYOIP IPv6 address pool from which to allocate the CIDR block.

If this parameter is not specified or is undefined, the CIDR block will be
provided by AWS.

---

##### ~~`assignAddressOnLaunch`~~<sup>Optional</sup> <a name="assignAddressOnLaunch" id="shady-island.CidrContextProps.property.assignAddressOnLaunch"></a>

- *Deprecated:* - Launch templates now support specifying IPv6 addresses

```typescript
public readonly assignAddressOnLaunch: boolean;
```

- *Type:* boolean

Whether this VPC should auto-assign an IPv6 address to launched ENIs.

True by default.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="shady-island.CidrContextProps.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

An IPv6 CIDR block from the IPv6 address pool to use for this VPC.

The {@link EnableIpv6Props#addressPool } attribute is required if this
parameter is specified.

---

##### `cidrCount`<sup>Optional</sup> <a name="cidrCount" id="shady-island.CidrContextProps.property.cidrCount"></a>

```typescript
public readonly cidrCount: number;
```

- *Type:* number

Split the CIDRs into this many groups (by default one for each subnet).

---

### ContainerImagePipelineProps <a name="ContainerImagePipelineProps" id="shady-island.automation.ContainerImagePipelineProps"></a>

Properties for the ContainerImagePipeline constructor.

#### Initializer <a name="Initializer" id="shady-island.automation.ContainerImagePipelineProps.Initializer"></a>

```typescript
import { automation } from 'shady-island'

const containerImagePipelineProps: automation.ContainerImagePipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.ContainerImagePipelineProps.property.container">container</a></code> | <code>string</code> | The name of the container in the task definition to update. |
| <code><a href="#shady-island.automation.ContainerImagePipelineProps.property.repository">repository</a></code> | <code>aws-cdk-lib.aws_ecr.IRepository</code> | The ECR repository where images will be pushed. |
| <code><a href="#shady-island.automation.ContainerImagePipelineProps.property.service">service</a></code> | <code>aws-cdk-lib.aws_ecs.IBaseService</code> | The ECS service to update when an image is pushed to the ECR repository. |
| <code><a href="#shady-island.automation.ContainerImagePipelineProps.property.artifactBucket">artifactBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | A custom bucket for artifacts. |
| <code><a href="#shady-island.automation.ContainerImagePipelineProps.property.pipelineType">pipelineType</a></code> | <code>aws-cdk-lib.aws_codepipeline.PipelineType</code> | The pipeline type (V1 or V2). |
| <code><a href="#shady-island.automation.ContainerImagePipelineProps.property.tag">tag</a></code> | <code>string</code> | The container image tag to observe for changes in the ECR repository. |

---

##### `container`<sup>Required</sup> <a name="container" id="shady-island.automation.ContainerImagePipelineProps.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

The name of the container in the task definition to update.

---

##### `repository`<sup>Required</sup> <a name="repository" id="shady-island.automation.ContainerImagePipelineProps.property.repository"></a>

```typescript
public readonly repository: IRepository;
```

- *Type:* aws-cdk-lib.aws_ecr.IRepository

The ECR repository where images will be pushed.

---

##### `service`<sup>Required</sup> <a name="service" id="shady-island.automation.ContainerImagePipelineProps.property.service"></a>

```typescript
public readonly service: IBaseService;
```

- *Type:* aws-cdk-lib.aws_ecs.IBaseService

The ECS service to update when an image is pushed to the ECR repository.

---

##### `artifactBucket`<sup>Optional</sup> <a name="artifactBucket" id="shady-island.automation.ContainerImagePipelineProps.property.artifactBucket"></a>

```typescript
public readonly artifactBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* A new bucket will be created

A custom bucket for artifacts.

---

##### `pipelineType`<sup>Optional</sup> <a name="pipelineType" id="shady-island.automation.ContainerImagePipelineProps.property.pipelineType"></a>

```typescript
public readonly pipelineType: PipelineType;
```

- *Type:* aws-cdk-lib.aws_codepipeline.PipelineType
- *Default:* V1

The pipeline type (V1 or V2).

---

##### `tag`<sup>Optional</sup> <a name="tag" id="shady-island.automation.ContainerImagePipelineProps.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string
- *Default:* "latest"

The container image tag to observe for changes in the ECR repository.

---

### ContextLoadingStageProps <a name="ContextLoadingStageProps" id="shady-island.ContextLoadingStageProps"></a>

Constructor properties for ContextLoadingStage.

#### Initializer <a name="Initializer" id="shady-island.ContextLoadingStageProps.Initializer"></a>

```typescript
import { ContextLoadingStageProps } from 'shady-island'

const contextLoadingStageProps: ContextLoadingStageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.ContextLoadingStageProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | Default AWS environment (account/region) for `Stack`s in this `Stage`. |
| <code><a href="#shady-island.ContextLoadingStageProps.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which to emit synthesized artifacts. |
| <code><a href="#shady-island.ContextLoadingStageProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#shady-island.ContextLoadingStageProps.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#shady-island.ContextLoadingStageProps.property.stageName">stageName</a></code> | <code>string</code> | Name of this stage. |
| <code><a href="#shady-island.ContextLoadingStageProps.property.contextFile">contextFile</a></code> | <code>string</code> | The filesystem path to a JSON file that contains context values to load. |

---

##### `env`<sup>Optional</sup> <a name="env" id="shady-island.ContextLoadingStageProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environments should be configured on the `Stack`s.

Default AWS environment (account/region) for `Stack`s in this `Stage`.

Stacks defined inside this `Stage` with either `region` or `account` missing
from its env will use the corresponding field given here.

If either `region` or `account`is is not configured for `Stack` (either on
the `Stack` itself or on the containing `Stage`), the Stack will be
*environment-agnostic*.

Environment-agnostic stacks can be deployed to any environment, may not be
able to take advantage of all features of the CDK. For example, they will
not be able to use environmental context lookups, will not automatically
translate Service Principals to the right format based on the environment's
AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this Stage to
new Stage(app, 'Stage1', {
  env: { account: '123456789012', region: 'us-east-1' },
});

// Use the CLI's current credentials to determine the target environment
new Stage(app, 'Stage2', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
```


##### `outdir`<sup>Optional</sup> <a name="outdir" id="shady-island.ContextLoadingStageProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* for nested stages, outdir will be determined as a relative directory to the outdir of the app. For apps, if outdir is not specified, a temporary directory will be created.

The output directory into which to emit synthesized artifacts.

Can only be specified if this stage is the root stage (the app). If this is
specified and this stage is nested within another stage, an error will be
thrown.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="shady-island.ContextLoadingStageProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `policyValidationBeta1`<sup>Optional</sup> <a name="policyValidationBeta1" id="shady-island.ContextLoadingStageProps.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="shady-island.ContextLoadingStageProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string
- *Default:* Derived from the id.

Name of this stage.

---

##### `contextFile`<sup>Optional</sup> <a name="contextFile" id="shady-island.ContextLoadingStageProps.property.contextFile"></a>

```typescript
public readonly contextFile: string;
```

- *Type:* string

The filesystem path to a JSON file that contains context values to load.

Using this property allows you to load different context values within each
Stage, directly from a file you can check into source control.

---

### DeploymentTierStageProps <a name="DeploymentTierStageProps" id="shady-island.DeploymentTierStageProps"></a>

Constructor properties for DeploymentTierStage.

#### Initializer <a name="Initializer" id="shady-island.DeploymentTierStageProps.Initializer"></a>

```typescript
import { DeploymentTierStageProps } from 'shady-island'

const deploymentTierStageProps: DeploymentTierStageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.DeploymentTierStageProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | Default AWS environment (account/region) for `Stack`s in this `Stage`. |
| <code><a href="#shady-island.DeploymentTierStageProps.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which to emit synthesized artifacts. |
| <code><a href="#shady-island.DeploymentTierStageProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#shady-island.DeploymentTierStageProps.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#shady-island.DeploymentTierStageProps.property.stageName">stageName</a></code> | <code>string</code> | Name of this stage. |
| <code><a href="#shady-island.DeploymentTierStageProps.property.contextFile">contextFile</a></code> | <code>string</code> | The filesystem path to a JSON file that contains context values to load. |
| <code><a href="#shady-island.DeploymentTierStageProps.property.tier">tier</a></code> | <code><a href="#shady-island.Tier">Tier</a></code> | The deployment tier. |
| <code><a href="#shady-island.DeploymentTierStageProps.property.addTag">addTag</a></code> | <code>boolean</code> | Whether a `DeploymentTier` tag is added to nested constructs. |

---

##### `env`<sup>Optional</sup> <a name="env" id="shady-island.DeploymentTierStageProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environments should be configured on the `Stack`s.

Default AWS environment (account/region) for `Stack`s in this `Stage`.

Stacks defined inside this `Stage` with either `region` or `account` missing
from its env will use the corresponding field given here.

If either `region` or `account`is is not configured for `Stack` (either on
the `Stack` itself or on the containing `Stage`), the Stack will be
*environment-agnostic*.

Environment-agnostic stacks can be deployed to any environment, may not be
able to take advantage of all features of the CDK. For example, they will
not be able to use environmental context lookups, will not automatically
translate Service Principals to the right format based on the environment's
AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this Stage to
new Stage(app, 'Stage1', {
  env: { account: '123456789012', region: 'us-east-1' },
});

// Use the CLI's current credentials to determine the target environment
new Stage(app, 'Stage2', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
```


##### `outdir`<sup>Optional</sup> <a name="outdir" id="shady-island.DeploymentTierStageProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* for nested stages, outdir will be determined as a relative directory to the outdir of the app. For apps, if outdir is not specified, a temporary directory will be created.

The output directory into which to emit synthesized artifacts.

Can only be specified if this stage is the root stage (the app). If this is
specified and this stage is nested within another stage, an error will be
thrown.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="shady-island.DeploymentTierStageProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `policyValidationBeta1`<sup>Optional</sup> <a name="policyValidationBeta1" id="shady-island.DeploymentTierStageProps.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="shady-island.DeploymentTierStageProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string
- *Default:* Derived from the id.

Name of this stage.

---

##### `contextFile`<sup>Optional</sup> <a name="contextFile" id="shady-island.DeploymentTierStageProps.property.contextFile"></a>

```typescript
public readonly contextFile: string;
```

- *Type:* string

The filesystem path to a JSON file that contains context values to load.

Using this property allows you to load different context values within each
Stage, directly from a file you can check into source control.

---

##### `tier`<sup>Required</sup> <a name="tier" id="shady-island.DeploymentTierStageProps.property.tier"></a>

```typescript
public readonly tier: Tier;
```

- *Type:* <a href="#shady-island.Tier">Tier</a>

The deployment tier.

---

##### `addTag`<sup>Optional</sup> <a name="addTag" id="shady-island.DeploymentTierStageProps.property.addTag"></a>

```typescript
public readonly addTag: boolean;
```

- *Type:* boolean
- *Default:* true

Whether a `DeploymentTier` tag is added to nested constructs.

---

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

### EncryptedFileSystemProps <a name="EncryptedFileSystemProps" id="shady-island.EncryptedFileSystemProps"></a>

Constructor parameters for EncryptedFileSystem.

The `encrypted` argument is ignored.

#### Initializer <a name="Initializer" id="shady-island.EncryptedFileSystemProps.Initializer"></a>

```typescript
import { EncryptedFileSystemProps } from 'shady-island'

const encryptedFileSystemProps: EncryptedFileSystemProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC to launch the file system in. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.allowAnonymousAccess">allowAnonymousAccess</a></code> | <code>boolean</code> | Allow access from anonymous client that doesn't use IAM authentication. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.enableAutomaticBackups">enableAutomaticBackups</a></code> | <code>boolean</code> | Whether to enable automatic backups for the file system. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.encrypted">encrypted</a></code> | <code>boolean</code> | Defines if the data at rest in the file system is encrypted or not. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.fileSystemName">fileSystemName</a></code> | <code>string</code> | The file system's name. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.fileSystemPolicy">fileSystemPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | File system policy is an IAM resource policy used to control NFS access to an EFS file system. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS key used for encryption. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.lifecyclePolicy">lifecyclePolicy</a></code> | <code>aws-cdk-lib.aws_efs.LifecyclePolicy</code> | A policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.oneZone">oneZone</a></code> | <code>boolean</code> | Whether this is a One Zone file system. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.outOfInfrequentAccessPolicy">outOfInfrequentAccessPolicy</a></code> | <code>aws-cdk-lib.aws_efs.OutOfInfrequentAccessPolicy</code> | A policy used by EFS lifecycle management to transition files from Infrequent Access (IA) storage class to primary storage class. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.performanceMode">performanceMode</a></code> | <code>aws-cdk-lib.aws_efs.PerformanceMode</code> | The performance mode that the file system will operate under. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.provisionedThroughputPerSecond">provisionedThroughputPerSecond</a></code> | <code>aws-cdk-lib.Size</code> | Provisioned throughput for the file system. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply to the file system. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.replicationOverwriteProtection">replicationOverwriteProtection</a></code> | <code>aws-cdk-lib.aws_efs.ReplicationOverwriteProtection</code> | Whether to enable the filesystem's replication overwrite protection or not. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security Group to assign to this file system. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.throughputMode">throughputMode</a></code> | <code>aws-cdk-lib.aws_efs.ThroughputMode</code> | Enum to mention the throughput mode of the file system. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.transitionToArchivePolicy">transitionToArchivePolicy</a></code> | <code>aws-cdk-lib.aws_efs.LifecyclePolicy</code> | The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage. |
| <code><a href="#shady-island.EncryptedFileSystemProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Which subnets to place the mount target in the VPC. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.EncryptedFileSystemProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC to launch the file system in.

---

##### `allowAnonymousAccess`<sup>Optional</sup> <a name="allowAnonymousAccess" id="shady-island.EncryptedFileSystemProps.property.allowAnonymousAccess"></a>

```typescript
public readonly allowAnonymousAccess: boolean;
```

- *Type:* boolean
- *Default:* false when using `grantRead`, `grantWrite`, `grantRootAccess` or set `@aws-cdk/aws-efs:denyAnonymousAccess` feature flag, otherwise true

Allow access from anonymous client that doesn't use IAM authentication.

---

##### `enableAutomaticBackups`<sup>Optional</sup> <a name="enableAutomaticBackups" id="shady-island.EncryptedFileSystemProps.property.enableAutomaticBackups"></a>

```typescript
public readonly enableAutomaticBackups: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable automatic backups for the file system.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="shady-island.EncryptedFileSystemProps.property.encrypted"></a>

```typescript
public readonly encrypted: boolean;
```

- *Type:* boolean
- *Default:* If your application has the '@aws-cdk/aws-efs:defaultEncryptionAtRest' feature flag set, the default is true, otherwise, the default is false.

Defines if the data at rest in the file system is encrypted or not.

> [https://docs.aws.amazon.com/cdk/latest/guide/featureflags.html](https://docs.aws.amazon.com/cdk/latest/guide/featureflags.html)

---

##### `fileSystemName`<sup>Optional</sup> <a name="fileSystemName" id="shady-island.EncryptedFileSystemProps.property.fileSystemName"></a>

```typescript
public readonly fileSystemName: string;
```

- *Type:* string
- *Default:* CDK generated name

The file system's name.

---

##### `fileSystemPolicy`<sup>Optional</sup> <a name="fileSystemPolicy" id="shady-island.EncryptedFileSystemProps.property.fileSystemPolicy"></a>

```typescript
public readonly fileSystemPolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument
- *Default:* none

File system policy is an IAM resource policy used to control NFS access to an EFS file system.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="shady-island.EncryptedFileSystemProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* if 'encrypted' is true, the default key for EFS (/aws/elasticfilesystem) is used

The KMS key used for encryption.

This is required to encrypt the data at rest if

---

##### `lifecyclePolicy`<sup>Optional</sup> <a name="lifecyclePolicy" id="shady-island.EncryptedFileSystemProps.property.lifecyclePolicy"></a>

```typescript
public readonly lifecyclePolicy: LifecyclePolicy;
```

- *Type:* aws-cdk-lib.aws_efs.LifecyclePolicy
- *Default:* None. EFS will not transition files to the IA storage class.

A policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.

---

##### `oneZone`<sup>Optional</sup> <a name="oneZone" id="shady-island.EncryptedFileSystemProps.property.oneZone"></a>

```typescript
public readonly oneZone: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this is a One Zone file system.

If enabled, `performanceMode` must be set to `GENERAL_PURPOSE` and `vpcSubnets` cannot be set.

> [https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type)

---

##### `outOfInfrequentAccessPolicy`<sup>Optional</sup> <a name="outOfInfrequentAccessPolicy" id="shady-island.EncryptedFileSystemProps.property.outOfInfrequentAccessPolicy"></a>

```typescript
public readonly outOfInfrequentAccessPolicy: OutOfInfrequentAccessPolicy;
```

- *Type:* aws-cdk-lib.aws_efs.OutOfInfrequentAccessPolicy
- *Default:* None. EFS will not transition files from IA storage to primary storage.

A policy used by EFS lifecycle management to transition files from Infrequent Access (IA) storage class to primary storage class.

---

##### `performanceMode`<sup>Optional</sup> <a name="performanceMode" id="shady-island.EncryptedFileSystemProps.property.performanceMode"></a>

```typescript
public readonly performanceMode: PerformanceMode;
```

- *Type:* aws-cdk-lib.aws_efs.PerformanceMode
- *Default:* PerformanceMode.GENERAL_PURPOSE

The performance mode that the file system will operate under.

An Amazon EFS file system's performance mode can't be changed after the file system has been created.
Updating this property will replace the file system.

---

##### `provisionedThroughputPerSecond`<sup>Optional</sup> <a name="provisionedThroughputPerSecond" id="shady-island.EncryptedFileSystemProps.property.provisionedThroughputPerSecond"></a>

```typescript
public readonly provisionedThroughputPerSecond: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* none, errors out

Provisioned throughput for the file system.

This is a required property if the throughput mode is set to PROVISIONED.
Must be at least 1MiB/s.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="shady-island.EncryptedFileSystemProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy to apply to the file system.

---

##### `replicationOverwriteProtection`<sup>Optional</sup> <a name="replicationOverwriteProtection" id="shady-island.EncryptedFileSystemProps.property.replicationOverwriteProtection"></a>

```typescript
public readonly replicationOverwriteProtection: ReplicationOverwriteProtection;
```

- *Type:* aws-cdk-lib.aws_efs.ReplicationOverwriteProtection
- *Default:* ReplicationOverwriteProtection.ENABLED

Whether to enable the filesystem's replication overwrite protection or not.

Set false if you want to create a read-only filesystem for use as a replication destination.

> [https://docs.aws.amazon.com/efs/latest/ug/replication-use-cases.html#replicate-existing-destination](https://docs.aws.amazon.com/efs/latest/ug/replication-use-cases.html#replicate-existing-destination)

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="shady-island.EncryptedFileSystemProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* creates new security group which allows all outbound traffic

Security Group to assign to this file system.

---

##### `throughputMode`<sup>Optional</sup> <a name="throughputMode" id="shady-island.EncryptedFileSystemProps.property.throughputMode"></a>

```typescript
public readonly throughputMode: ThroughputMode;
```

- *Type:* aws-cdk-lib.aws_efs.ThroughputMode
- *Default:* ThroughputMode.BURSTING

Enum to mention the throughput mode of the file system.

---

##### `transitionToArchivePolicy`<sup>Optional</sup> <a name="transitionToArchivePolicy" id="shady-island.EncryptedFileSystemProps.property.transitionToArchivePolicy"></a>

```typescript
public readonly transitionToArchivePolicy: LifecyclePolicy;
```

- *Type:* aws-cdk-lib.aws_efs.LifecyclePolicy
- *Default:* None. EFS will not transition files to Archive storage class.

The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.EncryptedFileSystemProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Which subnets to place the mount target in the VPC.

---

### EncryptedLogGroupProps <a name="EncryptedLogGroupProps" id="shady-island.EncryptedLogGroupProps"></a>

Constructor properties for EncryptedLogGroup.

#### Initializer <a name="Initializer" id="shady-island.EncryptedLogGroupProps.Initializer"></a>

```typescript
import { EncryptedLogGroupProps } from 'shady-island'

const encryptedLogGroupProps: EncryptedLogGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.EncryptedLogGroupProps.property.logGroupName">logGroupName</a></code> | <code>string</code> | Name of the log group. |
| <code><a href="#shady-island.EncryptedLogGroupProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key to encrypt the log group with. |
| <code><a href="#shady-island.EncryptedLogGroupProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Whether the key and group should be retained when they are removed from the Stack. |
| <code><a href="#shady-island.EncryptedLogGroupProps.property.retention">retention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | How long, in days, the log contents will be retained. |

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="shady-island.EncryptedLogGroupProps.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Name of the log group.

We need a log group name ahead of time because otherwise the key policy
would create a cyclical dependency.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="shady-island.EncryptedLogGroupProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* A new KMS key will be created

The KMS Key to encrypt the log group with.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="shady-island.EncryptedLogGroupProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

Whether the key and group should be retained when they are removed from the Stack.

---

##### `retention`<sup>Optional</sup> <a name="retention" id="shady-island.EncryptedLogGroupProps.property.retention"></a>

```typescript
public readonly retention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* RetentionDays.TWO_YEARS

How long, in days, the log contents will be retained.

---

### EventTargetProps <a name="EventTargetProps" id="shady-island.EventTargetProps"></a>

Properties to create a new EventBridge Rule Target.

#### Initializer <a name="Initializer" id="shady-island.EventTargetProps.Initializer"></a>

```typescript
import { EventTargetProps } from 'shady-island'

const eventTargetProps: EventTargetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.EventTargetProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to be used as deadLetterQueue. Check out the [considerations for using a dead-letter queue](https://docs.aws.amazon.com/eventbridge/latest/userguide/rule-dlq.html#dlq-considerations). |
| <code><a href="#shady-island.EventTargetProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#shady-island.EventTargetProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#shady-island.EventTargetProps.property.containerOverrides">containerOverrides</a></code> | <code>aws-cdk-lib.aws_events_targets.ContainerOverride[]</code> | Container setting overrides. |
| <code><a href="#shady-island.EventTargetProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Whether or not to enable the execute command functionality for the containers in this task. |
| <code><a href="#shady-island.EventTargetProps.property.launchType">launchType</a></code> | <code>aws-cdk-lib.aws_ecs.LaunchType</code> | Specifies the launch type on which your task is running. |
| <code><a href="#shady-island.EventTargetProps.property.propagateTags">propagateTags</a></code> | <code>aws-cdk-lib.aws_ecs.PropagatedTagSource</code> | Specifies whether to propagate the tags from the task definition to the task. |
| <code><a href="#shady-island.EventTargetProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Existing IAM role to run the ECS task. |
| <code><a href="#shady-island.EventTargetProps.property.tags">tags</a></code> | <code>aws-cdk-lib.aws_events_targets.Tag[]</code> | The metadata that you apply to the task to help you categorize and organize them. |
| <code><a href="#shady-island.EventTargetProps.property.taskCount">taskCount</a></code> | <code>number</code> | How many tasks should be started when this event is triggered. |

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="shady-island.EventTargetProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* no dead-letter queue

The SQS queue to be used as deadLetterQueue. Check out the [considerations for using a dead-letter queue](https://docs.aws.amazon.com/eventbridge/latest/userguide/rule-dlq.html#dlq-considerations).

The events not successfully delivered are automatically retried for a specified period of time,
depending on the retry policy of the target.
If an event is not delivered before all retry attempts are exhausted, it will be sent to the dead letter queue.

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="shady-island.EventTargetProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(24)

The maximum age of a request that Lambda sends to a function for processing.

Minimum value of 60.
Maximum value of 86400.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="shady-island.EventTargetProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 185

The maximum number of times to retry when the function returns an error.

Minimum value of 0.
Maximum value of 185.

---

##### `containerOverrides`<sup>Optional</sup> <a name="containerOverrides" id="shady-island.EventTargetProps.property.containerOverrides"></a>

```typescript
public readonly containerOverrides: ContainerOverride[];
```

- *Type:* aws-cdk-lib.aws_events_targets.ContainerOverride[]

Container setting overrides.

Key is the name of the container to override, value is the
values you want to override.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="shady-island.EventTargetProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* false

Whether or not to enable the execute command functionality for the containers in this task.

If true, this enables execute command functionality on all containers in the task.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="shady-island.EventTargetProps.property.launchType"></a>

```typescript
public readonly launchType: LaunchType;
```

- *Type:* aws-cdk-lib.aws_ecs.LaunchType
- *Default:* 'EC2' if `isEc2Compatible` for the `taskDefinition` is true, otherwise 'FARGATE'

Specifies the launch type on which your task is running.

The launch type that you specify here
must match one of the launch type (compatibilities) of the target task.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="shady-island.EventTargetProps.property.propagateTags"></a>

```typescript
public readonly propagateTags: PropagatedTagSource;
```

- *Type:* aws-cdk-lib.aws_ecs.PropagatedTagSource
- *Default:* Tags will not be propagated

Specifies whether to propagate the tags from the task definition to the task.

If no value is specified, the tags are not propagated.

---

##### `role`<sup>Optional</sup> <a name="role" id="shady-island.EventTargetProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new IAM role is created

Existing IAM role to run the ECS task.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="shady-island.EventTargetProps.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* aws-cdk-lib.aws_events_targets.Tag[]
- *Default:* No additional tags are applied to the task

The metadata that you apply to the task to help you categorize and organize them.

Each tag consists of a key and an optional value, both of which you define.

---

##### `taskCount`<sup>Optional</sup> <a name="taskCount" id="shady-island.EventTargetProps.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number
- *Default:* 1

How many tasks should be started when this event is triggered.

---

### FargateAwsVpcConfiguration <a name="FargateAwsVpcConfiguration" id="shady-island.FargateAwsVpcConfiguration"></a>

The `networkConfiguration.awsvpcConfiguration` values for `ecs.RunTask`.

#### Initializer <a name="Initializer" id="shady-island.FargateAwsVpcConfiguration.Initializer"></a>

```typescript
import { FargateAwsVpcConfiguration } from 'shady-island'

const fargateAwsVpcConfiguration: FargateAwsVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.FargateAwsVpcConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>string</code> | Whether the task's elastic network interface receives a public IP address. |
| <code><a href="#shady-island.FargateAwsVpcConfiguration.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | The IDs of the security groups associated with the task or service. |
| <code><a href="#shady-island.FargateAwsVpcConfiguration.property.subnets">subnets</a></code> | <code>string[]</code> | The IDs of the subnets associated with the task or service. |

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="shady-island.FargateAwsVpcConfiguration.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: string;
```

- *Type:* string

Whether the task's elastic network interface receives a public IP address.

The default value is `DISABLED` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html#cfn-ecs-service-awsvpcconfiguration-assignpublicip](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html#cfn-ecs-service-awsvpcconfiguration-assignpublicip)

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="shady-island.FargateAwsVpcConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

The IDs of the security groups associated with the task or service.

If you don't specify a security group, the default security group for the VPC is used. There's a limit of 5 security groups that can be specified per `AwsVpcConfiguration` .

> All specified security groups must be from the same VPC.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html#cfn-ecs-service-awsvpcconfiguration-securitygroups](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html#cfn-ecs-service-awsvpcconfiguration-securitygroups)

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="shady-island.FargateAwsVpcConfiguration.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

The IDs of the subnets associated with the task or service.

There's a limit of 16 subnets that can be specified per `AwsVpcConfiguration` .

> All specified subnets must be from the same VPC.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html#cfn-ecs-service-awsvpcconfiguration-subnets](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html#cfn-ecs-service-awsvpcconfiguration-subnets)

---

### FargateTaskImageOptions <a name="FargateTaskImageOptions" id="shady-island.FargateTaskImageOptions"></a>

The properties for the FargateTask using an image.

#### Initializer <a name="Initializer" id="shady-island.FargateTaskImageOptions.Initializer"></a>

```typescript
import { FargateTaskImageOptions } from 'shady-island'

const fargateTaskImageOptions: FargateTaskImageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.FargateTaskImageOptions.property.image">image</a></code> | <code>aws-cdk-lib.aws_ecs.ContainerImage</code> | The image used to start a container. |
| <code><a href="#shady-island.FargateTaskImageOptions.property.command">command</a></code> | <code>string[]</code> | The command that's passed to the container. |
| <code><a href="#shady-island.FargateTaskImageOptions.property.containerName">containerName</a></code> | <code>string</code> | The container name value to be specified in the task definition. |
| <code><a href="#shady-island.FargateTaskImageOptions.property.containerPort">containerPort</a></code> | <code>number</code> | The port number on the container that is bound to the user-specified or automatically assigned host port. |
| <code><a href="#shady-island.FargateTaskImageOptions.property.dockerLabels">dockerLabels</a></code> | <code>{[ key: string ]: string}</code> | A key/value map of labels to add to the container. |
| <code><a href="#shady-island.FargateTaskImageOptions.property.enableLogging">enableLogging</a></code> | <code>boolean</code> | Flag to indicate whether to enable logging. |
| <code><a href="#shady-island.FargateTaskImageOptions.property.entryPoint">entryPoint</a></code> | <code>string[]</code> | The entry point that's passed to the container. |
| <code><a href="#shady-island.FargateTaskImageOptions.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to pass to the container. |
| <code><a href="#shady-island.FargateTaskImageOptions.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the task execution IAM role that grants the Amazon ECS container agent permission to call AWS APIs on your behalf. |
| <code><a href="#shady-island.FargateTaskImageOptions.property.family">family</a></code> | <code>string</code> | The name of a family that this task definition is registered to. |
| <code><a href="#shady-island.FargateTaskImageOptions.property.logDriver">logDriver</a></code> | <code>aws-cdk-lib.aws_ecs.LogDriver</code> | The log driver to use. |
| <code><a href="#shady-island.FargateTaskImageOptions.property.secrets">secrets</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ecs.Secret}</code> | The secret to expose to the container as an environment variable. |
| <code><a href="#shady-island.FargateTaskImageOptions.property.taskRole">taskRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The name of the task IAM role that grants containers in the task permission to call AWS APIs on your behalf. |

---

##### `image`<sup>Required</sup> <a name="image" id="shady-island.FargateTaskImageOptions.property.image"></a>

```typescript
public readonly image: ContainerImage;
```

- *Type:* aws-cdk-lib.aws_ecs.ContainerImage
- *Default:* none

The image used to start a container.

Image or taskDefinition must be specified, not both.

---

##### `command`<sup>Optional</sup> <a name="command" id="shady-island.FargateTaskImageOptions.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]
- *Default:* none

The command that's passed to the container.

If there are multiple arguments, make sure that each argument is a separated string in the array.

This parameter maps to `Cmd` in the [Create a container](https://docs.docker.com/engine/api/v1.38/#operation/ContainerCreate) section
of the [Docker Remote API](https://docs.docker.com/engine/api/v1.38/) and the `COMMAND` parameter to
[docker run](https://docs.docker.com/engine/reference/commandline/run/).

For more information about the Docker `CMD` parameter, see https://docs.docker.com/engine/reference/builder/#cmd.

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="shady-island.FargateTaskImageOptions.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string
- *Default:* none

The container name value to be specified in the task definition.

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="shady-island.FargateTaskImageOptions.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number
- *Default:* 80

The port number on the container that is bound to the user-specified or automatically assigned host port.

If you are using containers in a task with the awsvpc or host network mode, exposed ports should be specified using containerPort.
If you are using containers in a task with the bridge network mode and you specify a container port and not a host port,
your container automatically receives a host port in the ephemeral port range.

Port mappings that are automatically assigned in this way do not count toward the 100 reserved ports limit of a container instance.

For more information, see
[hostPort](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PortMapping.html#ECS-Type-PortMapping-hostPort).

---

##### `dockerLabels`<sup>Optional</sup> <a name="dockerLabels" id="shady-island.FargateTaskImageOptions.property.dockerLabels"></a>

```typescript
public readonly dockerLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No labels.

A key/value map of labels to add to the container.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="shady-island.FargateTaskImageOptions.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean;
```

- *Type:* boolean
- *Default:* true

Flag to indicate whether to enable logging.

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="shady-island.FargateTaskImageOptions.property.entryPoint"></a>

```typescript
public readonly entryPoint: string[];
```

- *Type:* string[]
- *Default:* none

The entry point that's passed to the container.

This parameter maps to `Entrypoint` in the [Create a container](https://docs.docker.com/engine/api/v1.38/#operation/ContainerCreate) section
of the [Docker Remote API](https://docs.docker.com/engine/api/v1.38/) and the `--entrypoint` option to
[docker run](https://docs.docker.com/engine/reference/commandline/run/).

For more information about the Docker `ENTRYPOINT` parameter, see https://docs.docker.com/engine/reference/builder/#entrypoint.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="shady-island.FargateTaskImageOptions.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

The environment variables to pass to the container.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="shady-island.FargateTaskImageOptions.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* No value

The name of the task execution IAM role that grants the Amazon ECS container agent permission to call AWS APIs on your behalf.

---

##### `family`<sup>Optional</sup> <a name="family" id="shady-island.FargateTaskImageOptions.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string
- *Default:* Automatically generated name.

The name of a family that this task definition is registered to.

A family groups multiple versions of a task definition.

---

##### `logDriver`<sup>Optional</sup> <a name="logDriver" id="shady-island.FargateTaskImageOptions.property.logDriver"></a>

```typescript
public readonly logDriver: LogDriver;
```

- *Type:* aws-cdk-lib.aws_ecs.LogDriver
- *Default:* AwsLogDriver if enableLogging is true

The log driver to use.

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="shady-island.FargateTaskImageOptions.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: Secret};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ecs.Secret}
- *Default:* No secret environment variables.

The secret to expose to the container as an environment variable.

---

##### `taskRole`<sup>Optional</sup> <a name="taskRole" id="shady-island.FargateTaskImageOptions.property.taskRole"></a>

```typescript
public readonly taskRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A task role is automatically created for you.

The name of the task IAM role that grants containers in the task permission to call AWS APIs on your behalf.

---

### FargateTaskProps <a name="FargateTaskProps" id="shady-island.FargateTaskProps"></a>

Constructor parameters for FargateTask.

#### Initializer <a name="Initializer" id="shady-island.FargateTaskProps.Initializer"></a>

```typescript
import { FargateTaskProps } from 'shady-island'

const fargateTaskProps: FargateTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.FargateTaskProps.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean</code> | Specifies whether the task's elastic network interface receives a public IP address. |
| <code><a href="#shady-island.FargateTaskProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | Existing security groups to use for your task. |
| <code><a href="#shady-island.FargateTaskProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets to associate with the task. |
| <code><a href="#shady-island.FargateTaskProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The name of the cluster that hosts the service. |
| <code><a href="#shady-island.FargateTaskProps.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.FargateTaskDefinition</code> | The task definition that can be launched. |

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="shady-island.FargateTaskProps.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether the task's elastic network interface receives a public IP address.

If true, the task will receive a public IP address.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="shady-island.FargateTaskProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* a new security group will be created.

Existing security groups to use for your task.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.FargateTaskProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* Public subnets if `assignPublicIp` is set, otherwise the first available one of Private, Isolated, Public, in that order.

The subnets to associate with the task.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="shady-island.FargateTaskProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

The name of the cluster that hosts the service.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="shady-island.FargateTaskProps.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: FargateTaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.FargateTaskDefinition

The task definition that can be launched.

---

### MysqlDatabaseForClusterOptions <a name="MysqlDatabaseForClusterOptions" id="shady-island.MysqlDatabaseForClusterOptions"></a>

Properties to specify when using MysqlDatabase.forCluster().

#### Initializer <a name="Initializer" id="shady-island.MysqlDatabaseForClusterOptions.Initializer"></a>

```typescript
import { MysqlDatabaseForClusterOptions } from 'shady-island'

const mysqlDatabaseForClusterOptions: MysqlDatabaseForClusterOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.MysqlDatabaseForClusterOptions.property.certificateAuthoritiesUrl">certificateAuthoritiesUrl</a></code> | <code>string</code> | The URL to the PEM-encoded Certificate Authority file. |
| <code><a href="#shady-island.MysqlDatabaseForClusterOptions.property.characterSet">characterSet</a></code> | <code>string</code> | The database default character set to use. |
| <code><a href="#shady-island.MysqlDatabaseForClusterOptions.property.collation">collation</a></code> | <code>string</code> | The database default collation to use. |
| <code><a href="#shady-island.MysqlDatabaseForClusterOptions.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database/catalog to create. |
| <code><a href="#shady-island.MysqlDatabaseForClusterOptions.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group for the Lambda function. |
| <code><a href="#shady-island.MysqlDatabaseForClusterOptions.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The type of subnets in the VPC where the Lambda function will run. |
| <code><a href="#shady-island.MysqlDatabaseForClusterOptions.property.adminSecret">adminSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | A Secrets Manager secret that contains administrative credentials. |

---

##### `certificateAuthoritiesUrl`<sup>Optional</sup> <a name="certificateAuthoritiesUrl" id="shady-island.MysqlDatabaseForClusterOptions.property.certificateAuthoritiesUrl"></a>

```typescript
public readonly certificateAuthoritiesUrl: string;
```

- *Type:* string
- *Default:* https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem

The URL to the PEM-encoded Certificate Authority file.

Normally, we would just assume the Lambda runtime has the certificates to
trust already installed. Since the current Lambda runtime environments lack
the newer RDS certificate authority certificates, this option can be used
to specify a URL to a remote file containing the CAs.

> [https://github.com/aws/aws-lambda-base-images/issues/123](https://github.com/aws/aws-lambda-base-images/issues/123)

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="shady-island.MysqlDatabaseForClusterOptions.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string
- *Default:* "utf8mb4"

The database default character set to use.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="shady-island.MysqlDatabaseForClusterOptions.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string
- *Default:* rely on MySQL to choose the default collation.

The database default collation to use.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="shady-island.MysqlDatabaseForClusterOptions.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="shady-island.MysqlDatabaseForClusterOptions.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.MysqlDatabaseForClusterOptions.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Optional</sup> <a name="adminSecret" id="shady-island.MysqlDatabaseForClusterOptions.property.adminSecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

A Secrets Manager secret that contains administrative credentials.

---

### MysqlDatabaseForServerlessClusterOptions <a name="MysqlDatabaseForServerlessClusterOptions" id="shady-island.MysqlDatabaseForServerlessClusterOptions"></a>

Properties to specify when using MysqlDatabase.forServerlessCluster().

#### Initializer <a name="Initializer" id="shady-island.MysqlDatabaseForServerlessClusterOptions.Initializer"></a>

```typescript
import { MysqlDatabaseForServerlessClusterOptions } from 'shady-island'

const mysqlDatabaseForServerlessClusterOptions: MysqlDatabaseForServerlessClusterOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.MysqlDatabaseForServerlessClusterOptions.property.certificateAuthoritiesUrl">certificateAuthoritiesUrl</a></code> | <code>string</code> | The URL to the PEM-encoded Certificate Authority file. |
| <code><a href="#shady-island.MysqlDatabaseForServerlessClusterOptions.property.characterSet">characterSet</a></code> | <code>string</code> | The database default character set to use. |
| <code><a href="#shady-island.MysqlDatabaseForServerlessClusterOptions.property.collation">collation</a></code> | <code>string</code> | The database default collation to use. |
| <code><a href="#shady-island.MysqlDatabaseForServerlessClusterOptions.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database/catalog to create. |
| <code><a href="#shady-island.MysqlDatabaseForServerlessClusterOptions.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group for the Lambda function. |
| <code><a href="#shady-island.MysqlDatabaseForServerlessClusterOptions.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The type of subnets in the VPC where the Lambda function will run. |
| <code><a href="#shady-island.MysqlDatabaseForServerlessClusterOptions.property.adminSecret">adminSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | A Secrets Manager secret that contains administrative credentials. |
| <code><a href="#shady-island.MysqlDatabaseForServerlessClusterOptions.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the Lambda function will run. |

---

##### `certificateAuthoritiesUrl`<sup>Optional</sup> <a name="certificateAuthoritiesUrl" id="shady-island.MysqlDatabaseForServerlessClusterOptions.property.certificateAuthoritiesUrl"></a>

```typescript
public readonly certificateAuthoritiesUrl: string;
```

- *Type:* string
- *Default:* https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem

The URL to the PEM-encoded Certificate Authority file.

Normally, we would just assume the Lambda runtime has the certificates to
trust already installed. Since the current Lambda runtime environments lack
the newer RDS certificate authority certificates, this option can be used
to specify a URL to a remote file containing the CAs.

> [https://github.com/aws/aws-lambda-base-images/issues/123](https://github.com/aws/aws-lambda-base-images/issues/123)

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="shady-island.MysqlDatabaseForServerlessClusterOptions.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string
- *Default:* "utf8mb4"

The database default character set to use.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="shady-island.MysqlDatabaseForServerlessClusterOptions.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string
- *Default:* rely on MySQL to choose the default collation.

The database default collation to use.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="shady-island.MysqlDatabaseForServerlessClusterOptions.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="shady-island.MysqlDatabaseForServerlessClusterOptions.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.MysqlDatabaseForServerlessClusterOptions.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Optional</sup> <a name="adminSecret" id="shady-island.MysqlDatabaseForServerlessClusterOptions.property.adminSecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

A Secrets Manager secret that contains administrative credentials.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.MysqlDatabaseForServerlessClusterOptions.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the Lambda function will run.

---

### MysqlDatabaseOptions <a name="MysqlDatabaseOptions" id="shady-island.MysqlDatabaseOptions"></a>

MySQL-specific options.

#### Initializer <a name="Initializer" id="shady-island.MysqlDatabaseOptions.Initializer"></a>

```typescript
import { MysqlDatabaseOptions } from 'shady-island'

const mysqlDatabaseOptions: MysqlDatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.MysqlDatabaseOptions.property.certificateAuthoritiesUrl">certificateAuthoritiesUrl</a></code> | <code>string</code> | The URL to the PEM-encoded Certificate Authority file. |
| <code><a href="#shady-island.MysqlDatabaseOptions.property.characterSet">characterSet</a></code> | <code>string</code> | The database default character set to use. |
| <code><a href="#shady-island.MysqlDatabaseOptions.property.collation">collation</a></code> | <code>string</code> | The database default collation to use. |

---

##### `certificateAuthoritiesUrl`<sup>Optional</sup> <a name="certificateAuthoritiesUrl" id="shady-island.MysqlDatabaseOptions.property.certificateAuthoritiesUrl"></a>

```typescript
public readonly certificateAuthoritiesUrl: string;
```

- *Type:* string
- *Default:* https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem

The URL to the PEM-encoded Certificate Authority file.

Normally, we would just assume the Lambda runtime has the certificates to
trust already installed. Since the current Lambda runtime environments lack
the newer RDS certificate authority certificates, this option can be used
to specify a URL to a remote file containing the CAs.

> [https://github.com/aws/aws-lambda-base-images/issues/123](https://github.com/aws/aws-lambda-base-images/issues/123)

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="shady-island.MysqlDatabaseOptions.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string
- *Default:* "utf8mb4"

The database default character set to use.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="shady-island.MysqlDatabaseOptions.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string
- *Default:* rely on MySQL to choose the default collation.

The database default collation to use.

---

### MysqlDatabaseProps <a name="MysqlDatabaseProps" id="shady-island.MysqlDatabaseProps"></a>

Constructor properties for MysqlDatabase.

#### Initializer <a name="Initializer" id="shady-island.MysqlDatabaseProps.Initializer"></a>

```typescript
import { MysqlDatabaseProps } from 'shady-island'

const mysqlDatabaseProps: MysqlDatabaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.MysqlDatabaseProps.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database/catalog to create. |
| <code><a href="#shady-island.MysqlDatabaseProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group for the Lambda function. |
| <code><a href="#shady-island.MysqlDatabaseProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The type of subnets in the VPC where the Lambda function will run. |
| <code><a href="#shady-island.MysqlDatabaseProps.property.adminSecret">adminSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | A Secrets Manager secret that contains administrative credentials. |
| <code><a href="#shady-island.MysqlDatabaseProps.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The cluster or instance endpoint. |
| <code><a href="#shady-island.MysqlDatabaseProps.property.target">target</a></code> | <code>aws-cdk-lib.aws_ec2.IConnectable</code> | The target service or database. |
| <code><a href="#shady-island.MysqlDatabaseProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the Lambda function will run. |
| <code><a href="#shady-island.MysqlDatabaseProps.property.certificateAuthoritiesUrl">certificateAuthoritiesUrl</a></code> | <code>string</code> | The URL to the PEM-encoded Certificate Authority file. |
| <code><a href="#shady-island.MysqlDatabaseProps.property.characterSet">characterSet</a></code> | <code>string</code> | The database default character set to use. |
| <code><a href="#shady-island.MysqlDatabaseProps.property.collation">collation</a></code> | <code>string</code> | The database default collation to use. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="shady-island.MysqlDatabaseProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="shady-island.MysqlDatabaseProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.MysqlDatabaseProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Required</sup> <a name="adminSecret" id="shady-island.MysqlDatabaseProps.property.adminSecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

A Secrets Manager secret that contains administrative credentials.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="shady-island.MysqlDatabaseProps.property.endpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The cluster or instance endpoint.

---

##### `target`<sup>Required</sup> <a name="target" id="shady-island.MysqlDatabaseProps.property.target"></a>

```typescript
public readonly target: IConnectable;
```

- *Type:* aws-cdk-lib.aws_ec2.IConnectable

The target service or database.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.MysqlDatabaseProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the Lambda function will run.

---

##### `certificateAuthoritiesUrl`<sup>Optional</sup> <a name="certificateAuthoritiesUrl" id="shady-island.MysqlDatabaseProps.property.certificateAuthoritiesUrl"></a>

```typescript
public readonly certificateAuthoritiesUrl: string;
```

- *Type:* string
- *Default:* https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem

The URL to the PEM-encoded Certificate Authority file.

Normally, we would just assume the Lambda runtime has the certificates to
trust already installed. Since the current Lambda runtime environments lack
the newer RDS certificate authority certificates, this option can be used
to specify a URL to a remote file containing the CAs.

> [https://github.com/aws/aws-lambda-base-images/issues/123](https://github.com/aws/aws-lambda-base-images/issues/123)

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="shady-island.MysqlDatabaseProps.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string
- *Default:* "utf8mb4"

The database default character set to use.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="shady-island.MysqlDatabaseProps.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string
- *Default:* rely on MySQL to choose the default collation.

The database default collation to use.

---

### PostgresqlDatabaseForClusterOptions <a name="PostgresqlDatabaseForClusterOptions" id="shady-island.PostgresqlDatabaseForClusterOptions"></a>

Properties to specify when using PostgresqlDatabase.forCluster().

#### Initializer <a name="Initializer" id="shady-island.PostgresqlDatabaseForClusterOptions.Initializer"></a>

```typescript
import { PostgresqlDatabaseForClusterOptions } from 'shady-island'

const postgresqlDatabaseForClusterOptions: PostgresqlDatabaseForClusterOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.PostgresqlDatabaseForClusterOptions.property.ownerSecret">ownerSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | The Secrets Manager secret for the owner of the schema. |
| <code><a href="#shady-island.PostgresqlDatabaseForClusterOptions.property.certificateAuthoritiesUrl">certificateAuthoritiesUrl</a></code> | <code>string</code> | The URL to the PEM-encoded Certificate Authority file. |
| <code><a href="#shady-island.PostgresqlDatabaseForClusterOptions.property.encoding">encoding</a></code> | <code>string</code> | The database default encoding set to use. |
| <code><a href="#shady-island.PostgresqlDatabaseForClusterOptions.property.locale">locale</a></code> | <code>string</code> | The database default locale to use. |
| <code><a href="#shady-island.PostgresqlDatabaseForClusterOptions.property.schemaName">schemaName</a></code> | <code>string</code> | The name of the schema to create. |
| <code><a href="#shady-island.PostgresqlDatabaseForClusterOptions.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database/catalog to create. |
| <code><a href="#shady-island.PostgresqlDatabaseForClusterOptions.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group for the Lambda function. |
| <code><a href="#shady-island.PostgresqlDatabaseForClusterOptions.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The type of subnets in the VPC where the Lambda function will run. |
| <code><a href="#shady-island.PostgresqlDatabaseForClusterOptions.property.adminSecret">adminSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | A Secrets Manager secret that contains administrative credentials. |

---

##### `ownerSecret`<sup>Required</sup> <a name="ownerSecret" id="shady-island.PostgresqlDatabaseForClusterOptions.property.ownerSecret"></a>

```typescript
public readonly ownerSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The Secrets Manager secret for the owner of the schema.

---

##### `certificateAuthoritiesUrl`<sup>Optional</sup> <a name="certificateAuthoritiesUrl" id="shady-island.PostgresqlDatabaseForClusterOptions.property.certificateAuthoritiesUrl"></a>

```typescript
public readonly certificateAuthoritiesUrl: string;
```

- *Type:* string
- *Default:* https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem

The URL to the PEM-encoded Certificate Authority file.

Normally, we would just assume the Lambda runtime has the certificates to
trust already installed. Since the current Lambda runtime environments lack
the newer RDS certificate authority certificates, this option can be used
to specify a URL to a remote file containing the CAs.

> [https://github.com/aws/aws-lambda-base-images/issues/123](https://github.com/aws/aws-lambda-base-images/issues/123)

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="shady-island.PostgresqlDatabaseForClusterOptions.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string
- *Default:* "UTF8"

The database default encoding set to use.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="shady-island.PostgresqlDatabaseForClusterOptions.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string
- *Default:* rely on PostgreSQL to choose the default locale.

The database default locale to use.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="shady-island.PostgresqlDatabaseForClusterOptions.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string
- *Default:* The username of the ownerSecret.

The name of the schema to create.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="shady-island.PostgresqlDatabaseForClusterOptions.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="shady-island.PostgresqlDatabaseForClusterOptions.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.PostgresqlDatabaseForClusterOptions.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Optional</sup> <a name="adminSecret" id="shady-island.PostgresqlDatabaseForClusterOptions.property.adminSecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

A Secrets Manager secret that contains administrative credentials.

---

### PostgresqlDatabaseForServerlessClusterOptions <a name="PostgresqlDatabaseForServerlessClusterOptions" id="shady-island.PostgresqlDatabaseForServerlessClusterOptions"></a>

Properties to specify when using PostgresqlDatabase.forServerlessCluster().

#### Initializer <a name="Initializer" id="shady-island.PostgresqlDatabaseForServerlessClusterOptions.Initializer"></a>

```typescript
import { PostgresqlDatabaseForServerlessClusterOptions } from 'shady-island'

const postgresqlDatabaseForServerlessClusterOptions: PostgresqlDatabaseForServerlessClusterOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.ownerSecret">ownerSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | The Secrets Manager secret for the owner of the schema. |
| <code><a href="#shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.certificateAuthoritiesUrl">certificateAuthoritiesUrl</a></code> | <code>string</code> | The URL to the PEM-encoded Certificate Authority file. |
| <code><a href="#shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.encoding">encoding</a></code> | <code>string</code> | The database default encoding set to use. |
| <code><a href="#shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.locale">locale</a></code> | <code>string</code> | The database default locale to use. |
| <code><a href="#shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.schemaName">schemaName</a></code> | <code>string</code> | The name of the schema to create. |
| <code><a href="#shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database/catalog to create. |
| <code><a href="#shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group for the Lambda function. |
| <code><a href="#shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The type of subnets in the VPC where the Lambda function will run. |
| <code><a href="#shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.adminSecret">adminSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | A Secrets Manager secret that contains administrative credentials. |
| <code><a href="#shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the Lambda function will run. |

---

##### `ownerSecret`<sup>Required</sup> <a name="ownerSecret" id="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.ownerSecret"></a>

```typescript
public readonly ownerSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The Secrets Manager secret for the owner of the schema.

---

##### `certificateAuthoritiesUrl`<sup>Optional</sup> <a name="certificateAuthoritiesUrl" id="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.certificateAuthoritiesUrl"></a>

```typescript
public readonly certificateAuthoritiesUrl: string;
```

- *Type:* string
- *Default:* https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem

The URL to the PEM-encoded Certificate Authority file.

Normally, we would just assume the Lambda runtime has the certificates to
trust already installed. Since the current Lambda runtime environments lack
the newer RDS certificate authority certificates, this option can be used
to specify a URL to a remote file containing the CAs.

> [https://github.com/aws/aws-lambda-base-images/issues/123](https://github.com/aws/aws-lambda-base-images/issues/123)

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string
- *Default:* "UTF8"

The database default encoding set to use.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string
- *Default:* rely on PostgreSQL to choose the default locale.

The database default locale to use.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string
- *Default:* The username of the ownerSecret.

The name of the schema to create.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Optional</sup> <a name="adminSecret" id="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.adminSecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

A Secrets Manager secret that contains administrative credentials.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.PostgresqlDatabaseForServerlessClusterOptions.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the Lambda function will run.

---

### PostgresqlDatabaseOptions <a name="PostgresqlDatabaseOptions" id="shady-island.PostgresqlDatabaseOptions"></a>

PostgreSQL-specific options.

#### Initializer <a name="Initializer" id="shady-island.PostgresqlDatabaseOptions.Initializer"></a>

```typescript
import { PostgresqlDatabaseOptions } from 'shady-island'

const postgresqlDatabaseOptions: PostgresqlDatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.PostgresqlDatabaseOptions.property.ownerSecret">ownerSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | The Secrets Manager secret for the owner of the schema. |
| <code><a href="#shady-island.PostgresqlDatabaseOptions.property.certificateAuthoritiesUrl">certificateAuthoritiesUrl</a></code> | <code>string</code> | The URL to the PEM-encoded Certificate Authority file. |
| <code><a href="#shady-island.PostgresqlDatabaseOptions.property.encoding">encoding</a></code> | <code>string</code> | The database default encoding set to use. |
| <code><a href="#shady-island.PostgresqlDatabaseOptions.property.locale">locale</a></code> | <code>string</code> | The database default locale to use. |
| <code><a href="#shady-island.PostgresqlDatabaseOptions.property.schemaName">schemaName</a></code> | <code>string</code> | The name of the schema to create. |

---

##### `ownerSecret`<sup>Required</sup> <a name="ownerSecret" id="shady-island.PostgresqlDatabaseOptions.property.ownerSecret"></a>

```typescript
public readonly ownerSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The Secrets Manager secret for the owner of the schema.

---

##### `certificateAuthoritiesUrl`<sup>Optional</sup> <a name="certificateAuthoritiesUrl" id="shady-island.PostgresqlDatabaseOptions.property.certificateAuthoritiesUrl"></a>

```typescript
public readonly certificateAuthoritiesUrl: string;
```

- *Type:* string
- *Default:* https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem

The URL to the PEM-encoded Certificate Authority file.

Normally, we would just assume the Lambda runtime has the certificates to
trust already installed. Since the current Lambda runtime environments lack
the newer RDS certificate authority certificates, this option can be used
to specify a URL to a remote file containing the CAs.

> [https://github.com/aws/aws-lambda-base-images/issues/123](https://github.com/aws/aws-lambda-base-images/issues/123)

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="shady-island.PostgresqlDatabaseOptions.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string
- *Default:* "UTF8"

The database default encoding set to use.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="shady-island.PostgresqlDatabaseOptions.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string
- *Default:* rely on PostgreSQL to choose the default locale.

The database default locale to use.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="shady-island.PostgresqlDatabaseOptions.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string
- *Default:* The username of the ownerSecret.

The name of the schema to create.

---

### PostgresqlDatabaseProps <a name="PostgresqlDatabaseProps" id="shady-island.PostgresqlDatabaseProps"></a>

Constructor properties for PostgresqlDatabase.

#### Initializer <a name="Initializer" id="shady-island.PostgresqlDatabaseProps.Initializer"></a>

```typescript
import { PostgresqlDatabaseProps } from 'shady-island'

const postgresqlDatabaseProps: PostgresqlDatabaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.PostgresqlDatabaseProps.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database/catalog to create. |
| <code><a href="#shady-island.PostgresqlDatabaseProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group for the Lambda function. |
| <code><a href="#shady-island.PostgresqlDatabaseProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The type of subnets in the VPC where the Lambda function will run. |
| <code><a href="#shady-island.PostgresqlDatabaseProps.property.adminSecret">adminSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | A Secrets Manager secret that contains administrative credentials. |
| <code><a href="#shady-island.PostgresqlDatabaseProps.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The cluster or instance endpoint. |
| <code><a href="#shady-island.PostgresqlDatabaseProps.property.target">target</a></code> | <code>aws-cdk-lib.aws_ec2.IConnectable</code> | The target service or database. |
| <code><a href="#shady-island.PostgresqlDatabaseProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the Lambda function will run. |
| <code><a href="#shady-island.PostgresqlDatabaseProps.property.ownerSecret">ownerSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | The Secrets Manager secret for the owner of the schema. |
| <code><a href="#shady-island.PostgresqlDatabaseProps.property.certificateAuthoritiesUrl">certificateAuthoritiesUrl</a></code> | <code>string</code> | The URL to the PEM-encoded Certificate Authority file. |
| <code><a href="#shady-island.PostgresqlDatabaseProps.property.encoding">encoding</a></code> | <code>string</code> | The database default encoding set to use. |
| <code><a href="#shady-island.PostgresqlDatabaseProps.property.locale">locale</a></code> | <code>string</code> | The database default locale to use. |
| <code><a href="#shady-island.PostgresqlDatabaseProps.property.schemaName">schemaName</a></code> | <code>string</code> | The name of the schema to create. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="shady-island.PostgresqlDatabaseProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database/catalog to create.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="shady-island.PostgresqlDatabaseProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* a new security group is created

The security group for the Lambda function.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.PostgresqlDatabaseProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified.

The type of subnets in the VPC where the Lambda function will run.

---

##### `adminSecret`<sup>Required</sup> <a name="adminSecret" id="shady-island.PostgresqlDatabaseProps.property.adminSecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

A Secrets Manager secret that contains administrative credentials.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="shady-island.PostgresqlDatabaseProps.property.endpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The cluster or instance endpoint.

---

##### `target`<sup>Required</sup> <a name="target" id="shady-island.PostgresqlDatabaseProps.property.target"></a>

```typescript
public readonly target: IConnectable;
```

- *Type:* aws-cdk-lib.aws_ec2.IConnectable

The target service or database.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.PostgresqlDatabaseProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the Lambda function will run.

---

##### `ownerSecret`<sup>Required</sup> <a name="ownerSecret" id="shady-island.PostgresqlDatabaseProps.property.ownerSecret"></a>

```typescript
public readonly ownerSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The Secrets Manager secret for the owner of the schema.

---

##### `certificateAuthoritiesUrl`<sup>Optional</sup> <a name="certificateAuthoritiesUrl" id="shady-island.PostgresqlDatabaseProps.property.certificateAuthoritiesUrl"></a>

```typescript
public readonly certificateAuthoritiesUrl: string;
```

- *Type:* string
- *Default:* https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem

The URL to the PEM-encoded Certificate Authority file.

Normally, we would just assume the Lambda runtime has the certificates to
trust already installed. Since the current Lambda runtime environments lack
the newer RDS certificate authority certificates, this option can be used
to specify a URL to a remote file containing the CAs.

> [https://github.com/aws/aws-lambda-base-images/issues/123](https://github.com/aws/aws-lambda-base-images/issues/123)

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="shady-island.PostgresqlDatabaseProps.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string
- *Default:* "UTF8"

The database default encoding set to use.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="shady-island.PostgresqlDatabaseProps.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string
- *Default:* rely on PostgreSQL to choose the default locale.

The database default locale to use.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="shady-island.PostgresqlDatabaseProps.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string
- *Default:* The username of the ownerSecret.

The name of the schema to create.

---

### PrioritizedLines <a name="PrioritizedLines" id="shady-island.PrioritizedLines"></a>

A container for lines of a User Data script, sortable by `priority`.

#### Initializer <a name="Initializer" id="shady-island.PrioritizedLines.Initializer"></a>

```typescript
import { PrioritizedLines } from 'shady-island'

const prioritizedLines: PrioritizedLines = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.PrioritizedLines.property.lines">lines</a></code> | <code>string[]</code> | The command lines. |
| <code><a href="#shady-island.PrioritizedLines.property.priority">priority</a></code> | <code>number</code> | The priority for this set of commands. |

---

##### `lines`<sup>Required</sup> <a name="lines" id="shady-island.PrioritizedLines.property.lines"></a>

```typescript
public readonly lines: string[];
```

- *Type:* string[]

The command lines.

---

##### `priority`<sup>Required</sup> <a name="priority" id="shady-island.PrioritizedLines.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority for this set of commands.

---

### RunnableFargateTaskProps <a name="RunnableFargateTaskProps" id="shady-island.RunnableFargateTaskProps"></a>

Constructor properties for RunnableFargateTask.

#### Initializer <a name="Initializer" id="shady-island.RunnableFargateTaskProps.Initializer"></a>

```typescript
import { RunnableFargateTaskProps } from 'shady-island'

const runnableFargateTaskProps: RunnableFargateTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.RunnableFargateTaskProps.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean</code> | Specifies whether the task's elastic network interface receives a public IP address. |
| <code><a href="#shady-island.RunnableFargateTaskProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | Existing security groups to use for your task. |
| <code><a href="#shady-island.RunnableFargateTaskProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets to associate with the task. |
| <code><a href="#shady-island.RunnableFargateTaskProps.property.cpu">cpu</a></code> | <code>number</code> | The number of cpu units used by the task. |
| <code><a href="#shady-island.RunnableFargateTaskProps.property.memoryLimitMiB">memoryLimitMiB</a></code> | <code>number</code> | The amount (in MiB) of memory used by the task. |
| <code><a href="#shady-island.RunnableFargateTaskProps.property.platformVersion">platformVersion</a></code> | <code>aws-cdk-lib.aws_ecs.FargatePlatformVersion</code> | The platform version on which to run your service. |
| <code><a href="#shady-island.RunnableFargateTaskProps.property.runtimePlatform">runtimePlatform</a></code> | <code>aws-cdk-lib.aws_ecs.RuntimePlatform</code> | The runtime platform of the task definition. |
| <code><a href="#shady-island.RunnableFargateTaskProps.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.FargateTaskDefinition</code> | The task definition to use for tasks in the service. TaskDefinition or TaskImageOptions must be specified, but not both. |
| <code><a href="#shady-island.RunnableFargateTaskProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The cluster that hosts the service. |
| <code><a href="#shady-island.RunnableFargateTaskProps.property.taskImageOptions">taskImageOptions</a></code> | <code><a href="#shady-island.FargateTaskImageOptions">FargateTaskImageOptions</a></code> | The properties to define if the construct is to create a TaskDefinition. |
| <code><a href="#shady-island.RunnableFargateTaskProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the container instances will be launched or the elastic network interfaces (ENIs) will be deployed. |

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="shady-island.RunnableFargateTaskProps.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether the task's elastic network interface receives a public IP address.

If true, the task will receive a public IP address.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="shady-island.RunnableFargateTaskProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* a new security group will be created.

Existing security groups to use for your task.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="shady-island.RunnableFargateTaskProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* Public subnets if `assignPublicIp` is set, otherwise the first available one of Private, Isolated, Public, in that order.

The subnets to associate with the task.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="shady-island.RunnableFargateTaskProps.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number
- *Default:* 256

The number of cpu units used by the task.

Valid values, which determines your range of valid values for the memory parameter:

256 (.25 vCPU) - Available memory values: 0.5GB, 1GB, 2GB

512 (.5 vCPU) - Available memory values: 1GB, 2GB, 3GB, 4GB

1024 (1 vCPU) - Available memory values: 2GB, 3GB, 4GB, 5GB, 6GB, 7GB, 8GB

2048 (2 vCPU) - Available memory values: Between 4GB and 16GB in 1GB increments

4096 (4 vCPU) - Available memory values: Between 8GB and 30GB in 1GB increments

8192 (8 vCPU) - Available memory values: Between 16GB and 60GB in 4GB increments

16384 (16 vCPU) - Available memory values: Between 32GB and 120GB in 8GB increments

This default is set in the underlying FargateTaskDefinition construct.

---

##### `memoryLimitMiB`<sup>Optional</sup> <a name="memoryLimitMiB" id="shady-island.RunnableFargateTaskProps.property.memoryLimitMiB"></a>

```typescript
public readonly memoryLimitMiB: number;
```

- *Type:* number
- *Default:* 512

The amount (in MiB) of memory used by the task.

This field is required and you must use one of the following values, which determines your range of valid values
for the cpu parameter:

512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available cpu values: 256 (.25 vCPU)

1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available cpu values: 512 (.5 vCPU)

2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available cpu values: 1024 (1 vCPU)

Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available cpu values: 2048 (2 vCPU)

Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available cpu values: 4096 (4 vCPU)

Between 16384 (16 GB) and 61440 (60 GB) in increments of 4096 (4 GB) - Available cpu values: 8192 (8 vCPU)

Between 32768 (32 GB) and 122880 (120 GB) in increments of 8192 (8 GB) - Available cpu values: 16384 (16 vCPU)

This default is set in the underlying FargateTaskDefinition construct.

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="shady-island.RunnableFargateTaskProps.property.platformVersion"></a>

```typescript
public readonly platformVersion: FargatePlatformVersion;
```

- *Type:* aws-cdk-lib.aws_ecs.FargatePlatformVersion
- *Default:* Latest

The platform version on which to run your service.

If one is not specified, the LATEST platform version is used by default. For more information, see
[AWS Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html)
in the Amazon Elastic Container Service Developer Guide.

---

##### `runtimePlatform`<sup>Optional</sup> <a name="runtimePlatform" id="shady-island.RunnableFargateTaskProps.property.runtimePlatform"></a>

```typescript
public readonly runtimePlatform: RuntimePlatform;
```

- *Type:* aws-cdk-lib.aws_ecs.RuntimePlatform
- *Default:* If the property is undefined, `operatingSystemFamily` is LINUX and `cpuArchitecture` is X86_64

The runtime platform of the task definition.

---

##### `taskDefinition`<sup>Optional</sup> <a name="taskDefinition" id="shady-island.RunnableFargateTaskProps.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: FargateTaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.FargateTaskDefinition
- *Default:* none

The task definition to use for tasks in the service. TaskDefinition or TaskImageOptions must be specified, but not both.

[disable-awslint:ref-via-interface]

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="shady-island.RunnableFargateTaskProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster
- *Default:* create a new cluster; if both cluster and vpc are omitted, a new VPC will be created for you.

The cluster that hosts the service.

If a cluster is specified, the vpc construct should be omitted. Alternatively, you can omit both cluster and vpc.

---

##### `taskImageOptions`<sup>Optional</sup> <a name="taskImageOptions" id="shady-island.RunnableFargateTaskProps.property.taskImageOptions"></a>

```typescript
public readonly taskImageOptions: FargateTaskImageOptions;
```

- *Type:* <a href="#shady-island.FargateTaskImageOptions">FargateTaskImageOptions</a>
- *Default:* none

The properties to define if the construct is to create a TaskDefinition.

taskDefinition or image must be defined, but not both.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="shady-island.RunnableFargateTaskProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* uses the VPC defined in the cluster or creates a new VPC.

The VPC where the container instances will be launched or the elastic network interfaces (ENIs) will be deployed.

If a vpc is specified, the cluster construct should be omitted. Alternatively, you can omit both vpc and cluster.

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

### StateMachineTaskProps <a name="StateMachineTaskProps" id="shady-island.StateMachineTaskProps"></a>

Properties to create a new State Machine EcsRunTask step.

#### Initializer <a name="Initializer" id="shady-island.StateMachineTaskProps.Initializer"></a>

```typescript
import { StateMachineTaskProps } from 'shady-island'

const stateMachineTaskProps: StateMachineTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.StateMachineTaskProps.property.comment">comment</a></code> | <code>string</code> | An optional description for this state. |
| <code><a href="#shady-island.StateMachineTaskProps.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Credentials</code> | Credentials for an IAM Role that the State Machine assumes for executing the task. |
| <code><a href="#shady-island.StateMachineTaskProps.property.heartbeat">heartbeat</a></code> | <code>aws-cdk-lib.Duration</code> | Timeout for the heartbeat. |
| <code><a href="#shady-island.StateMachineTaskProps.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Timeout</code> | Timeout for the heartbeat. |
| <code><a href="#shady-island.StateMachineTaskProps.property.inputPath">inputPath</a></code> | <code>string</code> | JSONPath expression to select part of the state to be the input to this state. |
| <code><a href="#shady-island.StateMachineTaskProps.property.integrationPattern">integrationPattern</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IntegrationPattern</code> | AWS Step Functions integrates with services directly in the Amazon States Language. |
| <code><a href="#shady-island.StateMachineTaskProps.property.outputPath">outputPath</a></code> | <code>string</code> | JSONPath expression to select select a portion of the state output to pass to the next state. |
| <code><a href="#shady-island.StateMachineTaskProps.property.resultPath">resultPath</a></code> | <code>string</code> | JSONPath expression to indicate where to inject the state's output. |
| <code><a href="#shady-island.StateMachineTaskProps.property.resultSelector">resultSelector</a></code> | <code>{[ key: string ]: any}</code> | The JSON that will replace the state's raw result and become the effective result before ResultPath is applied. |
| <code><a href="#shady-island.StateMachineTaskProps.property.stateName">stateName</a></code> | <code>string</code> | Optional name for this state. |
| <code><a href="#shady-island.StateMachineTaskProps.property.taskTimeout">taskTimeout</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Timeout</code> | Timeout for the task. |
| <code><a href="#shady-island.StateMachineTaskProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | Timeout for the task. |
| <code><a href="#shady-island.StateMachineTaskProps.property.containerOverrides">containerOverrides</a></code> | <code>aws-cdk-lib.aws_stepfunctions_tasks.ContainerOverride[]</code> | Container setting overrides. |
| <code><a href="#shady-island.StateMachineTaskProps.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean</code> | Whether ECS Exec should be enabled. |
| <code><a href="#shady-island.StateMachineTaskProps.property.propagatedTagSource">propagatedTagSource</a></code> | <code>aws-cdk-lib.aws_ecs.PropagatedTagSource</code> | Specifies whether to propagate the tags from the task definition to the task. |
| <code><a href="#shady-island.StateMachineTaskProps.property.revisionNumber">revisionNumber</a></code> | <code>number</code> | The revision number of ECS task definition family. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="shady-island.StateMachineTaskProps.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string
- *Default:* No comment

An optional description for this state.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="shady-island.StateMachineTaskProps.property.credentials"></a>

```typescript
public readonly credentials: Credentials;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Credentials
- *Default:* None (Task is executed using the State Machine's execution role)

Credentials for an IAM Role that the State Machine assumes for executing the task.

This enables cross-account resource invocations.

> [https://docs.aws.amazon.com/step-functions/latest/dg/concepts-access-cross-acct-resources.html](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-access-cross-acct-resources.html)

---

##### ~~`heartbeat`~~<sup>Optional</sup> <a name="heartbeat" id="shady-island.StateMachineTaskProps.property.heartbeat"></a>

- *Deprecated:* use `heartbeatTimeout`

```typescript
public readonly heartbeat: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* None

Timeout for the heartbeat.

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="heartbeatTimeout" id="shady-island.StateMachineTaskProps.property.heartbeatTimeout"></a>

```typescript
public readonly heartbeatTimeout: Timeout;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Timeout
- *Default:* None

Timeout for the heartbeat.

[disable-awslint:duration-prop-type] is needed because all props interface in
aws-stepfunctions-tasks extend this interface

---

##### `inputPath`<sup>Optional</sup> <a name="inputPath" id="shady-island.StateMachineTaskProps.property.inputPath"></a>

```typescript
public readonly inputPath: string;
```

- *Type:* string
- *Default:* The entire task input (JSON path '$')

JSONPath expression to select part of the state to be the input to this state.

May also be the special value JsonPath.DISCARD, which will cause the effective
input to be the empty object {}.

---

##### `integrationPattern`<sup>Optional</sup> <a name="integrationPattern" id="shady-island.StateMachineTaskProps.property.integrationPattern"></a>

```typescript
public readonly integrationPattern: IntegrationPattern;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.IntegrationPattern
- *Default:* `IntegrationPattern.REQUEST_RESPONSE` for most tasks. `IntegrationPattern.RUN_JOB` for the following exceptions: `BatchSubmitJob`, `EmrAddStep`, `EmrCreateCluster`, `EmrTerminationCluster`, and `EmrContainersStartJobRun`.

AWS Step Functions integrates with services directly in the Amazon States Language.

You can control these AWS services using service integration patterns.

Depending on the AWS Service, the Service Integration Pattern availability will vary.

> [https://docs.aws.amazon.com/step-functions/latest/dg/connect-supported-services.html](https://docs.aws.amazon.com/step-functions/latest/dg/connect-supported-services.html)

---

##### `outputPath`<sup>Optional</sup> <a name="outputPath" id="shady-island.StateMachineTaskProps.property.outputPath"></a>

```typescript
public readonly outputPath: string;
```

- *Type:* string
- *Default:* The entire JSON node determined by the state input, the task result, and resultPath is passed to the next state (JSON path '$')

JSONPath expression to select select a portion of the state output to pass to the next state.

May also be the special value JsonPath.DISCARD, which will cause the effective
output to be the empty object {}.

---

##### `resultPath`<sup>Optional</sup> <a name="resultPath" id="shady-island.StateMachineTaskProps.property.resultPath"></a>

```typescript
public readonly resultPath: string;
```

- *Type:* string
- *Default:* Replaces the entire input with the result (JSON path '$')

JSONPath expression to indicate where to inject the state's output.

May also be the special value JsonPath.DISCARD, which will cause the state's
input to become its output.

---

##### `resultSelector`<sup>Optional</sup> <a name="resultSelector" id="shady-island.StateMachineTaskProps.property.resultSelector"></a>

```typescript
public readonly resultSelector: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* None

The JSON that will replace the state's raw result and become the effective result before ResultPath is applied.

You can use ResultSelector to create a payload with values that are static
or selected from the state's raw result.

> [https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-resultselector](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-resultselector)

---

##### `stateName`<sup>Optional</sup> <a name="stateName" id="shady-island.StateMachineTaskProps.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string
- *Default:* The construct ID will be used as state name

Optional name for this state.

---

##### `taskTimeout`<sup>Optional</sup> <a name="taskTimeout" id="shady-island.StateMachineTaskProps.property.taskTimeout"></a>

```typescript
public readonly taskTimeout: Timeout;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Timeout
- *Default:* None

Timeout for the task.

[disable-awslint:duration-prop-type] is needed because all props interface in
aws-stepfunctions-tasks extend this interface

---

##### ~~`timeout`~~<sup>Optional</sup> <a name="timeout" id="shady-island.StateMachineTaskProps.property.timeout"></a>

- *Deprecated:* use `taskTimeout`

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* None

Timeout for the task.

---

##### `containerOverrides`<sup>Optional</sup> <a name="containerOverrides" id="shady-island.StateMachineTaskProps.property.containerOverrides"></a>

```typescript
public readonly containerOverrides: ContainerOverride[];
```

- *Type:* aws-cdk-lib.aws_stepfunctions_tasks.ContainerOverride[]
- *Default:* No overrides

Container setting overrides.

Specify the container to use and the overrides to apply.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="shady-island.StateMachineTaskProps.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean;
```

- *Type:* boolean
- *Default:* false

Whether ECS Exec should be enabled.

> [https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-enableExecuteCommand](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-enableExecuteCommand)

---

##### `propagatedTagSource`<sup>Optional</sup> <a name="propagatedTagSource" id="shady-island.StateMachineTaskProps.property.propagatedTagSource"></a>

```typescript
public readonly propagatedTagSource: PropagatedTagSource;
```

- *Type:* aws-cdk-lib.aws_ecs.PropagatedTagSource
- *Default:* No tags are propagated.

Specifies whether to propagate the tags from the task definition to the task.

An error will be received if you specify the SERVICE option when running a task.

> [https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-propagateTags](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-propagateTags)

---

##### `revisionNumber`<sup>Optional</sup> <a name="revisionNumber" id="shady-island.StateMachineTaskProps.property.revisionNumber"></a>

```typescript
public readonly revisionNumber: number;
```

- *Type:* number
- *Default:* '$latest'

The revision number of ECS task definition family.

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

### WorkloadProps <a name="WorkloadProps" id="shady-island.WorkloadProps"></a>

Constructor properties for a Workload.

#### Initializer <a name="Initializer" id="shady-island.WorkloadProps.Initializer"></a>

```typescript
import { WorkloadProps } from 'shady-island'

const workloadProps: WorkloadProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.WorkloadProps.property.tier">tier</a></code> | <code><a href="#shady-island.Tier">Tier</a></code> | The deployment tier. |
| <code><a href="#shady-island.WorkloadProps.property.baseDomainName">baseDomainName</a></code> | <code>string</code> | The base domain name used to create the FQDN for public resources. |
| <code><a href="#shady-island.WorkloadProps.property.contextFile">contextFile</a></code> | <code>string</code> | The filesystem path to a JSON file that contains context values to load. |
| <code><a href="#shady-island.WorkloadProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#shady-island.WorkloadProps.property.workloadName">workloadName</a></code> | <code>string</code> | The machine identifier for this workload. |

---

##### `tier`<sup>Required</sup> <a name="tier" id="shady-island.WorkloadProps.property.tier"></a>

```typescript
public readonly tier: Tier;
```

- *Type:* <a href="#shady-island.Tier">Tier</a>

The deployment tier.

---

##### `baseDomainName`<sup>Optional</sup> <a name="baseDomainName" id="shady-island.WorkloadProps.property.baseDomainName"></a>

```typescript
public readonly baseDomainName: string;
```

- *Type:* string

The base domain name used to create the FQDN for public resources.

---

##### `contextFile`<sup>Optional</sup> <a name="contextFile" id="shady-island.WorkloadProps.property.contextFile"></a>

```typescript
public readonly contextFile: string;
```

- *Type:* string

The filesystem path to a JSON file that contains context values to load.

Using this property allows you to load different context values within each
instantiated `Workload`, directly from a file you can check into source
control.

---

##### `env`<sup>Optional</sup> <a name="env" id="shady-island.WorkloadProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment

The AWS environment (account/region) where this stack will be deployed.

---

##### `workloadName`<sup>Optional</sup> <a name="workloadName" id="shady-island.WorkloadProps.property.workloadName"></a>

```typescript
public readonly workloadName: string;
```

- *Type:* string
- *Default:* The id passed to the `Workload` constructor, but in lowercase

The machine identifier for this workload.

This value will be used to create the `publicDomainName` property.

By default, the `stackName` property used to create `Stack` constructs in
the `createStack` method will begin with this Workload's `workloadName` and
its `tier` separated by hyphens.

Consider providing a constant `workloadName` value to the superclass
constructor in your derived class.

---

*Example*

```typescript
class MyWorkload extends Workload {
  constructor(scope: Construct, id: string, props: WorkloadProps) {
    super(scope, id, { ...props, workloadName: 'my-workload' });
  }
}
```


## Classes <a name="Classes" id="Classes"></a>

### ContextLoader <a name="ContextLoader" id="shady-island.ContextLoader"></a>

A utility to load context values into a construct node.

If you want to use this utility in your own construct, make sure to invoke it
before you create any child constructs.

#### Initializers <a name="Initializers" id="shady-island.ContextLoader.Initializer"></a>

```typescript
import { ContextLoader } from 'shady-island'

new ContextLoader()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.ContextLoader.loadContext">loadContext</a></code> | Parses JSON file contents, then provides the values to a Node's context. |

---

##### `loadContext` <a name="loadContext" id="shady-island.ContextLoader.loadContext"></a>

```typescript
import { ContextLoader } from 'shady-island'

ContextLoader.loadContext(filename: string, node: Node)
```

Parses JSON file contents, then provides the values to a Node's context.

###### `filename`<sup>Required</sup> <a name="filename" id="shady-island.ContextLoader.loadContext.parameter.filename"></a>

- *Type:* string

The JSON file with an object to use as context values.

---

###### `node`<sup>Required</sup> <a name="node" id="shady-island.ContextLoader.loadContext.parameter.node"></a>

- *Type:* constructs.Node

The constructs node to receive the context values.

---



### Tier <a name="Tier" id="shady-island.Tier"></a>

A deployment environment with a specific purpose and audience.

You can create any Tier you like, but we include those explained by DTAP.

> [https://en.wikipedia.org/wiki/Development,_testing,_acceptance_and_production](https://en.wikipedia.org/wiki/Development,_testing,_acceptance_and_production)

#### Initializers <a name="Initializers" id="shady-island.Tier.Initializer"></a>

```typescript
import { Tier } from 'shady-island'

new Tier(id: string, label: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.Tier.Initializer.parameter.id">id</a></code> | <code>string</code> | - The machine-readable identifier for this tier (e.g. prod). |
| <code><a href="#shady-island.Tier.Initializer.parameter.label">label</a></code> | <code>string</code> | - The human-readable label for this tier (e.g. Production). |

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.Tier.Initializer.parameter.id"></a>

- *Type:* string

The machine-readable identifier for this tier (e.g. prod).

---

##### `label`<sup>Required</sup> <a name="label" id="shady-island.Tier.Initializer.parameter.label"></a>

- *Type:* string

The human-readable label for this tier (e.g. Production).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.Tier.applyTags">applyTags</a></code> | Adds the label of this tier as a tag to the provided construct. |
| <code><a href="#shady-island.Tier.assignTo">assignTo</a></code> | Assigns this tier to a construct. |
| <code><a href="#shady-island.Tier.matches">matches</a></code> | Compares this tier to the provided value and tests for equality. |

---

##### `applyTags` <a name="applyTags" id="shady-island.Tier.applyTags"></a>

```typescript
public applyTags(construct: IConstruct): void
```

Adds the label of this tier as a tag to the provided construct.

###### `construct`<sup>Required</sup> <a name="construct" id="shady-island.Tier.applyTags.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `assignTo` <a name="assignTo" id="shady-island.Tier.assignTo"></a>

```typescript
public assignTo(construct: IConstruct): void
```

Assigns this tier to a construct.

This method will register an error annotation on the construct if any of
the constructs in its parent scopes have a different tier assigned.

###### `construct`<sup>Required</sup> <a name="construct" id="shady-island.Tier.assignTo.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to receive the tier assignment.

---

##### `matches` <a name="matches" id="shady-island.Tier.matches"></a>

```typescript
public matches(other: Tier): boolean
```

Compares this tier to the provided value and tests for equality.

###### `other`<sup>Required</sup> <a name="other" id="shady-island.Tier.matches.parameter.other"></a>

- *Type:* <a href="#shady-island.Tier">Tier</a>

The value to compare.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.Tier.of">of</a></code> | Finds the deployment tier of the given construct. |
| <code><a href="#shady-island.Tier.parse">parse</a></code> | Return the deployment tier that corresponds to the provided value. |

---

##### `of` <a name="of" id="shady-island.Tier.of"></a>

```typescript
import { Tier } from 'shady-island'

Tier.of(construct: IConstruct)
```

Finds the deployment tier of the given construct.

###### `construct`<sup>Required</sup> <a name="construct" id="shady-island.Tier.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to inspect.

---

##### `parse` <a name="parse" id="shady-island.Tier.parse"></a>

```typescript
import { Tier } from 'shady-island'

Tier.parse(value: string)
```

Return the deployment tier that corresponds to the provided value.

Production: "live", "prod", or "production".
Acceptance: "uat", "stage", "staging", or "acceptance".
Testing: "qc", "qa", "test", or "testing".
Development: anything else.

###### `value`<sup>Required</sup> <a name="value" id="shady-island.Tier.parse.parameter.value"></a>

- *Type:* string

The value to parse, case-insensitive.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.Tier.property.id">id</a></code> | <code>string</code> | The machine-readable identifier for this tier (e.g. prod). |
| <code><a href="#shady-island.Tier.property.label">label</a></code> | <code>string</code> | The human-readable label for this tier (e.g. Production). |

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.Tier.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The machine-readable identifier for this tier (e.g. prod).

---

##### `label`<sup>Required</sup> <a name="label" id="shady-island.Tier.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

The human-readable label for this tier (e.g. Production).

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.Tier.property.ACCEPTANCE">ACCEPTANCE</a></code> | <code><a href="#shady-island.Tier">Tier</a></code> | A tier that represents an acceptance environment. |
| <code><a href="#shady-island.Tier.property.DEVELOPMENT">DEVELOPMENT</a></code> | <code><a href="#shady-island.Tier">Tier</a></code> | A tier that represents a development environment. |
| <code><a href="#shady-island.Tier.property.PRODUCTION">PRODUCTION</a></code> | <code><a href="#shady-island.Tier">Tier</a></code> | A tier that represents a production environment. |
| <code><a href="#shady-island.Tier.property.TESTING">TESTING</a></code> | <code><a href="#shady-island.Tier">Tier</a></code> | A tier that represents a testing environment. |

---

##### `ACCEPTANCE`<sup>Required</sup> <a name="ACCEPTANCE" id="shady-island.Tier.property.ACCEPTANCE"></a>

```typescript
public readonly ACCEPTANCE: Tier;
```

- *Type:* <a href="#shady-island.Tier">Tier</a>

A tier that represents an acceptance environment.

---

##### `DEVELOPMENT`<sup>Required</sup> <a name="DEVELOPMENT" id="shady-island.Tier.property.DEVELOPMENT"></a>

```typescript
public readonly DEVELOPMENT: Tier;
```

- *Type:* <a href="#shady-island.Tier">Tier</a>

A tier that represents a development environment.

---

##### `PRODUCTION`<sup>Required</sup> <a name="PRODUCTION" id="shady-island.Tier.property.PRODUCTION"></a>

```typescript
public readonly PRODUCTION: Tier;
```

- *Type:* <a href="#shady-island.Tier">Tier</a>

A tier that represents a production environment.

---

##### `TESTING`<sup>Required</sup> <a name="TESTING" id="shady-island.Tier.property.TESTING"></a>

```typescript
public readonly TESTING: Tier;
```

- *Type:* <a href="#shady-island.Tier">Tier</a>

A tier that represents a testing environment.

---

### TierTagger <a name="TierTagger" id="shady-island.TierTagger"></a>

- *Implements:* aws-cdk-lib.IAspect

A CDK Aspect to apply the `DeploymentTier` tag to Stacks.

#### Initializers <a name="Initializers" id="shady-island.TierTagger.Initializer"></a>

```typescript
import { TierTagger } from 'shady-island'

new TierTagger(tier: Tier)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.TierTagger.Initializer.parameter.tier">tier</a></code> | <code><a href="#shady-island.Tier">Tier</a></code> | - The deployment tier. |

---

##### `tier`<sup>Required</sup> <a name="tier" id="shady-island.TierTagger.Initializer.parameter.tier"></a>

- *Type:* <a href="#shady-island.Tier">Tier</a>

The deployment tier.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.TierTagger.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="shady-island.TierTagger.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="shady-island.TierTagger.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### UserDataBuilder <a name="UserDataBuilder" id="shady-island.UserDataBuilder"></a>

A utility class to assist with composing instance User Data.

This class allows multiple observers in code to add lines to the same end
result UserData without clobbering each other. Just like `conf.d` directories
with priority number prefixes, you can declare the proper execution order of
your UserData commands without having to add them in that order.

#### Initializers <a name="Initializers" id="shady-island.UserDataBuilder.Initializer"></a>

```typescript
import { UserDataBuilder } from 'shady-island'

new UserDataBuilder()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.UserDataBuilder.addCommands">addCommands</a></code> | Add one or more commands to the user data with a priority of `0`. |
| <code><a href="#shady-island.UserDataBuilder.buildUserData">buildUserData</a></code> | Produces the User Data script with all lines sorted in priority order. |
| <code><a href="#shady-island.UserDataBuilder.insertCommands">insertCommands</a></code> | Add one or more commands to the user data at a specific priority. |

---

##### `addCommands` <a name="addCommands" id="shady-island.UserDataBuilder.addCommands"></a>

```typescript
public addCommands(commands: string): void
```

Add one or more commands to the user data with a priority of `0`.

###### `commands`<sup>Required</sup> <a name="commands" id="shady-island.UserDataBuilder.addCommands.parameter.commands"></a>

- *Type:* string

The lines to add.

---

##### `buildUserData` <a name="buildUserData" id="shady-island.UserDataBuilder.buildUserData"></a>

```typescript
public buildUserData(): UserData
```

Produces the User Data script with all lines sorted in priority order.

##### `insertCommands` <a name="insertCommands" id="shady-island.UserDataBuilder.insertCommands"></a>

```typescript
public insertCommands(priority: number, commands: string): void
```

Add one or more commands to the user data at a specific priority.

###### `priority`<sup>Required</sup> <a name="priority" id="shady-island.UserDataBuilder.insertCommands.parameter.priority"></a>

- *Type:* number

The priority of these lines (lower executes earlier).

---

###### `commands`<sup>Required</sup> <a name="commands" id="shady-island.UserDataBuilder.insertCommands.parameter.commands"></a>

- *Type:* string

The lines to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.UserDataBuilder.forLinux">forLinux</a></code> | Returns a user data builder for GNU/Linux operating systems. |
| <code><a href="#shady-island.UserDataBuilder.forWindows">forWindows</a></code> | Returns a user data builder for Windows operating systems. |

---

##### `forLinux` <a name="forLinux" id="shady-island.UserDataBuilder.forLinux"></a>

```typescript
import { UserDataBuilder } from 'shady-island'

UserDataBuilder.forLinux(options?: LinuxUserDataOptions)
```

Returns a user data builder for GNU/Linux operating systems.

###### `options`<sup>Optional</sup> <a name="options" id="shady-island.UserDataBuilder.forLinux.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.LinuxUserDataOptions

The Linux UserData constructor options.

---

##### `forWindows` <a name="forWindows" id="shady-island.UserDataBuilder.forWindows"></a>

```typescript
import { UserDataBuilder } from 'shady-island'

UserDataBuilder.forWindows()
```

Returns a user data builder for Windows operating systems.



## Protocols <a name="Protocols" id="Protocols"></a>

### IAssignOnLaunch <a name="IAssignOnLaunch" id="shady-island.IAssignOnLaunch"></a>

- *Implemented By:* <a href="#shady-island.AssignOnLaunch">AssignOnLaunch</a>, <a href="#shady-island.IAssignOnLaunch">IAssignOnLaunch</a>

Interface for the AssignOnLaunch class.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.IAssignOnLaunch.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The IPv6-enabled VPC. |
| <code><a href="#shady-island.IAssignOnLaunch.property.vpcPlacement">vpcPlacement</a></code> | <code>aws-cdk-lib.aws_ec2.SelectedSubnets</code> | The chosen subnets for address assignment on ENI launch. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.IAssignOnLaunch.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The IPv6-enabled VPC.

---

##### `vpcPlacement`<sup>Required</sup> <a name="vpcPlacement" id="shady-island.IAssignOnLaunch.property.vpcPlacement"></a>

```typescript
public readonly vpcPlacement: SelectedSubnets;
```

- *Type:* aws-cdk-lib.aws_ec2.SelectedSubnets

The chosen subnets for address assignment on ENI launch.

---

### ICidrContext <a name="ICidrContext" id="shady-island.ICidrContext"></a>

- *Implemented By:* <a href="#shady-island.CidrContext">CidrContext</a>, <a href="#shady-island.ICidrContext">ICidrContext</a>

Interface for the CidrContext class.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.ICidrContext.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The IPv6-enabled VPC. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="shady-island.ICidrContext.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The IPv6-enabled VPC.

---

### IDatabase <a name="IDatabase" id="shady-island.IDatabase"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* <a href="#shady-island.BaseDatabase">BaseDatabase</a>, <a href="#shady-island.MysqlDatabase">MysqlDatabase</a>, <a href="#shady-island.PostgresqlDatabase">PostgresqlDatabase</a>, <a href="#shady-island.IDatabase">IDatabase</a>

The definition used to create a database.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.IDatabase.addUserAsOwner">addUserAsOwner</a></code> | Declares a new database user to be assigned ownership permissions. |
| <code><a href="#shady-island.IDatabase.addUserAsReader">addUserAsReader</a></code> | Declares a new database user to be assigned read-only permissions. |
| <code><a href="#shady-island.IDatabase.addUserAsUnprivileged">addUserAsUnprivileged</a></code> | Declares a new database user with no permissions. |

---

##### `addUserAsOwner` <a name="addUserAsOwner" id="shady-island.IDatabase.addUserAsOwner"></a>

```typescript
public addUserAsOwner(secret: ISecret): void
```

Declares a new database user to be assigned ownership permissions.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.IDatabase.addUserAsOwner.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The Secrets Manager secret containing credentials.

---

##### `addUserAsReader` <a name="addUserAsReader" id="shady-island.IDatabase.addUserAsReader"></a>

```typescript
public addUserAsReader(secret: ISecret): void
```

Declares a new database user to be assigned read-only permissions.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.IDatabase.addUserAsReader.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The Secrets Manager secret containing credentials.

---

##### `addUserAsUnprivileged` <a name="addUserAsUnprivileged" id="shady-island.IDatabase.addUserAsUnprivileged"></a>

```typescript
public addUserAsUnprivileged(secret: ISecret): void
```

Declares a new database user with no permissions.

###### `secret`<sup>Required</sup> <a name="secret" id="shady-island.IDatabase.addUserAsUnprivileged.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The Secrets Manager secret containing credentials.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.IDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.IDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database/catalog. |
| <code><a href="#shady-island.IDatabase.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The cluster or instance endpoint. |
| <code><a href="#shady-island.IDatabase.property.trigger">trigger</a></code> | <code>aws-cdk-lib.triggers.ITrigger</code> | The CDK Trigger that kicks off the process. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.IDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="shady-island.IDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database/catalog.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="shady-island.IDatabase.property.endpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The cluster or instance endpoint.

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="shady-island.IDatabase.property.trigger"></a>

```typescript
public readonly trigger: ITrigger;
```

- *Type:* aws-cdk-lib.triggers.ITrigger

The CDK Trigger that kicks off the process.

You can further customize when the trigger fires using `executeAfter`.

---

### IElasticIp <a name="IElasticIp" id="shady-island.networking.IElasticIp"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* shady-island.networking.ElasticIp, shady-island.networking.IElasticIp

An EC2 Elastic IP address.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.networking.IElasticIp.grant">grant</a></code> | Grant the given identity custom permissions. |

---

##### `grant` <a name="grant" id="shady-island.networking.IElasticIp.grant"></a>

```typescript
public grant(identity: IGrantable, actions: string): Grant
```

Grant the given identity custom permissions.

e.g. `ec2:AssociateAddress`, `ec2:DisableAddressTransfer`,
`ec2:DisassociateAddress`, `ec2:EnableAddressTransfer`, among others.

###### `identity`<sup>Required</sup> <a name="identity" id="shady-island.networking.IElasticIp.grant.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The resource with a grantPrincipal property.

---

###### `actions`<sup>Required</sup> <a name="actions" id="shady-island.networking.IElasticIp.grant.parameter.actions"></a>

- *Type:* string

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

### IEncryptedFileSystem <a name="IEncryptedFileSystem" id="shady-island.IEncryptedFileSystem"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* <a href="#shady-island.EncryptedFileSystem">EncryptedFileSystem</a>, <a href="#shady-island.IEncryptedFileSystem">IEncryptedFileSystem</a>

Interface for EncryptedFileSystem.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.IEncryptedFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.IEncryptedFileSystem.property.fileSystem">fileSystem</a></code> | <code>aws-cdk-lib.aws_efs.IFileSystem</code> | The EFS file system. |
| <code><a href="#shady-island.IEncryptedFileSystem.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS encryption key. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.IEncryptedFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fileSystem`<sup>Required</sup> <a name="fileSystem" id="shady-island.IEncryptedFileSystem.property.fileSystem"></a>

```typescript
public readonly fileSystem: IFileSystem;
```

- *Type:* aws-cdk-lib.aws_efs.IFileSystem

The EFS file system.

---

##### `key`<sup>Required</sup> <a name="key" id="shady-island.IEncryptedFileSystem.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS encryption key.

---

### IEncryptedLogGroup <a name="IEncryptedLogGroup" id="shady-island.IEncryptedLogGroup"></a>

- *Implemented By:* <a href="#shady-island.EncryptedLogGroup">EncryptedLogGroup</a>, <a href="#shady-island.IEncryptedLogGroup">IEncryptedLogGroup</a>

A log group encrypted by a KMS customer managed key.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.IEncryptedLogGroup.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS encryption key. |
| <code><a href="#shady-island.IEncryptedLogGroup.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group. |

---

##### `key`<sup>Required</sup> <a name="key" id="shady-island.IEncryptedLogGroup.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS encryption key.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="shady-island.IEncryptedLogGroup.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The log group.

---

### IFargateTask <a name="IFargateTask" id="shady-island.IFargateTask"></a>

- *Extends:* aws-cdk-lib.aws_ec2.IConnectable, constructs.IConstruct

- *Implemented By:* <a href="#shady-island.FargateTask">FargateTask</a>, <a href="#shady-island.IFargateTask">IFargateTask</a>

Interface for FargateTask.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.IFargateTask.createRuleTarget">createRuleTarget</a></code> | Create a new EventBridge Rule Target that launches this ECS task. |
| <code><a href="#shady-island.IFargateTask.createStateMachineTask">createStateMachineTask</a></code> | Create a new Step Functions task that launches this ECS task. |
| <code><a href="#shady-island.IFargateTask.grantRun">grantRun</a></code> | Grants permission to invoke ecs:RunTask on this task's cluster. |

---

##### `createRuleTarget` <a name="createRuleTarget" id="shady-island.IFargateTask.createRuleTarget"></a>

```typescript
public createRuleTarget(props: EventTargetProps): EcsTask
```

Create a new EventBridge Rule Target that launches this ECS task.

###### `props`<sup>Required</sup> <a name="props" id="shady-island.IFargateTask.createRuleTarget.parameter.props"></a>

- *Type:* <a href="#shady-island.EventTargetProps">EventTargetProps</a>

The properties to create the EcsTask object.

---

##### `createStateMachineTask` <a name="createStateMachineTask" id="shady-island.IFargateTask.createStateMachineTask"></a>

```typescript
public createStateMachineTask(id: string, props: StateMachineTaskProps): EcsRunTask
```

Create a new Step Functions task that launches this ECS task.

###### `id`<sup>Required</sup> <a name="id" id="shady-island.IFargateTask.createStateMachineTask.parameter.id"></a>

- *Type:* string

The construct ID.

---

###### `props`<sup>Required</sup> <a name="props" id="shady-island.IFargateTask.createStateMachineTask.parameter.props"></a>

- *Type:* <a href="#shady-island.StateMachineTaskProps">StateMachineTaskProps</a>

The properties to create the EcsRunTask object.

---

##### `grantRun` <a name="grantRun" id="shady-island.IFargateTask.grantRun"></a>

```typescript
public grantRun(grantee: IGrantable): Grant
```

Grants permission to invoke ecs:RunTask on this task's cluster.

###### `grantee`<sup>Required</sup> <a name="grantee" id="shady-island.IFargateTask.grantRun.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The recipient of the permissions.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.IFargateTask.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#shady-island.IFargateTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.IFargateTask.property.awsVpcNetworkConfig">awsVpcNetworkConfig</a></code> | <code><a href="#shady-island.FargateAwsVpcConfiguration">FargateAwsVpcConfiguration</a></code> | Get the networkConfiguration.awsvpcConfiguration property to run this task. |
| <code><a href="#shady-island.IFargateTask.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | The name of the cluster that hosts the service. |
| <code><a href="#shady-island.IFargateTask.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.FargateTaskDefinition</code> | The task definition that can be launched. |

---

##### `connections`<sup>Required</sup> <a name="connections" id="shady-island.IFargateTask.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.IFargateTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `awsVpcNetworkConfig`<sup>Required</sup> <a name="awsVpcNetworkConfig" id="shady-island.IFargateTask.property.awsVpcNetworkConfig"></a>

```typescript
public readonly awsVpcNetworkConfig: FargateAwsVpcConfiguration;
```

- *Type:* <a href="#shady-island.FargateAwsVpcConfiguration">FargateAwsVpcConfiguration</a>

Get the networkConfiguration.awsvpcConfiguration property to run this task.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="shady-island.IFargateTask.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

The name of the cluster that hosts the service.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="shady-island.IFargateTask.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: FargateTaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.FargateTaskDefinition

The task definition that can be launched.

---

### IRunnableFargateTask <a name="IRunnableFargateTask" id="shady-island.IRunnableFargateTask"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* <a href="#shady-island.RunnableFargateTask">RunnableFargateTask</a>, <a href="#shady-island.IRunnableFargateTask">IRunnableFargateTask</a>

Interface for RunnableFargateTask.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.IRunnableFargateTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.IRunnableFargateTask.property.task">task</a></code> | <code><a href="#shady-island.IFargateTask">IFargateTask</a></code> | The FargateTask in this construct. |
| <code><a href="#shady-island.IRunnableFargateTask.property.taskDefinition">taskDefinition</a></code> | <code>aws-cdk-lib.aws_ecs.FargateTaskDefinition</code> | The FargateTaskDefinition in this construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.IRunnableFargateTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `task`<sup>Required</sup> <a name="task" id="shady-island.IRunnableFargateTask.property.task"></a>

```typescript
public readonly task: IFargateTask;
```

- *Type:* <a href="#shady-island.IFargateTask">IFargateTask</a>

The FargateTask in this construct.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="shady-island.IRunnableFargateTask.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: FargateTaskDefinition;
```

- *Type:* aws-cdk-lib.aws_ecs.FargateTaskDefinition

The FargateTaskDefinition in this construct.

---

### ISecretHttpHeader <a name="ISecretHttpHeader" id="shady-island.networking.ISecretHttpHeader"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* shady-island.networking.SecretHttpHeader, shady-island.networking.ISecretHttpHeader

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

