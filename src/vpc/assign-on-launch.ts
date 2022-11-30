import * as path from "path";
import { Stack, Duration, CustomResource } from "aws-cdk-lib";
import type {
  IVpc,
  SubnetSelection,
  SelectedSubnets,
} from "aws-cdk-lib/aws-ec2";
import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Function, Code, Runtime } from "aws-cdk-lib/aws-lambda";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";

const HANDLER_PATH = path.join(
  __dirname,
  "../../assets/vpc/assign-on-launch.handler"
);

/**
 * Properties for creating a new {@link AssignOnLaunch}.
 */
export interface AssignOnLaunchProps {
  /**
   * The VPC whose subnets will be configured.
   */
  readonly vpc: IVpc;
  /**
   * Which subnets to assign IPv6 addresses upon ENI creation.
   */
  readonly vpcSubnets?: SubnetSelection;
}

/**
 * Interface for the AssignOnLaunch class.
 */
export interface IAssignOnLaunch {
  /**
   * The IPv6-enabled VPC.
   */
  readonly vpc: IVpc;
  /**
   * The chosen subnets for address assignment on ENI launch.
   */
  readonly vpcPlacement: SelectedSubnets;
}

/**
 * Enables the "assignIpv6AddressOnCreation" attribute on selected subnets.
 *
 * @see {@link https://github.com/aws/aws-cdk/issues/894}
 * @see {@link https://github.com/aws/aws-cdk/issues/5927}
 */
export class AssignOnLaunch extends Construct implements IAssignOnLaunch {
  public readonly vpc: IVpc;
  public readonly vpcPlacement: SelectedSubnets;

  /**
   * Creates a new BetterVpc.
   *
   * @param scope - The construct scope.
   * @param id - The construct ID.
   * @param options - The constructor options.
   */
  constructor(scope: Construct, id: string, options: AssignOnLaunchProps) {
    super(scope, id);

    this.vpc = options.vpc;
    this.vpcPlacement = this.vpc.selectSubnets(options.vpcSubnets);
    const { subnetIds } = this.vpcPlacement;
    const { region, account, partition } = Stack.of(this);

    const onEventHandler = new Function(this, "Function", {
      runtime: Runtime.NODEJS_16_X,
      handler: "index.handler",
      environment: { SUBNET_IDS: `${JSON.stringify(subnetIds)}` },
      code: Code.fromAsset(HANDLER_PATH),
      timeout: Duration.seconds(300),
      initialPolicy: [
        new PolicyStatement({
          effect: Effect.ALLOW,
          actions: ["ec2:ModifySubnetAttribute"],
          resources: subnetIds.map(
            (s) => `arn:${partition}:ec2:${region}:${account}:subnet/${s}`
          ),
        }),
      ],
    });

    const provider = new Provider(this, "Provider", { onEventHandler });

    new CustomResource(this, "Resource", {
      serviceToken: provider.serviceToken,
    });
  }
}
