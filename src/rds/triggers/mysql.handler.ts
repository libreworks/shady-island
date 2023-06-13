import { Connection, createConnection } from "mysql2/promise";
import { SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
import { fetchSecret, fetchAllSecrets, parseJsonArrayFromEnv } from "./util";
import type { UsernamePassword, DatabaseCredentials } from "./types";

const adminSecretArn = process.env.ADMIN_SECRET_ARN!;
const databaseName = process.env.DATABASE_NAME!;
const characterSet = process.env.DB_CHARACTER_SET! || "utf8mb4";
const collation = process.env.DB_COLLATION;

const secretsManagerClient = new SecretsManagerClient({});
const ownerSecretArns = parseJsonArrayFromEnv("OWNER_SECRETS");
const readerSecretArns = parseJsonArrayFromEnv("READER_SECRETS");

async function createUser(
  connection: Connection,
  user: string,
  password: string
) {
  const escapedPassword = connection.escape(password);
  let createUserSql = `CREATE USER IF NOT EXISTS ${user} IDENTIFIED BY ${escapedPassword}`;
  console.log(`About to create user: ${user}`);
  await connection.execute(createUserSql, [password]);
  console.log(`User created: ${user}`);
}

async function applyGrant(
  connection: Connection,
  user: string,
  privileges: string
) {
  let grantPrivSql = `GRANT ${privileges} ON ${databaseName}.* TO ${user}`;
  console.log(`About to grant privileges to user: ${user}`);
  await connection.execute(grantPrivSql);
  console.log(`Privileges granted: ${privileges} ON ${databaseName}.*`);
}

const handler = async () => {
  const adminSecret: DatabaseCredentials = await fetchSecret(
    adminSecretArn,
    secretsManagerClient
  );
  const connection = await createConnection({
    host: adminSecret.host,
    user: adminSecret.username,
    password: adminSecret.password,
    port: adminSecret.port,
    ssl: "Amazon RDS",
  });

  let createDbSql = `CREATE DATABASE IF NOT EXISTS ${databaseName} CHARACTER SET ${characterSet}`;
  if (collation) {
    createDbSql += ` COLLATE ${collation}`;
  }
  console.log(`About to create database: ${databaseName}`);
  await connection.execute(createDbSql);
  console.log(`Database created: ${databaseName}`);

  const ownerSecrets: UsernamePassword[] = await fetchAllSecrets(
    ownerSecretArns,
    secretsManagerClient
  );
  for (const userSecret of ownerSecrets) {
    const mysqlUser = `'${userSecret.username}'@'%'`;
    await createUser(connection, mysqlUser, userSecret.password);
    await applyGrant(connection, mysqlUser, "ALL PRIVILEGES");
  }

  const readerSecrets: UsernamePassword[] = await fetchAllSecrets(
    readerSecretArns,
    secretsManagerClient
  );
  for (const userSecret of readerSecrets) {
    const mysqlUser = `'${userSecret.username}'@'%'`;
    await createUser(connection, mysqlUser, userSecret.password);
    await applyGrant(connection, mysqlUser, "SELECT, SHOW VIEW");
  }

  let flushSql = "FLUSH PRIVILEGES";
  console.log("About to flush privileges");
  await connection.execute(flushSql);
  console.log("Privileges flushed");

  console.log("About to close the connection");
  await connection.end();
  console.log("Connection closed");
};

module.exports = { handler };
