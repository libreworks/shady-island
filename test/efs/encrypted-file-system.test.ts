import { App, Stack, RemovalPolicy } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { FileSystem } from "aws-cdk-lib/aws-efs";
import { Key } from "aws-cdk-lib/aws-kms";
import { EncryptedFileSystem } from "../../src/efs";

describe("EncryptedFileSystem", () => {
  let app: App;
  let stack: Stack;
  let vpc: Vpc;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack");
    vpc = new Vpc(stack, "VPC", {});
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
    // @ts-ignore: TS2322
    vpc = undefined;
  });

  describe("#construct", () => {
    test("creates a key if none is provided", () => {
      const obj = new EncryptedFileSystem(stack, "Efs", { vpc });

      expect(obj.key).toBeInstanceOf(Key);
      expect(obj.fileSystem).toBeInstanceOf(FileSystem);
      const template = Template.fromStack(stack);
      template.resourceCountIs("AWS::EFS::FileSystem", 1);
      template.resourceCountIs("AWS::KMS::Key", 1);
      template.hasResourceProperties("AWS::KMS::Key", {
        Description: "Created by Stack/Efs",
      });
      template.hasResourceProperties("AWS::EFS::FileSystem", {
        Encrypted: true,
        KmsKeyId: { "Fn::GetAtt": ["EfsKey35F03706", "Arn"] },
      });
    });

    test("uses the provided key", () => {
      const encryptionKey = new Key(stack, "Key", { description: "My key" });
      const obj = new EncryptedFileSystem(stack, "Efs", {
        vpc,
        kmsKey: encryptionKey,
      });

      expect(obj.key).toEqual(encryptionKey);
      const template = Template.fromStack(stack);
      template.resourceCountIs("AWS::EFS::FileSystem", 1);
      template.resourceCountIs("AWS::KMS::Key", 1);
      template.hasResourceProperties("AWS::EFS::FileSystem", {
        Encrypted: true,
        KmsKeyId: { "Fn::GetAtt": ["Key961B73FD", "Arn"] },
      });
    });

    test("uses default removalpolicy settings", () => {
      new EncryptedFileSystem(stack, "Efs", { vpc });

      const template = Template.fromStack(stack);
      template.resourceCountIs("AWS::EFS::FileSystem", 1);
      template.resourceCountIs("AWS::KMS::Key", 1);
      template.hasResource("AWS::EFS::FileSystem", {
        UpdateReplacePolicy: "Retain",
        DeletionPolicy: "Retain",
      });
      template.hasResource("AWS::KMS::Key", {
        UpdateReplacePolicy: "Retain",
        DeletionPolicy: "Retain",
      });
    });

    test("uses provided removalpolicy settings", () => {
      const removalPolicy = RemovalPolicy.DESTROY;
      new EncryptedFileSystem(stack, "Efs", { vpc, removalPolicy });

      const template = Template.fromStack(stack);
      template.resourceCountIs("AWS::EFS::FileSystem", 1);
      template.resourceCountIs("AWS::KMS::Key", 1);
      template.hasResource("AWS::EFS::FileSystem", {
        UpdateReplacePolicy: "Delete",
        DeletionPolicy: "Delete",
      });
      template.hasResource("AWS::KMS::Key", {
        UpdateReplacePolicy: "Delete",
        DeletionPolicy: "Delete",
      });
    });
  });
});
