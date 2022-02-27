import { App, Stack } from "aws-cdk-lib";
import { IConstruct } from "constructs";
import { assertType, findInstanceOf } from "../../src/util";

describe("assertType", () => {
  test("throws exception for type", () => {
    const app = new App();
    expect(() => {
      assertType(app, Stack);
    }).toThrow(Error);
  });
});
describe("findInstanceOf", () => {
  test("throws exception when not found", () => {
    const sample: IConstruct[] = [new App()];
    expect(() => {
      findInstanceOf(sample, Stack);
    }).toThrow(Error);
  });
});
