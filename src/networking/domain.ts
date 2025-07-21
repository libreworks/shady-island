import { Duration, RemovalPolicy } from "aws-cdk-lib";
import {
  Certificate,
  CertificateValidation,
  ICertificate,
} from "aws-cdk-lib/aws-certificatemanager";
import type { IRole } from "aws-cdk-lib/aws-iam";
import {
  CrossAccountZoneDelegationRecord,
  IHostedZone,
  IPublicHostedZone,
  PublicHostedZone,
  ZoneDelegationRecord,
} from "aws-cdk-lib/aws-route53";
import { Construct, IConstruct } from "constructs";

/**
 * A DNS domain and its wildcard X.509 certificate.
 */
export interface IDomain extends IConstruct {
  /**
   * The fully-qualified domain name of the hosted zone.
   */
  readonly name: string;

  /**
   * The hosted zone that contains records for this domain.
   */
  readonly hostedZone: IHostedZone;

  /**
   * The wildcard certificate for resources in this domain.
   */
  readonly certificate: ICertificate;
}

/**
 * A DNS domain and its wildcard X.509 certificate.
 */
export abstract class BaseDomain extends Construct implements IDomain {
  public abstract readonly name: string;
  public abstract readonly hostedZone: IHostedZone;
  public abstract readonly certificate: ICertificate;
}

/**
 * Constructor properties for CrossAccountDelegationDomain.
 */
export interface CrossAccountDelegationDomainProps {
  /**
   * The subdomain in the parent hosted zone.
   */
  readonly subdomain: string;

  /**
   * The hosted zone name in the parent account.
   *
   * @default - no zone name
   */
  readonly parentHostedZoneName?: string;

  /**
   * The hosted zone id in the parent account.
   *
   * @default - hosted zone ID will be looked up based on the zone name
   */
  readonly parentHostedZoneId?: string;

  /**
   * The delegation role in the parent account.
   */
  readonly delegationRole: IRole;

  /**
   * The resource record cache time to live (TTL).
   *
   * @default Duration.days(2)
   */
  readonly ttl?: Duration;

  /**
   * The removal policy to apply.
   *
   * @default RemovalPolicy.DESTROY
   */
  readonly removalPolicy?: RemovalPolicy;

  /**
   * Region from which to obtain temporary credentials.
   *
   * @default - the Route53 signing region in the current partition
   */
  readonly assumeRoleRegion?: string;
}

/**
 * Provides a domain using delegation from a parent zone in another account.
 *
 * This construct creates a new Route 53 hosted zone for the subdomain, a zone
 * delegation record, and a new wildcard ACM certificate for the subdomain.
 */
export class CrossAccountDelegationDomain extends BaseDomain {
  public readonly name: string;
  public readonly hostedZone: IHostedZone;
  public readonly certificate: ICertificate;
  private readonly delegationRecord;

  public constructor(
    scope: Construct,
    id: string,
    props: CrossAccountDelegationDomainProps
  ) {
    super(scope, id);

    const { delegationRole, removalPolicy, parentHostedZoneName } = props;

    const zoneName = `${props.subdomain}.${parentHostedZoneName}`;
    this.name = zoneName;

    this.hostedZone = new PublicHostedZone(this, "HostedZone", { zoneName });

    this.delegationRecord = new CrossAccountZoneDelegationRecord(
      this,
      "Delegation",
      {
        delegatedZone: this.hostedZone,
        delegationRole,
        parentHostedZoneId: props.parentHostedZoneId,
        parentHostedZoneName,
        removalPolicy,
        ttl: props.ttl,
      }
    );

    this.certificate = new Certificate(this, "Certificate", {
      domainName: `*.${this.hostedZone.zoneName}`,
      validation: CertificateValidation.fromDns(this.hostedZone),
    });

    // Make sure we don't try to create the certificate before the delegation.
    this.certificate.node.addDependency(this.delegationRecord);

    if (removalPolicy) {
      this.hostedZone.applyRemovalPolicy(removalPolicy);
      this.certificate.applyRemovalPolicy(removalPolicy);
    }
  }
}

