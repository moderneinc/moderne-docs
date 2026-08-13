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
* One of the following authentication methods:
  * Application Default Credentials — a service account attached to the workload (GKE Workload Identity, a Compute Engine service account, or `GOOGLE_APPLICATION_CREDENTIALS` pointing at a key file)
  * A service account key, supplied inline as JSON
* The principal used must be able to read the CSV object and the LST objects alongside it. The predefined **Storage Object Viewer** (`roles/storage.objectViewer`) role on the bucket is sufficient. A custom role needs `storage.objects.get`.

Unlike the S3 source, the Connector performs no bucket-level startup connectivity check, so no bucket listing permission is required.

## Authentication options

* **Application Default Credentials** (recommended): attach a service account to the workload and configure only the `uri`. On GKE this means [Workload Identity](https://cloud.google.com/kubernetes-engine/docs/concepts/workload-identity); no key material ever reaches the Connector's configuration.
* **Service account key**: set `credentialsJson` to the contents of the key file. Treat it as a secret — use your platform's secret mechanism rather than an inline environment variable where possible.

## Where the Connector will and will not fetch from

The Connector fetches LST artifacts only from the object prefix the CSV itself lives under. A CSV at `gs://my-bucket/lsts/repos-lock.csv` may reference artifacts under `gs://my-bucket/lsts/...`, but a row pointing at `gs://my-bucket/elsewhere/...` or at a different bucket is refused. A bucket is often a boundary between unrelated teams, so the source's credentials are not used to reach outside the prefix it was configured with.

## Encryption is required

Cloud Storage sources must run with `encrypt: true`, which is the default. The Connector fetches each LST, encrypts it, and uploads it to Moderne.

Pass-through mode (`encrypt: false` with no `poll:` block) is not supported for Cloud Storage sources, and the Connector will refuse to start if one is configured that way. Pass-through relies on the Connector tunneling the source to Moderne on the platform's behalf, which is not yet implemented for Cloud Storage.

## Configuring the Moderne Connector

The following table contains all the variables/arguments you need to add to your Moderne Connector run command in order for it to load a repository CSV from Cloud Storage. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne Connector guide](./connector-config.md).

You can configure multiple Cloud Storage sources by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                             | Required                                         | Default | Description                                                                                                                          |
|-----------------------------------------------------------|--------------------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_ORGANIZATION_SOURCES_GCS_{index}_URI`            | `true`                                           |         | The Cloud Storage URI of the CSV object. Must start with `gs://` and include the object name (e.g., `gs://my-bucket/repos-lock.csv`). |
| `MODERNE_ORGANIZATION_SOURCES_GCS_{index}_CREDENTIALSJSON`| `false` (Required if not using ADC)              |         | The contents of a service account key file. Omit to use Application Default Credentials.                                             |
| `MODERNE_ORGANIZATION_SOURCES_GCS_{index}_PROJECT`        | `false`                                          |         | The project to bill requests to. Only needed for requester-pays buckets.                                                             |
| `MODERNE_ORGANIZATION_SOURCES_GCS_{index}_ENDPOINTURL`    | `false`                                          |         | Overrides the default `storage.googleapis.com` endpoint, e.g. a Private Service Connect endpoint.                                    |

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

| Argument Name                                                 | Required                            | Default | Description                                                                                                                          |
|----------------------------------------------------------------|-------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.organization.sources.gcs[{index}].uri`              | `true`                              |         | The Cloud Storage URI of the CSV object. Must start with `gs://` and include the object name (e.g., `gs://my-bucket/repos-lock.csv`). |
| `--moderne.organization.sources.gcs[{index}].credentialsJson`  | `false` (Required if not using ADC) |         | The contents of a service account key file. Omit to use Application Default Credentials.                                             |
| `--moderne.organization.sources.gcs[{index}].project`          | `false`                             |         | The project to bill requests to. Only needed for requester-pays buckets.                                                             |
| `--moderne.organization.sources.gcs[{index}].endpointUrl`      | `false`                             |         | Overrides the default `storage.googleapis.com` endpoint, e.g. a Private Service Connect endpoint.                                    |

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
--moderne.organization.sources.gcs[0].credentialsJson="$(cat service-account-key.json)" \
# ... Additional arguments
```

</TabItem>
</Tabs>

## Publishing LSTs to the bucket

The CSV and the LSTs it points at are produced by the Moderne CLI. Configure the CLI to publish to the same bucket:

```bash
mod config lsts artifacts gcs edit gs://my-bucket
mod build /path/to/your/repos
mod publish /path/to/your/repos
```

`mod publish` uploads each LST under a `yyyy/MM/dd/HH/` prefix and maintains a merged `repos-lock.csv` at the root of the bucket, which is the object to point the Connector at. Concurrent publishers are safe: each update to `repos-lock.csv` is applied only if the object has not changed since it was read, so a machine that loses the race retries rather than overwriting another machine's rows.

See the [repos-lock.csv guide](../../../../user-documentation/moderne-cli/how-to-guides/repos-lock-csv.md) for the full publishing workflow.
