import { App, Duration, Stack, ValidationError } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import {
  AttributeType,
  StreamViewType,
  TableV2,
} from "aws-cdk-lib/aws-dynamodb";
import { Key } from "aws-cdk-lib/aws-kms";
import {
  Code,
  Function,
  Runtime,
  StartingPosition,
} from "aws-cdk-lib/aws-lambda";
import { DynamoEventSource } from "aws-cdk-lib/aws-lambda-event-sources";
import { Queue, QueueEncryption } from "aws-cdk-lib/aws-sqs";
import { FailedInvocations } from "../../src/fn/failed-invocations";

describe("FailedInvocations", () => {
  let app: App;
  let stack: Stack;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack", {
      env: { region: "us-east-1", account: "123456789012" },
    });
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
  });

  function createFunction(id: string) {
    return new Function(stack, id, {
      code: Code.fromInline("exports.handler = async () => {};"),
      runtime: Runtime.NODEJS_22_X,
      handler: "index.handler",
    });
  }

  describe("#constructor", () => {
    test("creates a queue and alarm with defaults", () => {
      const failures = new FailedInvocations(stack, "Failures");
      const queueName = failures.queue.queueName;

      const template = Template.fromStack(stack);
      template.resourceCountIs("AWS::SQS::Queue", 1);
      template.hasResourceProperties("AWS::SQS::Queue", {
        MessageRetentionPeriod: 1209600,
      });
      template.hasResourceProperties("AWS::SQS::QueuePolicy", {
        PolicyDocument: {
          Statement: Match.arrayWith([
            Match.objectLike({
              Effect: "Deny",
              Condition: { Bool: { "aws:SecureTransport": "false" } },
            }),
          ]),
        },
      });
      template.resourceCountIs("AWS::CloudWatch::Alarm", 1);
      template.hasResourceProperties("AWS::CloudWatch::Alarm", {
        Namespace: "AWS/SQS",
        MetricName: "ApproximateNumberOfMessagesVisible",
        Dimensions: [
          {
            Name: "QueueName",
            Value: stack.resolve(queueName),
          },
        ],
        Period: 300,
        Threshold: 0,
        ComparisonOperator: "GreaterThanThreshold",
        EvaluationPeriods: 1,
        TreatMissingData: "notBreaching",
        AlarmDescription: stack.resolve(
          `Messages in dead-letter queue: ${queueName}`
        ),
      });
    });

    test("applies queueProps over the defaults", () => {
      const key = new Key(stack, "Key");
      new FailedInvocations(stack, "Failures", {
        queueProps: {
          fifo: true,
          encryption: QueueEncryption.KMS,
          encryptionMasterKey: key,
          retentionPeriod: Duration.days(7),
        },
      });

      const template = Template.fromStack(stack);
      template.resourceCountIs("AWS::SQS::Queue", 1);
      template.hasResourceProperties("AWS::SQS::Queue", {
        FifoQueue: true,
        KmsMasterKeyId: stack.resolve(key.keyArn),
        MessageRetentionPeriod: 604800,
      });
    });

    test("adopts an existing queue instead of creating one", () => {
      const existing = new Queue(stack, "Existing");
      const failures = new FailedInvocations(stack, "Failures", {
        queue: existing,
      });

      expect(failures.queue).toBe(existing);
      const template = Template.fromStack(stack);
      template.resourceCountIs("AWS::SQS::Queue", 1);
      template.hasResourceProperties("AWS::CloudWatch::Alarm", {
        Dimensions: [
          {
            Name: "QueueName",
            Value: stack.resolve(existing.queueName),
          },
        ],
      });
    });

    test("uses alarmPeriod and alarmDescription", () => {
      new FailedInvocations(stack, "Failures", {
        alarmPeriod: Duration.minutes(1),
        alarmDescription: "Something went wrong",
      });

      Template.fromStack(stack).hasResourceProperties(
        "AWS::CloudWatch::Alarm",
        {
          Period: 60,
          AlarmDescription: "Something went wrong",
        }
      );
    });

    test("throws if given queue and queueProps", () => {
      const existing = new Queue(stack, "Existing");

      expect(
        () =>
          new FailedInvocations(stack, "Failures", {
            queue: existing,
            queueProps: { retentionPeriod: Duration.days(7) },
          })
      ).toThrow(ValidationError);
    });

    test("throws if given queue and empty queueProps", () => {
      const existing = new Queue(stack, "Existing");

      expect(
        () =>
          new FailedInvocations(stack, "Failures", {
            queue: existing,
            queueProps: {},
          })
      ).toThrow(ValidationError);
    });
  });

  describe("#capture", () => {
    test("sends failed async invocations to the queue", () => {
      const failures = new FailedInvocations(stack, "Failures");
      const fn = createFunction("Fn");

      failures.capture(fn);

      const template = Template.fromStack(stack);
      const queueArn = stack.resolve(failures.queue.queueArn);
      template.hasResourceProperties("AWS::Lambda::EventInvokeConfig", {
        DestinationConfig: { OnFailure: { Destination: queueArn } },
        MaximumRetryAttempts: Match.absent(),
        MaximumEventAgeInSeconds: Match.absent(),
      });
      template.hasResourceProperties("AWS::IAM::Policy", {
        PolicyDocument: {
          Statement: Match.arrayWith([
            Match.objectLike({
              Action: Match.arrayWith(["sqs:SendMessage"]),
              Resource: queueArn,
            }),
          ]),
        },
      });
    });

    test("passes retry options through", () => {
      const failures = new FailedInvocations(stack, "Failures");
      const fn = createFunction("Fn");

      failures.capture(fn, {
        retryAttempts: 0,
        maxEventAge: Duration.hours(1),
      });

      Template.fromStack(stack).hasResourceProperties(
        "AWS::Lambda::EventInvokeConfig",
        {
          MaximumRetryAttempts: 0,
          MaximumEventAgeInSeconds: 3600,
        }
      );
    });

    test("captures several functions with one queue", () => {
      const failures = new FailedInvocations(stack, "Failures");

      failures.capture(createFunction("Fn1"));
      failures.capture(createFunction("Fn2"));

      const template = Template.fromStack(stack);
      template.resourceCountIs("AWS::Lambda::EventInvokeConfig", 2);
      template.resourceCountIs("AWS::SQS::Queue", 1);
    });

    test("throws if the function already has an async invoke config", () => {
      const failures = new FailedInvocations(stack, "Failures");
      const fn = createFunction("Fn");
      failures.capture(fn);

      expect(() => failures.capture(fn)).toThrow(ValidationError);
    });
  });

  describe("#eventSourceDlq", () => {
    test("sends failed stream records to the queue", () => {
      const failures = new FailedInvocations(stack, "Failures");
      const fn = createFunction("Fn");
      const table = new TableV2(stack, "Table", {
        partitionKey: { name: "pk", type: AttributeType.STRING },
        dynamoStream: StreamViewType.NEW_IMAGE,
      });

      fn.addEventSource(
        new DynamoEventSource(table, {
          startingPosition: StartingPosition.TRIM_HORIZON,
          onFailure: failures.eventSourceDlq,
        })
      );

      const template = Template.fromStack(stack);
      const queueArn = stack.resolve(failures.queue.queueArn);
      template.hasResourceProperties("AWS::Lambda::EventSourceMapping", {
        DestinationConfig: { OnFailure: { Destination: queueArn } },
      });
      template.hasResourceProperties("AWS::IAM::Policy", {
        PolicyDocument: {
          Statement: Match.arrayWith([
            Match.objectLike({
              Action: Match.arrayWith(["sqs:SendMessage"]),
              Resource: queueArn,
            }),
          ]),
        },
      });
    });
  });
});
