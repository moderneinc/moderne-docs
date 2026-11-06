---
sidebar_label: Configure telemetry
description: How Moderne DX collects telemetry from the Moderne CLI, where it stores that telemetry, and how to query it.
---

# Configuring telemetry for Moderne DX

The Moderne CLI records telemetry on every LST build, recipe run, and git operation. Each record shows what ran, how many repositories it touched, and how much developer effort it saved. You can track things like CLI adoption and migration impact by sending that data to your BI tools.

Moderne DX collects this telemetry for you. A CLI signed in to DX uploads to it automatically. Moderne does not receive this telemetry.

We recommend storing it in an Amazon S3 bucket or an Azure Blob Storage container. Your BI tools can query it from there. Until you set one up, DX keeps it on its own disk.

In this guide, we will walk you through how uploads work, how to choose where DX stores telemetry, how to include mass ingest, and how to query the data.

## Prerequisites

This guide assumes you have:

* [Installed Moderne DX](../getting-started/installing-moderne-dx.md).
* [Pointed your CLIs at DX](./running-moderne-dx.md#pointing-the-cli-at-dx).
* Read the [full guide on CLI telemetry](../../../user-documentation/moderne-cli/how-to-guides/cli-telemetry.md), which explains what the CLI records and the fields available for reporting.

## How CLIs upload telemetry

A CLI signed in to DX uploads its telemetry at the end of every command. You do not need to turn this on.

DX only accepts uploads from a signed-in CLI. Until a CLI signs in, its telemetry waits in a queue on its machine. The same thing happens when a CLI's token expires. Once the developer runs `mod login`, the queue starts uploading at the end of each command.

To upload a long queue all at once, run `mod telemetry publish`.

## Choosing where DX stores telemetry

We recommend an Amazon S3 bucket or an Azure Blob Storage container. Your BI tools can query telemetry from there. It also won't use up DX's disk.

To set one up, follow the steps for your storage below and restart DX.

### Using an Amazon S3 bucket

Name the bucket in your `moderne.yml` file:

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

Name both the storage account and the container in your `moderne.yml` file:

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

If you don't name a bucket or container, DX writes telemetry to the `telemetry` directory in its permanent directory. That is `data/permanent/telemetry` unless `moderne.storage.permanent-dir` names another. [Your backups](./running-moderne-dx.md#backing-up) will include it.

DX never deletes these files. You will need to plan disk space for them.

To use other storage, such as Google Cloud Storage, you will need to copy these files there yourself.

If you name a bucket or container later, new telemetry goes there. Anything DX already wrote stays on disk.

### Checking where telemetry is going

Each time DX starts, it logs where telemetry will go. Under systemd, you can find that line with this command:

```bash
journalctl -u moderne-dx | grep "CLI telemetry uploads go to"
```

If you started DX with `java -jar moderne-dx.jar start`, the line is in that command's output. You should see the bucket or container you named:

```text
CLI telemetry uploads go to s3://acme-moderne-telemetry
```

If you see the `telemetry` directory instead, check the spelling of the setting in your `moderne.yml` file. DX does not warn about a misspelled setting. It keeps writing to disk.

If DX can't reach your bucket or container, it will not finish starting. The gateway's log says what went wrong.

## Including telemetry from mass ingest

Mass ingest containers do not upload telemetry to DX by default. Their telemetry is lost when each container stops.

To keep it, set these two environment variables on the containers, alongside `MOD_LICENSE_KEY`:

| Variable                   | Value                                                                                                                                 |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `MOD_TENANT_HOST`          | DX's public URL, such as `https://moderne.acme.com`.                                                                                  |
| `MOD_TENANT_AUTHORIZATION` | A [personal access token](../../../user-documentation/moderne-platform/how-to-guides/create-api-access-tokens.md) you created in DX. |

The [mass ingest example](https://github.com/moderneinc/mass-ingest-example) image already waits up to 30 seconds for the upload when a command ends. If you build your own image, or run the CLI on CI runners, run `mod config telemetry wait-for-upload` there too.

If DX's certificate comes from a private certificate authority, you will need to [add it to the image](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/image.md#self-signed-certificates).

## Publishing telemetry from a CLI that can't reach DX

A CLI that can't reach DX keeps its telemetry on its own machine. To collect it, you can customize the [`modw` wrapper](../../../user-documentation/moderne-cli/how-to-guides/cli-wrapper.md) so it uploads each new trace CSV file to storage you control after every command.

Your platform team maintains the customized wrapper and distributes it [the same way you already distribute the CLI](../../../user-documentation/moderne-cli/getting-started/cli-internal-mirror.md). CLI users keep running `mod` as usual.

Follow [Exporting CLI telemetry to Amazon S3](../../../user-documentation/moderne-cli/how-to-guides/cli-telemetry-s3-export.md) for the `modw` and `modw.cmd` edits and an example upload. The same wrapper hook can target any object store or BI endpoint.

## Querying telemetry

DX writes the same `tenant`/`source`/`type`/`year`/`month`/`day` partition layout that Moderne's platform replication produces. The layout is the same on disk, in S3, and in Azure Blob Storage. A trace from `mod run` looks like this:

```text
tenant=dx/source=cli/type=run/year=2026/month=11/day=05/20261105143000-abcde.csv
```

The `tenant` value comes from `moderne.tenant.name`, which defaults to `dx`.

See [Querying and BI](../../moderne-platform/how-to-guides/configuring-telemetry-exports/querying-and-bi.md) for how to make this data queryable, notes for engines such as Athena, Snowflake, BigQuery, Databricks, and Fabric, and the Moderne BI templates starter kit.

If you keep telemetry on DX's disk, DuckDB can read the directory where it is. This query reads every `run` trace:

```sql
SELECT *
FROM read_csv_auto('data/permanent/telemetry/tenant=dx/*/type=run/**/*.csv', hive_partitioning=true);
```

## Next steps

* [Set up mass ingest](./mass-ingest-dx.md) to keep LSTs current for the repositories you report on.
* [Learn what Moderne DX runs](../getting-started/overview.md) and how it compares to the Moderne Platform.
