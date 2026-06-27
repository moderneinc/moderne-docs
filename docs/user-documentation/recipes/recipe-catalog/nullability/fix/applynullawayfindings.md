---
title: "Apply sound fixes for NullAway findings"
sidebar_label: "Apply sound fixes for NullAway findings"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Apply sound fixes for NullAway findings"}
  description={"Applies behavior-preserving fixes for the findings in a NullAway WARN-level compile report, driven by the exact `file:line` locations NullAway reported. Dereferences of a `@Nullable` value, `@Nullable` values that are unboxed, `@Nullable` arguments passed where a `@NonNull` parameter is required, and `@Nullable` `switch` selectors are all wrapped in `requireNonNull(...)` (statically imported from `java.util.Objects`, which throws exactly when the original code already would). Uninitialized `@NonNull` fields (instance or `static`) are annotated `@MonotonicNonNull`, methods that return a `@Nullable` value get a JSpecify `@Nullable` return type, fields assigned a `@Nullable` value get a JSpecify `@Nullable` (which takes precedence over `@MonotonicNonNull`), and a parameter that an override declares `@NonNull` while its supertype declares it `@Nullable` gets a JSpecify `@Nullable`. No warnings are suppressed and runtime behavior is unchanged. The recipe is idempotent and conservative: for an `@Override` it resolves the overridden supertype method's return nullability from the type model and acts covariantly (widen to `@Nullable` only when the overridden return is `@Nullable`; otherwise assert `@NonNull` with `requireNonNull`, or leave it alone when the contract is unknown), and it never emits invalid Java — on qualified/nested types it places the annotation in the type-use position (`Outer.@MonotonicNonNull Inner`). Only Java sources are modified."}
  fqName={"io.moderne.nullability.fix.ApplyNullAwayFindings"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.fix.ApplyNullAwayFindings"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.fix.ApplyNullAwayFindings"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/fix/applynullawayfindings.md"}
  moderneOnly
>

<RecipeHeader.Title>Apply sound fixes for NullAway findings</RecipeHeader.Title>

<RecipeHeader.Description>Applies behavior-preserving fixes for the findings in a NullAway WARN-level compile report, driven by the exact `file:line` locations NullAway reported. Dereferences of a `@Nullable` value, `@Nullable` values that are unboxed, `@Nullable` arguments passed where a `@NonNull` parameter is required, and `@Nullable` `switch` selectors are all wrapped in `requireNonNull(...)` (statically imported from `java.util.Objects`, which throws exactly when the original code already would). Uninitialized `@NonNull` fields (instance or `static`) are annotated `@MonotonicNonNull`, methods that return a `@Nullable` value get a JSpecify `@Nullable` return type, fields assigned a `@Nullable` value get a JSpecify `@Nullable` (which takes precedence over `@MonotonicNonNull`), and a parameter that an override declares `@NonNull` while its supertype declares it `@Nullable` gets a JSpecify `@Nullable`. No warnings are suppressed and runtime behavior is unchanged. The recipe is idempotent and conservative: for an `@Override` it resolves the overridden supertype method's return nullability from the type model and acts covariantly (widen to `@Nullable` only when the overridden return is `@Nullable`; otherwise assert `@NonNull` with `requireNonNull`, or leave it alone when the contract is unknown), and it never emits invalid Java — on qualified/nested types it places the annotation in the type-use position (`Outer.@MonotonicNonNull Inner`). Only Java sources are modified.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"reportPath","required":true,"description":"Absolute path to a file containing the raw NullAway WARN-level compile output. Every line mentioning `[NullAway]` is parsed as a finding (`/abs/path/Foo.java:123: warning: [NullAway] ...`); all other lines are ignored.","example":"/tmp/nullaway-report.txt"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.nullability.fix.ApplyNullAwayFindings","displayName":"Apply sound fixes for NullAway findings","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":true,"cliOptions":" --recipe-option \"reportPath=/tmp/nullaway-report.txt\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

