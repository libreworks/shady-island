import { Aspects, Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { ContextLoader } from "./context";
import { Tier, TierTagger } from "./tier";

/**
 * Constructor properties for ContextLoadingStage.
 */
export interface ContextLoadingStageProps extends StageProps {
  /**
   * The filesystem path to a JSON file that contains context values to load.
   *
   * Using this property allows you to load different context values within each
   * Stage, directly from a file you can check into source control.
   */
  readonly contextFile?: string;
}

/**
 * A Stage that can load context values from a JSON file.
 */
export class ContextLoadingStage extends Stage {
  /**
   * Creates a new ContextLoadingStage.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   */
  public constructor(
    scope: Construct,
    id: string,
    props: ContextLoadingStageProps
  ) {
    super(scope, id, { ...props });

    if (props.contextFile) {
      ContextLoader.loadContext(props.contextFile, this.node);
    }
  }
}

/**
 * Constructor properties for DeploymentTierStage.
 */
export interface DeploymentTierStageProps extends ContextLoadingStageProps {
  /**
   * The deployment tier.
   */
  readonly tier: Tier;
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
export class DeploymentTierStage extends ContextLoadingStage {
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

    const { tier, addTag = true } = props;
    this.tier = tier;
    tier.assignTo(this);

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
