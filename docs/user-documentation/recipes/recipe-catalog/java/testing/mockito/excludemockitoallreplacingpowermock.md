---
title: "Exclude a transitive `mockito-all` from modules that move off PowerMock"
sidebar_label: "Exclude a transitive `mockito-all` from modules that move off PowerMock"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/mockito/excludemockitoallreplacingpowermock" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Exclude a transitive `mockito-all` from modules that move off PowerMock"}
  description={"Excludes `mockito-all` from the dependencies that bring it into a module that depends on the PowerMock Mockito API. `mockito-all` is a 1.x-only uber jar with its own `org.mockito.Mockito`, which shadows the one of the Mockito 3.x that replaces PowerMock wherever it comes first on the classpath, so that `Mockito.mockStatic` and `MockedStatic` do not resolve. The Hamcrest 1.1 and Objenesis classes bundled in `mockito-all` go with it. Only the Maven dependencies declared in the module itself are excluded from, not those it inherits from a parent that does not depend on PowerMock. Where `UpgradeMockitoCoreReplacingPowerMock` runs again in a later cycle, it pairs the exclusion with one of `mockito-core`, which is harmless as the module declares the Mockito that replaces PowerMock."}
  fqName={"org.openrewrite.java.testing.mockito.ExcludeMockitoAllReplacingPowerMock"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/powermockito.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["mockito","testing"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.mockito.ExcludeMockitoAllReplacingPowerMock"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.ExcludeMockitoAllReplacingPowerMock"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/mockito/excludemockitoallreplacingpowermock.md"}
>

<RecipeHeader.Title>Exclude a transitive `mockito-all` from modules that move off PowerMock</RecipeHeader.Title>

<RecipeHeader.Description>Excludes `mockito-all` from the dependencies that bring it into a module that depends on the PowerMock Mockito API. `mockito-all` is a 1.x-only uber jar with its own `org.mockito.Mockito`, which shadows the one of the Mockito 3.x that replaces PowerMock wherever it comes first on the classpath, so that `Mockito.mockStatic` and `MockedStatic` do not resolve. The Hamcrest 1.1 and Objenesis classes bundled in `mockito-all` go with it. Only the Maven dependencies declared in the module itself are excluded from, not those it inherits from a parent that does not depend on PowerMock. Where `UpgradeMockitoCoreReplacingPowerMock` runs again in a later cycle, it pairs the exclusion with one of `mockito-core`, which is harmless as the module declares the Mockito that replaces PowerMock.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Exclude Maven dependency","href":"/user-documentation/recipes/recipe-catalog/maven/excludedependency/"}]} preconditions={[{"name":"Module has dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/search/modulehasdependency/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.mockito.ExcludeMockitoAllReplacingPowerMock","displayName":"Exclude a transitive `mockito-all` from modules that move off PowerMock","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

