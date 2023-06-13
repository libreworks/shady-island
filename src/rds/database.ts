import * as path from "path";
import { Duration, Lazy } from "aws-cdk-lib";
import {
  IConnectable,
  ISecurityGroup,
  IVpc,
  SecurityGroup,
  SubnetSelection,
} from "aws-cdk-lib/aws-ec2";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";
import { Trigger } from "aws-cdk-lib/triggers";
import { IConstruct, Construct } from "constructs";

const HANDLER_PATH = path.join(__dirname, "../../assets/rds/triggers");

/**
 * The definition used to create a database.
 */
export interface IDatabase extends IConstruct {}

/**
 * A database.
 */
export abstract class Database extends Construct implements IDatabase {}

export interface BaseDatabaseProps {
  readonly adminSecret: ISecret;
  readonly databaseName: string;
  readonly cluster: Construct;
  /**
   * The target service or database.
   */
  readonly target: IConnectable;
  /**
   * The VPC where the Lambda function will run.
   */
  readonly vpc: IVpc;
  /**
   * The type of subnets in the VPC where the Lambda function will run.
   *
   * @default - the Vpc default strategy if not specified.
   */
  readonly vpcSubnets?: SubnetSelection;
  /**
   * The security group for the Lambda function.
   *
   * @default - a new security group is created
   */
  readonly securityGroup?: ISecurityGroup;
  /**
   * The database default character set to use.
   *
   * @default - "utf8mb4"
   */
  readonly characterSet?: string;
}

export interface MysqlDatabaseProps extends BaseDatabaseProps {}

// Mysql creation includes character set (CHARACTER SET) and collation (COLLATE)
// possibly specify `utf8mb4_unicode_ci` as default collation

export class MysqlDatabase extends Database {
  protected readonly lambdaFunction: Function;
  protected readonly trigger: Trigger;
  protected readonly ownerSecrets: ISecret[] = [];
  protected readonly readerSecrets: ISecret[] = [];

  /**
   * Creates a new MysqlDatabase.
   *
   * @param scope - The Construct that contains this one.
   * @param id - The identifier of this construct.
   * @param props - The configuration properties for this construct.
   */
  protected constructor(
    scope: IConstruct,
    id: string,
    props: MysqlDatabaseProps
  ) {
    super(scope, id);

    const {
      adminSecret,
      databaseName,
      cluster,
      vpc,
      vpcSubnets,
      characterSet = "utf8mb4",
    } = props;

    const securityGroup =
      props.securityGroup ||
      new SecurityGroup(this, "SecurityGroup", {
        vpc: props.vpc,
        description: `Created for ${this.node.path}/Function`,
      });
    props.target.connections.allowDefaultPortFrom(securityGroup);

    const lambdaFunction = new Function(this, "Function", {
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset(`${HANDLER_PATH}/mysql`),
      handler: "index.handler",
      description: "Creates a schema and possibly some secondary users",
      vpc,
      vpcSubnets: { subnets: vpc.selectSubnets(vpcSubnets).subnets },
      securityGroups: [securityGroup],
      environment: {
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
        DATABASE_NAME: databaseName,
        DB_CHARACTER_SET: characterSet,
      },
      timeout: Duration.minutes(2),
    });

    this.lambdaFunction = lambdaFunction;
    this.trigger = new Trigger(this, "Trigger", { handler: lambdaFunction });

    adminSecret.grantRead(lambdaFunction);

    this.trigger.executeAfter(cluster, lambdaFunction);
  }

  /**
   * Declares a new database user to be assigned ownership permissions.
   *
   * @param secret - The Secrets Manager secret containing credentials.
   */
  public addUserAsOwner(secret: ISecret) {
    this.ownerSecrets.push(secret);
    secret.grantRead(this.lambdaFunction);
    this.trigger.executeAfter(secret);
  }

  /**
   * Declares a new database user to be assigned read-only permissions.
   *
   * @param secret - The Secrets Manager secret containing credentials.
   */
  public addUserAsReader(secret: ISecret) {
    this.readerSecrets.push(secret);
    secret.grantRead(this.lambdaFunction);
    this.trigger.executeAfter(secret);
  }
}

export class PostgresqlDatabase extends Database {}
