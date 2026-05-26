---
sidebar_label: Azure replication setup
description: Set up Azure Storage Object Replication from the Moderne-managed telemetry account into a storage account you own.
---

# Azure replication setup

This guide walks you through receiving telemetry into a blob container in **your** Azure storage account via **Azure Storage Object Replication**. Before starting, read the [overview](./overview.md) for context on what the data looks like and how it flows.

The flow:

1. You create a destination storage account and container.
2. You enable the prerequisites object replication requires (versioning and change feed).
3. You grant Moderne's source storage account access via a role assignment on your destination container.
4. You send Moderne the destination resource IDs; Moderne creates the replication policy on the source side.

## Prerequisites

This guide assumes that you have:

* An Azure subscription you can create resources in, with permission to create resource groups, storage accounts, blob containers, and role assignments.
* The [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) installed, with `az login` completed against the target subscription.
* Your Moderne tenant name (the subdomain in your tenant's URL, e.g. `acme` for `acme.moderne.io`).
* A Moderne SaaS v2 tenant. If you are still on v1, see the [Availability note in the overview](./overview.md).

## What we'll need from you

| Value                                   | Example                                            | How to get it                                         |
|-----------------------------------------|----------------------------------------------------|-------------------------------------------------------|
| Tenant name                             | `acme`                                             | Your Moderne tenant subdomain.                        |
| Destination storage-account resource ID | `/subscriptions/.../storageAccounts/acmemoderntel` | `az storage account show -n <name> --query id -o tsv` |
| Destination container name              | `moderne-telemetry`                                | After step 1.                                         |
| Destination region                      | `eastus`                                           | Whatever your BI lives in.                            |

## Step 1: Create the destination storage account and container

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

## Step 2: Enable versioning and change feed

Azure Object Replication requires both on the destination account (versioning is also required on the source side; Moderne has already enabled it):

```bash
az storage account blob-service-properties update \
    --account-name "$DEST_ACCOUNT" \
    --resource-group "$DEST_RG" \
    --enable-versioning true \
    --enable-change-feed true
```

## Step 3: Grant Moderne's source identity write access

Each tenant has a dedicated **user-assigned managed identity** (UAMI) named `moderne-bi-telemetry-replication-uami-<your-tenant>` attached to the shared `modernetelemetry` storage account in Moderne's environment. This mirrors the per-tenant replication role used on AWS, so the customer-side flow is the same on both clouds: scope one tenant-specific write grant to one destination container.

Grant your tenant's UAMI the **Storage Blob Data Contributor** role scoped to **only** your destination container (not the whole account):

```bash
# Your tenant's UAMI object ID. Ask your CSM for the principalId of
# moderne-bi-telemetry-replication-uami-<your-tenant>:
MODERNE_SOURCE_MI_OBJECT_ID=<provided-by-your-csm>

az role assignment create \
    --assignee-object-id "$MODERNE_SOURCE_MI_OBJECT_ID" \
    --assignee-principal-type ServicePrincipal \
    --role "Storage Blob Data Contributor" \
    --scope "$(az storage account show -n $DEST_ACCOUNT -g $DEST_RG --query id -o tsv)/blobServices/default/containers/$DEST_CONTAINER"
```

:::note
The UAMI object ID is a GUID assigned by Azure at creation time, so your CSM will provide the exact value for your tenant. Your RBAC grant is scoped to a single container, so Moderne cannot read or write anything else in your storage account — and because the UAMI is tenant-specific, no other tenant's replication can use this grant either.
:::

## Step 4: Hand off to Moderne

Send your CSM:

* Tenant name
* Destination storage-account resource ID
* Destination container name

Moderne will create the object-replication policy on the source side, filtered to your tenant's container prefix. Object replication is asynchronous; expect new blobs to land within ~15 minutes.

## Verification

```bash
az storage blob list \
    --account-name "$DEST_ACCOUNT" \
    --container-name "$DEST_CONTAINER" \
    --prefix "tenant=$YOUR_TENANT/" \
    --auth-mode login \
    --num-results 10 \
    --output table
```

:::tip
**Cross-cloud destinations.** If your Moderne tenant is AWS-backed but your BI stack runs on Azure (or vice versa), native object replication doesn't apply. Reach out to your CSM. Moderne supports cross-cloud delivery via a scheduled sync job (typically 1-hour cadence), and the customer-side setup is the same: create the destination, grant write access, send us the coordinates.
:::

## Next

With data landing in your container, register the schema and start building reports. Continue to [Querying and BI](./querying-and-bi.md). The Athena walkthrough on that page is AWS-specific, but the *Other BI systems* section covers Microsoft Fabric and Synapse (the most natural Azure-side choice) along with other engines.
