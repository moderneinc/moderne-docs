---
title: "Add a spring configuration property"
sidebar_label: "Add a spring configuration property"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/addspringproperty" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add a spring configuration property"}
  description={"Add a spring configuration property to a configuration file if it does not already exist in that file."}
  fqName={"org.openrewrite.java.spring.AddSpringProperty"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/AddSpringProperty.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.AddSpringProperty"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.AddSpringProperty"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/addspringproperty.md"}
>

<RecipeHeader.Title>Add a spring configuration property</RecipeHeader.Title>

<RecipeHeader.Description>Add a spring configuration property to a configuration file if it does not already exist in that file.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"property","required":true,"description":"The property key to add.","example":"management.metrics.enable.process.files"},{"type":"String","name":"value","required":true,"description":"The value of the new property key.","example":"true"},{"type":"String","name":"comment","required":false,"description":"A comment that will be added to the new property.","example":"This is a comment"},{"type":"List","name":"pathExpressions","required":false,"description":"Each value in this list represents a glob expression that is used to match which files will be modified. If this value is not present, this recipe will query the execution context for reasonable defaults. (\"**/application.yml\", \"**/application.yml\", and \"**/application.properties\".","example":"[\"**/application.yml\"]"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"property","value":"server.servlet.path"},{"parameter":"value","value":"/tmp/my-server-path"},{"parameter":"comment","value":"null"},{"parameter":"pathExpressions","value":"List.of(\"*\")"}],"variants":[{"language":"properties","before":"server.port=8080\n","after":"server.port=8080\nserver.servlet.path=/tmp/my-server-path\n","diff":"@@ -2,0 +2,1 @@\nserver.port=8080\n+server.servlet.path=/tmp/my-server-path\n\n","newFile":false},{"language":"yaml","before":"server:\n  port: 8080\n","after":"server:\n  port: 8080\n  servlet:\n    path: /tmp/my-server-path\n","diff":"@@ -3,0 +3,2 @@\nserver:\n  port: 8080\n+ servlet:\n+   path: /tmp/my-server-path\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.AddSpringProperty","displayName":"Add a spring configuration property","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":true,"cliOptions":" --recipe-option \"property=management.metrics.enable.process.files\" --recipe-option \"value=true\" --recipe-option \"comment=This is a comment\" --recipe-option \"pathExpressions=[\"**/application.yml\"]\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

