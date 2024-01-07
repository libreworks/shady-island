import { App, SecretValue, Stack } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import {
  AuroraPostgresEngineVersion,
  ClusterInstance,
  Credentials,
  DatabaseCluster,
  DatabaseClusterFromSnapshot,
  DatabaseClusterEngine,
  DatabaseInstanceEngine,
  DatabaseInstance,
  DatabaseInstanceFromSnapshot,
  MariaDbEngineVersion,
  ServerlessCluster,
  ServerlessClusterFromSnapshot,
  SnapshotCredentials,
} from "aws-cdk-lib/aws-rds";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import { Trigger } from "aws-cdk-lib/triggers";
import { PostgresqlDatabase } from "../../src/rds";

describe("BaseDatabase", () => {
  let app: App;
  let stack: Stack;
  let vpc: Vpc;
  let adminSecret: Secret;
  let databaseName = "foobar";

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack");
    vpc = new Vpc(stack, "VPC", {});
    adminSecret = new Secret(stack, "Secret", {});
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
    // @ts-ignore: TS2322
    vpc = undefined;
    // @ts-ignore: TS2322
    adminSecret = undefined;
  });

  describe("#addUserAsOwner", () => {
    test("works as expected", () => {
      let cluster = new DatabaseCluster(stack, "Cluster", {
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        writer: ClusterInstance.provisioned("writer", {}),
        credentials: Credentials.fromSecret(adminSecret),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forCluster(stack, "MyDb", cluster, {
        databaseName,
        ownerSecret,
      });
      const userSecret = new Secret(stack, "UserSecret", {});
      obj.addUserAsOwner(userSecret);
      const trigger = obj.node.findChild("Trigger") as Trigger;
      expect(trigger.node.dependencies).toContain(userSecret);
    });

    test("synthesizes as expected", () => {
      let cluster = new DatabaseCluster(stack, "Cluster", {
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        writer: ClusterInstance.provisioned("writer", {}),
        credentials: Credentials.fromSecret(adminSecret),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forCluster(stack, "MyDb", cluster, {
        databaseName,
        ownerSecret,
        locale: "en_US.utf8",
      });
      const userSecret = new Secret(stack, "UserSecret", {});
      obj.addUserAsOwner(userSecret);
      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::Lambda::Function", {
        Description: "Creates a schema and possibly some secondary users",
        Environment: {
          Variables: {
            ADMIN_SECRET_ARN: { Ref: "SecretAttachment2E1B7C3B" },
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
            DB_ENCODING: "UTF8",
            DB_LOCALE: "en_US.utf8",
            DB_NAME: "foobar",
            OWNER_SECRETS: {
              "Fn::Join": ["", ['["', { Ref: "UserSecret0463E4F5" }, '"]']],
            },
            READER_SECRETS: "[]",
            UNPRIVILEGED_SECRETS: "[]",
          },
        },
        Handler: "index.handler",
        Runtime: "nodejs20.x",
        Timeout: 120,
        VpcConfig: {
          SecurityGroupIds: [
            { "Fn::GetAtt": ["MyDbSecurityGroupBBC038AB", "GroupId"] },
          ],
          SubnetIds: [
            { Ref: "VPCPrivateSubnet1Subnet8BCA10E0" },
            { Ref: "VPCPrivateSubnet2SubnetCFCDAA7A" },
          ],
        },
      });
      template.resourceCountIs("Custom::Trigger", 1);
      template.hasResource("Custom::Trigger", {
        DependsOn: Match.arrayWith([
          "ClusterEB0386A7",
          "ClusterSecurityGroupfromStackMyDbSecurityGroup0E936039IndirectPortE751E3FE",
          "ClusterSecurityGroup0921994B",
          "ClusterSubnetsDCFA5CB7",
          "MyDbFunction7E72B045",
          "MyDbFunctionServiceRoleDefaultPolicyEB977851",
          "MyDbFunctionServiceRole0211C4A3",
          "UserSecret0463E4F5",
        ]),
      });
    });
  });

  describe("#addUserAsReader", () => {
    test("works as expected", () => {
      let cluster = new DatabaseCluster(stack, "Cluster", {
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        writer: ClusterInstance.provisioned("writer", {}),
        credentials: Credentials.fromSecret(adminSecret),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forCluster(stack, "MyDb", cluster, {
        databaseName,
        ownerSecret,
      });
      const userSecret = new Secret(stack, "UserSecret", {});
      obj.addUserAsReader(userSecret);
      const trigger = obj.node.findChild("Trigger") as Trigger;
      expect(trigger.node.dependencies).toContain(userSecret);
    });

    test("synthesizes as expected", () => {
      let cluster = new DatabaseCluster(stack, "Cluster", {
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        writer: ClusterInstance.provisioned("writer", {}),
        credentials: Credentials.fromSecret(adminSecret),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forCluster(stack, "MyDb", cluster, {
        databaseName,
        ownerSecret,
        encoding: "UTF8",
      });
      const userSecret = new Secret(stack, "UserSecret", {});
      obj.addUserAsReader(userSecret);
      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::Lambda::Function", {
        Description: "Creates a schema and possibly some secondary users",
        Environment: {
          Variables: {
            ADMIN_SECRET_ARN: { Ref: "SecretAttachment2E1B7C3B" },
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
            DB_ENCODING: "UTF8",
            DB_NAME: "foobar",
            OWNER_SECRETS: "[]",
            READER_SECRETS: {
              "Fn::Join": ["", ['["', { Ref: "UserSecret0463E4F5" }, '"]']],
            },
            UNPRIVILEGED_SECRETS: "[]",
          },
        },
        Handler: "index.handler",
        Runtime: "nodejs20.x",
        Timeout: 120,
        VpcConfig: {
          SecurityGroupIds: [
            { "Fn::GetAtt": ["MyDbSecurityGroupBBC038AB", "GroupId"] },
          ],
          SubnetIds: [
            { Ref: "VPCPrivateSubnet1Subnet8BCA10E0" },
            { Ref: "VPCPrivateSubnet2SubnetCFCDAA7A" },
          ],
        },
      });
      template.resourceCountIs("Custom::Trigger", 1);
      template.hasResource("Custom::Trigger", {
        DependsOn: Match.arrayWith([
          "ClusterEB0386A7",
          "ClusterSecurityGroupfromStackMyDbSecurityGroup0E936039IndirectPortE751E3FE",
          "ClusterSecurityGroup0921994B",
          "ClusterSubnetsDCFA5CB7",
          "MyDbFunction7E72B045",
          "MyDbFunctionServiceRoleDefaultPolicyEB977851",
          "MyDbFunctionServiceRole0211C4A3",
          "UserSecret0463E4F5",
        ]),
      });
      template.hasResourceProperties("AWS::IAM::Policy", {
        PolicyDocument: {
          Statement: [
            {
              Action: [
                "secretsmanager:GetSecretValue",
                "secretsmanager:DescribeSecret",
              ],
              Effect: "Allow",
              Resource: { Ref: "SecretAttachment2E1B7C3B" },
            },
            {
              Action: [
                "secretsmanager:GetSecretValue",
                "secretsmanager:DescribeSecret",
              ],
              Effect: "Allow",
              Resource: { Ref: "UserSecret0463E4F5" },
            },
          ],
          Version: "2012-10-17",
        },
        PolicyName: "MyDbFunctionServiceRoleDefaultPolicyEB977851",
        Roles: [{ Ref: "MyDbFunctionServiceRole0211C4A3" }],
      });
    });
  });

  describe("#addUserAsUnprivileged", () => {
    test("works as expected", () => {
      let cluster = new DatabaseCluster(stack, "Cluster", {
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        writer: ClusterInstance.provisioned("writer", {}),
        credentials: Credentials.fromSecret(adminSecret),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forCluster(stack, "MyDb", cluster, {
        databaseName,
        ownerSecret,
      });
      const userSecret = new Secret(stack, "UserSecret", {});
      obj.addUserAsUnprivileged(userSecret);
      const trigger = obj.node.findChild("Trigger") as Trigger;
      expect(trigger.node.dependencies).toContain(userSecret);
    });

    test("synthesizes as expected", () => {
      let cluster = new DatabaseCluster(stack, "Cluster", {
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        writer: ClusterInstance.provisioned("writer", {}),
        credentials: Credentials.fromSecret(adminSecret),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forCluster(stack, "MyDb", cluster, {
        databaseName,
        ownerSecret,
        encoding: "UTF8",
      });
      const userSecret = new Secret(stack, "UserSecret", {});
      obj.addUserAsUnprivileged(userSecret);
      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::Lambda::Function", {
        Description: "Creates a schema and possibly some secondary users",
        Environment: {
          Variables: {
            ADMIN_SECRET_ARN: { Ref: "SecretAttachment2E1B7C3B" },
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
            DB_ENCODING: "UTF8",
            DB_NAME: "foobar",
            OWNER_SECRETS: "[]",
            READER_SECRETS: "[]",
            UNPRIVILEGED_SECRETS: {
              "Fn::Join": ["", ['["', { Ref: "UserSecret0463E4F5" }, '"]']],
            },
          },
        },
        Handler: "index.handler",
        Runtime: "nodejs20.x",
        Timeout: 120,
        VpcConfig: {
          SecurityGroupIds: [
            { "Fn::GetAtt": ["MyDbSecurityGroupBBC038AB", "GroupId"] },
          ],
          SubnetIds: [
            { Ref: "VPCPrivateSubnet1Subnet8BCA10E0" },
            { Ref: "VPCPrivateSubnet2SubnetCFCDAA7A" },
          ],
        },
      });
      template.resourceCountIs("Custom::Trigger", 1);
      template.hasResource("Custom::Trigger", {
        DependsOn: Match.arrayWith([
          "ClusterEB0386A7",
          "ClusterSecurityGroupfromStackMyDbSecurityGroup0E936039IndirectPortE751E3FE",
          "ClusterSecurityGroup0921994B",
          "ClusterSubnetsDCFA5CB7",
          "MyDbFunction7E72B045",
          "MyDbFunctionServiceRoleDefaultPolicyEB977851",
          "MyDbFunctionServiceRole0211C4A3",
          "UserSecret0463E4F5",
        ]),
      });
      template.hasResourceProperties("AWS::IAM::Policy", {
        PolicyDocument: {
          Statement: [
            {
              Action: [
                "secretsmanager:GetSecretValue",
                "secretsmanager:DescribeSecret",
              ],
              Effect: "Allow",
              Resource: { Ref: "SecretAttachment2E1B7C3B" },
            },
            {
              Action: [
                "secretsmanager:GetSecretValue",
                "secretsmanager:DescribeSecret",
              ],
              Effect: "Allow",
              Resource: { Ref: "UserSecret0463E4F5" },
            },
          ],
          Version: "2012-10-17",
        },
        PolicyName: "MyDbFunctionServiceRoleDefaultPolicyEB977851",
        Roles: [{ Ref: "MyDbFunctionServiceRole0211C4A3" }],
      });
    });
  });

  describe("#forDatabaseCluster", () => {
    test("works as expected with defaults", () => {
      let cluster = new DatabaseCluster(stack, "Cluster", {
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        writer: ClusterInstance.provisioned("writer", {}),
        credentials: Credentials.fromSecret(adminSecret),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forCluster(stack, "MyDb", cluster, {
        databaseName,
        ownerSecret,
      });
      expect(obj.endpoint).toBe(cluster.clusterEndpoint);
      const trigger = obj.node.findChild("Trigger") as Trigger;
      expect(trigger.node.dependencies).toContain(cluster);
    });

    test("works as expected with override secret", () => {
      let cluster = new DatabaseCluster(stack, "Cluster", {
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        writer: ClusterInstance.provisioned("writer", {}),
        credentials: Credentials.fromPassword(
          "foobar",
          SecretValue.unsafePlainText("Insecure Password")
        ),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forCluster(stack, "MyDb", cluster, {
        databaseName,
        adminSecret,
        ownerSecret,
      });
      expect(obj.endpoint).toBe(cluster.clusterEndpoint);
    });

    test("throws an exception with no secret", () => {
      let cluster = new DatabaseCluster(stack, "Cluster", {
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        writer: ClusterInstance.provisioned("writer", {}),
        credentials: Credentials.fromPassword(
          "foobar",
          SecretValue.unsafePlainText("Insecure Password")
        ),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      expect(() => {
        PostgresqlDatabase.forCluster(stack, "MyDb", cluster, {
          databaseName,
          ownerSecret,
        });
      }).toThrowError({
        name: "Error",
        message:
          "You must provide either the adminSecret property or a cluster with an attached secret",
      });
    });
  });

  describe("#forDatabaseClusterFromSnapshot", () => {
    test("works as expected with defaults", () => {
      let cluster = new DatabaseClusterFromSnapshot(stack, "Cluster", {
        snapshotIdentifier: "aoeu1",
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        writer: ClusterInstance.provisioned("writer", {}),
        snapshotCredentials: SnapshotCredentials.fromSecret(adminSecret),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forClusterFromSnapshot(
        stack,
        "MyDb",
        cluster,
        {
          databaseName,
          ownerSecret,
        }
      );
      expect(obj.endpoint).toBe(cluster.clusterEndpoint);
      const trigger = obj.node.findChild("Trigger") as Trigger;
      expect(trigger.node.dependencies).toContain(cluster);
    });
  });

  describe("#forDatabaseInstance", () => {
    test("works as expected with defaults", () => {
      let cluster = new DatabaseInstance(stack, "Instance", {
        engine: DatabaseInstanceEngine.mariaDb({
          version: MariaDbEngineVersion.VER_10_6_11,
        }),
        vpc,
        credentials: Credentials.fromSecret(adminSecret),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forInstance(stack, "MyDb", cluster, {
        databaseName,
        ownerSecret,
      });
      expect(obj.endpoint).toBe(cluster.instanceEndpoint);
      const trigger = obj.node.findChild("Trigger") as Trigger;
      expect(trigger.node.dependencies).toContain(cluster);
    });

    test("works as expected with override secret", () => {
      let cluster = new DatabaseInstance(stack, "Instance", {
        engine: DatabaseInstanceEngine.mariaDb({
          version: MariaDbEngineVersion.VER_10_6_11,
        }),
        vpc,
        credentials: Credentials.fromPassword(
          "foobar",
          SecretValue.unsafePlainText("Insecure Password")
        ),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forInstance(stack, "MyDb", cluster, {
        databaseName,
        adminSecret,
        ownerSecret,
      });
      expect(obj.endpoint).toBe(cluster.instanceEndpoint);
    });

    test("throws an exception with no secret", () => {
      let cluster = new DatabaseInstance(stack, "Instance", {
        engine: DatabaseInstanceEngine.mariaDb({
          version: MariaDbEngineVersion.VER_10_6_11,
        }),
        vpc,
        credentials: Credentials.fromPassword(
          "foobar",
          SecretValue.unsafePlainText("Insecure Password")
        ),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      expect(() => {
        PostgresqlDatabase.forInstance(stack, "MyDb", cluster, {
          databaseName,
          ownerSecret,
        });
      }).toThrowError({
        name: "Error",
        message:
          "You must provide either the adminSecret property or a cluster with an attached secret",
      });
    });
  });

  describe("#forDatabaseInstanceFromSnapshot", () => {
    test("works as expected with defaults", () => {
      let cluster = new DatabaseInstanceFromSnapshot(stack, "Cluster", {
        snapshotIdentifier: "aoeu1",
        engine: DatabaseInstanceEngine.mariaDb({
          version: MariaDbEngineVersion.VER_10_6_11,
        }),
        vpc,
        credentials: SnapshotCredentials.fromSecret(adminSecret),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forInstanceFromSnapshot(
        stack,
        "MyDb",
        cluster,
        {
          databaseName,
          ownerSecret,
        }
      );
      expect(obj.endpoint).toBe(cluster.instanceEndpoint);
      const trigger = obj.node.findChild("Trigger") as Trigger;
      expect(trigger.node.dependencies).toContain(cluster);
    });
  });

  describe("#forServerlessCluster", () => {
    test("works as expected with defaults", () => {
      let cluster = new ServerlessCluster(stack, "Cluster", {
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        credentials: Credentials.fromSecret(adminSecret),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forServerlessCluster(
        stack,
        "MyDb",
        cluster,
        {
          databaseName,
          vpc,
          ownerSecret,
        }
      );
      expect(obj.endpoint).toBe(cluster.clusterEndpoint);
      const trigger = obj.node.findChild("Trigger") as Trigger;
      expect(trigger.node.dependencies).toContain(cluster);
    });
  });

  describe("#forServerlessClusterFromSnapshot", () => {
    test("works as expected with defaults", () => {
      let cluster = new ServerlessClusterFromSnapshot(stack, "Instance", {
        snapshotIdentifier: "foobar",
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        credentials: SnapshotCredentials.fromSecret(adminSecret),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forServerlessClusterFromSnapshot(
        stack,
        "MyDb",
        cluster,
        {
          databaseName,
          vpc,
          ownerSecret,
        }
      );
      expect(obj.endpoint).toBe(cluster.clusterEndpoint);
      const trigger = obj.node.findChild("Trigger") as Trigger;
      expect(trigger.node.dependencies).toContain(cluster);
    });

    test("works as expected with override secret", () => {
      let cluster = new ServerlessClusterFromSnapshot(stack, "Instance", {
        snapshotIdentifier: "foobar",
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        credentials: SnapshotCredentials.fromPassword(
          SecretValue.unsafePlainText("Insecure Password")
        ),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      const obj = PostgresqlDatabase.forServerlessClusterFromSnapshot(
        stack,
        "MyDb",
        cluster,
        {
          databaseName,
          adminSecret,
          vpc,
          ownerSecret,
        }
      );
      expect(obj.endpoint).toBe(cluster.clusterEndpoint);
    });

    test("throws an exception with no secret", () => {
      let cluster = new ServerlessClusterFromSnapshot(stack, "Instance", {
        snapshotIdentifier: "foobar",
        engine: DatabaseClusterEngine.auroraPostgres({
          version: AuroraPostgresEngineVersion.VER_11_19,
        }),
        vpc,
        credentials: SnapshotCredentials.fromPassword(
          SecretValue.unsafePlainText("Insecure Password")
        ),
      });
      const ownerSecret = new Secret(stack, "OwnerSecret", {});
      expect(() => {
        PostgresqlDatabase.forServerlessClusterFromSnapshot(
          stack,
          "MyDb",
          cluster,
          {
            databaseName,
            vpc,
            ownerSecret,
          }
        );
      }).toThrowError({
        name: "Error",
        message:
          "You must provide either the adminSecret property or a cluster with an attached secret",
      });
    });
  });
});
