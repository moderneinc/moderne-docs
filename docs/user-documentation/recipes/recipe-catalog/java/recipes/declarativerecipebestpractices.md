---
title: "Declarative recipe best practices"
sidebar_label: "Declarative recipe best practices"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/recipes/declarativerecipebestpractices" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Declarative recipe best practices"}
  description={"Best practices for declarative YAML recipe development."}
  fqName={"org.openrewrite.java.recipes.DeclarativeRecipeBestPractices"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-rewrite/blob/main/src/main/resources/META-INF/rewrite/recipebestpractice.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.recipes.DeclarativeRecipeBestPractices"}
  artifact={"org.openrewrite.recipe:rewrite-rewrite"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.recipes.DeclarativeRecipeBestPractices"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/recipes/declarativerecipebestpractices.md"}
>

<RecipeHeader.Title>Declarative recipe best practices</RecipeHeader.Title>

<RecipeHeader.Description>Best practices for declarative YAML recipe development.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"End declarative recipe descriptions with a period","href":"/user-documentation/recipes/recipe-catalog/java/recipes/enddeclarativerecipedescriptionswithperiod/"},{"name":"Use a lowercase `x` as version wildcard in declarative recipes","href":"/user-documentation/recipes/recipe-catalog/java/recipes/lowercaseversionwildcards/"},{"name":"Remove the trailing colon from declarative recipe entries without options","href":"/user-documentation/recipes/recipe-catalog/java/recipes/removeemptyrecipeoptions/"},{"name":"Remove consecutive duplicate entries from declarative recipe lists","href":"/user-documentation/recipes/recipe-catalog/java/recipes/removeconsecutiveduplicaterecipes/"}]} preconditions={[{"name":"Find files","href":"/user-documentation/recipes/recipe-catalog/core/findsourcefiles/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"yaml","before":"type: specs.openrewrite.org/v1beta/recipe\nname: com.example.MyRecipe\ndisplayName: My recipe\ndescription: Does something useful\nrecipeList:\n  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:\n      groupId: org.springframework\n      artifactId: \"*\"\n      newVersion: 6.2.X\n  - org.openrewrite.java.OrderImports:\n  - org.openrewrite.java.OrderImports\n","after":"type: specs.openrewrite.org/v1beta/recipe\nname: com.example.MyRecipe\ndisplayName: My recipe\ndescription: Does something useful.\nrecipeList:\n  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:\n      groupId: org.springframework\n      artifactId: \"*\"\n      newVersion: 6.2.x\n  - org.openrewrite.java.OrderImports\n","diff":"--- src/main/resources/META-INF/rewrite/my-recipe.yml\n+++ src/main/resources/META-INF/rewrite/my-recipe.yml\n@@ -4,1 +4,1 @@\nname: com.example.MyRecipe\ndisplayName: My recipe\n-description: Does something useful\n+description: Does something useful.\nrecipeList:\n@@ -9,2 +9,1 @@\n      groupId: org.springframework\n      artifactId: \"*\"\n-     newVersion: 6.2.X\n- - org.openrewrite.java.OrderImports:\n+     newVersion: 6.2.x\n  - org.openrewrite.java.OrderImports\n","newFile":false}]},{"variants":[{"language":"yaml","before":"type: specs.openrewrite.org/v1beta/recipe\nname: com.example.MyRecipe\ndisplayName: My recipe\ndescription: Does something useful\nrecipeList:\n  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:\n      groupId: org.springframework\n      artifactId: \"*\"\n      newVersion: 6.2.X\n  - org.openrewrite.java.OrderImports:\n  - org.openrewrite.java.OrderImports\n","after":"type: specs.openrewrite.org/v1beta/recipe\nname: com.example.MyRecipe\ndisplayName: My recipe\ndescription: Does something useful.\nrecipeList:\n  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:\n      groupId: org.springframework\n      artifactId: \"*\"\n      newVersion: 6.2.x\n  - org.openrewrite.java.OrderImports\n","diff":"--- src/main/resources/META-INF/rewrite/my-recipe.yml\n+++ src/main/resources/META-INF/rewrite/my-recipe.yml\n@@ -4,1 +4,1 @@\nname: com.example.MyRecipe\ndisplayName: My recipe\n-description: Does something useful\n+description: Does something useful.\nrecipeList:\n@@ -9,2 +9,1 @@\n      groupId: org.springframework\n      artifactId: \"*\"\n-     newVersion: 6.2.X\n- - org.openrewrite.java.OrderImports:\n+     newVersion: 6.2.x\n  - org.openrewrite.java.OrderImports\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.recipes.DeclarativeRecipeBestPractices","displayName":"Declarative recipe best practices","groupId":"org.openrewrite.recipe","artifactId":"rewrite-rewrite","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

