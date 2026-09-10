---
title: "Apache Commons best practices"
sidebar_label: "Apache Commons best practices"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/commons/apachecommonsbestpractices" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Apache Commons best practices"}
  description={"Apply best practices to code that uses [Apache Commons](https://commons.apache.org/) libraries: migrate off the end-of-life Commons Lang 2.x, Commons Collections 3.x and Commons Math 2.x major versions, correct the `commons-io` coordinates, replace deprecated APIs with their supported replacements, make character encodings explicit, and prefer the Java standard library where it now offers an equivalent."}
  fqName={"org.openrewrite.apache.commons.ApacheCommonsBestPractices"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-commons-best-practices.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["commons","apache"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.apache.commons.ApacheCommonsBestPractices"}
  artifact={"org.openrewrite.recipe:rewrite-apache"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.apache.commons.ApacheCommonsBestPractices"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/commons/apachecommonsbestpractices.md"}
>

<RecipeHeader.Title>Apache Commons best practices</RecipeHeader.Title>

<RecipeHeader.Description>Apply best practices to code that uses [Apache Commons](https://commons.apache.org/) libraries: migrate off the end-of-life Commons Lang 2.x, Commons Collections 3.x and Commons Math 2.x major versions, correct the `commons-io` coordinates, replace deprecated APIs with their supported replacements, make character encodings explicit, and prefer the Java standard library where it now offers an equivalent.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrates to Apache Commons Collections 4.x","href":"/user-documentation/recipes/recipe-catalog/apache/commons/collections/upgradeapachecommonscollections_3_4/"},{"name":"Migrates to Apache Commons Lang 3.x","href":"/user-documentation/recipes/recipe-catalog/apache/commons/lang/upgradeapachecommonslang_2_3/"},{"name":"Migrates to Apache Commons Math 3.x","href":"/user-documentation/recipes/recipe-catalog/apache/commons/math/upgradeapachecommonsmath_2_3/"},{"name":"Relocate `org.apache.commons:commons-io` to `commons-io:commons-io`","href":"/user-documentation/recipes/recipe-catalog/apache/commons/io/relocateapachecommonsio/"},{"name":"Use IOUtils method that include  their charset encoding","href":"/user-documentation/recipes/recipe-catalog/apache/commons/io/apacheioutilsuseexplicitcharset/"},{"name":"Migrate deprecated SystemUtils constants","href":"/user-documentation/recipes/recipe-catalog/apache/commons/lang3/migratesystemutilsdeprecations/"},{"name":"Prefer the Java standard library instead of Apache Commons","href":"/user-documentation/recipes/recipe-catalog/apache/commons/preferjavastandardlibrary/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.commons.io.IOUtils;\nimport org.apache.commons.lang3.SystemUtils;\n\nimport java.io.InputStream;\n\nclass Test {\n    String lineSeparator = SystemUtils.LINE_SEPARATOR;\n\n    String read(InputStream in) throws Exception {\n        return IOUtils.toString(in);\n    }\n}\n","after":"import org.apache.commons.io.IOUtils;\n\nimport java.io.InputStream;\nimport java.nio.charset.StandardCharsets;\n\nclass Test {\n    String lineSeparator = System.lineSeparator();\n\n    String read(InputStream in) throws Exception {\n        return IOUtils.toString(in, StandardCharsets.UTF_8);\n    }\n}\n","diff":"@@ -2,1 +2,0 @@\nimport org.apache.commons.io.IOUtils;\n-import org.apache.commons.lang3.SystemUtils;\n\n@@ -5,0 +4,1 @@\n\nimport java.io.InputStream;\n+import java.nio.charset.StandardCharsets;\n\n@@ -7,1 +7,1 @@\n\nclass Test {\n-   String lineSeparator = SystemUtils.LINE_SEPARATOR;\n+   String lineSeparator = System.lineSeparator();\n\n@@ -10,1 +10,1 @@\n\n    String read(InputStream in) throws Exception {\n-       return IOUtils.toString(in);\n+       return IOUtils.toString(in, StandardCharsets.UTF_8);\n    }\n","newFile":false}]},{"variants":[{"language":"java","before":"import org.apache.commons.io.IOUtils;\nimport org.apache.commons.lang3.SystemUtils;\n\nimport java.io.InputStream;\n\nclass Test {\n    String lineSeparator = SystemUtils.LINE_SEPARATOR;\n\n    String read(InputStream in) throws Exception {\n        return IOUtils.toString(in);\n    }\n}\n","after":"import org.apache.commons.io.IOUtils;\n\nimport java.io.InputStream;\nimport java.nio.charset.StandardCharsets;\n\nclass Test {\n    String lineSeparator = System.lineSeparator();\n\n    String read(InputStream in) throws Exception {\n        return IOUtils.toString(in, StandardCharsets.UTF_8);\n    }\n}\n","diff":"@@ -2,1 +2,0 @@\nimport org.apache.commons.io.IOUtils;\n-import org.apache.commons.lang3.SystemUtils;\n\n@@ -5,0 +4,1 @@\n\nimport java.io.InputStream;\n+import java.nio.charset.StandardCharsets;\n\n@@ -7,1 +7,1 @@\n\nclass Test {\n-   String lineSeparator = SystemUtils.LINE_SEPARATOR;\n+   String lineSeparator = System.lineSeparator();\n\n@@ -10,1 +10,1 @@\n\n    String read(InputStream in) throws Exception {\n-       return IOUtils.toString(in);\n+       return IOUtils.toString(in, StandardCharsets.UTF_8);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.apache.commons.ApacheCommonsBestPractices","displayName":"Apache Commons best practices","groupId":"org.openrewrite.recipe","artifactId":"rewrite-apache","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

