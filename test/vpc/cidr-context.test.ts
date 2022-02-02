import * as cdk from "aws-cdk-lib";
import { /* Capture, Match, */ Template } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { CidrContext } from "../../src/vpc";

describe("CidrContext", () => {
  test("synthesizes the way we expect", () => {
    const app = new cdk.App();

    const myStack = new cdk.Stack(app, "TopicsStack");

    const vpc = new Vpc(myStack, "Vpc", {});
    /* const cidrContext =*/ new CidrContext(myStack, "CidrContext", {
      vpc: vpc,
    });

    const template = Template.fromStack(myStack);

    // Assert it creates the function with the correct properties...
    // template.hasResourceProperties("AWS::Lambda::Function", {
    //   Handler: "handler",
    //   Runtime: "nodejs14.x",
    // });

    // Creates the subscription...
    template.resourceCountIs("AWS::EC2::VPC", 1);
    template.resourceCountIs("AWS::EC2::EgressOnlyInternetGateway", 1);
    template.resourceCountIs("AWS::EC2::VPCCidrBlock", 1);
  });
});
