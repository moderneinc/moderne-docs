---
sidebar_label: S3 organization source
description: How to configure the Moderne Connector to load a repository CSV from Amazon S3 or S3-compatible storage.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/how-to-guides/agent-configuration/configure-an-agent-with-s3-access" />

# Configure a Connector with an S3 organization source

This guide explains how to point the Moderne Connector at a repository CSV stored in Amazon S3 or an S3-compatible service (e.g., MinIO). On each polling cycle, the Connector fetches that CSV to discover your repositories. When the CSV includes `publishUri` values, the Connector uses them to locate each repository's LST artifact. 

Any of the CSV variants documented in the [repos.csv reference](../../../../user-documentation/moderne-cli/references/repos-csv.md) work here: a minimal CSV with just `origin`, `path`, and `branch` columns; one that adds organization hierarchy columns; or a full `repos-lock.csv` produced by Mass Ingest's `mod publish`.

For background on how the Connector uses CSV sources and how S3 fits into the overall Connector configuration, please see [how the Connector finds your repositories and their LSTs](./agent-config.md#step-5-configure-the-connector-to-find-your-repositories-and-their-lsts).

## Prerequisites

* A repository CSV stored as a single object in an S3 bucket. The `uri` you configure must point at that object (e.g., `s3://my-bucket/repos.csv`), not at a bucket or prefix.
* One of the following authentication methods:
  * IAM role (when running on AWS infrastructure)
  * An AWS profile configured on the machine running the Connector
  * AWS access key ID and secret access key
* If using a custom S3-compatible endpoint (e.g., MinIO), you will need the endpoint URL as well.
* The credentials used must have the following permissions on your S3 bucket:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::my-bucket/repos.csv"
            ]
        }
    ]
}
```

## Authentication options

The Connector supports multiple authentication methods for S3:

* **Access key and secret key**: Provide `accessKey` and `secretKey` directly in the configuration. This is useful for non-AWS environments or when IAM roles are not available.
* **AWS profile**: Specify a `profile` name that references credentials configured in your AWS credentials file (`~/.aws/credentials`).
* **IAM role**: When running on AWS infrastructure (EC2, ECS, EKS), the Connector can use the instance's IAM role automatically. In this case, you only need to provide the `uri` and, if deployed to a different region than the bucket, the `region`.

## Configuring the Moderne Connector

The following table contains all the variables/arguments you need to add to your Moderne Connector run command in order for it to load a repository CSV from S3. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne Connector guide](./agent-config.md).

You can configure multiple S3 sources by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                         | Required                                                 | Default | Description                                                                                                                                                          |
|-------------------------------------------------------|----------------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_ORGANIZATION_SOURCES_S3_{index}_URI`         | `true`                                                   |         | The S3 URI of the CSV object. Must start with `s3://` and include the object key (e.g., `s3://my-bucket/repos.csv`).                                            |
| `MODERNE_ORGANIZATION_SOURCES_S3_{index}_ENDPOINTURL` | `false`                                                  |         | Custom endpoint URL for S3-compatible services (e.g., `http://localhost:9000` for MinIO). Leave empty for standard AWS S3.                                           |
| `MODERNE_ORGANIZATION_SOURCES_S3_{index}_REGION`      | `false`                                                  |         | The AWS region where the bucket is located (e.g., `us-east-1`). Can be excluded if the Connector is deployed on AWS infrastructure in the same region as the bucket. |
| `MODERNE_ORGANIZATION_SOURCES_S3_{index}_ACCESSKEY`   | `false` (Required if not using profile or IAM role)      |         | The AWS access key ID for authentication.                                                                                                                            |
| `MODERNE_ORGANIZATION_SOURCES_S3_{index}_SECRETKEY`   | `false` (Required if using access key)                   |         | The AWS secret access key for authentication.                                                                                                                        |
| `MODERNE_ORGANIZATION_SOURCES_S3_{index}_PROFILE`     | `false` (Alternative to access key/secret key)           |         | The AWS profile name from your credentials file.                                                                                                                     |
| `MODERNE_ORGANIZATION_SOURCES_S3_{index}_SKIPSSL`     | `true` (If using self-signed cert or non-HTTPS endpoint) | `false` | Specifies whether to skip SSL verification for connections to the S3 endpoint.                                                                                       |

