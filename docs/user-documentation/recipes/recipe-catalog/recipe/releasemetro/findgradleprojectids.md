---
title: "Find Gradle project IDs"
sidebar_label: "Find Gradle project IDs"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Gradle project IDs"}
  description={"Find Gradle project IDs in build.gradle files to determine the project ID."}
  fqName={"io.moderne.recipe.releasemetro.FindGradleProjectIDs"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find Gradle project IDs"}
  description={"Find Gradle project IDs in build.gradle files to determine the project ID."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.recipe.releasemetro.FindGradleProjectIDs"}
  artifact={"io.moderne.recipe:rewrite-release-metromap"}
  appLink={"https://app.moderne.io/recipes/io.moderne.recipe.releasemetro.FindGradleProjectIDs"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/recipe/releasemetro/findgradleprojectids.md"}
  moderneOnly
/>

<ExampleList examples={[{"unchanged":{"language":"settingsGradleKts","code":"rootProject.name = \"rewrite-testing-frameworks\"\n"},"variants":[{"language":"buildGradleKts","before":"plugins {\n    id(\"java\")\n}\n\ngroup = \"org.openrewrite.recipe\"\n\ndependencies {\n    implementation(\"org.springframework:spring-core:5.3.21\")\n    testImplementation (\"org.junit.jupiter:junit-jupiter:5.8.2\")\n}\n","after":"/*~~(org.openrewrite.recipe:rewrite-testing-frameworks)~~>*/plugins {\n    id(\"java\")\n}\n\ngroup = \"org.openrewrite.recipe\"\n\ndependencies {\n    implementation(\"org.springframework:spring-core:5.3.21\")\n    testImplementation (\"org.junit.jupiter:junit-jupiter:5.8.2\")\n}\n","diff":"@@ -1,1 +1,1 @@\n-plugins {\n+/*~~(org.openrewrite.recipe:rewrite-testing-frameworks)~~>*/plugins {\n    id(\"java\")\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.recipe.releasemetro.FindGradleProjectIDs","displayName":"Find Gradle project IDs","groupId":"io.moderne.recipe","artifactId":"rewrite-release-metromap","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_RELEASE_METROMAP","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.recipe.releasemetro.table.ProjectCoordinates","displayName":"Maven or Gradle Artifact coordinates IDs","description":"Maven Modules or Gradle (sub-)project groupId and artifactId.","columns":[{"name":"groupId","description":"Group ID of the current module/subproject"},{"name":"artifactId","description":"Artifact ID of the current module/subproject"}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

