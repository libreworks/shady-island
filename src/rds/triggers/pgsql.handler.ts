import { SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
import { Client } from "pg";
import { fetchSecret } from "./util";
import type { DatabaseCredentials } from "./types";

const adminSecretArn = process.env.ADMIN_SECRET_ARN!;
const databaseName = process.env.DATABASE_NAME!;

const secretsManagerClient = new SecretsManagerClient({});

const handler = async () => {
  const adminSecret: DatabaseCredentials = await fetchSecret(
    adminSecretArn,
    secretsManagerClient
  );
  const client = new Client({
    host: adminSecret.host,
    port: adminSecret.port,
    user: adminSecret.username,
    password: adminSecret.password,
    database: databaseName,
    ssl: true,
  });
  await client.connect();

  console.log("About to close the connection");
  await client.end();
  console.log("Connection closed");
};

module.exports = { handler };