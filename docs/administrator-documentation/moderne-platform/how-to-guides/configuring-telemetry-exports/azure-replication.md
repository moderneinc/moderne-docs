---
sidebar_label: Azure replication setup
description: Receive a copy of your Moderne telemetry in an Azure storage account you own, using Azure Data Share.
---

# Azure replication setup

This guide walks you through receiving telemetry into a blob container in **your** Azure storage account via [Azure Data Share](https://learn.microsoft.com/en-us/azure/data-share/overview). Before starting, read the [overview](./overview.md) for context on what the data looks like and how it flows.

Moderne shares your tenant's telemetry as a copy-based share. You accept an invitation in your own Azure tenant and choose the storage account that receives the data. Moderne never holds a credential into your subscription, and you never hold one into Moderne's. The invitation is the only link between the two.

Here's how the setup works end-to-end:

1. You create a destination storage account and container.
2. You send Moderne your tenant name and a recipient email address.
3. Moderne configures the share and sends a Data Share invitation to that address.
4. You accept the invitation, point it at your container, and enable the snapshot schedule.

## Prerequisites

This guide assumes that you have:

* An Azure subscription you can create resources in, with permission to create resource groups, storage accounts, and blob containers, and to accept Data Share invitations.
* The [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) installed, with `az login` completed against the target subscription.
* Your Moderne tenant name (the subdomain in your tenant's URL, e.g. `acme` for `acme.moderne.io`).
* A recipient email address (a Microsoft Entra user or group) that can accept the Data Share invitation.
* A Moderne SaaS v2 tenant. If you are still on v1, see the [Availability note in the overview](./overview.md).

## What we'll need from you

| Value           | Example                  | How to get it                                                            |
|-----------------|--------------------------|--------------------------------------------------------------------------|
| Tenant name     | `acme`                   | Your Moderne tenant subdomain.                                           |
| Recipient email | `data-platform@acme.com` | An Entra user or group in your directory that can accept the invitation. |

That is all we need. You choose the target storage account and container yourself when you accept the invitation, so Moderne never asks for those details.

## Step 1: Create the destination storage account and container

Create the resource group, storage account, and container with the following commands:

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
Versioning and change feed are not required on the destination. Data Share copies blobs on a schedule rather than replicating them, so the prerequisites that object replication would need do not apply here.
:::

## Step 2: Send Moderne your details

Send your CSM your tenant name and the recipient email address. Moderne then configures the share and sends a Data Share invitation to that address.

You are not asked to share your storage account details, and Moderne does not request any access to your subscription.

## Step 3: Accept the invitation

The recipient receives an Azure Data Share invitation by email. In the Azure portal:

1. Go to **Data Share**, then **Received shares**, and open the invitation.
2. Create a share subscription.
3. Choose the target storage account and container you created in step 1.

## Step 4: Enable the snapshot schedule

When creating the share subscription, enable the snapshot schedule. To receive data immediately, trigger a manual snapshot as well.

:::warning
Data does not flow until you complete this step. Accepting the invitation on its own does not start delivery. Telemetry is retained at the source for only seven days, so a share subscription left without an active schedule misses data permanently. See [Data delivery and retention](#data-delivery-and-retention).
:::

## Verification

After the first snapshot completes, list your target container:

```bash
az storage blob list \
    --account-name "$DEST_ACCOUNT" \
    --container-name "$DEST_CONTAINER" \
    --prefix "tenant=$YOUR_TENANT/" \
    --auth-mode login \
    --num-results 10 \
    --output table
```

Blobs under `tenant=<your-tenant>/source=<saas|cli>/type=<command>/year=.../month=.../day=.../` confirm the share is live. See [Object key layout](./overview.md) for what each partition key means.

## Data delivery and retention

| Property         | Behavior                                                               |
|------------------|------------------------------------------------------------------------|
| Cadence          | Snapshots run daily once the schedule is enabled.                      |
| First delivery   | Up to 24 hours after acceptance, or immediately with a manual snapshot. |
| Source retention | Telemetry is retained at the source for seven days.                    |
| Deletions        | Not propagated. Your copy is yours to keep for as long as you choose.  |

Because the source retains telemetry for seven days, your snapshot schedule must run well inside that window. If snapshots stop running, whether from a disabled schedule, a revoked subscription that is not restored, or repeated snapshot failures, data that ages past seven days at the source cannot be recovered through the share. Monitor snapshot success in the Azure portal under your share subscription's snapshot history, and contact your CSM if you need a backfill.

## Opting out

Contact your CSM to stop the share. To stop delivery from your side, revoke your share subscription in the Azure portal (**Data Share**, then **Received shares**, then revoke). Revoking stops further snapshots into your account. Data already delivered remains in your storage account.

## Next

With data landing in your container, register the schema and start building reports. Continue to [Querying and BI](./querying-and-bi.md). The Athena walkthrough on that page is AWS-specific, but the *Other BI systems* section covers Microsoft Fabric and Synapse (the most natural Azure-side choice) along with other engines.
