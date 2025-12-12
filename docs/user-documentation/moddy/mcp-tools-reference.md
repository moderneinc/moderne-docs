---
sidebar_label: MCP tools reference
description: Complete reference for Moddy Desktop MCP tools available through the Model Context Protocol.
---

# Moddy Desktop MCP tools reference

When you connect an AI assistant (e.g., Claude) to Moddy Desktop, it can do more than just answer questions - it can actually analyze and modify your code.

This happens through the Model Context Protocol (MCP). Moddy Desktop exposes 8 tools that let AI assistants search through Moderne's recipe catalog, execute recipes across multiple repositories, query the data tables that recipes generate, and apply the resulting code changes - all through natural conversation.

To help you get the results you want when querying AI tools, this doc will contain specific reference details for every MCP tool we offer.

## Server information

If you're configuring an MCP client or troubleshooting connection issues, here are the server details you'll need:

* **Name:** MCP Moderne
* **Version:** `1.0.0`
* **Endpoint:** http://localhost:4848/mcp
* **Protocol:** MCP over HTTP with Server-Sent Events (SSE)

## Available tools

:::note **About Moddy Thread Id**
Every tool requires a `moddyThreadId` parameter. This is a UUID that identifies your conversation. The same UUID should be used across all tool calls in a session. If different thread IDs are used, Moddy Desktop will treat them as separate conversations in your chat history.
:::

### 1. findRecipes

When you ask for help finding a recipe, this is the tool your AI assistant reaches for. It searches Moderne's recipe catalog and returns matching recipes for code analysis, security scanning, refactoring, and more.

**Parameters:**

| Parameter       | Type   | Required | Description                                                                                            |
|-----------------|--------|----------|--------------------------------------------------------------------------------------------------------|
| `query`         | string | Yes      | Describe what recipes you're looking for. Starting with "find" or "change" often gives better results. |
| `moddyThreadId` | string | Yes      | Conversation thread ID.                                                                                |

**Try asking:**

```
Find me recipes that can detect Spring Boot usage across my repositories.
```

### 2. describeRecipeDataTables

When you want to know what data a recipe can produce before running it, your AI assistant uses this tool. It returns detailed information about the recipe's data tables, including column descriptions and structure.

**Parameters:**

| Parameter       | Type   | Required | Description                |
|-----------------|--------|----------|----------------------------|
| `recipeId`      | string | Yes      | The recipe ID to describe. |
| `moddyThreadId` | string | Yes      | Conversation thread ID.    |

**Try asking:**

```
Show me what data tables the org.openrewrite.java.search.FindTypes recipe can generate.
```

Or you could also make a more generic request - which would theoretically invoke the `findRecipes` tool in combination with this one:

```
Show me what data tables the "Find Types" recipe can generate.
```

### 3. runRecipe

When you want to run a recipe, your AI assistant uses this tool. It runs the recipe across every repository in the target directory in parallel. It also will collect analysis data that can be accessed in the future to tell what happened.

**Parameters:**

| Parameter         | Type   | Required | Description                                                                                                       |
|-------------------|--------|----------|-------------------------------------------------------------------------------------------------------------------|
| `targetDirectory` | string | Yes      | The fully qualified path to the directory containing your repositories.                                           |
| `recipeId`        | string | Yes      | The recipe ID to execute.                                                                                         |
| `moddyThreadId`   | string | Yes      | Conversation thread ID.                                                                                           |
| `options`         | array  | No       | Some recipes have options to let you customize the output. Provide them with a name-value pair to configure this. |

**Try asking:**

```
Run the org.openrewrite.java.search.FindTypes recipe with the fullyQualifiedTypeName option 
set to org.apache.commons.lang3.StringUtils and the checkAssignability option set to 
true on my repositories in /Users/myname/repos.
```

### 4. generateCsv

After running a recipe, your AI assistant can use this tool to convert the results into a structured CSV file. The CSV includes file paths, line numbers, and code context - making it easy to query with SQL or visualize the data.

**Parameters:**

| Parameter         | Type   | Required | Description                                                             |
|-------------------|--------|----------|-------------------------------------------------------------------------|
| `targetDirectory` | string | Yes      | The fully qualified path to the directory containing your repositories. |
| `dataTable`       | string | Yes      | The name of the data table to generate from the recipe run.             |
| `moddyThreadId`   | string | Yes      | Conversation thread ID.                                                 |

