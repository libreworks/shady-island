import { Address } from "../../src/networking/address";

describe("Address", () => {
  describe("#anyIpv4", () => {
    test("works as expected", () => {
      const obj = Address.anyIpv4();
      expect(obj.isAny()).toBeTruthy();
      expect(obj.isIpv4()).toBeTruthy();
      expect(obj.isIpv6()).toBeFalsy();
      expect(obj.toString()).toStrictEqual("0.0.0.0/0");
    });
  });

  describe("#anyIpv6", () => {
    test("works as expected", () => {
      const obj = Address.anyIpv6();
      expect(obj.isAny()).toBeTruthy();
      expect(obj.isIpv4()).toBeFalsy();
      expect(obj.isIpv6()).toBeTruthy();
      expect(obj.toString()).toStrictEqual("::/0");
    });
  });

  describe("#ipv4", () => {
    test("works as expected without netmask", () => {
      const obj = Address.ipv4("192.168.1.2");
      expect(obj.isAny()).toBeFalsy();
      expect(obj.isIpv4()).toBeTruthy();
      expect(obj.isIpv6()).toBeFalsy();
      expect(obj.toString()).toStrictEqual("192.168.1.2");
    });

    test("works as expected with netmask", () => {
      const obj = Address.ipv4("192.168.1.2/32");
      expect(obj.isAny()).toBeFalsy();
      expect(obj.isIpv4()).toBeTruthy();
      expect(obj.isIpv6()).toBeFalsy();
      expect(obj.toString()).toStrictEqual("192.168.1.2/32");
    });

    test.each(["192.168.1", "foobar"])(
      "throws error for invalid address %p",
      (address: string) => {
        expect(() => {
          Address.ipv4(address);
        }).toThrow({
          name: "Error",
          message: `Invalid IPv4 address: "${address}"`,
        });
      }
    );

    test.each(["foobar", "0", "33"])(
      "throws error for invalid netmask %p",
      (netmask: string) => {
        expect(() => {
          Address.ipv4(`10.13.2.5/${netmask}`);
        }).toThrow({
          name: "Error",
          message: `Invalid IPv4 netmask: "/${netmask}"`,
        });
      }
    );
  });

  describe("#ipv6", () => {
    test("works as expected without netmask", () => {
      const address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";
      const obj = Address.ipv6(address);
      expect(obj.isAny()).toBeFalsy();
      expect(obj.isIpv4()).toBeFalsy();
      expect(obj.isIpv6()).toBeTruthy();
      expect(obj.toString()).toStrictEqual(address);
    });

    test("works as expected with netmask", () => {
      const address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334/128";
      const obj = Address.ipv6(address);
      expect(obj.isAny()).toBeFalsy();
      expect(obj.isIpv4()).toBeFalsy();
      expect(obj.isIpv6()).toBeTruthy();
      expect(obj.toString()).toStrictEqual(address);
    });

    test.each(["192.168.1.2", "foobar"])(
      "throws error for invalid address %p",
      (address: string) => {
        expect(() => {
          Address.ipv6(address);
        }).toThrow({
          name: "Error",
          message: `Invalid IPv6 address: "${address}"`,
        });
      }
    );

    test.each(["foobar", "0", "129"])(
      "throws error for invalid netmask %p",
      (netmask: string) => {
        expect(() => {
          Address.ipv6(`2001:0db8:85a3:0000:0000:8a2e:0370:7334/${netmask}`);
        }).toThrow({
          name: "Error",
          message: `Invalid IPv6 prefix length: "/${netmask}"`,
        });
      }
    );
  });
});
