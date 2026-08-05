import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Architecture, Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { PowertoolsLayer } from "../../src/fn/layers";

describe("PowertoolsLayer", () => {
  let app: App;
  let stack: Stack;
  let region = "us-east-1";
  let account = "123456789012";

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack", { env: { region, account } });
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
  });

  describe("#forPythonV3", () => {
    test("Returns latest Layer with no options", () => {
      const pythonVersion = "3.12";
      const layer = PowertoolsLayer.forPythonV3(stack, { pythonVersion });
      expect(layer).toBeDefined();

      new Function(stack, "Fn", {
        code: Code.fromInline("module.exports = function handler(event) {};"),
        runtime: Runtime.PYTHON_3_12,
        handler: "index.handler",
        layers: [layer],
      });

      const template = Template.fromStack(stack);

      const logicalId =
        "SsmParameterValueawsservicepowertoolspythonx8664python312latestC96584B6F00A464EAD1953AFF4B05118Parameter";
      template.hasParameter(logicalId, {
        Type: "AWS::SSM::Parameter::Value<String>",
        Default: `/aws/service/powertools/python/x86_64/python${pythonVersion}/latest`,
      });

      template.hasResourceProperties("AWS::Lambda::Function", {
        Layers: [{ Ref: logicalId }],
      });
    });

    test("Returns specific version Layer", () => {
      const pythonVersion = "3.13";
      const version = "3.31.1";
      const architecture = Architecture.ARM_64;
      const layer = PowertoolsLayer.forPythonV3(stack, {
        pythonVersion,
        version,
        architecture,
      });
      expect(layer).toBeDefined();

      new Function(stack, "Fn", {
        code: Code.fromInline("module.exports = function handler(event) {};"),
        runtime: Runtime.PYTHON_3_13,
        handler: "index.handler",
        layers: [layer],
      });

      const template = Template.fromStack(stack);

      const logicalId =
        "SsmParameterValueawsservicepowertoolspythonarm64python3133311C96584B6F00A464EAD1953AFF4B05118Parameter";
      template.hasParameter(logicalId, {
        Type: "AWS::SSM::Parameter::Value<String>",
        Default: `/aws/service/powertools/python/${architecture.name}/python${pythonVersion}/${version}`,
      });

      template.hasResourceProperties("AWS::Lambda::Function", {
        Layers: [{ Ref: logicalId }],
      });
    });

    test("Returns Layer for version number", () => {
      const pythonVersion = "3.14";
      const layerVersion = 36;
      const architecture = Architecture.ARM_64;
      const layer = PowertoolsLayer.forPythonV3(stack, {
        pythonVersion,
        layerVersion,
        architecture,
      });
      expect(layer).toBeDefined();

      new Function(stack, "Fn", {
        code: Code.fromInline("module.exports = function handler(event) {};"),
        runtime: Runtime.PYTHON_3_14,
        handler: "index.handler",
        layers: [layer],
      });

      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::Lambda::Function", {
        Layers: [
          `arn:aws:lambda:${region}:017000801446:layer:AWSLambdaPowertoolsPythonV3-python${pythonVersion.replace(
            ".",
            ""
          )}-${architecture.name}:${layerVersion}`,
        ],
      });
    });
  });

  describe("#forTypeScriptV2", () => {
    test("Returns latest Layer with no options", () => {
      const layer = PowertoolsLayer.forTypeScriptV2(stack);
      expect(layer).toBeDefined();

      new Function(stack, "Fn", {
        code: Code.fromInline("module.exports = function handler(event) {};"),
        runtime: Runtime.NODEJS_LATEST,
        handler: "index.handler",
        layers: [layer],
      });

      const template = Template.fromStack(stack);

      const logicalId =
        "SsmParameterValueawsservicepowertoolstypescriptgenericalllatestC96584B6F00A464EAD1953AFF4B05118Parameter";
      template.hasParameter(logicalId, {
        Type: "AWS::SSM::Parameter::Value<String>",
        Default: "/aws/service/powertools/typescript/generic/all/latest",
      });

      template.hasResourceProperties("AWS::Lambda::Function", {
        Layers: [{ Ref: logicalId }],
      });
    });

    test("Returns specific version Layer", () => {
      const version = "2.34.0";
      const layer = PowertoolsLayer.forTypeScriptV2(stack, { version });
      expect(layer).toBeDefined();

      new Function(stack, "Fn", {
        code: Code.fromInline("module.exports = function handler(event) {};"),
        runtime: Runtime.NODEJS_LATEST,
        handler: "index.handler",
        layers: [layer],
      });

      const template = Template.fromStack(stack);

      const logicalId =
        "SsmParameterValueawsservicepowertoolstypescriptgenericall2340C96584B6F00A464EAD1953AFF4B05118Parameter";
      template.hasParameter(logicalId, {
        Type: "AWS::SSM::Parameter::Value<String>",
        Default: `/aws/service/powertools/typescript/generic/all/${version}`,
      });

      template.hasResourceProperties("AWS::Lambda::Function", {
        Layers: [{ Ref: logicalId }],
      });
    });

    test("Returns Layer for version number", () => {
      const layerVersion = 49;
      const layer = PowertoolsLayer.forTypeScriptV2(stack, { layerVersion });
      expect(layer).toBeDefined();

      new Function(stack, "Fn", {
        code: Code.fromInline("module.exports = function handler(event) {};"),
        runtime: Runtime.NODEJS_LATEST,
        handler: "index.handler",
        layers: [layer],
      });

      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::Lambda::Function", {
        Layers: [
          `arn:aws:lambda:${region}:094274105915:layer:AWSLambdaPowertoolsTypeScriptV2:${layerVersion}`,
        ],
      });
    });
  });
});
