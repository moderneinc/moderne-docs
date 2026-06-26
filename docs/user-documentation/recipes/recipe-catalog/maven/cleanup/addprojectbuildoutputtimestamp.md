---
title: "Add `project.build.outputTimestamp` for reproducible builds"
sidebar_label: "Add `project.build.outputTimestamp` for reproducible builds"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/cleanup/addprojectbuildoutputtimestamp" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `project.build.outputTimestamp` for reproducible builds"}
  description={"Adds the `project.build.outputTimestamp` property, which Maven uses to make build outputs reproducible by stamping archive entries with a fixed timestamp instead of the current time. An existing value is preserved. See [Configuring for Reproducible Builds](https://maven.apache.org/guides/mini/guide-reproducible-builds.html)."}
  fqName={"org.openrewrite.maven.cleanup.AddProjectBuildOutputTimestamp"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/cleanup/AddProjectBuildOutputTimestamp.java"}
/>

<RecipeHeader
  displayName={"Add `project.build.outputTimestamp` for reproducible builds"}
  description={"Adds the `project.build.outputTimestamp` property, which Maven uses to make build outputs reproducible by stamping archive entries with a fixed timestamp instead of the current time. An existing value is preserved. See [Configuring for Reproducible Builds](https://maven.apache.org/guides/mini/guide-reproducible-builds.html)."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.cleanup.AddProjectBuildOutputTimestamp"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.cleanup.AddProjectBuildOutputTimestamp"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/cleanup/addprojectbuildoutputtimestamp.md"}
/>

<RecipeList recipes={[{"name":"Add Maven project property","href":"maven/addproperty"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"timestamp","required":false,"description":"ISO 8601 timestamp, integer seconds since the epoch, or property reference such as `${git.commit.author.time}`. Defaults to `1980-01-01T00:00:00Z`, the earliest value the ZIP format can represent.","example":"2024-01-01T00:00:00Z"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"timestamp","value":"null"}],"variants":[{"language":"xml","before":"<project>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n</project>\n","after":"<project>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n  <properties>\n    <project.build.outputTimestamp>1980-01-01T00:00:00Z</project.build.outputTimestamp>\n  </properties>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -5,0 +5,3 @@\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n+ <properties>\n+   <project.build.outputTimestamp>1980-01-01T00:00:00Z</project.build.outputTimestamp>\n+ </properties>\n</project>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.cleanup.AddProjectBuildOutputTimestamp","displayName":"Add `project.build.outputTimestamp` for reproducible builds","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

