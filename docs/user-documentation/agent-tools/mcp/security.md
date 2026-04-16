---
sidebar_label: Security and architecture
description: Understand the security architecture, network behavior, and data flow of the Moderne MCP server.
---

# Security and architecture

This page describes the security architecture of the Moderne MCP server (`mod mcp`) for IT, security, and compliance reviewers evaluating whether to permit it in their environment.

## Summary for security reviewers

| Question                                               | Answer                                                                                                                                                                                                    |
|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Is `mod mcp` a network service?                        | No. It is a local subprocess that communicates exclusively over stdin/stdout with the process that launched it.                                                                                           |
| Does it open any listening network port?               | One, conditionally: a loopback-only HTTP server bound to `127.0.0.1` on a random port, used by the macOS tray app. Disabled by default; only active when `feature.agentToolsTray=true` on macOS.          |
| Can it be reached from the network?                    | No. The MCP interface is stdio-only. The optional HTTP server is bound to loopback and cannot accept external connections.                                                                                |
| Does it make outbound internet connections?            | HTTPS requests can occur when a recipe JAR is not in the local Maven cache. Recipes themselves can also make HTTPS requests as part of their own logic. This is standard recipe behavior, not specific to MCP. |
| Does it contact the Moderne platform?                  | Not by default. The recipe marketplace is read from local CSV files. A future opt-in feature will allow connecting to your Moderne platform for audit and governance data collection.                          |
| Does it transmit telemetry or usage data?              | Not by default. A local tool-usage CSV is written to disk but never transmitted. A future opt-in feature will allow connecting to your Moderne platform to collect and process usage data.                     |
| Does it use or invoke any LLM or AI?                   | No. It is a deterministic code-intelligence tool server. It contains no model weights and makes no AI API calls.                                                                                          |
| Does the AI agent run inside `mod mcp`?                | No. The AI runs in the client (e.g., Claude Code, Copilot, Windsurf), which is a separate process. `mod mcp` is a tool server the agent calls; the agent's reasoning is entirely outside `mod mcp`.          |
| Does it read repository source code?                   | Yes - this is its core function. It reads the working repository to build the search index and LST, and to apply recipe transformations.                                                                  |
| Does it transmit repository source code?               | No. Source code is processed locally and never included in any outbound request.                                                                                                                          |
| Does it modify source files?                           | Yes, when refactoring tools are explicitly invoked (`run_recipe`, `change_type`, `change_method_name`, `pattern_replace`). The changes are the same as running the equivalent `mod run` command manually. |
| Does it read AI conversation transcripts?              | Yes. The transcript watcher reads the AI client's local conversation transcript files to record search-tool usage statistics in a local CSV. The data never leaves the machine.                               |
| Does it run with elevated privileges?                  | No. It runs under the developer's own user account with no privilege escalation.                                                                                                                          |
| Can it be used without outbound internet access?       | Yes. Pre-populate the Maven cache with required recipe JARs and set `feature.noMavenCentral=true`. Note that outbound access for recipe artifacts is standard Moderne CLI behavior, not specific to MCP.     |
| Is this different from already allowing the `mod` CLI? | No. Every operation `mod mcp` exposes is already available through `mod` CLI subcommands. `mod mcp` makes those same operations callable by an AI assistant in a structured, auditable way.               |

## How it runs

