---
title: "DevCenter card from a data table column"
sidebar_label: "DevCenter card from a data table column"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# DevCenter card from a data table column

**io.moderne.devcenter.BucketedMetricCard**

_Read rows from a previously emitted data table, aggregate a numeric column across all rows for this repository, and bucket the result into ordinal DevCenter measures._

## Recipe source

[GitHub: BucketedMetricCard.java](https://github.com/moderneinc/rewrite-devcenter/blob/main/src/main/java/io/moderne/devcenter/BucketedMetricCard.java),
[Issue Tracker](https://github.com/moderneinc/rewrite-devcenter/issues),
[Maven Central](https://central.sonatype.com/artifact/io.moderne.recipe/rewrite-devcenter/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | inputDataTable | The fully qualified class name of the data table to read rows from. This data table is expected to be populated by another recipe earlier in the same recipe list. | `io.moderne.organizations.table.ClassCohesion` |
| `String` | cardName | The display name of this DevCenter card. | `Class cohesion (LCOM4)` |
| `String` | column | The numeric column of the input data table to feed into the aggregation function. | `lcom4` |
| `AggregationFunction` | aggregation | How to reduce the column's values across all rows in the repository to a single representative value before bucketing. `MIN`, `MAX`, `SUM`, and `AVERAGE` operate on numeric values of the column. `COUNT` returns the number of rows the upstream data table emitted for this repository, regardless of column value. `UNIQUE` returns the number of distinct non-null values of the column. Matching is case-insensitive. Valid options: `MIN`, `MAX`, `SUM`, `AVERAGE`, `COUNT`, `UNIQUE` | `AVERAGE` |
| `Bucket[]` | buckets | Ordered list of buckets. Each bucket has a `name` and an inclusive lower bound `moreThan` — a value is considered to fall into the bucket when `value >= moreThan`. When multiple buckets apply, the one with the largest `moreThan` wins. The list order defines the DevCenter measure ordinal: the first bucket maps to ordinal `0`, the last to ordinal `size - 1`. This lets callers control which end of the scale the visualization renders as "worst" (lowest ordinal) versus "best" (highest ordinal). | `[{"name": "LOW", "moreThan": 10}, {"name": "MEDIUM", "moreThan": 3}, {"name": "HIGH", "moreThan": 0}]` |


## Used by

This recipe is used as part of the following composite recipes:

* [Class cohesion DevCenter](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/devcenter/classcohesiondevcenter)


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options.
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.BucketedMetricCardExample
displayName: DevCenter card from a data table column example
recipeList:
  - io.moderne.devcenter.BucketedMetricCard:
      inputDataTable: io.moderne.organizations.table.ClassCohesion
      cardName: Class cohesion (LCOM4)
      column: lcom4
      aggregation: AVERAGE
      buckets: [{"name": "LOW", "moreThan": 10}, {"name": "MEDIUM", "moreThan": 3}, {"name": "HIGH", "moreThan": 0}]
```

<RunRecipe
  recipeName="io.moderne.devcenter.BucketedMetricCard"
  displayName="DevCenter card from a data table column"
  groupId="io.moderne.recipe"
  artifactId="rewrite-devcenter"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER"
  requiresConfiguration
  cliOptions={' --recipe-option "inputDataTable=io.moderne.organizations.table.ClassCohesion" --recipe-option "cardName=Class cohesion (LCOM4)" --recipe-option "column=lcom4" --recipe-option "aggregation=AVERAGE" --recipe-option "buckets=[{"name": "LOW", "moreThan": 10}, {"name": "MEDIUM", "moreThan": 3}, {"name": "HIGH", "moreThan": 0}]"'}
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.devcenter.BucketedMetricCard" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.devcenter.table.UpgradesAndMigrations" label="UpgradesAndMigrations">

### Upgrades and migrations
**io.moderne.devcenter.table.UpgradesAndMigrations**

_Progress towards organizational objectives on library or language migrations and upgrades._

| Column Name | Description |
| ----------- | ----------- |
| Card | The display name of the DevCenter card |
| Ordinal | The ordinal position of this value relative to other values. |
| Value | The display value of the current state of this repository. |
| Minimum version | The minimum matching version that is currently in use. |

</TabItem>

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
