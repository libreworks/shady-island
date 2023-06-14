# RDS

These constructs relate to Elastic File System.

- `MysqlDatabase` – An automation construct to create a named database, users, and grants.

## `MysqlDatabase`

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

There are static methods for all of the existing RDS constructs that produce an `Endpoint`.

The admin secret is expected to contain a JSON body in line with [Secrets Manager secrets for RDS databases](https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html).
