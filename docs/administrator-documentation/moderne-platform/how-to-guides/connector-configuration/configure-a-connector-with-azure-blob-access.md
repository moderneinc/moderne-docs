---
title: Configure a Connector with an Azure Blob Storage organization source
sidebar_label: Azure Blob Storage organization source
description: How to configure the Moderne Connector to load a repository CSV from Azure Blob Storage.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure a Connector with an Azure Blob Storage organization source

If you publish LSTs to Azure Blob Storage, the container already holds everything the Connector needs. [`mod publish` keeps a `repos-lock.csv` there](#publishing-lsts-to-the-container) that lists every repository and where its LST lives. Point the Connector at that file and it will discover your repositories and fetch their LSTs from the same container, with no separate CSV to host or keep in sync.

The [organizational hierarchy](./configure-organizations-hierarchy.md) comes from the `org` columns of the `repos.csv` file you publish from, as described in the [repos.csv reference](../../../../user-documentation/moderne-cli/references/repos-csv.md).

:::note
A row without a `publishUri` still shows up in your organizational hierarchy, but you won't be able to run recipes against it because the Connector has no LST to fetch.
:::

For background on how the Connector uses CSV sources, please see [how the Connector finds your repositories and their LSTs](./connector-config.md#step-5-configure-the-connector-to-find-your-repositories-and-their-lsts).

## Prerequisites

* A `repos-lock.csv` file stored as a single blob in an Azure Blob Storage container, alongside the LSTs it lists. The `uri` you configure must point at that blob (e.g., `https://myaccount.blob.core.windows.net/mycontainer/repos-lock.csv`), not at the container.
* A way for the Connector to authenticate, using any of the [authentication options](#authentication-options) below.
* Read access to the CSV blob and the LST blobs alongside it. The Connector never needs to write to the container or list its contents.

## Authentication options

You have three options here, and we'd recommend the first:

* **Microsoft Entra ID**: configure only the `uri`, and the Connector authenticates with whatever identity its environment provides. That can be a managed identity on Azure VMs and AKS, or a service principal set through the `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, and `AZURE_CLIENT_SECRET` environment variables. Either way, the identity needs the **Storage Blob Data Reader** role on the container or the storage account. Management roles such as **Owner** or **Contributor** on the subscription do not grant access to blob data. No key material ends up in the Connector's configuration.
* **SAS token**: set `sas-token` to a container-scoped SAS that grants **Read** permission. Provide the query-string portion only, with or without the leading `?`.
* **Connection string**: set `connection-string` to the storage account's connection string, found on the account's **Access keys** page. A connection string includes the account key. That key grants full access to every container in the account, not just this one.

If you set both, the Connector uses the connection string and ignores the SAS token. You should treat both values as secrets and supply them through your platform's secret mechanism rather than an inline environment variable wherever you can.

## Which artifacts the Connector will fetch

The Connector only fetches LST artifacts that live in the same container as your `repos-lock.csv` file. `mod publish` always writes that file at the root of the container (`https://myaccount.blob.core.windows.net/mycontainer/repos-lock.csv`), so every LST that `mod publish` uploads is within the Connector's reach.

## Encrypting LSTs before they reach Moderne

The Connector fetches your LSTs from the container, so it has to encrypt them before uploading them to Moderne. You will need to configure the Connector with a symmetric key, as described in [step 1 of the Connector configuration guide](./connector-config.md#step-1-generate-your-symmetric-key).

## Configuring the Moderne Connector

The following table contains all the variables/arguments you need to add to your Moderne Connector run command in order for it to load a repository CSV from Azure Blob Storage. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne Connector guide](./connector-config.md).

You can configure multiple Azure Blob Storage sources by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                         | Required | Default | Description                                                                                                                                                          |
|-----------------------------------------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_ORGANIZATION_SOURCES_AZURE_{index}_URI`                      | `true`   |         | The URL of the CSV blob (e.g., `https://myaccount.blob.core.windows.net/mycontainer/repos-lock.csv`).                                                                |
| `MODERNE_ORGANIZATION_SOURCES_AZURE_{index}_SASTOKEN`                 | `false`  |         | A container-scoped SAS token with **Read** permission. Omit to use Microsoft Entra ID.                                                                               |
| `MODERNE_ORGANIZATION_SOURCES_AZURE_{index}_CONNECTIONSTRING`         | `false`  |         | The storage account's connection string. Takes precedence over the SAS token. Omit to use Microsoft Entra ID.                                                        |
| `MODERNE_ORGANIZATION_SOURCES_AZURE_{index}_SKIPVALIDATECONNECTIVITY` | `false`  | `false` | By default, on Connector startup, the Connector validates that it can read the CSV blob and fails to start if it cannot. Set this to `true` to skip that validation. |

**Example using Microsoft Entra ID:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_AZURE_0_URI=https://myaccount.blob.core.windows.net/mycontainer/repos-lock.csv \
# ... Additional variables
```

**Example with a SAS token:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_AZURE_0_URI=https://myaccount.blob.core.windows.net/mycontainer/repos-lock.csv \
-e MODERNE_ORGANIZATION_SOURCES_AZURE_0_SASTOKEN="sv=..." \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                              | Required | Default | Description                                                                                                                                                          |
|----------------------------------------------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.organization.sources.azure[{index}].uri`                        | `true`   |         | The URL of the CSV blob (e.g., `https://myaccount.blob.core.windows.net/mycontainer/repos-lock.csv`).                                                                |
| `--moderne.organization.sources.azure[{index}].sas-token`                  | `false`  |         | A container-scoped SAS token with **Read** permission. Omit to use Microsoft Entra ID.                                                                               |
| `--moderne.organization.sources.azure[{index}].connection-string`          | `false`  |         | The storage account's connection string. Takes precedence over the SAS token. Omit to use Microsoft Entra ID.                                                        |
| `--moderne.organization.sources.azure[{index}].skip-validate-connectivity` | `false`  | `false` | By default, on Connector startup, the Connector validates that it can read the CSV blob and fails to start if it cannot. Set this to `true` to skip that validation. |

**Example using Microsoft Entra ID:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.azure[0].uri=https://myaccount.blob.core.windows.net/mycontainer/repos-lock.csv \
# ... Additional arguments
```

**Example with a SAS token:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.azure[0].uri=https://myaccount.blob.core.windows.net/mycontainer/repos-lock.csv \
--moderne.organization.sources.azure[0].sas-token="sv=..." \
# ... Additional arguments
```
</TabItem>

</Tabs>

## Publishing LSTs to the container

The Moderne CLI produces both the CSV and the LSTs it points at. Configure it to publish to the same container:

```bash
mod config lsts artifacts azure-blob edit https://myaccount.blob.core.windows.net/mycontainer
mod build /path/to/your/repos
mod publish /path/to/your/repos
```

Like the Connector, the CLI uses Microsoft Entra ID unless you pass `--connection-string` or `--sas-token`. A SAS token for publishing needs **Read**, **Write**, and **List** permissions on the container.

`mod publish` uploads each LST under a `yyyy/MM/dd/HH/` prefix and maintains a merged `repos-lock.csv` at the root of the container. That merged file is the blob you'll want to point the Connector at.

To keep your LSTs up to date, you'll want to run `mod publish` every day through a [mass ingest](../mass-ingest.md) pipeline rather than by hand. Mass ingest runs `mod publish --sync-csv`, which reads the `repos.csv` you put at the root of the container, publishes each repository, and records the results in the same `repos-lock.csv`. The Connector re-reads that file every ten minutes by default. You can change that with the [`moderne.connector.organization.interval`](./connector-variables.md#organization-sync-variables) setting.

If you shard mass ingest across several machines, they can all publish to the same container at once. Each one adds its own rows to `repos-lock.csv` without touching the others'. If a machine can't get its rows in, its `mod publish` fails and leaves the file as the other machines wrote it.

See the [repos-lock.csv guide](../../../../user-documentation/moderne-cli/how-to-guides/repos-lock-csv.md) for the full publishing workflow.
