---
sidebar_label: "Find class quality metrics"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find class quality metrics

**io.moderne.prethink.quality.FindClassMetrics**

_Compute per-class code quality metrics including WMC, LCOM4, TCC, CBO, and maintainability index._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Update Prethink context (no AI)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextnoaistarter)
* [Update Prethink context (with AI)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextstarter)


## Usage

<RunRecipe
  recipeName="io.moderne.prethink.quality.FindClassMetrics"
  displayName="Find class quality metrics"
  groupId="io.moderne.recipe"
  artifactId="rewrite-prethink"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.prethink.quality.FindClassMetrics" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.prethink.table.ClassQualityMetrics" label="ClassQualityMetrics">

### Class quality metrics
**io.moderne.prethink.table.ClassQualityMetrics**

_Per-class code quality metrics including WMC, LCOM4, TCC, CBO, and maintainability index._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the class. |
| Class name | The fully qualified name of the class. |
| Line count | Number of lines in the class. |
| Method count | Number of methods defined in the class. |
| Field count | Number of fields defined in the class. |
| WMC | Weighted Methods per Class: sum of cyclomatic complexities of all methods. |
| LCOM4 | Lack of Cohesion of Methods (Hitz-Montazeri): number of connected components in the method-field access graph. 1 = cohesive, &gt;1 = should be split. |
| TCC | Tight Class Cohesion: proportion of directly connected method pairs (sharing field access). 0.0-1.0, higher is more cohesive. |
| CBO | Coupling Between Objects: number of distinct classes this class is coupled to. |
| Maintainability index | Composite score (0-100) combining Halstead Volume, cyclomatic complexity, and LOC. Higher is more maintainable. |

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
