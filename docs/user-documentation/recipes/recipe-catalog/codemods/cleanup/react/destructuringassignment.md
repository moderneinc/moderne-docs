---
title: "Enforce consistent usage of destructuring assignment of props, state, and context"
sidebar_label: "Enforce consistent usage of destructuring assignment of props, state, and context"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/codemods/cleanup/react/destructuringassignment" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Enforce consistent usage of destructuring assignment of props, state, and context"}
  description={"Enforce consistent usage of destructuring assignment of props, state, and context\nSee rule details for [react/destructuring-assignment](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/destructuring-assignment.md)."}
  fqName={"org.openrewrite.codemods.cleanup.react.DestructuringAssignment"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/moderneinc/rewrite-codemods/blob/main/src/main/resources/META-INF/rewrite/eslint-plugin-react.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.codemods.cleanup.react.DestructuringAssignment"}
  artifact={"org.openrewrite.recipe:rewrite-codemods"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.codemods.cleanup.react.DestructuringAssignment"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/codemods/cleanup/react/destructuringassignment.md"}
>

<RecipeHeader.Title>Enforce consistent usage of destructuring assignment of props, state, and context</RecipeHeader.Title>

<RecipeHeader.Description>Enforce consistent usage of destructuring assignment of props, state, and context See rule details for [react/destructuring-assignment](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/destructuring-assignment.md).</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Lint source code with ESLint","href":"/user-documentation/recipes/recipe-catalog/codemods/eslint/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.codemods.cleanup.react.DestructuringAssignment","displayName":"Enforce consistent usage of destructuring assignment of props, state, and context","groupId":"org.openrewrite.recipe","artifactId":"rewrite-codemods","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.codemods.ESLintMessages","displayName":"ESLint messages","description":"Errors and warnings as reported by ESLint.","columns":[{"name":"Source Path","description":"The source path of the file."},{"name":"Rule ID","description":"ESLint Rule ID."},{"name":"Severity","description":"Either `Warning` or `Error`."},{"name":"Fatal","description":"Is this a fatal error (like a parse error)."},{"name":"Message","description":"The message created by the rule."},{"name":"Line","description":"Line in source file this message pertains to."},{"name":"Column","description":"Column in source file this message pertains to."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

