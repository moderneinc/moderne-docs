---
sidebar_label: trace.csv reference
description: Field-by-field reference for the trace.csv telemetry file the Moderne CLI and platform emit for each command.
---

# trace.csv reference

The Moderne CLI and platform record telemetry for each command as a row in a `trace.csv` file, one row per repository per command. For how that telemetry is generated and collected, see [Understanding CLI usage across your organization](../how-to-guides/cli-telemetry.md); for how to replicate it to your own cloud storage and query it, see [Querying and BI](../../../administrator-documentation/moderne-platform/how-to-guides/configuring-telemetry-exports/querying-and-bi.md).

This page is the field reference for those rows.

## How to read this reference

* **Traces are hierarchical.** Each command writes its own stage plus every earlier stage in the workflow. A `mod run` row therefore carries the sync, build, and run columns; a `mod git commit` row carries everything through commit. A stage a command didn't reach is left empty.
* **`organization` is the last of the stage columns.** Because each command type carries a different set of stages, the row width and the position of `organization` differ by type. If you use [trace tags](../how-to-guides/cli-telemetry.md), one `tag.<key>` column per tag is appended *after* `organization`, so it is not the last column in that case.
* **Every field is written as text.** The **Type** column below is the *logical* type of the value (what it represents), not a storage type; a CSV field is always text until you cast it.
* **Column headers are mixed-case** in the file (`runStartTime`). Query engines that fold identifiers to lowercase (Athena, Trino) will expose them lowercased (`runstarttime`).
* **Every `*Outcome` column holds one of `Succeeded`, `Failed`, `Canceled`, or `Skipped`.**
* **Columns change between CLI versions**, and new fields land mid-stage rather than at the end. Older partitions can be both narrower and differently ordered, which a positional reader will not warn you about. Prefer reading by column name.
* **`*Log` columns are not exported.** Each stage records a local log path, but those columns are stripped when the trace is queued for upload, so they never appear in the CSV that lands in your bucket.

## Trace hierarchy

Each command produces a trace that includes its own stage plus all prior stages. The `type` value identifies the command.

| Command              | `type`    | Stages included                                    |
|----------------------|-----------|----------------------------------------------------|
| `mod git sync`       | `sync`    | Sync                                               |
| `mod build`          | `build`   | Sync + Build                                       |
| `mod run`            | `run`     | Sync + Build\* + Run                               |
| `mod git apply`      | `apply`   | Sync + Build\* + Run + Apply                       |
| `mod git add`        | `add`     | Sync + Build\* + Run + Apply + Add                 |
| `mod git commit`     | `commit`  | Sync + Build\* + Run + Apply + Add + Commit        |
| `mod git push`       | `push`    | Sync + Build\* + Run + Apply + Add + Commit + Push |
| `mod publish`        | `publish` | Sync + Build + Publish                             |
| `mod exec`           | `exec`    | Exec (standalone)                                  |
| MCP server tool call | `mcp`     | MCP (standalone)                                   |

