import { Tags } from "aws-cdk-lib";
import type { IConstruct } from "constructs";

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
   * Adds the label of this tier as a tag to the provided construct.
   */
  public applyTags(construct: IConstruct): void {
    Tags.of(construct).add("DeploymentTier", this.label);
  }
}
