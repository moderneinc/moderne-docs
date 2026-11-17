---
sidebar_label: trace.csv reference
description: Field-by-field reference for the trace.csv telemetry file the Moderne CLI and platform emit for each command.
---

# trace.csv reference

The Moderne CLI and platform record telemetry for each command as a row in a `trace.csv` file, one row per repository per command. For how that telemetry is generated and collected, see [Understanding CLI usage across your organization](../how-to-guides/cli-telemetry.md). For how to replicate it to your own cloud storage and query it, see [Querying and BI](../../../administrator-documentation/moderne-platform/how-to-guides/configuring-telemetry-exports/querying-and-bi.md).

This page is the field reference for those rows.

## How to read this reference

* **Columns are grouped by stage.** A stage is one step of the CLI workflow - such as sync, build, or run. Each stage's columns start with its name as a prefix. For example, build stage's columns are `buildOutcome`, `buildStartTime`, and so on.
* **Traces are hierarchical.** Each command writes its own stage plus every earlier stage in the workflow. A `mod run` row therefore has the sync, build, and run columns, while a `mod git commit` row has everything through commit. A stage a command didn't reach is left empty.
* **`organization` is the last of the stage columns.** Because each command type writes a different set of stages, the row width and the position of `organization` differ by type. If you use [trace tags](../how-to-guides/cli-telemetry.md), one `tag.<key>` column per tag is appended *after* `organization`, so it is not the last column in that case.
* **Every field is written as text.** The **Type** column below is the *logical* type of the value (what it represents), not a storage type. A CSV field is always text until you cast it.
* **Column headers are mixed-case** in the file (`runStartTime`). Query engines that fold identifiers to lowercase (Athena, Trino) will expose them lowercased (`runstarttime`).
* **Every `*Outcome` column holds one of `Succeeded`, `Failed`, `Canceled`, or `Skipped`.**
* **Columns change between CLI versions**, and new fields are inserted mid-stage rather than added at the end. Older partitions can be both narrower and differently ordered, which a positional reader will not warn you about. Prefer reading by column name.
* **`*Log` columns are not exported.** Each stage records a local log path, but those columns are stripped when the trace is queued for upload, so they never appear in the CSV delivered to your bucket.

## Trace hierarchy

Each command produces a trace that includes its own stage plus all prior stages. The `type` value identifies the command.

| Command                    | `type`     | Stages included                                  |
|----------------------------|------------|--------------------------------------------------|
| `mod git sync`             | `sync`     | Sync                                             |
| `mod build`                | `build`    | Sync + Build                                     |
| `mod run`                  | `run`      | Sync + Build + Run                               |
| `mod git apply`            | `apply`    | Sync + Build + Run + Apply                       |
| `mod git add`              | `add`      | Sync + Build + Run + Apply + Add                 |
| `mod git commit`           | `commit`   | Sync + Build + Run + Apply + Add + Commit        |
| `mod git push`             | `push`     | Sync + Build + Run + Apply + Add + Commit + Push |
| `mod publish`              | `publish`  | Sync + Build + Publish                           |
| `mod exec`                 | `exec`     | Exec (standalone)                                |
| MCP server tool call       | `mcp`      | MCP (standalone)                                 |
| `mod <agent> chat`         | `agent`    | Agent (standalone, no repository columns)        |
| `mod search`               | `search`   | Search (standalone, no repository columns)       |
| `mod navigate`             | `navigate` | Navigate (standalone)                            |
| Code search in Moderne     | `search`   | Search (standalone, no repository columns)       |
| Code navigation in Moderne | `navigate` | Navigate (standalone)                            |

`mod publish` runs after Build in place of the Run through Push chain. Its rows have no columns for those stages.

## Build columns and prebuilt LSTs

Populated build columns do not mean a build ran on the machine that issued the command. Every LST carries a `trace.json` describing the build that produced it, so when `mod git sync` downloads a prebuilt LST, the CLI reads that file and carries its build stage into the trace. The build columns then describe the original build, wherever and whenever it happened.

To tell the two apart, check `syncLstDownloadUri`: populated means the LST was downloaded, empty means it was built locally.

LSTs produced before CLI 3.45.0 have no embedded `trace.json`. Their build columns are empty apart from an identifier.

## Common fields

Every row has these columns. The first three are the repository columns, which identify the repository the command ran in. Agent and search rows are the exception and have only `developer` and `cliVersion`.

Rows written by a CLI older than 4.12.0 have no `cliVersion` column. Search and navigate rows that come from Moderne won't have one either.

