---
title: LST cleanup
sidebar_label: Cleaning up LSTs
description: How to clean up old or outdated LSTs.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LST cleanup

As your team develops new code, LSTs will be created and added to your artifact repository. Over time, however, many of these LSTs will no longer be useful and should be removed to save space.

There are two common scenarios where LSTs need to be manually cleaned up:

1. When people work in feature branches that then get merged in or deleted – all LSTs for those branches serve no purpose as any changes made on them can't be merged in at that point.
2. When people work in feature branches that are continuously updated – all old LSTs for those branches serve no purpose as they aren't accessible from Moderne anymore (as Moderne only grabs the latest ones).

While those two scenarios are similar, the behavior in Moderne and the cleanup process for the LSTs are slightly different. Let's walk through what you'll need to do in both of these situations.

## Cleaning up LSTs for merged/deleted branches

In this scenario, when you go to run a recipe in Moderne, you will be able to run recipes against the repository + branch combination that no longer exists – which is a waste of time as you won't be able to merge in the results.

To fix this, you will **first** need to remove the old LSTs from your artifact repository. [We strongly recommend setting up some form of automation for this](#automating-lst-cleanup-in-your-artifact-repository).

**After the LSTs have been removed from your artifact repository**, you will need to perform some action to let Moderne know about these changes. This is because Moderne **does not** poll for artifacts being deleted. Once Moderne has downloaded an LST, it will continue to allow you to run recipes on it – even if those artifacts no longer exist in your artifact repository.

To address this issue, you have two main options:

1. Run a GraphQL cleanup query to sync all LSTs
2. Write custom, more targeted code to sync specific LSTs

### GraphQL cleanup query

:::danger
Be very careful before running the GraphQL query mentioned in this section. Depending on the parameters provided, it can cause some LSTs to be unavailable for up to 24 hours. There is no way to cancel or stop this query once it has been started.
:::

Moderne provides a [GraphQL reindex query that you can run to force a sync of all LSTs](https://app.moderne.io/graphql?url=https%253A%252F%252Fapi.app.moderne.io%252Fgraphql\&query=bXV0YXRpb24gcmVpbmRleCB7CiAgaW5kZXgoZm9yY2VVcGRhdGU6IHRydWUsIG1vZGlmaWVkQWZ0ZXI6ICIyMDIzLTAxLTAxVDAwOjAwWiIpIHsKICAgIGNvdW50CiAgfQp9).

<Tabs>
<TabItem value="reindex-mutation" label="Reindex mutation">

```graphql
mutation reindex {
  index(forceUpdate: true, modifiedAfter: "2023-01-01T00:00Z") {
    count
  }
}
```
</TabItem>

<TabItem value="curl" label="cURL">


```bash
curl -X POST https://api.app.moderne.io/graphql \
    -H 'Authorization: Bearer <session token or Moderne PAT here>' \
    -H 'Content-Type: application/json' \
    -d '{ "query": "mutation reindex {\n  index(forceUpdate: true, modifiedAfter: \"2023-01-01T00:00Z\") {\n    count\n  }\n}" }'
```

</TabItem>
</Tabs>

Running this `reindex` query will cause the Connector to reach out to your artifact repository and ask for all available LSTs. It will then download the metadata for each of these. After all of the metadata has been downloaded, the old LSTs will effectively be removed from the platform. Moderne will then begin downloading the latest LSTs for each repository. As this runs, you will see repositories begin appearing in the platform again.

While you can still run recipes on the LSTs that are coming in, all of the LSTs won't be available for a significant amount of time (up to 24 hours depending on the number of repositories you have). Because of that, you should strongly consider only running this query during off-hours or on a weekend when there won't be much traffic.

### More targeted, custom code

If you want to ensure Moderne removes old LSTs without incurring any downtime, you can write custom code to interact with the Moderne GraphQL APIs. This code would probably take the form of:

* Get the set of all artifacts for all repositories that exist in Moderne
* Ask your artifact repository if those still exist over there
* If they don't, make a request to remove those LSTs from the Moderne Platform

You could then run this custom script once a week or so.

## Cleaning up old LSTs for branches that still exist

In this scenario, you won't notice any issues in Moderne. You will still be able to run recipes against the latest LSTs and commit the results from said recipes. However, your artifact repository will begin to fill up with old LSTs that are no longer needed.

To fix this issue, we encourage you to write some form of automation that removes old LSTs from your artifact repository (perhaps by deleting all LSTs that haven't been updated in over a week). See [our examples below](#automating-lst-cleanup-in-your-artifact-repository) for what this might look like.

Unlike the scenario where a branch is deleted, you **do not need to make any API calls to Moderne**.

## Automating LST cleanup in your artifact repository

LST cleanup will look different depending on your artifact storage solution. Select the appropriate tab below for guidance based on your environment.

Choose a retention period longer than your LST build interval. For example, keep artifacts for three days with daily ingestion or ten days with weekly ingestion. Allow extra time for failed or delayed builds: deleting the latest LST leaves the branch without an available artifact until the next successful publish.

<Tabs>
<TabItem value="s3" label="Amazon S3">

For most S3 users, we recommend using [AWS S3 Lifecycle Rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) to automatically delete old LST versions. This approach requires no custom scripting.

:::warning
The bucket-wide current-version rule below also expires files such as `repos.csv` and `repos-lock.csv`. Scope the rule to artifact prefixes that exclude files you need to keep, and review any other objects in the bucket before applying it.
:::

Due to how S3 handles different object types, we recommend creating three lifecycle rules:

#### Rule 1: current-versions

This rule handles all LST artifacts and build logs. Each of these is uploaded with a new object key, which means from an S3 standpoint they are all "current" versions.

| Setting                        | Value                                        |
|--------------------------------|----------------------------------------------|
| **Rule name**                  | `current-versions`                           |
| **Rule scope**                 | Apply to all objects in the bucket           |
| **Lifecycle rule actions**     | Expire current versions of objects           |
| **Days after object creation** | 3 (adjust based on your ingestion frequency) |

#### Rule 2: noncurrent-versions

This rule handles old versions of `repos.csv` and `repos-lock.csv`. These files will get overwritten when:

* You store a new version directly on top of them
* `mod publish` writes new changes into the `repos-lock.csv` file

:::note
This rule only applies if S3 versioning is enabled on your bucket. If versioning is not enabled, S3 will allow you to create the rule - but it will be skipped at evaluation time.
:::

| Setting                                  | Value                                                                                   |
|------------------------------------------|-----------------------------------------------------------------------------------------|
| **Rule name**                            | `noncurrent-versions`                                                                   |
| **Rule scope**                           | Apply to all objects in the bucket                                                      |
| **Lifecycle rule actions**               | * Permanently delete noncurrent versions of objects <br/> * Delete expired object delete markers |
| **Days after objects become noncurrent** | 3 (adjust based on your ingestion frequency)                                            |

#### Rule 3: cleanup

This rule handles incomplete uploads from mass-ingest - which would occur if a node is terminated in the middle of uploading. This _should_ be rare, but it serves as a catch-all to prevent orphaned partial uploads from accumulating.

| Setting                                 | Value                                                                |
|-----------------------------------------|----------------------------------------------------------------------|
| **Rule name**                           | `cleanup`                                                            |
| **Rule scope**                          | Apply to all objects in the bucket                                   |
| **Lifecycle rule actions**              | Delete expired object delete markers or incomplete multipart uploads |
| **Delete incomplete multipart uploads** | Yes                                                                  |
| **Number of days**                      | 1                                                                    |

#### Custom cleanup script

For cases where lifecycle rules are insufficient (e.g., keeping LSTs for specific branches longer or targeting cleanup to specific date ranges), you can use the following script with the AWS CLI. It targets the date-based key structure used by `mod publish` when the CLI writes LST artifacts to S3:

```
s3://my-lst-bucket/
└── YYYY/
    └── MM/
        └── DD/
            └── HH/
                └── <ULID>.jar
```

The script only deletes objects whose keys match this `YYYY/MM/DD/HH/` prefix pattern, so files like `repos.csv` or `repos-lock.csv` at the bucket root are left alone.

:::warning
Always run the script in dry run mode first (the default) to verify which objects will be deleted before performing actual deletion.
:::

```bash title="s3-lst-cleanup.sh"
#!/bin/bash

# S3 LST Cleanup Script
# Deletes LST artifacts older than the specified retention period.
# Only targets date-prefixed objects (YYYY/MM/DD/HH/); files like
# repos.csv and repos-lock.csv at the bucket root are not affected.

set -euo pipefail
export AWS_PAGER=""

# --- Configuration ---
BUCKET="${BUCKET:-s3://my-lst-bucket}"
RETENTION_DAYS="${RETENTION_DAYS:-3}"
DRY_RUN="${DRY_RUN:-true}"

# Strip the s3:// prefix for API calls
BUCKET_NAME="${BUCKET#s3://}"

# --- Validate bucket ---
if ! aws s3api head-bucket --bucket "$BUCKET_NAME" 2>/dev/null; then
  echo "Error: Bucket '$BUCKET' not found or not accessible."
  exit 1
fi

# --- Calculate cutoff date ---
if date -v -1d > /dev/null 2>&1; then
  # macOS
  CUTOFF_DATE=$(date -v "-${RETENTION_DAYS}d" +%Y/%m/%d)
else
  # Linux
  CUTOFF_DATE=$(date -d "-${RETENTION_DAYS} days" +%Y/%m/%d)
fi

echo "Bucket:         $BUCKET"
echo "Retention days: $RETENTION_DAYS"
echo "Cutoff date:    $CUTOFF_DATE"
echo "Dry run:        $DRY_RUN"
echo "---"
echo "Searching for objects older than $CUTOFF_DATE ..."

# --- List and filter objects ---
KEYS_TO_DELETE=()

while read -r line; do
  # Each line: 2024-03-15 14:22:01  12345678 2024/03/15/14/01ARZ3NDEKTSV4RRFFQ69G5FAV.jar
  object_key=$(echo "$line" | awk '{print $4}')

  # Only process date-prefixed keys (YYYY/MM/DD/)
  if [[ ! "$object_key" =~ ^[0-9]{4}/[0-9]{2}/[0-9]{2}/ ]]; then
    continue
  fi

  # Extract the date prefix (YYYY/MM/DD)
  object_date="${object_key:0:10}"

  # Compare dates lexicographically (works because of YYYY/MM/DD format)
  if [[ "$object_date" < "$CUTOFF_DATE" ]]; then
    KEYS_TO_DELETE+=("$object_key")
  fi
done < <(aws s3 ls "$BUCKET/" --recursive)

TOTAL=${#KEYS_TO_DELETE[@]}
echo "Found $TOTAL object(s) to delete."

if [[ "$TOTAL" -eq 0 ]]; then
  echo "Nothing to clean up."
  exit 0
fi

# --- Delete objects in batches of 1000 (S3 API limit) ---
BATCH_SIZE=1000
DELETED=0

for ((i = 0; i < TOTAL; i += BATCH_SIZE)); do
  BATCH=("${KEYS_TO_DELETE[@]:i:BATCH_SIZE}")

  if [[ "$DRY_RUN" == "true" ]]; then
    for key in "${BATCH[@]}"; do
      echo "[dry run] Would delete: $BUCKET/$key"
    done
  else
    # Build the JSON delete request
    OBJECTS_JSON=$(printf '{"Key":"%s"},' "${BATCH[@]}")
    OBJECTS_JSON="{\"Objects\":[${OBJECTS_JSON%,}],\"Quiet\":true}"

    aws s3api delete-objects \
      --bucket "$BUCKET_NAME" \
      --delete "$OBJECTS_JSON"

    echo "Deleted batch of ${#BATCH[@]} object(s)."
  fi

  DELETED=$((DELETED + ${#BATCH[@]}))
done

echo "---"
if [[ "$DRY_RUN" == "true" ]]; then
  echo "Dry run complete. $TOTAL object(s) would be deleted."
  echo "Set DRY_RUN=false to perform actual deletion."
else
  echo "Cleanup complete. $DELETED object(s) deleted."
fi
```

##### Usage

First, do a dry run to preview what would be deleted:

```bash
BUCKET=s3://my-lst-bucket RETENTION_DAYS=3 ./s3-lst-cleanup.sh
```

When you are satisfied with the results, set `DRY_RUN=false` to perform the actual cleanup:

```bash
BUCKET=s3://my-lst-bucket RETENTION_DAYS=3 DRY_RUN=false ./s3-lst-cleanup.sh
```

##### Scheduling

To run this cleanup automatically, add it to a cron job:

```bash
# Run daily at 2 AM, deleting LSTs older than 3 days
0 2 * * * BUCKET=s3://my-lst-bucket RETENTION_DAYS=3 DRY_RUN=false /path/to/s3-lst-cleanup.sh >> /var/log/lst-cleanup.log 2>&1
```

:::note
This script requires `s3:ListBucket`, `s3:DeleteObject`, and `s3:HeadBucket` permissions on the LST bucket. These are the credentials used to _run the cleanup script_ — they are separate from the credentials the Connector uses to fetch a CSV from S3 (covered in the [S3 organization source guide](./connector-configuration/configure-a-connector-with-s3-access.md)).
:::

:::tip
This script only targets objects stored under date-prefixed keys (`YYYY/MM/DD/HH/`). Files at the bucket root such as `repos.csv` and `repos-lock.csv` are not affected.
:::

</TabItem>
<TabItem value="gcs" label="Google Cloud Storage">

You can use [Cloud Storage Object Lifecycle Management](https://cloud.google.com/storage/docs/lifecycle) to delete old LST artifacts without a custom script. The following example targets object names beginning with a digit, as date-prefixed LST artifacts do. Confirm that this scope matches your bucket before applying it; the rule also matches any other object whose name begins with a digit. It leaves root-level files such as `repos.csv` and `repos-lock.csv` in place.

Add these rules to your bucket's lifecycle configuration. Adjust the three-day retention period to suit your ingestion schedule.

```json
{
  "rule": [
    {
      "action": { "type": "Delete" },
      "condition": {
        "age": 3,
        "isLive": true,
        "matchesPrefix": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      }
    },
    {
      "action": { "type": "Delete" },
      "condition": { "daysSinceNoncurrentTime": 3, "isLive": false }
    },
    {
      "action": { "type": "AbortIncompleteMultipartUpload" },
      "condition": { "age": 1 }
    }
  ]
}
```

The first rule deletes live date-prefixed objects after three days. The second deletes noncurrent versions after three days, including old versions of the CSV files when Object Versioning is enabled. With versioning enabled, the first rule makes live artifacts noncurrent; the second rule deletes them after the noncurrent retention period. The third rule aborts incomplete XML API multipart uploads after one day. It does not apply to resumable uploads.

:::warning
Setting a lifecycle configuration replaces the bucket's existing rules. Merge these rules with any rules you need to keep. Review their scope before applying them, particularly the noncurrent-version rule, which applies to the entire bucket.
:::

Lifecycle actions run asynchronously. Object holds or retention policies can delay deletion. If soft delete is enabled, deleted objects remain recoverable and incur storage charges until the soft delete retention period expires. Cloud Storage does not use S3 delete markers.

#### Custom cleanup script

For more targeted cleanup, you can use the [Cloud Storage Python client](https://cloud.google.com/python/docs/reference/storage/latest). This example selects objects with a `YYYY/MM/DD/HH/` prefix older than the cutoff date. It leaves root-level CSV files untouched. It lists live objects only; use lifecycle rules to clean up noncurrent versions.

Install the `google-cloud-storage` package and configure [Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc) for the account running the script. That account needs `storage.objects.list` and `storage.objects.delete` on the bucket. These permissions are separate from those used by the [Connector](./connector-configuration/configure-a-connector-with-gcs-access.md).

:::warning
Run the script in dry run mode first, then review the listed objects before deleting them. The script deletes every matching object, not just LST JAR files.
:::

```python title="gcs-lst-cleanup.py"
import datetime
import os
import re

from google.cloud import storage

bucket_name = os.environ.get("BUCKET", "my-lst-bucket").removeprefix("gs://").rstrip("/")
retention_days = int(os.environ.get("RETENTION_DAYS", "3"))
dry_run = os.environ.get("DRY_RUN", "true").lower()
if retention_days < 1 or dry_run not in ("true", "false"):
    raise ValueError("RETENTION_DAYS must be positive and DRY_RUN must be true or false")

cutoff = datetime.datetime.now(datetime.timezone.utc).date() - datetime.timedelta(days=retention_days)
pattern = re.compile(r"^(\d{4})/(\d{2})/(\d{2})/\d{2}/")
client = storage.Client()
bucket = client.bucket(bucket_name)
count = 0

for blob in client.list_blobs(bucket):
    match = pattern.match(blob.name)
    if not match:
        continue
    try:
        object_date = datetime.date(*(int(part) for part in match.groups()))
    except ValueError:
        continue
    if object_date >= cutoff:
        continue
    print(f"{'Would delete' if dry_run == 'true' else 'Deleting'}: gs://{bucket_name}/{blob.name}")
    if dry_run == "false":
        blob.delete(if_generation_match=blob.generation)
    count += 1

print(f"{'Would delete' if dry_run == 'true' else 'Deleted'} {count} object(s).")
```

The cutoff uses the date in the object name and excludes the cutoff day. The generation precondition prevents the script from deleting an object that was replaced after it was listed.

Run a dry run first:

```bash
BUCKET=gs://my-lst-bucket RETENTION_DAYS=3 python3 gcs-lst-cleanup.py
```

When you have reviewed the results, run the cleanup:

```bash
BUCKET=gs://my-lst-bucket RETENTION_DAYS=3 DRY_RUN=false python3 gcs-lst-cleanup.py
```

You can schedule the cleanup with cron. Ensure the scheduled environment has the Python package and credentials configured:

```bash
# Run daily at 2 AM
0 2 * * * BUCKET=gs://my-lst-bucket RETENTION_DAYS=3 DRY_RUN=false /path/to/python3 /path/to/gcs-lst-cleanup.py >> /var/log/lst-cleanup.log 2>&1
```

</TabItem>
<TabItem value="artifactory" label="Artifactory">

For Artifactory, you can use AQL (Artifactory Query Language) queries to find and clean up old LSTs. Below are example queries to help you get started.

#### Example AQL queries for finding old LSTs

```aql
items.find({
    "repo":{"$match":"ingest-repo"},
    "path":{"$match":"some-org/some-repo*"},
    "created":{"$last" : "1d"}
}).limit(10000)
```

```bash
curl -X POST -H 'Content-Type: text/plain' -u user:password <artifactory url>/api/search/aql -d 'items.find({"repo":{"$match":"ingest-repo"},"modified":{"$gt":"2023-06-16T18:00:00.000000-04:00"}  ,"modified":{"$gt":"2024-04-17T16:48:50.00860443Z"}}).include("name","repo","path","modified").limit(100)'
```

</TabItem>
</Tabs>

