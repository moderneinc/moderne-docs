---
sidebar_label: Querying and BI
description: Query Moderne telemetry with AWS Athena, Snowflake, BigQuery, Databricks, Fabric, or DuckDB — plus the Moderne BI templates starter pack.
---

# Querying and BI

Once data is landing in your bucket or container, you can query it
directly with any engine that reads CSV from object storage. If you haven't
configured replication yet, see the
[AWS](./aws-replication.md) or [Azure](./azure-replication.md) guides
first. The Hive partition layout means every major engine can prune to
just the partitions a query needs.

This page gives the full Athena walkthrough, then short notes for other
common BI stacks, then a tour of the
[moderne-bi-templates](https://github.com/moderneinc/moderne-bi-templates)
starter pack.

## AWS Athena (full walkthrough)

### Register the schema in the Glue Data Catalog

Run this DDL once in the Athena query editor (replace `<your-dest-bucket>`
with your destination bucket name):

```sql
CREATE DATABASE IF NOT EXISTS moderne_telemetry;

CREATE EXTERNAL TABLE IF NOT EXISTS moderne_telemetry.traces (
    -- Common
    origin                          STRING,
    path                            STRING,
    branch                          STRING,
    developer                       STRING,
    -- Sync stage
    syncOutcome                     STRING,
    syncCloneUri                    STRING,
    syncLstDownloadUri              STRING,
    syncStartTime                   TIMESTAMP,
    syncEndTime                     TIMESTAMP,
    syncChangeset                   STRING,
    syncElapsedTimeMs               BIGINT,
    -- Build stage
    buildOutcome                    STRING,
    buildStartTime                  TIMESTAMP,
    buildEndTime                    TIMESTAMP,
    buildId                         STRING,
    buildDependencyResolutionTimeMs BIGINT,
    buildChangeset                  STRING,
    buildMavenVersion               STRING,
    buildGradleVersion              STRING,
    buildBazelVersion               STRING,
    buildDotnetVersion              STRING,
    buildPythonVersion              STRING,
    buildNodeVersion                STRING,
    buildOsName                     STRING,
    buildOsVersion                  STRING,
    buildOsEol                      STRING,
    buildGitAutocrlf                STRING,
    buildGitEol                     STRING,
    buildSourceFileCount            BIGINT,
    buildLineCount                  BIGINT,
    buildParseErrorCount            BIGINT,
    buildWeight                     BIGINT,
    buildMaxWeight                  BIGINT,
    buildMaxWeightSourceFile        STRING,
    buildCliVersion                 STRING,
    buildElapsedTimeMs              BIGINT,
    -- Publish stage (populated by mod publish — LST publication)
    publishOutcome                  STRING,
    publishStartTime                TIMESTAMP,
    publishEndTime                  TIMESTAMP,
    publishId                       STRING,
    publishUri                      STRING
    -- Run, Apply, Add, Commit, Push stages and organization column elided for brevity;
    -- see https://github.com/moderneinc/moderne-bi-templates/blob/main/data-dictionary/trace-csv.md
)
PARTITIONED BY (
    tenant  STRING,
    source  STRING,
    type    STRING,
    year    STRING,
    month   STRING,
    day     STRING
)
ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.OpenCSVSerde'
WITH SERDEPROPERTIES (
    'separatorChar' = ',',
    'quoteChar'     = '"'
)
STORED AS TEXTFILE
LOCATION 's3://<your-dest-bucket>/'
TBLPROPERTIES (
    'projection.enabled'        = 'true',
    'projection.tenant.type'    = 'injected',
    'projection.source.type'    = 'enum',
    'projection.source.values'  = 'saas,cli',
    'projection.type.type'      = 'enum',
    'projection.type.values'    = 'sync,build,run,apply,add,commit,push,publish,exec,checkout',
    'projection.year.type'      = 'integer',
    'projection.year.range'     = '2026,2030',
    'projection.year.digits'    = '4',
    'projection.month.type'     = 'integer',
    'projection.month.range'    = '1,12',
    'projection.month.digits'   = '2',
    'projection.day.type'       = 'integer',
    'projection.day.range'      = '1,31',
    'projection.day.digits'     = '2',
    'storage.location.template' =
      's3://<your-dest-bucket>/tenant=${tenant}/source=${source}/type=${type}/year=${year}/month=${month}/day=${day}/',
    'skip.header.line.count'    = '1'
);
```

Partition projection means Athena infers partitions from the path
template, so you never have to run `MSCK REPAIR TABLE` or wait on Glue
crawlers. Because `tenant` is an **injected** partition, every query
**must** include `tenant = '<your-tenant>'` in its `WHERE` clause.

### Set up an Athena workgroup

Athena writes query results into S3. Create a dedicated workgroup to
keep them organized:

```bash
aws athena create-work-group \
    --name moderne-telemetry \
    --configuration "ResultConfiguration={OutputLocation=s3://<your-dest-bucket>/athena-results/},BytesScannedCutoffPerQuery=107374182400"
```

The `athena-results/` prefix sits outside the partition structure, so it
will not interfere with telemetry data. The 100 GB scan limit per query
caps Athena cost runaway.

### Example queries

**Recipe-run summary for a specific day** — what recipes ran, how many
repos they touched, and estimated time saved:

```sql
SELECT
    runRecipe                                    AS recipe,
    COUNT(*)                                     AS run_count,
    COUNT(DISTINCT path)                         AS repos,
    SUM(runEstimatedTimeSavingsHours)            AS hours_saved
FROM moderne_telemetry.traces
WHERE tenant = 'acme'
  AND source IN ('saas', 'cli')
  AND type   = 'run'
  AND year   = '2026' AND month = '05' AND day = '20'
  AND runOutcome = 'Succeeded'
GROUP BY runRecipe
ORDER BY hours_saved DESC NULLS LAST
LIMIT 25;
```

**Top recipes producing committed code** — recipes whose runs actually
shipped (the value story for impact reviews):

```sql
SELECT
    runRecipe              AS recipe,
    COUNT(*)               AS commit_count,
    COUNT(DISTINCT path)   AS repos_changed
FROM moderne_telemetry.traces
WHERE tenant = 'acme'
  AND type   = 'commit'
  AND year   = '2026'
  AND commitOutcome = 'Succeeded'
GROUP BY runRecipe
ORDER BY commit_count DESC
LIMIT 10;
```

**SaaS vs CLI usage split** — useful to understand whether usage is
concentrated in the UI or shifting toward CLI/CI adoption:

```sql
SELECT
    source,
    type,
    COUNT(*)             AS runs,
    COUNT(DISTINCT path) AS repos,
    COUNT(DISTINCT developer) AS users
FROM moderne_telemetry.traces
WHERE tenant = 'acme'
  AND year   = '2026' AND month = '05'
GROUP BY source, type
ORDER BY source, type;
```

For more, see the SQL in each starter template at
[moderne-bi-templates/templates/](https://github.com/moderneinc/moderne-bi-templates/tree/main/templates).
The queries there target the same schema; replace the table reference
with `moderne_telemetry.traces` and add `tenant = '<your-tenant>'` to the
`WHERE` clause.

## Other BI systems

The CSV-on-object-storage layout works with every major BI / query
engine. A short note on each:

- **Snowflake** — create an external stage pointing at your bucket
  (`CREATE STAGE ... URL='s3://<your-dest-bucket>/' STORAGE_INTEGRATION=...`),
  then either query it directly with `SELECT ... FROM @stage` or wrap it
  in an external table. Snowflake's directory-table feature picks up the
  Hive partitions automatically.
- **Google BigQuery** — register your bucket via a
  [BigLake](https://cloud.google.com/biglake) connection (works for both
  GCS-resident data and, with cross-cloud connections, S3 / Azure blob),
  then create an external table with `hive_partition_uri_prefix` set to
  the bucket root. BigQuery's partition pruning recognizes the
  `tenant=/source=/type=/year=/month=/day=` keys natively.
- **Databricks** — mount the bucket as a Unity Catalog external
  location, then create an external table with `PARTITIONED BY (tenant,
  source, type, year, month, day)`. Spark's CSV reader handles the
  schema and headers; Databricks' MSCK-equivalent `ALTER TABLE ... ADD
  PARTITIONS` or auto-loader keeps the table in sync.
- **Microsoft Fabric / Synapse** — use a serverless SQL pool with
  `OPENROWSET(BULK ...)` for ad-hoc queries, or create a Lakehouse
  shortcut to the bucket and let Fabric infer partitions. Both work
  against S3 and ADLS Gen2.
- **DuckDB** — by far the simplest for local exploration. With the
  `httpfs` extension loaded, `SELECT * FROM
  read_csv_auto('s3://<your-dest-bucket>/tenant=acme/**/*.csv',
  hive_partitioning=true)` works without any catalog setup. Excellent
  for prototyping new dashboards before promoting them to a hosted BI.

If your BI tool isn't listed, the only requirements are: read CSV from
object storage, and recognize Hive-style partitions for predicate
pushdown. Every modern engine meets both.

## Building reports with Moderne BI templates

[moderne-bi-templates](https://github.com/moderneinc/moderne-bi-templates)
is a starter pack of report definitions you can import directly. Each
template ships with:

- A SQL query (engine-agnostic standard SQL)
- A Jupyter notebook that renders the query result as a chart
- Sample CSV data so the notebook runs immediately, even before you've
  configured replication
- A README describing the report, required CLI commands, and example
  output
- A screenshot

Available templates (sorted by minimum CLI command required):

| Template | Description | Minimum command |
|---|---|---|
| Build Success Trend | Monthly build health — success vs. failure | `mod build` |
| Build Tool Distribution | Build-tool + version distribution across repos | `mod build` |
| Recipe Run Trend | Monthly adoption — runs, distinct recipes, unique users | `mod run` |
| Top Recipes | Most-used recipes by run count, users, repos | `mod run` |
| Dashboard KPIs | Executive snapshot — all-time totals + monthly trend | `mod git commit` |
| Commit Trend | Recipe execution correlated with committed code impact | `mod git commit` |
| Commit Activity | Successful commits, repos changed, hours saved | `mod git commit` |
| Top Users | User engagement by recipe runs + commits | `mod git commit` |
| Top Recipes with Commits | Recipes producing real committed code changes | `mod git commit` |
| Security Recipe Run Trend | Security remediation trend — fixes, repos, hours | `mod git commit` |

Each template is self-contained. Clone the repo, pick a template, open
its notebook, and you have a working dashboard you can either run as-is
or port into Power BI / Tableau / Looker / Grafana / QuickSight.

## Troubleshooting

**No objects landing in my bucket / container.**
Confirm:
1. The bucket policy / role assignment was applied successfully (a
   common mistake is applying it to the wrong account context).
2. Your CSM has confirmed the source-side replication rule is live.
3. Some traffic has actually run. Telemetry only emits on real recipe
   runs and `mod` commands, not on idle tenants.

**I see `source=cli` data but no `source=saas` data (or vice versa).**
- No `saas` rows = no one has run a recipe or committed via the web UI
  during the period queried.
- No `cli` rows = either no one has run `mod` against your tenant, or
  CLI users haven't authenticated yet (the CLI auto-pushes telemetry
  on its next license-lease refresh, typically within an hour of
  signing in). Users can also force a flush with `mod telemetry
  publish`.

**Some `mod` commands are missing traces.**
Only the commands listed in the
[trace hierarchy](https://github.com/moderneinc/moderne-bi-templates/blob/main/data-dictionary/trace-csv.md#trace-hierarchy)
emit telemetry: sync, build, run, apply, add, commit, push, publish,
exec, and checkout. `mod config`, `mod license`, and similar admin
commands do not. If you run [mass ingest](../mass-ingest.md), expect
the bulk of your telemetry volume to come from `type=publish` rows.

**Replication lag is too high.**
S3 Replication Time Control (RTC) is available if your contract
requires 15-minute SLAs with a CloudWatch metric. Discuss with your
CSM; this is a paid AWS feature billed to the source side.

**My BI doesn't see new partitions.**
With Athena partition projection (above), this should never happen,
because Athena synthesizes partitions from the path template. For engines using
a catalog (Glue crawler, Databricks Unity, Snowflake external tables
without auto-refresh), you'll need to either schedule a periodic catalog
refresh or enable the engine's auto-discovery feature.
