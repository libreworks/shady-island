import {
  IConnectable,
  ISecurityGroup,
  IVpc,
  SecurityGroup,
  SubnetSelection,
} from "aws-cdk-lib/aws-ec2";
import { Endpoint } from "aws-cdk-lib/aws-rds";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";
import { ITrigger } from "aws-cdk-lib/triggers";
import { IConstruct, Construct } from "constructs";

/**
 * The definition used to create a database.
 */
export interface IDatabase extends IConstruct {
  /**
   * The cluster or instance endpoint
   */
  readonly endpoint: Endpoint;

  /**
   * The name of the database/catalog.
   */
  readonly databaseName: string;

  /**
   * The CDK Trigger that kicks off the process.
   *
   * You can further customize when the trigger fires using `executeAfter`.
   */
  readonly trigger: ITrigger;

  /**
   * Declares a new database user to be assigned ownership permissions.
   *
   * @param secret - The Secrets Manager secret containing credentials.
   */
  addUserAsOwner(secret: ISecret): void;

  /**
   * Declares a new database user to be assigned read-only permissions.
   *
   * @param secret - The Secrets Manager secret containing credentials.
   */
  addUserAsReader(secret: ISecret): void;
}

/**
 * These options cannot be determined from existing Database constructs.
 */
export interface BaseDatabaseOptions {
  /**
   * The name of the database/catalog to create.
   */
  readonly databaseName: string;
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
}

/**
 * The properties for a database.
 */
export interface BaseDatabaseProps extends BaseDatabaseOptions {
  /**
   * A Secrets Manager secret that contains administrative credentials.
   */
  readonly adminSecret: ISecret;
  /**
   * The cluster or instance endpoint.
   */
  readonly endpoint: Endpoint;
  /**
   * The target service or database.
   */
  readonly target: IConnectable;
  /**
   * The VPC where the Lambda function will run.
   */
  readonly vpc: IVpc;
}

/**
 * A database.
 */
export abstract class BaseDatabase extends Construct implements IDatabase {
  public readonly endpoint: Endpoint;
  public readonly databaseName: string;
  public abstract readonly trigger: ITrigger;

  protected readonly securityGroup: ISecurityGroup;
  protected readonly subnetSelection: SubnetSelection;

  /**
   * Creates a new BaseDatabase.
   *
   * @param scope - The Construct that contains this one.
   * @param id - The identifier of this construct.
   * @param props - The configuration properties for this construct.
   */
  public constructor(scope: IConstruct, id: string, props: BaseDatabaseProps) {
    super(scope, id);

    this.endpoint = props.endpoint;
    this.databaseName = props.databaseName;

    this.securityGroup =
      props.securityGroup ||
      new SecurityGroup(this, "SecurityGroup", {
        vpc: props.vpc,
        description: `Created for ${this.node.path}/Function`,
      });
    props.target.connections.allowDefaultPortFrom(this.securityGroup);

    this.subnetSelection = {
      subnets: props.vpc.selectSubnets(props.vpcSubnets).subnets,
    };
  }

  public abstract addUserAsOwner(secret: ISecret): void;
  public abstract addUserAsReader(secret: ISecret): void;
}
