---
title: "Java Recipe best practices"
sidebar_label: "Java Recipe best practices"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/recipes/javarecipebestpractices" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Java Recipe best practices"}
  description={"Best practices for Java recipe development."}
  fqName={"org.openrewrite.java.recipes.JavaRecipeBestPractices"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-rewrite/blob/main/src/main/resources/META-INF/rewrite/recipebestpractice.yml"}
/>

<RecipeHeader
  displayName={"Java Recipe best practices"}
  description={"Best practices for Java recipe development."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.recipes.JavaRecipeBestPractices"}
  artifact={"org.openrewrite.recipe:rewrite-rewrite"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.recipes.JavaRecipeBestPractices"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/recipes/javarecipebestpractices.md"}
/>

<RecipeList recipes={[{"name":"Add a blank line around fields with annotations","href":"java/recipes/blanklinesaroundfieldswithannotations"},{"name":"Correctly spaced descriptions","href":"java/recipes/correctlyspaceddescriptions"},{"name":"Use a standard name for `ExecutionContext`","href":"java/recipes/executioncontextparametername"},{"name":"Use `J.Literal.isLiteralValue(expression, null)`","href":"java/recipes/isliteralnullrecipe"},{"name":"Find missing `@Option` `example` values","href":"java/recipes/missingoptionexample"},{"name":"Recipe classes should not have mutable `static` fields","href":"java/recipes/nomutablestaticfieldsinrecipes"},{"name":"Use of `@EqualsAndHashCode` on `Recipe`","href":"java/recipes/recipeequalsandhashcodecallsuper"},{"name":"Recipe classes should be public","href":"java/recipes/recipeclassesshouldbepublic"},{"name":"Reorder `maybeRemoveImport` before `maybeAddImport`","href":"java/recipes/removeimportbeforeaddimport"},{"name":"Replace `getDisplayName()` and `getDescription()` methods with fields","href":"java/recipes/usedisplaynameanddescriptionfields"},{"name":"Replace `getEstimatedEffortPerOccurrence()` method with field","href":"java/recipes/useestimatedeffortperoccurrencefield"},{"name":"Use `StringUtils` utility methods","href":"java/recipes/usestringutilsrecipes"},{"name":"Replace `getTags()` method with field","href":"java/recipes/usetagsfield"},{"name":"Use `JavaTemplate.apply()` static method","href":"java/recipes/usejavatemplatestaticapply"},{"name":"Use `Tree.randomId()` in LST constructors","href":"java/recipes/usetreerandomid"},{"name":"Use `visit` with parent cursor when calling from another visitor","href":"java/recipes/usevisitwithparentcursor"},{"name":"Fix missing braces","href":"staticanalysis/needbraces"},{"name":"Remove `System.out#println` statements","href":"staticanalysis/removesystemoutprintln"},{"name":"Remove `@NlsRewrite` annotations from `Recipe` classes","href":"java/recipes/removenlsrewriteannotations"}]} preconditions={[{"name":"Find types","href":"java/search/findtypes"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.recipes.JavaRecipeBestPractices","displayName":"Java Recipe best practices","groupId":"org.openrewrite.recipe","artifactId":"rewrite-rewrite","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

