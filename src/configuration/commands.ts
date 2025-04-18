import type { IFileSystem } from "aws-cdk-lib/aws-efs";
import type { IBucket } from "aws-cdk-lib/aws-s3";
import type { ISecret } from "aws-cdk-lib/aws-secretsmanager";

/**
 * Options for the `ShellCommands.outputFile` method.
 */
export interface OutputFileOptions {
  /**
   * The bash heredoc delimiter
   *
   * @default - END_OF_FILE
   */
  readonly delimiter?: string;

  /**
   * Use `true` to enable variable and command substitution inside the heredoc.
   *
   * @default - disabled
   */
  readonly substitution?: boolean;
}

/**
 * Options for the `ShellCommands.addDirectory` method.
 */
export interface AddDirectoryOptions {
  /**
   * The username or numeric user ID to assign as the directory owner.
   */
  readonly owner?: string;

  /**
   * The group name or numeric group ID to assign as the directory group.
   */
  readonly group?: string;

  /**
   * The file mode, e.g. 2755, 0400
   */
  readonly mode?: string;
}

/**
 * Constructor properties for AptPackagesAddOn.
 */
export interface InstallAptPackagesOptions {
  /**
   * Additional Apt Repositories to enable using add-apt-repository.
   */
  readonly repositories?: string[];
  /**
   * Whether to run apt autoremove after installation finishes.
   *
   * @default - true
   */
  readonly autoRemove?: boolean;
}

/**
 * A utility class that provides POSIX shell commands for User Data scripts.
 */
export class ShellCommands {
  /**
   * Writes the literal contents of a string to a destination file.
   *
   * @param contents - The file contents
   * @param destination - The filename to output
   * @param options - Configuration options
   * @returns The shell commands.
   */
  public static outputFile(
    contents: string,
    destination: string,
    options?: OutputFileOptions
  ) {
    const { delimiter = "END_OF_FILE", substitution } = options || {};
    const firstDelimiter = substitution ? delimiter : `'${delimiter}'`;
    return [
      `cat << ${firstDelimiter} > "${destination}"`,
      ...contents.split("\n"),
      delimiter,
    ];
  }

  /**
   * Gets commands to synchronize objects from an S3 bucket to the filesystem.
   *
   * e.g. `syncFromBucket(bucket, {"nginx-config": "/etc/nginx"})`.
   *
   * Be sure to grant your autoscaling group or EC2 instance read access.
   *
   * @param bucket - The source bucket
   * @param destinations - Record with S3 object keys to filesystem path values
   * @returns The shell commands.
   */
  public static syncFromBucket(
    bucket: IBucket,
    destinations: Record<string, string>
  ): string[] {
    const destinationsLength = Object.values(destinations).length;
    if (destinationsLength === 0) {
      return [];
    }

    const region = bucket.env.region;
    if (destinationsLength === 1) {
      return Object.entries(destinations).map(
        ([key, dest]) =>
          `aws --region ${region} s3 sync --only-show-errors "s3://${bucket.bucketName}/${key}" "${dest}"`
      );
    } else {
      const commands: string[] = [`configBucket="s3://${bucket.bucketName}"`];
      Object.entries(destinations).forEach(([key, dest]) =>
        commands.push(
          `aws --region ${region} s3 sync --only-show-errors "$configBucket/${key}" "${dest}"`
        )
      );
      return commands;
    }
  }

  /**
   * Uses either `mkdir` or `install` to create a directory.
   *
   * @param name - The name of the directory to create
   * @param options - Configuration options
   * @returns The shell commands.
   */
  public static addDirectory(
    name: string,
    options?: AddDirectoryOptions
  ): string[] {
    const { owner, group, mode } = options || {};
    if (!owner && !group) {
      return [mode ? `mkdir -p -m "${mode}" "${name}"` : `mkdir -p "${name}"`];
    }
    const parts = ["install -d"];
    if (mode) {
      parts.push(`-m "${mode}"`);
    }
    if (owner) {
      parts.push(`-o "${owner}"`);
    }
    if (group) {
      parts.push(`-g "${group}"`);
    }
    parts.push(`"${name}"`);
    return [parts.join(" ")];
  }

