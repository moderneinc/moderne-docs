---
title: "Prefer `java.nio.charset.StandardCharsets`"
sidebar_label: "Prefer `java.nio.charset.StandardCharsets`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/commons/io/usestandardcharsets" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer `java.nio.charset.StandardCharsets`"}
  description={"Prefer the Java standard library's `java.nio.charset.StandardCharsets` over third-party usage of apache's `org.apache.commons.io.Charsets`."}
  fqName={"org.openrewrite.apache.commons.io.UseStandardCharsets"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-commons-io.yml"}
/>

<RecipeHeader
  displayName={"Prefer `java.nio.charset.StandardCharsets`"}
  description={"Prefer the Java standard library's `java.nio.charset.StandardCharsets` over third-party usage of apache's `org.apache.commons.io.Charsets`."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["apache","commons"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.apache.commons.io.UseStandardCharsets"}
  artifact={"org.openrewrite.recipe:rewrite-apache"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.apache.commons.io.UseStandardCharsets"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/commons/io/usestandardcharsets.md"}
/>

<RecipeList recipes={[{"name":"Replace constant with another constant","href":"java/replaceconstantwithanotherconstant"},{"name":"Replace constant with another constant","href":"java/replaceconstantwithanotherconstant"},{"name":"Replace constant with another constant","href":"java/replaceconstantwithanotherconstant"},{"name":"Replace constant with another constant","href":"java/replaceconstantwithanotherconstant"},{"name":"Replace constant with another constant","href":"java/replaceconstantwithanotherconstant"},{"name":"Replace constant with another constant","href":"java/replaceconstantwithanotherconstant"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.nio.charset.Charset;\nimport org.apache.commons.io.Charsets;\n\nclass A {\n     Charset iso88591 = Charsets.ISO_8859_1;\n     Charset usAscii = Charsets.US_ASCII;\n     Charset utf16 = Charsets.UTF_16;\n     Charset utf16be = Charsets.UTF_16BE;\n     Charset utf16le = Charsets.UTF_16LE;\n     Charset utf8 = Charsets.UTF_8;\n}\n","after":"import java.nio.charset.Charset;\nimport java.nio.charset.StandardCharsets;\n\nclass A {\n     Charset iso88591 = StandardCharsets.ISO_8859_1;\n     Charset usAscii = StandardCharsets.US_ASCII;\n     Charset utf16 = StandardCharsets.UTF_16;\n     Charset utf16be = StandardCharsets.UTF_16BE;\n     Charset utf16le = StandardCharsets.UTF_16LE;\n     Charset utf8 = StandardCharsets.UTF_8;\n}\n","diff":"@@ -2,1 +2,1 @@\nimport java.nio.charset.Charset;\n-import org.apache.commons.io.Charsets;\n+import java.nio.charset.StandardCharsets;\n\n@@ -5,6 +5,6 @@\n\nclass A {\n-    Charset iso88591 = Charsets.ISO_8859_1;\n-    Charset usAscii = Charsets.US_ASCII;\n-    Charset utf16 = Charsets.UTF_16;\n-    Charset utf16be = Charsets.UTF_16BE;\n-    Charset utf16le = Charsets.UTF_16LE;\n-    Charset utf8 = Charsets.UTF_8;\n+    Charset iso88591 = StandardCharsets.ISO_8859_1;\n+    Charset usAscii = StandardCharsets.US_ASCII;\n+    Charset utf16 = StandardCharsets.UTF_16;\n+    Charset utf16be = StandardCharsets.UTF_16BE;\n+    Charset utf16le = StandardCharsets.UTF_16LE;\n+    Charset utf8 = StandardCharsets.UTF_8;\n}\n","newFile":false}]},{"variants":[{"language":"java","before":"import java.nio.charset.Charset;\nimport org.apache.commons.io.Charsets;\n\nclass A {\n     Charset iso88591 = Charsets.ISO_8859_1;\n     Charset usAscii = Charsets.US_ASCII;\n     Charset utf16 = Charsets.UTF_16;\n     Charset utf16be = Charsets.UTF_16BE;\n     Charset utf16le = Charsets.UTF_16LE;\n     Charset utf8 = Charsets.UTF_8;\n}\n","after":"import java.nio.charset.Charset;\nimport java.nio.charset.StandardCharsets;\n\nclass A {\n     Charset iso88591 = StandardCharsets.ISO_8859_1;\n     Charset usAscii = StandardCharsets.US_ASCII;\n     Charset utf16 = StandardCharsets.UTF_16;\n     Charset utf16be = StandardCharsets.UTF_16BE;\n     Charset utf16le = StandardCharsets.UTF_16LE;\n     Charset utf8 = StandardCharsets.UTF_8;\n}\n","diff":"@@ -2,1 +2,1 @@\nimport java.nio.charset.Charset;\n-import org.apache.commons.io.Charsets;\n+import java.nio.charset.StandardCharsets;\n\n@@ -5,6 +5,6 @@\n\nclass A {\n-    Charset iso88591 = Charsets.ISO_8859_1;\n-    Charset usAscii = Charsets.US_ASCII;\n-    Charset utf16 = Charsets.UTF_16;\n-    Charset utf16be = Charsets.UTF_16BE;\n-    Charset utf16le = Charsets.UTF_16LE;\n-    Charset utf8 = Charsets.UTF_8;\n+    Charset iso88591 = StandardCharsets.ISO_8859_1;\n+    Charset usAscii = StandardCharsets.US_ASCII;\n+    Charset utf16 = StandardCharsets.UTF_16;\n+    Charset utf16be = StandardCharsets.UTF_16BE;\n+    Charset utf16le = StandardCharsets.UTF_16LE;\n+    Charset utf8 = StandardCharsets.UTF_8;\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.apache.commons.io.UseStandardCharsets","displayName":"Prefer `java.nio.charset.StandardCharsets`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-apache","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

