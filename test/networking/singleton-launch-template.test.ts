import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { AutoScalingGroup } from "aws-cdk-lib/aws-autoscaling";
import {
  InstanceType,
  MachineImage,
  SecurityGroup,
  SubnetType,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import { NetworkInterface } from "../../src/networking/network-interface";
import { SingletonLaunchTemplate } from "../../src/networking/singleton-launch-template";

describe("SingletonLaunchTemplate", () => {
  const account = "123456789012";
  const region = "us-east-1";
  let app: App;
  let stack: Stack;
  let vpc: Vpc;

  beforeEach(() => {
    app = new App({
      context: { "@aws-cdk/core:enablePartitionLiterals": true },
    });
    stack = new Stack(app, "Stack", {
      env: { account, region },
    });
    vpc = new Vpc(stack, "VPC", {
      maxAzs: 2,
      subnetConfiguration: [{ name: "Public", subnetType: SubnetType.PUBLIC }],
    });
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
    // @ts-ignore: TS2322
    vpc = undefined;
  });

  describe("#construct", () => {
    test("behaves as expected", () => {
      const [subnet] = vpc.publicSubnets;
      const networkInterface = new NetworkInterface(stack, "NIC", {
        vpc,
        subnet,
      });
      const instanceType = new InstanceType("t3.micro");
      const machineImage = MachineImage.latestAmazonLinux2023();
      const actual = new SingletonLaunchTemplate(stack, "Template", {
        networkInterface,
        machineImage,
        instanceType,
      });
      expect(actual.networkInterface).toBe(networkInterface);
      expect(actual.instanceType).toBe(instanceType);
      expect(actual.imageId).toBe(machineImage.getImage(actual).imageId);
    });

    test("synthesizes as expected", () => {
      const [subnet] = vpc.publicSubnets;
      const networkInterface = new NetworkInterface(stack, "NIC", {
        vpc,
        subnet,
      });
      const instanceType = new InstanceType("t3.micro");
      const machineImage = MachineImage.latestAmazonLinux2023();
      new SingletonLaunchTemplate(stack, "Template", {
        networkInterface,
        machineImage,
        instanceType,
      });
      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
        LaunchTemplateData: {
          InstanceType: "t3.micro",
          NetworkInterfaces: [
            {
              DeviceIndex: "0",
              NetworkInterfaceId: { Ref: "NIC3C02F79C" },
            },
          ],
          TagSpecifications: [
            {
              ResourceType: "instance",
              Tags: [{ Key: "Name", Value: "Stack/Template" }],
            },
            {
              ResourceType: "volume",
              Tags: [{ Key: "Name", Value: "Stack/Template" }],
            },
          ],
        },
        TagSpecifications: [
          {
            ResourceType: "launch-template",
            Tags: [{ Key: "Name", Value: "Stack/Template" }],
          },
        ],
      });
    });

    test("synthesizes as expected with imported Network Interface", () => {
      const [subnet] = vpc.publicSubnets;
      const securityGroup = new SecurityGroup(stack, "SG", { vpc });
      const networkInterfaceId = "eni-0123456789abcdeff";
      const networkInterface = NetworkInterface.fromNetworkInterfaceAttributes(
        stack,
        "NIC",
        {
          securityGroups: [securityGroup],
          subnet,
          networkInterfaceId,
        }
      );
      const instanceType = new InstanceType("t3.micro");
      const machineImage = MachineImage.latestAmazonLinux2023();
      new SingletonLaunchTemplate(stack, "Template", {
        networkInterface,
        machineImage,
        instanceType,
      });
      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
        LaunchTemplateData: {
          InstanceType: "t3.micro",
          NetworkInterfaces: [
            {
              DeviceIndex: "0",
              NetworkInterfaceId: networkInterfaceId,
            },
          ],
          TagSpecifications: [
            {
              ResourceType: "instance",
              Tags: [{ Key: "Name", Value: "Stack/Template" }],
            },
            {
              ResourceType: "volume",
              Tags: [{ Key: "Name", Value: "Stack/Template" }],
            },
          ],
        },
        TagSpecifications: [
          {
            ResourceType: "launch-template",
            Tags: [{ Key: "Name", Value: "Stack/Template" }],
          },
        ],
      });
    });
  });

  describe("#connections", () => {
    test("has the network interface security groups", () => {
      const [subnet] = vpc.publicSubnets;
      const securityGroup = new SecurityGroup(stack, "SG", { vpc });
      const networkInterface = new NetworkInterface(stack, "NIC", {
        vpc,
        subnet,
        securityGroups: [securityGroup],
      });
      const instanceType = new InstanceType("t3.micro");
      const machineImage = MachineImage.latestAmazonLinux2023();
      const actual = new SingletonLaunchTemplate(stack, "Template", {
        networkInterface,
        machineImage,
        instanceType,
      });
      expect(actual.connections).toBe(networkInterface.connections);
      expect(actual.connections.securityGroups).toContain(securityGroup);
    });
  });

  describe("#addSecurityGroup", () => {
    test("adds to the network interface connections", () => {
      const [subnet] = vpc.publicSubnets;
      const networkInterface = new NetworkInterface(stack, "NIC", {
        vpc,
        subnet,
      });
      const instanceType = new InstanceType("t3.micro");
      const machineImage = MachineImage.latestAmazonLinux2023();
      const actual = new SingletonLaunchTemplate(stack, "Template", {
        networkInterface,
        machineImage,
        instanceType,
      });
      const securityGroup = new SecurityGroup(stack, "SG", { vpc });
      actual.addSecurityGroup(securityGroup);
      expect(networkInterface.connections.securityGroups.length).toBe(2);
      expect(networkInterface.connections.securityGroups).toContain(
        securityGroup
      );
    });
  });

  describe("#createAutoScalingGroup", () => {
    test("behaves as expected", () => {
      const [subnet] = vpc.publicSubnets;
      const securityGroup = new SecurityGroup(stack, "SG", { vpc });
      const networkInterface = new NetworkInterface(stack, "NIC", {
        vpc,
        subnet,
        securityGroups: [securityGroup],
      });
      const instanceType = new InstanceType("t3.micro");
      const machineImage = MachineImage.latestAmazonLinux2023();
      const obj = new SingletonLaunchTemplate(stack, "Template", {
        networkInterface,
        machineImage,
        instanceType,
      });
      const actual = obj.createAutoScalingGroup("ASG", { vpc });
      expect(actual).toBeInstanceOf(AutoScalingGroup);
      expect(actual.connections.securityGroups).toContain(securityGroup);
    });

    test("synthesizes as expected", () => {
      const [subnet] = vpc.publicSubnets;
      const networkInterface = new NetworkInterface(stack, "NIC", {
        vpc,
        subnet,
      });
      const instanceType = new InstanceType("t3.micro");
      const machineImage = MachineImage.latestAmazonLinux2023();
      const obj = new SingletonLaunchTemplate(stack, "Template", {
        networkInterface,
        machineImage,
        instanceType,
      });
      obj.createAutoScalingGroup("ASG", { vpc });
      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::AutoScaling::AutoScalingGroup", {
        AvailabilityZones: ["dummy1a"],
        LaunchTemplate: {
          LaunchTemplateId: { Ref: "Template576A9730" },
          Version: {
            "Fn::GetAtt": ["Template576A9730", "LatestVersionNumber"],
          },
        },
        MaxSize: "1",
        MinSize: "1",
        Tags: [
          { Key: "Name", PropagateAtLaunch: true, Value: "Stack/Template" },
        ],
      });
    });
  });
});
