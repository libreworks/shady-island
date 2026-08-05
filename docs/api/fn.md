# `fn` Submodule <a name="`fn` Submodule" id="shady-island.fn"></a>


## Structs <a name="Structs" id="Structs"></a>

### PowertoolsLayerOptions <a name="PowertoolsLayerOptions" id="shady-island.fn.PowertoolsLayerOptions"></a>

Options for calling the PowertoolsLayer methods.

#### Initializer <a name="Initializer" id="shady-island.fn.PowertoolsLayerOptions.Initializer"></a>

```typescript
import { fn } from 'shady-island'

const powertoolsLayerOptions: fn.PowertoolsLayerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.fn.PowertoolsLayerOptions.property.layerVersion">layerVersion</a></code> | <code>number</code> | The version of the Lambda Layer desired. |
| <code><a href="#shady-island.fn.PowertoolsLayerOptions.property.version">version</a></code> | <code>string</code> | The version of Powertools desired. |

---

##### `layerVersion`<sup>Optional</sup> <a name="layerVersion" id="shady-island.fn.PowertoolsLayerOptions.property.layerVersion"></a>

```typescript
public readonly layerVersion: number;
```

- *Type:* number

The version of the Lambda Layer desired.

Overrides {@link version}.

---

##### `version`<sup>Optional</sup> <a name="version" id="shady-island.fn.PowertoolsLayerOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "latest"

The version of Powertools desired.

Ignored if you specify layerVersion.

---

### PowertoolsPythonOptions <a name="PowertoolsPythonOptions" id="shady-island.fn.PowertoolsPythonOptions"></a>

Options for calling the PowertoolsLayer.forPythonV3 method.

#### Initializer <a name="Initializer" id="shady-island.fn.PowertoolsPythonOptions.Initializer"></a>

```typescript
import { fn } from 'shady-island'

const powertoolsPythonOptions: fn.PowertoolsPythonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.fn.PowertoolsPythonOptions.property.layerVersion">layerVersion</a></code> | <code>number</code> | The version of the Lambda Layer desired. |
| <code><a href="#shady-island.fn.PowertoolsPythonOptions.property.version">version</a></code> | <code>string</code> | The version of Powertools desired. |
| <code><a href="#shady-island.fn.PowertoolsPythonOptions.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | The Python version (e.g. 3.10, 3.14). |
| <code><a href="#shady-island.fn.PowertoolsPythonOptions.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The CPU architecture for the Lambda function. |

---

##### `layerVersion`<sup>Optional</sup> <a name="layerVersion" id="shady-island.fn.PowertoolsPythonOptions.property.layerVersion"></a>

```typescript
public readonly layerVersion: number;
```

- *Type:* number

The version of the Lambda Layer desired.

Overrides {@link version}.

---

##### `version`<sup>Optional</sup> <a name="version" id="shady-island.fn.PowertoolsPythonOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "latest"

The version of Powertools desired.

Ignored if you specify layerVersion.

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="shady-island.fn.PowertoolsPythonOptions.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

The Python version (e.g. 3.10, 3.14).

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="shady-island.fn.PowertoolsPythonOptions.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The CPU architecture for the Lambda function.

---

### PowertoolsTypeScriptOptions <a name="PowertoolsTypeScriptOptions" id="shady-island.fn.PowertoolsTypeScriptOptions"></a>

Options for calling the PowertoolsLayer.forTypeScriptV2 method.

#### Initializer <a name="Initializer" id="shady-island.fn.PowertoolsTypeScriptOptions.Initializer"></a>

