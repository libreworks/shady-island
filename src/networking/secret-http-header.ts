import { SecretValue } from "aws-cdk-lib";
import { ListenerCondition } from "aws-cdk-lib/aws-elasticloadbalancingv2";
import { ISecret, Secret } from "aws-cdk-lib/aws-secretsmanager";
import { IConstruct, Construct } from "constructs";

/**
 * Properties for the SecretHttpHeader constructor.
 */
export interface SecretHttpHeaderProps {
  /**
   * The name of the secret HTTP header.
   *
   * @default - X-Secret-Passphrase
   */
  readonly headerName?: string;
}

/**
 * Interface for SecretHttpHeader.
 */
export interface ISecretHttpHeader extends IConstruct {
  /**
   * The name of the secret header.
   */
  readonly headerName: string;

  /**
   * The value of the secret header.
   */
  readonly headerValue: SecretValue;

  /**
   * Get a ListenerCondition that represents this secret header.
   *
   * @returns The appropriate ListenerCondition.
   */
  createListenerCondition(): ListenerCondition;

  /**
   * Gets the custom headers for a CloudFront origin configuration.
   *
   * @returns An object with the header name and header value.
   */
  createOriginCustomHeaders(): Record<string, string>;
}

/**
 * The default header name.
 */
const DEFAULT_HEADER_NAME = "X-Secret-Passphrase";

/**
 * Common behavior for secret HTTP header constructs.
 */
abstract class BaseSecretHttpHeader extends Construct {
  abstract headerName: string;
  abstract headerValue: SecretValue;

  public createListenerCondition(): ListenerCondition {
    return ListenerCondition.httpHeader(this.headerName, [
      this.headerValue.unsafeUnwrap(),
    ]);
  }

  public createOriginCustomHeaders(): Record<string, string> {
    return { [this.headerName]: this.headerValue.unsafeUnwrap() };
  }
}

/**
 * Configure a secret header an ALB can require for every request.
 */
export class SecretHttpHeader
  extends BaseSecretHttpHeader
  implements ISecretHttpHeader
{
  /**
   * Gets the default header name.
   *
   * @returns the default header name
   */
  public static get defaultHeaderName(): string {
    return DEFAULT_HEADER_NAME;
  }

  /**
   * Create a SecretHttpHeader from an existing Secrets Manager secret.
   *
   * The secret must be in JSON format and have two fields: `name` and `value`.
   *
   * @param scope - The parent scope
   * @param id - The ID for the new construct
   * @param secret - The existing Secrets Manager secret
   * @returns The new ISecretHttpHeader
   */
  public static fromSecret(
    scope: Construct,
    id: string,
    secret: ISecret
  ): ISecretHttpHeader {
    class Import extends BaseSecretHttpHeader implements ISecretHttpHeader {
      public readonly headerName = secret
        .secretValueFromJson("name")
        .unsafeUnwrap();
      public readonly headerValue = secret.secretValueFromJson("value");
    }
    return new Import(scope, id);
  }

  /**
   * The Secrets Manager secret that contains the name and value of the header.
   */
  public readonly secret: ISecret;

  private readonly _name: string;
  private readonly _value: SecretValue;

  /**
   * Creates a new SecretHttpHeader.
   *
   * @param scope - The parent scope.
   * @param id - The construct identifier.
   * @param props - The configuration properties.
   */
  constructor(scope: Construct, id: string, props: SecretHttpHeaderProps = {}) {
    super(scope, id);

    const { headerName = DEFAULT_HEADER_NAME } = props;

    this._name = headerName;

    this.secret = new Secret(this, "Secret", {
      description: "Custom header used to restrict load balancer access",
      generateSecretString: {
        excludePunctuation: false,
        includeSpace: false,
        generateStringKey: "value",
        excludeCharacters: `\`'"$\\`,
        secretStringTemplate: `{"name":"${headerName}"}`,
      },
    });

    this._value = this.secret.secretValueFromJson("value");
  }

  public get headerName(): string {
    return this._name;
  }

  public get headerValue(): SecretValue {
    return this._value;
  }
}
