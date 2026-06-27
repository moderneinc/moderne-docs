---
title: "Migrate awspring SQS default converter `setObjectMapper` to constructor injection"
sidebar_label: "Migrate awspring SQS default converter `setObjectMapper` to constructor injection"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate awspring SQS default converter `setObjectMapper` to constructor injection"}
  description={"In spring-cloud-aws 4.0 `AbstractMessagingMessageConverter.setObjectMapper(...)` was removed and the `JsonMapper` is supplied through the `SqsMessagingMessageConverter` constructor. Rewrites `SqsTemplate.builder().configureDefaultConverter(c -> c.setObjectMapper(mapper))` to `SqsTemplate.builder().messageConverter(new SqsMessagingMessageConverter(mapper))`, or adds a TODO comment when the configurer does more than set the object mapper."}
  fqName={"io.moderne.java.spring.boot4.MigrateAwspringSqsMessageConverter"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.boot4.MigrateAwspringSqsMessageConverter"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.boot4.MigrateAwspringSqsMessageConverter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot4/migrateawspringsqsmessageconverter.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate awspring SQS default converter `setObjectMapper` to constructor injection</RecipeHeader.Title>

<RecipeHeader.Description>In spring-cloud-aws 4.0 `AbstractMessagingMessageConverter.setObjectMapper(...)` was removed and the `JsonMapper` is supplied through the `SqsMessagingMessageConverter` constructor. Rewrites `SqsTemplate.builder().configureDefaultConverter(c -> c.setObjectMapper(mapper))` to `SqsTemplate.builder().messageConverter(new SqsMessagingMessageConverter(mapper))`, or adds a TODO comment when the configurer does more than set the object mapper.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"kotlin","before":"import io.awspring.cloud.sqs.operations.SqsTemplate\nimport tools.jackson.databind.json.JsonMapper\n\nclass Config {\n    fun messagingTemplate(objectMapper: JsonMapper): Any {\n        return SqsTemplate.builder()\n            .configureDefaultConverter { converter -> converter.setObjectMapper(objectMapper) }\n            .build()\n    }\n}\n","after":"import io.awspring.cloud.sqs.operations.SqsTemplate\nimport tools.jackson.databind.json.JsonMapper\n\nclass Config {\n    fun messagingTemplate(objectMapper: JsonMapper): Any {\n        return SqsTemplate.builder()\n            // TODO: setObjectMapper was removed from the default converter in spring-cloud-aws 4.0. Supply the JsonMapper via the SqsMessagingMessageConverter constructor and pass it to .messageConverter(...) instead.\n            .configureDefaultConverter { converter -> converter.setObjectMapper(objectMapper) }\n            .build()\n    }\n}\n","diff":"@@ -7,0 +7,1 @@\n    fun messagingTemplate(objectMapper: JsonMapper): Any {\n        return SqsTemplate.builder()\n+           // TODO: setObjectMapper was removed from the default converter in spring-cloud-aws 4.0. Supply the JsonMapper via the SqsMessagingMessageConverter constructor and pass it to .messageConverter(...) instead.\n            .configureDefaultConverter { converter -> converter.setObjectMapper(objectMapper) }\n","newFile":false}]},{"variants":[{"language":"java","before":"import io.awspring.cloud.sqs.operations.SqsTemplate;\nimport tools.jackson.databind.json.JsonMapper;\n\nclass Config {\n    Object messagingTemplate(JsonMapper objectMapper) {\n        return SqsTemplate.builder()\n                .configureDefaultConverter(converter -> converter.setObjectMapper(objectMapper))\n                .build();\n    }\n}\n","after":"import io.awspring.cloud.sqs.operations.SqsTemplate;\nimport io.awspring.cloud.sqs.support.converter.SqsMessagingMessageConverter;\nimport tools.jackson.databind.json.JsonMapper;\n\nclass Config {\n    Object messagingTemplate(JsonMapper objectMapper) {\n        return SqsTemplate.builder()\n                .messageConverter(new SqsMessagingMessageConverter(objectMapper))\n                .build();\n    }\n}\n","diff":"@@ -2,0 +2,1 @@\nimport io.awspring.cloud.sqs.operations.SqsTemplate;\n+import io.awspring.cloud.sqs.support.converter.SqsMessagingMessageConverter;\nimport tools.jackson.databind.json.JsonMapper;\n@@ -7,1 +8,1 @@\n    Object messagingTemplate(JsonMapper objectMapper) {\n        return SqsTemplate.builder()\n-               .configureDefaultConverter(converter -> converter.setObjectMapper(objectMapper))\n+               .messageConverter(new SqsMessagingMessageConverter(objectMapper))\n                .build();\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.boot4.MigrateAwspringSqsMessageConverter","displayName":"Migrate awspring SQS default converter `setObjectMapper` to constructor injection","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

