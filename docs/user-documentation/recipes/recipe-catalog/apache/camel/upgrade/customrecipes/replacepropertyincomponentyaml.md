---
title: "Renames property of the component"
sidebar_label: "Renames property of the component"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/camel/upgrade/customrecipes/replacepropertyincomponentyaml" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Renames property of the component"}
  description={"ARenames property of the component."}
  fqName={"org.apache.camel.upgrade.customRecipes.ReplacePropertyInComponentYaml"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=org.apache.camel.upgrade.customRecipes.ReplacePropertyInComponentYaml"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.apache.camel.upgrade.customRecipes.ReplacePropertyInComponentYaml"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/org.apache.camel.upgrade.customRecipes.ReplacePropertyInComponentYaml"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/customrecipes/replacepropertyincomponentyaml.md"}
>

<RecipeHeader.Title>Renames property of the component</RecipeHeader.Title>

<RecipeHeader.Description>ARenames property of the component.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"component","required":true,"description":"Component name.","example":"TODO Provide a usage example for the docs"},{"type":"String","name":"oldPropertyKey","required":true,"description":"The property key to rename.","example":"TODO Provide a usage example for the docs"},{"type":"String","name":"newPropertyKey","required":true,"description":"The prefix to be replaced with.","example":"TODO Provide a usage example for the docs"},{"type":"String","name":"valuePrefix","required":false,"description":"This value is appended before the current value of the modified method.","example":"file:"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.apache.camel.upgrade.customRecipes.ReplacePropertyInComponentYaml","displayName":"Renames property of the component","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":true,"cliOptions":" --recipe-option \"component=TODO Provide a usage example for the docs\" --recipe-option \"oldPropertyKey=TODO Provide a usage example for the docs\" --recipe-option \"newPropertyKey=TODO Provide a usage example for the docs\" --recipe-option \"valuePrefix=file:\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

