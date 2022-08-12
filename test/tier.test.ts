import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Tier } from "../src/tier";

describe("Tier", () => {
  test("equals works on identical object", () => {
    expect(Tier.PRODUCTION.matches(Tier.PRODUCTION)).toBeTruthy();
  });
  test("equals fails for different object", () => {
    expect(Tier.PRODUCTION.matches(Tier.DEVELOPMENT)).toBeFalsy();
  });
  test("equals works on separate objects with same id", () => {
    expect(Tier.TESTING.matches(new Tier("test", "Testing")));
  });
  test("tags resources correctly", () => {
    const app = new App();
    const stack = new Stack(app, "Stack");
    new Bucket(stack, "Bucket");
    const tier = Tier.DEVELOPMENT;
    tier.applyTags(stack);
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::S3::Bucket", {
      Tags: [{ Key: "DeploymentTier", Value: tier.label }],
    });
  });
  test.each([
    ["QA", Tier.TESTING],
    ["Qc ", Tier.TESTING],
    ["test", Tier.TESTING],
    ["teStIng", Tier.TESTING],
    ["uAT", Tier.ACCEPTANCE],
    ["  accePTAnce", Tier.ACCEPTANCE],
    ["ACCEPT", Tier.ACCEPTANCE],
    ["stage", Tier.ACCEPTANCE],
    ["   STAGING     ", Tier.ACCEPTANCE],
    ["prod", Tier.PRODUCTION],
    ["prodUCTION                  ", Tier.PRODUCTION],
    ["lIvE", Tier.PRODUCTION],
    ["dev", Tier.DEVELOPMENT],
    ["develop", Tier.DEVELOPMENT],
    ["development", Tier.DEVELOPMENT],
    ["    absolutely anything you want    ", Tier.DEVELOPMENT],
  ])("given %p, returns %p", (first: string, expected: Tier) => {
    expect(Tier.parse(first)).toEqual(expected);
  });
});
