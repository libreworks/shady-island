import * as fs from "fs";
import * as path from "path";
import { App, Stack, Stage } from "aws-cdk-lib";
// import { Template } from "aws-cdk-lib/assertions";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Tier } from "../src/tier";
import { Workload } from "../src/workload";

describe("Workload", () => {
  test("of returns containing Workload", () => {
    const app = new App();
    const tier = Tier.DEVELOPMENT;
    const workload = new Workload(app, "MyStuffDev", { tier });
    const stack = workload.createStack("Stack");
    const bucket = new Bucket(stack, "Bucket");
    expect(Workload.of(bucket)).toBe(workload);
  });
  test("of throws an error if construct not within workload", () => {
    const app = new App();
    const stack = new Stack(app, "Stack");
    const tier = Tier.DEVELOPMENT;
    new Workload(app, "MyStuffDev", { tier });
    const bucket = new Bucket(stack, "Bucket");
    expect(() => Workload.of(bucket)).toThrowError(Error);
  });
  test("of returns containing Workload when two exist", () => {
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
  test("constructor works normally", () => {
    const app = new App();
    const env = { account: "123456789012", region: "us-east-2" };
    const tier = Tier.TESTING;
    const stackNamePrefix = "foo-bar";
    const workload = new Workload(app, "MyStuffDev", {
      tier,
      stackNamePrefix,
      env,
    });
    expect(workload.account).toBe(env.account);
    expect(workload.region).toBe(env.region);
    expect(workload.stackNamePrefix).toBe(stackNamePrefix);
    expect(workload.tier).toBe(tier);
  });
  test("env gets inherited from the parent stage", () => {
    const app = new App();
    const env = { account: "123456789012", region: "us-east-1" };
    const stage = new Stage(app, "MyStage", { env });
    const tier = Tier.PRODUCTION;
    const workload = new Workload(stage, "MyStuff", { tier });
    expect(workload.account).toBe(env.account);
    expect(workload.region).toBe(env.region);
  });
  test("stacks property contains created stacks", () => {
    const app = new App();
    const env = { account: "123456789012", region: "us-east-2" };
    const tier = Tier.TESTING;
    const stackNamePrefix = "foo-bar";
    const workload = new Workload(app, "MyStuffTest", {
      tier,
      stackNamePrefix,
      env,
    });
    const stack = workload.createStack("Foobar");
    expect(stack.node.id).toBe("Foobar");
    expect(stack.stackName).toBe("foo-bar-test-foobar");
    expect(workload.stacks.values()).toContain(stack);
    const stack2 = workload.createStack("Barfoo");
    expect(stack2.node.id).toBe("Barfoo");
    expect(stack2.stackName).toBe("foo-bar-test-barfoo");
    expect(workload.stacks.values()).toContain(stack2);
  });
  test("loadContext throws error when file is missing", () => {
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
  test("loadContext throws error when file is not JSON", () => {
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
  test("loadContext sets values when file contains JSON", () => {
    const app = new App();
    const tier = Tier.ACCEPTANCE;
    const contextFile = path.normalize(
      path.join(__dirname, "..", ".projen", "files.json")
    );
    const workload = new Workload(app, "MyStuffUat", { tier, contextFile });
    const data = fs.readFileSync(contextFile, { encoding: "utf8" });
    const values = JSON.parse(data);
    for (const [key, value] of Object.entries(values)) {
      expect(workload.node.tryGetContext(key)).toStrictEqual(value);
    }
  });
});
