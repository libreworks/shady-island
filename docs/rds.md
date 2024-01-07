# RDS

These constructs relate to Relational Database Service.

- `MysqlDatabase` – An automation construct to create a named database, users, and grants.
- `PostgresqlDatabase` – An automation construct to create a named database, schema, logins, roles, and grants.

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

## `PostgresqlDatabase`

You can use the `PostgresqlDatabase` construct to automatically connect to an RDS cluster or instance and create a named database and schema. You can also register Secrets Manager secrets to be used to create database users.

```typescript
import { DatabaseCluster } from "aws-cdk-lib/aws-rds";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";

declare var cluster: DatabaseCluster;
declare var ownerSecret: ISecret;
declare var writerSecret: ISecret;
declare var readerSecret: ISecret;

const db = MysqlDatabase.forCluster(this, "Database", cluster, {
  databaseName: "example_db",
  schemaName: "foobar",
  ownerSecret,
});
db.addUserAsOwner(writerSecret);
db.addUserAsReader(readerSecret);
```

This provisions a Lambda function and CDK Trigger to connect to the RDS target and execute the following statements:

```sql
--While connected to the "postgres" database
CREATE DATABASE my_database ENCODING 'UTF8';
CREATE USER "${username from ownerSecret}" WITH PASSWORD '${password from ownerSecret}';
CREATE USER "${username from writerSecret}" WITH PASSWORD '${password from writerSecret}';
CREATE USER "${username from readerSecret}" WITH PASSWORD '${password from readerSecret}';
CREATE ROLE example_db_foobar_adm;
CREATE ROLE example_db_foobar_ro;
GRANT CONNECT, TEMP ON DATABASE "my_database" TO "${username from ownerSecret}"
GRANT CONNECT, TEMP ON DATABASE "my_database" TO "${username from writerSecret}"
GRANT CONNECT, TEMP ON DATABASE "my_database" TO "${username from readerSecret}"
--While connected to the "my_database" database
CREATE SCHEMA IF NOT EXISTS "foobar" AUTHORIZATION "${username from ownerSecret}";
ALTER SCHEMA "foobar" OWNER TO "${username from ownerSecret}"
GRANT USAGE ON SCHEMA "foobar" TO "example_db_foobar_adm";
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA "foobar" TO "example_db_foobar_adm";
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA "foobar" TO "example_db_foobar_adm";
ALTER DEFAULT PRIVILEGES FOR USER "${username from ownerSecret}" IN SCHEMA "foobar" GRANT ALL PRIVILEGES ON TABLES TO "example_db_foobar_adm";
ALTER DEFAULT PRIVILEGES FOR USER "${username from ownerSecret}" IN SCHEMA "foobar" GRANT ALL PRIVILEGES ON SEQUENCES TO "example_db_foobar_adm";
GRANT "example_db_foobar_adm" to "${username from writerSecret}";
GRANT USAGE ON SCHEMA "foobar" TO "example_db_foobar_ro";
GRANT SELECT ON ALL TABLES IN SCHEMA "foobar" TO "example_db_foobar_ro";
GRANT SELECT ON ALL SEQUENCES IN SCHEMA "foobar" TO "example_db_foobar_ro";
ALTER DEFAULT PRIVILEGES FOR USER "${username from ownerSecret}" IN SCHEMA "foobar" GRANT SELECT ON TABLES TO "example_db_foobar_ro";
ALTER DEFAULT PRIVILEGES FOR USER "${username from ownerSecret}" IN SCHEMA "foobar" GRANT SELECT ON SEQUENCES TO "example_db_foobar_ro";
GRANT "example_db_foobar_ro" to "${username from readerSecret}";
```
