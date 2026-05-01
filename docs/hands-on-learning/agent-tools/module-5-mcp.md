---
sidebar_label: "Module 5: MCP server"
description: Explore the Moderne MCP server and the semantic search, navigation, and refactoring tools it exposes to your AI coding agent.
---

# Module 5: MCP server

In this final module, you'll see how the Moderne MCP server gives your AI coding agent direct access to indexed search, semantic navigation, codebase-wide refactoring, and recipe execution. You already installed it in [Module 2](./module-2-install-agent-tools.md) (it ships alongside skills via `mod config agent-tools install`). Now you'll exercise the tools.

For the full tool catalog and architecture details, see the [MCP server overview](../../user-documentation/agent-tools/mcp/overview.md). This module is hands-on practice.

## Exercise 5-1: Confirm the MCP server is wired up

### Goals for this exercise

* See where each agent stores its MCP server configuration
* Confirm the MCP tools show up in your agent

### Key concepts

The MCP server is a process the CLI starts when your agent opens a project. The agent talks to it over the [Model Context Protocol](https://modelcontextprotocol.io/), which is what makes the Moderne tools (e.g. `trigrep_search`, `find_methods`, `change_type`, `run_recipe`) appear as callable tools in the agent's tool list.

Each agent has its own configuration mechanism. The CLI handles the differences for you. For example, it runs `claude mcp add` for Claude Code and writes to `~/.cursor/mcp.json` for Cursor.

### Steps

#### Step 1: Find the MCP configuration for your agent

| Agent           | MCP configuration                                   |
|-----------------|-----------------------------------------------------|
| Claude Code     | Registered via `claude mcp add`                     |
| Windsurf        | `~/.codeium/windsurf/mcp_config.json`               |
| Cursor          | `~/.cursor/mcp.json`                                |
| GitHub Copilot  | `.vscode/mcp.json` and `~/.copilot/mcp-config.json` |
| Sourcegraph Amp | Registered via `amp mcp add`                        |
| OpenAI Codex    | Registered via `codex mcp add`                      |

For Claude Code, list registered MCP servers:

```bash
claude mcp list
```

You should see `moderne` (or similar) listed. For Cursor, open `~/.cursor/mcp.json` and confirm a `moderne` entry exists.

#### Step 2: Open the project and confirm tools are exposed

Start your agent inside the workspace from Module 1:

```bash
cd ~/agent-tools-workshop
claude       # Claude Code
# cursor .   # Cursor
# windsurf . # Windsurf
```

In Claude Code, the MCP tools appear as `mcp__moderne__*` and are listed when the agent shows its available tools. In Cursor, they appear as MCP tool calls in the agent's chat. In each case, the names match the table in [Available tools](../../user-documentation/agent-tools/mcp/overview.md#available-tools).

:::warning
The MCP server **must be started from within a git repository**. If your working directory isn't a git repo, the server exits immediately and none of the tools become available. The `mod git sync` from [Module 1](./module-1-cli-and-lsts.md) takes care of this — every cloned repo is its own git directory.
:::

#### Step 3: Watch the build progress

When the MCP server starts, it builds two things in the background: the trigram search index (powering `trigrep_search` and `trigrep_structural_search`) and LSTs (powering the semantic tools). Tools become available progressively as each build completes.

You can ask the agent to check the status itself:

> Use the `lst_status` and `build_status` tools to tell me which Moderne tools are ready right now.

Or, if you enabled the [tool browser](../../user-documentation/agent-tools/mcp/tool-browser.md), open it from your system tray to see live build progress and per-project status cards.

### Takeaways

* The CLI handles the MCP wiring per agent. You usually don't need to edit configuration files by hand.
* The MCP server runs in the background while the agent is open and shuts down when the agent closes.
* `lst_status` and `build_status` are the agent's way of asking "are the tools ready yet?" Use them when results look incomplete.

---

## Exercise 5-2: Use semantic tools that grep can't replicate

### Goals for this exercise

* See the difference between text search and semantic search
* Use `find_types`, `find_methods`, `find_annotations`, and `find_implementations` from your agent

### Steps

Pick a Spring repository in your workspace (Spring PetClinic works well) and open your agent there.

#### Step 1: Find every reference to a type

Ask your agent:

> Use `find_types` to list every reference to `org.springframework.web.bind.annotation.RestController` in this repository. Group by file.

`find_types` finds imports, field types, parameters, return types, casts, generics, and annotation usages — the same things an IDE finds when you do a "find usages" on a class. Grep can't do this because it can't tell `RestController` (the annotation) from `RestController` (a hypothetical local class with the same name).

#### Step 2: Find method invocations by AspectJ pattern

> Use `find_methods` to list every call to `org.springframework.kafka.core.KafkaTemplate send(..)`. Show me the file and line for each call.

`find_methods` resolves the type at every call site, so it finds `kafkaTemplate.send(...)` even when `kafkaTemplate` is declared in a parent class or injected via Spring. Grep would miss the indirect cases.

#### Step 3: Find annotation usages

> Use `find_annotations` to find every place `@Transactional` is used in this repo, including on classes, methods, and parameters.

#### Step 4: Find all implementations of an interface

> Use `find_implementations` to list every class that implements `org.springframework.data.repository.Repository`, including indirect implementations through subinterfaces.

This walks the full type hierarchy, which is exactly the kind of question Trigrep's `implements:` filter can only answer at one level. The MCP version goes deep.

### Takeaways

* Semantic tools answer questions about *types*, not *text*. Use them when you care about correctness.
* Each tool corresponds to a refactoring you'd do with an IDE; the MCP version works across the entire workspace at once.

---

## Exercise 5-3: Use codebase-wide refactoring tools

### Goals for this exercise

* See an MCP-driven rename or refactor in action
* Understand the difference between `change_type`, `change_method_name`, and `pattern_replace`

### Steps

#### Step 1: Pick a low-stakes target

Pick a class or method in one of the workspace repositories that has obvious renames (a typo, an outdated name, a method whose better name has been on a TODO for a while). For learning purposes, you can also undo the change at the end.

#### Step 2: Ask the agent to use `change_method_name`

> Use the `change_method_name` tool to rename `getOwners` to `findOwners` on `org.springframework.samples.petclinic.owner.OwnerRepository`. Then show me the diff for every file that changed.

`change_method_name` updates the declaration and **every call site** atomically, just like an IDE rename across the whole workspace. Compare that to a regex find-and-replace that would also touch comments, string literals, and unrelated methods of the same name.

#### Step 3 (optional): Try `pattern_replace` for a Refaster-style change

`pattern_replace` runs a Refaster template across the codebase. Provide a Java class with `@BeforeTemplate` and `@AfterTemplate` methods, and the agent applies it everywhere the pattern matches. This is the right tool when you have a mechanical pattern that's identical across many call sites (for example, replacing `Optional.ofNullable(x).orElse(y)` with `x != null ? x : y`).

See the [Refaster template documentation](https://docs.openrewrite.org/concepts-and-explanations/recipes#refaster-template-recipes) for how the templates are structured. Most agents can write the template for you if you describe the change in plain English.

#### Step 4: Revert if needed

If you used the changes only to learn the tool, you can revert with git:

```bash
cd <repo>
git restore .
```

### Takeaways

* MCP refactoring tools update **every reference** atomically. They are not text replacements.
* Use `change_type`/`change_method_name` for clean renames. Use `pattern_replace` (Refaster) when the change is structural and repeated across call sites.
* For more complex changes, run an existing recipe (`run_recipe`) instead — see Exercise 5-4.

---

## Exercise 5-4: Run a recipe through the MCP server

### Goals for this exercise

* See the agent invoke `search_recipes`, `learn_recipe`, and `run_recipe`
* Connect what you've learned in earlier modules: the agent uses Prethink + Trigrep + recipes to drive a fix

### Steps

#### Step 1: Ask the agent to find a relevant recipe

> Use `search_recipes` to find an OpenRewrite recipe that upgrades dependencies with known vulnerabilities. Show me the top 3 results.

The `search_recipes` tool returns a paginated list of matching recipes ranked by relevance. The agent picks one and uses `learn_recipe` to retrieve its description, options, and data table schemas before deciding to run it.

#### Step 2: Run the recipe

> Use `run_recipe` to run `org.openrewrite.java.dependencies.DependencyVulnerabilityCheck` on this repository. After it finishes, query the resulting data table with `query_datatable` and summarize the worst 5 vulnerabilities.

The `query_datatable` tool runs SQL against the recipe's output data tables (DuckDB under the hood). This is how the agent goes from raw recipe output to a structured answer.

:::tip
This is the same workflow `analyze-impact` skill walks the agent through, but driven by you. If you want the skill to do the orchestration, invoke it explicitly: `/moderne:analyze-impact` (Claude Code) or the equivalent in your agent.
:::

### Takeaways

* The MCP server lets the agent run real recipes, not just search and read.
* `query_datatable` closes the loop: the agent can turn raw recipe output into prioritized human-readable results.

---

## Exercise 5-5 (optional): Set up the tool browser

### Goals for this exercise

* See the live MCP build status in a browser dashboard
* Test individual tools without needing an agent

### Steps

Enable the optional tool browser:

```bash
mod config features agent-tools tray --enabled
```

The next time an agent starts the MCP server, a system tray icon appears. Click it and choose **Tool Browser...** to open the dashboard. You'll see project cards with build status, file counts, and tool call metrics. From the dashboard you can also invoke individual tools directly, which is useful for debugging.

See [Tool browser](../../user-documentation/agent-tools/mcp/tool-browser.md) for the full reference.

### Takeaways

* The tool browser is the easiest way to see what's happening inside the MCP server while an agent is connected.
* Invoke tools manually from the dashboard when you want to test a tool's behavior without dragging an agent into it.

---

## Wrap-up

You now have a working setup that combines:

* A local workspace of repositories with built LSTs
* The Moderne CLI installed and authenticated
* Skills installed for your AI coding agent
* The Moderne MCP server registered and exposing semantic tools
* Prethink-generated context (`.moderne/context/`) describing each repository's architecture and code quality
* A trigram search index for sub-second whole-workspace search

Point all of this at your own repositories and you'll get the same setup with your code. The same `mod git sync` / `mod build` / `mod run` / `mod postbuild search index` commands work whether you're targeting public Spring projects or your private monorepo.

## Further reading

* [Skills for AI coding agents](../../user-documentation/agent-tools/skills.md)
* [Moderne MCP server overview](../../user-documentation/agent-tools/mcp/overview.md)
* [Moderne Prethink recipes](../../user-documentation/agent-tools/prethink.md)
* [Moderne Trigrep](../../user-documentation/agent-tools/trigrep.md)
* [AI-assisted recipe authoring workshop](../ai-recipes/workshop-overview.md) for using the same skills to build new recipes
