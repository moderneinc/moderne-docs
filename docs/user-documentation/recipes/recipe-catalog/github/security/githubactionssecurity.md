---
title: "GitHub Actions security insights"
sidebar_label: "GitHub Actions security insights"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/github/security/githubactionssecurity" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"GitHub Actions security insights"}
  description={"Finds potential security issues in GitHub Actions workflows, based on [Zizmor](https://docs.zizmor.sh) security analysis rules."}
  fqName={"org.openrewrite.github.security.GitHubActionsSecurity"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/resources/META-INF/rewrite/security.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["supply-chain","github","security"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.github.security.GitHubActionsSecurity"}
  artifact={"org.openrewrite.recipe:rewrite-github-actions"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.github.security.GitHubActionsSecurity"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/github/security/githubactionssecurity.md"}
>

<RecipeHeader.Title>GitHub Actions security insights</RecipeHeader.Title>

<RecipeHeader.Description>Finds potential security issues in GitHub Actions workflows, based on [Zizmor](https://docs.zizmor.sh) security analysis rules.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Find credential persistence through GitHub Actions artifacts","href":"/user-documentation/recipes/recipe-catalog/github/security/artifactsecurity/"},{"name":"Find spoofable bot actor checks","href":"/user-documentation/recipes/recipe-catalog/github/security/botconditions/"},{"name":"Find cache poisoning vulnerabilities","href":"/user-documentation/recipes/recipe-catalog/github/security/cachepoisoning/"},{"name":"Find dangerous workflow triggers","href":"/user-documentation/recipes/recipe-catalog/github/security/dangeroustriggers/"},{"name":"Find excessive permissions","href":"/user-documentation/recipes/recipe-catalog/github/security/excessivepermissions/"},{"name":"Find forbidden action usage","href":"/user-documentation/recipes/recipe-catalog/github/security/forbiddenuses/"},{"name":"Find dangerous GITHUB_ENV usage","href":"/user-documentation/recipes/recipe-catalog/github/security/githubenv/"},{"name":"Find hardcoded container credentials","href":"/user-documentation/recipes/recipe-catalog/github/security/hardcodedcredentials/"},{"name":"Find insecure commands configuration","href":"/user-documentation/recipes/recipe-catalog/github/security/insecurecommands/"},{"name":"Find obfuscated GitHub Actions features","href":"/user-documentation/recipes/recipe-catalog/github/security/obfuscation/"},{"name":"Find commit SHAs with potentially mismatched version comments","href":"/user-documentation/recipes/recipe-catalog/github/security/refversionmismatch/"},{"name":"Find unconditional secrets inheritance","href":"/user-documentation/recipes/recipe-catalog/github/security/secretsinherit/"},{"name":"Find usage of self-hosted runners","href":"/user-documentation/recipes/recipe-catalog/github/security/selfhostedrunner/"},{"name":"Find template injection vulnerabilities","href":"/user-documentation/recipes/recipe-catalog/github/security/templateinjection/"},{"name":"Find manual credentials instead of trusted publishing","href":"/user-documentation/recipes/recipe-catalog/github/security/trustedpublishing/"},{"name":"Document permissions usage","href":"/user-documentation/recipes/recipe-catalog/github/security/undocumentedpermissions/"},{"name":"Pin GitHub Actions to specific commits","href":"/user-documentation/recipes/recipe-catalog/github/security/unpinnedactions/"},{"name":"Pin Docker images to digests","href":"/user-documentation/recipes/recipe-catalog/github/security/unpinneddockerimages/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.github.security.GitHubActionsSecurity","displayName":"GitHub Actions security insights","groupId":"org.openrewrite.recipe","artifactId":"rewrite-github-actions","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

