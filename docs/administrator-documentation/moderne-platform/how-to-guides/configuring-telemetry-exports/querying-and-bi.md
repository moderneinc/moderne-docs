---
sidebar_label: Querying and BI
description: Query Moderne telemetry from object storage with Athena, Snowflake, BigQuery, Databricks, Fabric, or DuckDB, and build reports with the moderne-bi-templates starter kit.
---

# Querying and BI

Once telemetry is landing in your bucket or container, you can query it directly with any engine that reads CSV from object storage. Because the data is Hive-partitioned, every major engine can prune to just the partitions a query needs.

This page applies whether Moderne replicates your telemetry for you or you self-publish it from the CLI wrapper. For replication, set it up first with the [AWS](./aws-replication.md) or [Azure](./azure-replication.md) guides. For self-publishing, follow [Exporting CLI telemetry to Amazon S3](../../../../user-documentation/moderne-cli/how-to-guides/cli-telemetry-s3-export.md), whose worked example writes the same layout.

Everything here assumes the `tenant`/`source`/`type`/`year`/`month`/`day` layout. Replication always produces it, and the wrapper example matches it, so the queries and the table definitions in the templates repo work unchanged. If you customized the wrapper to write a different path structure, adjust the partition keys to match.

The [moderne-bi-templates](https://github.com/moderneinc/moderne-bi-templates) repository is a starter kit for turning this telemetry into reports and dashboards: an example data layer to make it queryable, ready-to-run report queries, and dashboards to render them. Start there to go from raw telemetry to working reports without assembling the query layer yourself.

## The data

Each row records one repository's run of one command, keyed by command `type` (`run`, `commit`, `build`, …). Rows are **hierarchical**: a command carries its own stage plus every earlier stage in the workflow, with `organization` always the last column. For the full field list, see the [trace.csv reference](../../../../user-documentation/moderne-cli/references/trace-csv.md).

Telemetry lands in a Hive-partitioned layout, which every engine below prunes on:

```
tenant=<your-tenant>/source={saas|cli}/type=<command>/year=YYYY/month=MM/day=DD/<command-id>.csv
```

## Query it

Any engine that reads CSV from object storage and understands Hive partitions will work.

For ongoing reporting, we recommend materializing the telemetry into a columnar format such as Parquet or Delta rather than querying the CSV in place. Raw CSV is all-string and uncompressed, so queries scan the full files and every value needs casting. The [moderne-bi-templates](https://github.com/moderneinc/moderne-bi-templates) repo's **data layer** shows one way to do this, with a complete AWS Athena example: per-type ingest tables plus a daily compaction job that lands a single Parquet-backed `traces` table, alongside the report SQL that queries it.

To explore the data first, or to build your own layout, here is the basic setup for reading the raw CSV with each engine.

**The raw data is organized per command type.** Because traces are hierarchical, each `type=` partition holds only that command's columns, in that command's order. There is no single raw table spanning every type, so you query one type at a time or union the types you need. This is the first thing that surprises people pointing an engine at the bucket.

Note also that a row is one repository's run of a command, not the command itself. A single `mod run` across 200 repositories writes 200 rows sharing one `runId`, so count runs with `COUNT(DISTINCT runid)` rather than `COUNT(*)`.

* **AWS Athena**: define an external table over a `type=` prefix with `OpenCSVSerde` and query it directly. `OpenCSVSerde` matches columns by position rather than by name, so each command type needs its own table whose column list matches that type's header exactly. The [moderne-bi-templates data layer](https://github.com/moderneinc/moderne-bi-templates) scripts these tables for you and is the recommended setup.
* **Snowflake**: create an external stage pointing at your bucket (`CREATE STAGE ... URL='s3://<your-dest-bucket>/' STORAGE_INTEGRATION=...`), then query it directly or wrap it in an external table. Snowflake's directory-table feature picks up the Hive partitions automatically.
* **Google BigQuery**: register your bucket via a [BigLake](https://cloud.google.com/biglake) connection, then create an external table with `hive_partition_uri_prefix` set to the bucket root. BigQuery recognizes the `tenant=/source=/type=/year=/month=/day=` keys natively.
* **Databricks**: mount the bucket as a Unity Catalog external location, then create an external table `PARTITIONED BY (tenant, source, type, year, month, day)`. Spark's CSV reader handles the schema and headers.
* **Microsoft Fabric / Synapse**: use a serverless SQL pool with `OPENROWSET(BULK ...)` for ad-hoc queries, or create a Lakehouse shortcut to the bucket and let Fabric infer partitions. Both work against S3 and ADLS Gen2.
* **DuckDB**: simplest for local exploration. With the `httpfs` extension loaded, `SELECT * FROM read_csv_auto('s3://<your-dest-bucket>/tenant=acme/*/type=run/**/*.csv', hive_partitioning=true)` reads one type with no catalog setup. The `*` matches the `source=` level, which sits between `tenant=` and `type=`.

If your tool isn't listed, the only requirements are to read CSV from object storage and recognize Hive-style partitions for predicate pushdown, which every modern engine meets. Whichever engine you land on, the Athena example's CSV→Parquet compaction is the pattern to copy: materialize into that engine's native columnar format once your volume grows past exploration.

## Reports and dashboards

Beyond the data layer, [moderne-bi-templates](https://github.com/moderneinc/moderne-bi-templates) includes ready-made reports, each a SQL query paired with a rendering and sample data so it runs out of the box, along with dashboard examples you can adapt to your own BI tool. See the repo for the current set.

## Troubleshooting

### No objects are landing in my bucket or container

Please confirm that:

1. The bucket policy / role assignment was applied successfully (a common mistake is applying it to the wrong account context).
2. Your CSM has enabled the source-side replication rule.
3. Some traffic has actually run. Telemetry only emits on real recipe runs and `mod` commands, not on idle tenants.

### I see `source=cli` data but no `source=saas` data (or vice versa)

* If you see no `saas` rows, no one has run a recipe or committed via the web UI during the period queried.
* If you see no `cli` rows, either no one has run `mod` against your tenant, or CLI users haven't authenticated yet. The CLI auto-pushes telemetry when it next refreshes its license lease (at most once every three days), or users can force a flush with `mod telemetry publish`.

### Some `mod` commands are missing traces

Only the commands listed in the [trace hierarchy](../../../../user-documentation/moderne-cli/references/trace-csv.md#trace-hierarchy) emit exported telemetry: sync, build, run, apply, add, commit, push, publish, exec, and mcp. `mod config`, `mod license`, and similar admin commands do not. `mod git checkout` writes a trace only into the repository it touched and never queues it for upload, so there is no `type=checkout` partition to query. If you run [mass ingest](../mass-ingest.md), expect the bulk of your telemetry volume to come from `type=publish` rows.

### Replication lag is too high

S3 Replication Time Control (RTC) is available if your contract requires 15-minute SLAs with a CloudWatch metric. Discuss with your CSM; this is a paid AWS feature billed to the source side.

### My BI doesn't see new partitions

How an engine learns about new partitions varies. Some synthesize them from the path and never need a refresh, such as Athena *partition projection* or DuckDB globbing the path directly. Others rely on a registered catalog and need a periodic refresh or auto-discovery: a Glue crawler, Databricks Unity Catalog, or Snowflake external tables without auto-refresh. In the moderne-bi-templates Athena data layer, the raw ingest tables use partition projection, while the compacted `traces` table uses **registered partitions** that its compaction job adds as it writes each day, so neither needs a crawler.
