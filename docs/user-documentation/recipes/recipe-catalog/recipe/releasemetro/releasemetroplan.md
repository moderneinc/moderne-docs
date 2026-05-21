---
sidebar_label: "Analyse Organization's Release Train Metro Plan"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Analyse Organization's Release Train Metro Plan

**io.moderne.recipe.releasemetro.ReleaseMetroPlan**

_Gathers the basic information to create and understand the organizations release train metro plan._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="io.moderne.recipe.releasemetro.ReleaseMetroPlan"
  displayName="Analyse Organization's Release Train Metro Plan"
  groupId="io.moderne.recipe"
  artifactId="rewrite-release-metromap"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_RELEASE_METROMAP"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.recipe.releasemetro.ReleaseMetroPlan" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.recipe.releasemetro.table.ProjectCoordinates" label="ProjectCoordinates">

### Maven or Gradle Artifact coordinates IDs
**io.moderne.recipe.releasemetro.table.ProjectCoordinates**

_Maven Modules or Gradle (sub-)project groupId and artifactId._

| Column Name | Description |
| ----------- | ----------- |
| groupId | Group ID of the current module/subproject |
| artifactId | Artifact ID of the current module/subproject |

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

<TabItem value="io.moderne.recipe.releasemetro.table.ParentRelationships" label="ParentRelationships">

### Maven Parent and Gradle Project Hierarchies
**io.moderne.recipe.releasemetro.table.ParentRelationships**

_Relationships between child projects and their parent POMs or Gradle parent projects._

| Column Name | Description |
| ----------- | ----------- |
| childGroupId | Group ID of the child project |
| childArtifactId | Artifact ID of the child project |
| parentGroupId | Group ID of the parent project |
| parentArtifactId | Artifact ID of the parent project |
| parentVersion | Version of the parent project |
| hierarchyType | Type of hierarchy relationship (MAVEN_PARENT or GRADLE_PARENT) |

</TabItem>

<TabItem value="io.moderne.recipe.releasemetro.table.UnusedDependencies" label="UnusedDependencies">

### Potentially Unused Dependencies
**io.moderne.recipe.releasemetro.table.UnusedDependencies**

_Dependencies that are declared in build files but may not be used based on import analysis._

| Column Name | Description |
| ----------- | ----------- |
| dependencyGroupId | Group ID of the potentially unused dependency |
| dependencyArtifactId | Artifact ID of the potentially unused dependency |
| dependencyVersion | Version of the potentially unused dependency |
| dependencyScope | Scope of the dependency (compile, test, etc.) |
| isDirect | Whether this is a direct dependency (not transitive) |
| reasonSuspected | Reason why this dependency is suspected to be unused |

</TabItem>

<TabItem value="org.openrewrite.maven.table.DependenciesInUse" label="DependenciesInUse">

### Dependencies in use
**org.openrewrite.maven.table.DependenciesInUse**

_Direct and transitive dependencies in use._

| Column Name | Description |
| ----------- | ----------- |
| Project name | The name of the project that contains the dependency. |
| Source set | The source set that contains the dependency. |
| Group | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Artifact | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Version | The resolved version. |
| Dated snapshot version | The resolved dated snapshot version or `null` if this dependency is not a snapshot. |
| Scope | Dependency scope. This will be `compile` if the dependency is direct and a scope is not explicitly specified in the POM. |
| Count | How many times does this dependency appear. |

</TabItem>

</Tabs>
