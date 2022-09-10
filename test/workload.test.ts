import * as path from "path";
import { App, Stack, Stage } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Tier } from "../src/tier";
import { Workload } from "../src/workload";

describe("Workload", () => {
  describe("#of", () => {
    test("returns containing Workload", () => {
      const app = new App();
      const tier = Tier.DEVELOPMENT;
      const workload = new Workload(app, "MyStuffDev", { tier });
      const stack = workload.createStack("Stack");
      const bucket = new Bucket(stack, "Bucket");
      expect(Workload.of(bucket)).toBe(workload);
    });
    test("throws an error if construct not within workload", () => {
      const app = new App();
      const stack = new Stack(app, "Stack");
      const tier = Tier.DEVELOPMENT;
      new Workload(app, "MyStuffDev", { tier });
      const bucket = new Bucket(stack, "Bucket");
      expect(() => Workload.of(bucket)).toThrowError(Error);
    });
    test("returns containing Workload when two exist", () => {
      const app = new App();
      const tier = Tier.DEVELOPMENT;
      const workload = new Workload(app, "MyStuffDev", { tier });
      workload.createStack("Stack");
      const tier2 = Tier.TESTING;
      const otherWorkload = new Workload(app, "MyStuffDev2", { tier: tier2 });
      const stack = otherWorkload.createStack("Stack2");
      const bucket = new Bucket(stack, "Bucket");
      expect(Workload.of(bucket)).toBe(otherWorkload);
    });
  });
  describe("#constructor", () => {
    test("works normally", () => {
      const app = new App();
      const env = { account: "123456789012", region: "us-east-2" };
      const tier = Tier.TESTING;
      const workloadName = "foo-bar";
      const workload = new Workload(app, "MyStuffDev", {
        tier,
        workloadName,
        env,
      });
      expect(workload.account).toBe(env.account);
      expect(workload.region).toBe(env.region);
      expect(workload.workloadName).toBe(workloadName);
      expect(workload.tier).toBe(tier);
      expect(workload.publicDomainName).toBeUndefined();
    });
    test("handles undefined env property", () => {
      const app = new App();
      const env = undefined;
      const tier = Tier.TESTING;
      const workload = new Workload(app, "MyStuffDev", { tier, env });
      expect(workload.account).toBeUndefined();
      expect(workload.region).toBeUndefined();
    });
    test("handles partial env property #1", () => {
      const app = new App();
      const env = { account: "123456789012" };
      const tier = Tier.TESTING;
      const workload = new Workload(app, "MyStuffDev", { tier, env });
      expect(workload.account).toBe(env.account);
      expect(workload.region).toBeUndefined();
    });
    test("handles partial env property #2", () => {
      const app = new App();
      const env = { region: "us-east-1" };
      const tier = Tier.TESTING;
      const workload = new Workload(app, "MyStuffDev", { tier, env });
      expect(workload.account).toBeUndefined();
      expect(workload.region).toBe(env.region);
    });
  });
  describe("#env", () => {
    test("gets inherited from the parent stage", () => {
      const app = new App();
      const env = { account: "123456789012", region: "us-east-1" };
      const stage = new Stage(app, "MyStage", { env });
      const tier = Tier.PRODUCTION;
      const workload = new Workload(stage, "MyStuff", { tier });
      expect(workload.account).toBe(env.account);
      expect(workload.region).toBe(env.region);
    });
  });
  describe("#baseDomainName", () => {
    test("works as expected", () => {
      const app = new App();
      const env = { account: "123456789012", region: "us-east-2" };
      const tier = Tier.ACCEPTANCE;
      const baseDomainName = "example.net";
      const workload = new Workload(app, "Foo", { env, tier, baseDomainName });
      expect(workload.publicDomainName).toBe(`uat.foo.${baseDomainName}`);
    });
  });
  describe("#stacks", () => {
    test("contains created stacks", () => {
      const app = new App();
      const env = { account: "123456789012", region: "us-east-2" };
      const tier = Tier.TESTING;
      const workloadName = "foo-bar";
      const workload = new Workload(app, "MyStuffTest", {
        tier,
        workloadName,
        env,
      });
      const stack = workload.createStack("Foobar");
      expect(workload.stacks.values()).toContain(stack);
      const stack2 = workload.createStack("Barfoo");
      expect(workload.stacks.values()).toContain(stack2);
    });
  });
  describe("#loadContext", () => {
    test("throws error when file is missing", () => {
      const app = new App();
      const tier = Tier.TESTING;
      const contextFile = path.join(__dirname, "does-not-exist.json");
      expect(
        () => new Workload(app, "MyStuffTest", { tier, contextFile })
      ).toThrow({
        name: "Error",
        message: `Context file does not exist: ${contextFile}`,
      });
    });
    test("throws error when file is not readable", () => {
      const app = new App();
      const tier = Tier.TESTING;
      const contextFile = path.join(__dirname, "not-readable.json");
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const fs = require("fs");
      const original = fs.accessSync;
      fs.accessSync = (_: string, mode?: number) => {
        if (fs.constants.R_OK === mode) {
          throw new Error("Nope");
        }
      };
      expect(
        () => new Workload(app, "MyStuffTest", { tier, contextFile })
      ).toThrow({
        name: "Error",
        message: `Context file is not readable: ${contextFile}`,
      });
      fs.accessSync = original;
    });
    test("throws error when file is not JSON", () => {
      const app = new App();
      const tier = Tier.ACCEPTANCE;
      const contextFile = path.join(__dirname, "tier.test.ts");
      expect(
        () => new Workload(app, "MyStuffTest", { tier, contextFile })
      ).toThrow({
        name: "Error",
        message: `Context file contains invalid JSON syntax: ${contextFile}`,
      });
    });
    test("sets values when file contains JSON", () => {
      const app = new App();
      const tier = Tier.ACCEPTANCE;
      const contextFile = path.normalize(
        path.join(__dirname, "..", ".projen", "files.json")
      );
      const workload = new Workload(app, "MyStuffUat", { tier, contextFile });
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const fs = require("fs");
      const data = fs.readFileSync(contextFile, { encoding: "utf8" });
      const values = JSON.parse(data);
      expect(Object.entries(values).length).toBe(2);
      for (const [key, value] of Object.entries(values)) {
        expect(workload.node.tryGetContext(key)).toStrictEqual(value);
      }
    });
  });
  describe("#createStack", () => {
    test("generates IDs as expected", () => {
      const app = new App();
      const env = { account: "123456789012", region: "us-east-2" };
      const tier = Tier.TESTING;
      const workloadName = "foo-bar";
      const workload = new Workload(app, "MyStuffTest", {
        tier,
        workloadName,
        env,
      });
      const stack = workload.createStack("Foobar");
      expect(stack.node.id).toBe("Foobar");
      expect(stack.stackName).toBe("foo-bar-test-foobar");
      const stack2 = workload.createStack("Barfoo");
      expect(stack2.node.id).toBe("Barfoo");
      expect(stack2.stackName).toBe("foo-bar-test-barfoo");
    });
    test("uses supplied props", () => {
      const app = new App();
      const env = { account: "123456789012", region: "us-east-2" };
      const tier = Tier.ACCEPTANCE;
      const workloadName = "foo-bar";
      const workload = new Workload(app, "MyStuffUat", {
        tier,
        workloadName,
        env,
      });
      const stackProps = {
        stackName: "my-stack-name",
      };
      const stack = workload.createStack("Foobar", stackProps);
      expect(stack.node.id).toBe("Foobar");
      expect(stack.stackName).toBe(stackProps.stackName);
      expect(workload.stacks.values()).toContain(stack);
    });
  });
  describe("#import", () => {
    test("behaves as expected", () => {
      const app = new App();
      const env = { account: "123456789012", region: "us-east-1" };
      const tier = Tier.TESTING;
      const workloadName = "foo-bar";
      const workload = new Workload(app, "MyStuffUat", {
        tier,
        workloadName,
        env,
      });
      const stackProps = { stackName: "my-stack-name" };
      const stack = new Stack(app, "Foobar", stackProps);
      const bucket = new Bucket(stack, "Bucket");
      workload.import(stack);
      expect(Workload.of(stack)).toBe(workload);
      expect(Workload.of(bucket)).toBe(workload);
    });
    test("adding a child stack is a no-op", () => {
      const app = new App();
      const env = { account: "123456789012", region: "us-east-2" };
      const tier = Tier.TESTING;
      const workloadName = "foo-bar";
      const workload = new Workload(app, "MyStuffTest", {
        tier,
        workloadName,
        env,
      });
      const stack = workload.createStack("Foobar");
      workload.import(stack);
      // no error thrown
    });
    test("external stacks throw error", () => {
      const app = new App();
      const env = { account: "123456789012", region: "us-east-1" };
      const tier = Tier.TESTING;
      const workloadName = "foo-bar";
      new Workload(app, "MyStuffUat", { tier, workloadName, env });
      const stackProps = { stackName: "my-stack-name" };
      const stack = new Stack(app, "Foobar", stackProps);
      new Bucket(stack, "Bucket");
      expect(() => Workload.of(stack)).toThrowError(Error);
    });
    test("other workload stacks throw error", () => {
      const app = new App();
      const env = { account: "123456789012", region: "us-east-1" };
      const tier = Tier.TESTING;
      const tier2 = Tier.ACCEPTANCE;
      const workloadName = "foo-bar";
      const workload1 = new Workload(app, "MyStuffTest", {
        tier,
        workloadName,
        env,
      });
      const workload2 = new Workload(app, "MyStuffUat", {
        tier: tier2,
        workloadName,
        env,
      });
      const stack = workload1.createStack("Foobar");
      expect(() => workload2.import(stack)).toThrowError({
        name: "Error",
        message: "The Stack is already contained within a different Workload",
      });
    });
    test("throws an error for mis-matched scopes", () => {
      const app = new App();
      const env = { account: "123456789012", region: "us-east-1" };
      const tier = Tier.PRODUCTION;
      const workloadName = "bar-foo";
      const workload = new Workload(app, "MyStuffProd", {
        tier,
        workloadName,
        env,
      });
      const stage = new Stage(app, "MyStage", { env });
      const stackProps = { stackName: "my-stack-name" };
      const stack = new Stack(stage, "Foobar", stackProps);
      expect(() => workload.import(stack)).toThrowError({
        name: "Error",
        message:
          "The Stack must be contained within the same scope as this Workload",
      });
    });
    test("synthesizes the tags as expected", () => {
      const app = new App();
      const env = { account: "123456789012", region: "us-east-1" };
      const tier = Tier.TESTING;
      const workloadName = "foo-bar";
      const workload = new Workload(app, "MyStuffTest", {
        tier,
        workloadName,
        env,
      });
      const stackProps = { stackName: "my-stack-name" };
      const stack = new Stack(app, "Foobar", stackProps);
      new Bucket(stack, "Bucket");
      workload.import(stack);
      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::S3::Bucket", {
        Tags: [{ Key: "DeploymentTier", Value: "Testing" }],
      });
    });
  });
  test("synthesizes the tags as expected", () => {
    const app = new App();
    const env = { account: "123456789012", region: "us-east-2" };
    const tier = Tier.ACCEPTANCE;
    const workloadName = "foo-bar";
    const workload = new Workload(app, "MyStuffUat", {
      tier,
      workloadName,
      env,
    });
    const stack = workload.createStack("Foobar");
    new Vpc(stack, "Vpc", {});
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::EC2::VPC", {
      Tags: [
        { Key: "DeploymentTier", Value: "Acceptance" },
        { Key: "Name", Value: "MyStuffUat/Foobar/Vpc" },
      ],
    });
  });
});
