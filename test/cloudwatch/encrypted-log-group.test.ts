import { App, Stack, RemovalPolicy } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Key } from "aws-cdk-lib/aws-kms";
import { LogGroup } from "aws-cdk-lib/aws-logs";
import { EncryptedLogGroup } from "../../src/cloudwatch";

describe("EncryptedLogGroup", () => {
  test("creates a key if none is provided", () => {
    const app = new App();
    const stack = new Stack(app, "Stack");
    const logGroupName = "/shady-island/test";
    const obj = new EncryptedLogGroup(stack, "Elg", { logGroupName });

    expect(obj.key).toBeInstanceOf(Key);
    expect(obj.logGroup).toBeInstanceOf(LogGroup);
    const template = Template.fromStack(stack);
    template.resourceCountIs("AWS::Logs::LogGroup", 1);
    template.resourceCountIs("AWS::KMS::Key", 1);
    template.hasResourceProperties("AWS::KMS::Key", {
      Description: "Created by Stack/Elg",
    });
    template.hasResourceProperties("AWS::Logs::LogGroup", {
      KmsKeyId: { "Fn::GetAtt": ["ElgKeyDEF57498", "Arn"] },
    });
  });
  test("uses the provided key", () => {
    const app = new App();
    const stack = new Stack(app, "Stack");
    const logGroupName = "/shady-island/test";
    const encryptionKey = new Key(stack, "Key", { description: "My key" });
    const obj = new EncryptedLogGroup(stack, "Elg", {
      logGroupName,
      encryptionKey,
    });

    expect(obj.key).toEqual(encryptionKey);
    const template = Template.fromStack(stack);
    template.resourceCountIs("AWS::Logs::LogGroup", 1);
    template.resourceCountIs("AWS::KMS::Key", 1);
    template.hasResourceProperties("AWS::Logs::LogGroup", {
      KmsKeyId: { "Fn::GetAtt": ["Key961B73FD", "Arn"] },
    });
  });
  test("uses default removalpolicy settings", () => {
    const app = new App();
    const stack = new Stack(app, "Stack");
    const logGroupName = "/shady-island/test";
    new EncryptedLogGroup(stack, "Elg", { logGroupName });

    const template = Template.fromStack(stack);
    template.resourceCountIs("AWS::Logs::LogGroup", 1);
    template.resourceCountIs("AWS::KMS::Key", 1);
    template.hasResource("AWS::Logs::LogGroup", {
      UpdateReplacePolicy: "Retain",
      DeletionPolicy: "Retain",
    });
    template.hasResource("AWS::KMS::Key", {
      UpdateReplacePolicy: "Retain",
      DeletionPolicy: "Retain",
    });
  });
  test("uses provided removalpolicy settings", () => {
    const app = new App();
    const stack = new Stack(app, "Stack");
    const logGroupName = "/shady-island/test";
    const removalPolicy = RemovalPolicy.DESTROY;
    new EncryptedLogGroup(stack, "Elg", { logGroupName, removalPolicy });

    const template = Template.fromStack(stack);
    template.resourceCountIs("AWS::Logs::LogGroup", 1);
    template.resourceCountIs("AWS::KMS::Key", 1);
    template.hasResource("AWS::Logs::LogGroup", {
      UpdateReplacePolicy: "Delete",
      DeletionPolicy: "Delete",
    });
    template.hasResource("AWS::KMS::Key", {
      UpdateReplacePolicy: "Delete",
      DeletionPolicy: "Delete",
    });
  });
});
