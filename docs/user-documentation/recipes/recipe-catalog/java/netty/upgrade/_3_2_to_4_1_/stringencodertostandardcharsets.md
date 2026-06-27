---
title: "Migrate StringEncoder(String) to StringEncoder(StandardCharsets)"
sidebar_label: "Migrate StringEncoder(String) to StringEncoder(StandardCharsets)"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/netty/upgrade/_3_2_to_4_1_/stringencodertostandardcharsets" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate StringEncoder(String) to StringEncoder(StandardCharsets)"}
  description={"Replaces `new StringEncoder(charsetName)` with `new StringEncoder(StandardCharsets.<constant>)` for all standard charsets (US-ASCII, ISO-8859-1, UTF-8, UTF-16BE, UTF-16LE, UTF-16)."}
  fqName={"org.openrewrite.java.netty.upgrade._3_2_to_4_1_.StringEncoderToStandardCharsets"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-netty/blob/main/src/main/java/org/openrewrite/java/netty/upgrade/_3_2_to_4_1_/StringEncoderToStandardCharsets.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.netty.upgrade._3_2_to_4_1_.StringEncoderToStandardCharsets"}
  artifact={"org.openrewrite.recipe:rewrite-netty"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.netty.upgrade._3_2_to_4_1_.StringEncoderToStandardCharsets"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/netty/upgrade/_3_2_to_4_1_/stringencodertostandardcharsets.md"}
>

<RecipeHeader.Title>Migrate StringEncoder(String) to StringEncoder(StandardCharsets)</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `new StringEncoder(charsetName)` with `new StringEncoder(StandardCharsets.<constant>)` for all standard charsets (US-ASCII, ISO-8859-1, UTF-8, UTF-16BE, UTF-16LE, UTF-16).</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.jboss.netty.handler.codec.string.StringEncoder;\n\nclass Test {\n    public void test() {\n        new StringEncoder(\"UTF-8\");\n    }\n}\n","after":"import io.netty.handler.codec.string.StringEncoder;\n\nimport java.nio.charset.StandardCharsets;\n\nclass Test {\n    public void test() {\n        new StringEncoder(StandardCharsets.UTF_8);\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.jboss.netty.handler.codec.string.StringEncoder;\n+import io.netty.handler.codec.string.StringEncoder;\n\n@@ -3,0 +3,2 @@\nimport org.jboss.netty.handler.codec.string.StringEncoder;\n\n+import java.nio.charset.StandardCharsets;\n+\nclass Test {\n@@ -5,1 +7,1 @@\nclass Test {\n    public void test() {\n-       new StringEncoder(\"UTF-8\");\n+       new StringEncoder(StandardCharsets.UTF_8);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.netty.upgrade._3_2_to_4_1_.StringEncoderToStandardCharsets","displayName":"Migrate StringEncoder(String) to StringEncoder(StandardCharsets)","groupId":"org.openrewrite.recipe","artifactId":"rewrite-netty","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_NETTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

