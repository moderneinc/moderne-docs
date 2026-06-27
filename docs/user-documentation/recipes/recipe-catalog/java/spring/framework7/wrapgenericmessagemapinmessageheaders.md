---
title: "Wrap `GenericMessage` map argument in `MessageHeaders`"
sidebar_label: "Wrap `GenericMessage` map argument in `MessageHeaders`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Wrap `GenericMessage` map argument in `MessageHeaders`"}
  description={"Wraps the `Map` argument in `GenericMessage` constructors in Kotlin sources with `MessageHeaders(map)` to explicitly use the `MessageHeaders` overload. This resolves Kotlin overload resolution ambiguity between the `Map` and `MessageHeaders` constructor overloads."}
  fqName={"io.moderne.java.spring.framework7.WrapGenericMessageMapInMessageHeaders"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.framework7.WrapGenericMessageMapInMessageHeaders"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.framework7.WrapGenericMessageMapInMessageHeaders"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/framework7/wrapgenericmessagemapinmessageheaders.md"}
  moderneOnly
>

<RecipeHeader.Title>Wrap `GenericMessage` map argument in `MessageHeaders`</RecipeHeader.Title>

<RecipeHeader.Description>Wraps the `Map` argument in `GenericMessage` constructors in Kotlin sources with `MessageHeaders(map)` to explicitly use the `MessageHeaders` overload. This resolves Kotlin overload resolution ambiguity between the `Map` and `MessageHeaders` constructor overloads.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"kotlin","before":"import org.springframework.messaging.support.GenericMessage\nimport java.util.HashMap\n\nclass Test {\n    fun test() {\n        val headers = HashMap<String, Any>()\n        headers[\"key\"] = \"value\"\n        val msg = GenericMessage(\"payload\", headers)\n    }\n}\n","after":"import org.springframework.messaging.MessageHeaders\nimport org.springframework.messaging.support.GenericMessage\nimport java.util.HashMap\n\nclass Test {\n    fun test() {\n        val headers = HashMap<String, Any>()\n        headers[\"key\"] = \"value\"\n        val msg = GenericMessage(\"payload\", MessageHeaders(headers))\n    }\n}\n","diff":"@@ -1,0 +1,1 @@\n+import org.springframework.messaging.MessageHeaders\nimport org.springframework.messaging.support.GenericMessage\n@@ -8,1 +9,1 @@\n        val headers = HashMap<String, Any>()\n        headers[\"key\"] = \"value\"\n-       val msg = GenericMessage(\"payload\", headers)\n+       val msg = GenericMessage(\"payload\", MessageHeaders(headers))\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.framework7.WrapGenericMessageMapInMessageHeaders","displayName":"Wrap `GenericMessage` map argument in `MessageHeaders`","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

