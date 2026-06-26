---
title: "Add `PlatformTransactionManager` to `tasklet()` and `chunk()` calls"
sidebar_label: "Add `PlatformTransactionManager` to `tasklet()` and `chunk()` calls"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/batch/addtransactionmanagertotaskletandchunk" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `PlatformTransactionManager` to `tasklet()` and `chunk()` calls"}
  description={"Spring Batch 5.0 requires a `PlatformTransactionManager` as the second argument to `StepBuilder.tasklet(Tasklet)` and `StepBuilder.chunk(int)` / `StepBuilder.chunk(CompletionPolicy)`. This recipe adds the `transactionManager` argument and injects it as a method parameter if needed."}
  fqName={"org.openrewrite.java.spring.batch.AddTransactionManagerToTaskletAndChunk"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/batch/AddTransactionManagerToTaskletAndChunk.java"}
/>

<RecipeHeader
  displayName={"Add `PlatformTransactionManager` to `tasklet()` and `chunk()` calls"}
  description={"Spring Batch 5.0 requires a `PlatformTransactionManager` as the second argument to `StepBuilder.tasklet(Tasklet)` and `StepBuilder.chunk(int)` / `StepBuilder.chunk(CompletionPolicy)`. This recipe adds the `transactionManager` argument and injects it as a method parameter if needed."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.batch.AddTransactionManagerToTaskletAndChunk"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.batch.AddTransactionManagerToTaskletAndChunk"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/batch/addtransactionmanagertotaskletandchunk.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.batch.core.Step;\nimport org.springframework.batch.core.configuration.annotation.StepBuilderFactory;\nimport org.springframework.batch.core.step.tasklet.Tasklet;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.context.annotation.Bean;\n\nclass MyJobConfig {\n\n    @Autowired\n    private StepBuilderFactory stepBuilderFactory;\n\n    @Bean\n    Step myStep(Tasklet myTasklet) {\n        return stepBuilderFactory.get(\"myStep\")\n                .tasklet(myTasklet)\n                .build();\n    }\n}\n","after":"import org.springframework.batch.core.Step;\nimport org.springframework.batch.core.configuration.annotation.StepBuilderFactory;\nimport org.springframework.batch.core.step.tasklet.Tasklet;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.transaction.PlatformTransactionManager;\n\nclass MyJobConfig {\n\n    @Autowired\n    private StepBuilderFactory stepBuilderFactory;\n\n    @Bean\n    Step myStep(Tasklet myTasklet, PlatformTransactionManager transactionManager) {\n        return stepBuilderFactory.get(\"myStep\")\n                .tasklet(myTasklet, transactionManager)\n                .build();\n    }\n}\n","diff":"@@ -6,0 +6,1 @@\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.context.annotation.Bean;\n+import org.springframework.transaction.PlatformTransactionManager;\n\n@@ -13,1 +14,1 @@\n\n    @Bean\n-   Step myStep(Tasklet myTasklet) {\n+   Step myStep(Tasklet myTasklet, PlatformTransactionManager transactionManager) {\n        return stepBuilderFactory.get(\"myStep\")\n@@ -15,1 +16,1 @@\n    Step myStep(Tasklet myTasklet) {\n        return stepBuilderFactory.get(\"myStep\")\n-               .tasklet(myTasklet)\n+               .tasklet(myTasklet, transactionManager)\n                .build();\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.batch.AddTransactionManagerToTaskletAndChunk","displayName":"Add `PlatformTransactionManager` to `tasklet()` and `chunk()` calls","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

