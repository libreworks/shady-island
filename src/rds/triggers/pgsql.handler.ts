import * as https from "https";
// eslint-disable-next-line import/no-extraneous-dependencies
import { SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Catalog,
  DatabaseClient,
  Grant,
  Login,
  Role,
  ServerClient,
} from "@libreworks/db-provision-pgsql";
import type { Handler } from "aws-lambda";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Client, ClientConfig } from "pg";
import type { DatabaseCredentials, UsernamePassword } from "./types";
import { fetchSecret, fetchAllSecrets, parseJsonArrayFromEnv } from "./util";

const adminSecretArn = process.env.ADMIN_SECRET_ARN!;
const ownerSecretArn = process.env.OWNER_SECRET_ARN!;
const databaseName = process.env.DB_NAME!;
const encoding = process.env.DB_ENCODING || "UTF8";
const locale = process.env.DB_LOCALE;
const schemaName = process.env.SCHEMA_NAME;

const secretsManagerClient = new SecretsManagerClient({});
const ownerSecretArns = parseJsonArrayFromEnv("OWNER_SECRETS");
const readerSecretArns = parseJsonArrayFromEnv("READER_SECRETS");
const unprivilegedSecretArns = parseJsonArrayFromEnv("UNPRIVILEGED_SECRETS");

/**
 * Reads an HTTPS resource into a string.
 *
 * We need this function since newer RDS CA certificates aren't in Lambda.
 *
 * @see https://github.com/aws/aws-lambda-base-images/issues/123
 */
function readRemote(
  url: string,
  options?: https.RequestOptions
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    https
      .get(url, options || {}, (res) => {
        const data: Buffer[] = [];
        res.on("data", (d) => data.push(d));
        res.on("end", () => resolve(Buffer.concat(data)));
      })
      .on("error", (e) => reject(e));
  });
}

const handler: Handler = async () => {
  // Here's the first network request:
  // Load the admin secret, needed to create the catalog and its owner.
  const adminSecret: DatabaseCredentials = await fetchSecret(
    adminSecretArn,
    secretsManagerClient
  );

  // Here's the second network request:
  const region = process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION;
  const caBundle = await readRemote(
    process.env.CA_CERTS_URL ||
      `https://truststore.pki.rds.amazonaws.com/${region}/${region}-bundle.pem`
  );

  // First we need to connect to the "postgres" database.
  const clientDefaults: Partial<ClientConfig> = {
    host: adminSecret.host,
    port: adminSecret.port,
    user: adminSecret.username,
    password: adminSecret.password,
    connectionTimeoutMillis: 40000,
    ssl: { ca: caBundle },
  };
  const client = new Client({
    ...clientDefaults,
    database: "postgres",
  });
  const serverClient = new ServerClient(client);

  // Here's our second network request.
  console.log("About to open a connection to database: postgres");
  await client.connect();

  const catalog = new Catalog(databaseName, encoding, locale);

  console.log(`About to create database: ${databaseName}`);
  await serverClient.createDatabase(catalog);
  console.log(`Database created: ${databaseName}`);

  // Here are the next set of network requests:
  // Load all other Secrets Manager secrets in one go.
  const [schemaOwnerSecret, ownerSecrets, readerSecrets, unprivilegedSecrets] =
    await Promise.all([
      fetchSecret<UsernamePassword>(ownerSecretArn, secretsManagerClient),
      fetchAllSecrets<UsernamePassword>(ownerSecretArns, secretsManagerClient),
      fetchAllSecrets<UsernamePassword>(readerSecretArns, secretsManagerClient),
      fetchAllSecrets<UsernamePassword>(
        unprivilegedSecretArns,
        secretsManagerClient
      ),
    ]);

  // Map the secrets to the Logins for the sake of performance.
  const loginMap = new Map<UsernamePassword, Login>();
  // Create a Login object for each secret we have. Store it in the map.
  const loginSecrets = [
    schemaOwnerSecret,
    ...ownerSecrets,
    ...readerSecrets,
    ...unprivilegedSecrets,
  ];
  for (const secret of loginSecrets) {
    const login = new Login(secret.username, secret.password);
    loginMap.set(secret, login);
  }

  // Here are the next set of network requests:
  // Let's do this serially until we determine that we can use Promise.all.
  for (const login of loginMap.values()) {
    console.log(`About to create user: ${login.username}`);
    await serverClient.createRole(login);
    console.log(`User created: ${login.username}`);
  }

  const adminRole = new Role(`${databaseName}_${schemaName}_adm`);
  const readerRole = new Role(`${databaseName}_${schemaName}_ro`);
  // Here is the next network request:
  // Create roles for our admin users and read-only users.
  for (const role of [adminRole, readerRole]) {
    console.log(`About to create role: ${role.name}`);
    await serverClient.createRole(role);
    console.log(`Role created: ${role.name}`);
  }

  const grants: Grant[] = [];
  // Create a Grant object for the schema owner.
  let owner = loginMap.get(schemaOwnerSecret)!;
  grants.push(catalog.grant(owner, "CONNECT", "CREATE", "TEMP"));
  // Create a Grant object for schema admins and all readers.
  for (const secret of [...ownerSecrets, ...readerSecrets]) {
    grants.push(catalog.grant(loginMap.get(secret)!, "CONNECT", "TEMP"));
  }
  // Create a Grant object for the users with no privileges.
  for (const secret of unprivilegedSecrets) {
    grants.push(catalog.grant(loginMap.get(secret)!, "CONNECT"));
  }

  // Here are the next set of network requests:
  // Let's do this serially until we determine that we can use Promise.all
  for (const grant of grants) {
    console.log(`About to grant privileges: ${grant.toSql()}`);
    await serverClient.createGrant(grant);
    console.log("Privileges granted");
  }

  console.log("About to close the connection");
  await client.end();
  console.log("Connection closed");

  const schemaClient = new Client({
    ...clientDefaults,
    user: owner.name,
    password: owner.password,
    database: databaseName,
  });
  const databaseClient = new DatabaseClient(schemaClient);

  // Here is the next network request:
  console.log(`About to open a connection to database: ${databaseName}`);
  await schemaClient.connect();

  // Here is the next network request:
  const schema = catalog.createSchema(schemaName || owner.username, owner);
  console.log(
    `About to create schema: ${schema.name} (if it does not already exist)`
  );
  await schemaClient.query(schema.toSql());
  console.log(`Schema created: ${schema.name}`);
  console.log(`About to alter schema ${schema.name} owner to: ${owner.name}`);
  await schemaClient.query(schema.changeOwner(owner).toSql());
  console.log(`Schema altered: ${schema.name}`);

  const admins = ownerSecrets.map((secret) => loginMap.get(secret)!);
  const readers = readerSecrets.map((secret) => loginMap.get(secret)!);
  // Here are the next set of network requests:
  // Create the grants and default permissions for the owner secrets.
  console.log(`About to create schema grants for admins`);
  await databaseClient.createAdminGrants(schema, adminRole, admins);
  // Create the grants and default permissions for the reader secrets.
  console.log(`About to create schema grants for readers`);
  await databaseClient.createReaderGrants(schema, readerRole, readers);

  console.log("About to close the connection");
  await schemaClient.end();
  console.log("Connection closed");
};

module.exports = { handler };
