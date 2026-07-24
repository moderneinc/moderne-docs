---
sidebar_label: "Module 2: Install agent tools"
description: Install Moderne skills and the MCP server with mod config agent-tools install, scope to specific agents, and verify what your AI agent now exposes.
draft: true
---

# Module 2: Install agent tools

In this module, you'll install the Moderne skills and the Moderne MCP server into your AI coding agent. You'll learn how to install everything at once, how to scope to a single agent like GitHub Copilot, and how to confirm the new capabilities are actually available.

## Exercise 2-1: Install agent tools for every detected agent

### Goals for this exercise

* Run `mod config agent-tools install` and understand what it changes
* Confirm the new skills appear in your agent
* Know how to roll back with `uninstall`

### Key concepts

The Moderne CLI bundles two complementary kinds of agent tooling:

| Component       | What it provides                                                                                              |
|-----------------|---------------------------------------------------------------------------------------------------------------|
| **Skills**      | Procedural instructions that teach an agent how to create recipes, run them, and analyze code                 |
| **MCP server**  | A live process that exposes tools for semantic search, navigation, refactoring, and recipe execution          |

The install command auto-detects which coding agents are present on your machine and installs both components for each one. See [Skills for AI coding agents](../../user-documentation/agent-tools/skills.md) and the [MCP overview](../../user-documentation/agent-tools/mcp/overview.md) for full reference docs.

### Steps

#### Step 1: Install agent tools for every detected agent

```bash
mod config agent-tools install
```

The CLI scans for installed coding agents (Claude Code, Cursor, GitHub Copilot, Windsurf, Sourcegraph Amp, OpenAI Codex, opencode), then installs skills and registers the MCP server for each one it finds. If no agents are detected, the CLI prints a message listing the supported agents and where it looked.

To remove everything later, run:

```bash
mod config agent-tools uninstall
```

#### Step 2: See where the skills landed

The skills are installed as plain markdown files. Their exact location depends on the agent. A few examples:

| Agent          | Install location                                                  |
|----------------|-------------------------------------------------------------------|
| Claude Code    | `~/.claude/marketplaces/moderne/moderne/skills/<skill>/SKILL.md`  |
| Cursor         | `.cursor/rules/moderne-<skill>.mdc` (per project)                 |
| GitHub Copilot | `.github/instructions/moderne-<skill>.instructions.md` (per project) |
| Windsurf       | `~/.codeium/windsurf/skills/<skill>/SKILL.md`                     |

