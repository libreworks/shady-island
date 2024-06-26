import { Duration } from "aws-cdk-lib";
import { ICertificate } from "aws-cdk-lib/aws-certificatemanager";
import { ISecurityGroup, IVpc } from "aws-cdk-lib/aws-ec2";
import {
  ApplicationLoadBalancer,
  ApplicationProtocol,
  ApplicationTargetGroup,
  ApplicationTargetGroupProps,
  IApplicationListener,
  IApplicationLoadBalancer,
  IApplicationTargetGroup,
  IApplicationLoadBalancerTarget,
  IpAddressType,
  ListenerAction,
  ListenerCondition,
  SslPolicy,
} from "aws-cdk-lib/aws-elasticloadbalancingv2";
import {
  BlockPublicAccess,
  Bucket,
  BucketEncryption,
} from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { ISecretHttpHeader, SecretHttpHeader } from "./secret-http-header";
import { collate } from "../util";

/**
 * Options for adding a new target group.
 */
export interface TargetOptions extends ApplicationTargetGroupProps {
  /**
   * The hostnames on which traffic is served.
   */
  readonly hostnames?: string[];

  /**
   * The priority of the listener rule.
   *
   * @default - Automatically determined
   */
  readonly priority?: number;
}

/**
 * Constructor properties for WebLoadBalancing.
 */
export interface WebLoadBalancingProps {
  /**
   * The VPC where these resources should be deployed.
   */
  readonly vpc: IVpc;

  /**
   * A security group for the load balancer itself.
   *
   * @default - A new security group will be created
   */
  readonly securityGroup?: ISecurityGroup;

  /**
   * The certificate to attach to the load balancer and CloudFront distribution.
   */
  readonly certificates: ICertificate[];

  /**
   * The load balancer idle timeout, in seconds.
   *
   * If you have a reverse proxy in front of this load balancer, such as
   * CloudFront, this number should be less than the reverse proxy's request
   * timeout.
   *
   * @default - 59 seconds
   */
  readonly idleTimeout?: Duration;

  /**
   * The type of IP addresses to use (IPv4 or Dual Stack).
   *
   * @default - IPv4 only
   */
  readonly ipAddressType?: IpAddressType;

  /**
   * Forbid requests that are missing an HTTP header with a specific value.
   *
   * If this option is set to `true`, this construct will provide a new
   * `SecretHttpHeader` accessible on the `secretHeader` property.
   *
   * Requests without the correct header name and value will receive an HTTP 421
   * status response.
   *
   * @default - false
   */
  readonly requireSecretHeader?: boolean;

  /**
   * The name of the secret HTTP header.
   *
   * Providing this option implies that `requireSecretHeader` is `true`.
   *
   * @default - X-Secret-Passphrase
   */
  readonly secretHeaderName?: string;

  /**
   * Forbid requests that ask for an unknown hostname.
   *
   * Requests for an unknown hostname will receive an HTTP 421 status response.
   *
   * @default - false
   */
  readonly requireKnownHostname?: boolean;
}

/**
 * A utility for creating a public-facing Application Load Balancer.
 */
export class WebLoadBalancing extends Construct {
  /**
   * The load balancer itself.
   */
  public readonly loadBalancer: IApplicationLoadBalancer;

  /**
   * The HTTPS listener.
   */
  public readonly listener: IApplicationListener;

  /**
   * The secret header (if `requireSecretHeader` was set to `true`).
   */
  public readonly secretHeader?: ISecretHttpHeader;

  private readonly enableSecretHeader: boolean;
  private readonly enableKnownHostnames: boolean;
  private readonly idleTimeout: Duration;
  private readonly priorities: Set<number>;
  private defaultAction?: ListenerAction;

