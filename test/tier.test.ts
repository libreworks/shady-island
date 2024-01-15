import { App, Aspects, Stack, Stage } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Tier, TierTagger } from "../src/tier";

describe("Tier", () => {
  describe("#assignTo", () => {
    test("behaves as expected when the tier is already set", () => {
      const app = new App();
      const stage = new Stage(app, "Stage");
      const stack = new Stack(stage, "Stack");
      const bucket = new Bucket(stack, "Bucket");
      const tier = Tier.DEVELOPMENT;
      const tier2 = Tier.ACCEPTANCE;
      tier.assignTo(bucket);
      tier2.assignTo(bucket);
      expect(Tier.of(bucket)).toBe(tier2);
    });
    test("behaves as expected when the tier is already set", () => {
      const app = new App();
      const stage = new Stage(app, "Stage");
      const stack = new Stack(stage, "Stack");
      const bucket = new Bucket(stack, "Bucket");
      const tier = Tier.DEVELOPMENT;
      tier.assignTo(bucket);
      tier.assignTo(bucket);
      expect(Tier.of(bucket)).toBe(tier);
    });
    test("behaves as expected when the tier is already set on a parent", () => {
      const app = new App();
      const stage = new Stage(app, "Stage");
      const stack = new Stack(stage, "Stack");
      const bucket = new Bucket(stack, "Bucket");
      const tier = Tier.DEVELOPMENT;
      tier.assignTo(stage);
      tier.assignTo(bucket);
      expect(Tier.of(stage)).toBe(tier);
      expect(Tier.of(bucket)).toBe(tier);
    });
    test("behaves as expected when a different tier is already set on a parent", () => {
      const app = new App();
      const stage = new Stage(app, "Stage");
      const stack = new Stack(stage, "Stack");
      const bucket = new Bucket(stack, "Bucket");
      const tier = Tier.DEVELOPMENT;
      tier.assignTo(stage);
      const tier2 = Tier.TESTING;
      tier2.assignTo(bucket);
      expect(Tier.of(stage)).toBe(tier);
      expect(Tier.of(bucket)).toBe(tier2);
      expect(bucket.node.metadata).toContainEqual(
        expect.objectContaining({
          data: "The tier assigned to this construct is different from the tier assigned to the path: Stage",
          type: "aws:cdk:error",
        })
      );
    });
  });

  describe("#of", () => {
    test("behaves as expected when not assigned", () => {
      const app = new App();
      const stage = new Stage(app, "Stage");
      const stack = new Stack(stage, "Stack");
      const bucket = new Bucket(stack, "Bucket");
      expect(Tier.of(bucket)).toBeUndefined();
    });
    test("behaves as expected when assigned to the construct itself", () => {
      const app = new App();
      const stage = new Stage(app, "Stage");
      const stack = new Stack(stage, "Stack");
      const bucket = new Bucket(stack, "Bucket");
      const tier = Tier.DEVELOPMENT;
      tier.assignTo(bucket);
      expect(Tier.of(bucket)).toBe(tier);
    });
    test("behaves as expected when assigned to a parent construct", () => {
      const app = new App();
      const stage = new Stage(app, "Stage");
      const stack = new Stack(stage, "Stack");
      const bucket = new Bucket(stack, "Bucket");
      const tier = Tier.DEVELOPMENT;
      tier.assignTo(stack);
      expect(Tier.of(bucket)).toBe(tier);
    });
    test("behaves as expected when assigned to the root construct", () => {
      const app = new App();
      const stage = new Stage(app, "Stage");
      const stack = new Stack(stage, "Stack");
      const bucket = new Bucket(stack, "Bucket");
      const tier = Tier.DEVELOPMENT;
      tier.assignTo(app);
      expect(Tier.of(bucket)).toBe(tier);
    });
  });

  describe("#matches", () => {
    test("works on identical object", () => {
      expect(Tier.PRODUCTION.matches(Tier.PRODUCTION)).toBeTruthy();
    });
    test("fails for different object", () => {
      expect(Tier.PRODUCTION.matches(Tier.DEVELOPMENT)).toBeFalsy();
    });
    test("works on separate objects with same id", () => {
      expect(Tier.TESTING.matches(new Tier("test", "Testing")));
    });
  });

  describe("#applyTags", () => {
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
  });

  describe("#parse", () => {
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
});

describe("TierTagger", () => {
  test("synthesizes as expected", () => {
    const tier = Tier.DEVELOPMENT;
    const object = new TierTagger(tier);
    const app = new App();
    const stack = new Stack(app, "Stack");
    Aspects.of(stack).add(object);
    new Bucket(stack, "Bucket");

    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::S3::Bucket", {
      Tags: [{ Key: "DeploymentTier", Value: tier.label }],
    });
  });
});