**Example using IAM role authentication on AWS infrastructure:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_S3_0_URI=s3://my-bucket/repos.csv \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_REGION=us-east-1 \
# ... Additional variables
```


**Example with access key and secret key:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_S3_0_URI=s3://my-bucket/repos.csv \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_REGION=us-east-1 \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_ACCESSKEY=AKIAIOSFODNN7EXAMPLE \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_SECRETKEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \
# ... Additional variables
```

**Example with AWS profile:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_S3_0_URI=s3://my-bucket/repos.csv \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_REGION=us-east-1 \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_PROFILE=my-aws-profile \
-v ~/.aws:/root/.aws:ro \
# ... Additional variables
```

**Example with MinIO (S3-compatible storage):**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_S3_0_URI=s3://my-bucket/repos.csv \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_ENDPOINTURL=http://minio.example.com:9000 \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_ACCESSKEY=minioadmin \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_SECRETKEY=minioadmin \
-e MODERNE_ORGANIZATION_SOURCES_S3_0_SKIPSSL=true \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                            | Required                                                 | Default | Description                                                                                                                                                          |
|----------------------------------------------------------|----------------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.organization.sources.s3[{index}].uri`         | `true`                                                   |         | The S3 URI of the CSV object. Must start with `s3://` and include the object key (e.g., `s3://my-bucket/repos.csv`).                                            |
| `--moderne.organization.sources.s3[{index}].endpointUrl` | `false`                                                  |         | Custom endpoint URL for S3-compatible services (e.g., `http://localhost:9000` for MinIO). Leave empty for standard AWS S3.                                           |
| `--moderne.organization.sources.s3[{index}].region`      | `false`                                                  |         | The AWS region where the bucket is located (e.g., `us-east-1`). Can be excluded if the Connector is deployed on AWS infrastructure in the same region as the bucket. |
| `--moderne.organization.sources.s3[{index}].accessKey`   | `false` (Required if not using profile or IAM role)      |         | The AWS access key ID for authentication.                                                                                                                            |
| `--moderne.organization.sources.s3[{index}].secretKey`   | `false` (Required if using access key)                   |         | The AWS secret access key for authentication.                                                                                                                        |
| `--moderne.organization.sources.s3[{index}].profile`     | `false` (Alternative to access key/secret key)           |         | The AWS profile name from your credentials file.                                                                                                                     |
| `--moderne.organization.sources.s3[{index}].skipSsl`     | `true` (If using self-signed cert or non-HTTPS endpoint) | `false` | Specifies whether to skip SSL verification for connections to the S3 endpoint.                                                                                       |

**Example using IAM role authentication on AWS infrastructure:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.s3[0].uri=s3://my-bucket/repos.csv \
--moderne.organization.sources.s3[0].region=us-east-1 \
# ... Additional arguments
```

**Example with access key and secret key:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.s3[0].uri=s3://my-bucket/repos.csv \
--moderne.organization.sources.s3[0].region=us-east-1 \
--moderne.organization.sources.s3[0].accessKey=AKIAIOSFODNN7EXAMPLE \
--moderne.organization.sources.s3[0].secretKey=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \
# ... Additional arguments
```

**Example with AWS profile:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.s3[0].uri=s3://my-bucket/repos.csv \
--moderne.organization.sources.s3[0].region=us-east-1 \
--moderne.organization.sources.s3[0].profile=my-aws-profile \
# ... Additional arguments
```

**Example with MinIO (S3-compatible storage):**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.s3[0].uri=s3://my-bucket/repos.csv \
--moderne.organization.sources.s3[0].endpointUrl=http://minio.example.com:9000 \
--moderne.organization.sources.s3[0].accessKey=minioadmin \
--moderne.organization.sources.s3[0].secretKey=minioadmin \
--moderne.organization.sources.s3[0].skipSsl=true \
# ... Additional arguments
```

</TabItem>
</Tabs>

## Using IAM roles on AWS

When running the Connector on AWS infrastructure (EC2, ECS, EKS, Lambda), you can use IAM roles for authentication instead of providing access keys. To do this:

1. Create an IAM role with the permissions shown in [Prerequisites](#prerequisites)
2. Attach the role to your compute resource (EC2 instance, ECS task, etc.)
3. Configure the Connector with only the `uri` and optionally `region`

The AWS SDK will automatically detect and use the IAM role credentials.
