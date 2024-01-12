import * as fs from "fs";
import { Node } from "constructs";

/**
 * A utility to load context values into a construct node.
 *
 * If you want to use this utility in your own construct, make sure to invoke it
 * before you create any child constructs.
 */
export class ContextLoader {
  /**
   * Parses JSON file contents, then provides the values to a Node's context.
   *
   * @param filename - The JSON file with an object to use as context values.
   * @param node - The constructs node to receive the context values.
   */
  public static loadContext(filename: string, node: Node) {
    try {
      fs.accessSync(filename, fs.constants.F_OK);
    } catch (err) {
      throw new Error(`Context file does not exist: ${filename}`);
    }
    try {
      fs.accessSync(filename, fs.constants.R_OK);
    } catch (err) {
      throw new Error(`Context file is not readable: ${filename}`);
    }

    const data = fs.readFileSync(filename, { encoding: "utf8" });

    let defaults = {};
    try {
      defaults = JSON.parse(data);
    } catch (e) {
      throw new Error(`Context file contains invalid JSON syntax: ${filename}`);
    }

    for (const [k, v] of Object.entries(defaults)) {
      node.setContext(k, v);
    }
  }
}
