---
title: "`ComparatorRules` Refaster recipes"
sidebar_label: "`ComparatorRules` Refaster recipes"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"`ComparatorRules` Refaster recipes"}
  description={"Refaster rules related to expressions dealing with `Comparator`s.\n[Source](https://error-prone.picnic.tech/refasterrules/ComparatorRules)."}
  fqName={"tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes"}
/>

<RecipeHeader
  displayName={"`ComparatorRules` Refaster recipes"}
  description={"Refaster rules related to expressions dealing with `Comparator`s.\n[Source](https://error-prone.picnic.tech/refasterrules/ComparatorRules)."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/comparatorrulesrecipes.md"}
/>

<RecipeList recipes={[{"name":"Refaster template `ComparatorRules.ReverseOrder`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$reverseorderrecipe"},{"name":"Refaster template `ComparatorRules.ThenComparing`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$thencomparingrecipe"},{"name":"Refaster template `ComparatorRules.ThenComparingReversed`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$thencomparingreversedrecipe"},{"name":"Refaster template `ComparatorRules.ThenComparingCustom`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$thencomparingcustomrecipe"},{"name":"Refaster template `ComparatorRules.ThenComparingCustomReversed`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$thencomparingcustomreversedrecipe"},{"name":"Refaster template `ComparatorRules.ThenComparingDouble`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$thencomparingdoublerecipe"},{"name":"Refaster template `ComparatorRules.ThenComparingInt`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$thencomparingintrecipe"},{"name":"Refaster template `ComparatorRules.ThenComparingLong`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$thencomparinglongrecipe"},{"name":"Refaster template `ComparatorRules.CompareTo`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$comparetorecipe"},{"name":"Refaster template `ComparatorRules.CollectionsSort`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$collectionssortrecipe"},{"name":"Refaster template `ComparatorRules.CollectionsMin`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$collectionsminrecipe"},{"name":"Refaster template `ComparatorRules.MinOfArray`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$minofarrayrecipe"},{"name":"Refaster template `ComparatorRules.CollectionsMinWithComparator`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$collectionsminwithcomparatorrecipe"},{"name":"Refaster template `ComparatorRules.MinOfVarargs`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$minofvarargsrecipe"},{"name":"Refaster template `ComparatorRules.CollectionsMax`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$collectionsmaxrecipe"},{"name":"Refaster template `ComparatorRules.MaxOfArray`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$maxofarrayrecipe"},{"name":"Refaster template `ComparatorRules.CollectionsMaxWithComparator`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$collectionsmaxwithcomparatorrecipe"},{"name":"Refaster template `ComparatorRules.MaxOfVarargs`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$maxofvarargsrecipe"},{"name":"Refaster template `ComparatorRules.Least`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$leastrecipe"},{"name":"Refaster template `ComparatorRules.Greatest`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$greatestrecipe"},{"name":"Refaster template `ComparatorRules.LeastNaturalOrder`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$leastnaturalorderrecipe"},{"name":"Refaster template `ComparatorRules.GreatestNaturalOrder`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$greatestnaturalorderrecipe"},{"name":"Refaster template `ComparatorRules.ComparatorsMin`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorsminrecipe"},{"name":"Refaster template `ComparatorRules.ComparatorsMax`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorsmaxrecipe"},{"name":"Refaster template `ComparatorRules.MinByNaturalOrder`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$minbynaturalorderrecipe"},{"name":"Refaster template `ComparatorRules.MaxByNaturalOrder`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$maxbynaturalorderrecipe"},{"name":"Refaster template `ComparatorRules.IsLessThan`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$islessthanrecipe"},{"name":"Refaster template `ComparatorRules.IsLessThanOrEqualTo`","href":"picnic/errorprone/refasterrules/comparatorrulesrecipes$islessthanorequaltorecipe"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes","displayName":"`ComparatorRules` Refaster recipes","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

