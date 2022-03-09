import * as cdk from "aws-cdk-lib";
import { /* Capture, Match, */ Template } from "aws-cdk-lib/assertions";
import { Vpc, SubnetType } from "aws-cdk-lib/aws-ec2";
import { AssignOnLaunch } from "../../src/vpc";

describe("AssignOnLaunch", () => {
  test("Uses private subnets by default", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "Stack");
    const vpc = new Vpc(stack, "Vpc", {});

    const object = new AssignOnLaunch(stack, "AssignOnLaunch", {
      vpc: vpc,
    });

    expect(object.vpc).toStrictEqual(vpc);
    const allSubnetIds = [...vpc.privateSubnets].map((s) => s.subnetId);
    expect(object.vpcPlacement.subnetIds).toEqual(allSubnetIds);
  });
  test("Uses all subnets specified", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "Stack");
    const vpc = new Vpc(stack, "Vpc", {
      maxAzs: 2,
      subnetConfiguration: [
        { name: "public", subnetType: SubnetType.PUBLIC },
        { name: "private", subnetType: SubnetType.PRIVATE_WITH_NAT },
        { name: "isolated", subnetType: SubnetType.PRIVATE_ISOLATED },
      ],
    });

    const allSubnets = [
      ...vpc.publicSubnets,
      ...vpc.privateSubnets,
      ...vpc.isolatedSubnets,
    ];

    const object = new AssignOnLaunch(stack, "AssignOnLaunch", {
      vpc: vpc,
      vpcSubnets: { subnets: allSubnets },
    });

    expect(object.vpc).toStrictEqual(vpc);
    const allSubnetIds = allSubnets.map((s) => s.subnetId);
    expect(object.vpcPlacement.subnetIds).toEqual(allSubnetIds);
  });
  test("synthesizes the Function as expected", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "Stack");
    const vpc = new Vpc(stack, "Vpc", {});

    new AssignOnLaunch(stack, "AssignOnLaunch", {
      vpc: vpc,
    });

    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::IAM::Role", 2);
    template.resourceCountIs("AWS::IAM::Policy", 2);
    template.resourceCountIs("AWS::Lambda::Function", 2);
    template.hasResourceProperties("AWS::Lambda::Function", {
      Handler: "framework.onEvent",
      Runtime: "nodejs12.x",
      Timeout: 900,
    });
    template.hasResourceProperties("AWS::Lambda::Function", {
      Handler: "index.handler",
      Runtime: "nodejs14.x",
      Timeout: 300,
    });
    template.hasResourceProperties("AWS::CloudFormation::CustomResource", {
      ServiceToken: {
        "Fn::GetAtt": ["AssignOnLaunchProviderframeworkonEventE909CC4A", "Arn"],
      },
    });
  });
});
