import { App, RemovalPolicy, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { SecurityGroup, SubnetType, Vpc } from "aws-cdk-lib/aws-ec2";
import { ElasticIp } from "../../src/networking/elastic-ip";
import {
  AddressingV4,
  AddressingV6,
  NetworkInterface,
} from "../../src/networking/network-interface";

describe("AddressingV4", () => {
  describe("#prefixes", () => {
    test("works as expected", () => {
      const prefix = "192.168.0.0/28";
      const actual = AddressingV4.prefixes([prefix]);
      expect(actual.props).toStrictEqual({
        ipv4Prefixes: [{ ipv4Prefix: prefix }],
      });
    });
  });

  describe("#prefixCount", () => {
    test("works as expected", () => {
      const count = 2;
      const actual = AddressingV4.prefixCount(2);
      expect(actual.props).toStrictEqual({ ipv4PrefixCount: count });
    });
  });

  describe("#privateAddress", () => {
    test("works as expected", () => {
      const address = "192.168.0.3";
      const actual = AddressingV4.privateAddress(address);
      expect(actual.props).toStrictEqual({ privateIpAddress: address });
    });
  });

  describe("#privateAddresses", () => {
    test("works as expected", () => {
      const primary = "192.168.0.3";
      const secondary = ["192.168.0.4"];
      const actual = AddressingV4.privateAddresses(primary, ...secondary);
      expect(actual.props).toStrictEqual({
        privateIpAddresses: [
          { privateIpAddress: primary, primary: true },
          { privateIpAddress: secondary[0], primary: false },
        ],
      });
    });
  });

  describe("#privateAddressAndSecondaryCount", () => {
    test("works as expected", () => {
      const primary = "192.168.0.3";
      const count = 2;
      const actual = AddressingV4.privateAddressAndSecondaryCount(
        primary,
        count
      );
      expect(actual.props).toStrictEqual({
        privateIpAddresses: [{ privateIpAddress: primary, primary: true }],
        secondaryPrivateIpAddressCount: count,
      });
    });
  });
});

describe("AddressingV6", () => {
  describe("#prefixes", () => {
    test("works as expected", () => {
      const prefix = "192.168.0.0/28";
      const actual = AddressingV6.prefixes([prefix]);
      expect(actual.props).toStrictEqual({
        ipv6Prefixes: [{ ipv6Prefix: prefix }],
      });
    });

    test("works as expected with primary address", () => {
      const prefix = "192.168.0.0/28";
      const actual = AddressingV6.prefixes([prefix], true);
      expect(actual.props).toStrictEqual({
        ipv6Prefixes: [{ ipv6Prefix: prefix }],
        enablePrimaryIpv6: true,
      });
    });
  });

  describe("#prefixCount", () => {
    test("works as expected", () => {
      const count = 2;
      const actual = AddressingV6.prefixCount(2);
      expect(actual.props).toStrictEqual({ ipv6PrefixCount: count });
    });

    test("works as expected with primary address", () => {
      const count = 2;
      const actual = AddressingV6.prefixCount(2, false);
      expect(actual.props).toStrictEqual({
        ipv6PrefixCount: count,
        enablePrimaryIpv6: false,
      });
    });
  });

  describe("#addresses", () => {
    test("works as expected", () => {
      const ip = "2600:1f18:3c94:4000:1b92:6dac:abe8:fcea";
      const actual = AddressingV6.addresses([ip]);
      expect(actual.props).toStrictEqual({
        ipv6Addresses: [{ ipv6Address: ip }],
      });
    });

    test("works as expected with primary address", () => {
      const ip = "2600:1f18:3c94:4000:1b92:6dac:abe8:fcea";
      const actual = AddressingV6.addresses([ip], true);
      expect(actual.props).toStrictEqual({
        ipv6Addresses: [{ ipv6Address: ip }],
        enablePrimaryIpv6: true,
      });
    });
  });

  describe("#addressCount", () => {
    test("works as expected", () => {
      const count = 3;
      const actual = AddressingV6.addressCount(count);
      expect(actual.props).toStrictEqual({ ipv6AddressCount: count });
    });

    test("works as expected with primary address", () => {
      const count = 2;
      const actual = AddressingV6.addressCount(2, false);
      expect(actual.props).toStrictEqual({
        ipv6AddressCount: count,
        enablePrimaryIpv6: false,
      });
    });
  });
});

describe("NetworkInterface", () => {
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

  describe("#fromNetworkInterfaceAttributes", () => {
    test("works as expected", () => {
      const networkInterfaceId = "eni-0123456789abcdeff";
      const securityGroups = [new SecurityGroup(stack, "SG", { vpc })];
      const [subnet] = vpc.publicSubnets;
      const actual = NetworkInterface.fromNetworkInterfaceAttributes(
        stack,
        "NIC",
        { networkInterfaceId, securityGroups, subnet }
      );
      expect(actual.networkInterfaceId).toBe(networkInterfaceId);
      expect(actual.connections.securityGroups).toStrictEqual(securityGroups);
      expect(actual.subnet).toBe(subnet);
    });
  });

  describe("#constructor", () => {
    test("creates a security group", () => {
      const [subnet] = vpc.publicSubnets;
      const actual = new NetworkInterface(stack, "NIC", { vpc, subnet });
      const [sg] = actual.connections.securityGroups;
      expect(sg).toBeInstanceOf(SecurityGroup);
    });

    test("uses the supplied security group", () => {
      const [subnet] = vpc.publicSubnets;
      const sg = new SecurityGroup(stack, "SG", { vpc });
      const actual = new NetworkInterface(stack, "NIC", {
        vpc,
        subnet,
        securityGroups: [sg],
      });
      expect(actual.connections.securityGroups[0]).toBe(sg);
    });

    test("synthesizes as expected with addressing", () => {
      const [subnet] = vpc.publicSubnets;
      new NetworkInterface(stack, "NIC", {
        vpc,
        subnet,
        ipv4: AddressingV4.privateAddress("192.168.0.3"),
        ipv6: AddressingV6.addressCount(1),
      });
      const template = Template.fromStack(stack);
      template.resourceCountIs("AWS::EC2::SecurityGroup", 1);
      template.hasResourceProperties("AWS::EC2::NetworkInterface", {
        GroupSet: [{ "Fn::GetAtt": ["NICSecurityGroup6D69D966", "GroupId"] }],
        SourceDestCheck: true,
        Ipv6AddressCount: 1,
        PrivateIpAddress: "192.168.0.3",
        SubnetId: { Ref: "VPCPublicSubnet1SubnetB4246D30" },
      });
    });

    test("synthesizes as expected with removalPolicy", () => {
      const [subnet] = vpc.publicSubnets;
      new NetworkInterface(stack, "NIC", {
        vpc,
        subnet,
        removalPolicy: RemovalPolicy.RETAIN,
      });
      const template = Template.fromStack(stack);
      template.resourceCountIs("AWS::EC2::SecurityGroup", 1);
      template.hasResourceProperties("AWS::EC2::NetworkInterface", {
        GroupSet: [{ "Fn::GetAtt": ["NICSecurityGroup6D69D966", "GroupId"] }],
        SourceDestCheck: true,
        SubnetId: { Ref: "VPCPublicSubnet1SubnetB4246D30" },
      });
      template.hasResource("AWS::EC2::NetworkInterface", {
        UpdateReplacePolicy: "Retain",
        DeletionPolicy: "Retain",
      });
    });

    test("synthesizes as expected with Elastic IP", () => {
      const [subnet] = vpc.publicSubnets;
      const eip = new ElasticIp(stack, "EIP");
      new NetworkInterface(stack, "NIC", {
        vpc,
        subnet,
        elasticIp: eip,
      });
      const template = Template.fromStack(stack);
      template.resourceCountIs("AWS::EC2::EIPAssociation", 1);
      template.resourceCountIs("AWS::EC2::SecurityGroup", 1);
      template.hasResourceProperties("AWS::EC2::NetworkInterface", {
        GroupSet: [{ "Fn::GetAtt": ["NICSecurityGroup6D69D966", "GroupId"] }],
        SourceDestCheck: true,
        SubnetId: { Ref: "VPCPublicSubnet1SubnetB4246D30" },
      });
    });
  });
});
