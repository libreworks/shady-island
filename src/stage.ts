import { Aspects, Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { ContextLoader } from "./context";
import { Tier, TierTagger } from "./tier";

/**
 * Constructor properties for DeploymentTierStage.
 */
export interface DeploymentTierStageProps extends StageProps {
  /**
   * The deployment tier.
   */
  readonly tier: Tier;
  /**
   * The filesystem path to a JSON file that contains context values to load.
   *
   * Using this property allows you to load different context values within each
   * instantiated `DeploymentTierStage`, directly from a file you can check into
   * source control.
   */
  readonly contextFile?: string;
  /**
   * Whether a `DeploymentTier` tag is added to nested constructs.
   *
   * @default - true
   */
  readonly addTag?: boolean;
}

/**
 * A Stage whose stacks are part of a single deployment tier.
 */
export class DeploymentTierStage extends Stage {
  public readonly tier: Tier;

  /**
   * Creates a new DeploymentTierStage.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   */
  public constructor(
    scope: Construct,
    id: string,
    props: DeploymentTierStageProps
  ) {
    super(scope, id, {
      ...props,
      stageName: props.stageName || props.tier.label,
    });

    const { tier, contextFile, addTag = true } = props;
    this.tier = tier;

    if (contextFile) {
      ContextLoader.loadContext(contextFile, this.node);
    }

    if (addTag) {
      Aspects.of(this).add(new TierTagger(tier));
    }
  }

  /**
   * Whether this stage is considered a production deployment.
   */
  public get inProduction() {
    return Tier.PRODUCTION.matches(this.tier);
  }
}
