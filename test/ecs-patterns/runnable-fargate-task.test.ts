import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { SecurityGroup, Vpc } from "aws-cdk-lib/aws-ec2";
import {
  AwsLogDriver,
  Cluster,
  ContainerImage,
  FargateTaskDefinition,
} from "aws-cdk-lib/aws-ecs";
import { LogGroup } from "aws-cdk-lib/aws-logs";
import { RunnableFargateTask } from "../../src/ecs-patterns/runnable-fargate-task";

describe("RunnableFargateTask", () => {
  let app: App;
  let stack: Stack;
  let vpc: Vpc;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "Stack");
    vpc = new Vpc(stack, "Vpc", {});
  });

  afterEach(() => {
    // @ts-ignore: TS2322
    app = undefined;
    // @ts-ignore: TS2322
    stack = undefined;
    // @ts-ignore: TS2322
    vpc = undefined;
  });

  test("throws an error if no options specified", () => {
    expect(() => new RunnableFargateTask(stack, "Task", {})).toThrowError({
      name: "Error",
      message: "You must specify one of: taskDefinition or image",
    });
  });

  test("throws an error if both options specified", () => {
    const taskDefinition = new FargateTaskDefinition(stack, "TaskDef", {});
    taskDefinition.addContainer("Foo", {
      image: ContainerImage.fromRegistry("node:16"),
    });
    expect(
      () =>
        new RunnableFargateTask(stack, "Task", {
          taskImageOptions: { image: ContainerImage.fromRegistry("node:16") },
          taskDefinition,
        })
    ).toThrowError({
      name: "Error",
      message:
        "You must specify either a taskDefinition or an image, not both.",
    });
  });

  test("creates a cluster and vpc with no arguments", () => {
    const obj = new RunnableFargateTask(stack, "Task", {
      taskImageOptions: { image: ContainerImage.fromRegistry("node:16") },
    });
    expect(obj.task.cluster).toBeInstanceOf(Cluster);
    expect(obj.task.cluster.vpc).not.toBe(vpc);
    expect(obj.taskDefinition).toBeInstanceOf(FargateTaskDefinition);
    expect(obj.task.connections.securityGroups).toHaveLength(1);
  });

  test("creates a cluster and vpc with a log driver", () => {
    const streamPrefix = "FooBar";
    const logDriver = new AwsLogDriver({ streamPrefix });
    const obj = new RunnableFargateTask(stack, "Task", {
      taskImageOptions: {
        image: ContainerImage.fromRegistry("node:16"),
        logDriver,
      },
    });
    const container = obj.taskDefinition.findContainer("Task")!;
    expect(container.logDriverConfig).toStrictEqual({
      logDriver: "awslogs",
      options: {
        "awslogs-stream-prefix": streamPrefix,
        "awslogs-region": stack.region,
        "awslogs-group": (container.node.findChild("LogGroup") as LogGroup)
          .logGroupName,
      },
    });
    expect(obj.task.cluster).toBeInstanceOf(Cluster);
    expect(obj.task.cluster.vpc).not.toBe(vpc);
    expect(obj.taskDefinition).toBeInstanceOf(FargateTaskDefinition);
    expect(obj.task.connections.securityGroups).toHaveLength(1);
  });

  test("creates a cluster and vpc with no log driver", () => {
    const obj = new RunnableFargateTask(stack, "Task", {
      taskImageOptions: {
        image: ContainerImage.fromRegistry("node:16"),
        enableLogging: false,
        logDriver: undefined,
      },
    });
    const container = obj.taskDefinition.findContainer("Task")!;
    expect(container.logDriverConfig).toBeUndefined();
    expect(container.node.tryFindChild("LogGroup")).toBeUndefined();
    expect(obj.task.cluster).toBeInstanceOf(Cluster);
    expect(obj.task.cluster.vpc).not.toBe(vpc);
    expect(obj.taskDefinition).toBeInstanceOf(FargateTaskDefinition);
    expect(obj.task.connections.securityGroups).toHaveLength(1);
  });

  test("creates a cluster with only vpc", () => {
    const obj = new RunnableFargateTask(stack, "Task", {
      vpc,
      taskImageOptions: { image: ContainerImage.fromRegistry("node:16") },
    });
    expect(obj.task.cluster).toBeInstanceOf(Cluster);
    expect(obj.task.cluster.vpc).toBe(vpc);
    expect(obj.taskDefinition).toBeInstanceOf(FargateTaskDefinition);
    expect(obj.task.connections.securityGroups).toHaveLength(1);
  });

  test("creates a cluster with vpc and security group", () => {
    const securityGroup = new SecurityGroup(stack, "SecurityGroup", { vpc });
    const obj = new RunnableFargateTask(stack, "Task", {
      vpc,
      taskImageOptions: { image: ContainerImage.fromRegistry("node:16") },
      securityGroups: [securityGroup],
    });
    expect(obj.task.cluster).toBeInstanceOf(Cluster);
    expect(obj.task.cluster.vpc).toBe(vpc);
    expect(obj.taskDefinition).toBeInstanceOf(FargateTaskDefinition);
    expect(obj.task.connections.securityGroups).toContain(securityGroup);
  });

  test("synthesizes the template as expected with defaults", () => {
    const containerImage = "node:16";
    new RunnableFargateTask(stack, "Task", {
      vpc,
      taskImageOptions: {
        image: ContainerImage.fromRegistry(containerImage),
      },
    });

    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::ECS::Cluster", 1);
    template.resourceCountIs("AWS::IAM::Role", 2);
    template.resourceCountIs(
      "AWS::ECS::ClusterCapacityProviderAssociations",
      0
    );
    template.resourceCountIs("AWS::Logs::LogGroup", 1);
    template.hasResourceProperties("AWS::ECS::TaskDefinition", {
      ContainerDefinitions: [
        {
          Essential: true,
          Image: containerImage,
          LogConfiguration: {
            LogDriver: "awslogs",
            Options: {
              "awslogs-group": { Ref: "TaskTaskDefTaskLogGroupD023AA3B" },
              "awslogs-stream-prefix": "Task",
              "awslogs-region": { Ref: "AWS::Region" },
            },
          },
          Name: "Task",
        },
      ],
      Cpu: "256",
      ExecutionRoleArn: {
        "Fn::GetAtt": ["TaskTaskDefExecutionRole94172A2F", "Arn"],
      },
      Family: "StackTaskTaskDefC8AC2B6E",
      Memory: "512",
      NetworkMode: "awsvpc",
      RequiresCompatibilities: ["FARGATE"],
      TaskRoleArn: { "Fn::GetAtt": ["TaskTaskDefTaskRole03E0F6BA", "Arn"] },
    });
    template.hasResourceProperties("AWS::IAM::Policy", {
      PolicyDocument: {
        Statement: [
          {
            Action: ["logs:CreateLogStream", "logs:PutLogEvents"],
            Effect: "Allow",
            Resource: {
              "Fn::GetAtt": ["TaskTaskDefTaskLogGroupD023AA3B", "Arn"],
            },
          },
        ],
        Version: "2012-10-17",
      },
      PolicyName: "TaskTaskDefExecutionRoleDefaultPolicyAD6A909B",
      Roles: [{ Ref: "TaskTaskDefExecutionRole94172A2F" }],
    });
    template.hasResourceProperties("AWS::EC2::SecurityGroup", {
      GroupDescription: "Stack/Task/Task/SecurityGroup",
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
    const cluster = new Cluster(stack, "Cluster", {
      vpc,
      enableFargateCapacityProviders: true,
    });
    const taskDefinition = new FargateTaskDefinition(stack, "TaskDef", {});
    const container = "Foo";
    taskDefinition.addContainer(container, {
      image: ContainerImage.fromRegistry("node:16"),
    });
    new RunnableFargateTask(stack, "Task", { vpc, cluster, taskDefinition });

    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::ECS::Cluster", 1);
    template.hasResourceProperties(
      "AWS::ECS::ClusterCapacityProviderAssociations",
      {
        CapacityProviders: ["FARGATE", "FARGATE_SPOT"],
        Cluster: { Ref: "ClusterEB0386A7" },
        DefaultCapacityProviderStrategy: [],
      }
    );
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
      GroupDescription: "Stack/Task/Task/SecurityGroup",
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
