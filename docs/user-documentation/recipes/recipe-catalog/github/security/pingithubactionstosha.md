---
title: "Pin GitHub Actions to commit SHAs"
sidebar_label: "Pin GitHub Actions to commit SHAs"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/github/security/pingithubactionstosha" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Pin GitHub Actions to commit SHAs"}
  description={"Replaces mutable tag or branch references in GitHub Actions `uses:` declarations with immutable commit SHAs. A static mapping of well-known actions is checked first; if the action is not found, the GitHub API is used to resolve the reference at recipe run time. By default only third-party actions are pinned; set `pinOfficialActions` to include actions from the `actions` and `github` organizations. To pin only a specific allow-list of actions, set `includedActions`."}
  fqName={"org.openrewrite.github.security.PinGitHubActionsToSha"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/security/PinGitHubActionsToSha.java"}
/>

<RecipeHeader
  displayName={"Pin GitHub Actions to commit SHAs"}
  description={"Replaces mutable tag or branch references in GitHub Actions `uses:` declarations with immutable commit SHAs. A static mapping of well-known actions is checked first; if the action is not found, the GitHub API is used to resolve the reference at recipe run time. By default only third-party actions are pinned; set `pinOfficialActions` to include actions from the `actions` and `github` organizations. To pin only a specific allow-list of actions, set `includedActions`."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["supply-chain","github","security","actions"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.github.security.PinGitHubActionsToSha"}
  artifact={"org.openrewrite.recipe:rewrite-github-actions"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.github.security.PinGitHubActionsToSha"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/github/security/pingithubactionstosha.md"}
/>

<OptionsTable options={[{"type":"Boolean","name":"pinOfficialActions","required":false,"description":"When set to `true`, also pins actions from official GitHub organizations (e.g., `actions/*`, `github/*`). Defaults to `false`, meaning only third-party actions are pinned."},{"type":"String","name":"githubApiToken","required":false,"description":"A GitHub personal access token used to resolve tags/branches to commit SHAs via the GitHub API. Only needed for actions not found in the built-in static mapping. Without a token, unauthenticated requests are rate-limited to 60/hour.","example":"TODO Provide a usage example for the docs"},{"type":"List","name":"trustedOwners","required":false,"description":"Optional list of trusted owners/organizations, actions that belong to these organizations will not be pinned. This option overrides the 'Included actions' list.","example":"my-organization, my-other-organization"},{"type":"List","name":"includedActions","required":false,"description":"Optional allow-list of actions to pin. When provided, only `uses:` references matching one of these patterns are pinned; all other actions are left untouched. Patterns may be `owner/repo` (exact match), `owner/*` (any repo in an org), or `owner/repo/subpath` (exact match including a subpath). When omitted or empty, all third-party actions (and optionally official actions, per `pinOfficialActions`) are pinned.","example":"codecov/codecov-action"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"pinOfficialActions","value":"false"},{"parameter":"githubApiToken","value":"null"},{"parameter":"trustedOwners","value":"null"},{"parameter":"includedActions","value":"null"}],"variants":[{"language":"yaml","before":"name: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: codecov/codecov-action@v4\n        name: Upload coverage\n","after":"name: CI\non: push\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: codecov/codecov-action@b9fd7d16f6d7d1b5d2bec1a2887e65ceed900238 # v4\n        name: Upload coverage\n","diff":"--- .github/workflows/ci.yml\n+++ .github/workflows/ci.yml\n@@ -7,1 +7,1 @@\n    runs-on: ubuntu-latest\n    steps:\n-     - uses: codecov/codecov-action@v4\n+     - uses: codecov/codecov-action@b9fd7d16f6d7d1b5d2bec1a2887e65ceed900238 # v4\n        name: Upload coverage\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.github.security.PinGitHubActionsToSha","displayName":"Pin GitHub Actions to commit SHAs","groupId":"org.openrewrite.recipe","artifactId":"rewrite-github-actions","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