  /**
   * Gets the command to download a Secrets Manager secret to the filesystem.
   *
   * Be sure to grant your autoscaling group or EC2 instance read access.
   *
   * @param secret - The secret to download.
   * @param destination - The local filesystem path where the secret is stored.
   * @returns The shell commands.
   */
  public static downloadSecret(secret: ISecret, destination: string): string[] {
    const region = secret.env.region;

    return [
      `aws --region ${region} secretsmanager get-secret-value --secret-id "${secret.secretArn}" --query SecretString --output text > "${destination}"`,
    ];
  }

  /**
   * Gets a command to change the ownership and/or group membership of a file.
   *
   * If both `uid` and `gid` are provided, this method returns a single
   * `chown` command to set both values. If just `uid` is provided, this method
   * returns a single `chown` command that sets the owner. If just `gid` is
   * provided, this method returns a single `chgrp` command. If neither are
   * provided, this method returns an empty array.
   *
   * @param filename - The local filesystem path to the file or directory.
   * @param uid - Optional. The owner username or uid.
   * @param gid - Optional. The group name or gid.
   * @returns The shell commands.
   */
  public static changeOwnership(
    filename: string,
    uid?: string,
    gid?: string
  ): string[] {
    const commands: string[] = [];

    if (uid && gid) {
      commands.push(`chown ${uid}:${gid} "${filename}"`);
    } else if (uid) {
      commands.push(`chown ${uid} "${filename}"`);
    } else if (gid) {
      commands.push(`chgrp ${gid} "${filename}"`);
    }

    return commands;
  }

  /**
   * Gets the command to mount an EFS filesystem to a destination path.
   *
   * Be sure to grant your autoscaling group or EC2 instance network access.
   *
   * @param filesystem - The EFS filesystem
   * @param destination - The local filesystem path for the mount point
   * @returns The shell commands.
   */
  public static mountElasticFileSystem(
    filesystem: IFileSystem,
    destination: string
  ): string[] {
    const region = filesystem.env.region;
    const filesystemHostname = `${filesystem.fileSystemId}.efs.${region}.amazonaws.com`;

    return [
      `mkdir -p "${destination}"`,
      `mount -t nfs4 -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport ${filesystemHostname}:/ "${destination}"`,
    ];
  }

  /**
   * Gets a command to disable unattended package upgrades on Debian/Ubuntu.
   *
   * @returns The shell commands.
   */
  public static disableUnattendedUpgrades(): string[] {
    return [
      'cp "/usr/share/unattended-upgrades/20auto-upgrades-disabled" "/etc/apt/apt.conf.d/"',
      "snap refresh --hold || true",
    ];
  }

  /**
   * Gets commands to setup APT and install packages.
   *
   * @param packages - The packages to install
   * @param options - Configuration options
   * @returns The shell commands.
   */
  public static installAptPackages(
    packages: string[],
    options?: InstallAptPackagesOptions
  ): string[] {
    const { repositories = [], autoRemove = true } = options || {};
    const packagesToInstall = new Set(packages);
    const repositoriesToAdd = new Set(repositories);

    const commands = [];

    if (repositoriesToAdd.size > 0) {
      commands.push(...repositories.map((r) => `add-apt-repository -y "${r}"`));
    }
    commands.push("apt -yq update");
    if (packagesToInstall.size > 0) {
      const packageNames = Array.from(packagesToInstall).join(" ");
      commands.push(
        `DEBIAN_FRONTEND=noninteractive apt -yq -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" install ${packageNames}`
      );
    }
    if (autoRemove) {
      commands.push("apt -yq autoremove");
    }

    return commands;
  }
}
