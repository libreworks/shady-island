import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import {
  Cluster,
  ContainerImage,
  FargateTaskDefinition,
} from "aws-cdk-lib/aws-ecs";
import {
  Role,
  AccountRootPrincipal,
  Grant,
  PolicyStatement,
} from "aws-cdk-lib/aws-iam";
import { FargateTask } from "../../src/ecs/fargate-task";

describe("FargateTask", () => {
  let app: App;
  let stack: Stack;
  let vpc: Vpc;
  let cluster: Cluster;
  let taskDefinition: FargateTaskDefinition;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack");
    vpc = new Vpc(stack, "Vpc", {});
    cluster = new Cluster(stack, "Cluster", { vpc });
    taskDefinition = new FargateTaskDefinition(stack, "TaskDef", {});
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
    // @ts-ignore: TS2322
    vpc = undefined;
    // @ts-ignore: TS2322
    cluster = undefined;
    // @ts-ignore: TS2322
    taskDefinition = undefined;
  });

  test("#getAwsVpcNetworkConfig with defaults", () => {
    const obj = new FargateTask(stack, "Task", { cluster, taskDefinition });
    expect(obj.awsVpcNetworkConfig).toStrictEqual({
      assignPublicIp: "DISABLED",
      securityGroups: obj.connections.securityGroups.map(
        (sg) => sg.securityGroupId
      ),
      subnets: obj.cluster.vpc.privateSubnets.map((sn) => sn.subnetId),
    });
  });

  test("#getAwsVpcNetworkConfig with partial parameters", () => {
    const obj = new FargateTask(stack, "Task", {
      cluster,
      taskDefinition,
      assignPublicIp: true,
    });
    expect(obj.awsVpcNetworkConfig).toStrictEqual({
      assignPublicIp: "ENABLED",
      securityGroups: obj.connections.securityGroups.map(
        (sg) => sg.securityGroupId
      ),
      subnets: obj.cluster.vpc.publicSubnets.map((sn) => sn.subnetId),
    });
  });

  test("#getAwsVpcNetworkConfig with specified parameters", () => {
    const obj = new FargateTask(stack, "Task", {
      cluster,
      taskDefinition,
      assignPublicIp: false,
      vpcSubnets: { subnets: vpc.isolatedSubnets },
    });
    expect(obj.awsVpcNetworkConfig).toStrictEqual({
      assignPublicIp: "DISABLED",
      securityGroups: obj.connections.securityGroups.map(
        (sg) => sg.securityGroupId
      ),
      subnets: obj.cluster.vpc.isolatedSubnets.map((sn) => sn.subnetId),
    });
  });

  test("#grantRun", () => {
    const obj = new FargateTask(stack, "Task", { cluster, taskDefinition });
    const grantee = new Role(stack, "Grantee", {
      assumedBy: new AccountRootPrincipal(),
    });
    const actual = obj.grantRun(grantee);
    expect(actual).toBeInstanceOf(Grant);
    const statement = actual.principalStatements[0];
    expect(statement).toBeInstanceOf(PolicyStatement);
    expect(statement.actions).toStrictEqual(["ecs:RunTask"]);
    expect(statement.conditions).toStrictEqual({
      ArnEquals: { "ecs:cluster": obj.cluster.clusterArn },
    });
  });

  test("synthesizes the template as expected with defaults", () => {
    new FargateTask(stack, "Task", { cluster, taskDefinition });

    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::IAM::Role", 2);
    template.hasResourceProperties("AWS::EC2::SecurityGroup", {
      GroupDescription: "Stack/Task/SecurityGroup",
      SecurityGroupEgress: [
        {
          CidrIp: "0.0.0.0/0",
          Description: "Allow all outbound traffic by default",
          IpProtocol: "-1",
        },
      ],
      VpcId: { Ref: "Vpc8378EB38" },
    });
  });

  test("synthesizes the template as expected", () => {
    const container = "Foo";
    taskDefinition.addContainer(container, {
      image: ContainerImage.fromRegistry("node:16"),
    });
    new FargateTask(stack, "Task", { cluster, taskDefinition });

    const template = Template.fromStack(stack);

    template.hasResourceProperties("AWS::ECS::TaskDefinition", {
      ContainerDefinitions: [
        { Essential: true, Image: "node:16", Name: container },
      ],
      Cpu: "256",
      Family: "StackTaskDefF0726FA9",
      Memory: "512",
      NetworkMode: "awsvpc",
      RequiresCompatibilities: ["FARGATE"],
      TaskRoleArn: { "Fn::GetAtt": ["TaskDefTaskRole1EDB4A67", "Arn"] },
    });
    template.hasResourceProperties("AWS::EC2::SecurityGroup", {
      GroupDescription: "Stack/Task/SecurityGroup",
      SecurityGroupEgress: [
        {
          CidrIp: "0.0.0.0/0",
          Description: "Allow all outbound traffic by default",
          IpProtocol: "-1",
        },
      ],
      VpcId: { Ref: "Vpc8378EB38" },
    });
  });
});
