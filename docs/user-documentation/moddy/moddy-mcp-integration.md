---
sidebar_label: Connecting to Moddy via MCP
description: Connect Moddy Desktop to MCP-compatible tools.
---

# Connecting to Moddy via MCP

Moddy Desktop includes an MCP (Model Context Protocol) server that allows MCP-compatible clients to connect and interact with your codebase through Moddy. This advanced feature enables you to use tools like Claude Code alongside Moddy's multi-repo analysis and modification capabilities.

This guide assumes you have already [installed and configured Moddy Desktop](./moddy-desktop.md).

## Prerequisites

* Moddy Desktop must be running for the MCP connection to work.
* An MCP-compatible client (such as Claude Code).

## Connecting to the MCP server

The MCP server runs at `http://localhost:4848/mcp`.

### Adding Moddy as an MCP server

The exact commands will vary depending on your MCP client. Here are examples using Claude Code:

#### Add to all sessions (user-level)

```bash
claude mcp add moddy -s user -t http http://localhost:4848/mcp
```

#### Add to current session only

```bash
claude mcp add moddy -t http http://localhost:4848/mcp
```

### Removing the MCP connection

To disconnect from Moddy (Claude Code example):

```bash
claude mcp remove moddy
```

### Important notes

* Moddy Desktop must remain open for the MCP connection to function.
* Check your MCP client's documentation for specific connection instructions.

## Data privacy and models

For information about how data flows in Moddy and what models are used, see the [Moddy data privacy and models](./moddy-data-privacy.md) documentation.
