---
sidebar_label: S3 LST configuration
description: How to configure the Moderne agent to retrieve LST artifacts from Amazon S3 or S3-compatible storage.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure an agent with S3 access: LSTs

Amazon S3 and S3-compatible storage systems (e.g., MinIO) can serve as a source of LST artifacts for Moderne. This integration allows you to store your LST artifacts in object storage for the Moderne Platform to be able to index them.

This guide will walk you through how to configure the Moderne agent to connect to your S3 bucket to retrieve LST artifacts.

## Prerequisites

* An S3 bucket containing your LST artifacts
  * **Note**: It is important that this S3 bucket _only_ contain LST artifacts. If there are other objects in the bucket, it can slow down LST indexing as the agent must scan all objects that are alphabetically/numerically higher than the last processed artifact. This means if there are other artifacts in the bucket with names that sort after the LST artifacts, the agent will scan through all of them, every time.
* One of the following authentication methods:
  * IAM role (when running on AWS infrastructure)
  * An AWS profile configured on the machine running the agent
  * AWS access key ID and secret access key
* If using a custom S3-compatible endpoint (e.g., MinIO), you'll need the endpoint URL as well.
* The credentials used must have the following permissions on your S3 bucket:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::my-lst-bucket",
                "arn:aws:s3:::my-lst-bucket/*"
            ]
        }
    ]
}
```

## Authentication options

The agent supports multiple authentication methods for S3:

* **Access key and secret key**: Provide `accessKey` and `secretKey` directly in the configuration. This is useful for non-AWS environments or when IAM roles are not available.
* **AWS profile**: Specify a `profile` name that references credentials configured in your AWS credentials file (`~/.aws/credentials`).
* **IAM role**: When running on AWS infrastructure (EC2, ECS, EKS), the agent can use the instance's IAM role automatically. In this case, you only need to provide the `bucketUri` and, if deployed to a different region than the bucket, the `region`.

## Configuring the Moderne agent

The following table contains all the variables/arguments you need to add to your Moderne agent run command in order for it to get LST artifacts from your S3 bucket. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](./agent-config.md).

You can configure multiple S3 buckets by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                          | Required                                                 | Default | Description                                                                                                                                                      |
|----------------------------------------|----------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_S3_{index}_BUCKETURI`   | `true`                                                   |         | The S3 bucket URI. Must start with `s3://` (e.g., `s3://my-bucket-name`).                                                                                        |
| `MODERNE_AGENT_S3_{index}_ENDPOINTURL` | `false`                                                  |         | Custom endpoint URL for S3-compatible services (e.g., `http://localhost:9000` for MinIO). Leave empty for standard AWS S3.                                       |
| `MODERNE_AGENT_S3_{index}_REGION`      | `false`                                                  |         | The AWS region where the bucket is located (e.g., `us-east-1`). Can be excluded if the agent is deployed on AWS infrastructure in the same region as the bucket. |
| `MODERNE_AGENT_S3_{index}_ACCESSKEY`   | `false` (Required if not using profile or IAM role)      |         | The AWS access key ID for authentication.                                                                                                                        |
| `MODERNE_AGENT_S3_{index}_SECRETKEY`   | `false` (Required if using access key)                   |         | The AWS secret access key for authentication.                                                                                                                    |
| `MODERNE_AGENT_S3_{index}_PROFILE`     | `false` (Alternative to access key/secret key)           |         | The AWS profile name from your credentials file.                                                                                                                 |
| `MODERNE_AGENT_S3_{index}_SKIPSSL`     | `true` (If using self-signed cert or non-HTTPS endpoint) | `false` | Specifies whether to skip SSL verification for connections to the S3 endpoint.                                                                                   |

**Example using IAM role authentication on AWS infrastructure:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_S3_0_BUCKETURI=s3://my-lst-bucket \
-e MODERNE_AGENT_S3_0_REGION=us-east-1 \
# ... Additional variables
```


**Example with access key and secret key:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_S3_0_BUCKETURI=s3://my-lst-bucket \
-e MODERNE_AGENT_S3_0_REGION=us-east-1 \
-e MODERNE_AGENT_S3_0_ACCESSKEY=AKIAIOSFODNN7EXAMPLE \
-e MODERNE_AGENT_S3_0_SECRETKEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \
# ... Additional variables
```

