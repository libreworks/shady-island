import { AutoScalingGroup } from "aws-cdk-lib/aws-autoscaling";
import {
  BlockDeviceVolume,
  EbsDeviceVolumeType,
  IConnectable,
  IKeyPair,
  IPeer,
  ISecurityGroup,
  IVpc,
  InstanceArchitecture,
  InstanceType,
  KeyPair,
  KeyPairFormat,
  KeyPairType,
  LaunchTemplate,
  MachineImage,
  Port,
  SecurityGroup,
  UserData,
} from "aws-cdk-lib/aws-ec2";
import { IFileSystem } from "aws-cdk-lib/aws-efs";
import { IGrantable, IRole, Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import { IHostedZone } from "aws-cdk-lib/aws-route53";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";
import { Construct } from "constructs";
import {
  ElasticFileSystemAddOn,
  IFirewallRules,
  InstanceFirewall,
  InstanceFirewallAddOn,
  IStarterAddOn,
  ShellCommands,
  Starter,
  UpdateRoute53AddOn,
} from "../configuration";

/**
 * Options for DNS record updates when the instance launches.
 */
export interface CustomDomainOptions {
  /**
   * The subdomain for the record (e.g. `bastion`, `ssh`, `jump`).
   */
  readonly subdomain: string;

  /**
   * The Route 53 hosted zone where the record is upserted.
   */
  readonly hostedZone: IHostedZone;
}

/**
 * The details for a single EFS mount.
 */
export interface ElasticFileSystemMount {
  /**
   * The path where the NFS volume should be mounted.
   */
  readonly directory: string;

  /**
   * The EFS filesystem to mount.
   */
  readonly fileSystem: IFileSystem;
}

/**
 * Properties for the UbuntuLinuxBastion constructor.
 */
export interface UbuntuLinuxBastionProps {
  /**
   * The VPC where the bastion will reside.
   */
  readonly vpc: IVpc;

  /**
   * The security group to attach to the bastion instance.
   *
   * @default - A new security group is created
   */
  readonly securityGroup?: ISecurityGroup;

  /**
   * The instance role (the trust policy must permit ec2.amazonaws.com)
   *
   * @default - A new role is created.
   */
  readonly role?: IRole;

  /**
   * The CPU architecture for the bastion.
   *
   * @default - InstanceArchitecture.ARM_64
   */
  readonly architecture?: InstanceArchitecture;

  /**
   * The instance type for the bastion.
   *
   * @default - t3.micro for X86_64, t4g.micro for ARM_64
   */
  readonly instanceType?: InstanceType;

  /**
   * The key pair to use for this instance.
   *
   * @default - A new key pair is generated and stored in SSM Parameter Store
   */
  readonly keyPair?: IKeyPair;

  /**
   * Whether to enable IPv6.
   *
   * @default - false
   */
  readonly enableIpv6?: boolean;

  /**
   * The options for creating DNS records upon launch.
   */
  readonly customDomain?: CustomDomainOptions;

  /**
   * The secrets containing database credentials.
   *
   * The key of the object corresponds to the filename in `/run/secrets`.
   */
  readonly secrets?: Record<string, ISecret>;

  /**
   * The Elastic Filesystems to mount.
   */
  readonly fileSystems?: ElasticFileSystemMount[];

  /**
   * The names of repositories to enable using apt-add-repository.
   *
   * e.g. ppa:redislabs/redis
   */
  readonly aptRepositories?: string[];

  /**
   * An array of APT package names to install.
   *
   * If you supply any Elastic Filesystems to mount, this construct will also
   * install the "nfs-common" package.
   */
  readonly aptPackages?: string[];

  /**
   * Whether to install the AWS CLI Snap package.
   *
   * @default - true
   */
  readonly installAwsCli?: boolean;

  /**
   * The version of Ubuntu to use.
   *
   * @default - 24.04
   */
  readonly ubuntuVersion?: string;

  /**
   * The size in gibibytes (GiB) of the primary disk volume.
   *
   * @default - 10
   */
  readonly volumeSize?: number;
}

/**
 * A bastion host running Ubuntu GNU/Linux with an instance firewall.
 *
 * This construct produces an Auto-Scaling Group and corresponding launch
 * template. The ASG has a minimum of zero instances and a maximum of one.
 * Instances launched will be placed in a public subnet of the VPC.
 */
export class UbuntuLinuxBastion
  extends Construct
  implements IConnectable, IGrantable
{
  /**
   * The auto-scaling group for this bastion.
   */
  public readonly autoScalingGroup: AutoScalingGroup;

  /**
   * The instance firewall rules.
   */
  public readonly firewall: IFirewallRules;

  /**
   * A bastion host running Ubuntu GNU/Linux.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   */
  constructor(scope: Construct, id: string, props: UbuntuLinuxBastionProps) {
    super(scope, id);
    const {
      vpc,
      customDomain,
      enableIpv6,
      architecture = InstanceArchitecture.ARM_64,
      secrets = {},
      fileSystems = [],
      installAwsCli = true,
      ubuntuVersion = "24.04",
      volumeSize = 10,
    } = props;

    const role =
      props.role ??
      new Role(this, "Role", {
        assumedBy: new ServicePrincipal("ec2.amazonaws.com"),
        description: "Grants permissions to the bastion instance",
      });

    const securityGroup =
      props.securityGroup ??
      new SecurityGroup(this, "SecurityGroup", {
        description: "The bastion instance",
        vpc,
      });

    const fw = InstanceFirewall.iptables()
      .inboundFromAnyIpv4(Port.udp(68))
      .outboundToAnyIpv4(Port.allIcmp())
      .outboundToAnyIpv4(Port.udp(67));
    this.firewall = fw;
    if (enableIpv6) {
      fw.inboundFromAnyIpv6(Port.udp(546))
        .inboundFromAnyIpv6(Port.allIcmpV6())
        .outboundToAnyIpv6(Port.allIcmpV6())
        .outboundToAnyIpv6(Port.udp(547));
    }
    const outboundPorts = [
      Port.tcp(53),
      Port.udp(53),
      Port.tcp(80),
      Port.udp(123),
      Port.tcp(443),
    ];
    for (const port of outboundPorts) {
      fw.outboundToAnyIpv4(port);
      if (enableIpv6) {
        fw.outboundToAnyIpv6(port);
      }
    }

    const packagesToInstall: Set<string> = new Set();
    packagesToInstall.add("iptables-persistent");
    if (Object.entries(fileSystems).length > 0) {
      packagesToInstall.add("nfs-common");
    }
    if (props.aptPackages) {
      for (const p of props.aptPackages) {
        packagesToInstall.add(p);
      }
    }
    const aptCommands = ShellCommands.installAptPackages(
      Array.from(packagesToInstall),
      { repositories: props.aptRepositories }
    );

    const userData = UserData.forLinux();
    userData.addCommands(
      'sed -i "s/defaults,discard/defaults,discard,noatime/g" /etc/fstab',
      "mount -o remount,noatime /",
      ...aptCommands
    );
    if (installAwsCli || customDomain || Object.entries(secrets).length > 0) {
      userData.addCommands("snap install aws-cli --classic");
    }

    const keyPair =
      props.keyPair ??
      new KeyPair(this, "KeyPair", {
        format: KeyPairFormat.PEM,
        type: KeyPairType.RSA,
      });

    const isArm = architecture === InstanceArchitecture.ARM_64;
    const arch = isArm ? "arm64" : "amd64";
    const machineImageParameter = `/aws/service/canonical/ubuntu/server/${ubuntuVersion}/stable/current/${arch}/hvm/ebs-gp3/ami-id`;
    const series = isArm ? "t4g" : "t3";
    const instanceType =
      props.instanceType ?? new InstanceType(`${series}.micro`);

    const launchTemplate = new LaunchTemplate(this, "LaunchTemplate", {
      instanceType,
      machineImage: MachineImage.fromSsmParameter(machineImageParameter),
      blockDevices: [
        {
          deviceName: "/dev/sda1",
          volume: BlockDeviceVolume.ebs(volumeSize, {
            encrypted: true,
            volumeType: EbsDeviceVolumeType.GP3,
          }),
        },
      ],
      role,
      securityGroup,
      userData,
      detailedMonitoring: false,
      ebsOptimized: true,
      keyPair,
      requireImdsv2: true,
      httpEndpoint: true,
      httpProtocolIpv6: enableIpv6,
      associatePublicIpAddress: true,
    });

    const addOns: IStarterAddOn[] = [
      new InstanceFirewallAddOn(fw, { priority: -200000000 }),
    ];
    const starter = Starter.forLaunchTemplate(launchTemplate);

    if (Object.entries(secrets).length) {
      // TODO: this is an in-memory filesystem that empties upon reboot.
      userData.addCommands(...ShellCommands.addDirectory("/run/secrets"));
      for (const [name, secret] of Object.entries(secrets)) {
        secret.grantRead(role);
        userData.addCommands(
          ...ShellCommands.downloadSecret(secret, `/run/secrets/${name}.json`)
        );
      }
    }

    if (customDomain) {
      addOns.push(
        new UpdateRoute53AddOn(
          customDomain.hostedZone,
          customDomain.subdomain,
          { ipv4: true, ipv6: enableIpv6 }
        )
      );
    }

    if (Object.entries(fileSystems).length > 0) {
      for (const mount of fileSystems) {
        fw.outboundToAnyIpv4(Port.NFS);
        if (enableIpv6) {
          fw.outboundToAnyIpv6(Port.NFS);
        }
        addOns.push(
          new ElasticFileSystemAddOn(mount.fileSystem, mount.directory)
        );
      }
    }

    starter.withAddOns(...addOns);

    this.autoScalingGroup = new AutoScalingGroup(this, "Default", {
      launchTemplate,
      vpc,
      vpcSubnets: { subnets: vpc.publicSubnets },
      maxCapacity: 1,
      minCapacity: 0,
      ssmSessionPermissions: true,
    });
  }

  public get grantPrincipal() {
    return this.autoScalingGroup.grantPrincipal;
  }

  public get connections() {
    return this.autoScalingGroup.connections;
  }

  /**
   * Allow SSH access from the given peer or peers.
   *
   * @param peer - The peer or peers to allow
   */
  public allowSshAccessFrom(...peer: IPeer[]): void {
    this.firewall.inboundFromAnyIpv4(Port.SSH).inboundFromAnyIpv6(Port.SSH);
    peer.forEach((p) => {
      this.autoScalingGroup.connections.allowFrom(p, Port.SSH, "SSH access");
    });
  }
}
