---
title: "Add artifacts expire_in"
sidebar_label: "Add artifacts expire_in"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gitlab/addartifactsexpirein" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add artifacts expire_in"}
  description={"Set `artifacts:expire_in` in `.gitlab-ci.yml` to prevent storage bloat from indefinitely stored artifacts."}
  fqName={"org.openrewrite.gitlab.AddArtifactsExpireIn"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-gitlab/blob/main/src/main/java/org/openrewrite/gitlab/AddArtifactsExpireIn.java"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.gitlab.AddArtifactsExpireIn"}
  artifact={"org.openrewrite.recipe:rewrite-gitlab"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gitlab.AddArtifactsExpireIn"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gitlab/addartifactsexpirein.md"}
>

<RecipeHeader.Title>Add artifacts expire_in</RecipeHeader.Title>

<RecipeHeader.Description>Set `artifacts:expire_in` in `.gitlab-ci.yml` to prevent storage bloat from indefinitely stored artifacts.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Merge YAML snippet","href":"/user-documentation/recipes/recipe-catalog/yaml/mergeyaml/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"expireIn","required":true,"description":"Duration after which artifacts expire.","example":"1 week"},{"type":"String","name":"jobName","required":false,"description":"The job to apply this to. If not provided, applies to the `default` section.","example":"build_job"},{"type":"Boolean","name":"acceptTheirs","required":false,"description":"When the setting already exists, prefer the original value."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"expireIn","value":"1 week"},{"parameter":"jobName","value":"null"},{"parameter":"acceptTheirs","value":"null"}],"variants":[{"language":"yaml","before":"","after":"default:\n  artifacts:\n    expire_in: 1 week\n","newFile":true}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gitlab.AddArtifactsExpireIn","displayName":"Add artifacts expire_in","groupId":"org.openrewrite.recipe","artifactId":"rewrite-gitlab","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITLAB","requiresConfiguration":true,"cliOptions":" --recipe-option \"expireIn=1 week\" --recipe-option \"jobName=build_job\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

