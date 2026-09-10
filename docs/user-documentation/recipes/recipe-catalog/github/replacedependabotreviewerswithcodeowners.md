---
title: "Replace Dependabot `reviewers` with `CODEOWNERS`"
sidebar_label: "Replace Dependabot `reviewers` with `CODEOWNERS`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/github/replacedependabotreviewerswithcodeowners" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace Dependabot `reviewers` with `CODEOWNERS`"}
  description={"Replaces the [removed](https://github.blog/changelog/2025-04-29-dependabot-reviewers-configuration-option-being-replaced-by-code-owners/) `reviewers` option in `.github/dependabot.yml` with equivalent `CODEOWNERS` entries. Each reviewer is mapped onto the manifest files Dependabot updates for that `package-ecosystem` and `directory`, so ownership stays as narrow as the Dependabot configuration was. Update entries whose `package-ecosystem` has no known manifests are left untouched."}
  fqName={"org.openrewrite.github.ReplaceDependabotReviewersWithCodeowners"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/ReplaceDependabotReviewersWithCodeowners.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["dependabot","dependencies","github"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.github.ReplaceDependabotReviewersWithCodeowners"}
  artifact={"org.openrewrite.recipe:rewrite-github-actions"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.github.ReplaceDependabotReviewersWithCodeowners"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/github/replacedependabotreviewerswithcodeowners.md"}
>

<RecipeHeader.Title>Replace Dependabot `reviewers` with `CODEOWNERS`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces the [removed](https://github.blog/changelog/2025-04-29-dependabot-reviewers-configuration-option-being-replaced-by-code-owners/) `reviewers` option in `.github/dependabot.yml` with equivalent `CODEOWNERS` entries. Each reviewer is mapped onto the manifest files Dependabot updates for that `package-ecosystem` and `directory`, so ownership stays as narrow as the Dependabot configuration was. Update entries whose `package-ecosystem` has no known manifests are left untouched.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"codeownersPath","required":false,"description":"Where to write the migrated reviewers when the repository does not have a `CODEOWNERS` file yet. Defaults to `.github/CODEOWNERS`. When a `CODEOWNERS` file already exists in any of the locations GitHub recognizes, that file is appended to instead and this option is ignored.","example":"CODEOWNERS"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"codeownersPath","value":"null"}],"variants":[{"language":"yaml","before":"version: 2\nupdates:\n  - package-ecosystem: maven\n    directory: /\n    schedule:\n      interval: weekly\n    reviewers:\n      - acme/backend\n  - package-ecosystem: npm\n    directory: /frontend\n    schedule:\n      interval: weekly\n    reviewers:\n      - acme/frontend\n","after":"version: 2\nupdates:\n  - package-ecosystem: maven\n    directory: /\n    schedule:\n      interval: weekly\n  - package-ecosystem: npm\n    directory: /frontend\n    schedule:\n      interval: weekly\n","diff":"--- .github/dependabot.yml\n+++ .github/dependabot.yml\n@@ -7,2 +7,0 @@\n    schedule:\n      interval: weekly\n-   reviewers:\n-     - acme/backend\n  - package-ecosystem: npm\n@@ -13,2 +11,0 @@\n    schedule:\n      interval: weekly\n-   reviewers:\n-     - acme/frontend\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.github.ReplaceDependabotReviewersWithCodeowners","displayName":"Replace Dependabot `reviewers` with `CODEOWNERS`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-github-actions","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

