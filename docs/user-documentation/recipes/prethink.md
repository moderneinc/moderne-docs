---
sidebar_label: Prethink
description: Generate structured context for AI coding agents with Prethink recipes.
---

# Prethink recipes

Prethink recipes generate structured context that gives AI coding agents a clear, accurate understanding of your entire codebase. Instead of forcing AI agents to infer your architecture from raw code, Prethink provides pre-resolved knowledge about service endpoints, dependencies, test coverage, and more.

## Why use Prethink

AI coding agents like Claude Code, Cursor, and GitHub Copilot struggle with enterprise codebases due to:

* **Token limits** that prevent them from seeing your entire codebase
* **Repetitive context building** that wastes tokens re-describing code structure on every interaction
* **Missing semantic context** that leads to inference and hallucination

These aren't faults of the models themselves - they're data problems. When working with vast enterprise codebases, AI models don't have the semantic context needed to be comprehensive, accurate, and efficient.

Prethink solves these problems by generating verified, structured context that AI agents can reason over directly. This means faster responses, lower costs, and more accurate results.

## What Prethink provides

Moderne Prethink delivers pre-resolved, verified knowledge that AI agents can reason over directly:

* **Architectural patterns**: Service endpoints, database connections, external service calls, and messaging patterns
* **Resolved dependency graphs**: Complete dependency trees, including transitive dependencies
* **Known vulnerabilities**: Security issues identified across your repositories
* **Declared migration targets**: Your organization's upgrade and modernization goals
* **Deterministic recipes**: Structured transformations that can be applied reliably

With Prethink:

* Code structure is documented, not guessed
* Relationships between services are already mapped
* Your goals and constraints are part of the context
* AI reasons over facts instead of reconstructing them

## How Prethink works

Prethink is delivered as a set of OpenRewrite recipes that generate multi-repo, trusted context for AI agents. When you run Prethink recipes against your codebase, they produce structured outputs that capture context, including:

