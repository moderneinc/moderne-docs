---
title: "Use NamedValue parameters instead of Map"
sidebar_label: "Use NamedValue parameters instead of Map"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use NamedValue parameters instead of Map"}
  description={"Migrates `indicesBoost` and `dynamicTemplates` parameters from `Map` to `NamedValue` in Elasticsearch Java client 9.x."}
  fqName={"io.moderne.elastic.elastic9.UseNamedValueParameters"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["elasticsearch"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.elastic.elastic9.UseNamedValueParameters"}
  artifact={"io.moderne.recipe:rewrite-elastic"}
  appLink={"https://app.moderne.io/recipes/io.moderne.elastic.elastic9.UseNamedValueParameters"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/elastic/elastic9/usenamedvalueparameters.md"}
  moderneOnly
>

<RecipeHeader.Title>Use NamedValue parameters instead of Map</RecipeHeader.Title>

<RecipeHeader.Description>Migrates `indicesBoost` and `dynamicTemplates` parameters from `Map` to `NamedValue` in Elasticsearch Java client 9.x.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import co.elastic.clients.elasticsearch.ElasticsearchClient;\nimport co.elastic.clients.elasticsearch.indices.PutMappingRequest;\nimport co.elastic.clients.elasticsearch._types.mapping.DynamicTemplate;\nimport co.elastic.clients.elasticsearch.async_search.SubmitRequest;\nimport java.util.Map;\n\nclass Test {\n    void testSearch(ElasticsearchClient esClient) throws Exception {\n        esClient.search(s -> s\n            .index(\"*\")\n            .indicesBoost(Map.of(\"index\", 1.0))\n        , Void.class);\n    }\n\n    void testPutMapping() {\n        var request = new PutMappingRequest.Builder()\n            .index(\"test\")\n            .dynamicTemplates(Map.of(\"strings\", new DynamicTemplate.Builder().build()))\n            .build();\n    }\n\n    void testAsyncSearch() {\n        new SubmitRequest.Builder()\n            .index(\"test\")\n            .indicesBoost(getBoost())\n            .build();\n    }\n\n    private Map<String, Double> getBoost() {\n        return Map.of(\"myindex\", 2.5);\n    }\n}\n","after":"import co.elastic.clients.elasticsearch.ElasticsearchClient;\nimport co.elastic.clients.elasticsearch.indices.PutMappingRequest;\nimport co.elastic.clients.util.NamedValue;\nimport co.elastic.clients.elasticsearch._types.mapping.DynamicTemplate;\nimport co.elastic.clients.elasticsearch.async_search.SubmitRequest;\nimport java.util.Map;\n\nclass Test {\n    void testSearch(ElasticsearchClient esClient) throws Exception {\n        esClient.search(s -> s\n            .index(\"*\")\n            .indicesBoost(NamedValue.of(\"index\", 1.0))\n        , Void.class);\n    }\n\n    void testPutMapping() {\n        var request = new PutMappingRequest.Builder()\n            .index(\"test\")\n            .dynamicTemplates(NamedValue.of(\"strings\", new DynamicTemplate.Builder().build()))\n            .build();\n    }\n\n    void testAsyncSearch() {\n        new SubmitRequest.Builder()\n            .index(\"test\")\n            .indicesBoost(getBoost().entrySet().stream().findFirst().map(entry -> NamedValue.of(entry.getKey(), entry.getValue())).get())\n            .build();\n    }\n\n    private Map<String, Double> getBoost() {\n        return Map.of(\"myindex\", 2.5);\n    }\n}\n","diff":"@@ -3,0 +3,1 @@\nimport co.elastic.clients.elasticsearch.ElasticsearchClient;\nimport co.elastic.clients.elasticsearch.indices.PutMappingRequest;\n+import co.elastic.clients.util.NamedValue;\nimport co.elastic.clients.elasticsearch._types.mapping.DynamicTemplate;\n@@ -11,1 +12,1 @@\n        esClient.search(s -> s\n            .index(\"*\")\n-           .indicesBoost(Map.of(\"index\", 1.0))\n+           .indicesBoost(NamedValue.of(\"index\", 1.0))\n        , Void.class);\n@@ -18,1 +19,1 @@\n        var request = new PutMappingRequest.Builder()\n            .index(\"test\")\n-           .dynamicTemplates(Map.of(\"strings\", new DynamicTemplate.Builder().build()))\n+           .dynamicTemplates(NamedValue.of(\"strings\", new DynamicTemplate.Builder().build()))\n            .build();\n@@ -25,1 +26,1 @@\n        new SubmitRequest.Builder()\n            .index(\"test\")\n-           .indicesBoost(getBoost())\n+           .indicesBoost(getBoost().entrySet().stream().findFirst().map(entry -> NamedValue.of(entry.getKey(), entry.getValue())).get())\n            .build();\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.elastic.elastic9.UseNamedValueParameters","displayName":"Use NamedValue parameters instead of Map","groupId":"io.moderne.recipe","artifactId":"rewrite-elastic","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_ELASTIC","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

