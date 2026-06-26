---
title: "DevCenter card from a data table column"
sidebar_label: "DevCenter card from a data table column"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"DevCenter card from a data table column"}
  description={"Read rows from a previously emitted data table, aggregate a numeric column across all rows for this repository, and bucket the result into ordinal DevCenter measures."}
  fqName={"io.moderne.devcenter.BucketedMetricCard"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
/>

<RecipeHeader
  displayName={"DevCenter card from a data table column"}
  description={"Read rows from a previously emitted data table, aggregate a numeric column across all rows for this repository, and bucket the result into ordinal DevCenter measures."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"io.moderne.devcenter.BucketedMetricCard"}
  artifact={"io.moderne.recipe:rewrite-devcenter"}
  appLink={"https://app.moderne.io/recipes/io.moderne.devcenter.BucketedMetricCard"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/devcenter/bucketedmetriccard.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"String","name":"inputDataTable","required":true,"description":"The fully qualified class name of the data table to read rows from. This data table is expected to be populated by another recipe earlier in the same recipe list.","example":"io.moderne.organizations.table.ClassCohesion"},{"type":"String","name":"cardName","required":true,"description":"The display name of this DevCenter card.","example":"Class cohesion (LCOM4)"},{"type":"String","name":"column","required":true,"description":"The numeric column of the input data table to feed into the aggregation function.","example":"lcom4"},{"type":"AggregationFunction","name":"aggregation","required":true,"description":"How to reduce the column's values across all rows in the repository to a single representative value before bucketing. `MIN`, `MAX`, `SUM`, and `AVERAGE` operate on numeric values of the column. `COUNT` returns the number of rows the upstream data table emitted for this repository, regardless of column value. `UNIQUE` returns the number of distinct non-null values of the column. Matching is case-insensitive.","example":"AVERAGE"},{"type":"Bucket[]","name":"buckets","required":true,"description":"Ordered list of buckets. Each bucket has a `name` and an inclusive lower bound `moreThan` — a value is considered to fall into the bucket when `value >= moreThan`. When multiple buckets apply, the one with the largest `moreThan` wins. The list order defines the DevCenter measure ordinal: the first bucket maps to ordinal `0`, the last to ordinal `size - 1`. This lets callers control which end of the scale the visualization renders as \"worst\" (lowest ordinal) versus \"best\" (highest ordinal).","example":"[{\"name\": \"LOW\", \"moreThan\": 10}, {\"name\": \"MEDIUM\", \"moreThan\": 3}, {\"name\": \"HIGH\", \"moreThan\": 0}]"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.devcenter.BucketedMetricCard","displayName":"DevCenter card from a data table column","groupId":"io.moderne.recipe","artifactId":"rewrite-devcenter","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER","requiresConfiguration":true,"cliOptions":" --recipe-option \"inputDataTable=io.moderne.organizations.table.ClassCohesion\" --recipe-option \"cardName=Class cohesion (LCOM4)\" --recipe-option \"column=lcom4\" --recipe-option \"aggregation=AVERAGE\" --recipe-option \"buckets=[{\"name\": \"LOW\", \"moreThan\": 10}, {\"name\": \"MEDIUM\", \"moreThan\": 3}, {\"name\": \"HIGH\", \"moreThan\": 0}]\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.devcenter.table.UpgradesAndMigrations","displayName":"Upgrades and migrations","description":"Progress towards organizational objectives on library or language migrations and upgrades.","columns":[{"name":"Card","description":"The display name of the DevCenter card"},{"name":"Ordinal","description":"The ordinal position of this value relative to other values."},{"name":"Value","description":"The display value of the current state of this repository."},{"name":"Minimum version","description":"The minimum matching version that is currently in use."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

