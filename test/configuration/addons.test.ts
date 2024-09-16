import { App, Stack } from "aws-cdk-lib";
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
import { Bucket } from "aws-cdk-lib/aws-s3";
import {
  InstanceFirewallAddOn,
  BucketSyncAddOn,
  ElasticFileSystemAddOn,
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
        expect(starter.orderedLines).toStrictEqual(firewall.buildCommands());
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(starter);
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
