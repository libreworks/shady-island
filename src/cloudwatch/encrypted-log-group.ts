import { Stack, RemovalPolicy } from "aws-cdk-lib";
import { ServicePrincipal } from "aws-cdk-lib/aws-iam";
import { IKey, Key } from "aws-cdk-lib/aws-kms";
import { ILogGroup, LogGroup, RetentionDays } from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";

/**
 * A log group encrypted by a KMS customer managed key.
 */
export interface IEncryptedLogGroup {
  /**
   * The KMS encryption key.
   */
  readonly key: IKey;
  /**
   * The log group.
   */
  readonly logGroup: ILogGroup;
}

/**
 * Constructor properties for EncryptedLogGroup.
 */
export interface EncryptedLogGroupProps {
  /**
   * Name of the log group.
   *
   * We need a log group name ahead of time because otherwise the key policy
   * would create a cyclical dependency.
   */
  readonly logGroupName: string;
  /**
   * How long, in days, the log contents will be retained.
   *
   * @default RetentionDays.TWO_YEARS
   */
  readonly retention?: RetentionDays;
  /**
   * The KMS Key to encrypt the log group with.
   *
   * @default A new KMS key will be created
   */
  readonly encryptionKey?: IKey;
  /**
   * Whether the key and group should be retained when they are removed from the Stack.
   *
   * @default RemovalPolicy.RETAIN
   */
  readonly removalPolicy?: RemovalPolicy;
}

/**
 * A log group encrypted by a KMS customer managed key.
 */
export class EncryptedLogGroup extends Construct implements IEncryptedLogGroup {
  public readonly key: IKey;
  public readonly logGroup: ILogGroup;

  /**
   * Creates a new EncryptedLogGroup.
   */
  public constructor(
    scope: Construct,
    id: string,
    props: EncryptedLogGroupProps
  ) {
    super(scope, id);

    const { region, account } = Stack.of(this);

    const { logGroupName, removalPolicy, retention } = props;

    const key =
      props.encryptionKey ??
      new Key(this, "Key", {
        description: `Created by ${this.node.path}`,
        removalPolicy,
      });

    const group = new LogGroup(this, "LogGroup", {
      encryptionKey: key,
      removalPolicy,
      retention,
      logGroupName,
    });

    const principal = new ServicePrincipal(
      `logs.${region}.amazonaws.com`
    ).withConditions({
      ArnEquals: {
        "kms:EncryptionContext:aws:logs:arn": `arn:aws:logs:${region}:${account}:log-group:${logGroupName}`,
      },
    });
    key.grantEncryptDecrypt(principal);

    this.key = key;
    this.logGroup = group;
  }
}
