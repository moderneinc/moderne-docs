---
sidebar_label: Configure telemetry
description: How Moderne DX collects telemetry from the Moderne CLI, where it stores that telemetry, and how to query it.
---

# Configuring telemetry for Moderne DX

The Moderne CLI records telemetry on every LST build, recipe run, and git operation. Each record shows what ran, how many repositories it touched, and how much developer effort it saved. You can track things like CLI adoption and migration impact by sending that data to your BI tools.

DX can collect this telemetry for you. A CLI signed in to DX uploads it automatically. Moderne does not receive any of this telemetry data.

By default, the data is written to the file system. We recommend storing it in an Amazon S3 bucket or an Azure Blob Storage container instead. Your BI tools can query it there, and it won't fill DX's disk.

In this guide, we will walk you through how uploads work, how to choose where DX stores telemetry, how to include mass ingest, and how to query the data.

## Prerequisites

This guide assumes you have:

* [Installed Moderne DX](../getting-started/installing-moderne-dx.md).
* [Pointed your CLIs at DX](./running-moderne-dx.md#pointing-the-cli-at-dx).
* Read the [full guide on CLI telemetry](../../../user-documentation/moderne-cli/how-to-guides/cli-telemetry.md), which explains what the CLI records and the fields available for reporting.

## How CLIs upload telemetry

Before a developer signs in with `mod login`, the CLI keeps its telemetry in a queue on their machine. Once they sign in, the CLI uploads the queue at the end of each command.

To upload a long queue all at once, run `mod telemetry publish`.

## Choosing where DX stores telemetry

To store telemetry in an Amazon S3 bucket or Azure Blob Storage container, follow the steps below and restart DX.

### Using an Amazon S3 bucket

Set the bucket in your `moderne.yml` file:

```yaml title="moderne.yml"
moderne:
  gateway:
    telemetry:
      s3:
        bucket: acme-moderne-telemetry
```

In your `moderne.env` file, add the AWS credentials for DX to use:

```bash title="moderne.env"
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=…
AWS_SECRET_ACCESS_KEY=…
```

These credentials need `s3:ListBucket` on the bucket and `s3:PutObject` on its objects.

### Using an Azure Blob Storage container

Set both the storage account and the container in your `moderne.yml` file:

```yaml title="moderne.yml"
moderne:
  gateway:
    telemetry:
      azure:
        account-name: acmemoderne
        container-name: bi-telemetry
```

In your `moderne.env` file, add the credentials of the service principal for DX to use:

```bash title="moderne.env"
AZURE_TENANT_ID=…
AZURE_CLIENT_ID=…
AZURE_CLIENT_SECRET=…
```

This service principal needs the Storage Blob Data Contributor role on the container.

### Keeping telemetry on DX's disk

If you don't set a bucket or container, DX writes telemetry to the `telemetry` directory in its permanent directory. That is `data/permanent/telemetry` (unless you set `moderne.storage.permanent-dir`).

DX never deletes these files, so plan disk space for them.

To use other storage, such as Google Cloud Storage, you will need to copy these files there yourself.

If you set a bucket or container later, new telemetry goes there and anything DX already wrote stays on disk.

### Checking where telemetry is going

Each time DX starts, it logs where telemetry will go. Under systemd, you can find that line with this command:

```bash
journalctl -u moderne-dx | grep "CLI telemetry uploads go to"
```

If you started DX with `java -jar moderne-dx.jar start`, the line is in that command's output. You should see the bucket or container you set:

```text
CLI telemetry uploads go to s3://acme-moderne-telemetry
```

If DX can't reach your bucket or container, it will not finish starting and the gateway's log will say what went wrong.

## Including telemetry from mass ingest

By default, mass ingest containers don't upload telemetry to DX. Their telemetry is lost when each container stops.

To keep it, set these two environment variables on the containers, alongside `MOD_LICENSE_KEY`:

| Variable                   | Value                                                                                                                                 |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `MOD_TENANT_HOST`          | DX's public URL, such as `https://moderne.acme.com`.                                                                                  |
| `MOD_TENANT_AUTHORIZATION` | A [personal access token](../../../user-documentation/moderne-platform/how-to-guides/create-api-access-tokens.md) you created in DX. |

The [mass ingest example](https://github.com/moderneinc/mass-ingest-example) image already waits up to 30 seconds for the upload when a command ends. If you build your own image, or run the CLI on CI runners, run `mod config telemetry wait-for-upload` there too.

If DX's certificate comes from a private certificate authority, you will need to [add it to the image](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/image.md#self-signed-certificates).

## Querying telemetry

DX organizes telemetry into `tenant`/`source`/`type`/`year`/`month`/`day` folders. The Moderne Platform uses the same layout for its telemetry exports. The layout is the same on disk, in S3, and in Azure Blob Storage. A trace from `mod run` looks like this:

```text
tenant=dx/source=cli/type=run/year=2026/month=11/day=05/20261105143000-abcde.csv
```

The `tenant` value comes from `moderne.tenant.name`, which defaults to `dx`.

[Querying and BI](../../moderne-platform/how-to-guides/configuring-telemetry-exports/querying-and-bi.md) explains how to make this data queryable, with notes for Athena, Snowflake, BigQuery, and Databricks. It also covers the Moderne BI templates starter kit.

If you keep telemetry on DX's disk, DuckDB can read the directory where it is. This query reads every `run` trace:

```sql
SELECT *
FROM read_csv_auto('data/permanent/telemetry/tenant=dx/*/type=run/**/*.csv', hive_partitioning=true);
```

## Next steps

* [Set up mass ingest](./mass-ingest-dx.md) to keep LSTs current for the repositories you report on.
* [Learn what Moderne DX runs](../getting-started/overview.md) and how it compares to the Moderne Platform.
