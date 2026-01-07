import { App, Stack } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import {
  InstanceArchitecture,
  Peer,
  SecurityGroup,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import { FileSystem } from "aws-cdk-lib/aws-efs";
import { Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import { HostedZone } from "aws-cdk-lib/aws-route53";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import { UbuntuLinuxBastion } from "../../src/networking/bastion";

describe("UbuntuLinuxBastion", () => {
  let app: App;
  let stack: Stack;
  let vpc: Vpc;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack", {
      env: { account: "123456789012", region: "us-east-1" },
    });
    vpc = new Vpc(stack, "VPC", {});
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
    // @ts-ignore: TS2322
    vpc = undefined;
  });

  describe("#allowSshAccessFrom", () => {
    test("synthesizes as expected", () => {
      const obj = new UbuntuLinuxBastion(stack, "Bastion", {
        vpc,
        enableIpv6: true,
      });
      obj.allowSshAccessFrom(Peer.ipv4("8.8.4.4/32"));
      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
        LaunchTemplateData: {
          UserData: {
            "Fn::Base64": Match.stringLikeRegexp(
              "iptables -A INPUT -p tcp --match multiport --dports 22 -j ACCEPT\\s+ip6tables -A INPUT -p tcp --match multiport --dports 22 -j ACCEPT"
            ),
          },
        },
      });
      template.hasResourceProperties("AWS::EC2::SecurityGroup", {
        GroupDescription: "The bastion instance",
        SecurityGroupIngress: [
          {
            CidrIp: "8.8.4.4/32",
            Description: "SSH access",
            FromPort: 22,
            IpProtocol: "tcp",
            ToPort: 22,
          },
        ],
      });
    });
  });

  describe("#construct", () => {
    test("works as expected", () => {
      const securityGroup = new SecurityGroup(stack, "SG", { vpc });
      const role = new Role(stack, "Role", {
        assumedBy: new ServicePrincipal("ec2.amazonaws.com"),
      });
      const obj = new UbuntuLinuxBastion(stack, "Bastion", {
        vpc,
        role,
        securityGroup,
      });
      expect(obj.connections.securityGroups[0]).toBe(securityGroup);
      expect(obj.grantPrincipal).toBe(role);
    });

    test("synthesizes as expected", () => {
      const volumeSize = 22;
      const ubuntuVersion = "26.04";
      new UbuntuLinuxBastion(stack, "Bastion", {
        vpc,
        volumeSize,
        ubuntuVersion,
        enableIpv6: true,
        installAwsCli: false,
        architecture: InstanceArchitecture.X86_64,
      });

      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
        LaunchTemplateData: {
          BlockDeviceMappings: [
            {
              DeviceName: "/dev/sda1",
              Ebs: {
                Encrypted: true,
                VolumeSize: volumeSize,
                VolumeType: "gp3",
              },
            },
          ],
          EbsOptimized: true,
          ImageId: Match.objectLike({
            Ref: Match.stringLikeRegexp(ubuntuVersion.replace(".", "")),
          }),
          InstanceType: "t3.micro",
          MetadataOptions: {
            HttpEndpoint: "enabled",
            HttpProtocolIpv6: "enabled",
            HttpTokens: "required",
          },
          Monitoring: {
            Enabled: false,
          },
          NetworkInterfaces: [
            {
              AssociatePublicIpAddress: true,
              DeviceIndex: 0,
              Groups: [
                {
                  "Fn::GetAtt": ["BastionSecurityGroup6D392D75", "GroupId"],
                },
              ],
            },
          ],
          UserData: {
            "Fn::Base64": Match.stringLikeRegexp("install iptables-persistent"),
          },
        },
      });

      template.hasResourceProperties("AWS::AutoScaling::AutoScalingGroup", {
        MaxSize: "1",
        MinSize: "0",
      });
    });

    test("synthesizes as expected with mounted filesystems", () => {
      const fileSystem = new FileSystem(stack, "EFS", {
        vpc,
        vpcSubnets: { subnets: vpc.isolatedSubnets },
      });
      new UbuntuLinuxBastion(stack, "Bastion", {
        vpc,
        fileSystems: [{ fileSystem, directory: "/mnt/whatever" }],
      });

      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
        LaunchTemplateData: {
          UserData: {
            "Fn::Base64": {
              "Fn::Join": [
                "",
                Match.arrayWith([
                  Match.stringLikeRegexp(
                    "install iptables-persistent nfs-common[\\s\\S]+/mnt/whatever"
                  ),
                ]),
              ],
            },
          },
        },
      });
    });

    test("synthesizes as expected with mounted filesystems IPv6", () => {
      const fileSystem = new FileSystem(stack, "EFS", {
        vpc,
        vpcSubnets: { subnets: vpc.isolatedSubnets },
      });
      new UbuntuLinuxBastion(stack, "Bastion", {
        vpc,
        fileSystems: [{ fileSystem, directory: "/mnt/whatever" }],
        enableIpv6: true,
      });

      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
        LaunchTemplateData: {
          UserData: {
            "Fn::Base64": {
              "Fn::Join": [
                "",
                Match.arrayWith([
                  Match.stringLikeRegexp(
                    "install iptables-persistent nfs-common[\\s\\S]+/mnt/whatever"
                  ),
                ]),
              ],
            },
          },
        },
      });
    });

    test("synthesizes as expected with custom apt packages", () => {
      new UbuntuLinuxBastion(stack, "Bastion", {
        vpc,
        aptPackages: ["redis-tools"],
        aptRepositories: ["ppa:redislabs/redis"],
      });

      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
        LaunchTemplateData: {
          UserData: {
            "Fn::Base64": Match.stringLikeRegexp(
              "install iptables-persistent redis-tools"
            ),
          },
        },
      });
    });

    test("synthesizes as expected with secrets", () => {
      const secret = new Secret(stack, "Secret", { generateSecretString: {} });
      new UbuntuLinuxBastion(stack, "Bastion", {
        vpc,
        secrets: { database: secret },
      });

      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
        LaunchTemplateData: {
          UserData: {
            "Fn::Base64": {
              "Fn::Join": [
                "",
                Match.arrayWith([
                  Match.stringLikeRegexp("iptables-persistent"),
                ]),
              ],
            },
          },
        },
      });
    });

    test("synthesizes as expected with custom domain options", () => {
      const subdomain = "foobar";
      const zoneName = "example.com";
      const hostedZone = new HostedZone(stack, "HostedZone", { zoneName });
      new UbuntuLinuxBastion(stack, "Bastion", {
        vpc,
        customDomain: {
          subdomain,
          hostedZone,
        },
      });

      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
        LaunchTemplateData: {
          UserData: {
            "Fn::Base64": {
              "Fn::Join": [
                "",
                Match.arrayWith([
                  Match.stringLikeRegexp(
                    "aws route53 change-resource-record-sets --hosted-zone-id"
                  ),
                  { Ref: "HostedZoneDB99F866" },
                  Match.stringLikeRegexp(`"${subdomain}.${zoneName}"`),
                ]),
              ],
            },
          },
        },
      });
    });
  });
});
