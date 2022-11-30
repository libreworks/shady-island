# CloudWatch

These constructs relate to CloudWatch Logs.

- `EncryptedLogGroup` – A log group encrypted by a KMS customer managed key with correct IAM permissions

## `EncryptedLogGroup`

You can use the `EncryptedLogGroup` to create both an `AWS::Logs::Group` _and_ an `AWS::KMS::Key` and control the retention settings of both.

```typescript
import { EncryptedLogGroup } from "shady-island/lib/cloudwatch";

const logs = new EncryptedLogGroup(stack, "Logs", {
  logGroupName: "MyLogGroup",
});
// logs.logGroup instanceof LogGroup
// logs.key instanceof IKey
```

You _must_ provide the log group name, as this construct also creates the IAM permissions for the CloudWatch Logs Service Principal (e.g. `logs.us-east-1.amazonaws.com`).
