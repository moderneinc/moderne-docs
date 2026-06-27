---
title: "Infer and add `@Nullable` annotations"
sidebar_label: "Infer and add `@Nullable` annotations"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Infer and add `@Nullable` annotations"}
  description={"Infer where reference values can be null and add JSpecify `@Nullable` accordingly — across method return types, parameters, fields, override hierarchies, Kotlin call sites, and generic/array element types — together with OpenRewrite's static-analysis intra-body inference. Run after `io.moderne.nullability.migrate.MigrateNullabilityToJSpecify` so existing annotations are already in JSpecify form. Nullability propagates across files and converges over successive recipe cycles."}
  fqName={"io.moderne.nullability.infer.InferNullability"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["jspecify","nullability"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.infer.InferNullability"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.infer.InferNullability"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/infer/infernullability.md"}
  moderneOnly
>

<RecipeHeader.Title>Infer and add `@Nullable` annotations</RecipeHeader.Title>

<RecipeHeader.Description>Infer where reference values can be null and add JSpecify `@Nullable` accordingly — across method return types, parameters, fields, override hierarchies, Kotlin call sites, and generic/array element types — together with OpenRewrite's static-analysis intra-body inference. Run after `io.moderne.nullability.migrate.MigrateNullabilityToJSpecify` so existing annotations are already in JSpecify form. Nullability propagates across files and converges over successive recipe cycles.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Compose JSpecify best practices (intra-body nullability inference)","href":"/user-documentation/recipes/recipe-catalog/nullability/infer/composejspecifybestpractices/"},{"name":"Add `@Nullable` to methods that can return null","href":"/user-documentation/recipes/recipe-catalog/nullability/infer/addnullabletoreturntype/"},{"name":"Add `@Nullable` to method parameters that can receive null","href":"/user-documentation/recipes/recipe-catalog/nullability/infer/addnullabletoparametercrossfile/"},{"name":"Add `@Nullable` to fields that can hold null","href":"/user-documentation/recipes/recipe-catalog/nullability/infer/addnullabletofield/"},{"name":"Propagate `@Nullable` across override relationships","href":"/user-documentation/recipes/recipe-catalog/nullability/infer/propagatenullableacrossoverrides/"},{"name":"Infer Java `@Nullable` return types from Kotlin call sites","href":"/user-documentation/recipes/recipe-catalog/nullability/infer/inferjavanullabilityfromkotlincallsites/"},{"name":"Add `@Nullable` to array element types that can hold null","href":"/user-documentation/recipes/recipe-catalog/nullability/infer/addnullabletoarrayelementtype/"},{"name":"Add `@Nullable` to collection and map type arguments that hold null elements","href":"/user-documentation/recipes/recipe-catalog/nullability/infer/addnullabletotypeargument/"},{"name":"Add a `@Nullable` upper bound to a pass-through type parameter fed a null-returning lambda","href":"/user-documentation/recipes/recipe-catalog/nullability/infer/addnullableboundtopassthroughtypeparameter/"},{"name":"Add `@Nullable` to a functional-interface return type argument fed a null-returning lambda","href":"/user-documentation/recipes/recipe-catalog/nullability/infer/addnullabletofunctionalreturnargument/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.nullability.infer.InferNullability","displayName":"Infer and add `@Nullable` annotations","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

