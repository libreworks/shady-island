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
const tier = new Tier("sandbox", "Sandbox");
```

`Tier` has two methods: `applyTags` and `matches`.

The `applyTags` method adds a new tag to the provided construct: the name is `DeploymentTier`, the value is the tier's label.

```typescript
const app = new App();
const stack = new Stack(app, {});
const tier = Tier.DEVELOPMENT;
tier.applyTags(stack);
```

The `matches` method is used to compare two Tier objects.

```typescript
const tier = Tier.TESTING;
tier.matches(Tier.PRODUCTION); // false
tier.matches(Tier.TESTING); // true
```

The `Tier` class also has a static method: `parse`. You can use this method to determine the corresponding Tier for a given string (see the API documentation for the different values that produce one of the four static properties).

```typescript
// MY_DEPLOYMENT_TIER=live
const tier = Tier.parse(process.env.MY_DEPLOYMENT_TIER);
Tier.PRODUCTION.matches(tier); // true
```
