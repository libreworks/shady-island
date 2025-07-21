import { App, RemovalPolicy, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import {
  Certificate,
  CfnCertificate,
} from "aws-cdk-lib/aws-certificatemanager";
import { AnyPrincipal, Role } from "aws-cdk-lib/aws-iam";
import { PublicHostedZone } from "aws-cdk-lib/aws-route53";
import {
  CrossAccountDelegationDomain,
  DelegationDomain,
  ExistingZoneDomain,
} from "../../src/networking/domain";

describe("CrossAccountDelegationDomain", () => {
  const account = "123456789012";
  const region = "us-east-1";
  let app: App;
  let stack: Stack;

  beforeEach(() => {
    app = new App({});
    stack = new Stack(app, "Stack", {
      env: { account, region },
    });
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
  });

  describe("#constructor", () => {
    test("behaves as expected", () => {
      const subdomain = "widgets";
      const parentHostedZoneName = "example.net";
      const fqdn = `${subdomain}.${parentHostedZoneName}`;

      const delegationRole = new Role(stack, "Role", {
        assumedBy: new AnyPrincipal(),
      });
      const obj = new CrossAccountDelegationDomain(stack, "Domain", {
        subdomain,
        parentHostedZoneName,
        delegationRole,
      });
      expect(obj.name).toStrictEqual(fqdn);
      expect(obj.hostedZone.zoneName).toStrictEqual(fqdn);
      expect(
        (obj.certificate.node.defaultChild as CfnCertificate).domainName
      ).toStrictEqual(`*.${fqdn}`);
    });

    test("synthesizes as expected", () => {
      const delegationRole = new Role(stack, "Role", {
        assumedBy: new AnyPrincipal(),
      });
      const subdomain = "widgets";
      const parentHostedZoneName = "example.net";
      const fqdn = `${subdomain}.${parentHostedZoneName}`;

      new CrossAccountDelegationDomain(stack, "Domain", {
        subdomain,
        parentHostedZoneName,
        delegationRole,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::Route53::HostedZone", {
        Name: `${fqdn}.`,
      });
      template.hasResourceProperties("Custom::CrossAccountZoneDelegation", {
        AssumeRoleArn: { "Fn::GetAtt": ["Role1ABCC5F0", "Arn"] },
        ParentZoneName: parentHostedZoneName,
        DelegatedZoneName: fqdn,
        DelegatedZoneNameServers: {
          "Fn::GetAtt": ["DomainHostedZone7B4FA08D", "NameServers"],
        },
        TTL: 172800,
      });
      template.hasResourceProperties("AWS::CertificateManager::Certificate", {
        DomainName: `*.${fqdn}`,
        ValidationMethod: "DNS",
        DomainValidationOptions: [
          {
            DomainName: `*.${fqdn}`,
            HostedZoneId: { Ref: "DomainHostedZone7B4FA08D" },
          },
        ],
      });
    });

    test("synthesizes as expected with removalPolicy", () => {
      const delegationRole = new Role(stack, "Role", {
        assumedBy: new AnyPrincipal(),
      });
      const subdomain = "widgets";
      const parentHostedZoneName = "example.net";

      new CrossAccountDelegationDomain(stack, "Domain", {
        subdomain,
        parentHostedZoneName,
        delegationRole,
        removalPolicy: RemovalPolicy.RETAIN,
      });

      const template = Template.fromStack(stack);
      template.hasResource("AWS::Route53::HostedZone", {
        UpdateReplacePolicy: "Retain",
        DeletionPolicy: "Retain",
      });
      template.hasResource("Custom::CrossAccountZoneDelegation", {
        UpdateReplacePolicy: "Retain",
        DeletionPolicy: "Retain",
      });
      template.hasResource("AWS::CertificateManager::Certificate", {
        UpdateReplacePolicy: "Retain",
        DeletionPolicy: "Retain",
      });
    });
  });
});

describe("DelegationDomain", () => {
  const account = "123456789012";
  const region = "us-east-1";
  let app: App;
  let stack: Stack;

  beforeEach(() => {
    app = new App({
      context: { "@aws-cdk/core:enablePartitionLiterals": true },
    });
    stack = new Stack(app, "Stack", {
      env: { account, region },
    });
    stack;
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
  });

  describe("#constructor", () => {
    test("behaves as expected", () => {
      const subdomain = "widgets";
      const parentHostedZoneName = "example.net";
      const fqdn = `${subdomain}.${parentHostedZoneName}`;

      const parentHostedZone = new PublicHostedZone(stack, "Parent", {
        zoneName: parentHostedZoneName,
      });
      const obj = new DelegationDomain(stack, "Domain", {
        subdomain,
        parentHostedZone,
      });

      expect(obj.name).toStrictEqual(fqdn);
      expect(obj.hostedZone.zoneName).toStrictEqual(fqdn);
      expect(
        (obj.certificate.node.defaultChild as CfnCertificate).domainName
      ).toStrictEqual(`*.${fqdn}`);
    });

    test("synthesizes as expected", () => {
      const subdomain = "widgets";
      const parentHostedZoneName = "example.net";
      const parentHostedZoneId = "Z123456";
      const fqdn = `${subdomain}.${parentHostedZoneName}`;

      const parentHostedZone = PublicHostedZone.fromPublicHostedZoneAttributes(
        stack,
        "Parent",
        {
          zoneName: parentHostedZoneName,
          hostedZoneId: parentHostedZoneId,
        }
      );
      new DelegationDomain(stack, "Domain", {
        subdomain,
        parentHostedZone,
      });

      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::Route53::HostedZone", {
        Name: `${fqdn}.`,
      });
      template.hasResourceProperties("AWS::Route53::RecordSet", {
        HostedZoneId: parentHostedZoneId,
        Name: `${fqdn}.`,
        ResourceRecords: {
          "Fn::GetAtt": ["DomainHostedZone7B4FA08D", "NameServers"],
        },
        TTL: "172800",
        Type: "NS",
      });
      template.hasResourceProperties("AWS::CertificateManager::Certificate", {
        DomainName: `*.${fqdn}`,
        ValidationMethod: "DNS",
        DomainValidationOptions: [
          {
            DomainName: `*.${fqdn}`,
            HostedZoneId: { Ref: "DomainHostedZone7B4FA08D" },
          },
        ],
      });
    });

    test("synthesizes as expected with removalPolicy", () => {
      const subdomain = "widgets";
      const parentHostedZoneName = "example.net";

      const parentHostedZone = new PublicHostedZone(stack, "Parent", {
        zoneName: parentHostedZoneName,
      });
      new DelegationDomain(stack, "Domain", {
        subdomain,
        parentHostedZone,
        removalPolicy: RemovalPolicy.RETAIN,
      });

      const template = Template.fromStack(stack);
      template.hasResource("AWS::Route53::HostedZone", {
        UpdateReplacePolicy: "Retain",
        DeletionPolicy: "Retain",
      });
      template.hasResource("AWS::CertificateManager::Certificate", {
        UpdateReplacePolicy: "Retain",
        DeletionPolicy: "Retain",
      });
    });
  });
});

