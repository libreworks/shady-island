import { App, Duration, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import {
  Cluster,
  ContainerImage,
  FargateTaskDefinition,
} from "aws-cdk-lib/aws-ecs";
import { Rule, Schedule } from "aws-cdk-lib/aws-events";
import { EcsTask } from "aws-cdk-lib/aws-events-targets";
import {
  Role,
  AccountRootPrincipal,
  Grant,
  PolicyStatement,
} from "aws-cdk-lib/aws-iam";
import { DefinitionBody, StateMachine } from "aws-cdk-lib/aws-stepfunctions";
import { EcsRunTask } from "aws-cdk-lib/aws-stepfunctions-tasks";
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

  describe("#constructor", () => {
    test("behaves as expected with defaults", () => {
      const obj = new FargateTask(stack, "Task", { cluster, taskDefinition });
      expect(obj.awsVpcNetworkConfig).toStrictEqual({
        assignPublicIp: "DISABLED",
        securityGroups: obj.connections.securityGroups.map(
          (sg) => sg.securityGroupId
        ),
        subnets: obj.cluster.vpc.privateSubnets.map((sn) => sn.subnetId),
      });
    });

    test("behaves as expected with partial parameters", () => {
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

    test("behaves as expected with specified parameters", () => {
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

    test("synthesizes the template as expected with defaults", () => {
      new FargateTask(stack, "Task", { cluster, taskDefinition });

      const template = Template.fromStack(stack);

      template.resourceCountIs("AWS::IAM::Role", 1);
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

  describe("#grantRun", () => {
    test("behaves as expected", () => {
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
  });

  describe("#createRuleTarget", () => {
    test("behaves as expected", () => {
      const obj = new FargateTask(stack, "Task", { cluster, taskDefinition });
      const def = taskDefinition.addContainer("job", {
        image: ContainerImage.fromRegistry("node:20"),
      });
      const taskCount = 1;

      const actual = obj.createRuleTarget({
        taskCount,
        containerOverrides: [
          {
            containerName: def.containerName,
            environment: [{ name: "FOO", value: "BAR" }],
          },
        ],
      });

      expect(actual).toBeInstanceOf(EcsTask);
      obj.connections.securityGroups.forEach((sg) =>
        expect(actual.securityGroups).toContain(sg)
      );
    });

    test("synthesizes as expected", () => {
      const obj = new FargateTask(stack, "Task", { cluster, taskDefinition });
      const def = taskDefinition.addContainer("job", {
        image: ContainerImage.fromRegistry("node:20"),
      });
      const taskCount = 1;

      const actual = obj.createRuleTarget({
        taskCount,
        containerOverrides: [
          {
            containerName: def.containerName,
            environment: [{ name: "FOO", value: "BAR" }],
          },
        ],
      });
      new Rule(stack, "Rule", {
        schedule: Schedule.rate(Duration.minutes(30)),
        targets: [actual],
      });

      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::Events::Rule", {
        Targets: [
          {
            Arn: { "Fn::GetAtt": ["ClusterEB0386A7", "Arn"] },
            EcsParameters: {
              LaunchType: "FARGATE",
              NetworkConfiguration: {
                AwsVpcConfiguration: {
                  AssignPublicIp: "DISABLED",
                  SecurityGroups: [
                    { "Fn::GetAtt": ["TaskSecurityGroup7A9820DB", "GroupId"] },
                  ],
                  Subnets: [
                    { Ref: "VpcPrivateSubnet1Subnet536B997A" },
                    { Ref: "VpcPrivateSubnet2Subnet3788AAA1" },
                  ],
                },
              },
              PlatformVersion: "LATEST",
              TaskCount: taskCount,
              TaskDefinitionArn: { Ref: "TaskDef54694570" },
            },
            Input:
              '{"containerOverrides":[{"name":"' +
              def.containerName +
              '","environment":[{"name":"FOO","value":"BAR"}]}]}',
          },
        ],
      });
    });
  });

  describe("#createStateMachineTask", () => {
    test("behaves as expected", () => {
      const obj = new FargateTask(stack, "Task", { cluster, taskDefinition });
      const def = taskDefinition.addContainer("job", {
        image: ContainerImage.fromRegistry("node:20"),
      });

      const id = "Run";
      const actual = obj.createStateMachineTask(id, {
        containerOverrides: [
          {
            containerDefinition: def,
            environment: [{ name: "FOO", value: "BAR" }],
          },
        ],
      });

      expect(actual).toBeInstanceOf(EcsRunTask);
      obj.connections.securityGroups.forEach((sg) =>
        expect(actual.connections.securityGroups).toContain(sg)
      );
    });

    test("synthesizes the template as expected", () => {
      const obj = new FargateTask(stack, "Task", { cluster, taskDefinition });
      const def = taskDefinition.addContainer("job", {
        image: ContainerImage.fromRegistry("node:20"),
      });

      const id = "Run";
      const actual = obj.createStateMachineTask(id, {
        containerOverrides: [
          {
            containerDefinition: def,
            environment: [{ name: "FOO", value: "BAR" }],
          },
        ],
      });
      new StateMachine(stack, "StateMachine", {
        definitionBody: DefinitionBody.fromChainable(actual),
        timeout: Duration.hours(1),
      });

      const template = Template.fromStack(stack);

      template.hasResourceProperties("AWS::StepFunctions::StateMachine", {
        DefinitionString: {
          "Fn::Join": [
            "",
            [
              '{"StartAt":"' +
                id +
                '","States":{"' +
                id +
                '":{"End":true,"Type":"Task","Resource":"arn:',
              { Ref: "AWS::Partition" },
              ':states:::ecs:runTask","Parameters":{"Cluster":"',
              { "Fn::GetAtt": ["ClusterEB0386A7", "Arn"] },
              '","TaskDefinition":"StackTaskDefF0726FA9","NetworkConfiguration":{"AwsvpcConfiguration":{"Subnets":["',
              { Ref: "VpcPrivateSubnet1Subnet536B997A" },
              '","',
              { Ref: "VpcPrivateSubnet2Subnet3788AAA1" },
              '"],"SecurityGroups":["',
              {
                "Fn::GetAtt": ["TaskSecurityGroup7A9820DB", "GroupId"],
              },
              '"]}},"Overrides":{"ContainerOverrides":[{"Name":"' +
                def.containerName +
                '","Environment":[{"Name":"FOO","Value":"BAR"}]}]},"LaunchType":"FARGATE","PlatformVersion":"LATEST"}}},"TimeoutSeconds":3600}',
            ],
          ],
        },
        RoleArn: { "Fn::GetAtt": ["StateMachineRoleB840431D", "Arn"] },
      });
    });
  });
});
