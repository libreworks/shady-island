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

const HANDLER_PATH = path.join(__dirname, "../../assets/rds/triggers/pgsql");

/**
 * PostgreSQL-specific options.
 */
export interface PostgresqlDatabaseOptions {
  /**
   * The Secrets Manager secret for the owner of the schema.
   */
  readonly ownerSecret: ISecret;
  /**
   * The name of the schema to create.
   *
   * @default - The username of the ownerSecret.
   */
  readonly schemaName?: string;
  /**
   * The database default encoding set to use.
   *
   * @default - "UTF8"
   */
  readonly encoding?: string;
  /**
   * The database default locale to use.
   *
   * @default - rely on PostgreSQL to choose the default locale.
   */
  readonly locale?: string;
  /**
   * The URL to the PEM-encoded Certificate Authority file.
   *
   * Normally, we would just assume the Lambda runtime has the certificates to
   * trust already installed. Since the current Lambda runtime environments lack
   * the newer RDS certificate authority certificates, this option can be used
   * to specify a URL to a remote file containing the CAs.
   *
   * @see https://github.com/aws/aws-lambda-base-images/issues/123
   *
   * @default - https://truststore.pki.rds.amazonaws.com/REGION/REGION-bundle.pem
   */
  readonly certificateAuthoritiesUrl?: string;
}

/**
 * Constructor properties for PostgresqlDatabase.
 */
export interface PostgresqlDatabaseProps
  extends BaseDatabaseProps,
    PostgresqlDatabaseOptions {}

/**
 * Properties to specify when using PostgresqlDatabase.forCluster().
 */
export interface PostgresqlDatabaseForClusterOptions
  extends PostgresqlDatabaseOptions,
    BaseDatabaseOptions {
  /**
   * A Secrets Manager secret that contains administrative credentials.
   */
  readonly adminSecret?: ISecret;
}

/**
 * Properties to specify when using PostgresqlDatabase.forServerlessCluster().
 */
export interface PostgresqlDatabaseForServerlessClusterOptions
  extends PostgresqlDatabaseForClusterOptions {
  /**
   * The VPC where the Lambda function will run.
   */
  readonly vpc: IVpc;
}

/**
 * A PostgreSQL database.
 */
export class PostgresqlDatabase extends BaseDatabase {
  /**
   * Create a new PostgresqlDatabase inside a DatabaseCluster.
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
    options: PostgresqlDatabaseForClusterOptions
  ): PostgresqlDatabase {
    const props = { ...options };
    let clusterSecret = props.adminSecret || cluster.secret;
    if (clusterSecret === undefined) {
      throw new Error(
        "You must provide either the adminSecret property or a cluster with an attached secret"
      );
    }
    delete props.adminSecret;
    const database = new PostgresqlDatabase(scope, id, {
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
   * Create a new PostgresqlDatabase inside a DatabaseClusterFromSnapshot.
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
    options: PostgresqlDatabaseForClusterOptions
  ): PostgresqlDatabase {
    // The DatabaseClusterFromSnapshot type is equivalent to DatabaseCluster.
    return PostgresqlDatabase.forCluster(scope, id, cluster, options);
  }

  /**
   * Create a new PostgresqlDatabase inside a DatabaseCluster.
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
    options: PostgresqlDatabaseForServerlessClusterOptions
  ): PostgresqlDatabase {
    // The ServerlessClusterFromSnapshot type is a subset of ServerlessCluster.
    return PostgresqlDatabase.forServerlessClusterFromSnapshot(
      scope,
      id,
      cluster,
      options
    );
  }

  /**
   * Create a new PostgresqlDatabase inside a DatabaseClusterFromSnapshot.
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
    options: PostgresqlDatabaseForServerlessClusterOptions
  ): PostgresqlDatabase {
    const props = { ...options };
    let clusterSecret = props.adminSecret || cluster.secret;
    if (clusterSecret === undefined) {
      throw new Error(
        "You must provide either the adminSecret property or a cluster with an attached secret"
      );
    }
    delete props.adminSecret;
    const database = new PostgresqlDatabase(scope, id, {
      target: cluster,
      endpoint: cluster.clusterEndpoint,
      adminSecret: clusterSecret,
      ...props,
    });
    database.trigger.executeAfter(cluster);
    return database;
  }

  /**
   * Create a new PostgresqlDatabase inside a DatabaseInstance.
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
    options: PostgresqlDatabaseForClusterOptions
  ): PostgresqlDatabase {
    const props = { ...options };
    let clusterSecret = props.adminSecret || instance.secret;
    if (clusterSecret === undefined) {
      throw new Error(
        "You must provide either the adminSecret property or a cluster with an attached secret"
      );
    }
    delete props.adminSecret;
    const database = new PostgresqlDatabase(scope, id, {
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
   * Create a new PostgresqlDatabase inside a DatabaseInstanceFromSnapshot.
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
    options: PostgresqlDatabaseForClusterOptions
  ): PostgresqlDatabase {
    // The DatabaseInstanceFromSnapshot type is equivalent to DatabaseInstance.
    return PostgresqlDatabase.forInstance(scope, id, instance, options);
  }

  public readonly trigger: ITrigger;

  protected readonly lambdaFunction: Function;
  protected readonly ownerSecrets: ISecret[] = [];
  protected readonly readerSecrets: ISecret[] = [];
  protected readonly unprivilegedSecrets: ISecret[] = [];

  /**
   * Creates a new PostgresqlDatabase.
   *
   * @param scope - The Construct that contains this one.
   * @param id - The identifier of this construct.
   * @param props - The configuration properties for this construct.
   */
  public constructor(
    scope: IConstruct,
    id: string,
    props: PostgresqlDatabaseProps
  ) {
    super(scope, id, props);

    const {
      adminSecret,
      vpc,
      ownerSecret,
      schemaName,
      encoding = "UTF8",
    } = props;

    const environment: Record<string, string> = {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      ADMIN_SECRET_ARN: adminSecret.secretArn,
      OWNER_SECRET_ARN: ownerSecret.secretArn,
      OWNER_SECRETS: Lazy.string({
        produce: () =>
          JSON.stringify(this.ownerSecrets.map((s) => s.secretArn)),
      }),
      READER_SECRETS: Lazy.string({
        produce: () =>
          JSON.stringify(this.readerSecrets.map((s) => s.secretArn)),
      }),
      UNPRIVILEGED_SECRETS: Lazy.string({
        produce: () =>
          JSON.stringify(this.unprivilegedSecrets.map((s) => s.secretArn)),
      }),
      DB_NAME: this.databaseName,
      SCHEMA_NAME: schemaName || "",
      DB_ENCODING: encoding,
    };
    if (props.locale) {
      environment.DB_LOCALE = props.locale;
    }
    if (props.certificateAuthoritiesUrl) {
      environment.CA_CERTS_URL = props.certificateAuthoritiesUrl;
    }

    this.lambdaFunction = new Function(this, "Function", {
      runtime: Runtime.NODEJS_20_X,
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

  public addUserAsUnprivileged(secret: ISecret) {
    this.unprivilegedSecrets.push(secret);
    secret.grantRead(this.lambdaFunction);
    this.trigger.executeAfter(secret);
  }
}
