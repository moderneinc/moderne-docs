---
title: "React i18next internationalization"
sidebar_label: "React i18next internationalization"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/codemods/reacti18next" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"React i18next internationalization"}
  description={"Automatically internationalizes React applications by extracting hardcoded strings and replacing them with [react-i18next](https://react.i18next.com) translation calls. Handles JSX text, attributes, and template literals with variables. Creates and updates a translation JSON file with extracted strings."}
  fqName={"org.openrewrite.codemods.ReactI18Next"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/moderneinc/rewrite-codemods/blob/main/src/main/java/org/openrewrite/codemods/ReactI18Next.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.codemods.ReactI18Next"}
  artifact={"org.openrewrite.recipe:rewrite-codemods"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.codemods.ReactI18Next"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/codemods/reacti18next.md"}
>

<RecipeHeader.Title>React i18next internationalization</RecipeHeader.Title>

<RecipeHeader.Description>Automatically internationalizes React applications by extracting hardcoded strings and replacing them with [react-i18next](https://react.i18next.com) translation calls. Handles JSX text, attributes, and template literals with variables. Creates and updates a translation JSON file with extracted strings.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"translationFilePath","required":false,"description":"Path to the translation JSON file where extracted strings will be stored. Defaults to `translations.json` in the root of the project.","example":"./src/locales/en.json"},{"type":"String","name":"importName","required":true,"description":"The package name to import translation functions from. Required.","example":"react-i18next"},{"type":"String","name":"translationRoot","required":false,"description":"Root key in the translation file to organize translations under. Defaults to `common`.","example":"common"},{"type":"String","name":"filePattern","required":false,"description":"Glob pattern to specify which files to transform. Defaults to all files.","example":"src/**/*.tsx"},{"type":"String","name":"parser","required":false,"description":"Parser to use for transforming files. Defaults to auto-detection based on file extensions (`tsx`/`ts`/`babel`).","example":"tsx"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.codemods.ReactI18Next","displayName":"React i18next internationalization","groupId":"org.openrewrite.recipe","artifactId":"rewrite-codemods","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS","requiresConfiguration":true,"cliOptions":" --recipe-option \"translationFilePath=./src/locales/en.json\" --recipe-option \"importName=react-i18next\" --recipe-option \"translationRoot=common\" --recipe-option \"filePattern=src/**/*.tsx\" --recipe-option \"parser=tsx\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

