---
title: "Remove unused workflow dispatch inputs"
sidebar_label: "Remove unused workflow dispatch inputs"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/github/removeunusedworkflowdispatchinputs" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unused workflow dispatch inputs"}
  description={"Remove workflow_dispatch inputs that are not referenced anywhere in the workflow file."}
  fqName={"org.openrewrite.github.RemoveUnusedWorkflowDispatchInputs"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/RemoveUnusedWorkflowDispatchInputs.java"}
/>

<RecipeHeader
  displayName={"Remove unused workflow dispatch inputs"}
  description={"Remove workflow_dispatch inputs that are not referenced anywhere in the workflow file."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.github.RemoveUnusedWorkflowDispatchInputs"}
  artifact={"org.openrewrite.recipe:rewrite-github-actions"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.github.RemoveUnusedWorkflowDispatchInputs"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/github/removeunusedworkflowdispatchinputs.md"}
/>

<ExampleList examples={[{"variants":[{"language":"yaml","before":"name: Test Workflow\non:\n  workflow_dispatch:\n    inputs:\n      used-input:\n        description: 'This input is used'\n        required: true\n      unused_input:\n        description: 'This input is not used anywhere'\n        required: false\n      anotherUnusedInput:\n        description: 'Also not used'\n        default: 'default-value'\n      usedInGithubActionSyntax:\n        description: 'Used in Github Action syntax'\n\njobs:\n  test-job:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Use input\n        run: echo \"Used input - ${{ github.event.inputs.used-input }}\"\n      - name: Another step\n        run: echo \"Just a step without input reference\"\n      - name: Step 3\n        if: inputs . usedInGithubActionSyntax == 'true'\n        run: echo \"Conditional step\"\n","after":"name: Test Workflow\non:\n  workflow_dispatch:\n    inputs:\n      used-input:\n        description: 'This input is used'\n        required: true\n      usedInGithubActionSyntax:\n        description: 'Used in Github Action syntax'\n\njobs:\n  test-job:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Use input\n        run: echo \"Used input - ${{ github.event.inputs.used-input }}\"\n      - name: Another step\n        run: echo \"Just a step without input reference\"\n      - name: Step 3\n        if: inputs . usedInGithubActionSyntax == 'true'\n        run: echo \"Conditional step\"\n","diff":"--- .github/workflows/test.yml\n+++ .github/workflows/test.yml\n@@ -8,6 +8,0 @@\n        description: 'This input is used'\n        required: true\n-     unused_input:\n-       description: 'This input is not used anywhere'\n-       required: false\n-     anotherUnusedInput:\n-       description: 'Also not used'\n-       default: 'default-value'\n      usedInGithubActionSyntax:\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.github.RemoveUnusedWorkflowDispatchInputs","displayName":"Remove unused workflow dispatch inputs","groupId":"org.openrewrite.recipe","artifactId":"rewrite-github-actions","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

