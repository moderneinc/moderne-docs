---
title: "Use `StandardCharset` constants"
sidebar_label: "Use `StandardCharset` constants"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/usestandardcharset" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use `StandardCharset` constants"}
  description={"Replaces `Charset.forName(java.lang.String)` with the equivalent `StandardCharset` constant. Using the predefined constants is both compile-time safe and avoids the need to handle `UnsupportedEncodingException` for charsets that are guaranteed to exist on every JVM."}
  fqName={"org.openrewrite.staticanalysis.UseStandardCharset"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/UseStandardCharset.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S4719"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.UseStandardCharset"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.UseStandardCharset"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/usestandardcharset.md"}
>

<RecipeHeader.Title>Use `StandardCharset` constants</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `Charset.forName(java.lang.String)` with the equivalent `StandardCharset` constant. Using the predefined constants is both compile-time safe and avoids the need to handle `UnsupportedEncodingException` for charsets that are guaranteed to exist on every JVM.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.nio.charset.Charset;\n\nclass Test {\n    Charset US_ASCII = Charset.forName(\"US-ASCII\");\n    Charset ISO_8859_1 = Charset.forName(\"ISO-8859-1\");\n    Charset UTF_8 = Charset.forName(\"UTF-8\");\n    Charset UTF_16 = Charset.forName(\"UTF-16\");\n    Charset UTF_16BE = Charset.forName(\"UTF-16BE\");\n    Charset UTF_16LE = Charset.forName(\"UTF-16LE\");\n}\n","after":"import java.nio.charset.Charset;\nimport java.nio.charset.StandardCharsets;\n\nclass Test {\n    Charset US_ASCII = StandardCharsets.US_ASCII;\n    Charset ISO_8859_1 = StandardCharsets.ISO_8859_1;\n    Charset UTF_8 = StandardCharsets.UTF_8;\n    Charset UTF_16 = StandardCharsets.UTF_16;\n    Charset UTF_16BE = StandardCharsets.UTF_16BE;\n    Charset UTF_16LE = StandardCharsets.UTF_16LE;\n}\n","diff":"@@ -2,0 +2,1 @@\nimport java.nio.charset.Charset;\n+import java.nio.charset.StandardCharsets;\n\n@@ -4,6 +5,6 @@\n\nclass Test {\n-   Charset US_ASCII = Charset.forName(\"US-ASCII\");\n-   Charset ISO_8859_1 = Charset.forName(\"ISO-8859-1\");\n-   Charset UTF_8 = Charset.forName(\"UTF-8\");\n-   Charset UTF_16 = Charset.forName(\"UTF-16\");\n-   Charset UTF_16BE = Charset.forName(\"UTF-16BE\");\n-   Charset UTF_16LE = Charset.forName(\"UTF-16LE\");\n+   Charset US_ASCII = StandardCharsets.US_ASCII;\n+   Charset ISO_8859_1 = StandardCharsets.ISO_8859_1;\n+   Charset UTF_8 = StandardCharsets.UTF_8;\n+   Charset UTF_16 = StandardCharsets.UTF_16;\n+   Charset UTF_16BE = StandardCharsets.UTF_16BE;\n+   Charset UTF_16LE = StandardCharsets.UTF_16LE;\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.UseStandardCharset","displayName":"Use `StandardCharset` constants","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

