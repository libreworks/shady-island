# `fn` Submodule <a name="`fn` Submodule" id="shady-island.fn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailedInvocations <a name="FailedInvocations" id="shady-island.fn.FailedInvocations"></a>

A dead-letter queue for Lambda invocations that failed, and an alarm for it.

Async invocations and stream event sources send their failure records here.
The alarm goes to ALARM while the queue holds any messages.

#### Initializers <a name="Initializers" id="shady-island.fn.FailedInvocations.Initializer"></a>

```typescript
import { fn } from 'shady-island'

new fn.FailedInvocations(scope: Construct, id: string, props?: FailedInvocationsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.fn.FailedInvocations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#shady-island.fn.FailedInvocations.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#shady-island.fn.FailedInvocations.Initializer.parameter.props">props</a></code> | <code><a href="#shady-island.fn.FailedInvocationsProps">FailedInvocationsProps</a></code> | - Initialization properties for this construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="shady-island.fn.FailedInvocations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="shady-island.fn.FailedInvocations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Optional</sup> <a name="props" id="shady-island.fn.FailedInvocations.Initializer.parameter.props"></a>

- *Type:* <a href="#shady-island.fn.FailedInvocationsProps">FailedInvocationsProps</a>

Initialization properties for this construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.fn.FailedInvocations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#shady-island.fn.FailedInvocations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#shady-island.fn.FailedInvocations.capture">capture</a></code> | Sends a Lambda function's failed async invocations to the queue. |

---

##### `toString` <a name="toString" id="shady-island.fn.FailedInvocations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="shady-island.fn.FailedInvocations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="shady-island.fn.FailedInvocations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `capture` <a name="capture" id="shady-island.fn.FailedInvocations.capture"></a>

```typescript
public capture(fn: IFunction, options?: CaptureOptions): void
```

Sends a Lambda function's failed async invocations to the queue.

###### `fn`<sup>Required</sup> <a name="fn" id="shady-island.fn.FailedInvocations.capture.parameter.fn"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The function, invoked asynchronously by S3, SNS, or another Lambda.

---

###### `options`<sup>Optional</sup> <a name="options" id="shady-island.fn.FailedInvocations.capture.parameter.options"></a>

- *Type:* <a href="#shady-island.fn.CaptureOptions">CaptureOptions</a>

Configuration options for the async invocation.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.fn.FailedInvocations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="shady-island.fn.FailedInvocations.isConstruct"></a>

```typescript
import { fn } from 'shady-island'

fn.FailedInvocations.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="shady-island.fn.FailedInvocations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.fn.FailedInvocations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#shady-island.fn.FailedInvocations.property.alarm">alarm</a></code> | <code>aws-cdk-lib.aws_cloudwatch.Alarm</code> | The alarm on visible messages in the queue. |
| <code><a href="#shady-island.fn.FailedInvocations.property.eventSourceDlq">eventSourceDlq</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSourceDlq</code> | The destination to pass as `onFailure` to a stream event source. |
| <code><a href="#shady-island.fn.FailedInvocations.property.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The dead-letter queue. |

---

##### `node`<sup>Required</sup> <a name="node" id="shady-island.fn.FailedInvocations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `alarm`<sup>Required</sup> <a name="alarm" id="shady-island.fn.FailedInvocations.property.alarm"></a>

```typescript
public readonly alarm: Alarm;
```

- *Type:* aws-cdk-lib.aws_cloudwatch.Alarm

The alarm on visible messages in the queue.

---

##### `eventSourceDlq`<sup>Required</sup> <a name="eventSourceDlq" id="shady-island.fn.FailedInvocations.property.eventSourceDlq"></a>

