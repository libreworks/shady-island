import {
  AutoScalingGroup,
  AutoScalingGroupProps,
  CfnAutoScalingGroup,
} from "aws-cdk-lib/aws-autoscaling";
import {
  CfnLaunchTemplate,
  Connections,
  ISecurityGroup,
  LaunchTemplate,
  LaunchTemplateProps,
} from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { INetworkInterface } from "./network-interface";

/**
 * Constructor properties for SingletonLaunchTemplate.
 */
export interface SingletonLaunchTemplateProps extends LaunchTemplateProps {
  /**
   * The Elastic Network Interface to use.
   */
  readonly networkInterface: INetworkInterface;
}

/**
 * A launch template bound to a single Elastic Network Interface.
 */
export class SingletonLaunchTemplate extends LaunchTemplate {
  /**
   * The network interface used by this launch template.
   */
  public readonly networkInterface: INetworkInterface;

  /**
   * Creates a new SingletonLaunchTemplate.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   */
  public constructor(
    scope: Construct,
    id: string,
    props: SingletonLaunchTemplateProps
  ) {
    const { networkInterface, associatePublicIpAddress, ...others } = props;

    super(scope, id, others);

    this.networkInterface = networkInterface;

    /*
      From the AWS docs:

      If you specify an existing network interface ID, you can launch only one
      instance. To do this, you must use the AWS CLI or an SDK to create the
      Auto Scaling group. When you create the group, you must specify the
      Availability Zone, but not the subnet ID. Also, you can specify an
      existing network interface only if it has a device index of 0.
    */

    const cfnLaunchTpl = this.node.defaultChild as CfnLaunchTemplate;
    cfnLaunchTpl.addPropertyDeletionOverride(
      "LaunchTemplateData.SecurityGroupIds"
    );
    cfnLaunchTpl.addPropertyOverride("LaunchTemplateData.NetworkInterfaces", [
      {
        DeviceIndex: "0",
        NetworkInterfaceId: networkInterface.networkInterfaceId,
      },
    ]);
  }

  public get connections(): Connections {
    return this.networkInterface.connections;
  }

  public addSecurityGroup(securityGroup: ISecurityGroup): void {
    this.networkInterface.connections.addSecurityGroup(securityGroup);
  }

  /**
   * Creates an auto-scaling group for this launch template.
   *
   * The following properties are ignored (if specified): `launchTemplate`,
   * `minCapacity`, and `maxCapacity`.
   *
   * @param id - The ID of the auto-scaling group.
   * @param props - Constructor properties of the AutoScalingGroup.
   * @returns A new auto-scaling group
   */
  public createAutoScalingGroup(id: string, props: AutoScalingGroupProps) {
    const autoScalingGroup = new AutoScalingGroup(this, id, {
      ...props,
      launchTemplate: this,
      minCapacity: 1,
      maxCapacity: 1,
    });

    const cfnAsg = autoScalingGroup.node.defaultChild as CfnAutoScalingGroup;
    cfnAsg.addPropertyDeletionOverride("VPCZoneIdentifier");
    cfnAsg.addPropertyOverride("AvailabilityZones", [
      this.networkInterface.subnet.availabilityZone,
    ]);

    return autoScalingGroup;
  }
}
