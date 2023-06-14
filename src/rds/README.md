# shady-island/rds

You can use the `MysqlDatabase` construct to automatically connect to an RDS cluster or instance and create a named database. You can also register Secrets Manager secrets to be used to create database users.

```typescript
import { DatabaseCluster } from "aws-cdk-lib/aws-rds";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";

declare var cluster: DatabaseCluster;
declare var ownerSecret: ISecret;
declare var readerSecret: ISecret;

const db = MysqlDatabase.forCluster(this, "Database", cluster, {
  databaseName: "example_db",
});
db.addUserAsOwner(ownerSecret);
db.addUserAsReader(readerSecret);
```

This provisions a Lambda function and CDK Trigger to connect to the RDS target and execute the following statements:

```sql
CREATE DATABASE IF NOT EXISTS example_db CHARACTER SET utf8mb4;
CREATE USER IF NOT EXISTS '${username from ownerSecret}'@'%' IDENTIFIED BY ${password from ownerSecret};
GRANT ALL PRIVILEGES ON example_db.* TO '${username from ownerSecret}'@'%';
CREATE USER IF NOT EXISTS '${username from readerSecret}'@'%' IDENTIFIED BY ${password from readerSecret};
GRANT SELECT, SHOW VIEW ON example_db.* TO '${username from ownerSecret}'@'%';
FLUSH PRIVILEGES;
```
