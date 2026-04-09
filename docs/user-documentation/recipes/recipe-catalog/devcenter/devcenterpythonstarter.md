---
sidebar_label: "DevCenter for Python"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# DevCenter for Python

**io.moderne.devcenter.DevCenterPythonStarter**

_A default DevCenter configuration for Python repositories. Track Python version adoption across your organization._

## Recipe source

[GitHub: python-devcenter.yml](https://github.com/moderneinc/rewrite-devcenter/blob/main/src/main/resources/META-INF/rewrite/python-devcenter.yml),
[Issue Tracker](https://github.com/moderneinc/rewrite-devcenter/issues),
[Maven Central](https://central.sonatype.com/artifact/io.moderne.recipe/rewrite-devcenter/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Move to a later Python version](../devcenter/pythonversionupgrade)
  * minorVersion: `13`
* [Find organization statistics](../devcenter/findorganizationstatistics)
* [Find committers on repositories](../search/findcommitters)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.devcenter.DevCenterPythonStarter
displayName: DevCenter for Python
description: |
  A default DevCenter configuration for Python repositories. Track Python version adoption across your organization.
recipeList:
  - io.moderne.devcenter.PythonVersionUpgrade:
      minorVersion: 13
  - io.moderne.devcenter.FindOrganizationStatistics
  - org.openrewrite.search.FindCommitters

```
</TabItem>
</Tabs>

## Usage

<RunRecipe
  recipeName="io.moderne.devcenter.DevCenterPythonStarter"
  displayName="DevCenter for Python"
  groupId="io.moderne.recipe"
  artifactId="rewrite-devcenter"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.devcenter.DevCenterPythonStarter" />

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

<TabItem value="io.moderne.devcenter.table.OrganizationStatistics" label="OrganizationStatistics">

### Organization statistics
**io.moderne.devcenter.table.OrganizationStatistics**

_Per-repository statistics aggregated at the organization level._

| Column Name | Description |
| ----------- | ----------- |
| Line count | The number of lines of code in this repository. |

</TabItem>

<TabItem value="org.openrewrite.table.DistinctCommitters" label="DistinctCommitters">

### Repository committers
**org.openrewrite.table.DistinctCommitters**

_The distinct set of committers per repository._

| Column Name | Description |
| ----------- | ----------- |
| Name | The name of the committer. |
| Email | The email of the committer. |
| Last commit | The date of this committer's last commit. |
| Number of commits | The number of commits made by this committer. |

</TabItem>

<TabItem value="org.openrewrite.table.CommitsByDay" label="CommitsByDay">

### Commits by day
**org.openrewrite.table.CommitsByDay**

_The commit activity by day by committer._

| Column Name | Description |
| ----------- | ----------- |
| Name | The name of the committer. |
| Email | The email of the committer. |
| Date | The date of the day. |
| Number of commits | The number of commits made by this committer on this day. |

</TabItem>

</Tabs>
