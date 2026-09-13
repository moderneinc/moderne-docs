---
title: Configure a Connector with a Google Cloud Storage organization source
sidebar_label: Google Cloud Storage organization source
description: How to configure the Moderne Connector to load a repository CSV from Google Cloud Storage.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure a Connector with a Google Cloud Storage organization source

This guide explains how to point the Moderne Connector at a repository CSV stored in a Google Cloud Storage bucket. On each polling cycle, the Connector fetches that CSV to discover your repositories. When the CSV includes `publishUri` values, the Connector uses them to locate each repository's LST artifact.

Any of the CSV variants documented in the [repos.csv reference](../../../../user-documentation/moderne-cli/references/repos-csv.md) work here, as long as the CSV defines your [organizational hierarchy](./configure-organizations-hierarchy.md): a minimal CSV with `origin`, `path`, `branch`, and at least one `org` column, or a full `repos-lock.csv` produced by Mass Ingest's `mod publish`.

For background on how the Connector uses CSV sources, please see [how the Connector finds your repositories and their LSTs](./connector-config.md#step-5-configure-the-connector-to-find-your-repositories-and-their-lsts).

## Prerequisites

* A repository CSV stored as a single object in a Cloud Storage bucket. The `uri` you configure must point at that object (e.g., `gs://my-bucket/repos-lock.csv`), not at a bucket or prefix.
* A way for the Connector to authenticate, which will be either Application Default Credentials or a service account key. Both are covered in [authentication options](#authentication-options) below.
* A service account that can read the CSV object and the LST objects alongside it. The Connector only ever reads individual objects, so `storage.objects.get` is the only permission it needs. You can grant it through the predefined **Storage Object Viewer** (`roles/storage.objectViewer`) role, or through a custom role if you'd prefer. It never needs permission to list the bucket.

## Authentication options

You have two options here, and we'd recommend the first:

* **Application Default Credentials (ADC)**: attach a service account to the workload and configure only the `uri`. On GKE, that means [Workload Identity](https://cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), while on Compute Engine the attached service account is picked up for you. You can also point `GOOGLE_APPLICATION_CREDENTIALS` at a key file. Whichever you choose, no key material ends up in the Connector's configuration.
* **Service account key**: set `credentials-json` to the contents of the key file. You should treat that value as a secret and supply it through your platform's secret mechanism rather than an inline environment variable wherever you can.

## Which artifacts the Connector will fetch

The Connector only fetches LST artifacts that live under the same prefix as the CSV itself. If you publish with the Moderne CLI, your CSV sits at the root of the bucket (`gs://my-bucket/repos-lock.csv`), so the Connector can reach anything in that bucket. If you place the CSV yourself at, say, `gs://my-bucket/lsts/repos-lock.csv`, then the Connector is limited to objects under `lsts/`.

Either way, a row that points outside that prefix, or at a different bucket, is refused. A bucket is often shared by unrelated teams, so the Connector won't use one source's credentials to reach into another's.

## Encrypting LSTs before they reach Moderne

By default, the Connector fetches each LST from the bucket, encrypts it, and uploads it to Moderne. For Cloud Storage sources it's also the only supported arrangement: if you turn encryption off without configuring a `poll` block, the Connector will refuse to start.

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

The CSV and the LSTs it points at are produced by the Moderne CLI, so you'll want to configure the CLI to publish to the same bucket:

```bash
mod config lsts artifacts gcs edit gs://my-bucket
mod build /path/to/your/repos
mod publish /path/to/your/repos
```

`mod publish` uploads each LST under a `yyyy/MM/dd/HH/` prefix and maintains a merged `repos-lock.csv` at the root of the bucket. That merged file is the object you'll want to point the Connector at.

You can safely publish from several machines at once. Each update to `repos-lock.csv` only lands if the file hasn't changed since it was read, so a machine that loses the race will retry. If it keeps losing, `mod publish` fails rather than overwriting another machine's rows.

See the [repos-lock.csv guide](../../../../user-documentation/moderne-cli/how-to-guides/repos-lock-csv.md) for the full publishing workflow.