| Column       | Type   | Description                    | Example               |
|--------------|--------|--------------------------------|-----------------------|
| `origin`     | string | SCM host                       | `github.com`          |
| `path`       | string | Repository path (org/repo)     | `openrewrite/rewrite` |
| `branch`     | string | Branch name                    | `main`                |
| `developer`  | string | User email                     | `user@example.com`    |
| `cliVersion` | string | CLI version that wrote the row | `4.12.6`              |

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
| `buildFailureCategory`            | string   | Why a failed build failed       | `Other`                              |
| `buildFailureException`           | string   | Innermost exception reported    | `java.lang.ClassNotFoundException`   |
| `buildFailureReason`              | string   | Innermost cause, tool's words   | `org.gradle.api.plugins.MavenPlugin` |
| `buildFailureStep`                | string   | Build step that failed          | `JavaScript`                         |
| `buildStartTime`                  | ISO 8601 | Build start timestamp           | `2026-02-19T00:12:22.215Z`           |
| `buildEndTime`                    | ISO 8601 | Build end timestamp             | `2026-02-19T00:12:47.263Z`           |
| `buildId`                         | string   | Build identifier                | `20260219000719-cYGAL`               |
| `buildDependencyResolutionTimeMs` | integer  | Dependency resolution time (ms) | `13534`                              |
| `buildChangeset`                  | string   | Git SHA at build time           | `a3b1862d...`                        |
| `buildTool`                       | string   | Primary build tool              | `Maven`                              |
| `buildToolVersion`                | string   | Primary build tool version      | `3.9.16`                             |
| `buildJdk`                        | string   | JDK the build used              | `17.0.20.1-tem`                      |
| `buildMavenVersion`               | string   | Maven version used              | `3.8.4`                              |
| `buildGradleVersion`              | string   | Gradle version used             |                                      |
| `buildBazelVersion`               | string   | Bazel version used              |                                      |
| `buildDotnetVersion`              | string   | .NET version used               |                                      |
| `buildGoVersion`                  | string   | Go version used                 | `1.25.14`                            |
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
| `buildCliVersion`                 | string   | CLI version that built the LST  | `3.57.8`                             |
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
| `commitId`            | string   | Run ID (not a git SHA) | `20260219152832-ztzOh`     |
| `commitBranch`        | string   | Target branch          | `main`                     |
| `commitSha`           | string   | Git SHA of the commit  | `5bc3ba70...`              |
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

Populated after `mod publish`. These columns appear only in `mod publish` rows - they are not part of the `mod git sync` → `mod git push` workflow chain. Because `mod publish` branches off after Build, the publish columns slot in immediately after the build stage.

| Column                 | Type     | Description                                                                                            | Example                                                   |
|------------------------|----------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| `publishOutcome`       | string   | Publish result                                                                                         | `Succeeded`                                               |
| `publishStartTime`     | ISO 8601 | Publish start timestamp                                                                                | `2026-04-10T15:30:00.000Z`                                |
| `publishEndTime`       | ISO 8601 | Publish end timestamp                                                                                  | `2026-04-10T15:30:04.512Z`                                |
| `publishId`            | string   | Publish command identifier                                                                             | `20260410103000-PbLsh`                                    |
| `publishUri`           | string   | Destination URI of the published LST artifact (empty when publish was skipped or failed before upload) | `https://artifacts.example.com/org/repo/1.0/repo-1.0.jar` |
| `publishElapsedTimeMs` | integer  | Duration (ms)                                                                                          | `4512`                                                    |

## Exec stage

Populated by `mod exec`. Exec rows are standalone: they have the common columns plus the exec columns, with no sync/build/run stages.

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

Populated by Moderne MCP server tool calls. MCP rows are standalone: they have the common columns plus the MCP columns, with no sync/build/run stages.

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

## Agent fields

Populated by [`mod <agent> chat`](../../agent-tools/agent-chat.md), one row per agent session. Agent rows have `developer`, `cliVersion`, and the agent columns, with no repository columns, no `organization`, and no trace tags. The session columns (`agentSessionId` through `agentCostUnit`) come from the agent's own transcript and are empty for agents whose transcript the CLI does not read.

:::warning
`agentPrompt` records the full text of the session's initial prompt. Don't put credentials or other sensitive values in a prompt.
:::