\* Build is skipped when `mod git sync` downloads a prebuilt LST. See [when the build columns are empty](#when-the-build-columns-are-empty).

`mod publish` branches off after Build rather than continuing the Run → Apply → Add → Commit → Push chain, so its rows carry the Sync + Build + Publish columns and none of the Run/Apply/Add/Commit/Push columns. `mod exec` and MCP tool calls are standalone: they carry the common columns plus their own stage, with no earlier workflow stages.

## When the build columns are empty

Empty `build*` columns mean no build ran, not that data is missing. `mod git sync` can download a prebuilt LST instead of source, and `mod run` then follows sync directly.

When reporting on builds, scope to rows where a build was actually attempted, or rows that never tried one will look like failures:

```sql
WHERE buildoutcome IS NOT NULL
```

## Common fields

Present in every row.

| Column      | Type   | Description                | Example               |
|-------------|--------|----------------------------|-----------------------|
| `origin`    | string | SCM host                   | `github.com`          |
| `path`      | string | Repository path (org/repo) | `openrewrite/rewrite` |
| `branch`    | string | Branch name                | `main`                |
| `developer` | string | User email                 | `user@example.com`    |

## Sync stage

Populated after `mod git sync` (and by any command that syncs first).

| Column               | Type     | Description                               | Example                       |
|----------------------|----------|-------------------------------------------|-------------------------------|
| `syncOutcome`        | string   | Clone/sync result                         | `Succeeded`                   |
| `syncCloneUri`       | string   | Clone URL                                 | `https://github.com/org/repo` |
| `syncLstDownloadUri` | string   | LST download URL (empty if built locally) |                               |
| `syncStartTime`      | ISO 8601 | Sync start timestamp                      | `2026-02-19T00:07:11.946Z`    |
| `syncEndTime`        | ISO 8601 | Sync end timestamp                        | `2026-02-19T00:07:13.704Z`    |
| `syncChangeset`      | string   | Git commit SHA at sync                    | `a3b1862d...`                 |
| `syncElapsedTimeMs`  | integer  | Duration in milliseconds                  | `1758`                        |

## Build stage

Populated after `mod build`.

| Column                            | Type     | Description                     | Example                              |
|-----------------------------------|----------|---------------------------------|--------------------------------------|
| `buildOutcome`                    | string   | Build result                    | `Succeeded`                          |
| `buildStartTime`                  | ISO 8601 | Build start timestamp           | `2026-02-19T00:12:22.215Z`           |
| `buildEndTime`                    | ISO 8601 | Build end timestamp             | `2026-02-19T00:12:47.263Z`           |
| `buildId`                         | string   | Build identifier                | `20260219000719-cYGAL`               |
| `buildDependencyResolutionTimeMs` | integer  | Dependency resolution time (ms) | `13534`                              |
| `buildChangeset`                  | string   | Git SHA at build time           | `a3b1862d...`                        |
| `buildMavenVersion`               | string   | Maven version used              | `3.8.4`                              |
| `buildGradleVersion`              | string   | Gradle version used             |                                      |
| `buildBazelVersion`               | string   | Bazel version used              |                                      |
| `buildDotnetVersion`              | string   | .NET version used               |                                      |
| `buildPythonVersion`              | string   | Python version used             |                                      |
| `buildNodeVersion`                | string   | Node.js version used            |                                      |
| `buildOsName`                     | string   | Build host OS                   | `Linux`                              |
| `buildOsVersion`                  | string   | OS kernel version               | `4.14.355-280.710.amzn2.x86_64`      |
| `buildOsEol`                      | string   | Line ending format              | `LF`                                 |
| `buildGitAutocrlf`                | string   | Git autocrlf setting            | `False`                              |
| `buildGitEol`                     | string   | Git eol setting                 | `Native`                             |
| `buildSourceFileCount`            | integer  | Source files in repo            | `256`                                |
| `buildLineCount`                  | integer  | Total lines of code             | `41015`                              |
| `buildParseErrorCount`            | integer  | Parse errors during build       | `1`                                  |
| `buildWeight`                     | integer  | LST weight                      | `83285`                              |
| `buildMaxWeight`                  | integer  | Max single-file weight          | `6617`                               |
| `buildMaxWeightSourceFile`        | string   | Heaviest file path              | `src/test/MessageMLContextTest.java` |
| `buildCliVersion`                 | string   | CLI version used                | `3.57.8`                             |
| `buildElapsedTimeMs`              | integer  | Build duration (ms)             | `25048`                              |

## Run stage

Populated after `mod run`.

| Column                            | Type     | Description                                                           | Example                               |
|-----------------------------------|----------|-----------------------------------------------------------------------|---------------------------------------|
| `runOutcome`                      | string   | Recipe run result                                                     | `Succeeded`                           |
| `runStartTime`                    | ISO 8601 | Run start timestamp                                                   | `2026-02-19T20:53:58.396Z`            |
| `runEndTime`                      | ISO 8601 | Run end timestamp                                                     | `2026-02-19T20:54:29.312Z`            |
| `runId`                           | string   | Run identifier                                                        | `20260219145356-EWS22`                |
| `runUnlicensedAttempt`            | boolean  | Was this an unlicensed attempt?                                       | `false`                               |
| `runStreaming`                    | boolean  | Streaming mode?                                                       | `false`                               |
| `runRecipeId`                     | string   | Fully qualified recipe name                                           | `org.openrewrite.java.OrderImports`   |
| `runRecipeInstanceName`           | string   | Display name                                                          | `Order imports`                       |
| `runRecipeOptions`                | string   | JSON recipe options                                                   | `{}`                                  |
| `runRecipeArtifact`               | string   | Recipe artifact GAV                                                   | `org.openrewrite:rewrite-java:8.70.0` |
| `runEstimatedEffortTimeSavingsMs` | integer  | Estimated time saved (ms)                                             | `23100000`                            |
| `runDependencyResolutionTimeMs`   | integer  | Dependency resolution time (ms)                                       | `0`                                   |
| `runPomCacheHitRate`              | float    | POM cache hit rate                                                    | `0.919`                               |
| `runResolvedPomCacheHitRate`      | float    | Resolved POM cache hit rate                                           | `1.0`                                 |
| `runFilesWithFixResults`          | integer  | Files with fix results                                                | `77`                                  |
| `runFilesWithSearchResults`       | integer  | Files with search results                                             | `0`                                   |
| `runFilesWithErrors`              | integer  | Files with errors                                                     | `0`                                   |
| `runFilesSearched`                | integer  | Total files searched                                                  | `252`                                 |
| `runLinesAdded`                   | integer  | Lines added across the recipe's changes, counted with git semantics   | `418`                                 |
| `runLinesRemoved`                 | integer  | Lines removed across the recipe's changes, counted with git semantics | `126`                                 |
| `runDataTables`                   | integer  | Data tables produced                                                  | `2`                                   |
| `runThread`                       | string   | Thread name                                                           | `ForkJoinPool.commonPool-worker-10`   |
| `runElapsedTimeMs`                | integer  | Recipe run duration (ms)                                              | `30916`                               |

## Apply stage

Populated after `mod git apply`.

| Column               | Type     | Description           | Example                    |
|----------------------|----------|-----------------------|----------------------------|
| `applyOutcome`       | string   | Apply result          | `Succeeded`                |
| `applyStartTime`     | ISO 8601 | Apply start timestamp | `2026-02-19T21:28:30.330Z` |
| `applyEndTime`       | ISO 8601 | Apply end timestamp   | `2026-02-19T21:28:30.621Z` |
| `applyId`            | string   | Apply identifier      | `20260219152829-UpYgU`     |
| `applyElapsedTimeMs` | integer  | Duration (ms)         | `291`                      |

## Add stage

Populated after `mod git add`.

| Column             | Type     | Description         | Example                    |
|--------------------|----------|---------------------|----------------------------|
| `addOutcome`       | string   | Git add result      | `Succeeded`                |
| `addStartTime`     | ISO 8601 | Add start timestamp | `2026-02-19T21:28:31.090Z` |
| `addEndTime`       | ISO 8601 | Add end timestamp   | `2026-02-19T21:28:32.485Z` |
| `addId`            | string   | Add identifier      | `20260219152830-FN6kt`     |
| `addElapsedTimeMs` | integer  | Duration (ms)       | `1395`                     |

## Commit stage

Populated after `mod git commit`.

| Column                | Type     | Description            | Example                    |
|-----------------------|----------|------------------------|----------------------------|
| `commitOutcome`       | string   | Commit result          | `Succeeded`                |
| `commitStartTime`     | ISO 8601 | Commit start timestamp | `2026-02-19T21:28:32.965Z` |
| `commitEndTime`       | ISO 8601 | Commit end timestamp   | `2026-02-19T21:28:33.064Z` |
| `commitId`            | string   | Commit identifier      | `20260219152832-ztzOh`     |
| `commitBranch`        | string   | Target branch          | `main`                     |
| `commitElapsedTimeMs` | integer  | Duration (ms)          | `99`                       |

## Push stage

Populated after `mod git push`.

| Column              | Type     | Description                                       | Example                    |
|---------------------|----------|---------------------------------------------------|----------------------------|
| `pushOutcome`       | string   | Push result                                       | `Succeeded`                |
| `pushStartTime`     | ISO 8601 | Push start timestamp                              | `2026-02-19T21:28:34.100Z` |
| `pushEndTime`       | ISO 8601 | Push end timestamp                                | `2026-02-19T21:28:35.500Z` |
| `pushId`            | string   | Push identifier                                   | `20260219152834-Ph1kd`     |
| `pushRemoteBranch`  | string   | Branch pushed to on the remote                    | `moderne/order-imports`    |
| `pushSetUpstream`   | boolean  | Whether the push set the upstream tracking branch | `true`                     |
| `pushElapsedTimeMs` | integer  | Duration (ms)                                     | `1400`                     |

## Publish stage

Populated after `mod publish`. These columns appear only in `mod publish` rows; they are not part of the `mod git sync` → `mod git push` workflow chain. Because `mod publish` branches off after Build, the publish columns slot in immediately after the build stage.

| Column                 | Type     | Description                                                                                            | Example                                                   |
|------------------------|----------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| `publishOutcome`       | string   | Publish result                                                                                         | `Succeeded`                                               |
| `publishStartTime`     | ISO 8601 | Publish start timestamp                                                                                | `2026-04-10T15:30:00.000Z`                                |
| `publishEndTime`       | ISO 8601 | Publish end timestamp                                                                                  | `2026-04-10T15:30:04.512Z`                                |
| `publishId`            | string   | Publish command identifier                                                                             | `20260410103000-PbLsh`                                    |
| `publishUri`           | string   | Destination URI of the published LST artifact (empty when publish was skipped or failed before upload) | `https://artifacts.example.com/org/repo/1.0/repo-1.0.jar` |
| `publishElapsedTimeMs` | integer  | Duration (ms)                                                                                          | `4512`                                                    |

## Exec stage

Populated by `mod exec`. Exec rows are standalone: they carry the common columns plus the exec columns, with no sync/build/run stages.

:::warning
`execCommand` records the full command line and `execExecutionDirectory` records an absolute local path. Pass credentials to `mod exec` through environment variables rather than as command arguments, so they are not captured in telemetry.
:::

| Column                              | Type     | Description                                              | Example                     |
|-------------------------------------|----------|----------------------------------------------------------|-----------------------------|
| `execOutcome`                       | string   | Command result                                           | `Succeeded`                 |
| `execStartTime`                     | ISO 8601 | Start timestamp                                          | `2026-05-02T14:10:03.120Z`  |
| `execEndTime`                       | ISO 8601 | End timestamp                                            | `2026-05-02T14:10:09.882Z`  |
| `execId`                            | string   | Exec command identifier                                  | `20260502091003-Xk2Lm`      |
| `execCommand`                       | string   | The command as written                                   | `mvn -q test`               |
| `execCommandWithSubstitutions`      | string   | The command after variable substitution                  | `mvn -q test`               |
| `execExitCode`                      | integer  | Process exit code                                        | `0`                         |
| `execRecipeRunId`                   | string   | Run identifier, when the exec was scoped to a recipe run | `20260502090958-EWS22`      |
| `execExecutionDirectory`            | string   | Directory the command ran in                             | `/home/user/repos/org/repo` |
| `execVarJavaHome`                   | string   | `JAVA_HOME` as seen by the command                       | `/usr/lib/jvm/java-21`      |
| `execVarModerneJavaHome`            | string   | `MODERNE_JAVA_HOME`                                      |                             |
| `execVarModerneJavaVersion`         | string   | `MODERNE_JAVA_VERSION`                                   | `21`                        |
| `execVarModerneJavaJdk`             | string   | `MODERNE_JAVA_JDK`                                       |                             |
| `execVarModerneBuildTool`           | string   | `MODERNE_BUILD_TOOL`                                     | `maven`                     |
| `execVarModerneBuildToolCompile`    | string   | `MODERNE_BUILD_TOOL_COMPILE`                             |                             |
| `execVarModerneBuildToolCheck`      | string   | `MODERNE_BUILD_TOOL_CHECK`                               |                             |
| `execVarModerneBuildToolDir`        | string   | `MODERNE_BUILD_TOOL_DIR`                                 |                             |
| `execVarModerneBuildToolExecutable` | string   | `MODERNE_BUILD_TOOL_EXECUTABLE`                          |                             |
| `execElapsedTimeMs`                 | integer  | Duration (ms)                                            | `6762`                      |

## MCP fields

Populated by Moderne MCP server tool calls. MCP rows are standalone: they carry the common columns plus the MCP columns, with no sync/build/run stages.

| Column             | Type     | Description                                                                                                                                               | Example                             |
|--------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `mcpOutcome`       | string   | Tool-call result                                                                                                                                          | `Succeeded`                         |
| `mcpStartTime`     | ISO 8601 | Tool-call start timestamp                                                                                                                                 | `2026-06-14T10:15:02.100Z`          |
| `mcpEndTime`       | ISO 8601 | Tool-call end timestamp                                                                                                                                   | `2026-06-14T10:15:02.640Z`          |
| `mcpSessionId`     | string   | MCP session identifier                                                                                                                                    | `a1b2c3d4`                          |
| `mcpToolName`      | string   | Name of the MCP tool invoked                                                                                                                              | `find_types`                        |
| `mcpRecipeId`      | string   | Recipe referenced by the call, if any                                                                                                                     | `org.openrewrite.java.OrderImports` |
| `mcpMatchCount`    | integer  | Matches returned by the call                                                                                                                              | `12`                                |
| `mcpChangeCount`   | integer  | Changes produced by the call                                                                                                                              | `3`                                 |
| `mcpRunId`         | string   | Run identifier, if the call triggered a run                                                                                                               | `20260614101500-AbCdE`              |
| `mcpResultBytes`   | integer  | Size of the result payload in bytes                                                                                                                       | `4096`                              |
| `mcpArguments`     | string   | Truncated (roughly 120 character) summary of the arguments passed to the tool. Not guaranteed to be parseable JSON, so do not apply `json_extract` to it. | `{"query":"order imports"}`         |
| `mcpElapsedTimeMs` | integer  | Duration in milliseconds                                                                                                                                  | `540`                               |

## Organization and trace tags

`organization` is the last of the stage columns.

| Column         | Type   | Description                                 | Example            |
|----------------|--------|---------------------------------------------|--------------------|
| `organization` | string | Moderne organization the command ran within | `ALL/Company/Team` |

If you run a command with [trace tags](../how-to-guides/cli-telemetry.md), each tag adds one column named `tag.<key>`, appended after `organization`. Running `mod exec --trace-tag team=docs` produces a row ending:

```
...,execElapsedTimeMs,organization,tag.team
```

Tag columns vary by who ran the command and with what tags, so treat them as optional and read them by name.
