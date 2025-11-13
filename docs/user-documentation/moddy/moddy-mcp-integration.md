---
sidebar_label: MCP Integration
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

## How data flows

The AI model is chosen by the customer. All traffic to the model is routed via an on-prem agent (not to be confused with an AI agent). The deployment is BYOM and any generative model is supported.

<figure>
  ![](./assets/data-flow.png)
  <figcaption>_The flow of data from you to the LLM to an OpenRewrite recipe._</figcaption>
</figure>

<figure>
  ![](./assets/air-gapped-moddy.png)
  <figcaption>_What an air-gapped environment might look like._</figcaption>
</figure>

## Frequently asked questions

### What models do you use and how are they trained?

Moddy Desktop does not include its own model. You configure your own. We currently support:

* Anthropic (Claude)
* OpenAI (GPT)
* Google (Gemini)

Models deployed to your on-prem environment can also be supported.

### What data does Moddy desktop send to the models?

Recipe results and data tables.

### What data is sent to Moderne?

None. We employ a bring-your-own-model (BYOM) configuration. Moddy Desktop reaches out to your model and no data is passed to Moderne.
