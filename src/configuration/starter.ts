import { Lazy } from "aws-cdk-lib";
import type { AutoScalingGroup } from "aws-cdk-lib/aws-autoscaling";
import {
  IConnectable,
  Instance,
  LaunchTemplate,
  UserData,
} from "aws-cdk-lib/aws-ec2";
import { IGrantable } from "aws-cdk-lib/aws-iam";

/**
 * Any construct that produces zero or more EC2 instances.
 *
 * This could be an Auto-Scaling Group, a Launch Template, or an Instance.
 */
interface IStartable extends IConnectable, IGrantable {
  /**
   * The user data for the launched EC2 instances.
   */
  readonly userData?: UserData;
}

/**
 * A portion of a User Data script with a numeric `priority`.
 */
interface StarterScript {
  /**
   * The command lines.
   */
  readonly lines: string[];

  /**
   * The priority for this set of commands.
   */
  readonly priority: number;
}

/**
 * A component involved in the startup process of an EC2 instance.
 */
export interface IStarterAddOn {
  /**
   * Any configuration or customization of the virtual machine takes place here.
   *
   * @param starter - The starter that can be configured.
   * @returns The scripts to include in the user data
   */
  configure(starter: Starter): void;
}

/**
 * Orchestrates the startup process of EC2 instances.
 *
 * A `Starter` is a registry for add-ons. Each add-on can add permissions to the
 * role, network rules to the security group, or scripts to the user data.
 *
 * Scripts are prioritized, so add-ons can be registered out of order but their
 * scripts will appear in the user data in order of priority.
 */
export class Starter implements IConnectable, IGrantable {
  /**
   * Create a Starter for an auto-scaling group.
   *
   * @param group - The auto-scaling group
   * @returns a new Starter
   */
  public static forAutoScalingGroup(group: AutoScalingGroup): Starter {
    return new Starter(group);
  }

  /**
   * Create a Starter for a Launch Template.
   *
   * The launch template _must_ have a defined user data property, or this
   * method will throw an error.
   *
   * @param template - The launch template
   * @returns a new Starter
   * @throws Error if the Launch Template user data is undefined
   */
  public static forLaunchTemplate(template: LaunchTemplate): Starter {
    if (!template.userData) {
      throw new Error("You must supply a Launch Template with user data");
    }
    return new Starter(template);
  }

  /**
   * Create a Starter for a single EC2 instance3
   *
   * @param instance - The instance
   * @returns a new Starter
   */
  public static forInstance(instance: Instance): Starter {
    return new Starter(instance);
  }

  readonly #startable: IStartable;
  readonly #lines: StarterScript[] = [];
  #registered: boolean = false;

  /**
   * @ignore
   */
  private constructor(startable: IStartable) {
    this.#startable = startable;
  }

  /**
   * @ignore
   */
  private registerUserData() {
    if (this.#registered) {
      return;
    }
    this.#startable.userData!.addCommands(
      Lazy.string({ produce: () => this.orderedLines.join("\n") })
    );
    this.#registered = true;
  }

  public get grantPrincipal() {
    return this.#startable.grantPrincipal;
  }

  public get connections() {
    return this.#startable.connections;
  }

  /**
   * All lines of the startup script in priority order.
   */
  public get orderedLines(): string[] {
    const lines = [...this.#lines];
    lines.sort((a, b) => a.priority - b.priority);
    return lines.map((a) => a.lines).flat();
  }

  /**
   * Add one or more commands to the user data at a specific priority.
   *
   * @param priority - The priority of these lines (lower executes earlier)
   * @param commands - The lines to add
   * @returns provides a fluent interface
   */
  public addScript(priority: number, ...commands: string[]): Starter {
    this.registerUserData();
    this.#lines.push({ priority, lines: commands });
    return this;
  }

  /**
   * Register add-ons with this Starter.
   *
   * @param addons - The add-ons to register
   * @returns provides a fluent interface
   */
  public withAddOns(...addons: IStarterAddOn[]): Starter {
    for (const addon of addons) {
      addon.configure(this);
    }
    return this;
  }
}
