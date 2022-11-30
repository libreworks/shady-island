# EC2

These are the constructs and classes of this library that deal with EC2.

- `UserDataBuilder` – A class used to compose UserData where the commands are sorted based on priority order.

## UserDataBuilder

The `UserDataBuilder` class has static methods that create a builder object for either Linux or Windows.

```typescript
const builder = UserDataBuilder.forLinux({ shebang: "#!/bin/bash" });
builder.addCommands("curl https://example.com/");
builder.insertCommands(-5000, "apt update", "apt safe-upgrade");
builder.insertCommands(216, "service php8.1-fpm start");
builder.insertCommands(234, "service nginx start");
const userData: UserData = builder.build();
```

### Use Cases

- An auto scaling group that uses an AMI built by EC2 Image Builder. One component is `php-fpm` which needs to be started before `nginx`. Another component is `td-agent` which needs to start before everything.
- An EFS volume is "hooked up" to an auto scaling group; the volume should be mounted at a specific location, before processes which use that directory.
- We define some networking rules and these rules should be added as `iptables` statements very early in the user data.
