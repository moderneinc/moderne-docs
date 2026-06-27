---
title: "Prepare a codebase for NullAway, baselining the remaining findings"
sidebar_label: "Prepare a codebase for NullAway, baselining the remaining findings"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prepare a codebase for NullAway, baselining the remaining findings"}
  description={"Runs the full code-level `io.moderne.nullability.PrepareForNullAway` inference, then carries the pre-existing NullAway findings of the classes listed in the baseline file as a `@SuppressWarnings(\"NullAway\")` baseline. This lets a codebase enable NullAway at ERROR immediately — every clean class and every new file is checked, while the listed classes' existing debt is snapshotted to be burned down over time. The baseline file is produced from a NullAway WARN-level build report of the inference output (one fully-qualified top-level class name per line)."}
  fqName={"io.moderne.nullability.PrepareForNullAwayWithBaseline"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["nullaway","jspecify","nullability"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.PrepareForNullAwayWithBaseline"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.PrepareForNullAwayWithBaseline"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/preparefornullawaywithbaseline.md"}
  moderneOnly
>

<RecipeHeader.Title>Prepare a codebase for NullAway, baselining the remaining findings</RecipeHeader.Title>

<RecipeHeader.Description>Runs the full code-level `io.moderne.nullability.PrepareForNullAway` inference, then carries the pre-existing NullAway findings of the classes listed in the baseline file as a `@SuppressWarnings("NullAway")` baseline. This lets a codebase enable NullAway at ERROR immediately — every clean class and every new file is checked, while the listed classes' existing debt is snapshotted to be burned down over time. The baseline file is produced from a NullAway WARN-level build report of the inference output (one fully-qualified top-level class name per line).</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Prepare a codebase for NullAway","href":"/user-documentation/recipes/recipe-catalog/nullability/preparefornullaway/"},{"name":"Suppress NullAway in baseline classes","href":"/user-documentation/recipes/recipe-catalog/nullability/scope/suppressnullawayinbaselineclasses/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.nullability.PrepareForNullAwayWithBaseline","displayName":"Prepare a codebase for NullAway, baselining the remaining findings","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

