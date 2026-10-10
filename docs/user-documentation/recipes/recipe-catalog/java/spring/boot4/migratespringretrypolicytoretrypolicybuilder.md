---
title: "Migrate spring-retry `RetryPolicy` construction to Spring Framework 7 `RetryPolicy.builder()`"
sidebar_label: "Migrate spring-retry `RetryPolicy` construction to Spring Framework 7 `RetryPolicy.builder()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate spring-retry `RetryPolicy` construction to Spring Framework 7 `RetryPolicy.builder()`"}
  description={"Rewrite construction of spring-retry policies at a local variable declaration into the equivalent `org.springframework.core.retry.RetryPolicy.builder()` chain from Spring Framework 7, and retype the local to SF7 `RetryPolicy`. Supported inputs: `SimpleRetryPolicy` (all four ctor overloads, with `traverseCauses` ignored and the classifier `Map.of(...)` bucketed into `.includes(...)`/`.excludes(...)`), `MaxAttemptsRetryPolicy` (default 3 attempts or explicit `int`), `NeverRetryPolicy` (zero retries), and `TimeoutRetryPolicy` (default 1000ms or explicit `long` ms, wrapped in `Duration.ofMillis(...)` for SF7). Trailing setter chains (`setMaxAttempts` on `SimpleRetryPolicy`/`MaxAttemptsRetryPolicy`, `setTimeout` on `TimeoutRetryPolicy`) are folded into the builder chain and the setter statements deleted; a setter overrides the corresponding constructor-time builder call. The `maxAttempts` argument is decremented by one to match SF7's `maxRetries` semantics. The migration is skipped when the local is reassigned, when any setter in the chain is unmappable, when the classifier is not an inline `Map.of(...)` literal with class-literal keys and boolean-literal values, or when the declaration has multiple named variables."}
  fqName={"io.moderne.java.spring.boot4.MigrateSpringRetryPolicyToRetryPolicyBuilder"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.boot4.MigrateSpringRetryPolicyToRetryPolicyBuilder"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.boot4.MigrateSpringRetryPolicyToRetryPolicyBuilder"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratespringretrypolicytoretrypolicybuilder.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate spring-retry `RetryPolicy` construction to Spring Framework 7 `RetryPolicy.builder()`</RecipeHeader.Title>

<RecipeHeader.Description>Rewrite construction of spring-retry policies at a local variable declaration into the equivalent `org.springframework.core.retry.RetryPolicy.builder()` chain from Spring Framework 7, and retype the local to SF7 `RetryPolicy`. Supported inputs: `SimpleRetryPolicy` (all four ctor overloads, with `traverseCauses` ignored and the classifier `Map.of(...)` bucketed into `.includes(...)`/`.excludes(...)`), `MaxAttemptsRetryPolicy` (default 3 attempts or explicit `int`), `NeverRetryPolicy` (zero retries), and `TimeoutRetryPolicy` (default 1000ms or explicit `long` ms, wrapped in `Duration.ofMillis(...)` for SF7). Trailing setter chains (`setMaxAttempts` on `SimpleRetryPolicy`/`MaxAttemptsRetryPolicy`, `setTimeout` on `TimeoutRetryPolicy`) are folded into the builder chain and the setter statements deleted; a setter overrides the corresponding constructor-time builder call. The `maxAttempts` argument is decremented by one to match SF7's `maxRetries` semantics. The migration is skipped when the local is reassigned, when any setter in the chain is unmappable, when the classifier is not an inline `Map.of(...)` literal with class-literal keys and boolean-literal values, or when the declaration has multiple named variables.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.util.Map;\nimport org.springframework.retry.policy.SimpleRetryPolicy;\n\nclass Config {\n    void build() {\n        SimpleRetryPolicy policy = new SimpleRetryPolicy(3,\n            Map.of(IllegalStateException.class, true, IllegalArgumentException.class, true),\n            true);\n    }\n}\n","after":"import org.springframework.core.retry.RetryPolicy;\n\nclass Config {\n    void build() {\n        RetryPolicy policy = RetryPolicy.builder()\n                .maxRetries(2)\n                .includes(IllegalStateException.class, IllegalArgumentException.class)\n                .build();\n    }\n}\n","diff":"@@ -1,2 +1,1 @@\n-import java.util.Map;\n-import org.springframework.retry.policy.SimpleRetryPolicy;\n+import org.springframework.core.retry.RetryPolicy;\n\n@@ -6,3 +5,4 @@\nclass Config {\n    void build() {\n-       SimpleRetryPolicy policy = new SimpleRetryPolicy(3,\n-           Map.of(IllegalStateException.class, true, IllegalArgumentException.class, true),\n-           true);\n+       RetryPolicy policy = RetryPolicy.builder()\n+               .maxRetries(2)\n+               .includes(IllegalStateException.class, IllegalArgumentException.class)\n+               .build();\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.boot4.MigrateSpringRetryPolicyToRetryPolicyBuilder","displayName":"Migrate spring-retry `RetryPolicy` construction to Spring Framework 7 `RetryPolicy.builder()`","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

