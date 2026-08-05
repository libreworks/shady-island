import { Stack } from "aws-cdk-lib";
import {
  Architecture,
  ILayerVersion,
  LayerVersion,
} from "aws-cdk-lib/aws-lambda";
import { StringParameter } from "aws-cdk-lib/aws-ssm";
import { Construct } from "constructs";

function ensureLayerFromParam(scope: Construct, id: string, name: string) {
  const stack = Stack.of(scope);
  const existing = stack.node.tryFindChild(id) as ILayerVersion | undefined;
  return (
    existing ??
    LayerVersion.fromLayerVersionArn(
      stack,
      id,
      StringParameter.valueForStringParameter(stack, name)
    )
  );
}

function ensureLayerVersion(scope: Construct, id: string, arn: string) {
  const stack = Stack.of(scope);
  const existing = stack.node.tryFindChild(id) as ILayerVersion | undefined;
  return existing ?? LayerVersion.fromLayerVersionArn(stack, id, arn);
}

/**
 * Options for calling the PowertoolsLayer methods.
 */
export interface PowertoolsLayerOptions {
  /**
   * The version of Powertools desired. Ignored if you specify layerVersion.
   *
   * @default - "latest"
   */
  readonly version?: string;

  /**
   * The version of the Lambda Layer desired. Overrides {@link version}.
   */
  readonly layerVersion?: number;
}

/**
 * Options for calling the PowertoolsLayer.forTypeScriptV2 method.
 */
export interface PowertoolsTypeScriptOptions extends PowertoolsLayerOptions {}

/**
 * Options for calling the PowertoolsLayer.forPythonV3 method.
 */
export interface PowertoolsPythonOptions extends PowertoolsLayerOptions {
  /**
   * The Python version (e.g. 3.10, 3.14).
   */
  readonly pythonVersion: string;

  /**
   * The CPU architecture for the Lambda function.
   *
   * @default - Architecture.X86_64
   */
  readonly architecture?: Architecture;
}

/**
 * Provides Lambda Layers for Powertools.
 *
 * ```typescript
 * PowertoolsLayer.forTypeScriptV2(scope);
 * PowertoolsLayer.forTypeScriptV2(scope, { version: "2.34.0" });
 * PowertoolsLayer.forTypeScriptV2(scope, { layerVersion: 49 });
 *
 * PowertoolsLayer.forPythonV3(scope, { pythonVersion: "3.14" });
 * PowertoolsLayer.forPythonV3(scope, { pythonVersion: "3.14", architecture: Architecture.ARM_64 });
 * PowertoolsLayer.forPythonV3(scope, { pythonVersion: "3.14", version: "3.31.1" });
 * PowertoolsLayer.forPythonV3(scope, { pythonVersion: "3.14", layerVersion: 36 });
 * ```
 */
export class PowertoolsLayer {
  /**
   * Get the Lambda Layer for TypeScript V2.
   *
   * If you supply neither "version" nor "layerVersion", the latest possible
   * version of the Layer is returned by looking it up in SSM Parameter Store.
   *
   * If you supply the "version" option, the Layer is returned by looking it up
   * in SSM Parameter Store.
   *
   * If you supply the "layerVersion" option, SSM is not involved.
   *
   * @param scope - The parent scope
   * @param options - The configuration options
   * @returns The Lambda Layer
   */
  public static forTypeScriptV2(
    scope: Construct,
    options: PowertoolsTypeScriptOptions = {}
  ): ILayerVersion {
    const { version = "latest" } = options;

    if (options.layerVersion) {
      const { region } = Stack.of(scope);
      return ensureLayerVersion(
        scope,
        `PowertoolsLayer-js-LayerVer${options.layerVersion}`,
        `arn:aws:lambda:${region}:094274105915:layer:AWSLambdaPowertoolsTypeScriptV2:${options.layerVersion}`
      );
    }

    return ensureLayerFromParam(
      scope,
      `PowertoolsLayer-js-${version}`,
      `/aws/service/powertools/typescript/generic/all/${version}`
    );
  }

  /**
   * Get the Lambda Layer for Python V3.
   *
   * If you supply neither "version" nor "layerVersion", the latest possible
   * version of the Layer is returned by looking it up in SSM Parameter Store.
   *
   * If you supply the "version" option, the Layer is returned by looking it up
   * in SSM Parameter Store.
   *
   * If you supply the "layerVersion" option, SSM is not involved.
   *
   * @param scope - The parent scope
   * @param options - The configuration options
   * @returns The Lambda Layer
   */
  public static forPythonV3(
    scope: Construct,
    options: PowertoolsPythonOptions
  ): ILayerVersion {
    const { version = "latest", architecture = Architecture.X86_64 } = options;
    const pythonVer = options.pythonVersion;
    const pyVer = pythonVer.replace(".", "");

    if (options.layerVersion) {
      const { region } = Stack.of(scope);
      return ensureLayerVersion(
        scope,
        `PowertoolsLayer-python${pyVer}-${architecture.name}-LayerVer${options.layerVersion}`,
        `arn:aws:lambda:${region}:017000801446:layer:AWSLambdaPowertoolsPythonV3-python${pyVer}-${architecture.name}:${options.layerVersion}`
      );
    }

    return ensureLayerFromParam(
      scope,
      `PowertoolsLayer-python${pyVer}-${architecture.name}-${version}`,
      `/aws/service/powertools/python/${architecture.name}/python${pythonVer}/${version}`
    );
  }
}
