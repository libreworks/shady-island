# `automation` Submodule <a name="`automation` Submodule" id="shady-island.automation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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


## Structs <a name="Structs" id="Structs"></a>

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



