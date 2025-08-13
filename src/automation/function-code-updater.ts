import * as path from "node:path";
import { Duration } from "aws-cdk-lib";
import { Grant, IGrantable, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Code, Function, IFunction, Runtime } from "aws-cdk-lib/aws-lambda";
import { S3EventSourceV2 } from "aws-cdk-lib/aws-lambda-event-sources";
import { IBucket, EventType } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

const HANDLER_PATH = path.join(
  __dirname,
  "../../assets/automation/function-code-updater"
);

/**
 * Constructor properties for FunctionCodeUpdater.
 */
export interface FunctionCodeUpdaterProps {
  /**
   * The bucket to monitor for changes.
   */
  readonly bucket: IBucket;

  /**
   * The object within the bucket to monitor (e.g. my-application/code.zip)
   */
  readonly objectKey: string;

  /**
   * The Lambda function to update.
   */
  readonly target: IFunction;
}

/**
 * Automates deployments of Lambda function code.
 *
 * In order to guarantee the least amount of privilege to the principal sending
 * new code revisions to S3 (e.g. a GitHub Action, a CodeBuild project), you can
 * use this construct to call the `UpdateFunctionCode` action of the Lambda API
 * any time a new revision is added to a bucket (which must support versioning).
 */
export class FunctionCodeUpdater extends Construct {
  readonly #bucket: IBucket;
  readonly #objectKey: string;

  /**
   * Creates a new FunctionCodeUpdater.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   */
  public constructor(
    scope: Construct,
    id: string,
    props: FunctionCodeUpdaterProps
  ) {
    super(scope, id);

    const { bucket, objectKey, target } = props;

    this.#bucket = bucket;
    this.#objectKey = objectKey;

    const updater = new Function(this, "Default", {
      description:
        "Calls lambda:UpdateFunctionCode when new versions appear in S3",
      runtime: Runtime.NODEJS_22_X,
      code: Code.fromAsset(HANDLER_PATH),
      handler: "index.handler",
      environment: {
        FUNCTION_NAME: target.functionName,
        BUCKET_NAME: bucket.bucketName,
        OBJECT_KEY: objectKey,
      },
      timeout: Duration.seconds(30),
    });

    bucket.grantRead(updater, objectKey);

    updater.grantPrincipal.addToPrincipalPolicy(
      new PolicyStatement({
        actions: ["lambda:UpdateFunctionCode"],
        resources: [target.functionArn],
      })
    );

    updater.addEventSource(
      new S3EventSourceV2(bucket, {
        events: [EventType.OBJECT_CREATED],
        filters: [{ prefix: objectKey }],
      })
    );
  }

  /**
   * Grants `s3:PutObject*` and `s3:AbortObject*` permissions for the S3 object
   * key of the Lambda function code.
   *
   * If encryption is used, permission to use the key to encrypt uploaded files
   * will also be granted to the same principal.
   *
   * @param identity - The principal
   */
  public grantPutCode(identity: IGrantable): Grant {
    return this.#bucket.grantPut(identity, this.#objectKey);
  }
}
