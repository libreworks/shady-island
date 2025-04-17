import * as https from "https";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

export function parseJsonArrayFromEnv(variableName: string): string[] {
  if (!Object.keys(process.env).includes(variableName)) {
    return [];
  }
  const hydrated = JSON.parse(process.env[variableName]!);
  if (!Array.isArray(hydrated)) {
    throw new Error(
      `The ${variableName} environment variable must be a JSON array`
    );
  }
  return hydrated;
}

export async function fetchSecret<T = Record<string, any>>(
  arn: string,
  client: SecretsManagerClient
): Promise<T> {
  console.log(`Requesting decoded secret from Secrets Manager: ${arn}`);
  const output = await client.send(
    new GetSecretValueCommand({ SecretId: arn })
  );
  return output.SecretString ? JSON.parse(output.SecretString) : ({} as T);
}

export async function fetchAllSecrets<T = Record<string, any>>(
  arns: string[],
  client: SecretsManagerClient
): Promise<T[]> {
  if (arns.length === 0) {
    return [];
  }
  return Promise.all(arns.map((a) => fetchSecret<T>(a, client)));
}

/**
 * Reads an HTTPS resource into a string.
 *
 * We need this function since newer RDS CA certificates aren't in Lambda.
 *
 * @see https://github.com/aws/aws-lambda-base-images/issues/123
 */
export function readRemote(
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
