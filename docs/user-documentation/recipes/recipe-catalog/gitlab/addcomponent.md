---
title: "Add GitLab component"
sidebar_label: "Add GitLab component"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gitlab/addcomponent" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add GitLab component"}
  description={"Add a GitLab component to an existing list, or add a new list where none was present."}
  fqName={"org.openrewrite.gitlab.AddComponent"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-gitlab/blob/main/src/main/java/org/openrewrite/gitlab/AddComponent.java"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.gitlab.AddComponent"}
  artifact={"org.openrewrite.recipe:rewrite-gitlab"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gitlab.AddComponent"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gitlab/addcomponent.md"}
>

<RecipeHeader.Title>Add GitLab component</RecipeHeader.Title>

<RecipeHeader.Description>Add a GitLab component to an existing list, or add a new list where none was present.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Merge YAML snippet","href":"/user-documentation/recipes/recipe-catalog/yaml/mergeyaml/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"newComponent","required":true,"description":"Name of the component to use add.","example":"$CI_SERVER_FQDN/components/opentofu/full-pipeline"},{"type":"String","name":"version","required":true,"description":"Version of the component to add.","example":"0.10.0"},{"type":"List","name":"inputs","required":false,"description":"The set of inputs to provide","example":"opentofu_version: 1.6.1"},{"type":"InsertMode","name":"insertMode","required":false,"description":"Choose an insertion point when multiple mappings exist. Default is `Last`."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"newComponent","value":"$CI_SERVER_FQDN/components/opentofu/full-pipeline"},{"parameter":"version","value":"0.10.0"},{"parameter":"inputs","value":"List.of(\"version: 0.10.0\", \"opentofu_version: 1.6.1\")"},{"parameter":"insertMode","value":"null"}],"variants":[{"language":"yaml","before":"include:\n  - template: Gradle.gitlab-ci.yml\n","after":"include:\n  - template: Gradle.gitlab-ci.yml\n  - component: $CI_SERVER_FQDN/components/opentofu/full-pipeline@0.10.0\n    inputs:\n      version: 0.10.0\n      opentofu_version: 1.6.1\n","diff":"--- .gitlab-ci.yml\n+++ .gitlab-ci.yml\n@@ -3,0 +3,4 @@\ninclude:\n  - template: Gradle.gitlab-ci.yml\n+ - component: $CI_SERVER_FQDN/components/opentofu/full-pipeline@0.10.0\n+   inputs:\n+     version: 0.10.0\n+     opentofu_version: 1.6.1\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gitlab.AddComponent","displayName":"Add GitLab component","groupId":"org.openrewrite.recipe","artifactId":"rewrite-gitlab","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITLAB","requiresConfiguration":true,"cliOptions":" --recipe-option \"newComponent=$CI_SERVER_FQDN/components/opentofu/full-pipeline\" --recipe-option \"version=0.10.0\" --recipe-option \"inputs=opentofu_version: 1.6.1\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

