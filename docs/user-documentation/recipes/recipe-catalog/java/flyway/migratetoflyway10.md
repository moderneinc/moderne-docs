---
title: "Migrate to Flyway 10"
sidebar_label: "Migrate to Flyway 10"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/flyway/migratetoflyway10" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Flyway 10"}
  description={"Migrate to Flyway 10. See details at [Flyway V10 has landed](https://documentation.red-gate.com/fd/flyway-v10-has-landed-222627771.html)."}
  fqName={"org.openrewrite.java.flyway.MigrateToFlyway10"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/flyway-10.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["flyway"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.flyway.MigrateToFlyway10"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.flyway.MigrateToFlyway10"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/flyway/migratetoflyway10.md"}
>

<RecipeHeader.Title>Migrate to Flyway 10</RecipeHeader.Title>

<RecipeHeader.Description>Migrate to Flyway 10. See details at [Flyway V10 has landed](https://documentation.red-gate.com/fd/flyway-v10-has-landed-222627771.html).</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Add missing Flyway module for PostgreSQL","href":"/user-documentation/recipes/recipe-catalog/java/flyway/addflywaymodulepostgresql/"},{"name":"Add missing Flyway module for MySQL","href":"/user-documentation/recipes/recipe-catalog/java/flyway/addflywaymodulemysql/"},{"name":"Add missing Flyway module for Oracle","href":"/user-documentation/recipes/recipe-catalog/java/flyway/addflywaymoduleoracle/"},{"name":"Add missing Flyway module for SQL Server","href":"/user-documentation/recipes/recipe-catalog/java/flyway/addflywaymodulesqlserver/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<project>\n\t<modelVersion>4.0.0</modelVersion>\n\t<parent>\n\t\t<groupId>org.springframework.boot</groupId>\n\t\t<artifactId>spring-boot-starter-parent</artifactId>\n\t\t<version>3.3.12</version>\n\t\t<relativePath/>\n\t</parent>\n\t<groupId>com.example</groupId>\n\t<artifactId>demo</artifactId>\n\t<version>0.0.1-SNAPSHOT</version>\n\t<dependencies>\n\t\t<dependency>\n\t\t\t<groupId>org.flywaydb</groupId>\n\t\t\t<artifactId>flyway-core</artifactId>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.postgresql</groupId>\n\t\t\t<artifactId>postgresql</artifactId>\n\t\t\t<scope>runtime</scope>\n\t\t</dependency>\n\t</dependencies>\n</project>\n","after":"<project>\n\t<modelVersion>4.0.0</modelVersion>\n\t<parent>\n\t\t<groupId>org.springframework.boot</groupId>\n\t\t<artifactId>spring-boot-starter-parent</artifactId>\n\t\t<version>3.3.12</version>\n\t\t<relativePath/>\n\t</parent>\n\t<groupId>com.example</groupId>\n\t<artifactId>demo</artifactId>\n\t<version>0.0.1-SNAPSHOT</version>\n\t<dependencies>\n\t\t<dependency>\n\t\t\t<groupId>org.flywaydb</groupId>\n\t\t\t<artifactId>flyway-core</artifactId>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.flywaydb</groupId>\n\t\t\t<artifactId>flyway-database-postgresql</artifactId>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.postgresql</groupId>\n\t\t\t<artifactId>postgresql</artifactId>\n\t\t\t<scope>runtime</scope>\n\t\t</dependency>\n\t</dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -18,0 +18,4 @@\n\t\t</dependency>\n\t\t<dependency>\n+\t\t\t<groupId>org.flywaydb</groupId>\n+\t\t\t<artifactId>flyway-database-postgresql</artifactId>\n+\t\t</dependency>\n+\t\t<dependency>\n\t\t\t<groupId>org.postgresql</groupId>\n","newFile":false}]},{"variants":[{"language":"xml","before":"<project>\n\t<modelVersion>4.0.0</modelVersion>\n\t<parent>\n\t\t<groupId>org.springframework.boot</groupId>\n\t\t<artifactId>spring-boot-starter-parent</artifactId>\n\t\t<version>3.3.12</version>\n\t\t<relativePath/>\n\t</parent>\n\t<groupId>com.example</groupId>\n\t<artifactId>demo</artifactId>\n\t<version>0.0.1-SNAPSHOT</version>\n\t<dependencies>\n\t\t<dependency>\n\t\t\t<groupId>org.flywaydb</groupId>\n\t\t\t<artifactId>flyway-core</artifactId>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.postgresql</groupId>\n\t\t\t<artifactId>postgresql</artifactId>\n\t\t\t<scope>runtime</scope>\n\t\t</dependency>\n\t</dependencies>\n</project>\n","after":"<project>\n\t<modelVersion>4.0.0</modelVersion>\n\t<parent>\n\t\t<groupId>org.springframework.boot</groupId>\n\t\t<artifactId>spring-boot-starter-parent</artifactId>\n\t\t<version>3.3.12</version>\n\t\t<relativePath/>\n\t</parent>\n\t<groupId>com.example</groupId>\n\t<artifactId>demo</artifactId>\n\t<version>0.0.1-SNAPSHOT</version>\n\t<dependencies>\n\t\t<dependency>\n\t\t\t<groupId>org.flywaydb</groupId>\n\t\t\t<artifactId>flyway-core</artifactId>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.flywaydb</groupId>\n\t\t\t<artifactId>flyway-database-postgresql</artifactId>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.postgresql</groupId>\n\t\t\t<artifactId>postgresql</artifactId>\n\t\t\t<scope>runtime</scope>\n\t\t</dependency>\n\t</dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -18,0 +18,4 @@\n\t\t</dependency>\n\t\t<dependency>\n+\t\t\t<groupId>org.flywaydb</groupId>\n+\t\t\t<artifactId>flyway-database-postgresql</artifactId>\n+\t\t</dependency>\n+\t\t<dependency>\n\t\t\t<groupId>org.postgresql</groupId>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.flyway.MigrateToFlyway10","displayName":"Migrate to Flyway 10","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

