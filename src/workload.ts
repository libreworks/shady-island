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
   * The machine identifier for this workload.
   *
   * This value will be used to create the `publicDomainName` property.
   *
   * By default, the `stackName` property used to create `Stack` constructs in
   * the `createStack` method will begin with this Workload's `workloadName` and
   * its `tier` separated by hyphens.
   *
   * Consider providing a constant `workloadName` value to the superclass
   * constructor in your derived class.
   *
   * @example
   *
   * class MyWorkload extends Workload {
   *   constructor(scope: Construct, id: string, props: WorkloadProps) {
   *     super(scope, id, { ...props, workloadName: 'my-workload' });
   *   }
   * }
   *
   * @default - The id passed to the `Workload` constructor, but in lowercase
   */
  readonly workloadName?: string;
  /**
   * The filesystem path to a JSON file that contains context values to load.
   *
   * Using this property allows you to load different context values within each
   * instantiated `Workload`, directly from a file you can check into source
   * control.
   */
  readonly contextFile?: string;
  /**
   * The base domain name used to create the FQDN for public resources.
   */
  readonly baseDomainName?: string;
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
  public readonly workloadName: string;
  /**
   * The deployment tier.
   */
  public readonly tier: Tier;
  /**
   * The domain name to use for resources that expose public endpoints.
   *
   * You can use `Workload.of(this).publicDomainName` as the `zoneName` of a
   * Route 53 hosted zone.
   *
   * Any construct that creates public DNS resources (e.g. those of API Gateway,
   * Application Load Balancing, CloudFront) can use this property to format
   * a FQDN for itself by adding a subdomain.
   *
   * @example
   *
   * const app = new App();
   * const workload = new Workload(app, "Foobar", {
   *   tier: Tier.PRODUCTION,
   *   baseDomainName: 'example.com'
   * });
   * assert.strictEqual(workload.publicDomainName, 'prod.foobar.example.com');
   * const stack = workload.createStack("DNS");
   * const hostedZone = new HostedZone(stack, "HostedZone", {
   *   zoneName: `${workload.publicDomainName}`
   * });
   * const api = new RestApi(stack, "API", {
   *   restApiName: "foobar",
   *   domainName: { domainName: `api.${workload.publicDomainName}` },
   * });
   *
   * @default - If `baseDomainName` was empty, this will be `undefined`
   */
  public readonly publicDomainName?: string;

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

    const {
      env: { region, account } = {},
      tier,
      workloadName,
      contextFile,
      baseDomainName,
    } = props;

    this.workloadName = workloadName ?? `${id}`.toLowerCase();
    this.tier = tier;
    this.publicDomainName = baseDomainName
      ? `${tier.id}.${this.workloadName}.${baseDomainName}`.toLowerCase()
      : undefined;
    this._stacks = new Map();

    const { region: stageRegion, account: stageAccount } = Stage.of(this)!;
    this.region = region || stageRegion;
    this.account = account || stageAccount;

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

    for (const [k, v] of Object.entries(defaults)) {
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
   * Workload's `workloadName`, its `tier`, and the value of the `id`
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
      stackName ?? `${this.workloadName}-${this.tier.id}-${id}`.toLowerCase();
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
