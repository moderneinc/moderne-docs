---
title: "Inline `maxAttemptsExpression` constants ahead of the Spring Framework 7 migration"
sidebar_label: "Inline `maxAttemptsExpression` constants ahead of the Spring Framework 7 migration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Inline `maxAttemptsExpression` constants ahead of the Spring Framework 7 migration"}
  description={"Replace a `static final String` constant referenced by spring-retry's `@Retryable(maxAttemptsExpression = ...)` with its literal value, so that the migration to Spring Framework 7's `maxRetriesString` can apply the required `maxAttempts`-to-`maxRetries` decrement instead of leaving a TODO. Only constants declared in the sources being migrated are resolved."}
  fqName={"io.moderne.java.spring.boot4.InlineSpringRetryMaxAttemptsExpressionConstants"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.boot4.InlineSpringRetryMaxAttemptsExpressionConstants"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.boot4.InlineSpringRetryMaxAttemptsExpressionConstants"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot4/inlinespringretrymaxattemptsexpressionconstants.md"}
  moderneOnly
>

<RecipeHeader.Title>Inline `maxAttemptsExpression` constants ahead of the Spring Framework 7 migration</RecipeHeader.Title>

<RecipeHeader.Description>Replace a `static final String` constant referenced by spring-retry's `@Retryable(maxAttemptsExpression = ...)` with its literal value, so that the migration to Spring Framework 7's `maxRetriesString` can apply the required `maxAttempts`-to-`maxRetries` decrement instead of leaving a TODO. Only constants declared in the sources being migrated are resolved.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"unchanged":{"language":"java","code":"package com.example;\n\npublic class RetryableClientException extends RuntimeException {\n    public static final String MAX_RETRIES_EXPRESSION = \"#{${client.retry.retries}}\";\n}\n"},"variants":[{"language":"java","before":"package com.example;\n\nimport org.springframework.retry.annotation.Retryable;\n\npublic class MyService {\n    @Retryable(value = RetryableClientException.class,\n            maxAttemptsExpression = RetryableClientException.MAX_RETRIES_EXPRESSION)\n    public void doWork() {}\n}\n","after":"package com.example;\n\nimport org.springframework.retry.annotation.Retryable;\n\npublic class MyService {\n    @Retryable(value = RetryableClientException.class,\n            maxAttemptsExpression = \"#{${client.retry.retries}}\")\n    public void doWork() {}\n}\n","diff":"@@ -7,1 +7,1 @@\npublic class MyService {\n    @Retryable(value = RetryableClientException.class,\n-           maxAttemptsExpression = RetryableClientException.MAX_RETRIES_EXPRESSION)\n+           maxAttemptsExpression = \"#{${client.retry.retries}}\")\n    public void doWork() {}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.boot4.InlineSpringRetryMaxAttemptsExpressionConstants","displayName":"Inline `maxAttemptsExpression` constants ahead of the Spring Framework 7 migration","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

