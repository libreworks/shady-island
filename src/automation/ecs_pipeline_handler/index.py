import boto3
import io
import json
import zipfile

codepipeline = boto3.client("codepipeline")


def lambda_handler(event, context):
    job = event.get("CodePipeline.job", {})
    try:
        user_params = json.loads(
            job['data']['actionConfiguration']['configuration']['UserParameters']
        )

        # Download the input artifact.
        credentials = job['data']['artifactCredentials']
        s3 = boto3.client(
            's3',
            aws_access_key_id=credentials['accessKeyId'],
            aws_secret_access_key=credentials['secretAccessKey'],
            aws_session_token=credentials['sessionToken'],
        )
        input_artifact_location = job['data']['inputArtifacts'][0]['location']['s3Location']
        input_bucket_name = input_artifact_location['bucketName']
        input_object_key = input_artifact_location['objectKey']
        print(f"Retrieving input artifact from s3://{input_bucket_name}/{input_object_key}")
        input_artifact_data = s3.get_object(
            Bucket=input_bucket_name,
            Key=input_object_key,
        )

        # Unzip the artifact and parse the JSON inside.
        buffer = io.BytesIO(input_artifact_data["Body"].read())
        z = zipfile.ZipFile(buffer)
        input_json = z.read("imageDetail.json")
        image_uri = json.loads(input_json)["ImageURI"]

        # Create the output artifact.
        output_json = json.dumps([{
            "name": user_params['OutputContainerName'],
            "imageUri": image_uri,
        }], separators=(',', ':'))
        output_zip = io.BytesIO()
        with zipfile.ZipFile(output_zip, "a", zipfile.ZIP_DEFLATED, False) as zip_file:
            zip_file.writestr("imagedefinitions.json", output_json)

        # Upload the output artifact .zip to S3.
        output_artifact_location = job['data']['outputArtifacts'][0]['location']['s3Location']
        output_bucket_name = output_artifact_location['bucketName']
        output_object_key = output_artifact_location['objectKey']
        print(f"Uploading output artifact to s3://{output_bucket_name}/{output_object_key}")
        s3.put_object(
            Body=output_zip.getvalue(),
            Bucket=output_bucket_name,
            Key=output_object_key,
            ContentType="application/zip",
        )

        # Tell CodePipeline that this run succeeded.
        codepipeline.put_job_success_result(jobId=job['id'])
    except Exception as inst:
        print(inst)

        # Tell CodePipeline we had an error.
        codepipeline.put_job_failure_result(
            jobId=job['id'],
            failureDetails={
                "type": "JobFailed",
                "externalExecutionId": context.aws_request_id,
                "message": json.dumps(inst),
            },
        )
