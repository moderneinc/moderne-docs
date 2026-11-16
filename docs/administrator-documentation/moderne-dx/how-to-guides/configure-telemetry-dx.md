---
sidebar_label: Configure telemetry
description: How Moderne DX collects telemetry from the Moderne CLI, where it stores that telemetry, and how to query it.
---

# Configuring telemetry for Moderne DX

Every time someone builds an LST, runs a recipe, or performs a git operation with the Moderne CLI, the CLI records telemetry about it. Each record shows what ran, how many repositories it touched, and how much developer effort it saved. If you send that data to your BI tools, you can track things like CLI adoption and the impact of your migrations.

Moderne DX will collect this telemetry for you. Once a developer signs in to DX from their CLI, the CLI will start uploading its telemetry automatically. None of it is sent to Moderne.

Out of the box, DX will keep this telemetry on its own disk. We recommend storing it in an Amazon S3 bucket or an Azure Blob Storage container instead, since that's where your BI tools will be able to query it.

In this guide, we will walk you through how uploads work, how to choose where DX stores telemetry, how to include telemetry from mass ingest, and how to query the data.

## Prerequisites

This guide assumes you have:

* [Installed Moderne DX](../getting-started/installing-moderne-dx.md).
* [Pointed your CLIs at DX](./running-moderne-dx.md#pointing-the-cli-at-dx).
* Read the [full guide on CLI telemetry](../../../user-documentation/moderne-cli/how-to-guides/cli-telemetry.md), which explains what the CLI records and the fields available for reporting.

## How CLIs upload telemetry

Once a developer has signed in to DX with `mod login`, their CLI will upload its telemetry at the end of every command. You don't need to turn anything on for that to happen.

If a developer hasn't signed in yet (or if their token has expired), the CLI will hold on to its telemetry in a queue on their machine. The next time they run `mod login`, the CLI will start working through that queue at the end of each command.

If the queue has gotten long and you'd like to upload it all at once, you can run `mod telemetry publish`.

## Choosing where DX stores telemetry

We recommend storing telemetry in an Amazon S3 bucket or an Azure Blob Storage container. This is because your BI tools will be able to query it from there, and it won't take up space on DX's disk.

To set one up, follow the steps below based on the type of storage you're using. Once you're done, you'll need to restart DX for the change to take effect.

### Using an Amazon S3 bucket

Start by adding the name of your bucket to your `moderne.yml` file:

```yaml title="moderne.yml"
moderne:
  gateway:
    telemetry:
      s3:
        bucket: acme-moderne-telemetry
```

Next, add the AWS credentials you'd like DX to use to your `moderne.env` file:

```bash title="moderne.env"
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=…
AWS_SECRET_ACCESS_KEY=…
```

Please make sure these credentials have the `s3:ListBucket` permission on the bucket and the `s3:PutObject` permission on its objects.

### Using an Azure Blob Storage container

Start by adding both your storage account and your container to your `moderne.yml` file:

```yaml title="moderne.yml"
moderne:
  gateway:
    telemetry:
      azure:
        account-name: acmemoderne
        container-name: bi-telemetry
```

Next, add the credentials for the service principal you'd like DX to use to your `moderne.env` file:

```bash title="moderne.env"
AZURE_TENANT_ID=…
AZURE_CLIENT_ID=…
AZURE_CLIENT_SECRET=…
```

Please make sure this service principal has the Storage Blob Data Contributor role on the container.

### Keeping telemetry on DX's disk

If you don't set a bucket or container, DX will write telemetry to the `telemetry` directory inside of its permanent directory. By default, this is located at `data/permanent/telemetry` (unless you've set `moderne.storage.permanent-dir` to another directory). Since it lives in the permanent directory, [your backups](./running-moderne-dx.md#backing-up) will include it.

Keep in mind that DX will never delete these files, so you'll need to plan disk space for them.

If you'd like to use some other type of storage (such as Google Cloud Storage), you'll need to copy these files there yourself.

If you decide to set up a bucket or container later on, new telemetry will go there. Anything DX has already written will stay on disk.

### Checking where telemetry is going

Each time DX starts, it will log where telemetry is going to go. If you're running DX under systemd, you can find that line with this command:

```bash
journalctl -u moderne-dx | grep "CLI telemetry uploads go to"
```

If you started DX with `java -jar moderne-dx.jar start` instead, you'll find the line in that command's output. Either way, you should see the bucket or container you set:

```text
CLI telemetry uploads go to s3://acme-moderne-telemetry
```

If you see the `telemetry` directory instead, double-check the spelling of the setting in your `moderne.yml` file. DX won't warn you about a misspelled setting. It will just keep writing to disk.

If DX can't reach your bucket or container, it won't finish starting. You can find out what went wrong by looking at the gateway's log.

## Including telemetry from mass ingest

By default, mass ingest containers don't upload their telemetry to DX. That means their telemetry is lost whenever a container stops.

If you'd like to keep this telemetry, you will need to set these two environment variables on the containers (alongside `MOD_LICENSE_KEY`):

| Variable                   | Value                                                                                                                                 |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `MOD_TENANT_HOST`          | DX's public URL, such as `https://acme.moderne.direct`.                                                                                  |
| `MOD_TENANT_AUTHORIZATION` | A [personal access token](../../../user-documentation/moderne-platform/how-to-guides/create-api-access-tokens.md) you created in DX. |

If you're using the [mass ingest example](https://github.com/moderneinc/mass-ingest-example) image, it already waits up to 30 seconds for the upload to finish when a command ends. If you've built your own image, or you run the CLI on CI runners, you'll need to run `mod config telemetry wait-for-upload` there too.

If DX's certificate comes from a private certificate authority, you will need to [add it to the image](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/image.md#self-signed-certificates).

## Publishing telemetry from a CLI that can't reach DX

If a CLI can't reach DX, it will keep its telemetry on its own machine. To collect that telemetry, you can customize the [`modw` wrapper](../../../user-documentation/moderne-cli/how-to-guides/cli-wrapper.md) so that it uploads each new trace CSV file to storage you control after every command.

Keep in mind that your platform team will need to maintain this customized wrapper and distribute it to your developers. They can distribute it [the same way you already distribute the CLI](../../../user-documentation/moderne-cli/getting-started/cli-internal-mirror.md). Once that's in place, nothing will change for your developers. They'll keep running `mod` like they always have.

For the `modw` and `modw.cmd` edits you'll need (along with an example upload), check out our guide on [exporting CLI telemetry to Amazon S3](../../../user-documentation/moderne-cli/how-to-guides/cli-telemetry-s3-export.md). You can point the same wrapper hook at any object store or BI endpoint.

## Querying telemetry

DX organizes telemetry into `tenant`/`source`/`type`/`year`/`month`/`day` folders. This is the same layout the Moderne Platform uses for its telemetry exports. It's also the same whether you store telemetry on disk, in S3, or in Azure Blob Storage. For example, a trace from `mod run` will look like this:

```text
tenant=dx/source=cli/type=run/year=2026/month=11/day=05/20261105143000-abcde.csv
```

The `tenant` value comes from the `moderne.tenant.name` setting, which defaults to `dx`.

To learn how to make this data queryable, check out our [querying and BI guide](../../moderne-platform/how-to-guides/configuring-telemetry-exports/querying-and-bi.md). It has notes for engines such as Athena, Snowflake, BigQuery, Databricks, and Fabric. It also covers the Moderne BI templates starter kit.

If you're keeping telemetry on DX's disk, you can use DuckDB to read it straight from that directory. For example, this query will read every `run` trace:

```sql
SELECT *
FROM read_csv_auto('data/permanent/telemetry/tenant=dx/*/type=run/**/*.csv', hive_partitioning=true);
```

## Next steps

* [Set up mass ingest](./mass-ingest-dx.md) to keep LSTs current for the repositories you report on.
* [Learn what Moderne DX runs](../getting-started/overview.md) and how it compares to the Moderne Platform.
