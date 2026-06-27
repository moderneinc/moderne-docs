---
title: "Change Maven annotation processor path"
sidebar_label: "Change Maven annotation processor path"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/micronaut/changeannotationprocessorpath" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change Maven annotation processor path"}
  description={"Change the groupId, artifactId, and version of a Maven annotation processor path."}
  fqName={"org.openrewrite.java.micronaut.ChangeAnnotationProcessorPath"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/ChangeAnnotationProcessorPath.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.micronaut.ChangeAnnotationProcessorPath"}
  artifact={"org.openrewrite.recipe:rewrite-micronaut"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.micronaut.ChangeAnnotationProcessorPath"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/micronaut/changeannotationprocessorpath.md"}
>

<RecipeHeader.Title>Change Maven annotation processor path</RecipeHeader.Title>

<RecipeHeader.Description>Change the groupId, artifactId, and version of a Maven annotation processor path.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"oldGroupId","required":true,"description":"The old groupId to replace. The groupId is the first part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions.","example":"org.openrewrite.recipe"},{"type":"String","name":"oldArtifactId","required":true,"description":"The old artifactId to replace. The artifactId is the second part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions.","example":"my-deprecated-annotation-processor"},{"type":"String","name":"newGroupId","required":false,"description":"The new groupId to use. Defaults to the existing group id.","example":"corp.internal.openrewrite.recipe"},{"type":"String","name":"newArtifactId","required":false,"description":"The new artifactId to use. Defaults to the existing artifact id.","example":"my-new-annotation-processor"},{"type":"String","name":"newVersion","required":false,"description":"An version string for the annotation processor path. Version strings that start with 'micronaut.' will be treated specially. ","example":"micronaut.validation"},{"type":"List","name":"exclusions","required":false,"description":"A list of exclusions to apply to the annotation processor path in the format groupId:artifactId","example":"io.micronaut:micronaut-inject"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.java.micronaut.ChangeAnnotationProcessorPath","displayName":"Change Maven annotation processor path","groupId":"org.openrewrite.recipe","artifactId":"rewrite-micronaut","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldGroupId=org.openrewrite.recipe\" --recipe-option \"oldArtifactId=my-deprecated-annotation-processor\" --recipe-option \"newGroupId=corp.internal.openrewrite.recipe\" --recipe-option \"newArtifactId=my-new-annotation-processor\" --recipe-option \"newVersion=micronaut.validation\" --recipe-option \"exclusions=io.micronaut:micronaut-inject\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

