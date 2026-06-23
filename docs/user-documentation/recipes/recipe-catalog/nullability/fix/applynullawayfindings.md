---
title: "Apply sound fixes for NullAway findings"
sidebar_label: "Apply sound fixes for NullAway findings"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Apply sound fixes for NullAway findings

**io.moderne.nullability.fix.ApplyNullAwayFindings**

_Applies behavior-preserving fixes for the findings in a NullAway WARN-level compile report, driven by the exact `file:line` locations NullAway reported. Dereferences of a `@Nullable` value, `@Nullable` values that are unboxed, `@Nullable` arguments passed where a `@NonNull` parameter is required, and `@Nullable` `switch` selectors are all wrapped in `requireNonNull(...)` (statically imported from `java.util.Objects`, which throws exactly when the original code already would). Uninitialized `@NonNull` fields (instance or `static`) are annotated `@MonotonicNonNull`, methods that return a `@Nullable` value get a JSpecify `@Nullable` return type, fields assigned a `@Nullable` value get a JSpecify `@Nullable` (which takes precedence over `@MonotonicNonNull`), and a parameter that an override declares `@NonNull` while its supertype declares it `@Nullable` gets a JSpecify `@Nullable`. No warnings are suppressed and runtime behavior is unchanged. The recipe is idempotent and conservative: for an `@Override` it resolves the overridden supertype method's return nullability from the type model and acts covariantly (widen to `@Nullable` only when the overridden return is `@Nullable`; otherwise assert `@NonNull` with `requireNonNull`, or leave it alone when the contract is unknown), and it never emits invalid Java — on qualified/nested types it places the annotation in the type-use position (`Outer.@MonotonicNonNull Inner`). Only Java sources are modified._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | reportPath | Absolute path to a file containing the raw NullAway WARN-level compile output. Every line mentioning `[NullAway]` is parsed as a finding (`/abs/path/Foo.java:123: warning: [NullAway] ...`); all other lines are ignored. | `/tmp/nullaway-report.txt` |


## Used by

This recipe is used as part of the following composite recipes:

* [Apply NullAway findings from a WARN report](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/nullability/applynullawayfindingsfromreport)


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options.
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ApplyNullAwayFindingsExample
displayName: Apply sound fixes for NullAway findings example
recipeList:
  - io.moderne.nullability.fix.ApplyNullAwayFindings:
      reportPath: /tmp/nullaway-report.txt
```

<RunRecipe
  recipeName="io.moderne.nullability.fix.ApplyNullAwayFindings"
  displayName="Apply sound fixes for NullAway findings"
  groupId="io.moderne.recipe"
  artifactId="rewrite-nullability"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY"
  requiresConfiguration
  cliOptions={' --recipe-option "reportPath=/tmp/nullaway-report.txt"'}
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.nullability.fix.ApplyNullAwayFindings" />

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
