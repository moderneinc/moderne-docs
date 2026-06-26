---
title: "Find Gradle root project to subproject relationships"
sidebar_label: "Find Gradle root project to subproject relationships"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Gradle root project to subproject relationships"}
  description={"Gradle has no parent-project concept like Maven. The closest analog is the root project of a multi-project build, so this recipe records the GAV coordinates of each subproject paired with the root project."}
  fqName={"io.moderne.recipe.releasemetro.FindGradleParentRelationships"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find Gradle root project to subproject relationships"}
  description={"Gradle has no parent-project concept like Maven. The closest analog is the root project of a multi-project build, so this recipe records the GAV coordinates of each subproject paired with the root project."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.recipe.releasemetro.FindGradleParentRelationships"}
  artifact={"io.moderne.recipe:rewrite-release-metromap"}
  appLink={"https://app.moderne.io/recipes/io.moderne.recipe.releasemetro.FindGradleParentRelationships"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/recipe/releasemetro/findgradleparentrelationships.md"}
  moderneOnly
/>

<ExampleList examples={[{"unchanged":{"language":"buildGradleKts","code":"plugins {\n    id(\"java\")\n}\n\ngroup = \"org.openrewrite.recipe\"\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.recipe.releasemetro.FindGradleParentRelationships","displayName":"Find Gradle root project to subproject relationships","groupId":"io.moderne.recipe","artifactId":"rewrite-release-metromap","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_RELEASE_METROMAP","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.recipe.releasemetro.table.ParentRelationships","displayName":"Maven parent and Gradle project hierarchies","description":"Relationships between Maven child modules and their parent POMs, or Gradle subprojects and their root project.","columns":[{"name":"childGroupId","description":"Group ID of the child project"},{"name":"childArtifactId","description":"Artifact ID of the child project"},{"name":"parentGroupId","description":"Group ID of the parent project"},{"name":"parentArtifactId","description":"Artifact ID of the parent project"},{"name":"parentVersion","description":"Version of the parent project"},{"name":"hierarchyType","description":"Type of hierarchy relationship (MAVEN_PARENT or GRADLE_PARENT)"}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

