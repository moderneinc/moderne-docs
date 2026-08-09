---
sidebar_label: AWS replication setup
description: Set up cross-account S3 replication from the Moderne-managed telemetry bucket into an S3 bucket in your AWS account.
---

# AWS replication setup

This guide walks you through receiving telemetry into an S3 bucket in **your** AWS account via S3 Cross-Region Replication (also works same-region). Before starting, read the [overview](./overview.md) for context on what the data looks like and how it flows.

:::tip
If your policy forbids external principals writing into your account, or your bucket requires a customer-managed KMS key that Moderne's role cannot use, replication cannot be configured. See [Alternative: pull instead of push](#alternative-pull-instead-of-push) below.
:::

Here's how the setup works end-to-end:

1. You create a destination bucket in your AWS account.
2. You send Moderne your tenant name and the destination bucket ARN.
3. Moderne sends back a bucket policy scoped to your tenant's replication role, which you apply to the bucket.
4. Moderne configures a replication rule on your tenant's source bucket and confirms when objects start landing.

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

## Step 2: Send Moderne your bucket details

Email your CSM the three values from the "What we'll need from you" table above. Moderne provisions a replication role dedicated to your tenant and sends back a destination bucket policy tailored to it. Apply the policy exactly as provided — do not edit it.

## Step 3: Apply the bucket policy

Save the policy Moderne sends you as `destination-bucket-policy.json`, then apply it to your bucket:

```bash
aws s3api put-bucket-policy \
    --bucket "$DEST_BUCKET" \
    --policy file://destination-bucket-policy.json
```

The policy grants Moderne's per-tenant replication role only the permissions it needs to write replicated objects into your bucket (the `s3:Replicate*` actions plus `s3:ObjectOwnerOverrideToBucketOwner`) and to read and set the bucket's versioning state. It grants no read access to your data and nothing else.

## Step 4: Moderne enables replication

Once your bucket policy is in place, Moderne will:

* Confirm the bucket policy is correct.
* Create the replication rule on your tenant's source bucket, `moderne-bi-telemetry-<your-tenant>`, so only your data is replicated.
* Trigger a backfill (S3 Batch Replication) for objects already in the bucket, so your destination starts populated, not empty.
* Send back a confirmation with a sample object path and a timestamp of the first replicated key.

You should see new keys appearing under `s3://<your-dest-bucket>/tenant=<your-tenant>/...` within ~15 minutes of any recipe run or qualifying `mod` command. Replication is asynchronous, but 99% of new objects arrive within 15 minutes.

## Verification

After Moderne enables replication, you can confirm data is flowing:

```bash
aws s3 ls "s3://$DEST_BUCKET/tenant=$YOUR_TENANT/" --recursive | head
```

The output should include paths that look like:

```
tenant=acme/source=saas/type=run/year=2026/month=05/day=20/abc123.csv
tenant=acme/source=cli/type=commit/year=2026/month=05/day=20/def456.csv
```

## Alternative: pull instead of push

Replication requires Moderne to write into your bucket. If your policy forbids that, you can pull instead: an IAM principal you own assumes a read-only role in Moderne's account and reads your tenant's telemetry on your own schedule. **No KMS key is shared in either direction**, and nothing external ever writes into your account.

The usual reason to need this is encryption policy. If your destination bucket requires a customer-managed SSE-KMS key and your security policy forbids external principals from using your keys, Moderne's replication role can never write an encrypted object, so replication cannot be configured at all.

### Setting up a pull

1. **Create the reading principal.** Make an IAM role in your account that will assume Moderne's pull role. Moderne's role ARN follows a fixed pattern, so you can reference it before it exists: `arn:aws:iam::<moderne-account-id>:role/moderne-bi-telemetry-pull-role-<your-tenant>`. Ask your CSM for the account ID if change control needs the full ARN up front.
2. **Send your CSM the principal ARN** along with your tenant name. Send more than one if different environments read separately.
3. **Moderne provisions the role** and sends back the role ARN to assume, the source bucket (`moderne-bi-telemetry-<your-tenant>`), and the key prefix (`tenant=<your-tenant>/`). The role grants `s3:ListBucket`, `s3:GetObject`, and `s3:GetBucketLocation` on that bucket only. It cannot write, delete, or reach another tenant's data.
4. **Verify and schedule.** Assume the role, confirm you can list objects, then run a sync on a schedule:

```bash
aws s3 sync \
    s3://moderne-bi-telemetry-<your-tenant>/tenant=<your-tenant>/ \
    s3://<your-bucket>/<your-prefix>/tenant=<your-tenant>/
```

Note the `tenant=<your-tenant>/` on the destination. `aws s3 sync` copies keys relative to the source prefix, so without it the `tenant=` level is dropped and the partition layout no longer matches what the queries in [Querying and BI](./querying-and-bi.md) expect.

Run the sync on a schedule rather than on demand, since a pull only captures what is in the source bucket at the moment it runs.

### Push versus pull

|                                 | Replication (push)                    | Pull                                     |
|---------------------------------|---------------------------------------|------------------------------------------|
| Who moves the data              | Moderne, continuously                 | You, on your schedule                    |
| Lands in your account           | Automatically, within ~15 minutes     | When your job next runs                  |
| Your KMS key                    | Moderne's role must be able to use it | Never shared                             |
| Inbound access to your account  | Required                              | None                                     |
| Missed data if your side breaks | Replication retries                   | Your job has to catch up on its next run |

Use replication where your policy allows it, and pull where it doesn't.

## Next

With data landing in your storage, register the schema and start building reports. Continue to [Querying and BI](./querying-and-bi.md). The Athena notes there use an AWS-native query path that requires no additional infrastructure beyond what you've just set up.