`mod mcp` is a stdio-based [Model Context Protocol](https://modelcontextprotocol.io/) server. The MCP standard defines two transport types:

* **HTTP-based** servers run as network services with a listening port, reachable over a network.
* **Stdio-based** servers run as local subprocesses with no network listener. Communication happens through stdin/stdout - the same mechanism as a shell pipe.

When an AI coding agent (such as Claude Code, Copilot, or Cursor) starts `mod mcp`, it launches it as a child process on the developer's workstation. It runs under the developer's own user account, has no daemon mode, no service registration, and no persistence beyond the active session. When the AI client closes the pipe, `mod mcp` shuts down.

:::info
`mod mcp` is an MCP wrapper around code-intelligence capabilities the Moderne CLI already exposes through its command-line interface. Customers who already permit the `mod` CLI on developer workstations are not adding new capabilities, network exposure, or privilege by also permitting `mod mcp`.
:::

## Startup sequence

**Phase 1 (immediate):** The server binds to stdio and begins accepting protocol messages. A `build_status` tool and two status resources (`lst://status`, `search://status`) are registered immediately so the AI client can monitor initialization progress.

**Phase 2 (background):** A background thread detects the git repository root, then concurrently:

* Builds a Lossless Semantic Tree (LST) by invoking the repository's build toolchain (Gradle, Maven, or other configured build tools)
* Builds a trigram search index over repository source files
* Optionally connects to the macOS tray app (disabled by default)
* Begins watching the AI client's local conversation transcript files for search-tool usage statistics (local only)

As each component becomes ready, additional tools are registered and the client is notified. No tool call can succeed before its underlying data layer is ready.

**Shutdown:** The server runs until the AI client closes the stdio pipe. On shutdown, the LST manager, search indexer, transcript watcher, and any local HTTP servers are stopped and cleaned up.

## Components

| Component          | Role                                                                                                                         |
|--------------------|------------------------------------------------------------------------------------------------------------------------------|
| MCP server         | Accepts and responds to MCP protocol messages over stdin/stdout                                                              |
| LST manager        | Orchestrates builds (Gradle, Maven, or other configured tools) to produce the Lossless Semantic Tree; watches for incremental changes |
| Trigram indexer    | Builds and maintains a zoekt-based trigram search index; watches for incremental changes                                     |
| Recipe runner      | Executes OpenRewrite recipes against the LST; writes results to the filesystem and DataTable output to local `.csv.gz` files |
| MCP side channel   | A loopback-only HTTP server used by the macOS tray app's tool browser (disabled by default)                                  |
| Tray client        | HTTP client that pushes session metadata to the macOS tray app over loopback (disabled by default)                           |
| Transcript watcher | Reads the AI client's local conversation transcript files; writes a local CSV of search-tool usage observations              |
| Recipe marketplace | Read-only view of local CSV files containing OpenRewrite recipe metadata; no network access                                  |
| Refaster transformer | Applies Refaster-style statement transformations for precise, deterministic edits without AI inference                      |

## Tools and resources exposed

All 18 tools perform deterministic code analysis or transformation against local data. None contact external services or perform AI inference.

### Available immediately (or once the search index is built)

| Tool                        | Description                                                                                             |
|-----------------------------|---------------------------------------------------------------------------------------------------------|
| `build_status`              | Returns the current state of both the trigram search index and the LST build. Always available.         |
| `grep`                      | Line-content search over repository files using ripgrep or the system grep binary. No index required.   |
| `trigrep_search`            | Fast trigram-indexed code search across the entire repository.                                          |
| `trigrep_structural_search` | Structural code search using Comby patterns for matching constructs that span multiple tokens or lines. |

### Available once the LST build reaches at least partial completion

| Tool                   | Description                                                                                                                    |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `lst_status`           | Detailed LST build status including file counts, current build phase, and any errors.                                          |
| `build_info`           | Project build metadata: tool versions, module structure, build tool detected.                                                  |
| `find_types`           | Finds all references to a fully-qualified Java type across the codebase.                                                       |
| `find_methods`         | Finds method invocations matching an AspectJ-style pattern.                                                                    |
| `find_annotations`     | Finds all usages of a specified annotation across the codebase.                                                                |
| `find_implementations` | Finds all classes implementing or extending a given type, including indirect implementations.                                  |
| `symbols_overview`     | Returns the symbol structure (classes, methods, fields) of a specific source file.                                             |
| `search_recipes`       | Searches the local recipe marketplace CSV for OpenRewrite recipes by keyword.                                                  |
| `learn_recipe`         | Returns full metadata for a specific recipe from the local marketplace.                                                        |
| `run_recipe`           | Executes an OpenRewrite recipe against the LST. May trigger a Maven artifact download if the recipe JAR is not locally cached. |
| `query_datatable`      | SQL interface (DuckDB, in-process) over `.csv.gz` DataTable files produced by a prior `run_recipe` call.                       |
| `change_type`          | Atomically renames or moves a Java type across the entire codebase.                                                            |
| `change_method_name`   | Atomically renames a method across the entire codebase.                                                                        |
| `pattern_replace`      | Applies a Refaster-style code pattern replacement across many files.                                                           |

### Resources

The MCP server exposes two read-only status resources:

| Resource URI      | Format | Description                                                                               |
|-------------------|--------|-------------------------------------------------------------------------------------------|
| `lst://status`    | JSON   | Current LST build state, initialization phase, error messages, and file coverage metrics. |
| `search://status` | JSON   | Current trigram index state, file count, shard count, and symbol count.                   |

## Data flow

**What stays on the local machine at all times:**

* All repository source code (read for indexing and analysis; never transmitted)
* The LST (written to `.moderne/mcp/lst/` inside the repository)
* The trigram search index (written to `.moderne/mcp/search/` inside the repository)
* Recipe run output and DataTables (written to `.moderne/mcp/run/` inside the repository; auto-deleted after one hour)
* The tool-observations CSV (written to `~/.moderne/mcp/tool-observations.csv`)
* All MCP protocol messages (carried over stdin/stdout; never over a network)

**What may leave the machine:**

* Outbound HTTPS requests from recipes - for Maven artifact resolution or remote file downloads. These are standard recipe behaviors (not specific to MCP) and contain only Maven coordinates or recipe-defined URLs. No source code or repository data is transmitted.

## Network behavior

### MCP protocol transport

The MCP protocol uses stdin/stdout exclusively. `mod mcp` opens no TCP socket and listens on no port for MCP communication. There is no network listener to firewall, no port to block, and no address to allowlist.

### Side-channel HTTP server (loopback only, disabled by default)

When the macOS tray feature is enabled, `mod mcp` opens one HTTP server bound to `127.0.0.1` on a random OS-assigned port. It is not accessible from other machines. This server exists solely to allow the [tool browser](./tool-browser.md) to invoke tools over HTTP. It exposes three endpoints:

* `GET /tools` - returns the list of registered tools and their input schemas
* `POST /tools/{toolName}` - executes the named tool with provided arguments
* `POST /rebuild` - triggers a fresh LST build

This server is **not started** unless `feature.agentToolsTray` is explicitly set to `true` (default: `false`). On non-macOS systems and in headless environments, it is never started.

When enabled, `mod mcp` also sends session metadata to the tray app over loopback HTTP. Data sent includes the session UUID, repository path, side-channel port, process ID, build state updates, parsing events, and tool call events. This data is consumed entirely by the local tray app for display and is not forwarded anywhere.

### Recipe-related outbound connections

Recipes may make outbound HTTPS connections as part of their normal behavior. This is not specific to MCP - the same connections occur when running recipes through the `mod` CLI directly. Examples include:

* **Maven artifact downloads:** Recipe JARs are resolved from the local Maven cache (`~/.m2/repository/`) first. If not cached, Maven downloads them over HTTPS. Only Maven coordinates are transmitted - no source code or repository data.
* **Remote file downloads:** Some migration recipes fetch new file content from URLs as part of their output. Most recipes never trigger this.

**For restricted-outbound environments**, you can pre-populate the Maven cache, configure `~/.m2/settings.xml` to use an internal mirror, set `feature.noMavenCentral=true`, or use Maven offline mode.

### Telemetry

In its default configuration, `mod mcp` transmits no telemetry, analytics, crash reports, or usage data. The transcript watcher writes search-tool usage observations to a local CSV at `~/.moderne/mcp/tool-observations.csv`. This file is never transmitted anywhere. There is no phone-home mechanism.

`mod mcp` does not contact the Moderne SaaS platform API by default. The recipe marketplace used by `search_recipes`, `learn_recipe`, and `run_recipe` is read entirely from local CSV files installed by `mod config recipes` commands.

:::info
In a future release, the Moderne CLI will provide an opt-in feature to connect to your Moderne platform for centralized telemetry collection and audit/governance data. This will require explicit configuration and will not be enabled by default.
:::

## Filesystem access

`mod mcp` runs under the developer's user account and has exactly the filesystem access that user already has. It does not escalate privileges.

### Files and directories read

| Location                                                  | Purpose                                                                                                                                                        |
|-----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Repository working tree                                   | Source files read to build the LST, trigram search index, and execute recipe transformations.                                                                  |
| `{repo}/.git/`                                            | Git metadata for detecting the repository root and worktree configurations.                                                                                    |
| `{repo}/.moderne/recipes-v5.csv`                          | Per-repository recipe marketplace override, if present.                                                                                                        |
| `{repo}/.moderne/mcp/search/*.zoekt`                      | Trigram search index shard files (read back after being written by the indexer).                                                                               |
| `{repo}/.moderne/mcp/lst/`                                | Cached LST files from prior builds.                                                                                                                            |
| `~/.moderne/cli/recipes-v5.csv`                           | Global recipe marketplace catalog.                                                                                                                             |
| `~/.moderne/tray/server.port`                             | Port number of the tray app's HTTP server (macOS/tray feature only).                                                                                           |
| `~/.moderne/tray/server.lock`                             | Lock file for detecting whether the tray app is running (macOS/tray feature only).                                                                             |
| `$CLAUDE_CONFIG_DIR/projects/{encoded-repo-path}/*.jsonl` | AI client conversation transcript files, read by the transcript watcher for local search-tool usage statistics. The path shown is for Claude Code (`CLAUDE_CONFIG_DIR` defaults to `~/.claude`); other agents store transcripts in their own locations. |

### Files and directories written

| Location                                              | Purpose                                                                           |
|-------------------------------------------------------|-----------------------------------------------------------------------------------|
| `{repo}/**` (arbitrary paths)                         | Source files modified, added, or deleted by refactoring recipes.                  |
| `{repo}/.moderne/mcp/lst/`                            | Serialized LST files after each build.                                            |
| `{repo}/.moderne/mcp/search/*.zoekt`                  | Trigram index shard files.                                                        |
| `{repo}/.moderne/mcp/run/{runId}/datatables/*.csv.gz` | DataTable files produced by recipe runs. Auto-deleted after one hour.             |
| `{repo}/.moderne/mcp/lst/recipe.log`                  | Log of Maven artifact resolution activity during recipe preparation.              |
| `{repo}/.moderne/mcp/lst/parsing-events.json`         | Cached parsing events, replayed to the tray app on restart.                       |
| `~/.moderne/mcp/tool-observations.csv`                | Append-only log of search-tool usage observations. Local only; never transmitted. |
| `~/.moderne/mcp/tool-observations.csv.lock`           | File lock for serializing concurrent writes to the observations CSV.              |
| `~/.moderne/tray/tray.log`                            | Tray app subprocess stdout/stderr (macOS/tray feature only).                      |
| `{claude-project-dir}/.transcript-watcher.lock`       | File lock ensuring one `mod mcp` process per repository watches transcripts.      |

### Filesystem monitoring

`mod mcp` uses a directory watcher to monitor the repository working tree for file changes so the LST and trigram index can be updated incrementally. Changes are debounced with a sub-second delay. The watcher uses a platform-native filesystem events API; it does not spawn external processes or make network calls.

## Configuration

### Feature flags

Feature flags are stored in the Moderne CLI's local configuration file and managed through `mod config features`:

| Flag                     | Default | Effect                                                                                  |
|--------------------------|---------|-----------------------------------------------------------------------------------------|
| `feature.agentToolsTray` | `false` | Enables macOS tray app integration. When false, no side-channel HTTP server is started. |
| `feature.noMavenCentral` | `false` | When true, prevents Maven Central from being contacted for recipe JAR resolution.       |
| `feature.search`         | `false` | Enables or disables the trigram search feature.                                         |

### Environment variables

| Variable                          | Effect                                                                                                                                           |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `CLAUDE_CONFIG_DIR`               | Overrides the default Claude Code configuration directory (`~/.claude`). Used by the transcript watcher to locate conversation transcript files. Other agents use their own configuration paths. |
| `java.home` (JVM system property) | Determines the Java binary used to launch the tray app subprocess.                                                                               |
| `mod.jar` (JVM system property)   | Points to the Moderne CLI fat JAR, set by the `modw` wrapper script. Used when launching the tray app.                                           |

### Secrets and credentials

`mod mcp` does not handle, read, store, or transmit any API keys, authentication tokens, passwords, or other credentials. Maven credentials for private artifact repositories are handled by the standard Maven settings mechanism (`~/.m2/settings.xml`) and accessed only by the Maven runtime during artifact resolution.
