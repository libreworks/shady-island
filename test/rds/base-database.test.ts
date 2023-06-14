import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import {
  CfnSecurityGroupIngress,
  CfnSecurityGroupEgress,
  SecurityGroup,
  SubnetSelection,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import {
  DatabaseCluster,
  DatabaseClusterEngine,
  AuroraMysqlEngineVersion,
} from "aws-cdk-lib/aws-rds";
import { ISecret, Secret } from "aws-cdk-lib/aws-secretsmanager";
import { BaseDatabase } from "../../src/rds";

class ConcreteBaseDatabase extends BaseDatabase {
  public addUserAsOwner(_: ISecret): void {}
  public addUserAsReader(_: ISecret): void {}
  public get protectedSecurityGroup() {
    return this.securityGroup;
  }
  public get protectedSubnetSelection() {
    return this.subnetSelection;
  }
}

describe("BaseDatabase", () => {
  let app: App;
  let stack: Stack;
  let vpc: Vpc;
  let adminSecret: Secret;
  let databaseName = "foobar";
  let cluster: DatabaseCluster;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack");
    vpc = new Vpc(stack, "VPC", {});
    adminSecret = new Secret(stack, "Secret", {});
    cluster = new DatabaseCluster(stack, "Cluster", {
      engine: DatabaseClusterEngine.auroraMysql({
        version: AuroraMysqlEngineVersion.VER_3_02_1,
      }),
      instanceProps: { vpc },
    });
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
    // @ts-ignore: TS2322
    vpc = undefined;
    // @ts-ignore: TS2322
    adminSecret = undefined;
  });

  describe("#construct", () => {
    test("databaseName property exists", () => {
      const obj = new ConcreteBaseDatabase(stack, "DB", {
        adminSecret,
        databaseName,
        vpc,
        resource: cluster,
        target: cluster,
        endpoint: cluster.clusterEndpoint,
      });
      expect(obj.databaseName).toStrictEqual(databaseName);
    });

    test("endpoint property exists", () => {
      const obj = new ConcreteBaseDatabase(stack, "DB", {
        adminSecret,
        databaseName,
        vpc,
        resource: cluster,
        target: cluster,
        endpoint: cluster.clusterEndpoint,
      });
      expect(obj.endpoint).toBe(cluster.clusterEndpoint);
    });

    test("security group automatically created", () => {
      const obj = new ConcreteBaseDatabase(stack, "DB", {
        adminSecret,
        databaseName,
        vpc,
        resource: cluster,
        target: cluster,
        endpoint: cluster.clusterEndpoint,
      });
      expect(obj.protectedSecurityGroup).toBeInstanceOf(SecurityGroup);
      const [clusterSecurityGroup] = cluster.connections.securityGroups;
      const ingress = clusterSecurityGroup.node.children
        .filter(
          (c) =>
            c.node.id !== "Resource" && c instanceof CfnSecurityGroupIngress
        )
        .pop() as CfnSecurityGroupIngress;
      expect(ingress.sourceSecurityGroupId).toStrictEqual(
        obj.protectedSecurityGroup.securityGroupId
      );
    });

    test("existing security group", () => {
      const securityGroup = new SecurityGroup(stack, "SecGrp", {
        vpc,
        allowAllOutbound: false,
      });
      const obj = new ConcreteBaseDatabase(stack, "DB", {
        adminSecret,
        databaseName,
        vpc,
        resource: cluster,
        target: cluster,
        endpoint: cluster.clusterEndpoint,
        securityGroup,
      });
      expect(obj.protectedSecurityGroup).toBe(securityGroup);
      const [clusterSecurityGroup] = cluster.connections.securityGroups;
      const ingress = clusterSecurityGroup.node.children
        .filter(
          (c) =>
            c.node.id !== "Resource" && c instanceof CfnSecurityGroupIngress
        )
        .pop() as CfnSecurityGroupIngress;
      expect(ingress.sourceSecurityGroupId).toStrictEqual(
        securityGroup.securityGroupId
      );
      const egress = securityGroup.node.children
        .filter(
          (c) => c.node.id !== "Resource" && c instanceof CfnSecurityGroupEgress
        )
        .pop() as CfnSecurityGroupEgress;
      expect(egress.destinationSecurityGroupId).toStrictEqual(
        clusterSecurityGroup.securityGroupId
      );
    });

    test("existing security group template", () => {
      const securityGroup = new SecurityGroup(stack, "SecGrp", {
        vpc,
        allowAllOutbound: false,
      });
      new ConcreteBaseDatabase(stack, "DB", {
        adminSecret,
        databaseName,
        vpc,
        resource: cluster,
        target: cluster,
        endpoint: cluster.clusterEndpoint,
        securityGroup,
      });
      const template = Template.fromStack(stack);
      template.resourceCountIs("AWS::EC2::SecurityGroupIngress", 1);
      template.hasResourceProperties("AWS::EC2::SecurityGroupIngress", {
        IpProtocol: "tcp",
        FromPort: { "Fn::GetAtt": ["ClusterEB0386A7", "Endpoint.Port"] },
        GroupId: { "Fn::GetAtt": ["ClusterSecurityGroup0921994B", "GroupId"] },
        SourceSecurityGroupId: { "Fn::GetAtt": ["SecGrpC0520ACF", "GroupId"] },
        ToPort: { "Fn::GetAtt": ["ClusterEB0386A7", "Endpoint.Port"] },
      });
      template.resourceCountIs("AWS::EC2::SecurityGroupEgress", 1);
      template.hasResourceProperties("AWS::EC2::SecurityGroupEgress", {
        GroupId: { "Fn::GetAtt": ["SecGrpC0520ACF", "GroupId"] },
        IpProtocol: "tcp",
        DestinationSecurityGroupId: {
          "Fn::GetAtt": ["ClusterSecurityGroup0921994B", "GroupId"],
        },
        FromPort: { "Fn::GetAtt": ["ClusterEB0386A7", "Endpoint.Port"] },
        ToPort: { "Fn::GetAtt": ["ClusterEB0386A7", "Endpoint.Port"] },
      });
    });

    test("subnet selection default", () => {
      const obj = new ConcreteBaseDatabase(stack, "DB", {
        adminSecret,
        databaseName,
        vpc,
        resource: cluster,
        target: cluster,
        endpoint: cluster.clusterEndpoint,
      });
      expect(obj.protectedSubnetSelection).toStrictEqual({
        subnets: vpc.privateSubnets,
      });
    });

    test("subnet selection provided", () => {
      const vpcSubnets: SubnetSelection = { subnets: vpc.publicSubnets };
      const obj = new ConcreteBaseDatabase(stack, "DB", {
        adminSecret,
        databaseName,
        vpc,
        resource: cluster,
        target: cluster,
        endpoint: cluster.clusterEndpoint,
        vpcSubnets,
      });
      expect(obj.protectedSubnetSelection).toStrictEqual({
        subnets: vpc.publicSubnets,
      });
    });
  });
});
