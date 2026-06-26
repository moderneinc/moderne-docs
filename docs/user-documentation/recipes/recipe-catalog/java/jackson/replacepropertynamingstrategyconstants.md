---
title: "Replace deprecated `PropertyNamingStrategy` inner classes and constants"
sidebar_label: "Replace deprecated `PropertyNamingStrategy` inner classes and constants"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/jackson/replacepropertynamingstrategyconstants" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace deprecated `PropertyNamingStrategy` inner classes and constants"}
  description={"Replace usages of deprecated `PropertyNamingStrategy` inner classes and constants with their `PropertyNamingStrategies` equivalents, introduced in Jackson 2.12."}
  fqName={"org.openrewrite.java.jackson.ReplacePropertyNamingStrategyConstants"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/resources/META-INF/rewrite/jackson-best-practices.yml"}
/>

<RecipeHeader
  displayName={"Replace deprecated `PropertyNamingStrategy` inner classes and constants"}
  description={"Replace usages of deprecated `PropertyNamingStrategy` inner classes and constants with their `PropertyNamingStrategies` equivalents, introduced in Jackson 2.12."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["jackson-2"]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.jackson.ReplacePropertyNamingStrategyConstants"}
  artifact={"org.openrewrite.recipe:rewrite-jackson"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.jackson.ReplacePropertyNamingStrategyConstants"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/jackson/replacepropertynamingstrategyconstants.md"}
/>

<RecipeList recipes={[{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Replace constant with another constant","href":"java/replaceconstantwithanotherconstant"},{"name":"Replace constant with another constant","href":"java/replaceconstantwithanotherconstant"},{"name":"Replace constant with another constant","href":"java/replaceconstantwithanotherconstant"},{"name":"Replace constant with another constant","href":"java/replaceconstantwithanotherconstant"},{"name":"Replace constant with another constant","href":"java/replaceconstantwithanotherconstant"},{"name":"Replace constant with another constant","href":"java/replaceconstantwithanotherconstant"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import com.fasterxml.jackson.databind.PropertyNamingStrategy;\n\nclass Test {\n    PropertyNamingStrategy.SnakeCaseStrategy strategy = new PropertyNamingStrategy.SnakeCaseStrategy();\n}\n","after":"import com.fasterxml.jackson.databind.PropertyNamingStrategies.SnakeCaseStrategy;\n\nclass Test {\n    SnakeCaseStrategy strategy = new SnakeCaseStrategy();\n}\n","diff":"@@ -1,1 +1,1 @@\n-import com.fasterxml.jackson.databind.PropertyNamingStrategy;\n+import com.fasterxml.jackson.databind.PropertyNamingStrategies.SnakeCaseStrategy;\n\n@@ -4,1 +4,1 @@\n\nclass Test {\n-   PropertyNamingStrategy.SnakeCaseStrategy strategy = new PropertyNamingStrategy.SnakeCaseStrategy();\n+   SnakeCaseStrategy strategy = new SnakeCaseStrategy();\n}\n","newFile":false}]},{"variants":[{"language":"java","before":"import com.fasterxml.jackson.databind.PropertyNamingStrategy;\n\nclass Test {\n    PropertyNamingStrategy.SnakeCaseStrategy strategy = new PropertyNamingStrategy.SnakeCaseStrategy();\n}\n","after":"import com.fasterxml.jackson.databind.PropertyNamingStrategies.SnakeCaseStrategy;\n\nclass Test {\n    SnakeCaseStrategy strategy = new SnakeCaseStrategy();\n}\n","diff":"@@ -1,1 +1,1 @@\n-import com.fasterxml.jackson.databind.PropertyNamingStrategy;\n+import com.fasterxml.jackson.databind.PropertyNamingStrategies.SnakeCaseStrategy;\n\n@@ -4,1 +4,1 @@\n\nclass Test {\n-   PropertyNamingStrategy.SnakeCaseStrategy strategy = new PropertyNamingStrategy.SnakeCaseStrategy();\n+   SnakeCaseStrategy strategy = new SnakeCaseStrategy();\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.jackson.ReplacePropertyNamingStrategyConstants","displayName":"Replace deprecated `PropertyNamingStrategy` inner classes and constants","groupId":"org.openrewrite.recipe","artifactId":"rewrite-jackson","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