```typescript
import { fn } from 'shady-island'

const powertoolsTypeScriptOptions: fn.PowertoolsTypeScriptOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#shady-island.fn.PowertoolsTypeScriptOptions.property.layerVersion">layerVersion</a></code> | <code>number</code> | The version of the Lambda Layer desired. |
| <code><a href="#shady-island.fn.PowertoolsTypeScriptOptions.property.version">version</a></code> | <code>string</code> | The version of Powertools desired. |

---

##### `layerVersion`<sup>Optional</sup> <a name="layerVersion" id="shady-island.fn.PowertoolsTypeScriptOptions.property.layerVersion"></a>

```typescript
public readonly layerVersion: number;
```

- *Type:* number

The version of the Lambda Layer desired.

Overrides {@link version}.

---

##### `version`<sup>Optional</sup> <a name="version" id="shady-island.fn.PowertoolsTypeScriptOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "latest"

The version of Powertools desired.

Ignored if you specify layerVersion.

---

## Classes <a name="Classes" id="Classes"></a>

### PowertoolsLayer <a name="PowertoolsLayer" id="shady-island.fn.PowertoolsLayer"></a>

Provides Lambda Layers for Powertools.

```typescript
PowertoolsLayer.forTypeScriptV2(scope);
PowertoolsLayer.forTypeScriptV2(scope, { version: "2.34.0" });
PowertoolsLayer.forTypeScriptV2(scope, { layerVersion: 49 });

PowertoolsLayer.forPythonV3(scope, { pythonVersion: "3.14" });
PowertoolsLayer.forPythonV3(scope, { pythonVersion: "3.14", architecture: Architecture.ARM_64 });
PowertoolsLayer.forPythonV3(scope, { pythonVersion: "3.14", version: "3.31.1" });
PowertoolsLayer.forPythonV3(scope, { pythonVersion: "3.14", layerVersion: 36 });
```

#### Initializers <a name="Initializers" id="shady-island.fn.PowertoolsLayer.Initializer"></a>

```typescript
import { fn } from 'shady-island'

new fn.PowertoolsLayer()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#shady-island.fn.PowertoolsLayer.forPythonV3">forPythonV3</a></code> | Get the Lambda Layer for Python V3. |
| <code><a href="#shady-island.fn.PowertoolsLayer.forTypeScriptV2">forTypeScriptV2</a></code> | Get the Lambda Layer for TypeScript V2. |

---

##### `forPythonV3` <a name="forPythonV3" id="shady-island.fn.PowertoolsLayer.forPythonV3"></a>

```typescript
import { fn } from 'shady-island'

fn.PowertoolsLayer.forPythonV3(scope: Construct, options: PowertoolsPythonOptions)
```

Get the Lambda Layer for Python V3.

If you supply neither "version" nor "layerVersion", the latest possible
version of the Layer is returned by looking it up in SSM Parameter Store.

If you supply the "version" option, the Layer is returned by looking it up
in SSM Parameter Store.

If you supply the "layerVersion" option, SSM is not involved.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.fn.PowertoolsLayer.forPythonV3.parameter.scope"></a>

- *Type:* constructs.Construct

The parent scope.

---

###### `options`<sup>Required</sup> <a name="options" id="shady-island.fn.PowertoolsLayer.forPythonV3.parameter.options"></a>

- *Type:* <a href="#shady-island.fn.PowertoolsPythonOptions">PowertoolsPythonOptions</a>

The configuration options.

---

##### `forTypeScriptV2` <a name="forTypeScriptV2" id="shady-island.fn.PowertoolsLayer.forTypeScriptV2"></a>

```typescript
import { fn } from 'shady-island'

fn.PowertoolsLayer.forTypeScriptV2(scope: Construct, options?: PowertoolsTypeScriptOptions)
```

Get the Lambda Layer for TypeScript V2.

If you supply neither "version" nor "layerVersion", the latest possible
version of the Layer is returned by looking it up in SSM Parameter Store.

If you supply the "version" option, the Layer is returned by looking it up
in SSM Parameter Store.

If you supply the "layerVersion" option, SSM is not involved.

###### `scope`<sup>Required</sup> <a name="scope" id="shady-island.fn.PowertoolsLayer.forTypeScriptV2.parameter.scope"></a>

- *Type:* constructs.Construct

The parent scope.

---

###### `options`<sup>Optional</sup> <a name="options" id="shady-island.fn.PowertoolsLayer.forTypeScriptV2.parameter.options"></a>

- *Type:* <a href="#shady-island.fn.PowertoolsTypeScriptOptions">PowertoolsTypeScriptOptions</a>

The configuration options.

---




