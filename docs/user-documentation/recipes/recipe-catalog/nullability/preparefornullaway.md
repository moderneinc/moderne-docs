---
title: "Prepare a codebase for NullAway"
sidebar_label: "Prepare a codebase for NullAway"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prepare a codebase for NullAway"}
  description={"The end-to-end, code-level preparation for enabling [NullAway](https://github.com/uber/NullAway): standardize nullability annotations to JSpecify, infer and add `@Nullable` everywhere a value is provably nullable, and apply the null-safety code refactors (lazily-initialized fields get `@MonotonicNonNull`; nullable field reads are hoisted into locals so the checker can refine them). This covers the safe, automatic transformations. The deliberately-gated rollout steps — marking `@NullMarked` scopes (`io.moderne.nullability.scope.*`) and wiring NullAway into the build (`io.moderne.nullability.build.*`) — are intentionally NOT included here; run them per module once `io.moderne.nullability.search.NullAwayReadinessReport` shows that module is clean."}
  fqName={"io.moderne.nullability.PrepareForNullAway"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["nullaway","jspecify","nullability"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.PrepareForNullAway"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.PrepareForNullAway"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/preparefornullaway.md"}
  moderneOnly
>

<RecipeHeader.Title>Prepare a codebase for NullAway</RecipeHeader.Title>

<RecipeHeader.Description>The end-to-end, code-level preparation for enabling [NullAway](https://github.com/uber/NullAway): standardize nullability annotations to JSpecify, infer and add `@Nullable` everywhere a value is provably nullable, and apply the null-safety code refactors (lazily-initialized fields get `@MonotonicNonNull`; nullable field reads are hoisted into locals so the checker can refine them). This covers the safe, automatic transformations. The deliberately-gated rollout steps — marking `@NullMarked` scopes (`io.moderne.nullability.scope.*`) and wiring NullAway into the build (`io.moderne.nullability.build.*`) — are intentionally NOT included here; run them per module once `io.moderne.nullability.search.NullAwayReadinessReport` shows that module is clean.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate existing nullability annotations to JSpecify","href":"/user-documentation/recipes/recipe-catalog/nullability/migrate/migratenullabilitytojspecify/"},{"name":"Infer and add `@Nullable` annotations","href":"/user-documentation/recipes/recipe-catalog/nullability/infer/infernullability/"},{"name":"Remove a redundant declaration-position `@Nullable` on a method return","href":"/user-documentation/recipes/recipe-catalog/nullability/cleanup/removeredundantnullableonmethodreturn/"},{"name":"Relocate a misplaced leading `@Nullable` on a primitive array to the array reference","href":"/user-documentation/recipes/recipe-catalog/nullability/cleanup/relocatenullabletoarrayreference/"},{"name":"Move a leading `@Nullable` to the type-use position","href":"/user-documentation/recipes/recipe-catalog/nullability/cleanup/movenullabletotypeuseposition/"},{"name":"Use `@MonotonicNonNull` for lazily-initialized fields","href":"/user-documentation/recipes/recipe-catalog/nullability/cleanup/usemonotonicnonnullforlazyinitializedfield/"},{"name":"Upgrade a lazily-initialized `@Nullable` field to `@MonotonicNonNull`","href":"/user-documentation/recipes/recipe-catalog/nullability/infer/upgradelazilyinitializedfieldtomonotonicnonnull/"},{"name":"Hoist a guarded `@Nullable` field read into a local variable","href":"/user-documentation/recipes/recipe-catalog/nullability/cleanup/hoistnullablefieldreadintolocal/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.nullability.PrepareForNullAway","displayName":"Prepare a codebase for NullAway","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

