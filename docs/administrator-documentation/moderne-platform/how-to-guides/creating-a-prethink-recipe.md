---
sidebar_label: Creating a Prethink recipe
description: How to create and customize a Prethink recipe for your organization.
---

# Creating a Prethink recipe

This guide walks you through how to create a custom Prethink recipe and deploy it to your tenant. By the end, you should be ready to generate Prethink context for your organization's repositories.

For background on what Prethink is and the available recipes, please see our [Prethink recipes documentation](../../../user-documentation/recipes/prethink.md).

## Prerequisites

This guide assumes that you have:

* A basic understanding of what [declarative YAML recipes](https://docs.openrewrite.org/reference/yaml-format-reference) look like and how to work with them
* Access to the Moderne Platform or CLI

## Creating and deploying a Prethink recipe

### Step 1: Create a new recipe repository

Create a new recipe repository using either the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) or your own internal recipe starter template. This repository is where you'll create all of the Prethink recipes you'd like to use.

### Step 2: Add the `rewrite-prethink` dependency

Once you've created your recipe repository, update your `build.gradle` or `pom.xml` file to include a dependency on the Prethink modules.

For pre-configured discovery of common frameworks (recommended for most users):

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

We've provided starter recipes that you can copy to your own repository to get started. You can also create your own. Check out the [recipe examples](#prethink-recipe-examples) below for templates you can customize.

Any recipe that generates context for AI agents should:

* Run architectural discovery recipes to identify service endpoints, database connections, external calls, and messaging patterns
* Export discovered information as structured data tables
* Optionally generate a CALM architecture diagram
* Update agent configuration files (like `CLAUDE.md` or `.cursorrules`)

### Step 4: Deploy the recipe artifact

Once you're satisfied with your recipe(s), [deploy them to your tenant](./importing-external-recipes.md).

## Prethink recipe examples

### Complete Prethink configuration

This example shows a complete Prethink recipe that runs all discovery phases and generates comprehensive context for AI agents:

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
