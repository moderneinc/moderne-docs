---
title: "Migrate `@Retryable(recover=...)` + `@Recover` to programmatic `RetryTemplate`"
sidebar_label: "Migrate `@Retryable(recover=...)` + `@Recover` to programmatic `RetryTemplate`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `@Retryable(recover=...)` + `@Recover` to programmatic `RetryTemplate`"}
  description={"Convert spring-retry `@Retryable` methods that name a `@Recover` method into Spring Framework 7's programmatic `org.springframework.core.retry.RetryTemplate` wrapped in a try/catch that dispatches to the (now plain) recover method. Spring Framework 7's resilience `@Retryable` annotation has no equivalent to `@Recover`, so this conversion is required for recover-method semantics to survive the migration."}
  fqName={"io.moderne.java.spring.boot4.MigrateSpringRetryRecoverToRetryTemplate"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.boot4.MigrateSpringRetryRecoverToRetryTemplate"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.boot4.MigrateSpringRetryRecoverToRetryTemplate"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratespringretryrecovertoretrytemplate.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `@Retryable(recover=...)` + `@Recover` to programmatic `RetryTemplate`</RecipeHeader.Title>

<RecipeHeader.Description>Convert spring-retry `@Retryable` methods that name a `@Recover` method into Spring Framework 7's programmatic `org.springframework.core.retry.RetryTemplate` wrapped in a try/catch that dispatches to the (now plain) recover method. Spring Framework 7's resilience `@Retryable` annotation has no equivalent to `@Recover`, so this conversion is required for recover-method semantics to survive the migration.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.retry.annotation.Retryable;\nimport org.springframework.retry.annotation.Recover;\n\npublic class MyService {\n    @Retryable(maxAttempts = 5, recover = \"recoverFoo\")\n    public String foo(String url) {\n        return url.toUpperCase();\n    }\n\n    @Recover\n    @SuppressWarnings(\"unused\")\n    public String recoverFoo(Exception e, String url) {\n        return \"fallback\";\n    }\n}\n","after":"import org.springframework.core.retry.RetryException;\nimport org.springframework.core.retry.RetryPolicy;\nimport org.springframework.core.retry.RetryTemplate;\n\npublic class MyService {\n    public String foo(String url) {\n        RetryTemplate retryTemplate = new RetryTemplate(RetryPolicy.builder()\n                .maxRetries(4)\n                .build());\n        try {\n            return retryTemplate.execute(() -> {\n                return url.toUpperCase();\n            });\n        } catch (RetryException re) {\n            return recoverFoo((Exception) re.getCause(), url);\n        }\n    }\n\n    public String recoverFoo(Exception e, String url) {\n        return \"fallback\";\n    }\n}\n","diff":"@@ -1,2 +1,3 @@\n-import org.springframework.retry.annotation.Retryable;\n-import org.springframework.retry.annotation.Recover;\n+import org.springframework.core.retry.RetryException;\n+import org.springframework.core.retry.RetryPolicy;\n+import org.springframework.core.retry.RetryTemplate;\n\n@@ -5,1 +6,0 @@\n\npublic class MyService {\n-   @Retryable(maxAttempts = 5, recover = \"recoverFoo\")\n    public String foo(String url) {\n@@ -7,1 +7,10 @@\n    @Retryable(maxAttempts = 5, recover = \"recoverFoo\")\n    public String foo(String url) {\n-       return url.toUpperCase();\n+       RetryTemplate retryTemplate = new RetryTemplate(RetryPolicy.builder()\n+               .maxRetries(4)\n+               .build());\n+       try {\n+           return retryTemplate.execute(() -> {\n+               return url.toUpperCase();\n+           });\n+       } catch (RetryException re) {\n+           return recoverFoo((Exception) re.getCause(), url);\n+       }\n    }\n@@ -10,2 +19,0 @@\n    }\n\n-   @Recover\n-   @SuppressWarnings(\"unused\")\n    public String recoverFoo(Exception e, String url) {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.boot4.MigrateSpringRetryRecoverToRetryTemplate","displayName":"Migrate `@Retryable(recover=...)` + `@Recover` to programmatic `RetryTemplate`","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

