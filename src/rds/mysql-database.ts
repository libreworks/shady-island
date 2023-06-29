import * as path from "path";
import { Duration, Lazy } from "aws-cdk-lib";
import { IVpc } from "aws-cdk-lib/aws-ec2";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import {
  DatabaseCluster,
  DatabaseClusterFromSnapshot,
  DatabaseInstance,
  DatabaseInstanceFromSnapshot,
  ServerlessCluster,
  ServerlessClusterFromSnapshot,
} from "aws-cdk-lib/aws-rds";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";
import { ITrigger, Trigger } from "aws-cdk-lib/triggers";
import { IConstruct, Construct } from "constructs";
import {
  BaseDatabase,
  BaseDatabaseProps,
  BaseDatabaseOptions,
} from "./base-database";

const HANDLER_PATH = path.join(__dirname, "../../assets/rds/triggers/mysql");

/**
 * MySQL-specific options.
 */
export interface MysqlDatabaseOptions {
  /**
   * The database default character set to use.
   *
   * @default - "utf8mb4"
   */
  readonly characterSet?: string;
  /**
   * The database default collation to use.
   *
   * @default - rely on MySQL to choose the default collation.
   */
  readonly collation?: string;
}

/**
 * Constructor properties for MysqlDatabase.
 */
export interface MysqlDatabaseProps
  extends BaseDatabaseProps,
    MysqlDatabaseOptions {}

/**
 * Properties to specify when using MysqlDatabase.forCluster().
 */
export interface MysqlDatabaseForClusterOptions
  extends MysqlDatabaseOptions,
    BaseDatabaseOptions {
  /**
   * A Secrets Manager secret that contains administrative credentials.
   */
  readonly adminSecret?: ISecret;
}

/**
 * Properties to specify when using MysqlDatabase.forServerlessCluster().
 */
export interface MysqlDatabaseForServerlessClusterOptions
  extends MysqlDatabaseForClusterOptions {
  /**
   * The VPC where the Lambda function will run.
   */
  readonly vpc: IVpc;
}

/**
 * A MySQL database.
 */
export class MysqlDatabase extends BaseDatabase {
  /**
   * Create a new MysqlDatabase inside a DatabaseCluster.
   *
   * This method automatically adds the cluster to the CloudFormation
   * dependencies of the CDK Trigger.
   *
   * @param scope - The Construct that contains this one.
   * @param id - The identifier of this construct.
   * @param cluster - The database cluster construct.
   * @param options - The configuration properties for this construct.
   */
  public static forCluster(
    scope: Construct,
    id: string,
    cluster: DatabaseCluster,
    options: MysqlDatabaseForClusterOptions
  ): MysqlDatabase {
    const props = { ...options };
    let clusterSecret = props.adminSecret || cluster.secret;
    if (clusterSecret === undefined) {
      throw new Error(
        "You must provide either the adminSecret property or a cluster with an attached secret"
      );
    }
    delete props.adminSecret;
    const database = new MysqlDatabase(scope, id, {
      target: cluster,
      endpoint: cluster.clusterEndpoint,
      adminSecret: clusterSecret,
      vpc: cluster.vpc,
      ...props,
    });
    database.trigger.executeAfter(cluster);
    return database;
  }

  /**
   * Create a new MysqlDatabase inside a DatabaseClusterFromSnapshot.
   *
   * This method automatically adds the cluster to the CloudFormation
   * dependencies of the CDK Trigger.
   *
   * @param scope - The Construct that contains this one.
   * @param id - The identifier of this construct.
   * @param cluster - The database cluster construct.
   * @param options - The configuration properties for this construct.
   */
  public static forClusterFromSnapshot(
    scope: Construct,
    id: string,
    cluster: DatabaseClusterFromSnapshot,
    options: MysqlDatabaseForClusterOptions
  ): MysqlDatabase {
    // The DatabaseClusterFromSnapshot type is equivalent to DatabaseCluster.
    return MysqlDatabase.forCluster(scope, id, cluster, options);
  }

  /**
   * Create a new MysqlDatabase inside a DatabaseCluster.
   *
   * This method automatically adds the cluster to the CloudFormation
   * dependencies of the CDK Trigger.
   *
   * @param scope - The Construct that contains this one.
   * @param id - The identifier of this construct.
   * @param cluster - The database cluster construct.
   * @param options - The configuration properties for this construct.
   */
  public static forServerlessCluster(
    scope: Construct,
    id: string,
    cluster: ServerlessCluster,
    options: MysqlDatabaseForServerlessClusterOptions
  ): MysqlDatabase {
    // The ServerlessClusterFromSnapshot type is a subset of ServerlessCluster.
    return MysqlDatabase.forServerlessClusterFromSnapshot(
      scope,
      id,
      cluster,
      options
    );
  }

