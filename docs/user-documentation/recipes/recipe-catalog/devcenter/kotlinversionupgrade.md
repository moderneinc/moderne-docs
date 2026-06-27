---
title: "Move to a later Kotlin version"
sidebar_label: "Move to a later Kotlin version"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Move to a later Kotlin version"}
  description={"Determine the current state of a repository relative to a desired Kotlin version upgrade."}
  fqName={"io.moderne.devcenter.KotlinVersionUpgrade"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"io.moderne.devcenter.KotlinVersionUpgrade"}
  artifact={"io.moderne.recipe:rewrite-devcenter"}
  appLink={"https://app.moderne.io/recipes/io.moderne.devcenter.KotlinVersionUpgrade"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/devcenter/kotlinversionupgrade.md"}
  moderneOnly
>

<RecipeHeader.Title>Move to a later Kotlin version</RecipeHeader.Title>

<RecipeHeader.Description>Determine the current state of a repository relative to a desired Kotlin version upgrade.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"version","required":true,"description":"The target Kotlin version to upgrade to, in major.minor format.","example":"2.1"},{"type":"String","name":"upgradeRecipe","required":false,"description":"The recipe to use to upgrade.","example":"org.openrewrite.kotlin.migrate.UpgradeToKotlin2"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.devcenter.KotlinVersionUpgrade","displayName":"Move to a later Kotlin version","groupId":"io.moderne.recipe","artifactId":"rewrite-devcenter","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER","requiresConfiguration":true,"cliOptions":" --recipe-option \"version=2.1\" --recipe-option \"upgradeRecipe=org.openrewrite.kotlin.migrate.UpgradeToKotlin2\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.devcenter.table.UpgradesAndMigrations","displayName":"Upgrades and migrations","description":"Progress towards organizational objectives on library or language migrations and upgrades.","columns":[{"name":"Card","description":"The display name of the DevCenter card"},{"name":"Ordinal","description":"The ordinal position of this value relative to other values."},{"name":"Value","description":"The display value of the current state of this repository."},{"name":"Minimum version","description":"The minimum matching version that is currently in use."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

