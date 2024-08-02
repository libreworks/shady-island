import { App, RemovalPolicy, Stack, Token } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { AnyPrincipal, Role, Grant } from "aws-cdk-lib/aws-iam";
import { ElasticIp } from "../../src/networking/elastic-ip";

describe("ElasticIpAddress", () => {
  const account = "123456789012";
  const region = "us-east-1";
  let app: App;
  let stack: Stack;

  beforeEach(() => {
    app = new App({
      context: { "@aws-cdk/core:enablePartitionLiterals": true },
    });
    stack = new Stack(app, "Stack", {
      env: { account, region },
    });
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
  });

  describe("#fromAllocationId", () => {
    test("assembles ARN correctly", () => {
      const allocationId = "eipalloc-00d3f2ecb468b5793";
      const obj = ElasticIp.fromAllocationId(stack, "EIP", allocationId);
      expect(obj.allocationId).toStrictEqual(allocationId);
      expect(obj.elasticIpArn).toStrictEqual(
        `arn:aws:ec2:${region}:${account}:elastic-ip/${allocationId}`
      );
      expect(obj.env.account).toStrictEqual(account);
      expect(obj.env.region).toStrictEqual(region);
      expect(obj.stack).toBe(stack);
    });
  });

  describe("#fromElasticIpArn", () => {
    test("extracts allocationId correctly", () => {
      const allocationId = "eipalloc-00d3f2ecb468b5793";
      const arn = `arn:aws:ec2:${region}:${account}:elastic-ip/${allocationId}`;
      const obj = ElasticIp.fromElasticIpArn(stack, "EIP", arn);
      expect(obj.elasticIpArn).toStrictEqual(arn);
      expect(obj.allocationId).toStrictEqual(allocationId);
      expect(obj.env.account).toStrictEqual(account);
      expect(obj.env.region).toStrictEqual(region);
      expect(obj.stack).toBe(stack);
    });
  });

  describe("#constructor", () => {
    test("behaves as expected", () => {
      const obj = new ElasticIp(stack, "EIP", {
        removalPolicy: RemovalPolicy.RETAIN,
      });
      expect(Token.isUnresolved(obj.allocationId)).toBeTruthy();
      expect(Token.isUnresolved(obj.publicIp)).toBeTruthy();
    });

    test("synthesizes as expected with removalPolicy", () => {
      new ElasticIp(stack, "EIP", {
        removalPolicy: RemovalPolicy.RETAIN,
      });
      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::EC2::EIP", { Domain: "vpc" });
      template.hasResource("AWS::EC2::EIP", {
        UpdateReplacePolicy: "Retain",
        DeletionPolicy: "Retain",
      });
    });
  });

  describe("#grant", () => {
    test("behaves as expected", () => {
      const obj = new ElasticIp(stack, "EIP");
      const grantee = new Role(stack, "Role", {
        assumedBy: new AnyPrincipal(),
      });
      const actions = ["ec2:AssociateAddress", "ec2:DisassociateAddress"];
      const grant = obj.grant(grantee, ...actions);
      expect(grant).toBeInstanceOf(Grant);
      expect(grant.success).toBeTruthy();
      const [statement] = grant.principalStatements;
      expect(statement.resources).toStrictEqual([obj.elasticIpArn]);
      expect(statement.actions).toStrictEqual(actions);
    });
  });
});
