# Core

These are the core constructs and classes of this library.

- `Tier` – A class that represents different deployment tiers (i.e. DTAP)
- `ContextLoader` – A utility that loads context values from a JSON file
- `ContextLoadingStage` – A stage that can load context values from a JSON file
- `DeploymentTierStage` – A stage whose stacks all belong to a single deployment tier

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

## ContextLoader

The `ContextLoader` class has one static method: `loadContext`. It reads a JSON file and sets each of its top-level properties as a context value on a construct node.

```typescript
import { App } from "aws-cdk-lib";
import { ContextLoader } from "shady-island";

const app = new App();
ContextLoader.loadContext("context/production.json", app.node);
app.node.tryGetContext("domainName"); // "example.com"
```

The `loadContext` method throws an error if the file doesn't exist, can't be read, or doesn't contain valid JSON.

Context values are only visible to constructs created _after_ they're set. If you use `ContextLoader` in your own construct, call it before you create any child constructs.

## ContextLoadingStage

The `ContextLoadingStage` construct is a `Stage` that loads context values from a JSON file using `ContextLoader`. You can keep a separate file for each stage and check it into source control.

```typescript
import { App } from "aws-cdk-lib";
import { ContextLoadingStage } from "shady-island";

const app = new App();
const stage = new ContextLoadingStage(app, "Sandbox", {
  contextFile: "context/sandbox.json",
});
```

The `contextFile` property is optional, so you can use this stage the same way as any other `Stage`.

## DeploymentTierStage

The `DeploymentTierStage` construct is a `ContextLoadingStage` whose stacks all belong to one deployment tier. It assigns the tier to itself (see `.assignTo(construct)` above), so `Tier.of` returns that tier for any construct in the stage. It also adds the `DeploymentTier` tag to every construct in the stage using `TierTagger`.

```typescript
import { App, Stack } from "aws-cdk-lib";
import { DeploymentTierStage, Tier } from "shady-island";

const app = new App();
const stage = new DeploymentTierStage(app, "Production", {
  tier: Tier.PRODUCTION,
  contextFile: "context/production.json",
});
const stack = new Stack(stage, "Database");

Tier.of(stack); // Tier.PRODUCTION
stage.inProduction; // true
```

If you don't provide a `stageName`, the stage uses the tier's label. If you don't want the tag added, set `addTag` to `false`.
