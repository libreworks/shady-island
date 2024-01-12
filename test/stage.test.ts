import * as path from "path";
import { App, Aspects, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { DeploymentTierStage } from "../src/stage";
import { Tier } from "../src/tier";

describe("DeploymentTierStage", () => {
  let app: App;

  beforeEach(() => {
    app = new App();
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
  });

  describe("#constructor", () => {
    test("works normally", () => {
      const env = { account: "123456789012", region: "us-east-2" };
      const tier = Tier.TESTING;
      const object = new DeploymentTierStage(app, "MyStuffDev", {
        tier,
        env,
      });
      expect(object.account).toBe(env.account);
      expect(object.region).toBe(env.region);
      expect(object.tier).toBe(tier);
    });

    test("handles undefined env property", () => {
      const env = undefined;
      const tier = Tier.TESTING;
      const object = new DeploymentTierStage(app, "MyStuffDev", { tier, env });
      expect(object.account).toBeUndefined();
      expect(object.region).toBeUndefined();
    });

    test("handles partial env property #1", () => {
      const env = { account: "123456789012" };
      const tier = Tier.TESTING;
      const object = new DeploymentTierStage(app, "MyStuffDev", { tier, env });
      expect(object.account).toBe(env.account);
      expect(object.region).toBeUndefined();
    });

    test("handles partial env property #2", () => {
      const env = { region: "us-east-1" };
      const tier = Tier.TESTING;
      const object = new DeploymentTierStage(app, "MyStuffDev", { tier, env });
      expect(object.account).toBeUndefined();
      expect(object.region).toBe(env.region);
    });

    test("has nested child tags", () => {
      const tier = Tier.DEVELOPMENT;
      const stage = new DeploymentTierStage(app, "Stage", { tier });
      const stack = new Stack(stage, "Stack");
      new Bucket(stack, "Bucket");

      const template = Template.fromStack(stack);
      expect(Aspects.of(stage).all.length).toBe(1);
      template.hasResourceProperties("AWS::S3::Bucket", {
        Tags: [{ Key: "DeploymentTier", Value: tier.label }],
      });
    });

    test("has no nested child tags", () => {
      const tier = Tier.DEVELOPMENT;
      const stage = new DeploymentTierStage(app, "Stage", {
        tier,
        addTag: false,
      });
      const stack = new Stack(stage, "Stack");
      new Bucket(stack, "Bucket");

      const template = Template.fromStack(stack);
      expect(Aspects.of(stage).all.length).toBe(0);
      template.hasResourceProperties("AWS::S3::Bucket", {});
    });
  });

  describe("#inProduction", () => {
    test.each([
      [Tier.PRODUCTION, true],
      [Tier.TESTING, false],
      [Tier.DEVELOPMENT, false],
    ])("behaves as expected with %p", (tier: Tier, expected: boolean) => {
      const object = new DeploymentTierStage(app, "MyStuffDev", { tier });
      expect(object.inProduction).toBe(expected);
    });
  });

  describe("#loadContext", () => {
    test("throws error when file is missing", () => {
      const tier = Tier.TESTING;
      const contextFile = path.join(__dirname, "does-not-exist.json");
      expect(
        () => new DeploymentTierStage(app, "MyStuffTest", { tier, contextFile })
      ).toThrow({
        name: "Error",
        message: `Context file does not exist: ${contextFile}`,
      });
    });

    test("throws error when file is not readable", () => {
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
        () => new DeploymentTierStage(app, "MyStuffTest", { tier, contextFile })
      ).toThrow({
        name: "Error",
        message: `Context file is not readable: ${contextFile}`,
      });
      fs.accessSync = original;
    });

    test("throws error when file is not JSON", () => {
      const tier = Tier.ACCEPTANCE;
      const contextFile = path.join(__dirname, "tier.test.ts");
      expect(
        () => new DeploymentTierStage(app, "MyStuffTest", { tier, contextFile })
      ).toThrow({
        name: "Error",
        message: `Context file contains invalid JSON syntax: ${contextFile}`,
      });
    });

    test("sets values when file contains JSON", () => {
      const tier = Tier.ACCEPTANCE;
      const contextFile = path.normalize(
        path.join(__dirname, "..", ".projen", "files.json")
      );
      const object = new DeploymentTierStage(app, "MyStuffUat", {
        tier,
        contextFile,
      });
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const fs = require("fs");
      const data = fs.readFileSync(contextFile, { encoding: "utf8" });
      const values = JSON.parse(data);
      expect(Object.entries(values).length).toBe(2);
      for (const [key, value] of Object.entries(values)) {
        expect(object.node.tryGetContext(key)).toStrictEqual(value);
      }
    });
  });
});
