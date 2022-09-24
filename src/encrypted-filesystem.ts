import { Duration, RemovalPolicy, Size } from "aws-cdk-lib";
import { IVpc, SubnetSelection, ISecurityGroup } from "aws-cdk-lib/aws-ec2";
import { IKey, Key } from "aws-cdk-lib/aws-kms";
import {
  FileSystem,
  IFileSystem,
  FileSystemProps,
  PerformanceMode,
  ThroughputMode,
  LifecyclePolicy,
  OutOfInfrequentAccessPolicy,
} from "aws-cdk-lib/aws-efs";
import { Construct } from "constructs";
import { consolidateProps } from "@aws-solutions-constructs/core";

/**
 * An EFS filesystem encrypted by a KMS customer managed key.
 */
export interface IEncryptedFileSystem {
  /**
   * The KMS encryption key.
   */
  readonly encryptionKey: IKey;
  /**
   * The EFS file system.
   */
  readonly fileSystem: IFileSystem;
}

/**
 * Constructor properties for EncryptedFileSystem.
 */
export interface EncryptedFileSystemProps {
  /**
   * The VPC into which the file system will be deployed.
   */
  readonly vpc: IVpc;

  /**
   * The KMS Key to encrypt the log group with.
   *
   * @default - A new KMS key will be created
   */
  readonly encryptionKey?: IKey;

  /**
   * Whether the key and volume should be retained when they are removed from the Stack.
   *
   * @default - RemovalPolicy.RETAIN
   */
  readonly removalPolicy?: RemovalPolicy;

  /**
   * Security Group to assign to this file system.
   *
   * @default - creates new security group which allows all outbound traffic
   */
  readonly securityGroup?: ISecurityGroup;

  /**
   * Which subnets to place the mount target in the VPC.
   *
   * @default - the isolated subnets
   */
  readonly vpcSubnets?: SubnetSelection;

  /**
   * A policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.
   *
   * @default - None. EFS will not transition files to the IA storage class.
   */
  readonly lifecyclePolicy?: LifecyclePolicy;

  /**
   * A policy used by EFS lifecycle management to transition files from Infrequent Access (IA) storage class to
   * primary storage class.
   *
   * @default - None. EFS will not transition files from IA storage to primary storage.
   */
  readonly outOfInfrequentAccessPolicy?: OutOfInfrequentAccessPolicy;

  /**
   * The performance mode that the file system will operate under.
   * An Amazon EFS file system's performance mode can't be changed after the file system has been created.
   * Updating this property will replace the file system.
   *
   * @default PerformanceMode.GENERAL_PURPOSE
   */
  readonly performanceMode?: PerformanceMode;

  /**
   * Enum to mention the throughput mode of the file system.
   *
   * @default ThroughputMode.BURSTING
   */
  readonly throughputMode?: ThroughputMode;

  /**
   * Provisioned throughput for the file system.
   * This is a required property if the throughput mode is set to PROVISIONED.
   * Must be at least 1MiB/s.
   *
   * @default - none, errors out
   */
  readonly provisionedThroughputPerSecond?: Size;

  /**
   * Whether to enable automatic backups for the file system.
   *
   * @default – true
   */
  readonly enableAutomaticBackups?: boolean;
}

/**
 * A log group encrypted by a KMS customer managed key.
 */
export class EncryptedFileSystem
  extends Construct
  implements IEncryptedFileSystem
{
  public readonly encryptionKey: IKey;
  public readonly fileSystem: IFileSystem;

  /**
   * Creates a new EncryptedFileSystem.
   */
  public constructor(
    scope: Construct,
    id: string,
    props: EncryptedFileSystemProps
  ) {
    super(scope, id);

    const { encryptionKey, removalPolicy, vpc } = props;

    const kmsKey =
      encryptionKey ??
      new Key(this, "Key", {
        description: `Created by ${this.node.path}`,
        removalPolicy,
        enableKeyRotation: true,
        pendingWindow: Duration.days(7),
      });

    const defaultFileSystemProps = {
      enableAutomaticBackups: true,
      encrypted: true,
      vpcSubnets: { subnets: vpc.isolatedSubnets },
    } as FileSystemProps;
    const fileSystemProps: FileSystemProps = consolidateProps(
      defaultFileSystemProps,
      {
        enableAutomaticBackups: props.enableAutomaticBackups,
        securityGroup: props.securityGroup,
        lifecyclePolicy: props.lifecyclePolicy,
        outOfInfrequentAccessPolicy: props.outOfInfrequentAccessPolicy,
        performanceMode: props.performanceMode,
        throughputMode: props.throughputMode,
        provisionedThroughputPerSecond: props.provisionedThroughputPerSecond,
      },
      { vpc, kmsKey, removalPolicy }
    );
    const volume = new FileSystem(this, "FileSystem", fileSystemProps);

    this.encryptionKey = kmsKey;
    this.fileSystem = volume;
  }
}