  /**
   * Creates a new WebLoadBalancing.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param props - Initialization properties for this construct.
   */
  public constructor(
    scope: Construct,
    id: string,
    props: WebLoadBalancingProps
  ) {
    super(scope, id);

    const { vpc, certificates, securityGroup, secretHeaderName } = props;
    this.enableSecretHeader = Boolean(
      props.requireSecretHeader || secretHeaderName
    );
    this.enableKnownHostnames = Boolean(props.requireKnownHostname);
    this.idleTimeout = props.idleTimeout || Duration.seconds(59);
    this.priorities = new Set();

    const alb = new ApplicationLoadBalancer(this, "LoadBalancer", {
      vpc,
      vpcSubnets: { subnets: vpc.publicSubnets },
      securityGroup,
      internetFacing: true,
      idleTimeout: this.idleTimeout,
      http2Enabled: true,
      ipAddressType: props.ipAddressType,
    });
    this.loadBalancer = alb;

    const albLogs = new Bucket(this, "AccessLogs", {
      encryption: BucketEncryption.S3_MANAGED,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
    });
    alb.logAccessLogs(albLogs);

    if (this.enableSecretHeader) {
      this.secretHeader = new SecretHttpHeader(this, "SecretHeader", {
        headerName: secretHeaderName,
      });
    }

    // If either the secret header or the Host header is incorrect we should
    // return a 421 Misdirected Request.
    const defaultAction =
      this.enableSecretHeader || this.enableKnownHostnames
        ? ListenerAction.fixedResponse(421, { contentType: "text/plain" })
        : undefined;
    if (defaultAction) {
      this.defaultAction = defaultAction;
    }

    this.listener = alb.addListener("HttpsListener", {
      port: 443,
      open: false,
      certificates,
      sslPolicy: SslPolicy.RECOMMENDED_TLS,
      defaultAction,
    });
  }

  /**
   * Adds a target to the listener.
   *
   * If the following options are left undefined, these defaults will be used.
   * - `port`: 443
   * - `protocol`: HTTPS
   * - `deregistrationDelay`: load balancer idle timeout
   * - `healthCheck.path`: /
   * - `healthCheck.healthyThresholdCount`: 2
   * - `healthCheck.interval`: 30 seconds
   * - `healthCheck.timeout`: 29 seconds
   *
   * @param id - The ID of the new target group.
   * @param target - The load balancing target to receive traffic.
   * @param options - The target group options.
   * @returns The new Application Target Group
   */
  public addTarget(
    id: string,
    target: IApplicationLoadBalancerTarget,
    options?: TargetOptions
  ): IApplicationTargetGroup {
    const {
      priority,
      hostnames = [],
      healthCheck = {},
      port = 443,
      protocol = ApplicationProtocol.HTTPS,
      deregistrationDelay = this.idleTimeout,
      ...others
    } = options || {};
    delete others.vpc;
    delete others.targets;

    if (this.enableKnownHostnames && hostnames.length === 0) {
      throw new Error(
        "You must provide hostnames for this load balancer target"
      );
    }

    const defaultHealthCheckProps = {
      path: "/",
      healthyThresholdCount: 2,
      interval: Duration.seconds(30),
      timeout: Duration.seconds(29),
    };

    const targetGroup = new ApplicationTargetGroup(this, id, {
      port,
      protocol,
      deregistrationDelay,
      healthCheck: { ...defaultHealthCheckProps, ...healthCheck },
      vpc: this.loadBalancer.vpc,
      targets: [target],
      ...others,
    });

    const conditions = this.secretHeader
      ? [this.secretHeader.createListenerCondition()]
      : [];

    const nextSafePriority =
      this.priorities.size === 0
        ? 1
        : Math.max(...Array.from(this.priorities.values())) + 1;
    let rulePriority = priority ?? nextSafePriority;

    if (hostnames.length > 0) {
      // ListenerRule only supports 5 "Condition Values per Rule".
      // The number of hostnames per host header condition must consider this.
      const hostnameRules = collate(hostnames, 5 - conditions.length);
      for (const [index, names] of hostnameRules.entries()) {
        const groupPriority = rulePriority + index;
        this.listener.addTargetGroups(`${id}Hosts${index}`, {
          targetGroups: [targetGroup],
          priority: groupPriority,
          conditions: [...conditions, ListenerCondition.hostHeaders(names)],
        });
        this.priorities.add(groupPriority);
      }
    } else {
      const groupPriority = this.defaultAction ? rulePriority : undefined;
      this.listener.addTargetGroups(id, {
        targetGroups: [targetGroup],
        priority: groupPriority,
        conditions: conditions.length > 0 ? conditions : undefined,
      });
      if (groupPriority) {
        this.priorities.add(groupPriority);
      }
    }

    return targetGroup;
  }
}
