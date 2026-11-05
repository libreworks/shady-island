# Lambda

These constructs and classes relate to Lambda functions.

- `FailedInvocations` – A dead-letter queue for failed Lambda invocations, with an alarm that goes off when the queue holds any messages
- `PowertoolsLayer` – A class that provides the Lambda Layers for Powertools for AWS Lambda

## `FailedInvocations`

You can use the `FailedInvocations` construct to create both an `AWS::SQS::Queue` _and_ an `AWS::CloudWatch::Alarm` that watches it. Failed Lambda invocations land in the queue, and the alarm enters the `ALARM` state as long as the queue holds any visible messages.

By default, the construct creates a queue that enforces SSL and keeps messages for 14 days. You can supply your own `queueProps` (for example, to encrypt the queue with a KMS customer managed key) or bring an existing `queue` instead, but not both.

```typescript
import { Duration } from "aws-cdk-lib";
import { FailedInvocations } from "shady-island/lib/fn";

const failures = new FailedInvocations(stack, "FailedInvocations", {
  alarmPeriod: Duration.minutes(1),
});
// failures.queue instanceof IQueue
// failures.alarm instanceof Alarm
```

You can attach actions to the alarm the same way you would any other CloudWatch alarm.

```typescript
import { SnsAction } from "aws-cdk-lib/aws-cloudwatch-actions";
import { Topic } from "aws-cdk-lib/aws-sns";

declare const topic: Topic;

failures.alarm.addAlarmAction(new SnsAction(topic));
```

### `.capture(fn)`

Functions invoked asynchronously (e.g. by S3, SNS, EventBridge, or another Lambda function) don't report errors back to the caller. Lambda retries a failed invocation a few times, then discards the event. The `capture` method configures the function to send those events to the queue instead.

```typescript
import { Duration } from "aws-cdk-lib";
import { Function } from "aws-cdk-lib/aws-lambda";

declare const fn: Function;

failures.capture(fn);

// Or, with your own retry settings
failures.capture(fn, {
  retryAttempts: 1,
  maxEventAge: Duration.hours(1),
});
```

A Lambda function can only have one asynchronous invocation configuration. If the function already has one, `capture` throws an error.

### `.eventSourceDlq`

Stream event sources, like DynamoDB Streams and Kinesis, have their own failure destination setting. The `eventSourceDlq` property is ready to pass as the `onFailure` option.

```typescript
import { Function, StartingPosition } from "aws-cdk-lib/aws-lambda";
import { DynamoEventSource } from "aws-cdk-lib/aws-lambda-event-sources";
import { Table } from "aws-cdk-lib/aws-dynamodb";

declare const fn: Function;
declare const table: Table;

fn.addEventSource(
  new DynamoEventSource(table, {
    startingPosition: StartingPosition.TRIM_HORIZON,
    retryAttempts: 10,
    onFailure: failures.eventSourceDlq,
  })
);
```

You can share a single `FailedInvocations` among as many functions and event sources as you like.

## `PowertoolsLayer`

The `PowertoolsLayer` class has static methods that return the Lambda Layer for [Powertools for AWS Lambda](https://docs.powertools.aws.dev/). AWS publishes these layers in its own accounts, so there's nothing to build or deploy.

```typescript
import { Architecture, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { PowertoolsLayer } from "shady-island/lib/fn";

const nodeLayer = PowertoolsLayer.forTypeScriptV2(stack);
const pythonLayer = PowertoolsLayer.forPythonV3(stack, {
  pythonVersion: "3.14",
  architecture: Architecture.ARM_64,
});
```

There are three ways to choose which version of the layer you get.

- If you supply neither `version` nor `layerVersion`, you get the latest layer. The ARN is looked up in the public Powertools parameters in SSM Parameter Store at deploy time.
- If you supply `version` (e.g. `"2.34.0"`), you get the layer for that release of Powertools. The ARN is also looked up in SSM Parameter Store.
- If you supply `layerVersion` (e.g. `49`), you get that version of the Lambda Layer. The ARN is built directly, and SSM is not involved.

```typescript
PowertoolsLayer.forTypeScriptV2(stack, { version: "2.34.0" });
PowertoolsLayer.forTypeScriptV2(stack, { layerVersion: 49 });

PowertoolsLayer.forPythonV3(stack, {
  pythonVersion: "3.14",
  version: "3.31.1",
});
PowertoolsLayer.forPythonV3(stack, { pythonVersion: "3.14", layerVersion: 36 });
```

Each layer is created once per stack. Calling either method again with the same options from anywhere in the stack returns the same `ILayerVersion`, so you can call it for every function without creating duplicate SSM lookups.
