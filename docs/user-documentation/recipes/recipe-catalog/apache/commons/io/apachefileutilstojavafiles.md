---
title: "Prefer `java.nio.file.Files`"
sidebar_label: "Prefer `java.nio.file.Files`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/commons/io/apachefileutilstojavafiles" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer `java.nio.file.Files`"}
  description={"Prefer the Java standard library's `java.nio.file.Files` over third-party usage of apache's `apache.commons.io.FileUtils`."}
  fqName={"org.openrewrite.apache.commons.io.ApacheFileUtilsToJavaFiles"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/commons/io/ApacheFileUtilsToJavaFiles.java"}
/>

<RecipeHeader
  displayName={"Prefer `java.nio.file.Files`"}
  description={"Prefer the Java standard library's `java.nio.file.Files` over third-party usage of apache's `apache.commons.io.FileUtils`."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["apache","commons"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.apache.commons.io.ApacheFileUtilsToJavaFiles"}
  artifact={"org.openrewrite.recipe:rewrite-apache"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.apache.commons.io.ApacheFileUtilsToJavaFiles"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/commons/io/apachefileutilstojavafiles.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.commons.io.FileUtils;\n\nimport java.io.File;\nimport java.nio.charset.Charset;\nimport java.util.List;\n\nclass A {\n    byte[] readFileBytes(File file) {\n        return FileUtils.readFileToByteArray(file);\n    }\n    List<String> readLines(File file) {\n        return FileUtils.readLines(file);\n    }\n    List<String> readLinesWithCharset(File file, Charset charset) {\n        return FileUtils.readLines(file, charset);\n    }\n    List<String> readLinesWithCharsetId(File file) {\n        return FileUtils.readLines(file, \"UTF_8\");\n    }\n}\n","after":"import java.io.File;\nimport java.nio.charset.Charset;\nimport java.nio.file.Files;\nimport java.util.List;\n\nclass A {\n    byte[] readFileBytes(File file) {\n        return Files.readAllBytes(file.toPath());\n    }\n    List<String> readLines(File file) {\n        return Files.readAllLines(file.toPath());\n    }\n    List<String> readLinesWithCharset(File file, Charset charset) {\n        return Files.readAllLines(file.toPath(), charset);\n    }\n    List<String> readLinesWithCharsetId(File file) {\n        return Files.readAllLines(file.toPath(), Charset.forName(\"UTF_8\"));\n    }\n}\n","diff":"@@ -1,2 +1,0 @@\n-import org.apache.commons.io.FileUtils;\n-\nimport java.io.File;\n@@ -5,0 +3,1 @@\nimport java.io.File;\nimport java.nio.charset.Charset;\n+import java.nio.file.Files;\nimport java.util.List;\n@@ -9,1 +8,1 @@\nclass A {\n    byte[] readFileBytes(File file) {\n-       return FileUtils.readFileToByteArray(file);\n+       return Files.readAllBytes(file.toPath());\n    }\n@@ -12,1 +11,1 @@\n    }\n    List<String> readLines(File file) {\n-       return FileUtils.readLines(file);\n+       return Files.readAllLines(file.toPath());\n    }\n@@ -15,1 +14,1 @@\n    }\n    List<String> readLinesWithCharset(File file, Charset charset) {\n-       return FileUtils.readLines(file, charset);\n+       return Files.readAllLines(file.toPath(), charset);\n    }\n@@ -18,1 +17,1 @@\n    }\n    List<String> readLinesWithCharsetId(File file) {\n-       return FileUtils.readLines(file, \"UTF_8\");\n+       return Files.readAllLines(file.toPath(), Charset.forName(\"UTF_8\"));\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.apache.commons.io.ApacheFileUtilsToJavaFiles","displayName":"Prefer `java.nio.file.Files`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-apache","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

