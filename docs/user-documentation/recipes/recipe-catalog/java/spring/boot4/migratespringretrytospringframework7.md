---
title: "Migrate `spring-retry` to Spring Framework resilience"
sidebar_label: "Migrate `spring-retry` to Spring Framework resilience"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `spring-retry` to Spring Framework resilience"}
  description={"Migrate `spring-retry`s `@Retryable` and `@Backoff` annotation to Spring Framework 7 Resilience annotations."}
  fqName={"io.moderne.java.spring.boot4.MigrateSpringRetryToSpringFramework7"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate `spring-retry` to Spring Framework resilience"}
  description={"Migrate `spring-retry`s `@Retryable` and `@Backoff` annotation to Spring Framework 7 Resilience annotations."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.boot4.MigrateSpringRetryToSpringFramework7"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.boot4.MigrateSpringRetryToSpringFramework7"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratespringretrytospringframework7.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.retry.annotation.Retryable;\nimport org.springframework.retry.annotation.Backoff;\nimport java.io.IOException;\n\npublic class MyService {\n    @Retryable(retryFor = IOException.class, maxAttempts = 5, backoff = @Backoff(delay = 100))\n    public void doWork() {}\n}\n","after":"import org.springframework.resilience.annotation.Retryable;\nimport java.io.IOException;\n\npublic class MyService {\n    @Retryable(includes = IOException.class, maxRetries = 4, delay = 100)\n    public void doWork() {}\n}\n","diff":"@@ -1,2 +1,1 @@\n-import org.springframework.retry.annotation.Retryable;\n-import org.springframework.retry.annotation.Backoff;\n+import org.springframework.resilience.annotation.Retryable;\nimport java.io.IOException;\n@@ -6,1 +5,1 @@\n\npublic class MyService {\n-   @Retryable(retryFor = IOException.class, maxAttempts = 5, backoff = @Backoff(delay = 100))\n+   @Retryable(includes = IOException.class, maxRetries = 4, delay = 100)\n    public void doWork() {}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.boot4.MigrateSpringRetryToSpringFramework7","displayName":"Migrate `spring-retry` to Spring Framework resilience","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

