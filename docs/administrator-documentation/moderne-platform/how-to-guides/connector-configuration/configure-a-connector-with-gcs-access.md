---
title: Configure a Connector with a Google Cloud Storage organization source
sidebar_label: Google Cloud Storage organization source
description: How to configure the Moderne Connector to load a repository CSV from Google Cloud Storage.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure a Connector with a Google Cloud Storage organization source

If you publish LSTs to Google Cloud Storage, the bucket already holds everything the Connector needs. [`mod publish` keeps a `repos-lock.csv` there](#publishing-lsts-to-the-bucket) that lists every repository and where its LST lives. Point the Connector at that file and it will discover your repositories and fetch their LSTs from the same bucket, with no separate CSV to host or keep in sync.

The [organizational hierarchy](./configure-organizations-hierarchy.md) comes from the `org` columns of the `repos.csv` file you publish from, as described in the [repos.csv reference](../../../../user-documentation/moderne-cli/references/repos-csv.md).

:::note
A row without a `publishUri` still shows up in your organizational hierarchy, but you won't be able to run recipes against it because the Connector has no LST to fetch.
:::

For background on how the Connector uses CSV sources, please see [how the Connector finds your repositories and their LSTs](./connector-config.md#step-5-configure-the-connector-to-find-your-repositories-and-their-lsts).

## Prerequisites

* A `repos-lock.csv` file stored as a single object in a Cloud Storage bucket, alongside the LSTs it lists. The `uri` you configure must point at that object (e.g., `gs://my-bucket/repos-lock.csv`), not at a bucket or prefix.
* A way for the Connector to authenticate, which will be either Application Default Credentials or a service account key. Both are covered in [authentication options](#authentication-options) below.
* A service account that can read the CSV object and the LST objects alongside it. The Connector only ever reads individual objects, so `storage.objects.get` is the only permission it needs. You can grant it through the predefined **Storage Object Viewer** (`roles/storage.objectViewer`) role, or through a custom role if you'd prefer. It never needs permission to list the bucket.

## Authentication options

You have two options here, and we'd recommend the first:

* **Application Default Credentials (ADC)**: attach a service account to the workload and configure only the `uri`. On GKE, that means [Workload Identity](https://cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), while on Compute Engine the attached service account is picked up for you. You can also point `GOOGLE_APPLICATION_CREDENTIALS` at a key file. Whichever you choose, no key material ends up in the Connector's configuration.
* **Service account key**: set `credentials-json` to the contents of the key file. You should treat that value as a secret and supply it through your platform's secret mechanism rather than an inline environment variable wherever you can.

## Which artifacts the Connector will fetch

The Connector refuses to fetch an LST from anywhere other than the bucket that holds your `repos-lock.csv`. You won't run into this with `mod publish`, which writes the file at the root of the bucket (`gs://my-bucket/repos-lock.csv`) and uploads the LSTs alongside it. It only matters if you edit `publishUri` values by hand to point at another bucket.

## Encrypting LSTs before they reach Moderne

Encryption is mandatory for Cloud Storage sources, so you will need to configure the Connector with a symmetric key, as described in [step 1 of the Connector configuration guide](./connector-config.md#step-1-generate-your-symmetric-key).

## Configuring the Moderne Connector

The following table contains all the variables/arguments you need to add to your Moderne Connector run command in order for it to load a repository CSV from Cloud Storage. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne Connector guide](./connector-config.md).

You can configure multiple Cloud Storage sources by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                              | Required                            | Default | Description                                                                                                                           |
|------------------------------------------------------------|-------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_ORGANIZATION_SOURCES_GCS_{index}_URI`             | `true`                              |         | The Cloud Storage URI of the CSV object. Must start with `gs://` and include the object name (e.g., `gs://my-bucket/repos-lock.csv`). |
| `MODERNE_ORGANIZATION_SOURCES_GCS_{index}_CREDENTIALSJSON` | `false` (Required if not using ADC) |         | The contents of a service account key file. Omit to use Application Default Credentials.                                              |
| `MODERNE_ORGANIZATION_SOURCES_GCS_{index}_PROJECT`         | `false`                             |         | The project to bill requests to. Only needed for requester-pays buckets.                                                              |
| `MODERNE_ORGANIZATION_SOURCES_GCS_{index}_ENDPOINTURL`     | `false`                             |         | Overrides the default `storage.googleapis.com` endpoint (e.g., a Private Service Connect endpoint).                                   |

**Example using Application Default Credentials:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_GCS_0_URI=gs://my-bucket/repos-lock.csv \
# ... Additional variables
```

**Example with a service account key:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_GCS_0_URI=gs://my-bucket/repos-lock.csv \
-e MODERNE_ORGANIZATION_SOURCES_GCS_0_CREDENTIALSJSON="$(cat service-account-key.json)" \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                  | Required                            | Default | Description                                                                                                                           |
|----------------------------------------------------------------|-------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.organization.sources.gcs[{index}].uri`              | `true`                              |         | The Cloud Storage URI of the CSV object. Must start with `gs://` and include the object name (e.g., `gs://my-bucket/repos-lock.csv`). |
| `--moderne.organization.sources.gcs[{index}].credentials-json` | `false` (Required if not using ADC) |         | The contents of a service account key file. Omit to use Application Default Credentials.                                              |
| `--moderne.organization.sources.gcs[{index}].project`          | `false`                             |         | The project to bill requests to. Only needed for requester-pays buckets.                                                              |
| `--moderne.organization.sources.gcs[{index}].endpoint-url`     | `false`                             |         | Overrides the default `storage.googleapis.com` endpoint (e.g., a Private Service Connect endpoint).                                   |

**Example using Application Default Credentials:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.gcs[0].uri=gs://my-bucket/repos-lock.csv \
# ... Additional arguments
```

**Example with a service account key:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.gcs[0].uri=gs://my-bucket/repos-lock.csv \
--moderne.organization.sources.gcs[0].credentials-json="$(cat service-account-key.json)" \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Publishing LSTs to the bucket

The Moderne CLI produces both the CSV and the LSTs it points at. Configure it to publish to the same bucket:

```bash
mod config lsts artifacts gcs edit gs://my-bucket
mod build /path/to/your/repos
mod publish /path/to/your/repos
```

`mod publish` uploads each LST under a `yyyy/MM/dd/HH/` prefix and maintains a merged `repos-lock.csv` at the root of the bucket. That merged file is the object you'll want to point the Connector at.

To keep your LSTs up to date, you'll want to run `mod publish` every day through a [mass ingest](../mass-ingest.md) pipeline rather than by hand. Mass ingest runs `mod publish --sync-csv`, which reads the `repos.csv` you put at the root of the bucket, publishes each repository, and records the results in the same `repos-lock.csv`. The Connector re-reads that file every ten minutes by default. You can change that with the [`moderne.connector.organization.interval`](./connector-variables.md#organization-sync-variables) setting.

If you shard mass ingest across several machines, they can all publish to the same bucket at once. Each one adds its own rows to `repos-lock.csv` without touching the others'. If a machine can't get its rows in, its `mod publish` fails and leaves the file as the other machines wrote it.

See the [repos-lock.csv guide](../../../../user-documentation/moderne-cli/how-to-guides/repos-lock-csv.md) for the full publishing workflow.
