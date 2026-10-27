---
title: "Module is part of a Spring Boot 3 or 4 application"
sidebar_label: "Module is part of a Spring Boot 3 or 4 application"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/spring/moduleisspringbootapplication" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Module is part of a Spring Boot 3 or 4 application"}
  description={"Marks all sources in modules that run on Spring Boot 3.x or 4.x (including snapshots and milestones), apply the Spring Boot build plugin and have a `main` method on a class annotated with `@SpringBootApplication` or `@SpringBootConfiguration` in the main source set, as well as the Maven parents of those modules and the modules they depend on at runtime. Projects nested under `src/*/resources`, such as test fixtures, are never marked; only configuration files directly in a resources directory or its `config` directory are. Intended as a precondition, so that libraries and framework code are not migrated as if they were applications."}
  fqName={"org.openrewrite.quarkus.spring.ModuleIsSpringBootApplication"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring-to-quarkus/blob/main/src/main/java/org/openrewrite/quarkus/spring/ModuleIsSpringBootApplication.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.quarkus.spring.ModuleIsSpringBootApplication"}
  artifact={"org.openrewrite.recipe:rewrite-spring-to-quarkus"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.quarkus.spring.ModuleIsSpringBootApplication"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/spring/moduleisspringbootapplication.md"}
>

<RecipeHeader.Title>Module is part of a Spring Boot 3 or 4 application</RecipeHeader.Title>

<RecipeHeader.Description>Marks all sources in modules that run on Spring Boot 3.x or 4.x (including snapshots and milestones), apply the Spring Boot build plugin and have a `main` method on a class annotated with `@SpringBootApplication` or `@SpringBootConfiguration` in the main source set, as well as the Maven parents of those modules and the modules they depend on at runtime. Projects nested under `src/*/resources`, such as test fixtures, are never marked; only configuration files directly in a resources directory or its `config` directory are. Intended as a precondition, so that libraries and framework code are not migrated as if they were applications.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"unchanged":{"language":"mavenProject","code":"demo"},"variants":[{"language":"java","before":"import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class DemoApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n}\n","after":"/*~~(Spring Boot application module)~~>*/import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class DemoApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.springframework.boot.SpringApplication;\n+/*~~(Spring Boot application module)~~>*/import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n","newFile":false},{"language":"properties","before":"server.port=8081","after":"~~(Spring Boot application module)~~>server.port=8081","diff":"--- application.properties\n+++ application.properties\n@@ -1,1 +1,1 @@\n-server.port=8081\n+~~(Spring Boot application module)~~>server.port=8081\n","newFile":false},{"language":"xml","before":"<project>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>1.0.0</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter</artifactId>\n            <version>3.5.4</version>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","after":"<!--~~(Spring Boot application module)~~>--><project>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>1.0.0</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter</artifactId>\n            <version>3.5.4</version>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -1,1 +1,1 @@\n-<project>\n+<!--~~(Spring Boot application module)~~>--><project>\n    <groupId>com.example</groupId>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.quarkus.spring.ModuleIsSpringBootApplication","displayName":"Module is part of a Spring Boot 3 or 4 application","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring-to-quarkus","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

