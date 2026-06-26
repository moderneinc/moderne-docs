---
title: "Upgrade a lazily-initialized `@Nullable` field to `@MonotonicNonNull`"
sidebar_label: "Upgrade a lazily-initialized `@Nullable` field to `@MonotonicNonNull`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade a lazily-initialized `@Nullable` field to `@MonotonicNonNull`

**io.moderne.nullability.infer.UpgradeLazilyInitializedFieldToMonotonicNonNull**

_Upgrades a `private`, non-`final` JSpecify `@Nullable` reference field to the Checker Framework `@org.checkerframework.checker.nullness.qual.MonotonicNonNull` annotation when it is genuinely a lazily-initialized-non-null field, so NullAway treats reads of it as non-null and the `requireNonNull` noise a plain `@Nullable` would force at every read disappears. A field qualifies only if it is `private` and non-`final`, its declaration declares exactly one reference-typed variable, there is at least one assignment to it, EVERY assignment has a provably-non-null right-hand side (`new`, an array creation, a non-null literal, `this`, or a call to a method whose return is resolved and not `@Nullable`), at least one assignment is outside a constructor (the lazy signal), and EVERY null-observation of the field (`f == null`/`f != null`/`f instanceof X`) is a lazy-init guard — the condition of an `if` whose then-branch assigns the field. Conservative and sound by design: `private` bounds the analysis to the declaring class so it is complete, and the absence of any null-handling use means the upgrade is runtime-NPE-preserving — it only removes the `@Nullable` signal where `null` would already crash. Any field whose `null` is handled gracefully anywhere, or any condition that cannot be proven, leaves the field unchanged. Only Java sources are modified._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Prepare a codebase for NullAway](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/nullability/preparefornullaway)


## Usage

<RunRecipe
  recipeName="io.moderne.nullability.infer.UpgradeLazilyInitializedFieldToMonotonicNonNull"
  displayName="Upgrade a lazily-initialized `@Nullable` field to `@MonotonicNonNull`"
  groupId="io.moderne.recipe"
  artifactId="rewrite-nullability"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.nullability.infer.UpgradeLazilyInitializedFieldToMonotonicNonNull" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