**Example with AWS profile:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_S3_0_BUCKETURI=s3://my-lst-bucket \
-e MODERNE_AGENT_S3_0_REGION=us-east-1 \
-e MODERNE_AGENT_S3_0_PROFILE=my-aws-profile \
-v ~/.aws:/root/.aws:ro \
# ... Additional variables
```

**Example with MinIO (S3-compatible storage):**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_S3_0_BUCKETURI=s3://moderne-lst \
-e MODERNE_AGENT_S3_0_ENDPOINTURL=http://minio.example.com:9000 \
-e MODERNE_AGENT_S3_0_ACCESSKEY=minioadmin \
-e MODERNE_AGENT_S3_0_SECRETKEY=minioadmin \
-e MODERNE_AGENT_S3_0_SKIPSSL=true \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                             | Required                                                 | Default | Description                                                                                                                                                      |
|-------------------------------------------|----------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.s3[{index}].bucketUri`   | `true`                                                   |         | The S3 bucket URI. Must start with `s3://` (e.g., `s3://my-bucket-name`).                                                                                        |
| `--moderne.agent.s3[{index}].endpointUrl` | `false`                                                  |         | Custom endpoint URL for S3-compatible services (e.g., `http://localhost:9000` for MinIO). Leave empty for standard AWS S3.                                       |
| `--moderne.agent.s3[{index}].region`      | `false`                                                  |         | The AWS region where the bucket is located (e.g., `us-east-1`). Can be excluded if the agent is deployed on AWS infrastructure in the same region as the bucket. |
| `--moderne.agent.s3[{index}].accessKey`   | `false` (Required if not using profile or IAM role)      |         | The AWS access key ID for authentication.                                                                                                                        |
| `--moderne.agent.s3[{index}].secretKey`   | `false` (Required if using access key)                   |         | The AWS secret access key for authentication.                                                                                                                    |
| `--moderne.agent.s3[{index}].profile`     | `false` (Alternative to access key/secret key)           |         | The AWS profile name from your credentials file.                                                                                                                 |
| `--moderne.agent.s3[{index}].skipSsl`     | `true` (If using self-signed cert or non-HTTPS endpoint) | `false` | Specifies whether to skip SSL verification for connections to the S3 endpoint.                                                                                   |

**Example using IAM role authentication on AWS infrastructure:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.s3[0].bucketUri=s3://my-lst-bucket \
--moderne.agent.s3[0].region=us-east-1 \
# ... Additional arguments
```

**Example with access key and secret key:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.s3[0].bucketUri=s3://my-lst-bucket \
--moderne.agent.s3[0].region=us-east-1 \
--moderne.agent.s3[0].accessKey=AKIAIOSFODNN7EXAMPLE \
--moderne.agent.s3[0].secretKey=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \
# ... Additional arguments
```

**Example with AWS profile:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.s3[0].bucketUri=s3://my-lst-bucket \
--moderne.agent.s3[0].region=us-east-1 \
--moderne.agent.s3[0].profile=my-aws-profile \
# ... Additional arguments
```

**Example with MinIO (S3-compatible storage):**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.s3[0].bucketUri=s3://moderne-lst \
--moderne.agent.s3[0].endpointUrl=http://minio.example.com:9000 \
--moderne.agent.s3[0].accessKey=minioadmin \
--moderne.agent.s3[0].secretKey=minioadmin \
--moderne.agent.s3[0].skipSsl=true \
# ... Additional arguments
```

</TabItem>
</Tabs>

## S3 bucket structure

When the Moderne CLI publishes LST artifacts to S3, it uses a date-based key structure with ULID (Universally Unique Lexicographically Sortable Identifier) filenames:

```
s3://my-lst-bucket/
└── YYYY/
    └── MM/
        └── DD/
            └── HH/
                └── <ULID>.jar
```

For example:

```
s3://my-lst-bucket/
└── 2024/
    └── 03/
        └── 15/
            └── 14/
                └── 01ARZ3NDEKTSV4RRFFQ69G5FAV.jar
```

The agent will scan the bucket for LST artifacts.

## Using IAM roles on AWS

When running the agent on AWS infrastructure (EC2, ECS, EKS, Lambda), you can use IAM roles for authentication instead of providing access keys. To do this:

1. Create an IAM role with the permissions shown in [Prerequisites](#prerequisites)
2. Attach the role to your compute resource (EC2 instance, ECS task, etc.)
3. Configure the agent with only the `bucketUri` and optionally `region`

The AWS SDK will automatically detect and use the IAM role credentials.
