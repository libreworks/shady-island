import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { AutoScalingGroup } from "aws-cdk-lib/aws-autoscaling";
import {
  Instance,
  InstanceType,
  LaunchTemplate,
  MachineImage,
  Peer,
  Port,
  SecurityGroup,
  UserData,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import { ManagedPolicy, Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import { Starter, IStarterAddOn } from "../../src/configuration/starter";

class TestAddOn implements IStarterAddOn {
  public static COMMANDS = [
    "mount -t tmpfs -o noexec,nosuid,nodev tmpfs /tmp",
    "apt update",
    "apt install nfs-common",
  ];
  configure(starter: Starter): void {
    starter.addScript(0, ...TestAddOn.COMMANDS);
    starter.connections.allowFrom(Peer.anyIpv4(), Port.tcp(22));
    const policy = ManagedPolicy.fromAwsManagedPolicyName(
      "AmazonSSMManagedInstanceCore"
    );
    (starter.grantPrincipal as Role).addManagedPolicy(policy);
  }
}

describe("Starter", () => {
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

  describe("#forAutoScalingGroup", () => {
    test("returns a Starter", () => {
      const asg = new AutoScalingGroup(stack, "ASG", {
        vpc,
        machineImage,
        instanceType,
      });
      const actual = Starter.forAutoScalingGroup(asg);
      expect(actual).toBeInstanceOf(Starter);
    });
  });

  describe("#forLaunchTemplate", () => {
    test("returns a Starter", () => {
      const userData = UserData.forLinux();
      const template = new LaunchTemplate(stack, "Template", {
        userData,
        machineImage,
        instanceType,
      });
      const actual = Starter.forLaunchTemplate(template);
      expect(actual).toBeInstanceOf(Starter);
    });

    test("throws error when missing user data", () => {
      const template = new LaunchTemplate(stack, "Template", {
        machineImage,
        instanceType,
      });
      expect(() => Starter.forLaunchTemplate(template)).toThrow({
        name: "Error",
        message: "You must supply a Launch Template with user data",
      });
    });
  });

  describe("#forInstance", () => {
    test("returns a Starter", () => {
      let instance = new Instance(stack, "Instance", {
        vpc,
        instanceType,
        machineImage,
      });
      const actual = Starter.forInstance(instance);
      expect(actual).toBeInstanceOf(Starter);
    });
  });

  describe("#addScript", () => {
    let instance: Instance;
    let starter: Starter;

    beforeEach(() => {
      instance = new Instance(stack, "Instance", {
        vpc,
        instanceType,
        machineImage,
      });
      starter = Starter.forInstance(instance);
    });

    afterEach(() => {
      // @ts-ignore: TS2322
      instance = undefined;
      // @ts-ignore: TS2322
      starter = undefined;
    });

    test("behaves as expected", () => {
      const command = "echo Hello";
      const actual = starter.addScript(20, command);
      expect(actual).toBe(starter);
      expect(starter.orderedLines).toStrictEqual([command]);
    });

    test("behaves as expected with priority", () => {
      const commands1 = ["cd /tmp", "touch foobar"];
      const commands2 = ["mkdir -p /run/secrets", "touch /run/secrets/thing"];
      starter.addScript(20, ...commands1);
      starter.addScript(10, ...commands2);
      const expected = [...commands2, ...commands1];
      expect(starter.orderedLines).toStrictEqual(expected);
    });

    test("only registers a token with the user data once", () => {
      const spy = jest.spyOn(instance.userData, "addCommands");
      const commands1 = ["cd /tmp", "touch foobar"];
      const commands2 = ["mkdir -p /run/secrets", "touch /run/secrets/thing"];
      const commands3 = ["apt update", "apt install unzip"];
      starter.addScript(20, ...commands1);
      starter.addScript(50, ...commands3);
      starter.addScript(10, ...commands2);
      const expected = [...commands2, ...commands1, ...commands3];
      expect(starter.orderedLines).toStrictEqual(expected);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe("#withAddOns", () => {
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

    test("behaves as expected", () => {
      const actual = starter.withAddOns(new TestAddOn());
      expect(actual).toBe(starter);
      expect(starter.orderedLines).toStrictEqual(TestAddOn.COMMANDS);
    });

    test("synthesizes as expected", () => {
      starter.withAddOns(new TestAddOn());
      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
        LaunchTemplateData: {
          UserData: {
            "Fn::Base64": `#!/bin/bash\n${TestAddOn.COMMANDS.join("\n")}`,
          },
        },
      });
      template.hasResourceProperties("AWS::IAM::Role", {
        ManagedPolicyArns: [
          {
            "Fn::Join": [
              "",
              [
                "arn:",
                { Ref: "AWS::Partition" },
                ":iam::aws:policy/AmazonSSMManagedInstanceCore",
              ],
            ],
          },
        ],
      });
      template.hasResourceProperties("AWS::EC2::SecurityGroup", {
        SecurityGroupIngress: [
          {
            CidrIp: "0.0.0.0/0",
            Description: "from 0.0.0.0/0:22",
            FromPort: 22,
            IpProtocol: "tcp",
            ToPort: 22,
          },
        ],
        VpcId: { Ref: "VPCB9E5F0B4" },
      });
    });
  });
});
