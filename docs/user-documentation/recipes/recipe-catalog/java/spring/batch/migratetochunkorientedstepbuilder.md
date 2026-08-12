---
title: "Migrate to the new chunk-oriented step model"
sidebar_label: "Migrate to the new chunk-oriented step model"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/batch/migratetochunkorientedstepbuilder" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to the new chunk-oriented step model"}
  description={"Spring Batch 6.0 deprecates `StepBuilder.chunk(int, PlatformTransactionManager)` in favor of a new chunk-oriented model, where the transaction manager is configured through `ChunkOrientedStepBuilder.transactionManager(PlatformTransactionManager)`. Replaces `chunk(chunkSize, transactionManager)` with `chunk(chunkSize).transactionManager(transactionManager)`, but only where every other method in the builder chain has an equivalent on `ChunkOrientedStepBuilder`. The new model dropped the Spring Retry based chunk and retry APIs without a drop-in replacement, so chains calling `backOffPolicy`, `retryPolicy`, `retryContextCache`, `keyGenerator`, `noRetry`, `noRollback`, `noSkip`, `processorNonTransactional`, `readerIsTransactionalQueue`, `chunkOperations`, `stepOperations`, `exceptionHandler`, `listener(RetryListener)`, `chunk(CompletionPolicy, PlatformTransactionManager)` or `taskExecutor(TaskExecutor)` with a non-async executor are left untouched, and remain a manual migration step. See the [Spring Batch 6.0 migration guide](https://github.com/spring-projects/spring-batch/wiki/Spring-Batch-6.0-Migration-Guide#new-chunk-oriented-model-implementation)."}
  fqName={"org.openrewrite.java.spring.batch.MigrateToChunkOrientedStepBuilder"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/batch/MigrateToChunkOrientedStepBuilder.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.batch.MigrateToChunkOrientedStepBuilder"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.batch.MigrateToChunkOrientedStepBuilder"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/batch/migratetochunkorientedstepbuilder.md"}
>

<RecipeHeader.Title>Migrate to the new chunk-oriented step model</RecipeHeader.Title>

<RecipeHeader.Description>Spring Batch 6.0 deprecates `StepBuilder.chunk(int, PlatformTransactionManager)` in favor of a new chunk-oriented model, where the transaction manager is configured through `ChunkOrientedStepBuilder.transactionManager(PlatformTransactionManager)`. Replaces `chunk(chunkSize, transactionManager)` with `chunk(chunkSize).transactionManager(transactionManager)`, but only where every other method in the builder chain has an equivalent on `ChunkOrientedStepBuilder`. The new model dropped the Spring Retry based chunk and retry APIs without a drop-in replacement, so chains calling `backOffPolicy`, `retryPolicy`, `retryContextCache`, `keyGenerator`, `noRetry`, `noRollback`, `noSkip`, `processorNonTransactional`, `readerIsTransactionalQueue`, `chunkOperations`, `stepOperations`, `exceptionHandler`, `listener(RetryListener)`, `chunk(CompletionPolicy, PlatformTransactionManager)` or `taskExecutor(TaskExecutor)` with a non-async executor are left untouched, and remain a manual migration step. See the [Spring Batch 6.0 migration guide](https://github.com/spring-projects/spring-batch/wiki/Spring-Batch-6.0-Migration-Guide#new-chunk-oriented-model-implementation).</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.batch.core.Step;\nimport org.springframework.batch.core.repository.JobRepository;\nimport org.springframework.batch.core.step.builder.StepBuilder;\nimport org.springframework.batch.item.ItemReader;\nimport org.springframework.batch.item.ItemWriter;\nimport org.springframework.transaction.PlatformTransactionManager;\n\nclass MyJobConfig {\n    Step myStep(JobRepository jobRepository, PlatformTransactionManager transactionManager,\n                ItemReader<String> reader, ItemWriter<String> writer) {\n        return new StepBuilder(\"myStep\", jobRepository)\n                .<String, String>chunk(10, transactionManager)\n                .reader(reader)\n                .writer(writer)\n                .build();\n    }\n}\n","after":"import org.springframework.batch.core.Step;\nimport org.springframework.batch.core.repository.JobRepository;\nimport org.springframework.batch.core.step.builder.StepBuilder;\nimport org.springframework.batch.item.ItemReader;\nimport org.springframework.batch.item.ItemWriter;\nimport org.springframework.transaction.PlatformTransactionManager;\n\nclass MyJobConfig {\n    Step myStep(JobRepository jobRepository, PlatformTransactionManager transactionManager,\n                ItemReader<String> reader, ItemWriter<String> writer) {\n        return new StepBuilder(\"myStep\", jobRepository)\n                .<String, String>chunk(10)\n                .transactionManager(transactionManager)\n                .reader(reader)\n                .writer(writer)\n                .build();\n    }\n}\n","diff":"@@ -12,1 +12,2 @@\n                ItemReader<String> reader, ItemWriter<String> writer) {\n        return new StepBuilder(\"myStep\", jobRepository)\n-               .<String, String>chunk(10, transactionManager)\n+               .<String, String>chunk(10)\n+               .transactionManager(transactionManager)\n                .reader(reader)\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.batch.MigrateToChunkOrientedStepBuilder","displayName":"Migrate to the new chunk-oriented step model","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