  /**
   * Create a new MysqlDatabase inside a DatabaseClusterFromSnapshot.
   *
   * This method automatically adds the cluster to the CloudFormation
   * dependencies of the CDK Trigger.
   *
   * @param scope - The Construct that contains this one.
   * @param id - The identifier of this construct.
   * @param cluster - The database cluster construct.
   * @param options - The configuration properties for this construct.
   */
  public static forServerlessClusterFromSnapshot(
    scope: Construct,
    id: string,
    cluster: ServerlessClusterFromSnapshot,
    options: MysqlDatabaseForServerlessClusterOptions
  ): MysqlDatabase {
    const props = { ...options };
    let clusterSecret = props.adminSecret || cluster.secret;
    if (clusterSecret === undefined) {
      throw new Error(
        "You must provide either the adminSecret property or a cluster with an attached secret"
      );
    }
    delete props.adminSecret;
    const database = new MysqlDatabase(scope, id, {
      target: cluster,
      endpoint: cluster.clusterEndpoint,
      adminSecret: clusterSecret,
      ...props,
    });
    database.trigger.executeAfter(cluster);
    return database;
  }

  /**
   * Create a new MysqlDatabase inside a DatabaseInstance.
   *
   * This method automatically adds the instance to the CloudFormation
   * dependencies of the CDK Trigger.
   *
   * @param scope - The Construct that contains this one.
   * @param id - The identifier of this construct.
   * @param instance - The database cluster construct.
   * @param options - The configuration properties for this construct.
   */
  public static forInstance(
    scope: Construct,
    id: string,
    instance: DatabaseInstance,
    options: MysqlDatabaseForClusterOptions
  ): MysqlDatabase {
    const props = { ...options };
    let clusterSecret = props.adminSecret || instance.secret;
    if (clusterSecret === undefined) {
      throw new Error(
        "You must provide either the adminSecret property or a cluster with an attached secret"
      );
    }
    delete props.adminSecret;
    const database = new MysqlDatabase(scope, id, {
      target: instance,
      endpoint: instance.instanceEndpoint,
      adminSecret: clusterSecret,
      vpc: instance.vpc,
      ...props,
    });
    database.trigger.executeAfter(instance);
    return database;
  }

  /**
   * Create a new MysqlDatabase inside a DatabaseInstanceFromSnapshot.
   *
   * This method automatically adds the instance to the CloudFormation
   * dependencies of the CDK Trigger.
   *
   * @param scope - The Construct that contains this one.
   * @param id - The identifier of this construct.
   * @param instance - The database cluster construct.
   * @param options - The configuration properties for this construct.
   */
  public static forInstanceFromSnapshot(
    scope: Construct,
    id: string,
    instance: DatabaseInstanceFromSnapshot,
    options: MysqlDatabaseForClusterOptions
  ): MysqlDatabase {
    // The DatabaseInstanceFromSnapshot type is equivalent to DatabaseInstance.
    return MysqlDatabase.forInstance(scope, id, instance, options);
  }

  public readonly trigger: ITrigger;

  protected readonly lambdaFunction: Function;
  protected readonly ownerSecrets: ISecret[] = [];
  protected readonly readerSecrets: ISecret[] = [];

  /**
   * Creates a new MysqlDatabase.
   *
   * @param scope - The Construct that contains this one.
   * @param id - The identifier of this construct.
   * @param props - The configuration properties for this construct.
   */
  public constructor(scope: IConstruct, id: string, props: MysqlDatabaseProps) {
    super(scope, id, props);

    const { adminSecret, vpc, characterSet = "utf8mb4" } = props;

    const environment: Record<string, string> = {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      ADMIN_SECRET_ARN: adminSecret.secretArn,
      OWNER_SECRETS: Lazy.string({
        produce: () =>
          JSON.stringify(this.ownerSecrets.map((s) => s.secretArn)),
      }),
      READER_SECRETS: Lazy.string({
        produce: () =>
          JSON.stringify(this.readerSecrets.map((s) => s.secretArn)),
      }),
      DB_NAME: this.databaseName,
      DB_CHARACTER_SET: characterSet,
    };
    if (props.collation) {
      environment.DB_COLLATION = props.collation;
    }

    this.lambdaFunction = new Function(this, "Function", {
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset(HANDLER_PATH),
      handler: "index.handler",
      description: "Creates a schema and possibly some secondary users",
      vpc,
      vpcSubnets: this.subnetSelection,
      securityGroups: [this.securityGroup],
      environment,
      timeout: Duration.minutes(2),
    });
    adminSecret.grantRead(this.lambdaFunction);

    this.trigger = new Trigger(this, "Trigger", {
      handler: this.lambdaFunction,
    });
    this.trigger.executeAfter(this.lambdaFunction);
  }

  public addUserAsOwner(secret: ISecret) {
    this.ownerSecrets.push(secret);
    secret.grantRead(this.lambdaFunction);
    this.trigger.executeAfter(secret);
  }

  public addUserAsReader(secret: ISecret) {
    this.readerSecrets.push(secret);
    secret.grantRead(this.lambdaFunction);
    this.trigger.executeAfter(secret);
  }
}
