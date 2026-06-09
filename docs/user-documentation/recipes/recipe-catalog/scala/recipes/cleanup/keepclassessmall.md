---
title: "Keep classes small (max 30 members)"
sidebar_label: "Keep classes small (max 30 members)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Keep classes small (max 30 members)

**org.openrewrite.scala.recipes.cleanup.KeepClassesSmall**

_Finds classes with more than 30 members. Large classes are harder to maintain; consider splitting into smaller classes._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Example


<Tabs groupId="beforeAfter">
<TabItem value="scala" label="scala">


###### Before
```scala
class BigService {
    val f1 = 1
    val f2 = 2
    val f3 = 3
    val f4 = 4
    val f5 = 5
    val f6 = 6
    val f7 = 7
    val f8 = 8
    val f9 = 9
    val f10 = 10
    val f11 = 11
    val f12 = 12
    val f13 = 13
    val f14 = 14
    val f15 = 15
    val f16 = 16
    val f17 = 17
    val f18 = 18
    val f19 = 19
    val f20 = 20
    val f21 = 21
    val f22 = 22
    val f23 = 23
    val f24 = 24
    val f25 = 25
    val f26 = 26
    val f27 = 27
    val f28 = 28
    val f29 = 29
    val f30 = 30
    val f31 = 31
}
```

###### After
```scala
/*~~(Class has too many members; consider splitting)~~>*/class BigService {
    val f1 = 1
    val f2 = 2
    val f3 = 3
    val f4 = 4
    val f5 = 5
    val f6 = 6
    val f7 = 7
    val f8 = 8
    val f9 = 9
    val f10 = 10
    val f11 = 11
    val f12 = 12
    val f13 = 13
    val f14 = 14
    val f15 = 15
    val f16 = 16
    val f17 = 17
    val f18 = 18
    val f19 = 19
    val f20 = 20
    val f21 = 21
    val f22 = 22
    val f23 = 23
    val f24 = 24
    val f25 = 25
    val f26 = 26
    val f27 = 27
    val f28 = 28
    val f29 = 29
    val f30 = 30
    val f31 = 31
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-class BigService {
+/*~~(Class has too many members; consider splitting)~~>*/class BigService {
    val f1 = 1
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.scala.recipes.cleanup.KeepClassesSmall"
  displayName="Keep classes small (max 30 members)"
  groupId="io.moderne.recipe"
  artifactId="recipes-scala"
  versionKey="VERSION_IO_MODERNE_RECIPE_RECIPES_SCALA"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.scala.recipes.cleanup.KeepClassesSmall" />

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
