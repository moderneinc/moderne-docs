---
sidebar_label: Coding against Moderne API
description: How to access the Moderne API using a Spring Boot App
---

# Moderne API with Spring Boot

This guide demonstrates how to use the Moderne API in a Spring Boot application, covering both GraphQL (using Netflix DGS) and REST endpoints (using Spring's HttpServiceProxyFactory).

## Table of Contents

- [GraphQL Client with DgsGraphQlClient](#graphql-client-with-dgsgraphqlclient)
    - [1. Download the GraphQL Schema](#1-automated-download-of-the-latest-moderne-graphql-contract)
    - [2. Generate Sources from GraphQL Contract](#2-generate-sources-from-graphql-contract)
    - [3. Create Spring Beans for GraphQL](#3-create-spring-beans-for-graphql)
    - [4. Using the GraphQL Client](#4-using-the-graphql-client)
- [REST Client with HttpServiceProxyFactory](#rest-client-with-spring-http-interface)
    - [1. Define the REST Interface](#1-define-the-rest-interface)
    - [2. Configure the REST Client Bean](#2-configure-the-rest-client-bean)
    - [3. Using the REST Client](#3-using-the-rest-client)

---

## GraphQL Client with [DgsGraphQlClient](https://docs.spring.io/spring-graphql/reference/client.html#client.dgsgraphqlclient)

Spring Boot provides excellent support for GraphQL clients using the [Netflix DGS](https://netflix.github.io/dgs/) (Domain Graph Service) framework. This approach provides type-safe GraphQL queries with code generation.

### 1. Automated download of the latest Moderne GraphQL contract

To work with GraphQL, you first need the schema definition. This guide will help you set up a project with an automated Gradle task to download the schema from Apollo's GraphQL registry.

Create the file `buildSrc/src/main/kotlin/DownloadGraphQLSchema.kt`:

```kotlin
import org.gradle.api.DefaultTask
import org.gradle.api.GradleException
import org.gradle.api.tasks.TaskAction
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import groovy.json.JsonSlurper

abstract class DownloadGraphQLSchema : DefaultTask() {

    init {
        group = "Moderne"
        description = "Downloads the GraphQL schema and saves it to src/main/resources/graphql-client/moderne.graphql"
    }

    @TaskAction
    fun run() {
        val outputFile = project.layout.projectDirectory.file("src/main/resources/graphql-client/moderne.graphql").asFile
        val client = HttpClient.newHttpClient()
        val query = """
            query GetSchema(${'$'}serviceId: ID!, ${'$'}schemaTag: String!) {
              service(id: ${'$'}serviceId) {
                schema(tag: ${'$'}schemaTag) {
                  document
                }
              }
            }
        """.trimIndent()
        val requestBody = """
            {
              "query": ${query.quote()},
              "variables": {
                "serviceId": "Moderne-SaaS-API",
                "schemaTag": "current"
              }
            }
        """.trimIndent()
        val request = HttpRequest.newBuilder()
            .uri(URI("https://graphql.api.apollographql.com/api/graphql"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build()
        val response = client.send(request, HttpResponse.BodyHandlers.ofString())

        if (response.statusCode() != 200) {
            throw GradleException("Failed to fetch schema: ${response.statusCode()} ${response.body()}")
        }

        val json = JsonSlurper().parseText(response.body()) as Map<*, *>
        val service = (json["data"] as Map<*, *>)["service"] as Map<*, *>
        val schema = (service["schema"] as Map<*, *>)["document"]

        outputFile.parentFile.mkdirs()
        outputFile.writeText(schema.toString())

        println("✅ GraphQL schema saved to: $outputFile")
    }

    private fun String.quote(): String =
        "\"" + this.replace("\\", "\\\\")
            .replace("\"", "\\\"")
            .replace("\n", "\\n") + "\""
}
```

Create `buildSrc/build.gradle.kts`:

```kotlin
plugins {
    `kotlin-dsl`
}

repositories {
    gradlePluginPortal()
    mavenCentral()
}
```

This task will:
- Query [Apollo's GraphQL registry](https://studio.apollographql.com/public/Moderne-SaaS-API/variant/current/schema/reference/objects/subscription) for the [Moderne API schema](https://docs.moderne.io/administrator-documentation/moderne-platform/references)
- Save the schema to `src/main/resources/graphql-client/moderne.graphql`

---

### 2. Generate Sources from GraphQL Contract

Configure the Netflix DGS Codegen plugin to generate type-safe Java classes from the GraphQL schema.

In your project `build.gradle.kts` (so not the `buildSrc`!):

```kotlin
plugins {
    java
    id("org.springframework.boot") version "..."
    id("io.spring.dependency-management") version "..."
    id("com.netflix.dgs.codegen") version "7.0.3" // ADD THIS PLUGIN
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-graphql") // ADD at least these dependencies
    implementation("org.springframework.boot:spring-boot-starter-web") // ADD at least these dependencies
}
```

#### Configure Code Generation

Add the code generation configuration:

```kotlin
tasks.generateJava {
    schemaPaths.add("${projectDir}/src/main/resources/graphql-client") // we will create for the downloaded contract
    packageName = "io.moderne.configuration.codegen" // choose a package for the generated sources
    generateClient = true // we will create the client files

    // Map API GraphQL scalar types to Java types
    typeMapping["Markdown"] = "java.lang.String"
    typeMapping["Base64"] = "java.lang.String"
    typeMapping["Duration"] = "java.time.Duration"
    typeMapping["JSON"] = "java.util.Map<Object, Object>"
    typeMapping["Path"] = "java.nio.file.Path"
}

// Register the schema download task
tasks.register<DownloadGraphQLSchema>("downloadGraphQLSchema")

// Ensure schema is downloaded before code generation
tasks.named("generateJava") {
    dependsOn("downloadGraphQLSchema")
}
```

#### Build the Project

Run the following to download the schema and generate code:

```bash
./gradlew generateJava
```

---

### 3. Create Spring Beans for GraphQL

Configure a `DgsGraphQlClient` bean to enable GraphQL queries.

Create a configuration class:

```java
package io.moderne.configuration.infrastructure.adapters;

import com.netflix.graphql.dgs.client.DgsGraphQlClient;
import io.moderne.configuration.infrastructure.ModerneConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.graphql.client.HttpSyncGraphQlClient;
import org.springframework.web.client.RestClient;

@Configuration
public class ModerneApiConfiguration {

    @Bean
    DgsGraphQlClient moderneGraphQLApi(ModerneConfigurationProperties config) {
        HttpSyncGraphQlClient graphQlClient = HttpSyncGraphQlClient
            .builder(RestClient.builder().baseUrl(config.api().getGraphqlEndpoint()))
            .headers(headers -> headers.setBearerAuth(config.api().token()))
            .build();

        return DgsGraphQlClient.create(graphQlClient);
    }
}
```

#### Configuration Properties

Define type-safe configuration properties:

```java
package io.moderne.configuration.infrastructure;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "moderne")
public record ModerneConfigurationProperties(Api api) {

    public record Api(String tenant, String token, int pageSize) {
        public String getGraphqlEndpoint() {
            return "https://api." + tenant + ".moderne.io/graphql";
        }

        public String getApiEndpoint() {
            return "https://api." + tenant + ".moderne.io";
        }
    }
}
```

#### Application Configuration

In `application.yaml`:

```yaml
spring:
  application:
    name: moderne-configuration-service

moderne:
  api:
    tenant: ${MODERNE_TENANT:app} # will default to app.moderne.io
    token: ${MODERNE_BEARER_TOKEN:} # Startup will fail if this variable is not present.
    page-size: 100
```

#### Enable Configuration Properties

In your main application class:

```java
@SpringBootApplication
@ConfigurationPropertiesScan //Enable the auto creation of ConfigurationProperties beans
public class ModerneConfigurationServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(ModerneConfigurationServiceApplication.class, args);
    }
}
```

---

### 4. Using the GraphQL Client

Now you can inject and use the `DgsGraphQlClient` in your services. This example demonstrates executing recipes via GraphQL mutations.

#### Example Service: Recipe Execution

```java
package io.moderne.configuration.repositories.service;

import org.springframework.graphql.client.DgsGraphQlClient;
import io.moderne.configuration.codegen.client.RunRecipeGraphQLQuery;
import io.moderne.configuration.codegen.client.RunRecipeProjectionRoot;
import io.moderne.configuration.codegen.types.OptionInput;
import io.moderne.configuration.codegen.types.RecipeInput;
import io.moderne.configuration.codegen.types.RecipeRun;
import io.moderne.configuration.codegen.types.RecipeRunInput;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Simple example service demonstrating how to execute recipes using the Moderne GraphQL API.
 * This provides a straightforward example of using DgsGraphQlClient for mutations.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class RecipeExecutionService {

    private final DgsGraphQlClient dgsClient;

    /**
     * Executes a recipe on the specified organization.
     *
     * @param recipeId the fully qualified recipe ID (e.g., "org.openrewrite.java.format.AutoFormat")
     * @param organizationId the organization ID to run the recipe against
     * @return the unique ID of the recipe run
     */
    public String executeRecipe(String recipeId, String organizationId) {
        return executeRecipe(recipeId, organizationId, List.of());
    }

    /**
     * Executes a recipe with options on the specified organization.
     *
     * @param recipeId the fully qualified recipe ID (e.g., "org.openrewrite.gradle.plugins.UpgradePluginVersion")
     * @param organizationId the organization ID to run the recipe against
     * @param options list of recipe options (name-value pairs)
     * @return the unique ID of the recipe run
     */
    public String executeRecipe(String recipeId, String organizationId, List<OptionInput> options) {
        log.info("Executing recipe {} on organization {} with {} options",
                 recipeId, organizationId, options.size());

        // Build the recipe input
        RecipeInput recipeInput = RecipeInput.newBuilder()
                .id(recipeId)
                .options(options)
                .build();

        // Build the recipe run input
        RecipeRunInput runInput = RecipeRunInput.newBuilder()
                .organizationId(organizationId)
                .recipe(recipeInput)
                .build();

        // Execute the mutation
        RecipeRun recipeRun = dgsClient
                .request(new RunRecipeGraphQLQuery.Builder()
                        .run(runInput)
                        .build())
                .projection(new RunRecipeProjectionRoot<>()
                        .id()
                        .__typename())
                .retrieveSync()
                .toEntity(RecipeRun.class);

        if (recipeRun == null || recipeRun.getId() == null) {
            throw new IllegalStateException("Recipe execution failed - no run ID returned");
        }

        String runId = recipeRun.getId();
        log.info("Recipe run started with ID: {}", runId);

        return runId;
    }
}
```

---

## REST Client with [Spring HTTP Interface](https://docs.spring.io/spring-framework/reference/integration/rest-clients.html#rest-http-interface)

Spring Boot 3+ provides `HttpServiceProxyFactory` for creating declarative REST clients, similar to Spring Data repositories.

### 1. Define the REST Interface

Create an interface with declarative HTTP exchange methods.

```java
package io.moderne.configuration.infrastructure.adapters;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.service.annotation.GetExchange;

public interface ModerneApi {

    @GetExchange("organizations")
    String organizations(@RequestParam(name = "id", required = false) String organization);
}
```

#### Supported Annotations

- `@GetExchange`: HTTP GET requests
- `@PostExchange`: HTTP POST requests
- `@PutExchange`: HTTP PUT requests
- `@DeleteExchange`: HTTP DELETE requests
- `@PatchExchange`: HTTP PATCH requests
- `@RequestParam`: Query parameters
- `@RequestBody`: Request body
- `@PathVariable`: Path variables
- `@RequestHeader`: HTTP headers

---

### 2. Configure the REST Client Bean

Create a bean using `HttpServiceProxyFactory` to generate the implementation.

Add this to your `ModerneApiConfiguration` class:

```java
@Configuration
public class ModerneApiConfiguration {

    @Bean
    ModerneApi moderneApi(ModerneConfigurationProperties config) {
        RestClient restClient = RestClient.builder()
            .baseUrl(config.api().getApiEndpoint())
            .defaultHeaders(headers -> headers.setBearerAuth(config.api().token()))
            .build();

        RestClientAdapter adapter = RestClientAdapter.create(restClient);
        HttpServiceProxyFactory factory = HttpServiceProxyFactory
            .builderFor(adapter)
            .build();

        return factory.createClient(ModerneApi.class);
    }
}
```

#### How it Works

1. **RestClient**: Spring's HTTP client with base URL and default headers
2. **RestClientAdapter**: Adapts `RestClient` for use with `HttpServiceProxyFactory`
3. **HttpServiceProxyFactory**: Creates dynamic proxy implementations of HTTP interfaces
4. **createClient()**: Generates the actual implementation at runtime

---

### 3. Using the REST Client

Inject the interface and call methods directly.

See `src/main/java/io/moderne/configuration/repositories/service/OrganizationService.java`:

```java
package io.moderne.configuration.repositories.service;

import io.moderne.configuration.infrastructure.adapters.ModerneApi;
import io.moderne.organizations.Organization;
import io.moderne.organizations.OrganizationReader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrganizationService {

    private final ModerneApi moderneApi;
    private final OrganizationReader<Object> organizationReader = new OrganizationReader<>();

    public Organization<Object> getAllRepositories(String org) {
        log.debug("Loading organizations of {}.", org);
        String csvData = moderneApi.organizations(org);
        Organization<Object> tree = organizationReader.fromCsv(csvData);
        log.debug("Loaded organizations");
        
        return tree;
    }
}
```

#### Benefits

- **Type-safe**: Compile-time checking of method signatures
- **Declarative**: No boilerplate HTTP client code
- **Testable**: Easy to mock the interface in tests
- **Consistent**: Same programming model as Spring Data repositories
- **Flexible**: Supports all HTTP methods and customization
