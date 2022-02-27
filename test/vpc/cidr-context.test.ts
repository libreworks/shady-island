import * as cdk from "aws-cdk-lib";
import { /* Capture, Match, */ Template } from "aws-cdk-lib/assertions";
import { Vpc, SubnetType } from "aws-cdk-lib/aws-ec2";
import { CidrContext } from "../../src/vpc";

describe("CidrContext", () => {
  test("does not create an EOIG if no private subnets", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "Stack");
    const vpc = new Vpc(stack, "Vpc", {
      subnetConfiguration: [
        { name: "Public", subnetType: SubnetType.PUBLIC },
        { name: "Isolated", subnetType: SubnetType.PRIVATE_ISOLATED },
      ],
    });

    new CidrContext(stack, "CidrContext", {
      vpc: vpc,
    });

    expect(vpc.privateSubnets).toHaveLength(0);
    const template = Template.fromStack(stack);
    template.resourceCountIs("AWS::EC2::EgressOnlyInternetGateway", 0);
  });
  test("synthesizes the EOIG as expected", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "Stack");
    const vpc = new Vpc(stack, "Vpc", {});

    new CidrContext(stack, "CidrContext", {
      vpc: vpc,
    });

    const template = Template.fromStack(stack);
    template.resourceCountIs("AWS::EC2::EgressOnlyInternetGateway", 1);
    template.hasResourceProperties("AWS::EC2::EgressOnlyInternetGateway", {
      VpcId: { Ref: "Vpc8378EB38" },
    });
  });
  test("synthesizes the VPCCidrBlock with defaults", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "Stack");
    const vpc = new Vpc(stack, "Vpc", {});

    new CidrContext(stack, "CidrContext", {
      vpc: vpc,
    });

    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::EC2::VPCCidrBlock", 1);
    template.hasResourceProperties("AWS::EC2::VPCCidrBlock", {
      VpcId: { Ref: "Vpc8378EB38" },
      AmazonProvidedIpv6CidrBlock: true,
    });
  });
  test("synthesizes the VPCCidrBlock with other values", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "Stack");
    const vpc = new Vpc(stack, "Vpc", {});

    new CidrContext(stack, "CidrContext", {
      vpc: vpc,
      addressPool: "foo",
      cidrBlock: "bar",
    });

    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::EC2::VPCCidrBlock", 1);
    template.hasResourceProperties("AWS::EC2::VPCCidrBlock", {
      VpcId: { Ref: "Vpc8378EB38" },
      AmazonProvidedIpv6CidrBlock: false,
      Ipv6Pool: "foo",
      Ipv6CidrBlock: "bar",
    });
  });
  test("throws an error if the cidr count is too low", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "Stack");
    const vpc = new Vpc(stack, "Vpc", {});
    expect(() => {
      new CidrContext(stack, "CidrContext", { vpc: vpc, cidrCount: 1 });
    }).toThrow("You must create at least 4 CIDR blocks in this VPC");
  });
});
