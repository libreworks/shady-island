// eslint-disable-next-line import/no-extraneous-dependencies
import {
  LambdaClient,
  UpdateFunctionCodeCommand,
} from "@aws-sdk/client-lambda";
import type { S3Event } from "aws-lambda";

const client = new LambdaClient({});

export async function handler(event: S3Event) {
  const [eventRecord] = event.Records;
  const s3Data = eventRecord.s3;
  const bucketName = s3Data.bucket.name;
  const objectKey = s3Data.object.key;
  const version = s3Data.object.versionId;

  console.log(
    `Event received: s3://${bucketName}/${objectKey}?versionId=${version}`
  );

  if (bucketName !== process.env.BUCKET_NAME) {
    console.warn("Notification came from the wrong bucket, skipping");
    return;
  }
  if (objectKey !== process.env.OBJECT_KEY) {
    console.warn("Notification is for the wrong object key, skipping");
    return;
  }

  const response = await client.send(
    new UpdateFunctionCodeCommand({
      FunctionName: process.env.FUNCTION_NAME,
      S3Bucket: bucketName,
      S3Key: objectKey,
      S3ObjectVersion: version,
    })
  );

  console.log("Function code updated", response.Version);
}
