import { App, Stack } from "aws-cdk-lib";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { FileSystem } from "aws-cdk-lib/aws-efs";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import { ShellCommands } from "../../src/configuration/commands";

describe("ShellCommands", () => {
  describe("#syncFromBucket", () => {
    let app: App;
    let stack: Stack;
    let bucket: Bucket;

    beforeEach(() => {
      app = new App();
      stack = new Stack(app, "Stack", { env: { region: "us-east-1" } });
      bucket = new Bucket(stack, "Bucket");
    });

    afterEach(() => {
      // @ts-ignore
      app = undefined;
      // @ts-ignore
      stack = undefined;
      // @ts-ignore
      bucket = undefined;
    });

    test("works as expected", () => {
      const actual = ShellCommands.syncFromBucket(bucket, {
        "my-key": "/path/to/dir",
        "another-key": "/var/lib/something",
      });
      expect(actual).toStrictEqual([
        `configBucket="s3://${bucket.bucketName}"`,
        `aws --region us-east-1 s3 sync --only-show-errors "$configBucket/my-key" "/path/to/dir"`,
        `aws --region us-east-1 s3 sync --only-show-errors "$configBucket/another-key" "/var/lib/something"`,
      ]);
    });

    test("works as expected when empty", () => {
      const actual = ShellCommands.syncFromBucket(bucket, {});
      expect(actual).toStrictEqual([]);
    });

    test("works as expected with a single item", () => {
      const actual = ShellCommands.syncFromBucket(bucket, {
        "my-key": "/path/to/dir",
      });
      expect(actual).toStrictEqual([
        `aws --region us-east-1 s3 sync --only-show-errors "s3://${bucket.bucketName}/my-key" "/path/to/dir"`,
      ]);
    });
  });

  describe("#downloadSecret", () => {
    let app: App;
    let stack: Stack;
    let secret: Secret;

    beforeEach(() => {
      app = new App();
      stack = new Stack(app, "Stack", { env: { region: "us-east-2" } });
      secret = new Secret(stack, "Secret");
    });

    afterEach(() => {
      // @ts-ignore
      app = undefined;
      // @ts-ignore
      stack = undefined;
      // @ts-ignore
      secret = undefined;
    });

    test("works as expected", () => {
      const destination = "/run/secrets/file.json";
      const actual = ShellCommands.downloadSecret(secret, destination);
      expect(actual).toStrictEqual([
        `aws --region us-east-2 secretsmanager get-secret-value --secret-id "${secret.secretArn}" --query SecretString --output text > "${destination}"`,
      ]);
    });
  });

  describe("#disableUnattendedUpgrades", () => {
    test("behaves as expected", () => {
      const actual = ShellCommands.disableUnattendedUpgrades();
      expect(actual).toStrictEqual([
        'cp "/usr/share/unattended-upgrades/20auto-upgrades-disabled" "/etc/apt/apt.conf.d/"',
        "snap refresh --hold || true",
      ]);
    });
  });

  describe("#addDirectory", () => {
    test("behaves as expected", () => {
      const actual = ShellCommands.addDirectory("/path/to/foobar");
      expect(actual).toStrictEqual([`mkdir -p "/path/to/foobar"`]);
    });

    test("behaves as expected with mode", () => {
      const actual = ShellCommands.addDirectory("/path/to/foobar", {
        mode: "2755",
      });
      expect(actual).toStrictEqual([`mkdir -p -m "2755" "/path/to/foobar"`]);
    });

    test("behaves as expected with mode and user", () => {
      const actual = ShellCommands.addDirectory("/tmp/whatever", {
        mode: "0644",
        owner: "www-data",
      });
      expect(actual).toStrictEqual([
        `install -d -m "0644" -o "www-data" "/tmp/whatever"`,
      ]);
    });

    test("behaves as expected with mode and group", () => {
      const actual = ShellCommands.addDirectory("/tmp/whatever", {
        mode: "0644",
        group: "www-data",
      });
      expect(actual).toStrictEqual([
        `install -d -m "0644" -g "www-data" "/tmp/whatever"`,
      ]);
    });

    test("behaves as expected with user and group", () => {
      const actual = ShellCommands.addDirectory("/tmp/whatever", {
        owner: "www-data",
        group: "sudoers",
      });
      expect(actual).toStrictEqual([
        `install -d -o "www-data" -g "sudoers" "/tmp/whatever"`,
      ]);
    });

    test("behaves as expected with all options", () => {
      const actual = ShellCommands.addDirectory("/tmp/whatever", {
        mode: "2755",
        owner: "www-data",
        group: "sudoers",
      });
      expect(actual).toStrictEqual([
        `install -d -m "2755" -o "www-data" -g "sudoers" "/tmp/whatever"`,
      ]);
    });
  });

  describe("#changeOwnership", () => {
    test("behaves as expected with both values", () => {
      const filename = "/mnt/whatever";
      const owner = "www-data";
      const group = "admins";
      const actual = ShellCommands.changeOwnership(filename, owner, group);
      expect(actual).toStrictEqual([`chown ${owner}:${group} "${filename}"`]);
    });

    test("behaves as expected with owner", () => {
      const filename = "/mnt/whatever";
      const owner = "www-data";
      const actual = ShellCommands.changeOwnership(filename, owner);
      expect(actual).toStrictEqual([`chown ${owner} "${filename}"`]);
    });

    test("behaves as expected with group", () => {
      const filename = "/mnt/whatever";
      const group = "www-data";
      const actual = ShellCommands.changeOwnership(filename, undefined, group);
      expect(actual).toStrictEqual([`chgrp ${group} "${filename}"`]);
    });

    test("behaves as expected with neither", () => {
      const filename = "/mnt/whatever";
      const actual = ShellCommands.changeOwnership(filename);
      expect(actual).toStrictEqual([]);
    });
  });

  describe("#outputFile", () => {
    test("behaves as expected", () => {
      const contents = "what\nis\ngoing\non here?";
      const destination = "/run/secrets/My Secret Name.txt";
      const actual = ShellCommands.outputFile(contents, destination);
      expect(actual).toStrictEqual([
        `cat << 'END_OF_FILE' > "${destination}"`,
        "what",
        "is",
        "going",
        "on here?",
        `END_OF_FILE`,
      ]);
    });

    test("behaves as expected with options", () => {
      const contents = "what\nis\ngoing\non here?";
      const destination = "/run/secrets/My Secret Name.txt";
      const actual = ShellCommands.outputFile(contents, destination, {
        delimiter: "EOF",
        substitution: true,
      });
      expect(actual).toStrictEqual([
        `cat << EOF > "${destination}"`,
        "what",
        "is",
        "going",
        "on here?",
        "EOF",
      ]);
    });
  });

  describe("#addElasticFileSystemMount", () => {
    let app: App;
    let stack: Stack;
    let vpc: Vpc;
    let filesystem: FileSystem;

    beforeEach(() => {
      app = new App();
      stack = new Stack(app, "Stack", { env: { region: "us-west-1" } });
      vpc = new Vpc(stack, "VPC");
      filesystem = new FileSystem(stack, "EFS", { vpc });
    });

    afterEach(() => {
      // @ts-ignore
      app = undefined;
      // @ts-ignore
      stack = undefined;
      // @ts-ignore
      vpc = undefined;
      // @ts-ignore
      filesystem = undefined;
    });

    test("works as expected", () => {
      const destination = "/mnt/whatever";
      const actual = ShellCommands.mountElasticFileSystem(
        filesystem,
        destination
      );
      expect(actual).toStrictEqual([
        `mkdir -p "${destination}"`,
        `mount -t nfs4 -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport ${filesystem.fileSystemId}.efs.us-west-1.amazonaws.com:/ "${destination}"`,
      ]);
    });
  });
});
