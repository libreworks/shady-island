# Automation

This section explains the constructs we created for automation and deployments.

- Elastic Container Service (ECS)
  - `ContainerImagePipeline` – Deploy new ECR images to ECS using CodePipline
- Lambda
  - `FunctionCodeUpdater` – Calls `lambda:UpdateFunctionCode` when a new code version is uploaded to an S3 bucket

## Elastic Container Service (ECS)

This section explains the automation-related constructs for ECS.

### ContainerImagePipeline

We created a `ContainerImagePipeline` construct to bridge the gap between Elastic Container Registry (ECR) and Elastic Container Service (ECS).

This construct produces an AWS CodePipeline pipeline that triggers when a Docker container image with a specific tag is pushed to an ECR repository. The pipeline then deploys the new container image version to a service running on ECS.

CodePipeline already has two useful actions that we leveraged: [ECR Source](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference-ECR.html) and [ECS Deploy](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference-ECS.html).

The ECR Source action produces a file called `imageDetail.json` that contains details about the incoming Docker container image.

```json
{
  "ImageSizeInBytes": "<number>",
  "ImageDigest": "sha256:<64-digit hexidecimal hash>",
  "Version": "1.0",
  "ImagePushedAt": "Wed Dec 07 17:05:06 UTC 2022",
  "RegistryId": "<AWS account number>",
  "RepositoryName": "<repository name>",
  "ImageURI": "<AWS account number>.dkr.ecr.<region>.amazonaws.com/<repository name>@sha256:<64-digit hexidecimal hash>",
  "ImageTags": ["598", "latest"]
}
```

However, the ECS Deploy action expects a JSON file called `imagedefinitions.json` structured like this:

```json
[
  {
    "name": "<name of container in the task definition>",
    "imageUri": "<AWS account number>.dkr.ecr.<region>.amazonaws.com/<repository name>@sha256:<64-digit hexidecimal hash>"
  }
]
```

Luckily, CodePipeline allows arbitrary Lambda functions that can accept artifacts from previous steps and produce artifacts for subsequent steps. The `ContainerImagePipeline` construct produces a singleton Lambda function (i.e. only one per stack, regardless of the number of instances of the construct) that:

1. Downloads the input artifact (produced by ECR Source) from S3
1. Extracts the `.zip`
1. Retrieves the `imageDetail.json` from within
1. Uses it to create the `imagedefinitions.json` file
1. Creates a new `.zip` for the output artifact (sent to ECS Deploy)
1. Uploads the output artifact to S3

At that point, the ECS Deploy action:

1. Creates a new ECS Task Definition based on the one assigned to the ECS Service, replacing the container image with the value of `imageUri`
1. Updates the ECS Service to use the new ECS Task Definition
1. Forces the tasks in the ECS Service to drain and launch anew

In this way, a CI/CD pipeline can be configured to push a new Docker (or OCI) container image tag to the ECR repository, then add the `latest` tag to the new image and push it as well. As soon as the `latest` tag changes, the pipeline will trigger.

If the CDK application that defines the ECS Service and Task Definition uses the `latest` tag (e.g. instead of trying to supply a fixed image tag, like `598` above), then this setup also prevents any deployments from reverting the ECS Service to an earlier image tag.

```typescript
import { Repository } from "aws-cdk-lib/aws-ecr";
import { FargateService } from "aws-cdk-lib/aws-ecs";
import { ContainerImagePipeline } from "shady-island/lib/automation";

declare const repository: Repository;
declare const service: FargateService;

new ContainerImagePipeline(stack, "Deploy", {
  repository,
  service,
  container: "Express",
  tag: "latest",
});
```

## Lambda

This section explains the automation-related constructs for Lambda.

### FunctionCodeUpdater

The `FunctionCodeUpdater` construct exists to decouple uploading code and updating the function. By decoupling these operations, we can grant fewer permissions to the security principal responsible for uploading the code. For example, you have a GitHub Actions workflow that bundles your Lambda function code into a `.zip` file and uploads it to S3. By using this construct, the role assumed by GitHub Actions needs only the permissions for S3 and the only environment variables/secrets that GitHub Actions needs to know about are the name for the S3 bucket and the object key (e.g. `s3://example/application/code.zip`).

This construct creates a Lambda function that receives notifications from S3. When a new version of the code archive is uploaded to the source S3 bucket, the Lambda function invokes [`lambda:UpdateFunctionCode`](https://docs.aws.amazon.com/lambda/latest/api/API_UpdateFunctionCode.html).

```typescript
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Function } from "aws-cdk-lib/aws-lambda";
import { FunctionCodeUpdater } from "shady-island/lib/automation";

declare const bucket: Bucket;
declare const target: Function;
declare const uploader: Role;

const updater = new FunctionCodeUpdater(stack, "Deploy", {
  bucket,
  target,
  objectKey: "my-application/code.zip",
});

// Grant necessary permissions to the Role assumed to upload the new code
updater.grantPutCode(uploader);
```
