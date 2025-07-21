# `automation` Submodule <a name="`automation` Submodule" id="shady-island.automation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BaseDockerProject <a name="BaseDockerProject" id="shady-island.automation.BaseDockerProject"></a>

- *Implements:* aws-cdk-lib.IResource

The base for Linux-based Docker build projects.

#### Initializers <a name="Initializers" id="shady-island.automation.BaseDockerProject.Initializer"></a>

```typescript
import { automation } from 'shady-island'

new automation.BaseDockerProject(scope: Construct, id: string, props: BaseDockerProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.BaseDockerProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.automation.BaseDockerProject.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.automation.BaseDockerProject.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.automation.BaseDockerProjectProps">BaseDockerProjectProps</a></code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.automation.BaseDockerProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.automation.BaseDockerProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.automation.BaseDockerProject.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.automation.BaseDockerProjectProps">BaseDockerProjectProps</a>

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.automation.BaseDockerProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.automation.BaseDockerProject.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="shady-island.automation.BaseDockerProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="shady-island.automation.BaseDockerProject.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="shady-island.automation.BaseDockerProject.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.automation.BaseDockerProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.automation.BaseDockerProject.isConstruct"></a>

```typescript
import { automation } from 'shady-island'

automation.BaseDockerProject.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.automation.BaseDockerProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.BaseDockerProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.automation.BaseDockerProject.property.buildSpec">buildSpec</a></code> | <code>aws-cdk-lib.aws_codebuild.BuildSpec</code> | The CodeBuild build spec supplied. |
| <code><a href="#shady-island.automation.BaseDockerProject.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#shady-island.automation.BaseDockerProject.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | The log group. |
| <code><a href="#shady-island.automation.BaseDockerProject.property.project">project</a></code> | <code>aws-cdk-lib.aws_codebuild.PipelineProject</code> | The CodeBuild project. |
| <code><a href="#shady-island.automation.BaseDockerProject.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.automation.BaseDockerProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="shady-island.automation.BaseDockerProject.property.buildSpec"></a>

```typescript
public readonly buildSpec: BuildSpec;
```

- *Type:* aws-cdk-lib.aws_codebuild.BuildSpec

The CodeBuild build spec supplied.

---

##### `env`<sup>Required</sup> <a name="env" id="shady-island.automation.BaseDockerProject.property.env"></a>

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

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="shady-island.automation.BaseDockerProject.property.logGroup"></a>

```typescript
public readonly logGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

The log group.

---

##### `project`<sup>Required</sup> <a name="project" id="shady-island.automation.BaseDockerProject.property.project"></a>

```typescript
public readonly project: PipelineProject;
```

- *Type:* aws-cdk-lib.aws_codebuild.PipelineProject

The CodeBuild project.

---

##### `stack`<sup>Required</sup> <a name="stack" id="shady-island.automation.BaseDockerProject.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

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
| <code><a href="#shady-island.automation.ContainerImagePipeline.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.automation.ContainerImagePipelineProps">ContainerImagePipelineProps</a></code> | - Initialization properties for this construct. |

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

- *Type:* <a href="#shady-island.automation.ContainerImagePipelineProps">ContainerImagePipelineProps</a>

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


### LinuxDockerBuildProject <a name="LinuxDockerBuildProject" id="shady-island.automation.LinuxDockerBuildProject"></a>

Sets up a standardized Docker build project.

This project accepts the following optional environment variables:

- IMAGE_LABELS: JSON-formatted object of container labels and their values.
- BUILD_ARGS: JSON-formatted object of build arguments and their values.
- IMAGE_TAG: Optional. The image tag (e.g. Git commit ID) (default: build
  number).

#### Initializers <a name="Initializers" id="shady-island.automation.LinuxDockerBuildProject.Initializer"></a>

```typescript
import { automation } from 'shady-island'