| Column                   | Type     | Description                                          | Example                               |
|--------------------------|----------|------------------------------------------------------|---------------------------------------|
| `agentOutcome`           | string   | Session result                                       | `Succeeded`                           |
| `agentStartTime`         | ISO 8601 | Session start timestamp                              | `2026-09-16T14:02:11.410Z`            |
| `agentEndTime`           | ISO 8601 | Session end timestamp                                | `2026-09-16T14:31:48.902Z`            |
| `agentId`                | string   | `mod <agent> chat` command identifier                | `20260916100211-Qw3Rt`                |
| `agentSyncId`            | string   | Command identifier of the sync the session ran on    | `20260916095502-Hk8Zp`                |
| `agentName`              | string   | Agent command that was run                           | `claude`                              |
| `agentCommand`           | string   | Agent subcommand that started the session            | `chat`                                |
| `agentVersion`           | string   | Agent's installed version, if known                  | `2.1.252`                             |
| `agentPrompt`            | string   | Initial prompt of the session                        | `Upgrade every repository to Java 25` |
| `agentSessionId`         | string   | Agent's own session identifier                       | `0c6f3e9a-...`                        |
| `agentTurns`             | integer  | Messages the user sent, including the initial prompt | `4`                                   |
| `agentInputTokens`       | integer  | Input tokens, including cached tokens                | `1843220`                             |
| `agentCachedInputTokens` | integer  | Portion of input tokens served from cache            | `1712004`                             |
| `agentOutputTokens`      | integer  | Output tokens                                        | `38410`                               |
| `agentCost`              | decimal  | Session cost, as the agent accounts for it           | `3.42`                                |
| `agentCostUnit`          | string   | Unit of `agentCost`                                  | `USD`                                 |
| `agentElapsedTimeMs`     | integer  | Duration in milliseconds                             | `1777492`                             |

## Search fields

Search rows can come from two places:

