import { isIPv4, isIPv6 } from "node:net";
import { Token } from "aws-cdk-lib";

function validateNetMask(mask?: string) {
  if (!mask) {
    return;
  }
  const netmask = parseInt(mask);
  if (isNaN(netmask) || netmask < 1 || netmask > 32) {
    throw new Error(`Invalid IPv4 netmask: "/${mask}"`);
  }
}

function validatePrefixLength(prefixLength?: string) {
  if (!prefixLength) {
    return;
  }
  const netmask = parseInt(prefixLength);
  if (isNaN(netmask) || netmask < 1 || netmask > 128) {
    throw new Error(`Invalid IPv6 prefix length: "/${prefixLength}"`);
  }
}

const ANY_IPV4 = "0.0.0.0/0";
const ANY_IPV6 = "::/0";

/**
 * An IPv4 or IPv6 address (or range of addresses).
 */
export class Address {
  /**
   * Creates an address that represents the entire IPv4 addressing space.
   *
   * @returns The IPv4 network address
   */
  public static anyIpv4() {
    return new Address(ANY_IPV4, 4);
  }

  /**
   * Creates an address that represents the entire IPv4 addressing space.
   *
   * @returns The IPv4 network address
   */
  public static anyIpv6() {
    return new Address(ANY_IPV6, 6);
  }

  /**
   * Creates an IPv4 network address (either a single address or a range).
   *
   * @param address - The IP address (with optional netmask).
   * @returns The IPv4 network address
   */
  public static ipv4(address: string) {
    if (!Token.isUnresolved(address)) {
      const [adr, netMask] = address.split("/", 2);
      if (!isIPv4(adr)) {
        throw new Error(`Invalid IPv4 address: "${adr}"`);
      }
      validateNetMask(netMask);
    }
    return new Address(address, 4);
  }

  /**
   * Creates an IPv6 network address (either a single address or a range).
   *
   * @param address - The IP address (with optional prefix length).
   * @returns The IPv6 network address
   */
  public static ipv6(address: string) {
    if (!Token.isUnresolved(address)) {
      const [adr, prefixLength] = address.split("/", 2);
      if (!isIPv6(adr)) {
        throw new Error(`Invalid IPv6 address: "${adr}"`);
      }
      validatePrefixLength(prefixLength);
    }
    return new Address(address, 6);
  }

  readonly #address;
  readonly #version;

  /**
   * @ignore
   */
  private constructor(address: string, version: number) {
    this.#address = address;
    this.#version = version;
  }

  /**
   * Whether this address is an IPv4 address.
   *
   * @returns True if this is an IPv4 address
   */
  public isIpv4(): boolean {
    return this.#version === 4;
  }

  /**
   * Whether this address is an IPv6 address.
   *
   * @returns True if this is an IPv6 address
   */
  public isIpv6(): boolean {
    return this.#version === 6;
  }

  /**
   * Whether this address represents everything in the addressing space.
   *
   * @returns True if this address represents all addresses
   */
  public isAny(): boolean {
    if (this.#version === 6) {
      return this.#address === ANY_IPV6;
    }
    return this.#address === ANY_IPV4;
  }

  public toString(): string {
    return this.#address;
  }
}