* **Code data tables**: Deep insights only discoverable using Moderne's Lossless Semantic Tree (LST) code model
* **Dependency inventory**: Complete picture of libraries including transitive dependencies
* **Knowledge graph** (optional): System-level map of how components, dependencies, and behaviors connect
* **CALM-formatted artifacts**: Architecture diagrams with nodes and relationships that can be visualized with [CALM](https://calm.finos.org/)-compatible tools

These outputs can be continuously updated as your codebase evolves by re-running Prethink recipes. This ensures your AI agents always have current, accurate context.

## Recipe modules

Prethink is distributed as two complementary modules:

| Module                                    | Description                                                                                                                                           |
|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `io.moderne.recipe:rewrite-prethink`      | A pre-configured module with out-of-the-box discovery for Spring MVC, JAX-RS, JPA, Kafka, and more. Includes LLM integrations for code comprehension. |
| `org.openrewrite.recipe:rewrite-prethink` | Open-source building blocks for custom Prethink recipes. Use this when you have custom frameworks or want full control over context generation.       |

### What the Moderne module discovers

The `io.moderne.recipe:rewrite-prethink` module provides out-of-the-box discovery for common frameworks:

* **Service endpoint discovery**: Spring MVC, JAX-RS, Micronaut, Quarkus
* **Database connection discovery**: JPA, Spring Data, JDBC
* **External service call discovery**: RestTemplate, WebClient, Feign, Apache HttpClient
* **Messaging pattern discovery**: Kafka, RabbitMQ, JMS, Spring Cloud Stream
* **Security configuration discovery**: Spring Security, CORS, OAuth2
* **LLM integrations**: Code comprehension at the method and class level, test summary generation

### What the OpenRewrite module provides

The `org.openrewrite.recipe:rewrite-prethink` module provides the building blocks for generating Prethink context:

* **ExportContext**: Exports data tables as CSV files to your repository
* **UpdateAgentConfig**: Updates AI agent configuration files with context references
* **UpdatePrethinkContext**: Orchestrates context generation from pre-populated data tables
* **CALM architecture generation**: Produces CALM-formatted architecture diagrams

This module provides the infrastructure but expects you to supply your own recipes for discovering CALM entities and producing the context you want to save.

## Available recipes

### Update Prethink context (with AI)

Generates Moderne Prethink context files with AI-generated code comprehension, test coverage mapping, dependency inventory, and FINOS CALM architecture diagrams. Maps tests to implementation methods and optionally generates AI summaries of what each test verifies when an LLM provider is configured.

* **Recipe:** [`io.moderne.prethink.UpdatePrethinkContextStarter`](https://app.moderne.io/recipes/io.moderne.prethink.UpdatePrethinkContextStarter)
* **Module:** `io.moderne.recipe:rewrite-prethink`

#### Options

| Option              | Description                           | Example                               |
|---------------------|---------------------------------------|---------------------------------------|
| `provider`          | LLM provider for generating summaries | `openai`, `gemini`, `poolside`        |
| `apiKey`            | API key for the LLM provider          | `ps-...`                              |
| `model`             | Model name to use                     | `Malibu-v2.20251021`                  |
| `baseUrl`           | Custom base URL for the provider      | `https://divers.poolsi.de/openai/v1/` |
| `requestsPerMinute` | Rate limit for LLM requests           | `60`                                  |

### Update Prethink context (no AI)

Generates Moderne Prethink context files with architectural discovery, test coverage mapping, dependency inventory, and FINOS CALM architecture diagrams. This recipe does not require an LLM provider - use the [Update Prethink context (with AI) recipe](#update-prethink-context-with-ai) if you want AI-generated code comprehension and test summaries.

* **Recipe:** [`io.moderne.prethink.UpdatePrethinkContextNoAiStarter`](https://app.moderne.io/recipes/io.moderne.prethink.UpdatePrethinkContextNoAiStarter)
* **Module:** `io.moderne.recipe:rewrite-prethink`

This recipe includes the same architectural discovery, test coverage mapping, dependency inventory, and CALM architecture generation as the AI version, but skips AI-generated code comprehension. Instead, it estimates token usage for methods so you can evaluate AI costs before enabling comprehension.

This recipe has no configurable options.

### Update Prethink context (base recipe)

Generates a FINOS CALM architecture diagram and updates agent configuration files. This recipe expects CALM-related data tables (ServiceEndpoints, DatabaseConnections, ExternalServiceCalls, MessagingConnections, etc.) to be populated by other recipes in a composite.

* **Recipe:** [`org.openrewrite.prethink.UpdatePrethinkContext`](https://app.moderne.io/recipes/org.openrewrite.prethink.UpdatePrethinkContext)
* **Module:** `org.openrewrite.recipe:rewrite-prethink`

Use this recipe when building custom Prethink configurations with your own discovery recipes. This recipe has no configurable options.

### Supporting recipes

The OpenRewrite module also provides these building blocks:

| Recipe                                       | Description                                                                                                                        |
|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| `org.openrewrite.prethink.ExportContext`     | Exports data tables to CSV files in `.moderne/context/` with markdown documentation describing the schema.                         |
| `org.openrewrite.prethink.UpdateAgentConfig` | Updates agent configuration files (`CLAUDE.md`, `.cursorrules`, `.github/copilot-instructions.md`) to reference generated context. |

## What Prethink generates

After running a Prethink recipe, you'll find generated files in the `.moderne/context/` directory (there will be a `.moderne` directory created inside of each repository):

```
.moderne/context/
├── service-endpoints.csv
├── service-endpoints.md
├── database-connections.csv
├── database-connections.md
├── test-mapping.csv
├── test-mapping.md
├── dependencies.csv
├── dependencies.md
└── calm-architecture.json
```

* **CSV files** contain structured data that AI agents can parse directly
* **Markdown files** describe the context and schema for human and agent readability
* **CALM architecture JSON** can be visualized with [CALM](https://calm.finos.org/)-compatible tools

### Context export

The context export component saves structured data tables as files in your repository. This allows any AI agent to access resolved knowledge about your codebase without needing to parse and understand the code itself.

Each exported context file is accompanied by a markdown file that describes what the data contains and how to interpret it. This helps AI agents understand the schema and meaning of the data without additional prompting.

<figure>
  ![](./assets/prethink-context-markdown.png)
  <figcaption>_A markdown file describing the CALM architecture context_</figcaption>
</figure>

### Code comprehension

The optional code comprehension component uses Moderne's LST analysis combined with your bring-your-own LLM to build a knowledge graph. This graph captures how software components, dependencies, and behaviors relate at a system level.

### Architecture visualization

Prethink can export architecture information in CALM format, providing nodes and relationships that describe your system's structure. These can be visualized with CALM-compatible tools or consumed directly by AI agents for architectural reasoning.

<figure>
  ![](./assets/prethink-calm-architecture.png)
  <figcaption>_A generated CALM architecture diagram showing services and their relationships_</figcaption>
</figure>

## How agents discover Prethink context

When Prethink runs, it updates the agent configuration files in your repository (such as `CLAUDE.md`, `.cursorrules`, or `.github/copilot-instructions.md`) to point AI agents to the generated context. This enables progressive discovery where agents first learn about the available context and then read the relevant files as needed.

<figure>
  ![](./assets/prethink-claude-md.png)
  <figcaption>_An updated CLAUDE.md file pointing agents to Prethink context_</figcaption>
</figure>

The agent configuration includes a table of available context types with descriptions and file paths, along with instructions on how to use the context effectively. This means agents can immediately start reasoning over pre-resolved facts about your codebase.

## Next steps

* [Generating Prethink context with the CLI](../moderne-cli/how-to-guides/cli-prethink.md) - Run Prethink recipes locally
* [Creating a Prethink recipe](../../administrator-documentation/moderne-platform/how-to-guides/creating-a-prethink-recipe.md) - Build custom Prethink configurations for your organization
