---
title: "Find class quality metrics"
sidebar_label: "Find class quality metrics"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find class quality metrics"}
  description={"Compute per-class code quality metrics including WMC, LCOM4, TCC, CBO, and maintainability index."}
  fqName={"io.moderne.prethink.quality.FindClassMetrics"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.quality.FindClassMetrics"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.quality.FindClassMetrics"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/quality/findclassmetrics.md"}
  moderneOnly
>

<RecipeHeader.Title>Find class quality metrics</RecipeHeader.Title>

<RecipeHeader.Description>Compute per-class code quality metrics including WMC, LCOM4, TCC, CBO, and maintainability index.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"unchanged":{"language":"java","code":"package com.example;\n\npublic class Single {\n    public String greet() {\n        return \"hello\";\n    }\n}\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.prethink.quality.FindClassMetrics","displayName":"Find class quality metrics","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.ClassQualityMetrics","displayName":"Class quality metrics","description":"Per-class code quality metrics including WMC, LCOM4, TCC, CBO, and maintainability index.","columns":[{"name":"Source path","description":"The path to the source file containing the class."},{"name":"Class name","description":"The fully qualified name of the class."},{"name":"Line count","description":"Number of lines in the class."},{"name":"Method count","description":"Number of methods defined in the class."},{"name":"Field count","description":"Number of fields defined in the class."},{"name":"WMC","description":"Weighted Methods per Class: sum of cyclomatic complexities of all methods."},{"name":"LCOM4","description":"Lack of Cohesion of Methods (Hitz-Montazeri): number of connected components in the method-field access graph. 1 = cohesive, >1 = should be split."},{"name":"TCC","description":"Tight Class Cohesion: proportion of directly connected method pairs (sharing field access). 0.0-1.0, higher is more cohesive."},{"name":"CBO","description":"Coupling Between Objects: number of distinct classes this class is coupled to."},{"name":"Maintainability index","description":"Composite score (0-100) combining Halstead Volume, cyclomatic complexity, and LOC. Higher is more maintainable."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

