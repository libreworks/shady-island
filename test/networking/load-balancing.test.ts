import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import {
  IpAddressType,
  ListenerAction,
  SslPolicy,
} from "aws-cdk-lib/aws-elasticloadbalancingv2";
import { InstanceIdTarget } from "aws-cdk-lib/aws-elasticloadbalancingv2-targets";
import { WebLoadBalancing } from "../../src/networking/load-balancing";

describe("WebLoadBalancing", () => {
  const zoneName = "example.com";
  const fqdn = `whatever.${zoneName}`;
  let app: App;
  let stack: Stack;
  let vpc: Vpc;
  let certificate: Certificate;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack", {
      env: { account: "123456789012", region: "us-east-1" },
    });
    vpc = new Vpc(stack, "VPC", {});
    certificate = new Certificate(stack, "Cert", { domainName: fqdn });
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
    // @ts-ignore: TS2322
    vpc = undefined;
    // @ts-ignore: TS2322
    certificate = undefined;
  });

  describe("#constructor", () => {
    test("synthesizes as expected", () => {
      new WebLoadBalancing(stack, "Backend", {
        vpc,
        certificates: [certificate],
        requireKnownHostname: true,
        ipAddressType: IpAddressType.DUAL_STACK,
      });

      const template = Template.fromStack(stack);

      template.hasResourceProperties(
        "AWS::ElasticLoadBalancingV2::LoadBalancer",
        {
          IpAddressType: "dualstack",
          LoadBalancerAttributes: [
            { Key: "deletion_protection.enabled", Value: "false" },
            { Key: "idle_timeout.timeout_seconds", Value: "59" },
            { Key: "access_logs.s3.enabled", Value: "true" },
            {
              Key: "access_logs.s3.bucket",
              Value: { Ref: "BackendAccessLogs7B3E1D41" },
            },
            { Key: "access_logs.s3.prefix", Value: "" },
          ],
          Scheme: "internet-facing",
          SecurityGroups: [
            {
              "Fn::GetAtt": [
                "BackendLoadBalancerSecurityGroup64B1A482",
                "GroupId",
              ],
            },
          ],
          Subnets: [
            { Ref: "VPCPublicSubnet1SubnetB4246D30" },
            { Ref: "VPCPublicSubnet2Subnet74179F39" },
            { Ref: "VPCPublicSubnet3Subnet631C5E25" },
          ],
          Type: "application",
        }
      );

      template.hasResourceProperties("AWS::ElasticLoadBalancingV2::Listener", {
        DefaultActions: [
          {
            FixedResponseConfig: {
              ContentType: "text/plain",
              StatusCode: "421",
            },
            Type: "fixed-response",
          },
        ],
        LoadBalancerArn: { Ref: "BackendLoadBalancerC45365EC" },
        Certificates: [{ CertificateArn: { Ref: "Cert5C9FAEC1" } }],
        Port: 443,
        Protocol: "HTTPS",
        SslPolicy: SslPolicy.RECOMMENDED_TLS,
      });
    });

    test("synthesizes as expected with secret header", () => {
      new WebLoadBalancing(stack, "Backend", {
        vpc,
        certificates: [certificate],
        requireSecretHeader: true,
        ipAddressType: IpAddressType.IPV4,
      });

      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::SecretsManager::Secret", {
        Description: "Custom header used to restrict load balancer access",
        GenerateSecretString: {
          ExcludeCharacters: "`'\"$\\",
          ExcludePunctuation: false,
          GenerateStringKey: "value",
          IncludeSpace: false,
          SecretStringTemplate: '{"name":"X-Secret-Passphrase"}',
        },
      });

      template.hasResourceProperties(
        "AWS::ElasticLoadBalancingV2::LoadBalancer",
        {
          IpAddressType: "ipv4",
          LoadBalancerAttributes: [
            { Key: "deletion_protection.enabled", Value: "false" },
            { Key: "idle_timeout.timeout_seconds", Value: "59" },
            { Key: "access_logs.s3.enabled", Value: "true" },
            {
              Key: "access_logs.s3.bucket",
              Value: { Ref: "BackendAccessLogs7B3E1D41" },
            },
            { Key: "access_logs.s3.prefix", Value: "" },
          ],
          Scheme: "internet-facing",
          SecurityGroups: [
            {
              "Fn::GetAtt": [
                "BackendLoadBalancerSecurityGroup64B1A482",
                "GroupId",
              ],
            },
          ],
          Subnets: [
            { Ref: "VPCPublicSubnet1SubnetB4246D30" },
            { Ref: "VPCPublicSubnet2Subnet74179F39" },
            { Ref: "VPCPublicSubnet3Subnet631C5E25" },
          ],
          Type: "application",
        }
      );

      template.hasResourceProperties("AWS::ElasticLoadBalancingV2::Listener", {
        DefaultActions: [
          {
            FixedResponseConfig: {
              ContentType: "text/plain",
              StatusCode: "421",
            },
            Type: "fixed-response",
          },
        ],
        LoadBalancerArn: { Ref: "BackendLoadBalancerC45365EC" },
        Certificates: [{ CertificateArn: { Ref: "Cert5C9FAEC1" } }],
        Port: 443,
        Protocol: "HTTPS",
        SslPolicy: SslPolicy.RECOMMENDED_TLS,
      });
    });
  });

  describe("#addTarget", () => {
    test("throws exception for missing hostname", () => {
      const loadBalancing = new WebLoadBalancing(stack, "Backend", {
        vpc,
        certificates: [certificate],
        requireKnownHostname: true,
        ipAddressType: IpAddressType.IPV4,
      });

      const target = new InstanceIdTarget("i-12345", 443);
      expect(() => {
        loadBalancing.addTarget("Target", target);
      }).toThrow({
        name: "Error",
        message: "You must provide hostnames for this load balancer target",
      });
    });

    test("synthesizes as expected", () => {
      const loadBalancing = new WebLoadBalancing(stack, "Backend", {
        vpc,
        certificates: [certificate],
      });

      const instanceId = "i-12345";
      const port = 443;
      const target = new InstanceIdTarget(instanceId, port);
      loadBalancing.listener.addAction("Default", {
        action: ListenerAction.fixedResponse(200),
      });
      loadBalancing.addTarget("Target", target);

      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::ElasticLoadBalancingV2::Listener", {
        DefaultActions: [
          {
            TargetGroupArn: { Ref: "BackendTarget7F49E57E" },
            Type: "forward",
          },
        ],
        LoadBalancerArn: { Ref: "BackendLoadBalancerC45365EC" },
        Certificates: [{ CertificateArn: { Ref: "Cert5C9FAEC1" } }],
        Port: 443,
        Protocol: "HTTPS",
        SslPolicy: SslPolicy.RECOMMENDED_TLS,
      });

      template.hasResourceProperties(
        "AWS::ElasticLoadBalancingV2::TargetGroup",
        {
          HealthCheckIntervalSeconds: 30,
          HealthCheckPath: "/",
          HealthCheckTimeoutSeconds: 29,
          HealthyThresholdCount: 2,
          Port: 443,
          Protocol: "HTTPS",
          TargetGroupAttributes: [
            {
              Key: "deregistration_delay.timeout_seconds",
              Value: "59",
            },
            {
              Key: "stickiness.enabled",
              Value: "false",
            },
          ],
          TargetType: "instance",
          Targets: [{ Id: instanceId, Port: port }],
          VpcId: { Ref: "VPCB9E5F0B4" },
        }
      );

      template.resourceCountIs("AWS::ElasticLoadBalancingV2::ListenerRule", 0);
    });

    test("synthesizes as expected with secret header", () => {
      const loadBalancing = new WebLoadBalancing(stack, "Backend", {
        vpc,
        certificates: [certificate],
        requireSecretHeader: true,
        ipAddressType: IpAddressType.IPV4,
      });

      const instanceId = "i-12345";
      const port = 443;
      const target = new InstanceIdTarget(instanceId, port);
      loadBalancing.addTarget("Target", target);

      const template = Template.fromStack(stack);

      template.hasResourceProperties(
        "AWS::ElasticLoadBalancingV2::ListenerRule",
        {
          Actions: [
            {
              TargetGroupArn: { Ref: "BackendTarget7F49E57E" },
              Type: "forward",
            },
          ],
          Conditions: [
            {
              Field: "http-header",
              HttpHeaderConfig: {
                HttpHeaderName: "X-Secret-Passphrase",
                Values: [
                  {
                    "Fn::Join": [
                      "",
                      [
                        "{{resolve:secretsmanager:",
                        { Ref: "BackendSecretHeaderSecret2F6C9C0C" },
                        ":SecretString:value::}}",
                      ],
                    ],
                  },
                ],
              },
            },
          ],
          ListenerArn: { Ref: "BackendLoadBalancerHttpsListener0F378693" },
          Priority: 1,
        }
      );
    });

    test("synthesizes as expected with required hostnames", () => {
      const loadBalancing = new WebLoadBalancing(stack, "Backend", {
        vpc,
        certificates: [certificate],
        requireKnownHostname: true,
      });

      const instanceId = "i-12345";
      const port = 443;
      const target = new InstanceIdTarget(instanceId, port);
      const hostnames = [
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqr",
        "stu",
        "vwx",
        "yz",
      ].map((v) => `${v}.example.com`);
      loadBalancing.addTarget("Target", target, { hostnames });

      const template = Template.fromStack(stack);

      template.hasResourceProperties(
        "AWS::ElasticLoadBalancingV2::ListenerRule",
        {
          Actions: [
            {
              TargetGroupArn: { Ref: "BackendTarget7F49E57E" },
              Type: "forward",
            },
          ],
          Conditions: [
            {
              Field: "host-header",
              HostHeaderConfig: {
                Values: [
                  "abc.example.com",
                  "def.example.com",
                  "ghi.example.com",
                  "jkl.example.com",
                  "mno.example.com",
                ],
              },
            },
          ],
          ListenerArn: { Ref: "BackendLoadBalancerHttpsListener0F378693" },
          Priority: 1,
        }
      );
      template.hasResourceProperties(
        "AWS::ElasticLoadBalancingV2::ListenerRule",
        {
          Actions: [
            {
              TargetGroupArn: { Ref: "BackendTarget7F49E57E" },
              Type: "forward",
            },
          ],
          Conditions: [
            {
              Field: "host-header",
              HostHeaderConfig: {
                Values: [
                  "pqr.example.com",
                  "stu.example.com",
                  "vwx.example.com",
                  "yz.example.com",
                ],
              },
            },
          ],
          ListenerArn: { Ref: "BackendLoadBalancerHttpsListener0F378693" },
          Priority: 2,
        }
      );
    });

    test("synthesizes as expected with required hostnames and secret header", () => {
      const loadBalancing = new WebLoadBalancing(stack, "Backend", {
        vpc,
        certificates: [certificate],
        requireKnownHostname: true,
        requireSecretHeader: true,
      });

      const instanceId = "i-12345";
      const port = 443;
      const target = new InstanceIdTarget(instanceId, port);
      const hostnames = [
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqr",
        "stu",
        "vwx",
        "yz",
      ].map((v) => `${v}.example.com`);
      loadBalancing.addTarget("Target", target, { hostnames });
      loadBalancing.addTarget("Final", target, { hostnames: ["example.com"] });

      const template = Template.fromStack(stack);

      template.hasResourceProperties(
        "AWS::ElasticLoadBalancingV2::ListenerRule",
        {
          Actions: [
            {
              TargetGroupArn: { Ref: "BackendTarget7F49E57E" },
              Type: "forward",
            },
          ],
          Conditions: [
            {
              Field: "http-header",
              HttpHeaderConfig: {
                HttpHeaderName: "X-Secret-Passphrase",
                Values: [
                  {
                    "Fn::Join": [
                      "",
                      [
                        "{{resolve:secretsmanager:",
                        { Ref: "BackendSecretHeaderSecret2F6C9C0C" },
                        ":SecretString:value::}}",
                      ],
                    ],
                  },
                ],
              },
            },
            {
              Field: "host-header",
              HostHeaderConfig: {
                Values: [
                  "abc.example.com",
                  "def.example.com",
                  "ghi.example.com",
                  "jkl.example.com",
                ],
              },
            },
          ],
          ListenerArn: { Ref: "BackendLoadBalancerHttpsListener0F378693" },
          Priority: 1,
        }
      );
      template.hasResourceProperties(
        "AWS::ElasticLoadBalancingV2::ListenerRule",
        {
          Actions: [
            {
              TargetGroupArn: { Ref: "BackendTarget7F49E57E" },
              Type: "forward",
            },
          ],
          Conditions: [
            {
              Field: "http-header",
              HttpHeaderConfig: {
                HttpHeaderName: "X-Secret-Passphrase",
                Values: [
                  {
                    "Fn::Join": [
                      "",
                      [
                        "{{resolve:secretsmanager:",
                        { Ref: "BackendSecretHeaderSecret2F6C9C0C" },
                        ":SecretString:value::}}",
                      ],
                    ],
                  },
                ],
              },
            },
            {
              Field: "host-header",
              HostHeaderConfig: {
                Values: [
                  "mno.example.com",
                  "pqr.example.com",
                  "stu.example.com",
                  "vwx.example.com",
                ],
              },
            },
          ],
          ListenerArn: { Ref: "BackendLoadBalancerHttpsListener0F378693" },
          Priority: 2,
        }
      );
      template.hasResourceProperties(
        "AWS::ElasticLoadBalancingV2::ListenerRule",
        {
          Actions: [
            {
              TargetGroupArn: { Ref: "BackendTarget7F49E57E" },
              Type: "forward",
            },
          ],
          Conditions: [
            {
              Field: "http-header",
              HttpHeaderConfig: {
                HttpHeaderName: "X-Secret-Passphrase",
                Values: [
                  {
                    "Fn::Join": [
                      "",
                      [
                        "{{resolve:secretsmanager:",
                        { Ref: "BackendSecretHeaderSecret2F6C9C0C" },
                        ":SecretString:value::}}",
                      ],
                    ],
                  },
                ],
              },
            },
            {
              Field: "host-header",
              HostHeaderConfig: { Values: ["yz.example.com"] },
            },
          ],
          ListenerArn: { Ref: "BackendLoadBalancerHttpsListener0F378693" },
          Priority: 3,
        }
      );
      template.hasResourceProperties(
        "AWS::ElasticLoadBalancingV2::ListenerRule",
        {
          Actions: [
            {
              TargetGroupArn: { Ref: "BackendFinal4BB60621" },
              Type: "forward",
            },
          ],
          Conditions: [
            {
              Field: "http-header",
              HttpHeaderConfig: {
                HttpHeaderName: "X-Secret-Passphrase",
                Values: [
                  {
                    "Fn::Join": [
                      "",
                      [
                        "{{resolve:secretsmanager:",
                        { Ref: "BackendSecretHeaderSecret2F6C9C0C" },
                        ":SecretString:value::}}",
                      ],
                    ],
                  },
                ],
              },
            },
            {
              Field: "host-header",
              HostHeaderConfig: { Values: ["example.com"] },
            },
          ],
          ListenerArn: { Ref: "BackendLoadBalancerHttpsListener0F378693" },
          Priority: 4,
        }
      );
    });
  });
});
