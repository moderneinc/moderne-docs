---
sidebar_label: Creating a Prethink recipe
description: How to create and customize a Prethink recipe for your organization.
---

# Creating a Prethink recipe

Moderne Prethink recipes generate structured context for AI coding agents by analyzing your codebase and extracting architectural information, dependencies, test coverage, and more. This approach delivers comprehensive, accurate context that AI agents can reason over directly.

In this guide, we'll walk you through how to create a Prethink recipe and deploy it to your tenant. By the end, you should be ready to generate Prethink context for your organization's repositories.

## Prerequisites

This guide assumes that you have:

* A basic understanding of what [declarative YAML recipes](https://docs.openrewrite.org/reference/yaml-format-reference) look like and how to work with them
* Access to the Moderne Platform or CLI

## Prethink recipe modules

Prethink is distributed as two complementary recipe modules. Choose the one that best fits your needs:

### `org.openrewrite.recipe:rewrite-prethink`

The open-source foundation that provides the building blocks for generating Prethink context:

* **ExportContext**: Exports data tables as CSV files to your repository
* **UpdateAgentConfig**: Updates AI agent configuration files with context references
* **UpdatePrethinkContext**: Orchestrates context generation from pre-populated data tables
* **CALM architecture generation**: Produces [CALM](https://calm.finos.org/)-formatted architecture diagrams

This module provides the infrastructure but expects you to supply your own recipes for discovering CALM entities and producing the context you want to save.

**Use this when you have custom frameworks, proprietary patterns, or want full control over what context is generated.**

If you only want to export data tables and descriptive text about them as Prethink context and not include any CALM-related entities, you may do that as well. The `GenerateCalmArchitecture` recipe will simply do nothing if no CALM entities are discovered by other recipes in the composite.

### `io.moderne.recipe:rewrite-prethink`

The batteries-included module that provides out-of-the-box discovery for common frameworks:

* **Service endpoint discovery**: Spring MVC, JAX-RS, Micronaut, Quarkus
* **Database connection discovery**: JPA, Spring Data, JDBC
* **External service call discovery**: RestTemplate, WebClient, Feign, Apache HttpClient
* **Messaging pattern discovery**: Kafka, RabbitMQ, JMS, Spring Cloud Stream
* **Security configuration discovery**: Spring Security, CORS, OAuth2
* **LLM integrations**: Code comprehension at the method and class level, test summary generation

**Use this module when you want ready-to-run recipes that work with standard Java frameworks without additional configuration.**

You can still use this module and add additional recipes to the recipe list on top of the provided ones if you want your customizations to be strictly additive.

## Creating and deploying a Prethink recipe

### Step 1: Create a new recipe repository

The first thing you need to do is create a new recipe repository using either the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) or your own internal recipe starter template. This repository is where you'll create all of the Prethink recipes you'd like to use.

### Step 2: Add the `rewrite-prethink` dependency

Once you've created your recipe repository, update your `build.gradle` or `pom.xml` file to include a dependency on one of the Prethink modules.

For batteries-included discovery of common frameworks (recommended for most users):

```groovy
dependencies {
    implementation("io.moderne.recipe:rewrite-prethink:latest.release")
}
```

For the open-source building blocks only (when you need custom discovery):

```groovy
dependencies {
    implementation("org.openrewrite.recipe:rewrite-prethink:latest.release")
}
```

The Moderne module (`io.moderne.recipe`) includes all recipes from the OpenRewrite module (`org.openrewrite.recipe`) plus the framework-specific discovery recipes and LLM integrations.

### Step 3: Create a declarative Prethink recipe

We've provided a starter recipe that you can copy to your own repository to get started. You can also create your own. Check out the [understanding Prethink recipes section](#understanding-prethink-recipes) below for more information.

Any recipe that generates context for AI agents should:

* Run architectural discovery recipes to identify service endpoints, database connections, external calls, and messaging patterns
* Export discovered information as structured data tables
* Optionally generate a CALM architecture diagram
* Update agent configuration files (like `CLAUDE.md` or `.cursorrules`)

### Step 4: Deploy the recipe artifact

Once you're satisfied with your recipe(s), you will need to [deploy them to your tenant](./importing-external-recipes.md).

## Understanding Prethink recipes

To help you get a better understanding of how Prethink recipes work, let's walk through the key components and how they fit together.

### Core recipes (`org.openrewrite.recipe:rewrite-prethink`)

These recipes are available in both modules and provide the foundation for context generation:

* **ExportContext**: Exports any data table to CSV files in `.moderne/context/`
* **UpdateAgentConfig**: Updates agent configuration files (CLAUDE.md, .cursorrules, etc.)
* **UpdatePrethinkContext**: Orchestrates context generation and CALM architecture creation

### Framework discovery recipes (`io.moderne.recipe:rewrite-prethink`)

These recipes are only available in the Moderne module and discover architectural elements in common frameworks:

* **FindServiceEndpoints**: Detects REST controllers across frameworks (Spring MVC, JAX-RS, Micronaut, Quarkus)
* **FindDatabaseConnections**: Discovers JPA entities, Spring Data repositories, and JDBC templates
* **FindExternalServiceCalls**: Locates RestTemplate, WebClient, Feign clients, and Apache HttpClient usage
* **FindMessagingConnections**: Identifies Kafka, RabbitMQ, JMS, and Spring Cloud Stream patterns
* **FindSecurityConfiguration**: Detects Spring Security, CORS, and OAuth2 configurations
* **FindDeploymentArtifacts**: Finds Dockerfile, Kubernetes manifests, and docker-compose files

Each discovery recipe populates data tables that can be exported as CSV files for AI agents to consume.

### Context export

The `ExportContext` recipe exports data tables to CSV files in the `.moderne/context/` directory. It also generates markdown files describing each context type:

```yaml
- org.openrewrite.prethink.ExportContext:
    displayName: Service Endpoints
    shortDescription: REST and HTTP endpoints exposed by this service
    longDescription: >-
      Complete inventory of all service endpoints including HTTP methods,
      paths, and framework annotations.
    dataTables:
      - io.moderne.prethink.table.ServiceEndpoints
```

### CALM architecture generation

Prethink can generate a [CALM](https://calm.finos.org/) (Common Architecture Language Model) architecture diagram that captures nodes and relationships in your system. This JSON artifact can be visualized with CALM-compatible tools or consumed directly by AI agents.

```yaml
- io.moderne.prethink.calm.GenerateCalmArchitecture
```

### Agent configuration updates

The `UpdateAgentConfig` recipe updates coding agent configuration files to reference the generated Prethink context:

* `CLAUDE.md` for Claude Code
* `.cursorrules` for Cursor
* `.github/copilot-instructions.md` for GitHub Copilot

```yaml
- org.openrewrite.prethink.UpdateAgentConfig:
    targetConfigFile: CLAUDE.md
```

If no target file is specified, it will update all supported agent configuration files found in the repository.

The information added to the agent configuration is meant to help the agent discover context via progressive discovery. It includes references to the CSV files and CALM architecture generated by the Prethink recipe. The agent can then read and reason over this context when answering coding questions.

## Prethink recipe examples

### Complete Prethink configuration

This example shows a complete Prethink recipe that runs all discovery phases and generates context for AI agents:

```yaml
type: specs.openrewrite.org/v1beta/recipe
name: com.example.prethink.UpdatePrethinkContext
displayName: Update Prethink context
description: >-
  Generates comprehensive Prethink context for AI agents including
  service endpoints, dependencies, test coverage, and architecture.
recipeList:
  # Phase 1: Architectural Discovery
  - io.moderne.prethink.calm.FindProjectMetadata
  - io.moderne.prethink.calm.FindServiceEndpoints
  - io.moderne.prethink.calm.FindDatabaseConnections
  - io.moderne.prethink.calm.FindExternalServiceCalls
  - io.moderne.prethink.calm.FindMessagingConnections
  - io.moderne.prethink.calm.FindServerConfiguration
  - io.moderne.prethink.calm.FindSecurityConfiguration
  - io.moderne.prethink.calm.FindDeploymentArtifacts
  - io.moderne.prethink.calm.FindDataAssets

  # Phase 2: Test Coverage
  - io.moderne.prethink.FindTestCoverage

  # Phase 3: Context Generation
  - io.moderne.prethink.calm.GenerateCalmArchitecture
  - org.openrewrite.prethink.UpdateAgentConfig
```

### Minimal Prethink configuration

If you only need basic service endpoint discovery without AI summaries:

```yaml
type: specs.openrewrite.org/v1beta/recipe
name: com.example.prethink.MinimalPrethink
displayName: Minimal Prethink context
description: >-
  Generates basic Prethink context with service endpoints only.
recipeList:
  - io.moderne.prethink.calm.FindProjectMetadata
  - io.moderne.prethink.calm.FindServiceEndpoints
  - org.openrewrite.prethink.ExportContext:
      displayName: Service Endpoints
      shortDescription: REST and HTTP endpoints
      dataTables:
        - io.moderne.prethink.table.ServiceEndpoints
  - org.openrewrite.prethink.UpdateAgentConfig
```

### Prethink with AI summaries

To enable AI-generated summaries for test coverage and code comprehension, configure the LLM provider:

```yaml
type: specs.openrewrite.org/v1beta/recipe
name: com.example.prethink.PrethinkWithAI
displayName: Prethink context with AI summaries
description: >-
  Generates Prethink context with AI-enhanced test summaries.
recipeList:
  - io.moderne.prethink.calm.FindProjectMetadata
  - io.moderne.prethink.calm.FindServiceEndpoints
  - io.moderne.prethink.FindTestCoverage:
      provider: poolside
  - io.moderne.prethink.calm.GenerateCalmArchitecture
  - org.openrewrite.prethink.UpdateAgentConfig
```

:::tip
Additional recipes do not have to be in the same file or even the same module. You can compose Prethink recipes by referencing recipes from other modules.
:::

### Custom discovery with OpenRewrite module

When using the OpenRewrite module (`org.openrewrite.recipe:rewrite-prethink`), you provide your own discovery recipes. This example shows how to use the core infrastructure with a custom data table:

```yaml
type: specs.openrewrite.org/v1beta/recipe
name: com.example.prethink.CustomPrethink
displayName: Custom Prethink context
description: >-
  Generates Prethink context using custom discovery recipes.
recipeList:
  # Your custom discovery recipe that populates a data table
  - com.example.discovery.FindCustomEndpoints

  # Export the custom data table to CSV
  - org.openrewrite.prethink.ExportContext:
      displayName: Custom Endpoints
      shortDescription: Custom framework endpoints
      longDescription: >-
        Endpoints discovered from our internal framework.
      dataTables:
        - com.example.table.CustomEndpoints

  # Update agent configuration files
  - org.openrewrite.prethink.UpdateAgentConfig
```

Your custom discovery recipe would implement the logic to find architectural elements specific to your frameworks and populate a data table. See the [OpenRewrite recipe development documentation](https://docs.openrewrite.org/authoring-recipes) for guidance on creating custom recipes.

## Output structure

After running a Prethink recipe, you'll find generated files in the `.moderne/context/` directory:

```
.moderne/context/
├── service-endpoints.csv
├── service-endpoints.md
├── database-connections.csv
├── database-connections.md
├── external-service-calls.csv
├── external-service-calls.md
├── test-mapping.csv
├── test-mapping.md
└── calm-architecture.json
```

The CSV files contain structured data that AI agents can parse directly. The markdown files provide human and agent-readable descriptions of each context type. The CALM architecture JSON can be visualized with CALM-compatible tools.

## Data tables

Prethink recipes populate several data tables that capture different aspects of your codebase:

| Data table              | Description                                                      |
|-------------------------|------------------------------------------------------------------|
| `ServiceEndpoints`      | REST/HTTP endpoints with HTTP methods, paths, and framework info |
| `DatabaseConnections`   | JPA entities, repositories, and JDBC connections                 |
| `ExternalServiceCalls`  | Outbound HTTP calls to external services                         |
| `MessagingConnections`  | Kafka, RabbitMQ, JMS, and other messaging patterns               |
| `TestMapping`           | Mapping of test methods to implementation methods                |
| `SecurityConfiguration` | Spring Security, CORS, and OAuth2 configurations                 |
| `DeploymentArtifacts`   | Dockerfile, Kubernetes, and docker-compose files                 |
| `ProjectMetadata`       | Artifact ID, group ID, and project name                          |
