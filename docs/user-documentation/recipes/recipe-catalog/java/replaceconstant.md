---
title: "Replace constant with literal value"
sidebar_label: "Replace constant with literal value"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/replaceconstant" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace constant with literal value"}
  description={"Replace a named constant with a literal value when you wish to remove the old constant. A `String` literal must include escaped quotes."}
  fqName={"org.openrewrite.java.ReplaceConstant"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ReplaceConstant.java"}
/>

<RecipeHeader
  displayName={"Replace constant with literal value"}
  description={"Replace a named constant with a literal value when you wish to remove the old constant. A `String` literal must include escaped quotes."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.ReplaceConstant"}
  artifact={"org.openrewrite:rewrite-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.ReplaceConstant"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/replaceconstant.md"}
/>

<OptionsTable options={[{"type":"String","name":"owningType","required":true,"description":"The target type in which the constant to be replaced is defined.","example":"com.google.common.base.Charsets"},{"type":"String","name":"constantName","required":true,"description":"The name of the constant field to replace.","example":"UTF_8"},{"type":"String","name":"literalValue","required":true,"description":"The literal value to replace.","example":"UTF_8"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"owningType","value":"com.google.common.base.Charsets"},{"parameter":"constantName","value":"UTF_8"},{"parameter":"literalValue","value":"\"UTF_8\""}],"variants":[{"language":"java","before":"import com.google.common.base.Charsets;\nclass Test {\n    Object o = Charsets.UTF_8;\n}\n","after":"class Test {\n    Object o = \"UTF_8\";\n}\n","diff":"@@ -1,1 +1,0 @@\n-import com.google.common.base.Charsets;\nclass Test {\n@@ -3,1 +2,1 @@\nimport com.google.common.base.Charsets;\nclass Test {\n-   Object o = Charsets.UTF_8;\n+   Object o = \"UTF_8\";\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.ReplaceConstant","displayName":"Replace constant with literal value","groupId":"org.openrewrite","artifactId":"rewrite-java","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"owningType=com.google.common.base.Charsets\" --recipe-option \"constantName=UTF_8\" --recipe-option \"literalValue=UTF_8\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

