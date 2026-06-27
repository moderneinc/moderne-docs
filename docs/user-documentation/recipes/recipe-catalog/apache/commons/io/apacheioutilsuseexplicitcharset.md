---
title: "Use IOUtils method that include  their charset encoding"
sidebar_label: "Use IOUtils method that include  their charset encoding"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/commons/io/apacheioutilsuseexplicitcharset" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use IOUtils method that include  their charset encoding"}
  description={"Use `IOUtils` method invocations that include the charset encoding instead of using the deprecated versions that do not include a charset encoding. (e.g. converts `IOUtils.readLines(inputStream)` to `IOUtils.readLines(inputStream, StandardCharsets.UTF_8)`."}
  fqName={"org.openrewrite.apache.commons.io.ApacheIOUtilsUseExplicitCharset"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/commons/io/ApacheIOUtilsUseExplicitCharset.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["apache","commons"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.apache.commons.io.ApacheIOUtilsUseExplicitCharset"}
  artifact={"org.openrewrite.recipe:rewrite-apache"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.apache.commons.io.ApacheIOUtilsUseExplicitCharset"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/commons/io/apacheioutilsuseexplicitcharset.md"}
>

<RecipeHeader.Title>Use IOUtils method that include  their charset encoding</RecipeHeader.Title>

<RecipeHeader.Description>Use `IOUtils` method invocations that include the charset encoding instead of using the deprecated versions that do not include a charset encoding. (e.g. converts `IOUtils.readLines(inputStream)` to `IOUtils.readLines(inputStream, StandardCharsets.UTF_8)`.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"encoding","required":false,"description":"The default encoding to use, must be a standard charset.","example":"UTF_8"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"encoding","value":"null"}],"variants":[{"language":"java","before":"import org.apache.commons.io.IOUtils;\nimport java.io.InputStream;\nimport java.io.OutputStream;\nimport java.io.Reader;\nimport java.io.Writer;\nimport java.net.URI;\nimport java.net.URL;\n\nclass T {\n    InputStream inputStream;\n    OutputStream outputStream;\n    Reader reader;\n    Writer writer;\n    CharSequence charSequence;\n    String someString;\n    byte[] bytes;\n    URI uri;\n    URL url;\n    char[] chars;\n    StringBuffer stringBuffer;\n\n    void flex() {\n        IOUtils.copy(inputStream, writer);\n        IOUtils.copy(reader, outputStream);\n        IOUtils.readLines(inputStream);\n        IOUtils.toByteArray(someString);\n        IOUtils.toByteArray(reader);\n        IOUtils.toCharArray(inputStream);\n        IOUtils.toInputStream(charSequence);\n        IOUtils.toInputStream(\"Test\");\n        IOUtils.toString(\"Test\".getBytes());\n        IOUtils.toString(inputStream);\n        IOUtils.toString(uri);\n        IOUtils.toString(url);\n        IOUtils.write(bytes, writer);\n        IOUtils.write(chars, outputStream);\n        IOUtils.write(charSequence, outputStream);\n        IOUtils.write(someString, outputStream);\n        IOUtils.write(stringBuffer, outputStream);\n    }\n}\n","after":"import org.apache.commons.io.IOUtils;\nimport java.io.InputStream;\nimport java.io.OutputStream;\nimport java.io.Reader;\nimport java.io.Writer;\nimport java.net.URI;\nimport java.net.URL;\nimport java.nio.charset.StandardCharsets;\n\nclass T {\n    InputStream inputStream;\n    OutputStream outputStream;\n    Reader reader;\n    Writer writer;\n    CharSequence charSequence;\n    String someString;\n    byte[] bytes;\n    URI uri;\n    URL url;\n    char[] chars;\n    StringBuffer stringBuffer;\n\n    void flex() {\n        IOUtils.copy(inputStream, writer, StandardCharsets.UTF_8);\n        IOUtils.copy(reader, outputStream, StandardCharsets.UTF_8);\n        IOUtils.readLines(inputStream, StandardCharsets.UTF_8);\n        someString.getBytes(StandardCharsets.UTF_8);\n        IOUtils.toByteArray(reader, StandardCharsets.UTF_8);\n        IOUtils.toCharArray(inputStream, StandardCharsets.UTF_8);\n        IOUtils.toInputStream(charSequence, StandardCharsets.UTF_8);\n        IOUtils.toInputStream(\"Test\", StandardCharsets.UTF_8);\n        IOUtils.toString(\"Test\".getBytes(), StandardCharsets.UTF_8);\n        IOUtils.toString(inputStream, StandardCharsets.UTF_8);\n        IOUtils.toString(uri, StandardCharsets.UTF_8);\n        IOUtils.toString(url, StandardCharsets.UTF_8);\n        IOUtils.write(bytes, writer, StandardCharsets.UTF_8);\n        IOUtils.write(chars, outputStream, StandardCharsets.UTF_8);\n        IOUtils.write(charSequence, outputStream, StandardCharsets.UTF_8);\n        IOUtils.write(someString, outputStream, StandardCharsets.UTF_8);\n        IOUtils.write(stringBuffer, outputStream, StandardCharsets.UTF_8);\n    }\n}\n","diff":"@@ -8,0 +8,1 @@\nimport java.net.URI;\nimport java.net.URL;\n+import java.nio.charset.StandardCharsets;\n\n@@ -23,17 +24,17 @@\n\n    void flex() {\n-       IOUtils.copy(inputStream, writer);\n-       IOUtils.copy(reader, outputStream);\n-       IOUtils.readLines(inputStream);\n-       IOUtils.toByteArray(someString);\n-       IOUtils.toByteArray(reader);\n-       IOUtils.toCharArray(inputStream);\n-       IOUtils.toInputStream(charSequence);\n-       IOUtils.toInputStream(\"Test\");\n-       IOUtils.toString(\"Test\".getBytes());\n-       IOUtils.toString(inputStream);\n-       IOUtils.toString(uri);\n-       IOUtils.toString(url);\n-       IOUtils.write(bytes, writer);\n-       IOUtils.write(chars, outputStream);\n-       IOUtils.write(charSequence, outputStream);\n-       IOUtils.write(someString, outputStream);\n-       IOUtils.write(stringBuffer, outputStream);\n+       IOUtils.copy(inputStream, writer, StandardCharsets.UTF_8);\n+       IOUtils.copy(reader, outputStream, StandardCharsets.UTF_8);\n+       IOUtils.readLines(inputStream, StandardCharsets.UTF_8);\n+       someString.getBytes(StandardCharsets.UTF_8);\n+       IOUtils.toByteArray(reader, StandardCharsets.UTF_8);\n+       IOUtils.toCharArray(inputStream, StandardCharsets.UTF_8);\n+       IOUtils.toInputStream(charSequence, StandardCharsets.UTF_8);\n+       IOUtils.toInputStream(\"Test\", StandardCharsets.UTF_8);\n+       IOUtils.toString(\"Test\".getBytes(), StandardCharsets.UTF_8);\n+       IOUtils.toString(inputStream, StandardCharsets.UTF_8);\n+       IOUtils.toString(uri, StandardCharsets.UTF_8);\n+       IOUtils.toString(url, StandardCharsets.UTF_8);\n+       IOUtils.write(bytes, writer, StandardCharsets.UTF_8);\n+       IOUtils.write(chars, outputStream, StandardCharsets.UTF_8);\n+       IOUtils.write(charSequence, outputStream, StandardCharsets.UTF_8);\n+       IOUtils.write(someString, outputStream, StandardCharsets.UTF_8);\n+       IOUtils.write(stringBuffer, outputStream, StandardCharsets.UTF_8);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.apache.commons.io.ApacheIOUtilsUseExplicitCharset","displayName":"Use IOUtils method that include  their charset encoding","groupId":"org.openrewrite.recipe","artifactId":"rewrite-apache","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