describe("ExistingZoneDomain", () => {
  const account = "123456789012";
  const region = "us-east-1";
  let app: App;
  let stack: Stack;

  beforeEach(() => {
    app = new App({});
    stack = new Stack(app, "Stack", {
      env: { account, region },
    });
    stack;
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
  });

  describe("#fromDomainAttributes", () => {
    test("behaves as expected", () => {
      const subdomain = "widgets";
      const parentHostedZoneName = "example.net";
      const fqdn = `${subdomain}.${parentHostedZoneName}`;

      const hostedZone = new PublicHostedZone(stack, "Parent", {
        zoneName: fqdn,
      });
      const certificate = new Certificate(stack, "Cert", { domainName: fqdn });
      const obj = ExistingZoneDomain.fromDomainAttributes(stack, "Domain", {
        hostedZone,
        certificate,
      });

      expect(obj.name).toStrictEqual(fqdn);
      expect(obj.hostedZone).toBe(hostedZone);
      expect(obj.certificate).toBe(certificate);
    });
  });

  describe("#constructor", () => {
    test("behaves as expected", () => {
      const subdomain = "widgets";
      const parentHostedZoneName = "example.net";
      const fqdn = `${subdomain}.${parentHostedZoneName}`;

      const hostedZone = new PublicHostedZone(stack, "Parent", {
        zoneName: fqdn,
      });
      const obj = new ExistingZoneDomain(stack, "Domain", { hostedZone });

      expect(obj.name).toStrictEqual(fqdn);
      expect(obj.hostedZone).toBe(hostedZone);
      expect(
        (obj.certificate.node.defaultChild as CfnCertificate).domainName
      ).toStrictEqual(`*.${fqdn}`);
    });

    test("synthesizes as expected", () => {
      const subdomain = "widgets";
      const parentHostedZoneName = "example.net";
      const parentHostedZoneId = "Z123456";
      const fqdn = `${subdomain}.${parentHostedZoneName}`;

      const hostedZone = PublicHostedZone.fromPublicHostedZoneAttributes(
        stack,
        "Parent",
        {
          zoneName: fqdn,
          hostedZoneId: parentHostedZoneId,
        }
      );
      new ExistingZoneDomain(stack, "Domain", { hostedZone });

      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::CertificateManager::Certificate", {
        DomainName: `*.${fqdn}`,
        ValidationMethod: "DNS",
        DomainValidationOptions: [
          {
            DomainName: `*.${fqdn}`,
            HostedZoneId: parentHostedZoneId,
          },
        ],
      });
    });
  });
});