**Try asking:**

```
Generate the TypeUses data table as a CSV from the last recipe run.
```

### 5. analyzeCsv

Once you have a CSV data table, your AI assistant can use this tool to run SQL queries against it. This lets you answer complex questions about code patterns across repositories using SQLite syntax.

**Parameters:**

| Parameter       | Type   | Required | Description                                                                     |
|-----------------|--------|----------|---------------------------------------------------------------------------------|
| `dataTablePath` | string | Yes      | The fully qualified path to the CSV data table file.                            |
| `sqlQuery`      | string | Yes      | The SQL query to execute. Please make sure to use `csv_data` as the table name. |
| `moddyThreadId` | string | Yes      | Conversation thread ID.                                                         |

**Try asking:**

```
Run a SQL query on the /Users/myname/repos/data-table.csv data table to count occurrences by repository: SELECT repository, COUNT(*) as count FROM csv_data GROUP BY repository ORDER BY count DESC.
```

### 6. createBarChart

Your AI assistant can use this tool to generate interactive bar charts and histograms to visually analyze your code. These charts are displayed directly in the Moddy Desktop application and they're great for spotting patterns like technical debt hotspots.

**Parameters:**

| Parameter       | Type             | Required | Description                           |
|-----------------|------------------|----------|---------------------------------------|
| `data`          | array of numbers | Yes      | The numeric data to plot.             |
| `moddyThreadId` | string           | Yes      | Conversation thread ID.               |
| `bins`          | number           | No       | The number of bins for the histogram. |
| `binLabels`     | array of strings | No       | The labels for each bin.              |
| `title`         | string           | No       | The chart title.                      |
| `xAxisLabel`    | string           | No       | The X-axis label.                     |
| `yAxisLabel`    | string           | No       | The Y-axis label.                     |

**Try asking:**

```
Create a bar chart that shows the top 10 files with the most occurrences, using the repository names as labels.
```

### 7. getRemoteFile

When you need to look at a specific file from a remote repository, your AI assistant can use this tool to fetch it without cloning the entire repo. It uses sparse checkout to grab just the file you need. This is particularly useful when you want to examine files referenced in recipe data tables.

**Parameters:**

| Parameter          | Type   | Required | Description                                       |
|--------------------|--------|----------|---------------------------------------------------|
| `workingDirectory` | string | Yes      | The local directory where the file will be saved. |
| `repositoryOrigin` | string | Yes      | The Git repository origin (e.g., `github.com`).   |
| `repositoryPath`   | string | Yes      | The repository path (e.g., `neo4j/neo4j`).        |
| `repositoryBranch` | string | Yes      | The branch to checkout (e.g., `release/5.26.0`).  |
| `sourceFile`       | string | Yes      | The file path relative to the repository root.    |
| `moddyThreadId`    | string | Yes      | Conversation thread ID.                           |

**Try asking:**

```
Get the file at path community/collections/test.yml from the github.com/neo4j/neo4j repository on the release/5.26.0 branch.
```

### 8. applyPatch

When a recipe generates code changes, your AI assistant can use this tool to apply the changes to your project. Without applying a patch, your code wouldn't actually be changed when a recipe is run.

:::warning
This is a destructive operation that modifies files in your project. Make sure you have a clean git state or backups before applying patches.
:::

**Parameters:**

| Parameter       | Type   | Required | Description                                                        |
|-----------------|--------|----------|--------------------------------------------------------------------|
| `directoryPath` | string | Yes      | The path to the project directory where changes should be applied. |
| `recipeRunId`   | string | Yes      | The ID of the recipe run containing the changes.                   |
| `moddyThreadId` | string | Yes      | Conversation thread ID.                                            |

**Try asking:**

```
Apply the changes from recipe run ID 20250710121622-dibSY to my project at /Users/myname/myproject.
```

## Additional resources

* [Moddy Desktop installation](./moddy-desktop.md)
* [Connecting to Moddy via MCP](./moddy-mcp-integration.md)
* [Moddy data privacy and models](./moddy-data-privacy.md)