```typescript
public readonly eventSourceDlq: IEventSourceDlq;
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSourceDlq

The destination to pass as `onFailure` to a stream event source.

---

*Example*

```typescript
const failures = new FailedInvocations(this, "FailedInvocations");
fn.addEventSource(
  new DynamoEventSource(table, {
    startingPosition: StartingPosition.TRIM_HORIZON,
    retryAttempts: 10,
    onFailure: failures.eventSourceDlq,
  })
);
```


##### `queue`<sup>Required</sup> <a name="queue" id="shady-island.fn.FailedInvocations.property.queue"></a>

```typescript
public readonly queue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The dead-letter queue.

---


## Structs <a name="Structs" id="Structs"></a>

### CaptureOptions <a name="CaptureOptions" id="shady-island.fn.CaptureOptions"></a>

Options for capturing a function's failed async invocations.

#### Initializer <a name="Initializer" id="shady-island.fn.CaptureOptions.Initializer"></a>

```typescript
import { fn } from 'shady-island'

const captureOptions: fn.CaptureOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.fn.CaptureOptions.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The longest time Lambda keeps an event before giving up on it. |
| <code><a href="#shady-island.fn.CaptureOptions.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | How many times Lambda retries a failed invocation. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="shady-island.fn.CaptureOptions.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 6 hours

The longest time Lambda keeps an event before giving up on it.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="shady-island.fn.CaptureOptions.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

How many times Lambda retries a failed invocation.

---

### FailedInvocationsProps <a name="FailedInvocationsProps" id="shady-island.fn.FailedInvocationsProps"></a>

Constructor properties for FailedInvocations.

#### Initializer <a name="Initializer" id="shady-island.fn.FailedInvocationsProps.Initializer"></a>

```typescript
import { fn } from 'shady-island'

const failedInvocationsProps: fn.FailedInvocationsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.fn.FailedInvocationsProps.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | The alarm's description. |
| <code><a href="#shady-island.fn.FailedInvocationsProps.property.alarmPeriod">alarmPeriod</a></code> | <code>aws-cdk-lib.Duration</code> | How long the queue must hold messages before the alarm goes off. |
| <code><a href="#shady-island.fn.FailedInvocationsProps.property.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | An existing queue to alarm on, instead of creating one. |
| <code><a href="#shady-island.fn.FailedInvocationsProps.property.queueProps">queueProps</a></code> | <code>aws-cdk-lib.aws_sqs.QueueProps</code> | Properties for the new queue, such as `fifo` or `encryptionMasterKey`. |

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="shady-island.fn.FailedInvocationsProps.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string
- *Default:* a description naming the queue

The alarm's description.

---

##### `alarmPeriod`<sup>Optional</sup> <a name="alarmPeriod" id="shady-island.fn.FailedInvocationsProps.property.alarmPeriod"></a>

```typescript
public readonly alarmPeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 5 minutes

How long the queue must hold messages before the alarm goes off.

---

##### `queue`<sup>Optional</sup> <a name="queue" id="shady-island.fn.FailedInvocationsProps.property.queue"></a>

```typescript
public readonly queue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* a new queue built from `queueProps`

An existing queue to alarm on, instead of creating one.

---

*Example*

```typescript
const failures = new FailedInvocations(this, "FailedInvocations", {
  queue: Queue.fromQueueArn(this, "Queue", deadLetterQueueArn),
});
```


##### `queueProps`<sup>Optional</sup> <a name="queueProps" id="shady-island.fn.FailedInvocationsProps.property.queueProps"></a>

```typescript
public readonly queueProps: QueueProps;
```

- *Type:* aws-cdk-lib.aws_sqs.QueueProps
- *Default:* SSL enforced, 14-day retention, CDK's default SSE-SQS encryption

Properties for the new queue, such as `fifo` or `encryptionMasterKey`.

---

*Example*

```typescript
const failures = new FailedInvocations(this, "FailedInvocations", {
  queueProps: {
    encryption: QueueEncryption.KMS,
    encryptionMasterKey: key,
    retentionPeriod: Duration.days(7),
  },
});
```


