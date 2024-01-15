import { Annotations, IAspect, Tag, Tags } from "aws-cdk-lib";
import type { IConstruct } from "constructs";

const TIER_SYMBOL = Symbol.for("shady-island-tier");

/**
 * A deployment environment with a specific purpose and audience.
 *
 * You can create any Tier you like, but we include those explained by DTAP.
 *
 * @see https://en.wikipedia.org/wiki/Development,_testing,_acceptance_and_production
 */
export class Tier {
  /**
   * A tier that represents a production environment.
   */
  public static readonly PRODUCTION: Tier = new Tier("prod", "Production");
  /**
   * A tier that represents an acceptance environment.
   */
  public static readonly ACCEPTANCE: Tier = new Tier("uat", "Acceptance");
  /**
   * A tier that represents a testing environment.
   */
  public static readonly TESTING: Tier = new Tier("test", "Testing");
  /**
   * A tier that represents a development environment.
   */
  public static readonly DEVELOPMENT: Tier = new Tier("dev", "Development");

  /**
   * Finds the deployment tier of the given construct.
   *
   * @param construct - The construct to inspect
   * @returns The assigned deployment tier if found, otherwise undefined
   */
  public static of(construct: IConstruct) {
    for (const scope of construct.node.scopes.reverse()) {
      const tier = (scope as any)[TIER_SYMBOL];
      if (tier instanceof Tier) {
        return tier;
      }
    }
    return undefined;
  }

  /**
   * Return the deployment tier that corresponds to the provided value.
   *
   * Production: "live", "prod", or "production".
   * Acceptance: "uat", "stage", "staging", or "acceptance".
   * Testing: "qc", "qa", "test", or "testing".
   * Development: anything else.
   *
   * @param value - The value to parse, case-insensitive
   * @returns The matching deployment tier, or else `DEVELOPMENT`.
   */
  public static parse(value: string) {
    let tier;
    switch (value.trim().toLowerCase()) {
      case "production":
      case "prod":
      case "live":
        tier = Tier.PRODUCTION;
        break;
      case "uat":
      case "stage":
      case "staging":
      case "accept":
      case "acceptance":
        tier = Tier.ACCEPTANCE;
        break;
      case "qc":
      case "qa":
      case "test":
      case "testing":
        tier = Tier.TESTING;
        break;
      default:
        tier = Tier.DEVELOPMENT;
    }
    return tier;
  }

  /**
   * The machine-readable identifier for this tier (e.g. prod)
   */
  public readonly id: string;
  /**
   * The human-readable label for this tier (e.g. Production)
   */
  public readonly label: string;

  /**
   * Creates a new Tier.
   *
   * @param id - The machine-readable identifier for this tier (e.g. prod)
   * @param label - The human-readable label for this tier (e.g. Production)
   */
  public constructor(id: string, label: string) {
    this.id = id;
    this.label = label;
  }

  /**
   * Compares this tier to the provided value and tests for equality.
   *
   * @param other - The value to compare.
   * @returns Whether the provided value is equal to this tier.
   */
  public matches(other: Tier): boolean {
    if (this === other) {
      return true;
    }
    return other instanceof Tier && this.id === other.id;
  }

  /**
   * Assigns this tier to a construct.
   *
   * This method will register an error annotation on the construct if any of
   * the constructs in its parent scopes have a different tier assigned.
   *
   * @param construct - The construct to receive the tier assignment
   */
  public assignTo(construct: IConstruct) {
    const existingTier = (construct as any)[TIER_SYMBOL];
    if (this.matches(existingTier)) {
      // Return early if the tier is already set.
      return;
    }

    for (const scope of construct.node.scopes.reverse().slice(1)) {
      const tier = (scope as any)[TIER_SYMBOL];
      if (this.matches(tier)) {
        // Return early if a parent scope has the same tier.
        return;
      } else if (tier instanceof Tier) {
        // Register an error if a parent scope has a different tier.
        Annotations.of(construct).addError(
          `The tier assigned to this construct is different from the tier assigned to the path: ${scope.node.path}`
        );
        break;
      }
    }

    Object.defineProperty(construct, TIER_SYMBOL, {
      value: this,
      configurable: true,
      enumerable: false,
    });
  }

  /**
   * Adds the label of this tier as a tag to the provided construct.
   */
  public applyTags(construct: IConstruct): void {
    Tags.of(construct).add("DeploymentTier", this.label);
  }
}

/**
 * A CDK Aspect to apply the `DeploymentTier` tag to Stacks.
 */
export class TierTagger implements IAspect {
  /**
   * Create a new TierTagger.
   *
   * @param tier - The deployment tier
   */
  public constructor(private readonly tier: Tier) {}

  public visit(node: IConstruct) {
    new Tag("DeploymentTier", this.tier.label).visit(node);
  }
}
