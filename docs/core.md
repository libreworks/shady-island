# Core

These are the core constructs and classes of this library.

- `Tier` – A class that represents different deployment tiers (i.e. DTAP)
- `Workload` – A construct meant to serve as the container for stacks; it can load context values from a JSON file

## Tier

The `Tier` class is a glorified enum. It represents the deployment tier of a workload.

`Tier` has four static properties: `DEVELOPMENT`, `TESTING`, `ACCEPTANCE`, and `PRODUCTION`. Each is an instance of `Tier`.

`Tier` has two properties: an `id` and a `label`. For instance, `dev` and `Development`.

You can create any arbitrary tier you like, using the constructor.

```typescript
import { Tier } from "shady-island";

const tier = new Tier("sandbox", "Sandbox");
```

`Tier` has three instance methods: `applyTags`, `assignTo`, and `matches`.

### `.applyTags(construct)`

The `applyTags` method adds a new tag to the provided construct: the name is `DeploymentTier`, the value is the tier's label.

```typescript
import { App, Stack } from "aws-cdk-lib";
import { Tier } from "shady-island";

const app = new App();
const stack = new Stack(app, {});
const tier = Tier.DEVELOPMENT;
tier.applyTags(stack);
```

### `.assignTo(construct)` and `.of(construct)`

The `assignTo` method associates a tier with the provided construct and all its descendants. The static `of` method is used to retrieve a construct's tier.

```typescript
import { App, Stack } from "aws-cdk-lib";
import { Topic } from "aws-cdk-lib/aws-sns";
import { Tier } from "shady-island";

const app = new App();
const stack = new Stack(app, {});
const topic = new Topic(stack, {});
const tier = Tier.PRODUCTION;
tier.assignTo(stack);
Tier.of(app); // undefined
Tier.of(stack); // Tier.PRODUCTION
Tier.of(topic); // Tier.PRODUCTION
```

Assigning a different tier to a construct beneath a construct with a defined tier will register an error annotation and prevent the stack from being deployed.

### `.matches()`

The `matches` method is used to compare two Tier objects.

```typescript
import { Tier } from "shady-island";

const tier = Tier.TESTING;
tier.matches(Tier.PRODUCTION); // false
tier.matches(Tier.TESTING); // true
```

### `.parse(string)`

The `Tier` class also has a static method: `parse`. You can use this method to determine the corresponding Tier for a given string (see the API documentation for the different values that produce one of the four static properties).

```typescript
import { Tier } from "shady-island";

// MY_DEPLOYMENT_TIER=live
const tier = Tier.parse(process.env.MY_DEPLOYMENT_TIER);
Tier.PRODUCTION.matches(tier); // true
```
