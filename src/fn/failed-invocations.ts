import { Duration, ValidationError } from "aws-cdk-lib";
import {
  Alarm,
  ComparisonOperator,
  TreatMissingData,
} from "aws-cdk-lib/aws-cloudwatch";
import { IEventSourceDlq, IFunction } from "aws-cdk-lib/aws-lambda";
import { SqsDestination } from "aws-cdk-lib/aws-lambda-destinations";
import { SqsDlq } from "aws-cdk-lib/aws-lambda-event-sources";
import { IQueue, Queue, QueueProps } from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";

/**
 * Constructor properties for FailedInvocations.
 */
export interface FailedInvocationsProps {
  /**
   * An existing queue to alarm on, instead of creating one.
   *
   * @example
   *
   * const failures = new FailedInvocations(this, "FailedInvocations", {
   *   queue: Queue.fromQueueArn(this, "Queue", deadLetterQueueArn),
   * });
   *
   * @default - a new queue built from `queueProps`
   */
  readonly queue?: IQueue;

  /**
   * Properties for the new queue, such as `fifo` or `encryptionMasterKey`.
   *
   * @example
   *
   * const failures = new FailedInvocations(this, "FailedInvocations", {
   *   queueProps: {
   *     encryption: QueueEncryption.KMS,
   *     encryptionMasterKey: key,
   *     retentionPeriod: Duration.days(7),
   *   },
   * });
   *
   * @default - SSL enforced, 14-day retention, CDK's default SSE-SQS encryption
   */
  readonly queueProps?: QueueProps;

  /**
   * How long the queue must hold messages before the alarm goes off.
   *
   * @default - 5 minutes
   */
  readonly alarmPeriod?: Duration;

  /**
   * The alarm's description.
   *
   * @default - a description naming the queue
   */
  readonly alarmDescription?: string;
}

/**
 * Options for capturing a function's failed async invocations.
 */
export interface CaptureOptions {
  /**
   * How many times Lambda retries a failed invocation.
   *
   * @default - 2
   */
  readonly retryAttempts?: number;

  /**
   * The longest time Lambda keeps an event before giving up on it.
   *
   * @default - 6 hours
   */
  readonly maxEventAge?: Duration;
}

/**
 * A dead-letter queue for Lambda invocations that failed, and an alarm for it.
 *
 * Async invocations and stream event sources send their failure records here.
 * The alarm goes to ALARM while the queue holds any messages.
 */
export class FailedInvocations extends Construct {
  /**
   * The dead-letter queue.
   */
  public readonly queue: IQueue;

  /**
   * The alarm on visible messages in the queue.
   */
  public readonly alarm: Alarm;

  /**
   * The destination to pass as `onFailure` to a stream event source.
   *
   * @example
   *
   * const failures = new FailedInvocations(this, "FailedInvocations");
   * fn.addEventSource(
   *   new DynamoEventSource(table, {
   *     startingPosition: StartingPosition.TRIM_HORIZON,
   *     retryAttempts: 10,
   *     onFailure: failures.eventSourceDlq,
   *   })
   * );
   */
  public readonly eventSourceDlq: IEventSourceDlq;

  /**
   * Creates a new FailedInvocations.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   *
   * @throws ValidationError if `props.queue` and `props.queueProps` both exist.
   */
  public constructor(
    scope: Construct,
    id: string,
    props?: FailedInvocationsProps
  ) {
    super(scope, id);

    const { queue, queueProps, alarmDescription, alarmPeriod } = props ?? {};

    if (queue && queueProps !== undefined) {
      throw new ValidationError(
        "You cannot specify an existing queue and also properties for a new queue",
        this
      );
    }

    this.queue =
      queue ??
      new Queue(this, "Queue", {
        enforceSSL: true,
        retentionPeriod: Duration.days(14),
        ...(queueProps ?? {}),
      });

    this.eventSourceDlq = new SqsDlq(this.queue);

    this.alarm = this.queue
      .metricApproximateNumberOfMessagesVisible({ period: alarmPeriod })
      .createAlarm(this, "Alarm", {
        alarmDescription:
          alarmDescription ??
          `Messages in dead-letter queue: ${this.queue.queueName}`,
        threshold: 0,
        comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });
  }

  /**
   * Sends a Lambda function's failed async invocations to the queue.
   *
   * @param fn - The function, invoked asynchronously by S3, SNS, or another
   *   Lambda.
   * @param options - Configuration options for the async invocation.
   *
   * @throws ValidationError if the function already has an async invoke config.
   */
  public capture(fn: IFunction, options: CaptureOptions = {}): void {
    fn.configureAsyncInvoke({
      ...options,
      onFailure: new SqsDestination(this.queue),
    });
  }
}
