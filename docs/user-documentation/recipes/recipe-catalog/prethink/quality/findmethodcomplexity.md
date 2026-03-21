---
sidebar_label: "Find method complexity"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find method complexity

**io.moderne.prethink.quality.FindMethodComplexity**

_Compute per-method code quality metrics including cyclomatic complexity, cognitive complexity, max nesting depth, line count, parameter count, ABC metric, and Halstead measures._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Update Prethink context (no AI)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextnoaistarter)
* [Update Prethink context (with AI)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextstarter)


## Usage

<RunRecipe
  recipeName="io.moderne.prethink.quality.FindMethodComplexity"
  displayName="Find method complexity"
  groupId="io.moderne.recipe"
  artifactId="rewrite-prethink"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.prethink.quality.FindMethodComplexity" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.prethink.table.MethodQualityMetrics" label="MethodQualityMetrics">

### Method quality metrics
**io.moderne.prethink.table.MethodQualityMetrics**

_Per-method code quality metrics including cyclomatic complexity, cognitive complexity, nesting depth, Halstead measures, and ABC metric._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the method. |
| Class name | The fully qualified name of the containing class. |
| Method name | The simple name of the method. |
| Method signature | The full method signature including parameter types. |
| Cyclomatic complexity | Number of linearly independent paths through the method. 1-10 low, 11-20 moderate, 21-50 high, 50+ very high. |
| Cognitive complexity | Weighted complexity penalizing nesting depth and flow-breaking structures. |
| Max nesting depth | Maximum depth of nested control structures. |
| Line count | Number of lines in the method body. |
| Parameter count | Number of parameters the method accepts. |
| ABC score | ABC metric magnitude: sqrt(A^2 + B^2 + C^2) where A=assignments, B=branches (calls), C=conditions. |
| Assignments | Number of assignment operations (the A in ABC metric). |
| Branches | Number of method/function calls (the B in ABC metric). |
| Conditions | Number of boolean conditions (the C in ABC metric). |
| Halstead volume | Information content of the method: N * log2(n) where N=total operators+operands, n=distinct operators+operands. |
| Halstead difficulty | Error proneness: (n1/2) * (N2/n2) where n1=distinct operators, N2=total operands, n2=distinct operands. |
| Halstead estimated bugs | Estimated number of delivered bugs: E^(2/3) / 3000 where E = difficulty * volume. |

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
