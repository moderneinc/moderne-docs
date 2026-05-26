---
sidebar_label: AWS replication setup
description: Set up cross-account S3 replication from the Moderne-managed telemetry bucket into an S3 bucket in your AWS account.
---

# AWS replication setup

This guide walks you through receiving telemetry into an S3 bucket in **your** AWS account via S3 Cross-Region Replication (also works same-region). Before starting, read the [overview](./overview.md) for context on what the data looks like and how it flows.

The flow:

1. You create a destination bucket in your AWS account.
2. You attach a bucket policy that grants Moderne's replication role permission to write objects.
3. You send Moderne the destination ARN and your tenant name.
4. Moderne configures a replication rule on `moderne-bi-telemetry` filtered to your tenant's prefix, and confirms when objects start landing.

## Prerequisites

This guide assumes that you have:

* An AWS account you can create resources in, with permission to create S3 buckets and write bucket policies.
* The [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) installed and configured with credentials for that account.
* Your Moderne tenant name (the subdomain in your tenant's URL, e.g. `acme` for `acme.moderne.io`).
* A Moderne SaaS v2 tenant. If you are still on v1, see the [Availability note in the overview](./overview.md).

## What we'll need from you

Send your CSM the following three values:

| Value                  | Example                               | How to get it                                               |
|------------------------|---------------------------------------|-------------------------------------------------------------|
| Tenant name            | `acme`                                | Your Moderne tenant subdomain (`acme.moderne.io` → `acme`). |
| Destination bucket ARN | `arn:aws:s3:::acme-moderne-telemetry` | After step 1 below.                                         |
| Bucket region          | `us-east-1`                           | Wherever your BI lives.                                     |

## Step 1: Create the destination bucket

Pick any name and region you like. We recommend enabling **bucket versioning** (required for replication on the source side, optional but useful on the destination side for object-history preservation).

```bash
# Replace these with your values:
DEST_BUCKET=acme-moderne-telemetry
DEST_REGION=us-east-1

aws s3api create-bucket \
    --bucket "$DEST_BUCKET" \
    --region "$DEST_REGION" \
    --create-bucket-configuration LocationConstraint="$DEST_REGION"

aws s3api put-bucket-versioning \
    --bucket "$DEST_BUCKET" \
    --versioning-configuration Status=Enabled
```

:::tip
**Region choice.** There is no replication-side restriction on region. Pick the region where your BI/query engine runs to minimize query-time data-egress charges.
:::

## Step 2: Attach the destination bucket policy

This is the policy that grants Moderne's replication role permission to write into your bucket. **Copy this exactly**, then make two substitutions before applying it:

* Replace `<your-dest-bucket>` with your destination bucket name (appears in both `Resource` values).
* Replace `<your-tenant>` with your Moderne tenant name (appears in both `Principal.AWS` ARNs). Each tenant has a dedicated replication role named `moderne-bi-telemetry-replication-role-<your-tenant>` in the moderne-management account.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowModerneReplicationWrite",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::297794628946:role/moderne-bi-telemetry-replication-role-<your-tenant>"
      },
      "Action": [
        "s3:ReplicateObject",
        "s3:ReplicateDelete",
        "s3:ReplicateTags",
        "s3:ObjectOwnerOverrideToBucketOwner"
      ],
      "Resource": "arn:aws:s3:::<your-dest-bucket>/*"
    },
    {
      "Sid": "AllowModerneReplicationList",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::297794628946:role/moderne-bi-telemetry-replication-role-<your-tenant>"
      },
      "Action": [
        "s3:GetBucketVersioning",
        "s3:PutBucketVersioning"
      ],
      "Resource": "arn:aws:s3:::<your-dest-bucket>"
    }
  ]
}
```

Apply it:

```bash
aws s3api put-bucket-policy \
    --bucket "$DEST_BUCKET" \
    --policy file://destination-bucket-policy.json
```

## Step 3: Hand off to Moderne

Email your CSM the three values from the "What we'll need from you" table above. Moderne will:

* Confirm the bucket policy is correct.
* Create the replication rule on `moderne-bi-telemetry`, scoped to `tenant=<your-tenant>/` so only your data is replicated.
* Trigger a backfill (S3 Batch Replication) for objects already in the bucket, so your destination starts populated, not empty.
* Send back a confirmation with a sample object path and a timestamp of the first replicated key.

You should see new keys appearing under `s3://<your-dest-bucket>/tenant=<your-tenant>/...` within ~15 minutes of any recipe run or qualifying `mod` command. Replication is asynchronous; the 99th-percentile delivery time for new objects is under 15 minutes.

## Verification

After Moderne enables replication, you can confirm data is flowing:

```bash
aws s3 ls "s3://$DEST_BUCKET/tenant=$YOUR_TENANT/" --recursive | head
```

Expect to see paths like:

```
tenant=acme/source=saas/type=run/year=2026/month=05/day=20/abc123.csv
tenant=acme/source=cli/type=commit/year=2026/month=05/day=20/def456.csv
```

## Next

With data landing in your bucket, register the schema and start building reports. Continue to [Querying and BI](./querying-and-bi.md). The Athena walkthrough on that page uses an AWS-native query path that requires no additional infrastructure beyond what you've just set up.
