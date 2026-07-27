---
title: "Wrap nullable values that are auto-unboxed in `requireNonNull`"
sidebar_label: "Wrap nullable values that are auto-unboxed in `requireNonNull`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Wrap nullable values that are auto-unboxed in `requireNonNull`"}
  description={"Wraps a provably-nullable boxed value (`Integer`, `Long`, `Boolean`, ...) that is used in a primitive context in `java.util.Objects.requireNonNull(...)` (statically imported). Unboxing such a value is a NullAway error inside an annotated scope, and auto-unboxing a `null` already throws `NullPointerException`, so `requireNonNull` throws exactly where the unboxing already would and runtime behavior is unchanged. The primitive contexts handled are an operand of an arithmetic, relational, or bitwise expression whose other side is a primitive (including `==`/`!=` against a primitive, but not a reference comparison or string concatenation), an argument bound to a primitive callee parameter, an array index, an `if`/`while`/`do`/`for`/ternary condition, and the `return` of a primitive-returning method. Nullability is determined from type attribution. The fix only fires where NullAway is active and never asserts non-null on a value that is genuinely nullable at the site. The recipe is idempotent and conservative; only Java sources are modified."}
  fqName={"io.moderne.nullability.WrapNullableUnboxingInRequireNonNull"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.WrapNullableUnboxingInRequireNonNull"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.WrapNullableUnboxingInRequireNonNull"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/wrapnullableunboxinginrequirenonnull.md"}
  moderneOnly
>

<RecipeHeader.Title>Wrap nullable values that are auto-unboxed in `requireNonNull`</RecipeHeader.Title>

<RecipeHeader.Description>Wraps a provably-nullable boxed value (`Integer`, `Long`, `Boolean`, ...) that is used in a primitive context in `java.util.Objects.requireNonNull(...)` (statically imported). Unboxing such a value is a NullAway error inside an annotated scope, and auto-unboxing a `null` already throws `NullPointerException`, so `requireNonNull` throws exactly where the unboxing already would and runtime behavior is unchanged. The primitive contexts handled are an operand of an arithmetic, relational, or bitwise expression whose other side is a primitive (including `==`/`!=` against a primitive, but not a reference comparison or string concatenation), an argument bound to a primitive callee parameter, an array index, an `if`/`while`/`do`/`for`/ternary condition, and the `return` of a primitive-returning method. Nullability is determined from type attribution. The fix only fires where NullAway is active and never asserts non-null on a value that is genuinely nullable at the site. The recipe is idempotent and conservative; only Java sources are modified.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"annotatedPackages","required":false,"description":"Comma-separated package prefixes to limit the fix to (matching NullAway's `AnnotatedPackages` option). When unset, the recipe fixes all packages.","example":"com.example"},{"type":"AssertionStyle","name":"assertionStyle","required":false,"description":"The non-null assertion form to emit at a wrap site. `AUTO` (the default) inspects the classpath: Guava present (`com.google.common`) emits `Preconditions.checkNotNull`, otherwise `Objects.requireNonNull`. `CAST_TO_NON_NULL` is explicit-only (it is suppression-like — no runtime throw) and never auto-selected."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.nullability.WrapNullableUnboxingInRequireNonNull","displayName":"Wrap nullable values that are auto-unboxed in `requireNonNull`","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.nullability.table.NullFixes","displayName":"Null-safety fixes by rung","description":"Each residual null-safety fix applied, tagged with the precedence rung that produced it, so the share bottoming out at a last-resort `requireNonNull` assertion can be tracked.","columns":[{"name":"Source path","description":"The path of the source file that was fixed."},{"name":"Recipe name","description":"The name of the recipe that applied the fix."},{"name":"Rung","description":"The precedence rung that produced the fix (INFER, PLACE, RESTRUCTURE, GRACEFUL_NULL, or ASSERT_NON_NULL). ASSERT_NON_NULL is the last resort; the others are progressively more sophisticated transformations that avoid it."},{"name":"Rung ordinal","description":"The rung's position in the precedence ladder (0 = most sophisticated, 4 = the last-resort ASSERT_NON_NULL). A numeric sort key for ordering fixes by rung in a BI system."},{"name":"Behavior changing","description":"Whether the fix alters observable runtime behavior on the null path. True only for GRACEFUL_NULL fixes (which also carry a behavior-change marker); every other rung is behavior-preserving, including the ASSERT_NON_NULL requireNonNull wrap."}]},{"name":"io.moderne.nullability.table.DeclinedNullFixes","displayName":"Declined null-safety fixes needing review","description":"Each site the recipe declined to auto-fix because the fix is a design decision (the value is explicitly `null` on some path, so the slot likely should be `@Nullable`), for human triage.","columns":[{"name":"Source path","description":"The path of the source file containing the declined site."},{"name":"Recipe name","description":"The name of the recipe that declined the fix."},{"name":"Reason","description":"Why the fix was declined (e.g. EXPLICIT_NULL: the value is explicitly `null` on some path, so wrapping it would throw rather than assert)."},{"name":"Detail","description":"A human-readable description of the declined site and the design decision it needs."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

