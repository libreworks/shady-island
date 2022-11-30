import { IFileSystem, FileSystem, FileSystemProps } from "aws-cdk-lib/aws-efs";
import { IKey, Key } from "aws-cdk-lib/aws-kms";
import { Construct, IConstruct } from "constructs";

/**
 * Interface for EncryptedFileSystem.
 */
export interface IEncryptedFileSystem extends IConstruct {
  /**
   * The KMS encryption key.
   */
  readonly key: IKey;

  /**
   * The EFS file system.
   */
  readonly fileSystem: IFileSystem;
}

/**
 * Constructor parameters for EncryptedFileSystem.
 *
 * The `encrypted` argument is ignored.
 */
export interface EncryptedFileSystemProps extends FileSystemProps {}

/**
 * An EncryptedFileSystem.
 */
export class EncryptedFileSystem
  extends Construct
  implements IEncryptedFileSystem
{
  public readonly key: IKey;
  public readonly fileSystem: IFileSystem;

  /**
   * Creates a new EncryptedFileSystem.
   *
   * @param scope - The Construct that contains this one.
   * @param id - The identifier of this construct.
   * @param props - The configuration properties for this construct.
   */
  public constructor(
    scope: IConstruct,
    id: string,
    props: EncryptedFileSystemProps
  ) {
    super(scope, id);

    const { removalPolicy } = props;

    const key =
      props.kmsKey ??
      new Key(this, "Key", {
        description: `Created by ${this.node.path}`,
        removalPolicy,
      });

    const fileSystem = new FileSystem(this, "FileSystem", {
      ...props,
      encrypted: true,
      kmsKey: key,
      removalPolicy,
    });

    this.key = key;
    this.fileSystem = fileSystem;
  }
}