### PowertoolsLayerOptions <a name="PowertoolsLayerOptions" id="shady-island.fn.PowertoolsLayerOptions"></a>

Options for calling the PowertoolsLayer methods.

#### Initializer <a name="Initializer" id="shady-island.fn.PowertoolsLayerOptions.Initializer"></a>

```typescript
import { fn } from 'shady-island'

const powertoolsLayerOptions: fn.PowertoolsLayerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.fn.PowertoolsLayerOptions.property.layerVersion">layerVersion</a></code> | <code>number</code> | The version of the Lambda Layer desired. |
| <code><a href="#shady-island.fn.PowertoolsLayerOptions.property.version">version</a></code> | <code>string</code> | The version of Powertools desired. |

---

##### `layerVersion`<sup>Optional</sup> <a name="layerVersion" id="shady-island.fn.PowertoolsLayerOptions.property.layerVersion"></a>

```typescript
public readonly layerVersion: number;
```

- *Type:* number

The version of the Lambda Layer desired.

Overrides {@link version}.

---

##### `version`<sup>Optional</sup> <a name="version" id="shady-island.fn.PowertoolsLayerOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "latest"

The version of Powertools desired.

Ignored if you specify layerVersion.

---

### PowertoolsPythonOptions <a name="PowertoolsPythonOptions" id="shady-island.fn.PowertoolsPythonOptions"></a>

Options for calling the PowertoolsLayer.forPythonV3 method.

#### Initializer <a name="Initializer" id="shady-island.fn.PowertoolsPythonOptions.Initializer"></a>

```typescript
import { fn } from 'shady-island'

const powertoolsPythonOptions: fn.PowertoolsPythonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.fn.PowertoolsPythonOptions.property.layerVersion">layerVersion</a></code> | <code>number</code> | The version of the Lambda Layer desired. |
| <code><a href="#shady-island.fn.PowertoolsPythonOptions.property.version">version</a></code> | <code>string</code> | The version of Powertools desired. |
| <code><a href="#shady-island.fn.PowertoolsPythonOptions.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | The Python version (e.g. 3.10, 3.14). |
| <code><a href="#shady-island.fn.PowertoolsPythonOptions.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The CPU architecture for the Lambda function. |

---

##### `layerVersion`<sup>Optional</sup> <a name="layerVersion" id="shady-island.fn.PowertoolsPythonOptions.property.layerVersion"></a>

```typescript
public readonly layerVersion: number;
```

- *Type:* number

The version of the Lambda Layer desired.

Overrides {@link version}.

---

##### `version`<sup>Optional</sup> <a name="version" id="shady-island.fn.PowertoolsPythonOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "latest"

The version of Powertools desired.

Ignored if you specify layerVersion.

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="shady-island.fn.PowertoolsPythonOptions.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

The Python version (e.g. 3.10, 3.14).

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="shady-island.fn.PowertoolsPythonOptions.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The CPU architecture for the Lambda function.

---

### PowertoolsTypeScriptOptions <a name="PowertoolsTypeScriptOptions" id="shady-island.fn.PowertoolsTypeScriptOptions"></a>

Options for calling the PowertoolsLayer.forTypeScriptV2 method.

#### Initializer <a name="Initializer" id="shady-island.fn.PowertoolsTypeScriptOptions.Initializer"></a>

