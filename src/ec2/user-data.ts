import { UserData, LinuxUserDataOptions } from "aws-cdk-lib/aws-ec2";

/**
 * A container for lines of a User Data script, sortable by `priority`.
 */
declare type PrioritizedLines = {
  /**
   * The command lines.
   */
  readonly lines: string[];
  /**
   * The priority for this set of commands.
   */
  readonly priority: number;
};

/**
 * A utility class to assist with composing instance User Data.
 *
 * This class allows multiple observers in code to add lines to the same end
 * result UserData without clobbering each other. Just like `conf.d` directories
 * with priority number prefixes, you can declare the proper execution order of
 * your UserData commands without having to add them in that order.
 */
export abstract class UserDataBuilder {
  /**
   * Returns a user data builder for GNU/Linux operating systems.
   *
   * @param options - The Linux UserData constructor options
   * @returns the new builder object
   */
  public static forLinux(options?: LinuxUserDataOptions): LinuxUserDataBuilder {
    return new LinuxUserDataBuilder(options);
  }

  /**
   * Returns a user data builder for Windows operating systems.
   *
   * @returns the new builder object
   */
  public static forWindows(): WindowsUserDataBuilder {
    return new WindowsUserDataBuilder();
  }

  /**
   * The groups of prioritized command line entries.
   */
  protected readonly lines: PrioritizedLines[] = [];

  /**
   * Add one or more commands to the user data with a priority of `0`.
   *
   * @param commands - The lines to add
   */
  public addCommands(...commands: string[]): void {
    this.lines.push({ priority: 0, lines: commands });
  }

  /**
   * Add one or more commands to the user data at a specific priority.
   *
   * @param priority - The priority of these lines (lower executes earlier)
   * @param commands - The lines to add
   */
  public insertCommands(priority: number, ...commands: string[]): void {
    this.lines.push({ priority, lines: commands });
  }

  /**
   * Produces the User Data script with all lines sorted in priority order.
   *
   * @returns The assembled User Data
   */
  public abstract build(): UserData;
}

/**
 * A User Data builder that targets GNU/Linux operating systems.
 */
class LinuxUserDataBuilder extends UserDataBuilder {
  public constructor(private readonly options: LinuxUserDataOptions = {}) {
    super();
  }

  build(): UserData {
    const lines = [...this.lines];
    lines.sort((a, b) => a.priority - b.priority);
    const userData = UserData.forLinux(this.options);
    userData.addCommands(...lines.map((a) => a.lines).flat());
    return userData;
  }
}

/**
 * A User Data builder that targets Windows operating systems.
 */
class WindowsUserDataBuilder extends UserDataBuilder {
  build(): UserData {
    const lines = [...this.lines];
    lines.sort((a, b) => a.priority - b.priority);
    const userData = UserData.forWindows();
    userData.addCommands(...lines.map((a) => a.lines).flat());
    return userData;
  }
}
