import { UserDataBuilder } from "../../src/ec2/user-data";
describe("UserDataBuilder", () => {
  describe("#forLinux", () => {
    test("works as expected", () => {
      const obj = UserDataBuilder.forLinux();
      obj.addCommands("echo hello", "echo world");
      obj.insertCommands(-100, "date", "uptime");
      obj.insertCommands(200, "free -m");
      obj.insertCommands(200, "df -h");
      const userData = obj.build();
      expect(userData.render()).toBe(
        [
          "#!/bin/bash",
          "date",
          "uptime",
          "echo hello",
          "echo world",
          "free -m",
          "df -h",
        ].join("\n")
      );
    });
    test("works as expected with custom shebang", () => {
      const obj = UserDataBuilder.forLinux({ shebang: "#!/bin/bash" });
      obj.addCommands("echo hello", "echo world");
      obj.insertCommands(-100, "date", "uptime");
      obj.insertCommands(200, "free -m");
      obj.insertCommands(200, "df -h");
      const userData = obj.build();
      expect(userData.render()).toBe(
        [
          "#!/bin/bash",
          "date",
          "uptime",
          "echo hello",
          "echo world",
          "free -m",
          "df -h",
        ].join("\n")
      );
    });
  });
  describe("#forWindows", () => {
    test("works as expected", () => {
      const obj = UserDataBuilder.forWindows();
      obj.addCommands("Write-Host hello", "Write-Host world");
      obj.insertCommands(-123456, "cd");
      obj.insertCommands(399, "Get-ChildItems -Path .");
      const userData = obj.build();
      expect(userData.render()).toBe(
        "<powershell>" +
          [
            "cd",
            "Write-Host hello",
            "Write-Host world",
            "Get-ChildItems -Path .",
          ].join("\n") +
          "</powershell>"
      );
    });
  });
});
