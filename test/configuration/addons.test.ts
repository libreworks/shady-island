import { App, Token, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import {
  Instance,
  InstanceType,
  LaunchTemplate,
  MachineImage,
  Port,
  SecurityGroup,
  UserData,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import { FileSystem } from "aws-cdk-lib/aws-efs";
import { Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import { HostedZone } from "aws-cdk-lib/aws-route53";
import { Bucket } from "aws-cdk-lib/aws-s3";
import {
  InstanceFirewallAddOn,
  BucketSyncAddOn,
  ElasticFileSystemAddOn,
  UpdateRoute53AddOn,
} from "../../src/configuration/addons";
import { ShellCommands } from "../../src/configuration/commands";
import { InstanceFirewall } from "../../src/configuration/firewall";
import { Starter } from "../../src/configuration/starter";

describe("addons", () => {
  let app: App;
  let stack: Stack;
  let vpc: Vpc;
  let machineImage = MachineImage.latestAmazonLinux2023();
  let instanceType = new InstanceType("t4g.small");

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack");
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

  describe("InstanceFirewallAddOn", () => {
    let launchTemplate: LaunchTemplate;
    let starter: Starter;

    beforeEach(() => {
      launchTemplate = new LaunchTemplate(stack, "Instance", {
        userData: UserData.forLinux(),
        instanceType,
        machineImage,
        securityGroup: new SecurityGroup(stack, "SG", { vpc }),
        role: new Role(stack, "Role", {
          assumedBy: new ServicePrincipal("ec2.amazonaws.com"),
        }),
      });
      starter = Starter.forLaunchTemplate(launchTemplate);
    });

    afterEach(() => {
      // @ts-ignore: TS2322
      launchTemplate = undefined;
      // @ts-ignore: TS2322
      starter = undefined;
    });

    describe("#configure", () => {
      test("behaves as expected", () => {
        const firewall = InstanceFirewall.iptables().inboundFromAnyIpv4(
          Port.icmpPing()
        );
        const obj = new InstanceFirewallAddOn(firewall);
        const spy = jest.spyOn(obj, "configure");
        starter.withAddOns(obj);
        expect(Token.isUnresolved(firewall.buildCommands()));
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(starter);
      });

      test("synthesizes as expected", () => {
        const firewall = InstanceFirewall.iptables().inboundFromAnyIpv4(
          Port.icmpPing()
        );
        const obj = new InstanceFirewallAddOn(firewall, { priority: -1 });
        starter.withAddOns(obj);

        const template = Template.fromStack(stack);
        template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
          LaunchTemplateData: {
            UserData: {
              "Fn::Base64": `#!/bin/bash\n${firewall
                .buildCommands()
                .join("\n")}`,
            },
          },
        });
      });
    });
  });

  describe("ElasticFileSystemAddOn", () => {
    let filesystem: FileSystem;
    let instance: Instance;
    let starter: Starter;

    beforeEach(() => {
      const securityGroup = new SecurityGroup(stack, "SecGrp", {
        vpc,
        allowAllOutbound: false,
        allowAllIpv6Outbound: false,
      });
      filesystem = new FileSystem(stack, "FileSystem", {
        vpc,
        securityGroup,
      });
      const instanceSecurityGroup = new SecurityGroup(stack, "SG", {
        vpc,
        allowAllOutbound: false,
        allowAllIpv6Outbound: false,
      });
      instance = new Instance(stack, "Instance", {
        machineImage,
        instanceType,
        vpc,
        securityGroup: instanceSecurityGroup,
      });
      starter = Starter.forInstance(instance);
    });

    afterEach(() => {
      // @ts-ignore: TS2322
      filesystem = undefined;
      // @ts-ignore: TS2322
      instance = undefined;
      // @ts-ignore: TS2322
      starter = undefined;
    });

    describe("#configure", () => {
      test("behaves as expected", () => {
        const destination = "/mnt/efs";
        const obj = new ElasticFileSystemAddOn(filesystem, destination);
        const spy = jest.spyOn(obj, "configure");
        starter.withAddOns(obj);
        expect(starter.orderedLines).toStrictEqual(
          ShellCommands.mountElasticFileSystem(filesystem, destination)
        );
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(starter);
      });

      test("synthesizes as expected", () => {
        instance.userData.addCommands(
          "mkdir -p /tmp/foobar",
          "touch /tmp/foobar"
        );
        const destination = "/mnt/stuff";
        const obj = new ElasticFileSystemAddOn(filesystem, destination, {
          priority: 20,
          chown: "www-data",
          chgrp: "www-data",
          chmod: 2775,
        });
        starter.withAddOns(obj);
        const template = Template.fromStack(stack);
        template.hasResourceProperties("AWS::EC2::Instance", {
          UserData: {
            "Fn::Base64": {
              "Fn::Join": [
                "",
                [
                  '#!/bin/bash\nmkdir -p /tmp/foobar\ntouch /tmp/foobar\nmkdir -p "/mnt/stuff"\nmount -t nfs4 -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport ',
                  { Ref: "FileSystem8A8E25C0" },
                  ".efs.",
                  { Ref: "AWS::Region" },
                  '.amazonaws.com:/ "/mnt/stuff"\nchmod 2775 "/mnt/stuff"\nchown www-data:www-data "/mnt/stuff"',
                ],
              ],
            },
          },
        });
        template.hasResourceProperties("AWS::EC2::SecurityGroupEgress", {
          GroupId: {
            "Fn::GetAtt": ["SGADB53937", "GroupId"],
          },
          IpProtocol: "tcp",
          Description: "Allow NFS traffic from EC2 to EFS",
          DestinationSecurityGroupId: {
            "Fn::GetAtt": ["SecGrpC0520ACF", "GroupId"],
          },
          FromPort: 2049,
          ToPort: 2049,
        });
        template.hasResourceProperties("AWS::EC2::SecurityGroupIngress", {
          IpProtocol: "tcp",
          Description: "Allow NFS traffic from EC2 to EFS",
          FromPort: 2049,
          GroupId: { "Fn::GetAtt": ["SecGrpC0520ACF", "GroupId"] },
          SourceSecurityGroupId: {
            "Fn::GetAtt": ["SGADB53937", "GroupId"],
          },
          ToPort: 2049,
        });
      });
    });
  });

  describe("UpdateRoute53AddOn", () => {
    let launchTemplate: LaunchTemplate;
    let starter: Starter;
    let hostedZone: HostedZone;

    beforeEach(() => {
      launchTemplate = new LaunchTemplate(stack, "Instance", {
        userData: UserData.forLinux(),
        instanceType,
        machineImage,
        securityGroup: new SecurityGroup(stack, "SG", { vpc }),
        role: new Role(stack, "Role", {
          assumedBy: new ServicePrincipal("ec2.amazonaws.com"),
        }),
      });
      starter = Starter.forLaunchTemplate(launchTemplate);
      hostedZone = new HostedZone(stack, "Zone", {
        zoneName: "si.example.com",
      });
    });

    afterEach(() => {
      // @ts-ignore: TS2322
      launchTemplate = undefined;
      // @ts-ignore: TS2322
      starter = undefined;
      // @ts-ignore: TS2322
      hostedZone = undefined;
    });

    describe("#configure", () => {
      test("behaves as expected with ipv4", () => {
        const obj = new UpdateRoute53AddOn(hostedZone, "foobar");
        const spy = jest.spyOn(obj, "configure");
        starter.withAddOns(obj);
        expect(starter.orderedLines).toStrictEqual([
          'metaToken=$(curl -sX PUT "http://instance-data/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 300")',
          'metaTokenHeader="X-aws-ec2-metadata-token: $metaToken"',
          "IMD=http://instance-data/latest/meta-data",
          'IMDNIM="$IMD/network/interfaces/macs"',
          'myNetworkMac=$(curl -sH "$metaTokenHeader" "$IMDNIM/")',
          'IMDNIMC="$IMDNIM/$myNetworkMac"',
          'myHostIpPublic=$(curl -sH "$metaTokenHeader" "${IMDNIMC}public-ipv4s")',
          expect.stringMatching(/.*"foobar\.si\.example\.com".*"Type":"A".*/),
        ]);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(starter);
      });

      test("behaves as expected with ipv6", () => {
        const obj = new UpdateRoute53AddOn(hostedZone, "foobar", {
          ipv4: false,
          ipv6: true,
        });
        const spy = jest.spyOn(obj, "configure");
        starter.withAddOns(obj);
        expect(starter.orderedLines).toStrictEqual([
          'metaToken=$(curl -sX PUT "http://instance-data/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 300")',
          'metaTokenHeader="X-aws-ec2-metadata-token: $metaToken"',
          "IMD=http://instance-data/latest/meta-data",
          'IMDNIM="$IMD/network/interfaces/macs"',
          'myNetworkMac=$(curl -sH "$metaTokenHeader" "$IMDNIM/")',
          'IMDNIMC="$IMDNIM/$myNetworkMac"',
          'myHostIpv6=$(curl -sH "$metaTokenHeader" "${IMDNIMC}ipv6s")',
          expect.stringMatching(
            /.*"foobar\.si\.example\.com".*"Type":"AAAA".*/
          ),
        ]);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(starter);
      });

      test("behaves as expected with both", () => {
        const obj = new UpdateRoute53AddOn(hostedZone, "foobar", {
          ipv4: true,
          ipv6: true,
        });
        const spy = jest.spyOn(obj, "configure");
        starter.withAddOns(obj);
        expect(starter.orderedLines).toStrictEqual([
          'metaToken=$(curl -sX PUT "http://instance-data/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 300")',
          'metaTokenHeader="X-aws-ec2-metadata-token: $metaToken"',
          "IMD=http://instance-data/latest/meta-data",
          'IMDNIM="$IMD/network/interfaces/macs"',
          'myNetworkMac=$(curl -sH "$metaTokenHeader" "$IMDNIM/")',
          'IMDNIMC="$IMDNIM/$myNetworkMac"',
          'myHostIpPublic=$(curl -sH "$metaTokenHeader" "${IMDNIMC}public-ipv4s")',
          'myHostIpv6=$(curl -sH "$metaTokenHeader" "${IMDNIMC}ipv6s")',
          expect.stringMatching(
            /.*"foobar\.si\.example\.com".*"Type":"A".*"foobar\.si\.example\.com".*"Type":"AAAA".*/
          ),
        ]);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(starter);
      });

      test("behaves as expected with neither", () => {
        const obj = new UpdateRoute53AddOn(hostedZone, "foobar", {
          ipv4: false,
          ipv6: false,
        });
        const spy = jest.spyOn(obj, "configure");
        starter.withAddOns(obj);
        expect(starter.orderedLines).toStrictEqual([]);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(starter);
      });

      test("synthesizes as expected", () => {
        const obj = new UpdateRoute53AddOn(hostedZone, "foobar", {
          ipv4: true,
          ipv6: true,
        });
        starter.withAddOns(obj);
        const template = Template.fromStack(stack);
        template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
          LaunchTemplateData: {
            UserData: {
              "Fn::Base64": {
                "Fn::Join": [
                  "",
                  [
                    '#!/bin/bash\nmetaToken=$(curl -sX PUT "http://instance-data/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 300")\nmetaTokenHeader="X-aws-ec2-metadata-token: $metaToken"\nIMD=http://instance-data/latest/meta-data\nIMDNIM="$IMD/network/interfaces/macs"\nmyNetworkMac=$(curl -sH "$metaTokenHeader" "$IMDNIM/")\nIMDNIMC="$IMDNIM/$myNetworkMac"\nmyHostIpPublic=$(curl -sH "$metaTokenHeader" "${IMDNIMC}public-ipv4s")\nmyHostIpv6=$(curl -sH "$metaTokenHeader" "${IMDNIMC}ipv6s")\naws route53 change-resource-record-sets --hosted-zone-id ',
                    { Ref: "ZoneA5DE4B68" },
                    ' --change-batch \'{"Changes":[{"Action":"UPSERT","ResourceRecordSet":{"Name":"foobar.si.example.com","Type":"A","TTL":300,"ResourceRecords":[{"Value":"\'$myHostIpPublic\'"}]}},{"Action":"UPSERT","ResourceRecordSet":{"Name":"foobar.si.example.com","Type":"AAAA","TTL":300,"ResourceRecords":[{"Value":"\'$myHostIpv6\'"}]}}]}\'',
                  ],
                ],
              },
            },
          },
        });
        template.hasResourceProperties("AWS::IAM::Policy", {
          PolicyDocument: {
            Statement: [
              {
                Action: "route53:changeResourceRecordSets",
                Condition: {
                  "ForAllValues:StringLike": {
                    "route53:ChangeResourceRecordSetsNormalizedRecordNames": [
                      "foobar.si.example.com",
                    ],
                  },
                  "ForAllValues:StringEquals": {
                    "route53:ChangeResourceRecordSetsActions": ["UPSERT"],
                    "route53:ChangeResourceRecordSetsRecordTypes": [
                      "A",
                      "AAAA",
                    ],
                  },
                },
                Effect: "Allow",
                Resource: {
                  "Fn::Join": [
                    "",
                    [
                      "arn:",
                      { Ref: "AWS::Partition" },
                      ":route53:::hostedzone/",
                      { Ref: "ZoneA5DE4B68" },
                    ],
                  ],
                },
              },
            ],
            Version: "2012-10-17",
          },
          PolicyName: "RoleDefaultPolicy5FFB7DAB",
        });
      });
    });
  });

  describe("BucketSyncAddOn", () => {
    let launchTemplate: LaunchTemplate;
    let bucket: Bucket;
    let starter: Starter;

    beforeEach(() => {
      launchTemplate = new LaunchTemplate(stack, "Instance", {
        userData: UserData.forLinux(),
        instanceType,
        machineImage,
        securityGroup: new SecurityGroup(stack, "SG", { vpc }),
        role: new Role(stack, "Role", {
          assumedBy: new ServicePrincipal("ec2.amazonaws.com"),
        }),
      });
      bucket = new Bucket(stack, "Bucket");
      starter = Starter.forLaunchTemplate(launchTemplate);
    });

    afterEach(() => {
      // @ts-ignore: TS2322
      launchTemplate = undefined;
      // @ts-ignore: TS2322
      bucket = undefined;
      // @ts-ignore: TS2322
      starter = undefined;
    });

    describe("#configure", () => {
      test("behaves as expected", () => {
        const destinations = {
          "another-key": "/var/lib/something",
          "my-key": "/path/to/dir",
        };
        const obj = new BucketSyncAddOn(bucket, destinations);
        const spy = jest.spyOn(obj, "configure");
        starter.withAddOns(obj);
        expect(starter.orderedLines).toStrictEqual(
          ShellCommands.syncFromBucket(bucket, destinations)
        );
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(starter);
      });

      test("synthesizes as expected", () => {
        const obj = new BucketSyncAddOn(
          bucket,
          {
            "etc/cron.d": "/etc/cron.d",
          },
          { priority: 0 }
        );
        launchTemplate.userData!.addCommands(
          "apt update",
          "apt install nfs-common"
        );
        starter.withAddOns(obj);
        const template = Template.fromStack(stack);
        template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
          LaunchTemplateData: {
            UserData: {
              "Fn::Base64": {
                "Fn::Join": [
                  "",
                  [
                    "#!/bin/bash\napt update\napt install nfs-common\naws --region ",
                    { Ref: "AWS::Region" },
                    ' s3 sync --only-show-errors "s3://',
                    { Ref: "Bucket83908E77" },
                    '/etc/cron.d" "/etc/cron.d"',
                  ],
                ],
              },
            },
          },
        });
        template.hasResourceProperties("AWS::IAM::Policy", {
          PolicyDocument: {
            Statement: [
              {
                Action: ["s3:GetObject*", "s3:GetBucket*", "s3:List*"],
                Effect: "Allow",
                Resource: [
                  { "Fn::GetAtt": ["Bucket83908E77", "Arn"] },
                  {
                    "Fn::Join": [
                      "",
                      [{ "Fn::GetAtt": ["Bucket83908E77", "Arn"] }, "/*"],
                    ],
                  },
                ],
              },
            ],
            Version: "2012-10-17",
          },
        });
      });
    });
  });
});
