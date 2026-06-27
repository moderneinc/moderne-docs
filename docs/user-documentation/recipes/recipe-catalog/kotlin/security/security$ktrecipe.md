---
title: "Find security smells in Kotlin code"
sidebar_label: "Find security smells in Kotlin code"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find security smells in Kotlin code"}
  description={"OWASP-aligned search-only recipes covering weak cryptography, insecure TLS configuration, injection vectors, Java deserialization, JWT misuse, sensitive data in logs, Android-specific security smells, and hard-coded secret literals. Each match is a `SearchResult` for review — nothing is rewritten automatically because security findings nearly always need a human to pick the migration target."}
  fqName={"org.openrewrite.kotlin.security.Security$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.security.Security$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.security.Security$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/security/security$ktrecipe.md"}
  moderneOnly
>

<RecipeHeader.Title>Find security smells in Kotlin code</RecipeHeader.Title>

<RecipeHeader.Description>OWASP-aligned search-only recipes covering weak cryptography, insecure TLS configuration, injection vectors, Java deserialization, JWT misuse, sensitive data in logs, Android-specific security smells, and hard-coded secret literals. Each match is a `SearchResult` for review — nothing is rewritten automatically because security findings nearly always need a human to pick the migration target.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Find weak cryptographic primitives","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findweakcryptography$ktrecipe/"},{"name":"Find insecure TLS configuration","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findinsecuretls$ktrecipe/"},{"name":"Find injection vectors","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findinjectionvectors$ktrecipe/"},{"name":"Find insecure cookie / session configuration","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findinsecuresessionconfig$ktrecipe/"},{"name":"Find unsafe Java deserialization","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findunsafedeserialization$ktrecipe/"},{"name":"Find JWT misuse","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findjwtmisuse$ktrecipe/"},{"name":"Find sensitive data in log calls","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findsensitivedatainlogs$ktrecipe/"},{"name":"Find Android-specific security smells","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findandroidsecuritysmells$ktrecipe/"},{"name":"Find hard-coded secret literals","href":"/user-documentation/recipes/recipe-catalog/kotlin/security/findhardcodedsecrets$ktrecipe/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.security.Security$KtRecipe","displayName":"Find security smells in Kotlin code","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