```typescript
import { fn } from 'shady-island'

const powertoolsTypeScriptOptions: fn.PowertoolsTypeScriptOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.fn.PowertoolsTypeScriptOptions.property.layerVersion">layerVersion</a></code> | <code>number</code> | The version of the Lambda Layer desired. |
| <code><a href="#shady-island.fn.PowertoolsTypeScriptOptions.property.version">version</a></code> | <code>string</code> | The version of Powertools desired. |

---

##### `layerVersion`<sup>Optional</sup> <a name="layerVersion" id="shady-island.fn.PowertoolsTypeScriptOptions.property.layerVersion"></a>

```typescript
public readonly layerVersion: number;
```

- *Type:* number

The version of the Lambda Layer desired.

Overrides {@link version}.

---

##### `version`<sup>Optional</sup> <a name="version" id="shady-island.fn.PowertoolsTypeScriptOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "latest"

The version of Powertools desired.

Ignored if you specify layerVersion.

---

## Classes <a name="Classes" id="Classes"></a>

### PowertoolsLayer <a name="PowertoolsLayer" id="shady-island.fn.PowertoolsLayer"></a>

Provides Lambda Layers for Powertools.

```typescript
PowertoolsLayer.forTypeScriptV2(scope);
PowertoolsLayer.forTypeScriptV2(scope, { version: "2.34.0" });
PowertoolsLayer.forTypeScriptV2(scope, { layerVersion: 49 });

PowertoolsLayer.forPythonV3(scope, { pythonVersion: "3.14" });
PowertoolsLayer.forPythonV3(scope, { pythonVersion: "3.14", architecture: Architecture.ARM_64 });
PowertoolsLayer.forPythonV3(scope, { pythonVersion: "3.14", version: "3.31.1" });
PowertoolsLayer.forPythonV3(scope, { pythonVersion: "3.14", layerVersion: 36 });
```

#### Initializers <a name="Initializers" id="shady-island.fn.PowertoolsLayer.Initializer"></a>

```typescript
import { fn } from 'shady-island'

new fn.PowertoolsLayer()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.fn.PowertoolsLayer.forPythonV3">forPythonV3</a></code> | Get the Lambda Layer for Python V3. |
| <code><a href="#shady-island.fn.PowertoolsLayer.forTypeScriptV2">forTypeScriptV2</a></code> | Get the Lambda Layer for TypeScript V2. |

---

##### `forPythonV3` <a name="forPythonV3" id="shady-island.fn.PowertoolsLayer.forPythonV3"></a>

```typescript
import { fn } from 'shady-island'

fn.PowertoolsLayer.forPythonV3(scope: Construct, options: PowertoolsPythonOptions)
```

Get the Lambda Layer for Python V3.

If you supply neither "version" nor "layerVersion", the latest possible
version of the Layer is returned by looking it up in SSM Parameter Store.

If you supply the "version" option, the Layer is returned by looking it up
in SSM Parameter Store.

If you supply the "layerVersion" option, SSM is not involved.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.fn.PowertoolsLayer.forPythonV3.parameter.scope"></a>

- *Type:* constructs.Construct

The parent scope.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.fn.PowertoolsLayer.forPythonV3.parameter.options"></a>

- *Type:* <a href="#shady-island.fn.PowertoolsPythonOptions">PowertoolsPythonOptions</a>

The configuration options.

---

##### `forTypeScriptV2` <a name="forTypeScriptV2" id="shady-island.fn.PowertoolsLayer.forTypeScriptV2"></a>

```typescript
import { fn } from 'shady-island'

fn.PowertoolsLayer.forTypeScriptV2(scope: Construct, options?: PowertoolsTypeScriptOptions)
```

Get the Lambda Layer for TypeScript V2.

If you supply neither "version" nor "layerVersion", the latest possible
version of the Layer is returned by looking it up in SSM Parameter Store.

If you supply the "version" option, the Layer is returned by looking it up
in SSM Parameter Store.

If you supply the "layerVersion" option, SSM is not involved.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.fn.PowertoolsLayer.forTypeScriptV2.parameter.scope"></a>

- *Type:* constructs.Construct

The parent scope.

---

###### `options`<sup>Optional</sup> <a name="options" id="shady-island.fn.PowertoolsLayer.forTypeScriptV2.parameter.options"></a>

- *Type:* <a href="#shady-island.fn.PowertoolsTypeScriptOptions">PowertoolsTypeScriptOptions</a>

The configuration options.

---




