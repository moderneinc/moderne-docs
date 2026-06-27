---
title: "Remove workflow input argument"
sidebar_label: "Remove workflow input argument"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/github/removeworkflowinputargument" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove workflow input argument"}
  description={"Remove a specific input argument from calls to a reusable workflow."}
  fqName={"org.openrewrite.github.RemoveWorkflowInputArgument"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/RemoveWorkflowInputArgument.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.github.RemoveWorkflowInputArgument"}
  artifact={"org.openrewrite.recipe:rewrite-github-actions"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.github.RemoveWorkflowInputArgument"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/github/removeworkflowinputargument.md"}
>

<RecipeHeader.Title>Remove workflow input argument</RecipeHeader.Title>

<RecipeHeader.Description>Remove a specific input argument from calls to a reusable workflow.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"workflowReference","required":true,"description":"The workflow reference to match (e.g., `org/repo/.github/workflows/myWorkflow.yml`).","example":"org/repo/.github/workflows/myWorkflow.yml"},{"type":"String","name":"version","required":true,"description":"The version of the workflow to match (e.g., `v1.2.3`).","example":"v1.2.3"},{"type":"String","name":"inputArgumentName","required":true,"description":"The name of the input argument to remove.","example":"myInputToRemove"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"workflowReference","value":"org/repo/.github/workflows/myWorkflow.yml"},{"parameter":"version","value":"v1.2.3"},{"parameter":"inputArgumentName","value":"myInputToRemove"}],"variants":[{"language":"yaml","before":"name: My workflow\non: workflow_dispatch\njobs:\n  call-workflow:\n    uses: org/repo/.github/workflows/myWorkflow.yml@v1.2.3\n    with:\n      myInputToRemove: \"value to remove\"\n      keepThisInput: \"keep this value\"\n      anotherInput: \"also keep this\"\n","after":"name: My workflow\non: workflow_dispatch\njobs:\n  call-workflow:\n    uses: org/repo/.github/workflows/myWorkflow.yml@v1.2.3\n    with:\n      keepThisInput: \"keep this value\"\n      anotherInput: \"also keep this\"\n","diff":"--- .github/workflows/caller.yml\n+++ .github/workflows/caller.yml\n@@ -7,1 +7,0 @@\n    uses: org/repo/.github/workflows/myWorkflow.yml@v1.2.3\n    with:\n-     myInputToRemove: \"value to remove\"\n      keepThisInput: \"keep this value\"\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.github.RemoveWorkflowInputArgument","displayName":"Remove workflow input argument","groupId":"org.openrewrite.recipe","artifactId":"rewrite-github-actions","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS","requiresConfiguration":true,"cliOptions":" --recipe-option \"workflowReference=org/repo/.github/workflows/myWorkflow.yml\" --recipe-option \"version=v1.2.3\" --recipe-option \"inputArgumentName=myInputToRemove\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

