import { Lazy } from "aws-cdk-lib";
import type { IFileSystem } from "aws-cdk-lib/aws-efs";
import type { IBucket } from "aws-cdk-lib/aws-s3";
import { ShellCommands } from "./commands";
import type { IFirewallRules } from "./firewall";
import { IStarterAddOn, Starter } from "./starter";

/**
 * Properties for starter add-ons that add a single script.
 */
export interface SinglePriorityProps {
  /**
   * The priority for the script added by this add-on.
   *
   * @default - 10
   */
  readonly priority?: number;
}

/**
 * An add-on that configures an on-instance firewall.
 */
export class InstanceFirewallAddOn implements IStarterAddOn {
  /**
   * An add-on that configures an on-instance firewall.
   *
   * @param rules - The instance firewall rules
   * @param props - Optional configuration properties
   */
  public constructor(
    private readonly rules: IFirewallRules,
    private readonly props?: SinglePriorityProps
  ) {}

  public configure(starter: Starter): void {
    starter.addScript(
      this.props?.priority ?? 0,
      Lazy.string({ produce: () => this.rules.buildCommands().join("\n") })
    );
  }
}

/**
 * An add-on that synchronizes files from S3 to directories on the instance.
 *
 * This add-on also grants read access to the bucket.
 */
export class BucketSyncAddOn implements IStarterAddOn {
  /**
   * An add-on that synchronizes files from S3 to directories on the instance.
   *
   * This add-on also grants read access to the bucket.
   *
   * @param bucket - The S3 bucket from which files can be downloaded
   * @param destinations - An object where keys are S3 object key prefixes and values are filesystem directories
   * @param props - Optional configuration properties
   */
  public constructor(
    private readonly bucket: IBucket,
    private readonly destinations: Record<string, string>,
    private readonly props?: SinglePriorityProps
  ) {}

  public configure(starter: Starter): void {
    this.bucket.grantRead(starter);

    starter.addScript(
      this.props?.priority ?? 10,
      ...ShellCommands.syncFromBucket(this.bucket, this.destinations)
    );
  }
}

/**
 * Constructor properties for ElasticFileSystemAddOn.
 */
export interface ElasticFileSystemAddOnProps extends SinglePriorityProps {
  /**
   * The intended Linux username or ID of the owner of the mounted directory.
   *
   * @default - No chown command is executed
   */
  readonly chown?: string;
  /**
   * The intended Linux group name or ID of the group of the mounted directory.
   *
   * @default - No chrp command is executed
   */
  readonly chgrp?: string;
  /**
   * The intended file mode of the mounted directory.
   *
   * @default - No chmod command is executed
   */
  readonly chmod?: number;
}

/**
 * An add-on that configures a mount point for an EFS filesystem.
 *
 * This add-on will produce a startup script to:
 * - Create the mount directory
 * - Mount the NFS filesystem to the mount point
 * - Optionally change the mode or ownership of the mount point
 *
 * This visitor also configures the Security Groups on both ends.
 */
export class ElasticFileSystemAddOn implements IStarterAddOn {
  /**
   * An add-on that configures a mount point for an EFS filesystem.
   *
   * This add-on will produce a startup script to:
   * - Create the mount directory
   * - Mount the NFS filesystem to the mount point
   * - Optionally change the mode or ownership of the mount point
   *
   * This visitor also configures the Security Groups on both ends.
   *
   * @param filesystem - The elastic filesystem to mount
   * @param destination - The directory to use as the mount point
   * @param props - Optional configuration properties
   */
  public constructor(
    private readonly filesystem: IFileSystem,
    private readonly destination: string,
    private readonly props?: ElasticFileSystemAddOnProps
  ) {}

  public configure(starter: Starter): void {
    const description = "Allow NFS traffic from EC2 to EFS";

    // The CDK source code definitely sets the default port to 2049.
    const port = this.filesystem.connections.defaultPort!;

    // To prevent circular references in case the stacks are different.
    for (const fsg of this.filesystem.connections.securityGroups) {
      for (const isg of starter.connections.securityGroups) {
        fsg.addIngressRule(isg, port, description, true);
        isg.addEgressRule(fsg, port, description);
      }
    }

    const postMount: string[] = [];
    const { chown, chgrp, chmod, priority = 10 } = this.props || {};
    if (chmod) {
      postMount.push(`chmod ${chmod} "${this.destination}"`);
    }
    if (chown || chgrp) {
      postMount.push(
        ...ShellCommands.changeOwnership(this.destination, chown, chgrp)
      );
    }

    starter.addScript(
      priority,
      ...ShellCommands.mountElasticFileSystem(
        this.filesystem,
        this.destination
      ),
      ...postMount
    );
  }
}
