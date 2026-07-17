---
sidebar_label: Querying and BI
description: Query Moderne telemetry with AWS Athena, Snowflake, BigQuery, Databricks, Fabric, or DuckDB, plus the Moderne BI templates starter pack.
---

# Querying and BI

Once data is landing in your bucket or container, you can query it directly with any engine that reads CSV from object storage. Because the data is Hive-partitioned, every major engine can prune to just the partitions a query needs.

This page applies whether Moderne replicates your telemetry for you or you self-publish it from the CLI wrapper. For replication, set it up first with the [AWS](./aws-replication.md) or [Azure](./azure-replication.md) guides. For self-publishing, follow [Exporting CLI telemetry to Amazon S3](../../../../user-documentation/moderne-cli/how-to-guides/cli-telemetry-s3-export.md), whose worked example writes the same layout.

Everything below assumes the `tenant`/`source`/`type`/`year`/`month`/`day` layout. Replication always produces it, and the wrapper example matches it, so the tables and queries here work unchanged. If you customized the wrapper to write a different path structure, adjust the partition keys and `storage.location.template` in each table to match.

This page gives the full Athena walkthrough, then short notes for other common BI stacks, then a tour of the [moderne-bi-templates](https://github.com/moderneinc/moderne-bi-templates) starter pack.

## AWS Athena (full walkthrough)

### Register the schemas in the Glue Data Catalog

Trace rows are **hierarchical**: each command type writes its own stage plus all earlier stages, and `organization` is always the *last* column. A `type=run` row therefore ends `…runElapsedTimeMs,organization`, while a `type=commit` row ends `…commitElapsedTimeMs,organization`, and a `type=publish` row puts the publish columns where the run columns sit in other types. Because the column count and layout differ by command type, a single positional table cannot parse them all. Instead, register one table per query shape. `OpenCSVSerde` reads every field as text, so all columns are declared `string` and cast in queries as needed.

Create the database first, then the tables you need (replace `<your-dest-bucket>` with your destination bucket name throughout):

```sql
CREATE DATABASE IF NOT EXISTS moderne_telemetry;
```

`all_traces` reads only the four common columns, which occupy the same first four positions in every command type. Use it for cross-type counts:

<details>
<summary>all_traces: common columns, valid across all command types</summary>

```sql
CREATE EXTERNAL TABLE IF NOT EXISTS moderne_telemetry.all_traces (
    origin    string,
    path      string,
    branch    string,
    developer string
)
PARTITIONED BY (
    tenant STRING,
    source STRING,
    type   STRING,
    year   STRING,
    month  STRING,
    day    STRING
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
    'projection.type.values'    = 'sync,build,run,apply,add,commit,push,publish,exec,checkout,mcp',
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

</details>

`run_traces` adds the full recipe-run columns and is scoped to `type=run`:

<details>
<summary>run_traces: full columns for mod run (type=run)</summary>

```sql
CREATE EXTERNAL TABLE IF NOT EXISTS moderne_telemetry.run_traces (
    origin                          string,
    path                            string,
    branch                          string,
    developer                       string,
    syncOutcome                     string,
    syncCloneUri                    string,
    syncLstDownloadUri              string,
    syncStartTime                   string,
    syncEndTime                     string,
    syncChangeset                   string,
    syncElapsedTimeMs               string,
    buildOutcome                    string,
    buildStartTime                  string,
    buildEndTime                    string,
    buildId                         string,
    buildDependencyResolutionTimeMs string,
    buildChangeset                  string,
    buildMavenVersion               string,
    buildGradleVersion              string,
    buildBazelVersion               string,
    buildDotnetVersion              string,
    buildPythonVersion              string,
    buildNodeVersion                string,
    buildOsName                     string,
    buildOsVersion                  string,
    buildOsEol                      string,
    buildGitAutocrlf                string,
    buildGitEol                     string,
    buildSourceFileCount            string,
    buildLineCount                  string,
    buildParseErrorCount            string,
    buildWeight                     string,
    buildMaxWeight                  string,
    buildMaxWeightSourceFile        string,
    buildCliVersion                 string,
    buildElapsedTimeMs              string,
    runOutcome                      string,
    runStartTime                    string,
    runEndTime                      string,
    runId                           string,
    runUnlicensedAttempt            string,
    runStreaming                    string,
    runRecipeId                     string,
    runRecipeInstanceName           string,
    runRecipeOptions                string,
    runRecipeArtifact               string,
    runEstimatedEffortTimeSavingsMs string,
    runDependencyResolutionTimeMs   string,
    runPomCacheHitRate              string,
    runResolvedPomCacheHitRate      string,
    runFilesWithFixResults          string,
    runFilesWithSearchResults       string,
    runFilesWithErrors              string,
    runFilesSearched                string,
    runDataTables                   string,
    runThread                       string,
    runElapsedTimeMs                string,
    organization                    string
)
PARTITIONED BY (
    tenant STRING,
    source STRING,
    type   STRING,
    year   STRING,
    month  STRING,
    day    STRING
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
    'projection.type.values'    = 'run',
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

</details>

`commit_traces` carries the whole chain through commit (a commit trace embeds the run columns) and is scoped to `type=commit`:

<details>
<summary>commit_traces: full chain through mod git commit (type=commit)</summary>

```sql
CREATE EXTERNAL TABLE IF NOT EXISTS moderne_telemetry.commit_traces (
    origin                          string,
    path                            string,
    branch                          string,
    developer                       string,
    syncOutcome                     string,
    syncCloneUri                    string,
    syncLstDownloadUri              string,
    syncStartTime                   string,
    syncEndTime                     string,
    syncChangeset                   string,
    syncElapsedTimeMs               string,
    buildOutcome                    string,
    buildStartTime                  string,
    buildEndTime                    string,
    buildId                         string,
    buildDependencyResolutionTimeMs string,
    buildChangeset                  string,
    buildMavenVersion               string,
    buildGradleVersion              string,
    buildBazelVersion               string,
    buildDotnetVersion              string,
    buildPythonVersion              string,
    buildNodeVersion                string,
    buildOsName                     string,
    buildOsVersion                  string,
    buildOsEol                      string,
    buildGitAutocrlf                string,
    buildGitEol                     string,
    buildSourceFileCount            string,
    buildLineCount                  string,
    buildParseErrorCount            string,
    buildWeight                     string,
    buildMaxWeight                  string,
    buildMaxWeightSourceFile        string,
    buildCliVersion                 string,
    buildElapsedTimeMs              string,
    runOutcome                      string,
    runStartTime                    string,
    runEndTime                      string,
    runId                           string,
    runUnlicensedAttempt            string,
    runStreaming                    string,
    runRecipeId                     string,
    runRecipeInstanceName           string,
    runRecipeOptions                string,
    runRecipeArtifact               string,
    runEstimatedEffortTimeSavingsMs string,
    runDependencyResolutionTimeMs   string,
    runPomCacheHitRate              string,
    runResolvedPomCacheHitRate      string,
    runFilesWithFixResults          string,
    runFilesWithSearchResults       string,
    runFilesWithErrors              string,
    runFilesSearched                string,
    runDataTables                   string,
    runThread                       string,
    runElapsedTimeMs                string,
    applyOutcome                    string,
    applyStartTime                  string,
    applyEndTime                    string,
    applyId                         string,
    applyElapsedTimeMs              string,
    addOutcome                      string,
    addStartTime                    string,
    addEndTime                      string,
    addId                           string,
    addElapsedTimeMs                string,
    commitOutcome                   string,
    commitStartTime                 string,
    commitEndTime                   string,
    commitId                        string,
    commitBranch                    string,
    commitElapsedTimeMs             string,
    organization                    string
)
PARTITIONED BY (
    tenant STRING,
    source STRING,
    type   STRING,
    year   STRING,
    month  STRING,
    day    STRING
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
    'projection.type.values'    = 'commit',
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

</details>

Other command types (`build`, `apply`, `add`, `push`, `publish`, `exec`, `checkout`) follow the same pattern: take the column list for that command's stages from the [trace.csv data dictionary](https://github.com/moderneinc/moderne-bi-templates/blob/main/data-dictionary/trace-csv.md), append `organization` as the final column, and set `'projection.type.values'` to that single type. `mod publish` traces use a different layout (the publish columns slot in immediately after the build stage), so give them their own table rather than reusing `run_traces`.

Partition projection means Athena infers partitions from the path template, so you never have to run `MSCK REPAIR TABLE` or wait on Glue crawlers. Because `tenant` is an **injected** partition (meaning Athena does not infer it from the data), every query **must** include `tenant = '<your-tenant>'` in its `WHERE` clause.

### Set up an Athena workgroup

Athena writes query results into S3. Create a dedicated workgroup to keep them organized:

```bash
aws athena create-work-group \
    --name moderne-telemetry \
    --configuration "ResultConfiguration={OutputLocation=s3://<your-dest-bucket>/athena-results/},BytesScannedCutoffPerQuery=107374182400"
```

The `athena-results/` prefix sits outside the partition structure, so it will not interfere with telemetry data. The 100 GB scan limit per query caps Athena cost runaway.

### Example queries

Every trace row represents **one repository**, so a single command that spans 30 repositories writes 30 rows. Count commands with `COUNT(DISTINCT runId)` or `COUNT(DISTINCT commitId)` rather than `COUNT(*)`, which counts repositories touched. `all_traces` carries no command IDs, so it can only count rows.

**Recipe-run summary for a specific day**, showing what recipes ran, how many repos they touched, and estimated time saved:

```sql
SELECT
    runRecipeId                                                                AS recipe,
    COUNT(DISTINCT runId)                                                      AS runs,
    COUNT(DISTINCT path)                                                       AS repos,
    ROUND(SUM(CAST(runEstimatedEffortTimeSavingsMs AS DOUBLE)) / 3600000.0, 1) AS hours_saved
FROM moderne_telemetry.run_traces
WHERE tenant = 'acme'
  AND year = '2026' AND month = '05' AND day = '20'
  AND runOutcome = 'Succeeded'
GROUP BY runRecipeId
ORDER BY hours_saved DESC NULLS LAST
LIMIT 25;
```

**Top recipes producing committed code**, the recipes whose runs actually shipped (the value story for impact reviews):

```sql
SELECT
    runRecipeId              AS recipe,
    COUNT(DISTINCT commitId) AS commits,
    COUNT(DISTINCT path)     AS repos_changed
FROM moderne_telemetry.commit_traces
WHERE tenant = 'acme'
  AND year = '2026'
  AND commitOutcome = 'Succeeded'
GROUP BY runRecipeId
ORDER BY commits DESC
LIMIT 10;
```

**SaaS vs CLI usage split**, useful to understand whether usage is concentrated in the UI or shifting toward CLI/CI adoption:

```sql
SELECT
    source,
    type,
    COUNT(*)                  AS trace_rows,
    COUNT(DISTINCT path)      AS repos,
    COUNT(DISTINCT developer) AS users
FROM moderne_telemetry.all_traces
WHERE tenant = 'acme'
  AND year = '2026' AND month = '05'
GROUP BY source, type
ORDER BY source, type;
```

For more, see the SQL in each starter template at [moderne-bi-templates/templates/](https://github.com/moderneinc/moderne-bi-templates/tree/main/templates). Those queries read a single wide `traces` table, and they already pin `tenant = '<your-tenant>'` and, where it matters, the command `type`. If you created the per-type tables above instead, point each query at the table that matches the command type it analyzes (for example, `run_traces` or `commit_traces`), where the `type` filter is then redundant.

## Other BI systems

The CSV-on-object-storage layout works with every major BI / query engine. A short note on each:

* **Snowflake**: create an external stage pointing at your bucket (`CREATE STAGE ... URL='s3://<your-dest-bucket>/' STORAGE_INTEGRATION=...`), then either query it directly with `SELECT ... FROM @stage` or wrap it in an external table. Snowflake's directory-table feature picks up the Hive partitions automatically.
* **Google BigQuery**: register your bucket via a [BigLake](https://cloud.google.com/biglake) connection (works for both GCS-resident data and, with cross-cloud connections, S3 / Azure blob), then create an external table with `hive_partition_uri_prefix` set to the bucket root. BigQuery's partition pruning recognizes the `tenant=/source=/type=/year=/month=/day=` keys natively.
* **Databricks**: mount the bucket as a Unity Catalog external location, then create an external table with `PARTITIONED BY (tenant, source, type, year, month, day)`. Spark's CSV reader handles the schema and headers; Databricks' MSCK-equivalent `ALTER TABLE ... ADD PARTITIONS` or auto-loader keeps the table in sync.
* **Microsoft Fabric / Synapse**: use a serverless SQL pool with `OPENROWSET(BULK ...)` for ad-hoc queries, or create a Lakehouse shortcut to the bucket and let Fabric infer partitions. Both work against S3 and ADLS Gen2.
* **DuckDB**: by far the simplest for local exploration. With the `httpfs` extension loaded, `SELECT * FROM read_csv_auto('s3://<your-dest-bucket>/tenant=acme/**/*.csv', hive_partitioning=true)` works without any catalog setup. Excellent for prototyping new dashboards before promoting them to a hosted BI.

If your BI tool isn't listed, the only requirements are: read CSV from object storage, and recognize Hive-style partitions for predicate pushdown. Every modern engine meets both.

## Building reports with Moderne BI templates

[moderne-bi-templates](https://github.com/moderneinc/moderne-bi-templates) is a starter pack of report definitions you can import directly. Each template ships with:

* A SQL query (engine-agnostic standard SQL)
* A Jupyter notebook that renders the query result as a chart
* Sample CSV data so the notebook runs immediately, even before you've configured replication
* A README describing the report, required CLI commands, and example output
* A screenshot

Available templates (sorted by minimum CLI command required):

| Template                  | Description                                            | Minimum command  |
|---------------------------|--------------------------------------------------------|------------------|
| Build Success Trend       | Monthly build health: success vs. failure              | `mod build`      |
| Build Tool Distribution   | Build-tool + version distribution across repos         | `mod build`      |
| Recipe Run Trend          | Monthly adoption: runs, distinct recipes, unique users | `mod run`        |
| Top Recipes               | Most-used recipes by run count, users, repos           | `mod run`        |
| Dashboard KPIs            | Executive snapshot: all-time totals + monthly trend    | `mod git commit` |
| Commit Trend              | Recipe execution correlated with committed code impact | `mod git commit` |
| Commit Activity           | Successful commits, repos changed, hours saved         | `mod git commit` |
| Top Users                 | User engagement by recipe runs + commits               | `mod git commit` |
| Top Recipes with Commits  | Recipes producing real committed code changes          | `mod git commit` |
| Security Recipe Run Trend | Security remediation trend: fixes, repos, hours        | `mod git commit` |

Each template is self-contained. Clone the repo, pick a template, open its notebook, and you have a working dashboard you can either run as-is or port into Power BI / Tableau / Looker / Grafana / QuickSight.

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

Only the commands listed in the [trace hierarchy](https://github.com/moderneinc/moderne-bi-templates/blob/main/data-dictionary/trace-csv.md#trace-hierarchy) emit telemetry: sync, build, run, apply, add, commit, push, publish, exec, checkout, and mcp. `mod config`, `mod license`, and similar admin commands do not. If you run [mass ingest](../mass-ingest.md), expect the bulk of your telemetry volume to come from `type=publish` rows.

### Replication lag is too high

S3 Replication Time Control (RTC) is available if your contract requires 15-minute SLAs with a CloudWatch metric. Discuss with your CSM; this is a paid AWS feature billed to the source side.

### My BI doesn't see new partitions

With Athena partition projection (above), this should never happen, because Athena synthesizes partitions from the path template. For engines using a catalog (Glue crawler, Databricks Unity, Snowflake external tables without auto-refresh), you'll need to either schedule a periodic catalog refresh or enable the engine's auto-discovery feature.
