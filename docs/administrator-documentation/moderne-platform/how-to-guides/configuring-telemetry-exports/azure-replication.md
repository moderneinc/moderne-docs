---
sidebar_label: Azure replication setup
description: Receive a copy of your Moderne telemetry in storage you own when your Moderne tenant runs on Azure.
---

# Azure replication setup

This guide walks you through receiving telemetry when your Moderne tenant runs on Azure. Before starting, read the [overview](./overview.md) for context on what the data looks like and how it flows.

Moderne will give you read-only access to your tenant's telemetry. You'll then copy it into storage you own, on your own schedule. That storage doesn't have to be in Azure. Moderne never needs access to it.

Here's how the setup works end-to-end:

1. You create the destination you'll copy the data into.
2. You ask your CSM for read access.
3. Moderne sets up read-only access and sends you the details you need to sign in.
4. You set up a job that copies the data into your destination on a schedule.

## Prerequisites

This guide assumes that you have:

* A Moderne SaaS tenant.
* Somewhere you own to store the data, such as an Azure Storage account, an Amazon S3 bucket, or a Google Cloud Storage bucket.

## Step 1: Create the destination

Create the bucket, container, or other storage you'll copy the data into.

If you're copying into Azure Storage, sign in with the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli). Then, create the resource group, storage account, and container with the following commands:

```bash
# Replace these with your values:
DEST_RG=moderne-telemetry
DEST_REGION=eastus
DEST_ACCOUNT=acmemoderntel
DEST_CONTAINER=moderne-telemetry

az group create --name "$DEST_RG" --location "$DEST_REGION"

az storage account create \
    --name "$DEST_ACCOUNT" \
    --resource-group "$DEST_RG" \
    --location "$DEST_REGION" \
    --sku Standard_LRS \
    --kind StorageV2 \
    --allow-blob-public-access false

az storage container create \
    --account-name "$DEST_ACCOUNT" \
    --name "$DEST_CONTAINER" \
    --auth-mode login
```

:::note
Versioning and change feed are not required on the destination because you'll copy blobs into it instead of replicating them.
:::

## Step 2: Request read access

Ask your CSM for read access to your tenant's telemetry. You can sign in with a service principal that Moderne creates for you, or Moderne can trust an identity you already own.

### Using a service principal from Moderne

Moderne will create a service principal and send you the following values through a secure channel you both agree on:

| Value                | What it is                                                                                    |
|----------------------|-----------------------------------------------------------------------------------------------|
| Tenant ID            | The ID of the Microsoft Entra tenant the credential belongs to. This is Moderne's tenant, not yours. |
| Client ID            | The ID of the service principal you'll sign in as.                                            |
| Client secret        | The password for that service principal.                                                      |
| Storage account name | The Moderne storage account that holds your telemetry.                                        |
| Container name       | Always `bi-telemetry`.                                                                        |

The service principal can only read your tenant's telemetry. Moderne doesn't request any access to your storage.

:::warning
The client secret will expire one year after Moderne issues it. Ask your CSM for a new one before then. Otherwise, your copy job will stop working.
:::

You can check that the credential works with [AzCopy](https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10). Set the following environment variables so AzCopy signs in as the service principal. Then, list the container by running the following command:

```bash
export AZCOPY_AUTO_LOGIN_TYPE=SPN
export AZCOPY_TENANT_ID=<tenant-id>
export AZCOPY_SPA_APPLICATION_ID=<client-id>
export AZCOPY_SPA_CLIENT_SECRET=<client-secret>

azcopy list "https://<storage-account-name>.blob.core.windows.net/bi-telemetry"
```

### Using an identity you already own

Let your CSM know which identity your copy job runs as. Moderne will then trust that identity instead of creating a service principal. You won't have a secret to manage or renew.

Moderne already supports the Google service account that runs a Storage Transfer Service job. For other kinds of identities, talk to your CSM.

Moderne will send you the same values as above, without the client secret.

## Step 3: Copy the data on a schedule

Set up a job that copies the `bi-telemetry` container into the destination you created in step 1. You can use any tool that can sign in to Moderne's storage account as the identity from step 2.

If you're copying into Azure Storage, an Azure Data Factory copy activity can do this on a schedule. For its source, use an [Azure Blob Storage linked service](https://learn.microsoft.com/en-us/azure/data-factory/connector-azure-blob-storage) with service principal authentication and the values from step 2. For its sink, use your own storage account.

Keep the schedule running. Each run only copies what's in the `bi-telemetry` container at that moment.

## Verification

After the first copy completes, check your destination. If you copied into Azure Storage, list your container by running the following command:

```bash
az storage blob list \
    --account-name "$DEST_ACCOUNT" \
    --container-name "$DEST_CONTAINER" \
    --auth-mode login \
    --num-results 10 \
    --output table
```

Files under `tenant=<your-tenant>/source=<saas|cli>/type=<command>/year=.../month=.../day=.../` confirm the copy is working. See [Object key layout](./overview.md) for what each partition key means.

## Opting out

Contact your CSM to remove your access. Moderne will then delete the service principal or stop trusting your identity. After that, your copy job won't be able to sign in. Data you've already copied will stay in your storage.

## Next

Once data begins arriving in your storage, register the schema and start building reports. Continue to [Querying and BI](./querying-and-bi.md). The Athena notes there are AWS-specific, but the per-engine notes cover Microsoft Fabric and Synapse (the most natural Azure-side choice) along with other engines.