* **The CLI.** When you run [`mod search`](../cli-reference.md#mod-search) against a working set, the CLI will write one row for each search (starting in CLI 4.12.9). It'll write a row even if the search fails (e.g., because of a syntax error).
* **Moderne.** When someone searches code in Moderne, Moderne will write one row for each page of results they ask for. It will also write one row for each SQL query. This includes searches from the web UI, from `mod search moderne://<organization>`, and from the code search tools in the [remote MCP server](../../agent-tools/mcp/remote-server.md). You'll find these rows under `source=saas`.

Keep in mind that when you search `moderne://<organization>`, the search runs in Moderne rather than on your machine. That means you'll see a row from Moderne for it, not one from the CLI.

Search rows don't have repository columns. They have `developer`, the search columns, and `organization`. There are a few differences depending on where a row came from:

* Rows from the CLI also have a `cliVersion` column. Their `organization` will always be empty, since a working set isn't an organization in Moderne.
* Rows from Moderne don't have a `cliVersion` column. Their `organization` is the organization that was searched, and it comes right after `developer` (rather than at the end of the row).

:::warning
`searchQuery` records the full query. Please don't paste credentials or other sensitive values into a search.
:::

| Column                           | Type     | Description                                     | Example                    |
|----------------------------------|----------|-------------------------------------------------|----------------------------|
| `searchOutcome`                  | string   | Search result                                   | `Succeeded`                |
| `searchStartTime`                | ISO 8601 | Search start timestamp                          | `2026-11-13T16:20:04.118Z` |
| `searchEndTime`                  | ISO 8601 | Search end timestamp                            | `2026-11-13T16:20:04.903Z` |
| `searchSyntax`                   | string   | Query syntax: `sourcegraph`, `zoekt`, or `sql`  | `sourcegraph`              |
| `searchQuery`                    | string   | The query as it was run, up to 8,192 characters | `JPAQuery lang:java`       |
| `searchQueryTruncated`           | boolean  | Whether the query was cut at 8,192 characters   | `false`                    |
| `searchFileCount`                | integer  | Files with at least one match                   | `14`                       |
| `searchRepositoryCount`          | integer  | Repositories with at least one match            | `3`                        |
| `searchIndexedRepositories`      | integer  | Repositories that had a search index            | `9`                        |
| `searchOrganizationRepositories` | integer  | Repositories searched, indexed or not           | `10`                       |
| `searchElapsedTimeMs`            | integer  | Duration in milliseconds                        | `785`                      |

If a search fails, the four count columns (`searchFileCount` through `searchOrganizationRepositories`) will be empty.

In rows from the CLI, `searchSyntax` will be `sourcegraph` or `zoekt`. In rows from Moderne, it will be `sourcegraph` for a search and `sql` for a SQL query.

In rows from Moderne, `searchFileCount` and `searchRepositoryCount` only count the files and repositories on the page of results that the row is for. Both will be empty for a SQL query.

Rows from Moderne also have these columns:

| Column                    | Type    | Description                                                               | Example            |
|---------------------------|---------|---------------------------------------------------------------------------|--------------------|
| `searchTool`              | string  | What ran the search. Empty for a SQL query                                | `findTypes`        |
| `searchRowCount`          | integer | Rows a SQL query answered. Empty for a search, or a SQL query that failed | `42`               |
| `searchComplete`          | boolean | Whether a SQL query's answer is the whole answer. Empty for a search      | `true`             |
| `searchIncompleteReasons` | string  | Why a SQL query's answer is not whole, separated by a vertical bar        | `RESULT_TRUNCATED` |
| `searchFailure`           | string  | `TIMEOUT` or `QUERY_FAILED` when a SQL query failed. Empty otherwise      | `TIMEOUT`          |

`searchTool` tells you what ran the search:

* `codeSearch` means the search came from the remote MCP server's `codeSearch` tool or from Moderne's API. The web UI and `mod search` both use the API, so `codeSearch` on its own won't tell you whether a search came from the remote MCP server.
* `findTypes`, `findMethods`, `findImplementations`, and `usageExamples` mean the search came from the remote MCP server tool with that name.

## Navigate fields

Like search rows, navigate rows can come from two places:

* **The CLI.** When you run [`mod navigate`](../cli-reference.md#mod-navigate) against a working set, the CLI will write one row for each command (starting in CLI 4.12.9). It'll write a row even if the navigation fails.
* **Moderne.** When someone navigates code in Moderne, Moderne will write rows that count those navigations. This includes navigation in the web UI, `mod navigate` when it runs in Moderne, and the remote MCP server's `codeNavigate` and `readFile` tools. You'll find these rows under `source=saas`.

`mod navigate` will run in Moderne (and Moderne will write the row instead of the CLI) in these cases:

* The target is `moderne://<organization>`.
* The `--in` option names a package, such as `org.springframework:spring-context:7.0.2`.
* A `definition` lookup needs Moderne to answer it. This happens when the name comes from a dependency or from the language's SDK, or when no repository in the working set declares it.

Navigate rows have the repository columns, `developer`, the navigate columns, and `organization`. As with search rows, they differ a bit depending on where they came from:

* Rows from the CLI also have a `cliVersion` column. Their `organization` will always be empty, since a working set isn't an organization in Moderne.
* Rows from Moderne don't have a `cliVersion` column. Their `organization` is the organization the navigation ran in, and it comes right after `developer`.

The repository columns tell you which repository the navigation happened in. If the CLI or Moderne can't tell which repository that is, they'll be empty. For example, if you run a `definition` lookup from the root of a working set without `--at` or `--in`, the row won't have a repository.

Rows from Moderne work a bit differently from rows from the CLI. Rather than writing a row for every navigation, Moderne will group navigations into windows of up to ten minutes. Within each window, it will write one row for each combination of operation, organization, developer, repository, `navigateSource`, and outcome. That means:

* `navigateStartTime` and `navigateEndTime` mark the start and end of the window.
* `navigateCount` is the number of navigations the row covers. If you want to know how many navigations there were, you'll need to add up `navigateCount` (rather than counting rows).
* `navigateElapsedTimeMs` is the total time of those navigations, and `navigateMaxElapsedTimeMs` is the longest one.

Keep in mind that rows from Moderne don't record whether a navigation came from the web UI, the CLI, or the remote MCP server.

:::note
If a window has more combinations than Moderne can keep track of, it will count the rest in one row with an empty developer, organization, repository, and `navigateSource`.
:::

| Column                     | Type     | Description                                                | Example                    |
|----------------------------|----------|------------------------------------------------------------|----------------------------|
| `navigateOutcome`          | string   | Navigation result                                          | `Succeeded`                |
| `navigateStartTime`        | ISO 8601 | Navigation start timestamp                                 | `2026-11-13T16:21:40.352Z` |
| `navigateEndTime`          | ISO 8601 | Navigation end timestamp                                   | `2026-11-13T16:21:40.564Z` |
| `navigateOperation`        | string   | Operation: `definition`, `read`, or `symbols`              | `definition`               |
| `navigateSource`           | string   | Where a `definition` lookup found the declaration          | `repository`               |
| `navigateCount`            | integer  | Navigations the row counts. Always `1` in a CLI row        | `1`                        |
| `navigateMaxElapsedTimeMs` | integer  | Longest navigation the row counts, in milliseconds         | `212`                      |
| `navigateElapsedTimeMs`    | integer  | Duration in milliseconds                                   | `212`                      |

`navigateSource` tells you where a `definition` lookup found the declaration:

* `repository` means it's in the repository the lookup was made in.
* `organization` means it's in another repository of the working set (or of the organization, for rows from Moderne).
* `package` means it's in a dependency's sources. You'll only see this value in rows from Moderne.
* `none` means the lookup didn't find a declaration.

`navigateSource` will be empty for `read` and `symbols`, as well as for any navigation that failed.

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
