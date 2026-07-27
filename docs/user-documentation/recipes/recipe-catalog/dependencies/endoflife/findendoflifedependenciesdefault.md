---
title: "Find end-of-life dependencies (defaults)"
sidebar_label: "Find end-of-life dependencies (defaults)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find end-of-life dependencies (defaults)"}
  description={"Flags Maven, Gradle, npm, and NuGet dependencies whose upstream release is end-of-life or reaches end-of-life within the next 180 days, using the bundled endoflife.date snapshot. Aggregates the per-ecosystem find-end-of-life recipes with their default settings."}
  fqName={"org.openrewrite.dependencies.endoflife.FindEndOfLifeDependenciesDefault"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.dependencies.endoflife.FindEndOfLifeDependenciesDefault"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.dependencies.endoflife.FindEndOfLifeDependenciesDefault"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/dependencies/endoflife/findendoflifedependenciesdefault.md"}
  moderneOnly
>

<RecipeHeader.Title>Find end-of-life dependencies (defaults)</RecipeHeader.Title>

<RecipeHeader.Description>Flags Maven, Gradle, npm, and NuGet dependencies whose upstream release is end-of-life or reaches end-of-life within the next 180 days, using the bundled endoflife.date snapshot. Aggregates the per-ecosystem find-end-of-life recipes with their default settings.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Find end-of-life dependencies","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/endoflife/findendoflifedependencies/"},{"name":"Find end-of-life NuGet dependencies","href":"/user-documentation/recipes/recipe-catalog/csharp/dependencies/findendoflifedependencies/"},{"name":"Find end-of-life npm dependencies","href":"/user-documentation/recipes/recipe-catalog/node/dependencies/findendoflifedependencies/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.dependencies.endoflife.FindEndOfLifeDependenciesDefault","displayName":"Find end-of-life dependencies (defaults)","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.dependencies.endoflife.table.EndOfLifeDependencyReport","displayName":"End-of-life dependencies","description":"Maven and Gradle dependencies whose upstream release is end-of-life or scheduled for end-of-life soon, as reported by https://endoflife.date.","columns":[{"name":"Group ID","description":"Group ID of the dependency in use."},{"name":"Artifact ID","description":"Artifact ID of the dependency in use."},{"name":"Version","description":"Resolved version of the dependency in the project."},{"name":"Product","description":"endoflife.date product slug that matched."},{"name":"Release","description":"Matched release lifecycle (e.g. 3.2)."},{"name":"EOL date","description":"End-of-life date for the release. Empty when not known."},{"name":"Is EOL","description":"True when the release is already past end-of-life."},{"name":"Days until EOL","description":"Negative if past EOL, positive if upcoming, empty if unknown."},{"name":"Direct dependency","description":"True when the dependency is declared directly in this build file."},{"name":"Dependency path","description":"Resolution path from a direct dependency to this one (empty for direct)."}]},{"name":"org.openrewrite.csharp.dependencies.table.EndOfLifeDependencyReport","displayName":"End-of-life NuGet dependencies","description":"NuGet packages whose upstream release is end-of-life or scheduled for end-of-life soon, as reported by https://endoflife.date.","columns":[{"name":"Package ID","description":"ID of the NuGet package in use, in its declared casing (NuGet package IDs are case-insensitive)."},{"name":"Version","description":"Resolved version of the package in the project."},{"name":"Product","description":"endoflife.date product slug that matched."},{"name":"Release","description":"Matched release lifecycle (e.g. 3.2)."},{"name":"EOL date","description":"End-of-life date for the release. Empty when not known."},{"name":"Is EOL","description":"True when the release is already past end-of-life."},{"name":"Days until EOL","description":"Negative if past EOL, positive if upcoming, empty if unknown."},{"name":"Direct dependency","description":"True when the package is referenced directly by the project."},{"name":"Dependency path","description":"Resolution path from a direct package reference to this one (empty for direct)."}]},{"name":"org.openrewrite.node.dependencies.table.EndOfLifeDependencyReport","displayName":"End-of-life npm dependencies","description":"npm dependencies whose upstream release is end-of-life or scheduled for end-of-life soon, as reported by https://endoflife.date.","columns":[{"name":"Package name","description":"Name of the npm package in use, including its scope (e.g. `@angular/core`)."},{"name":"Version","description":"Resolved version of the package in the project. For dependencies without lockfile resolution, the declared constraint's version floor."},{"name":"Product","description":"endoflife.date product slug that matched."},{"name":"Release","description":"Matched release lifecycle (e.g. 3.2)."},{"name":"EOL date","description":"End-of-life date for the release. Empty when not known."},{"name":"Is EOL","description":"True when the release is already past end-of-life."},{"name":"Days until EOL","description":"Negative if past EOL, positive if upcoming, empty if unknown."},{"name":"Direct dependency","description":"True when the dependency is declared directly in package.json."},{"name":"Dependency path","description":"Resolution path from a direct dependency to this one. Empty for direct dependencies and for versions only present as nested lockfile entries."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