For the full list see [Supported agents](../../user-documentation/agent-tools/skills.md#supported-agents).

:::note
Cursor and GitHub Copilot install skills *per project* (into `.cursor/rules/` or `.github/instructions/`) rather than globally. If you want those skills available in another project, run the install command from that project's root too.
:::

#### Step 3: Verify the skills are available

How you check depends on your agent. Restart the agent first if it was already running — most agents pick up new skills/MCP servers at startup.

**Claude Code** - Open Claude Code in your workshop directory and type `/`. You should see entries like `/moderne:create-recipe`, `/moderne:create-organization`, and `/moderne:edit-code`.

**Cursor / GitHub Copilot** - Skills are loaded automatically as rules/instructions. Open the project in your editor and check that `.cursor/rules/moderne-*.mdc` or `.github/instructions/moderne-*.instructions.md` exist.

**Windsurf, Amp, Codex** - Skills trigger automatically from what you ask for. Describe a task the skills cover (for example, "write me an OpenRewrite recipe that renames a method") and the agent loads the matching skill. See [Invoking skills](../../user-documentation/agent-tools/skills.md#invoking-skills).

### Takeaways

* A single command (`mod config agent-tools install`) wires up every detected agent.
* Skills are just markdown. You can `cat` them to see exactly what your agent has been taught.
* The CLI updates these files when you upgrade. Re-run the install command after each CLI update.

---

## Exercise 2-2: Scope the install to a single agent

### Goals for this exercise

* Use a per-agent install command to scope to one agent
* Recognize when per-agent installation is the right choice

### Steps

#### Step 1: Install for a single agent

If you only want agent tools for one specific agent, use a per-agent subcommand. For example:

```bash
mod config agent-tools copilot install
```

Other supported subcommands are `claude`, `cursor`, `windsurf`, `amp`, `codex`, and `opencode`. Each one installs both skills and the MCP server for that agent only. If the agent isn't detected on your system, the command prints a message and exits without making changes.

This is the right call when:

* You only use one agent and don't want files written for the others
* Cursor or Copilot is the agent you care about and you're inside the project where you want those instructions installed
* You're scripting the install in CI/CD for a specific agent

#### Step 2 (optional): Install only skills, not the MCP server

If you want the procedural guidance but not the live MCP server (for example, on a machine where you can't run a long-lived process), install just the skills:

```bash
mod config agent-tools skills install
```

This installs skills for every detected agent but leaves the MCP server unconfigured. You can pair this with [Module 4](./module-4-trigrep.md) (Trigrep) to get fast search via the CLI without needing the MCP server.

### Takeaways

* Per-agent install is useful for project-scoped agents like Cursor and Copilot, where the skills get written into the working directory.
* `skills install` is a lighter-weight option when you don't want the MCP server.

---

## Exercise 2-3: Inspect a skill to understand what your agent now knows

### Goals for this exercise

* Open one of the installed skills and read its content
* See for yourself how skills shape the agent's behavior

### Steps

#### Step 1: Read a skill end-to-end

Open one of the skill files using the path that matches your agent. For Claude Code on macOS:

```bash
cat ~/.claude/marketplaces/moderne/moderne/skills/create-recipe/SKILL.md
```

For Cursor, look at `.cursor/rules/moderne-create-recipe.mdc` in the current project. For Copilot, look at `.github/instructions/moderne-create-recipe.instructions.md`.

The file is plain markdown describing the recipe development workflow: when to choose declarative YAML vs Refaster vs imperative recipes, how to scaffold a project, how to write tests with `RewriteTest`, and how to handle imports correctly. This is what the agent reads before responding.

The skills you now have available differ in what they need. These three work with the CLI alone:

| Skill                     | What it does                                                                              |
|---------------------------|-------------------------------------------------------------------------------------------|
| **create-recipe**         | Guides the agent through recipe type selection, scaffolding, and writing tests            |
| **create-organization**   | Helps the agent assemble a curated set of repositories to test recipes against            |
| **prethink**              | Gives the agent pre-resolved architecture and risk context for a repository               |

The rest teach the agent when to reach for a [Moderne MCP server tool](../../user-documentation/agent-tools/mcp/overview.md#available-tools), and need that server registered:

| Skill                                        | What it does                                                          |
|----------------------------------------------|------------------------------------------------------------------------|
| **edit-code**                                | Applies a recipe across many files instead of hand-editing each one     |
| **analyze-code**, **search-code**, **find-symbols** | Repo-wide analysis and type-aware search                        |
| **change-symbols**, **pattern-replace**      | Atomic renames and one-shot structural rewrites                        |
| **inspect-status**, **query-datatable**      | Readiness checks and SQL over recipe run data                          |

See [Available skills](../../user-documentation/agent-tools/skills.md#available-skills) for the longer descriptions.

#### Step 2 (optional): Try a skill with a throwaway prompt

Skills trigger from what you ask for. In your agent, give it a simple, throwaway request:

```
I want to create an OpenRewrite recipe that renames the method getItems() to items() on com.example.ShoppingCart.
```

The agent should load the `create-recipe` skill on its own. In Claude Code you can force it with `/moderne:create-recipe` if it doesn't.

Notice how the skill shapes the agent's approach: it picks a recipe type *before* writing code, scaffolds a project layout, and writes tests with the `RewriteTest` framework. Without the skill, you'd typically get a single YAML or Java file with no tests.

You don't need to keep the output. Stop the agent once you've seen it work.

### Takeaways

* Skills are just procedural markdown your agent reads before answering. There's no magic.
* Reading a skill once is the fastest way to understand what behaviors your agent will fall back to.
* When the agent goes off the rails, you can compare its actions to the skill and see where it deviated.

## Next up

In [Module 3](./module-3-prethink.md), you'll run Prethink against the workspace you set up in Module 1 and see what kind of pre-resolved context gets generated for your agent.
