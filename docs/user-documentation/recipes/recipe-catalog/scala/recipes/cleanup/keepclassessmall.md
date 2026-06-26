---
title: "Keep classes small (max 30 members)"
sidebar_label: "Keep classes small (max 30 members)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Keep classes small (max 30 members)"}
  description={"Finds classes with more than 30 members. Large classes are harder to maintain; consider splitting into smaller classes."}
  fqName={"org.openrewrite.scala.recipes.cleanup.KeepClassesSmall"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Keep classes small (max 30 members)"}
  description={"Finds classes with more than 30 members. Large classes are harder to maintain; consider splitting into smaller classes."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.scala.recipes.cleanup.KeepClassesSmall"}
  artifact={"io.moderne.recipe:recipes-scala"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.scala.recipes.cleanup.KeepClassesSmall"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/keepclassessmall.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"scala","before":"class BigService {\n    val f1 = 1\n    val f2 = 2\n    val f3 = 3\n    val f4 = 4\n    val f5 = 5\n    val f6 = 6\n    val f7 = 7\n    val f8 = 8\n    val f9 = 9\n    val f10 = 10\n    val f11 = 11\n    val f12 = 12\n    val f13 = 13\n    val f14 = 14\n    val f15 = 15\n    val f16 = 16\n    val f17 = 17\n    val f18 = 18\n    val f19 = 19\n    val f20 = 20\n    val f21 = 21\n    val f22 = 22\n    val f23 = 23\n    val f24 = 24\n    val f25 = 25\n    val f26 = 26\n    val f27 = 27\n    val f28 = 28\n    val f29 = 29\n    val f30 = 30\n    val f31 = 31\n}\n","after":"/*~~(Class has too many members; consider splitting)~~>*/class BigService {\n    val f1 = 1\n    val f2 = 2\n    val f3 = 3\n    val f4 = 4\n    val f5 = 5\n    val f6 = 6\n    val f7 = 7\n    val f8 = 8\n    val f9 = 9\n    val f10 = 10\n    val f11 = 11\n    val f12 = 12\n    val f13 = 13\n    val f14 = 14\n    val f15 = 15\n    val f16 = 16\n    val f17 = 17\n    val f18 = 18\n    val f19 = 19\n    val f20 = 20\n    val f21 = 21\n    val f22 = 22\n    val f23 = 23\n    val f24 = 24\n    val f25 = 25\n    val f26 = 26\n    val f27 = 27\n    val f28 = 28\n    val f29 = 29\n    val f30 = 30\n    val f31 = 31\n}\n","diff":"@@ -1,1 +1,1 @@\n-class BigService {\n+/*~~(Class has too many members; consider splitting)~~>*/class BigService {\n    val f1 = 1\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.scala.recipes.cleanup.KeepClassesSmall","displayName":"Keep classes small (max 30 members)","groupId":"io.moderne.recipe","artifactId":"recipes-scala","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_SCALA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

