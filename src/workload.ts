import * as fs from "fs";
import { Environment, Stage, Stack, StackProps } from "aws-cdk-lib";
import { Construct, IConstruct } from "constructs";
import { Tier } from "./tier";

const WORKLOAD_SYMBOL = Symbol.for("@shady-island/core.Workload");

/**
 * Constructor properties for a Workload.
 */
export interface WorkloadProps {
  /**
   * The AWS environment (account/region) where this stack will be deployed.
   */
  readonly env?: Environment;
  /**
   * The deployment tier.
   */
  readonly tier: Tier;
  /**
   * The prefix used in the default `stackName` provided to a child `Stack`.
   *
   * By default, the `stackName` property provided to the `Stack` will begin
   * with this Workload's `stackNamePrefix` and its `tier` separated by hyphens.
   *
   * Consider providing a constant `stackNamePrefix` value to the superclass
   * constructor in your derived class.
   *
   * @example
   *
   * class MyWorkload extends Workload {
   *   constructor(scope: Construct, id: string, props: WorkloadProps) {
   *     super(scope, id, { ...props, stackNamePrefix: 'my-workload' });
   *   }
   * }
   *
   * @default - The id passed to the `Workload` constructor, but in lowercase
   */
  readonly stackNamePrefix?: string;
  /**
   * The filesystem path to a JSON file that contains context values to load.
   *
   * Using this property allows you to load different context values within each
   * instantiated `Workload`, directly from a file you can check into source
   * control.
   */
  readonly contextFile?: string;
}

/**
 * A collection of Stacks in an Environment representing a deployment Tier.
 *
 * Derive a subclass of `Workload` and create your stacks within.
 *
 * The difference between this object and a `Stage` is that a `Stage` is meant
 * to be deployed with CDK Pipelines. This class can be used with `cdk deploy`.
 * This class also provides context loading capabilities.
 */
export class Workload extends Construct {
  /**
   * Return the Workload the construct is contained within, fails if there is no
   * workload up the tree.
   *
   * @param construct - The construct whose parent nodes will be searched
   * @returns The Workload containing the construct
   * @throws Error - if none of the construct's parents are a workload
   */
  public static of(construct: IConstruct): Workload {
    const workload = construct.node.scopes
      .reverse()
      .slice(1)
      .find(Workload.isWorkload);
    if (!workload) {
      throw new Error(
        "No workload exists in the parentage of the provided construct"
      );
    }
    return workload;
  }

  /**
   * Test whether the given construct is a Workload.
   *
   * @param x - The value to test
   * @returns Whether the value is a Workload object.
   */
  public static isWorkload(x: any): x is Workload {
    return x !== null && typeof x === "object" && WORKLOAD_SYMBOL in x;
  }

  /**
   * The default region for all resources defined within this workload.
   */
  public readonly region?: string;
  /**
   * The default account for all resources defined within this workload.
   */
  public readonly account?: string;
  /**
   * The prefix used in the default `stackName` provided to child Stacks.
   */
  public readonly stackNamePrefix: string;
  /**
   * The deployment tier.
   */
  public readonly tier: Tier;

  private readonly _stacks: Map<string, Stack>;

  /**
   * Creates a new Workload.
   *
   * @param scope - The construct scope.
   * @param id - The construct ID.
   * @param props - The constructor options.
   */
  public constructor(scope: Construct, id: string, props: WorkloadProps) {
    super(scope, id);

    Object.defineProperty(this, WORKLOAD_SYMBOL, { value: true });

    const { env, tier, stackNamePrefix, contextFile } = props;

    this.stackNamePrefix = stackNamePrefix ?? `${id}`.toLowerCase();
    this.tier = tier;
    this._stacks = new Map();

    const stage = Stage.of(this);
    this.region = env?.region ?? stage?.region;
    this.account = env?.account ?? stage?.account;

    if (contextFile) {
      this.loadContext(contextFile);
    }
  }

  private loadContext(filename: string) {
    try {
      fs.accessSync(filename, fs.constants.F_OK);
    } catch (err) {
      throw new Error(`Context file does not exist: ${filename}`);
    }
    try {
      fs.accessSync(filename, fs.constants.R_OK);
    } catch (err) {
      throw new Error(`Context file is not readable: ${filename}`);
    }

    const data = fs.readFileSync(filename, { encoding: "utf8" });

    let defaults = {};
    try {
      defaults = JSON.parse(data);
    } catch (e) {
      throw new Error(`Context file contains invalid JSON syntax: ${filename}`);
    }

    for (const [k, v] of Object.entries(defaults ?? {})) {
      this.node.setContext(k, v);
    }
  }

  /**
   * @returns The stacks created by invoking `createStack`
   */
  public get stacks(): Stack[] {
    return [...this._stacks.values()];
  }

  /**
   * Adds a stack to the Workload.
   *
   * This method will return a `Stack` with this Workload as its scope. By
   * default, the `stackName` property provided to the `Stack` will be this
   * Workload's `stackNamePrefix`, its `tier`, and the value of the `id`
   * parameter separated by hyphens, all in lowercase.
   *
   * @example
   *
   * const exampleDev = new Workload(app, 'Example', {
   *   tier: Tier.DEVELOPMENT,
   *   env: { account: '123456789012', region: 'us-east-1' },
   * });
   * const networkStack = exampleDev.createStack('Network', {});
   * assert.strictEqual(networkStack.stackName, 'example-dev-network').
   *
   * You can override the `env` and `stackName` properties in the `props`
   * argument if desired.
   *
   * @param id - The Stack construct id (e.g. "Network")
   * @param props - The new Stack properties
   */
  public createStack(id: string, props?: StackProps): Stack {
    const { stackName, ...options } = props ?? {};
    const newStackName =
      stackName ??
      `${this.stackNamePrefix}-${this.tier.id}-${id}`.toLowerCase();
    const stack = new Stack(this, id, {
      stackName: newStackName,
      env:
        this.account && this.region
          ? { account: this.account, region: this.region }
          : undefined,
      ...options,
    });
    this._stacks.set(newStackName, stack);
    return stack;
  }
}
