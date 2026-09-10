---
title: "Change Gradle annotation processor dependency and remove version"
sidebar_label: "Change Gradle annotation processor dependency and remove version"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/updates/core/quarkus339/changegradleannotationprocessordependency" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change Gradle annotation processor dependency and remove version"}
  description={"Change the groupId and artifactId of a Gradle annotation processor dependency, remove any explicit version, and add an enforcedPlatform for the Quarkus BOM if the old dependency had a version and no platform was present."}
  fqName={"io.quarkus.updates.core.quarkus339.ChangeGradleAnnotationProcessorDependency"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=io.quarkus.updates.core.quarkus339.ChangeGradleAnnotationProcessorDependency"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"io.quarkus.updates.core.quarkus339.ChangeGradleAnnotationProcessorDependency"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/io.quarkus.updates.core.quarkus339.ChangeGradleAnnotationProcessorDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/updates/core/quarkus339/changegradleannotationprocessordependency.md"}
>

<RecipeHeader.Title>Change Gradle annotation processor dependency and remove version</RecipeHeader.Title>

<RecipeHeader.Description>Change the groupId and artifactId of a Gradle annotation processor dependency, remove any explicit version, and add an enforcedPlatform for the Quarkus BOM if the old dependency had a version and no platform was present.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"oldGroupId","required":true,"description":"The old groupId to replace.","example":"org.hibernate.orm"},{"type":"String","name":"oldArtifactId","required":true,"description":"The old artifactId to replace.","example":"hibernate-processor"},{"type":"String","name":"newGroupId","required":true,"description":"The new groupId to use.","example":"io.quarkus"},{"type":"String","name":"newArtifactId","required":true,"description":"The new artifactId to use.","example":"quarkus-data-processor"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.quarkus.updates.core.quarkus339.ChangeGradleAnnotationProcessorDependency","displayName":"Change Gradle annotation processor dependency and remove version","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldGroupId=org.hibernate.orm\" --recipe-option \"oldArtifactId=hibernate-processor\" --recipe-option \"newGroupId=io.quarkus\" --recipe-option \"newArtifactId=quarkus-data-processor\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