/**
 * Constructor properties for DelegationDomain.
 */
export interface DelegationDomainProps {
  /**
   * The parent/delegating hosted zone. The "zone name" is needed.
   */
  readonly parentHostedZone: IPublicHostedZone;

  /**
   * The subdomain in the parent hosted zone.
   */
  readonly subdomain: string;

  /**
   * The removal policy to apply.
   *
   * @default RemovalPolicy.DESTROY
   */
  readonly removalPolicy?: RemovalPolicy;
}

/**
 * Provides a domain using delegation from a parent zone in the same account.
 *
 * This construct creates a new Route 53 hosted zone for the subdomain, a zone
 * delegation record, and a new wildcard ACM certificate for the subdomain.
 */
export class DelegationDomain extends BaseDomain {
  public readonly name: string;
  public readonly hostedZone: IHostedZone;
  public readonly certificate: ICertificate;
  private readonly delegationRecord;

  public constructor(
    scope: Construct,
    id: string,
    props: DelegationDomainProps
  ) {
    super(scope, id);

    const { parentHostedZone, subdomain, removalPolicy } = props;

    const zoneName = `${subdomain}.${parentHostedZone.zoneName}`;
    this.name = zoneName;

    this.hostedZone = new PublicHostedZone(this, "HostedZone", { zoneName });

    this.delegationRecord = new ZoneDelegationRecord(this, "Record", {
      recordName: subdomain,
      nameServers: this.hostedZone.hostedZoneNameServers!,
      zone: parentHostedZone,
    });

    this.certificate = new Certificate(this, "Certificate", {
      domainName: `*.${this.hostedZone.zoneName}`,
      validation: CertificateValidation.fromDns(this.hostedZone),
    });

    // Make sure we don't try to create the certificate before the delegation.
    this.certificate.node.addDependency(this.delegationRecord);

    if (removalPolicy) {
      this.applyRemovalPolicy(removalPolicy);
    }
  }

  public applyRemovalPolicy(policy: RemovalPolicy) {
    this.hostedZone.applyRemovalPolicy(policy);
    this.certificate.applyRemovalPolicy(policy);
    this.delegationRecord.applyRemovalPolicy(policy);
  }
}

/**
 * Constructor properties for ExistingZoneDomain.
 */
export interface ExistingZoneDomainProps {
  /**
   * The hosted zone that contains records for this domain.
   */
  readonly hostedZone: IHostedZone;
}

/**
 * A domain in the Domain Name System
 */
export interface DomainAttributes {
  /**
   * The hosted zone that contains records for this domain.
   */
  readonly hostedZone: IHostedZone;

  /**
   * The wildcard certificate for resources in this domain.
   */
  readonly certificate: ICertificate;
}

/**
 * Provides a domain using an existing hosted zone.
 *
 * This construct will create a new wildcard ACM certificate using the existing
 * hosted zone name.
 */
export class ExistingZoneDomain extends BaseDomain {
  /**
   * Returns an ExistingZoneDomain using the provided attributes.
   *
   * @param scope - The scope in which to define this construct.
   * @param id - The scoped construct ID.
   * @param attrs - The provided attributes
   */
  public static fromDomainAttributes(
    scope: Construct,
    id: string,
    attrs: DomainAttributes
  ): IDomain {
    class Import extends Construct implements IDomain {
      public readonly hostedZone = attrs.hostedZone;
      public readonly certificate = attrs.certificate;

      public get name() {
        return this.hostedZone.zoneName;
      }
    }
    return new Import(scope, id);
  }

  public readonly hostedZone: IHostedZone;

  public readonly certificate: ICertificate;

  public constructor(
    scope: Construct,
    id: string,
    props: ExistingZoneDomainProps
  ) {
    super(scope, id);

    const { hostedZone } = props;

    this.hostedZone = hostedZone;

    this.certificate = new Certificate(this, "Certificate", {
      domainName: `*.${this.hostedZone.zoneName}`,
      validation: CertificateValidation.fromDns(this.hostedZone),
    });
  }

  public get name(): string {
    return this.hostedZone.zoneName;
  }
}
