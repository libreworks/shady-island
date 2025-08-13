import { App, Stack } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import { AnyPrincipal, Grant, Role } from "aws-cdk-lib/aws-iam";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { FunctionCodeUpdater } from "../../src/automation/function-code-updater";

describe("FunctionCodeUpdater", () => {
  let app: App;
  let stack: Stack;
  let bucket: Bucket;
  let target: Function;
  let objectKey = "whatever/code.zip";

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack");
    bucket = new Bucket(stack, "Bucket");
    target = new Function(stack, "Target", {
      runtime: Runtime.NODEJS_22_X,
      code: Code.fromInline(
        "module.exports = { handler: function() { console.log('hello world'); } };"
      ),
      handler: "index.handler",
    });
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
    // @ts-ignore: TS2322
    target = undefined;
    // @ts-ignore: TS2322
    bucket = undefined;
  });

  describe("#grantPutCode", () => {
    test("behaves as expected", () => {
      const obj = new FunctionCodeUpdater(stack, "Updater", {
        target,
        bucket,
        objectKey,
      });
      const grantee = new Role(stack, "Role", {
        assumedBy: new AnyPrincipal(),
      });
      const grant = obj.grantPutCode(grantee);
      expect(grant).toBeInstanceOf(Grant);
      expect(grant.success).toBeTruthy();
      const [statement] = grant.principalStatements;
      expect(statement.resources).toStrictEqual([
        `${bucket.bucketArn}/${objectKey}`,
      ]);
      expect(statement.actions).toStrictEqual([
        "s3:PutObject",
        "s3:PutObjectLegalHold",
        "s3:PutObjectRetention",
        "s3:PutObjectTagging",
        "s3:PutObjectVersionTagging",
        "s3:Abort*",
      ]);
    });

    test("synthesizes as expected", () => {
      const obj = new FunctionCodeUpdater(stack, "Updater", {
        target,
        bucket,
        objectKey,
      });
      const grantee = new Role(stack, "Role", {
        assumedBy: new AnyPrincipal(),
      });
      obj.grantPutCode(grantee);

      const template = Template.fromStack(stack);

      console.log(JSON.stringify(template.toJSON(), undefined, 2));

      template.hasResourceProperties("AWS::IAM::Policy", {
        PolicyDocument: Match.objectLike({
          Statement: Match.arrayWith([
            {
              Action: [
                "s3:PutObject",
                "s3:PutObjectLegalHold",
                "s3:PutObjectRetention",
                "s3:PutObjectTagging",
                "s3:PutObjectVersionTagging",
                "s3:Abort*",
              ],
              Effect: "Allow",
              Resource: {
                "Fn::Join": [
                  "",
                  [
                    { "Fn::GetAtt": ["Bucket83908E77", "Arn"] },
                    `/${objectKey}`,
                  ],
                ],
              },
            },
          ]),
        }),
      });
    });
  });

  describe("#constructor", () => {
    test("synthesizes as expected", () => {
      new FunctionCodeUpdater(stack, "Updater", {
        target,
        bucket,
        objectKey,
      });

      const template = Template.fromStack(stack);

      const bucketRef = { Ref: "Bucket83908E77" };
      const targetRef = { Ref: "Target3191CF44" };

      template.hasResourceProperties("Custom::S3BucketNotifications", {
        BucketName: bucketRef,
        NotificationConfiguration: {
          LambdaFunctionConfigurations: [
            {
              Events: ["s3:ObjectCreated:*"],
              Filter: {
                Key: {
                  FilterRules: [{ Name: "prefix", Value: objectKey }],
                },
              },
              LambdaFunctionArn: { "Fn::GetAtt": ["Updater65AF1523", "Arn"] },
            },
          ],
        },
      });
      template.hasResourceProperties("AWS::Lambda::Function", {
        Description:
          "Calls lambda:UpdateFunctionCode when new versions appear in S3",
        Environment: {
          Variables: {
            FUNCTION_NAME: targetRef,
            BUCKET_NAME: bucketRef,
            OBJECT_KEY: objectKey,
          },
        },
        Handler: "index.handler",
        Runtime: "nodejs22.x",
        Timeout: 30,
      });
      template.hasResourceProperties("AWS::IAM::Policy", {
        PolicyDocument: Match.objectLike({
          Statement: Match.arrayWith([
            {
              Action: "lambda:UpdateFunctionCode",
              Effect: "Allow",
              Resource: { "Fn::GetAtt": [targetRef.Ref, "Arn"] },
            },
          ]),
        }),
      });
    });
  });
});