new automation.LinuxDockerBuildProject(scope: Construct, id: string, props: LinuxDockerBuildProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.LinuxDockerBuildProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProject.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProject.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps">LinuxDockerBuildProjectProps</a></code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.automation.LinuxDockerBuildProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.automation.LinuxDockerBuildProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.automation.LinuxDockerBuildProject.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.automation.LinuxDockerBuildProjectProps">LinuxDockerBuildProjectProps</a>

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.automation.LinuxDockerBuildProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProject.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="shady-island.automation.LinuxDockerBuildProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="shady-island.automation.LinuxDockerBuildProject.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="shady-island.automation.LinuxDockerBuildProject.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.automation.LinuxDockerBuildProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.automation.LinuxDockerBuildProject.isConstruct"></a>

```typescript
import { automation } from 'shady-island'

automation.LinuxDockerBuildProject.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.automation.LinuxDockerBuildProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.LinuxDockerBuildProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProject.property.buildSpec">buildSpec</a></code> | <code>aws-cdk-lib.aws_codebuild.BuildSpec</code> | The CodeBuild build spec supplied. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProject.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProject.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | The log group. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProject.property.project">project</a></code> | <code>aws-cdk-lib.aws_codebuild.PipelineProject</code> | The CodeBuild project. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProject.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.automation.LinuxDockerBuildProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="shady-island.automation.LinuxDockerBuildProject.property.buildSpec"></a>

```typescript
public readonly buildSpec: BuildSpec;
```

- *Type:* aws-cdk-lib.aws_codebuild.BuildSpec

The CodeBuild build spec supplied.

---

##### `env`<sup>Required</sup> <a name="env" id="shady-island.automation.LinuxDockerBuildProject.property.env"></a>

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

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="shady-island.automation.LinuxDockerBuildProject.property.logGroup"></a>

```typescript
public readonly logGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

The log group.

---

##### `project`<sup>Required</sup> <a name="project" id="shady-island.automation.LinuxDockerBuildProject.property.project"></a>

```typescript
public readonly project: PipelineProject;
```

- *Type:* aws-cdk-lib.aws_codebuild.PipelineProject

The CodeBuild project.

---

##### `stack`<sup>Required</sup> <a name="stack" id="shady-island.automation.LinuxDockerBuildProject.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### LinuxDockerManifestProject <a name="LinuxDockerManifestProject" id="shady-island.automation.LinuxDockerManifestProject"></a>

Sets up a standardized Docker manifest build project.

This project accepts the following variables:

- LATEST_TAG: Optional. The tag to push (default: "latest").
- MANIFEST_CUSTOM_TAG: Optional. The tag to push, in addition to $LATEST_TAG.

#### Initializers <a name="Initializers" id="shady-island.automation.LinuxDockerManifestProject.Initializer"></a>

```typescript
import { automation } from 'shady-island'

new automation.LinuxDockerManifestProject(scope: Construct, id: string, props: LinuxDockerManifestProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.LinuxDockerManifestProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProject.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProject.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.automation.LinuxDockerManifestProjectProps">LinuxDockerManifestProjectProps</a></code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.automation.LinuxDockerManifestProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.automation.LinuxDockerManifestProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="shady-island.automation.LinuxDockerManifestProject.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.automation.LinuxDockerManifestProjectProps">LinuxDockerManifestProjectProps</a>

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.automation.LinuxDockerManifestProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProject.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="shady-island.automation.LinuxDockerManifestProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="shady-island.automation.LinuxDockerManifestProject.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="shady-island.automation.LinuxDockerManifestProject.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.automation.LinuxDockerManifestProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="shady-island.automation.LinuxDockerManifestProject.isConstruct"></a>

```typescript
import { automation } from 'shady-island'

automation.LinuxDockerManifestProject.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.automation.LinuxDockerManifestProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.LinuxDockerManifestProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProject.property.buildSpec">buildSpec</a></code> | <code>aws-cdk-lib.aws_codebuild.BuildSpec</code> | The CodeBuild build spec supplied. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProject.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProject.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | The log group. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProject.property.project">project</a></code> | <code>aws-cdk-lib.aws_codebuild.PipelineProject</code> | The CodeBuild project. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProject.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.automation.LinuxDockerManifestProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="shady-island.automation.LinuxDockerManifestProject.property.buildSpec"></a>

```typescript
public readonly buildSpec: BuildSpec;
```

- *Type:* aws-cdk-lib.aws_codebuild.BuildSpec

The CodeBuild build spec supplied.

---

##### `env`<sup>Required</sup> <a name="env" id="shady-island.automation.LinuxDockerManifestProject.property.env"></a>

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

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="shady-island.automation.LinuxDockerManifestProject.property.logGroup"></a>

```typescript
public readonly logGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

The log group.

---

##### `project`<sup>Required</sup> <a name="project" id="shady-island.automation.LinuxDockerManifestProject.property.project"></a>

```typescript
public readonly project: PipelineProject;
```

- *Type:* aws-cdk-lib.aws_codebuild.PipelineProject

The CodeBuild project.

---

##### `stack`<sup>Required</sup> <a name="stack" id="shady-island.automation.LinuxDockerManifestProject.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


## Structs <a name="Structs" id="Structs"></a>

### BaseDockerProjectProps <a name="BaseDockerProjectProps" id="shady-island.automation.BaseDockerProjectProps"></a>

Constructor properties for BaseDockerProject.

#### Initializer <a name="Initializer" id="shady-island.automation.BaseDockerProjectProps.Initializer"></a>

```typescript
import { automation } from 'shady-island'

const baseDockerProjectProps: automation.BaseDockerProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.BaseDockerProjectProps.property.repository">repository</a></code> | <code>aws-cdk-lib.aws_ecr.IRepository</code> | The ECR repository where images are pushed. |
| <code><a href="#shady-island.automation.BaseDockerProjectProps.property.description">description</a></code> | <code>string</code> | A description of this CodeBuild project. |
| <code><a href="#shady-island.automation.BaseDockerProjectProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The duration to retain log entries. |
| <code><a href="#shady-island.automation.BaseDockerProjectProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy for this project and its logs. |
| <code><a href="#shady-island.automation.BaseDockerProjectProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | Security groups to associate with the project's network interfaces. |
| <code><a href="#shady-island.automation.BaseDockerProjectProps.property.subnetSelection">subnetSelection</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#shady-island.automation.BaseDockerProjectProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place codebuild network interfaces. |
| <code><a href="#shady-island.automation.BaseDockerProjectProps.property.buildEnvironment">buildEnvironment</a></code> | <code>aws-cdk-lib.aws_codebuild.BuildEnvironment</code> | Build environment to use for the build. |
| <code><a href="#shady-island.automation.BaseDockerProjectProps.property.buildSpec">buildSpec</a></code> | <code>aws-cdk-lib.aws_codebuild.BuildSpec</code> | Filename or contents of buildspec in JSON format. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="shady-island.automation.BaseDockerProjectProps.property.repository"></a>

```typescript
public readonly repository: IRepository;
```

- *Type:* aws-cdk-lib.aws_ecr.IRepository

The ECR repository where images are pushed.

---

##### `description`<sup>Optional</sup> <a name="description" id="shady-island.automation.BaseDockerProjectProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this CodeBuild project.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="shady-island.automation.BaseDockerProjectProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* RetentionDays.THREE_MONTHS

The duration to retain log entries.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="shady-island.automation.BaseDockerProjectProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.DESTROY

The removal policy for this project and its logs.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="shady-island.automation.BaseDockerProjectProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

Security groups to associate with the project's network interfaces.

---

##### `subnetSelection`<sup>Optional</sup> <a name="subnetSelection" id="shady-island.automation.BaseDockerProjectProps.property.subnetSelection"></a>

```typescript
public readonly subnetSelection: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Where to place the network interfaces within the VPC.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="shady-island.automation.BaseDockerProjectProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC network to place codebuild network interfaces.

---

##### `buildEnvironment`<sup>Required</sup> <a name="buildEnvironment" id="shady-island.automation.BaseDockerProjectProps.property.buildEnvironment"></a>

```typescript
public readonly buildEnvironment: BuildEnvironment;
```

- *Type:* aws-cdk-lib.aws_codebuild.BuildEnvironment

Build environment to use for the build.

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="shady-island.automation.BaseDockerProjectProps.property.buildSpec"></a>

```typescript
public readonly buildSpec: BuildSpec;
```

- *Type:* aws-cdk-lib.aws_codebuild.BuildSpec

Filename or contents of buildspec in JSON format.

---

### CommonDockerProps <a name="CommonDockerProps" id="shady-island.automation.CommonDockerProps"></a>

Common Docker build properties.

#### Initializer <a name="Initializer" id="shady-island.automation.CommonDockerProps.Initializer"></a>

```typescript
import { automation } from 'shady-island'

const commonDockerProps: automation.CommonDockerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.CommonDockerProps.property.repository">repository</a></code> | <code>aws-cdk-lib.aws_ecr.IRepository</code> | The ECR repository where images are pushed. |
| <code><a href="#shady-island.automation.CommonDockerProps.property.description">description</a></code> | <code>string</code> | A description of this CodeBuild project. |
| <code><a href="#shady-island.automation.CommonDockerProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The duration to retain log entries. |
| <code><a href="#shady-island.automation.CommonDockerProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy for this project and its logs. |
| <code><a href="#shady-island.automation.CommonDockerProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | Security groups to associate with the project's network interfaces. |
| <code><a href="#shady-island.automation.CommonDockerProps.property.subnetSelection">subnetSelection</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#shady-island.automation.CommonDockerProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place codebuild network interfaces. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="shady-island.automation.CommonDockerProps.property.repository"></a>

```typescript
public readonly repository: IRepository;
```

- *Type:* aws-cdk-lib.aws_ecr.IRepository

The ECR repository where images are pushed.

---

##### `description`<sup>Optional</sup> <a name="description" id="shady-island.automation.CommonDockerProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this CodeBuild project.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="shady-island.automation.CommonDockerProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* RetentionDays.THREE_MONTHS

The duration to retain log entries.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="shady-island.automation.CommonDockerProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.DESTROY

The removal policy for this project and its logs.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="shady-island.automation.CommonDockerProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

Security groups to associate with the project's network interfaces.

---

##### `subnetSelection`<sup>Optional</sup> <a name="subnetSelection" id="shady-island.automation.CommonDockerProps.property.subnetSelection"></a>

```typescript
public readonly subnetSelection: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Where to place the network interfaces within the VPC.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="shady-island.automation.CommonDockerProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC network to place codebuild network interfaces.

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

### LinuxDockerBuildProjectProps <a name="LinuxDockerBuildProjectProps" id="shady-island.automation.LinuxDockerBuildProjectProps"></a>

Constructor properties for LinuxDockerBuildProject.

#### Initializer <a name="Initializer" id="shady-island.automation.LinuxDockerBuildProjectProps.Initializer"></a>

```typescript
import { automation } from 'shady-island'

const linuxDockerBuildProjectProps: automation.LinuxDockerBuildProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.repository">repository</a></code> | <code>aws-cdk-lib.aws_ecr.IRepository</code> | The ECR repository where images are pushed. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.description">description</a></code> | <code>string</code> | A description of this CodeBuild project. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The duration to retain log entries. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy for this project and its logs. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | Security groups to associate with the project's network interfaces. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.subnetSelection">subnetSelection</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place codebuild network interfaces. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.buildDirectory">buildDirectory</a></code> | <code>string</code> | The build context directory. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.buildImage">buildImage</a></code> | <code>aws-cdk-lib.aws_codebuild.IBuildImage</code> | The CodeBuild build image to use. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.computeType">computeType</a></code> | <code>aws-cdk-lib.aws_codebuild.ComputeType</code> | The type of compute to use for this build. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.dockerfile">dockerfile</a></code> | <code>string</code> | The filename of the Dockerfile. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.enableCache">enableCache</a></code> | <code>boolean</code> | Whether to enable build caching. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.pushLatest">pushLatest</a></code> | <code>boolean</code> | Whether to push a "latest" tag. |
| <code><a href="#shady-island.automation.LinuxDockerBuildProjectProps.property.testCommands">testCommands</a></code> | <code>string[]</code> | Commands used to test the image once built. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="shady-island.automation.LinuxDockerBuildProjectProps.property.repository"></a>

```typescript
public readonly repository: IRepository;
```

- *Type:* aws-cdk-lib.aws_ecr.IRepository

The ECR repository where images are pushed.

---

##### `description`<sup>Optional</sup> <a name="description" id="shady-island.automation.LinuxDockerBuildProjectProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this CodeBuild project.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="shady-island.automation.LinuxDockerBuildProjectProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* RetentionDays.THREE_MONTHS

The duration to retain log entries.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="shady-island.automation.LinuxDockerBuildProjectProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.DESTROY

The removal policy for this project and its logs.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="shady-island.automation.LinuxDockerBuildProjectProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

Security groups to associate with the project's network interfaces.

---

##### `subnetSelection`<sup>Optional</sup> <a name="subnetSelection" id="shady-island.automation.LinuxDockerBuildProjectProps.property.subnetSelection"></a>

```typescript
public readonly subnetSelection: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Where to place the network interfaces within the VPC.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="shady-island.automation.LinuxDockerBuildProjectProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC network to place codebuild network interfaces.

---

##### `buildDirectory`<sup>Optional</sup> <a name="buildDirectory" id="shady-island.automation.LinuxDockerBuildProjectProps.property.buildDirectory"></a>

```typescript
public readonly buildDirectory: string;
```

- *Type:* string
- *Default:* The current directory (.)

The build context directory.

---

##### `buildImage`<sup>Optional</sup> <a name="buildImage" id="shady-island.automation.LinuxDockerBuildProjectProps.property.buildImage"></a>

```typescript
public readonly buildImage: IBuildImage;
```

- *Type:* aws-cdk-lib.aws_codebuild.IBuildImage
- *Default:* LinuxBuildImage.STANDARD_7_0

The CodeBuild build image to use.

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="shady-island.automation.LinuxDockerBuildProjectProps.property.computeType"></a>

```typescript
public readonly computeType: ComputeType;
```

- *Type:* aws-cdk-lib.aws_codebuild.ComputeType
- *Default:* ComputeType.SMALL

The type of compute to use for this build.

---

##### `dockerfile`<sup>Optional</sup> <a name="dockerfile" id="shady-island.automation.LinuxDockerBuildProjectProps.property.dockerfile"></a>

```typescript
public readonly dockerfile: string;
```

- *Type:* string
- *Default:* Dockerfile

The filename of the Dockerfile.

---

##### `enableCache`<sup>Optional</sup> <a name="enableCache" id="shady-island.automation.LinuxDockerBuildProjectProps.property.enableCache"></a>

```typescript
public readonly enableCache: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable build caching.

---

##### `pushLatest`<sup>Optional</sup> <a name="pushLatest" id="shady-island.automation.LinuxDockerBuildProjectProps.property.pushLatest"></a>

```typescript
public readonly pushLatest: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to push a "latest" tag.

---

##### `testCommands`<sup>Optional</sup> <a name="testCommands" id="shady-island.automation.LinuxDockerBuildProjectProps.property.testCommands"></a>

```typescript
public readonly testCommands: string[];
```

- *Type:* string[]

Commands used to test the image once built.

---

### LinuxDockerManifestProjectProps <a name="LinuxDockerManifestProjectProps" id="shady-island.automation.LinuxDockerManifestProjectProps"></a>

Constructor properties for LinuxDockerManifestProject.

#### Initializer <a name="Initializer" id="shady-island.automation.LinuxDockerManifestProjectProps.Initializer"></a>

```typescript
import { automation } from 'shady-island'

const linuxDockerManifestProjectProps: automation.LinuxDockerManifestProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.automation.LinuxDockerManifestProjectProps.property.repository">repository</a></code> | <code>aws-cdk-lib.aws_ecr.IRepository</code> | The ECR repository where images are pushed. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProjectProps.property.description">description</a></code> | <code>string</code> | A description of this CodeBuild project. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProjectProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The duration to retain log entries. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProjectProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy for this project and its logs. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProjectProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | Security groups to associate with the project's network interfaces. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProjectProps.property.subnetSelection">subnetSelection</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProjectProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place codebuild network interfaces. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProjectProps.property.tagVariableNames">tagVariableNames</a></code> | <code>string[]</code> | The names of environment variables that contain the image hashes to add. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProjectProps.property.buildImage">buildImage</a></code> | <code>aws-cdk-lib.aws_codebuild.IBuildImage</code> | The CodeBuild build image to use. |
| <code><a href="#shady-island.automation.LinuxDockerManifestProjectProps.property.computeType">computeType</a></code> | <code>aws-cdk-lib.aws_codebuild.ComputeType</code> | The type of compute to use for this build. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="shady-island.automation.LinuxDockerManifestProjectProps.property.repository"></a>

```typescript
public readonly repository: IRepository;
```

- *Type:* aws-cdk-lib.aws_ecr.IRepository

The ECR repository where images are pushed.

---

##### `description`<sup>Optional</sup> <a name="description" id="shady-island.automation.LinuxDockerManifestProjectProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this CodeBuild project.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="shady-island.automation.LinuxDockerManifestProjectProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* RetentionDays.THREE_MONTHS

The duration to retain log entries.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="shady-island.automation.LinuxDockerManifestProjectProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.DESTROY

The removal policy for this project and its logs.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="shady-island.automation.LinuxDockerManifestProjectProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

Security groups to associate with the project's network interfaces.

---

##### `subnetSelection`<sup>Optional</sup> <a name="subnetSelection" id="shady-island.automation.LinuxDockerManifestProjectProps.property.subnetSelection"></a>

```typescript
public readonly subnetSelection: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Where to place the network interfaces within the VPC.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="shady-island.automation.LinuxDockerManifestProjectProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC network to place codebuild network interfaces.

---

##### `tagVariableNames`<sup>Required</sup> <a name="tagVariableNames" id="shady-island.automation.LinuxDockerManifestProjectProps.property.tagVariableNames"></a>

```typescript
public readonly tagVariableNames: string[];
```

- *Type:* string[]

The names of environment variables that contain the image hashes to add.

---

##### `buildImage`<sup>Optional</sup> <a name="buildImage" id="shady-island.automation.LinuxDockerManifestProjectProps.property.buildImage"></a>

```typescript
public readonly buildImage: IBuildImage;
```

- *Type:* aws-cdk-lib.aws_codebuild.IBuildImage
- *Default:* LinuxBuildImage.STANDARD_7_0

The CodeBuild build image to use.

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="shady-island.automation.LinuxDockerManifestProjectProps.property.computeType"></a>

```typescript
public readonly computeType: ComputeType;
```

- *Type:* aws-cdk-lib.aws_codebuild.ComputeType
- *Default:* ComputeType.SMALL

The type of compute to use for this build.

---



