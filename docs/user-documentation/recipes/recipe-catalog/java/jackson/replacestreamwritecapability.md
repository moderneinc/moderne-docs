---
title: "Replace removed `JsonGenerator` capability methods with `StreamWriteCapability`"
sidebar_label: "Replace removed `JsonGenerator` capability methods with `StreamWriteCapability`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/jackson/replacestreamwritecapability" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace removed `JsonGenerator` capability methods with `StreamWriteCapability`"}
  description={"In Jackson 3, `JsonGenerator.canWriteBinaryNatively()` and `canWriteFormattedNumbers()` were removed and replaced with the `StreamWriteCapability` enum. This recipe updates these method calls to use `getWriteCapabilities().isEnabled(StreamWriteCapability.*)` instead."}
  fqName={"org.openrewrite.java.jackson.ReplaceStreamWriteCapability"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/java/org/openrewrite/java/jackson/ReplaceStreamWriteCapability.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["jackson-3"]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.jackson.ReplaceStreamWriteCapability"}
  artifact={"org.openrewrite.recipe:rewrite-jackson"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.jackson.ReplaceStreamWriteCapability"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/jackson/replacestreamwritecapability.md"}
>

<RecipeHeader.Title>Replace removed `JsonGenerator` capability methods with `StreamWriteCapability`</RecipeHeader.Title>

<RecipeHeader.Description>In Jackson 3, `JsonGenerator.canWriteBinaryNatively()` and `canWriteFormattedNumbers()` were removed and replaced with the `StreamWriteCapability` enum. This recipe updates these method calls to use `getWriteCapabilities().isEnabled(StreamWriteCapability.*)` instead.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import com.fasterxml.jackson.core.JsonGenerator;\n\nclass Test {\n    boolean checkCapability(JsonGenerator generator) {\n        return generator.canWriteBinaryNatively();\n    }\n}\n","after":"import com.fasterxml.jackson.core.JsonGenerator;\nimport com.fasterxml.jackson.core.StreamWriteCapability;\n\nclass Test {\n    boolean checkCapability(JsonGenerator generator) {\n        return generator.getWriteCapabilities().isEnabled(StreamWriteCapability.CAN_WRITE_BINARY_NATIVELY);\n    }\n}\n","diff":"@@ -2,0 +2,1 @@\nimport com.fasterxml.jackson.core.JsonGenerator;\n+import com.fasterxml.jackson.core.StreamWriteCapability;\n\n@@ -5,1 +6,1 @@\nclass Test {\n    boolean checkCapability(JsonGenerator generator) {\n-       return generator.canWriteBinaryNatively();\n+       return generator.getWriteCapabilities().isEnabled(StreamWriteCapability.CAN_WRITE_BINARY_NATIVELY);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.jackson.ReplaceStreamWriteCapability","displayName":"Replace removed `JsonGenerator` capability methods with `StreamWriteCapability`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-jackson","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

