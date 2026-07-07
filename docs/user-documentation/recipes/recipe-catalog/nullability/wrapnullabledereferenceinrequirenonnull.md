---
title: "Wrap nullable dereferenced values in `requireNonNull`"
sidebar_label: "Wrap nullable dereferenced values in `requireNonNull`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Wrap nullable dereferenced values in `requireNonNull`"}
  description={"Wraps in `java.util.Objects.requireNonNull(...)` (statically imported) a provably-nullable value that is being dereferenced — the receiver of a method call (`x.foo()`), the target of a field access (`x.field`, including `x.length`), the base of an array index (`x[i]`), the qualifier of a method reference (`x::foo`), the outer instance of a qualified `new`, or the lock of a `synchronized (x)`. Inside an annotated scope NullAway treats such a dereference as an error because it throws `NullPointerException` when the value is `null`; `requireNonNull` throws exactly when the dereference already would, so runtime behavior is unchanged. The value's nullness is resolved by attribution from the nullability model and a path-sensitive flow analysis (a value already null-checked on the path is not flagged). A `.class` literal, a type or package qualifier, a primitive, and a `throw` expression are never touched. The fix never asserts non-null on a value that is genuinely nullable at the site. Idempotent and conservative; only Java sources are modified."}
  fqName={"io.moderne.nullability.WrapNullableDereferenceInRequireNonNull"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.WrapNullableDereferenceInRequireNonNull"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.WrapNullableDereferenceInRequireNonNull"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/wrapnullabledereferenceinrequirenonnull.md"}
  moderneOnly
>

<RecipeHeader.Title>Wrap nullable dereferenced values in `requireNonNull`</RecipeHeader.Title>

<RecipeHeader.Description>Wraps in `java.util.Objects.requireNonNull(...)` (statically imported) a provably-nullable value that is being dereferenced — the receiver of a method call (`x.foo()`), the target of a field access (`x.field`, including `x.length`), the base of an array index (`x[i]`), the qualifier of a method reference (`x::foo`), the outer instance of a qualified `new`, or the lock of a `synchronized (x)`. Inside an annotated scope NullAway treats such a dereference as an error because it throws `NullPointerException` when the value is `null`; `requireNonNull` throws exactly when the dereference already would, so runtime behavior is unchanged. The value's nullness is resolved by attribution from the nullability model and a path-sensitive flow analysis (a value already null-checked on the path is not flagged). A `.class` literal, a type or package qualifier, a primitive, and a `throw` expression are never touched. The fix never asserts non-null on a value that is genuinely nullable at the site. Idempotent and conservative; only Java sources are modified.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"annotatedPackages","required":false,"description":"Comma-separated package prefixes to limit the fix to (matching NullAway's `AnnotatedPackages` option). When unset, the recipe fixes all packages.","example":"com.example"},{"type":"AssertionStyle","name":"assertionStyle","required":false,"description":"The non-null assertion form to emit at a wrap site. `AUTO` (the default) inspects the classpath: Guava present (`com.google.common`) emits `Preconditions.checkNotNull`, otherwise `Objects.requireNonNull`. `CAST_TO_NON_NULL` is explicit-only (it is suppression-like — no runtime throw) and never auto-selected."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.nullability.WrapNullableDereferenceInRequireNonNull","displayName":"Wrap nullable dereferenced values in `requireNonNull`","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.nullability.table.NullFixes","displayName":"Null-safety fixes by rung","description":"Each residual null-safety fix applied, tagged with the precedence rung that produced it, so the share bottoming out at a last-resort `requireNonNull` assertion can be tracked.","columns":[{"name":"Source path","description":"The path of the source file that was fixed."},{"name":"Recipe name","description":"The name of the recipe that applied the fix."},{"name":"Rung","description":"The precedence rung that produced the fix (INFER, PLACE, RESTRUCTURE, GRACEFUL_NULL, or ASSERT_NON_NULL). ASSERT_NON_NULL is the last resort; the others are progressively more sophisticated transformations that avoid it."},{"name":"Rung ordinal","description":"The rung's position in the precedence ladder (0 = most sophisticated, 4 = the last-resort ASSERT_NON_NULL). A numeric sort key for ordering fixes by rung in a BI system."},{"name":"Behavior changing","description":"Whether the fix alters observable runtime behavior on the null path. True only for GRACEFUL_NULL fixes (which also carry a behavior-change marker); every other rung is behavior-preserving, including the ASSERT_NON_NULL requireNonNull wrap."}]},{"name":"io.moderne.nullability.table.DeclinedNullFixes","displayName":"Declined null-safety fixes needing review","description":"Each site the recipe declined to auto-fix because the fix is a design decision (the value is explicitly `null` on some path, so the slot likely should be `@Nullable`), for human triage.","columns":[{"name":"Source path","description":"The path of the source file containing the declined site."},{"name":"Recipe name","description":"The name of the recipe that declined the fix."},{"name":"Reason","description":"Why the fix was declined (e.g. EXPLICIT_NULL: the value is explicitly `null` on some path, so wrapping it would throw rather than assert)."},{"name":"Detail","description":"A human-readable description of the declined site and the design decision it needs."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

