---
title: "Apache Maven reproducible builds"
sidebar_label: "Apache Maven reproducible builds"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/reproduciblebuilds" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Apache Maven reproducible builds"}
  description={"Configure a Maven project for [reproducible builds](https://maven.apache.org/guides/mini/guide-reproducible-builds.html): pin dependency and plugin versions, set `project.build.outputTimestamp`, set explicit UTF-8 source encoding, and upgrade core plugins to versions that honor the output timestamp."}
  fqName={"org.openrewrite.maven.ReproducibleBuilds"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/resources/META-INF/rewrite/maven.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.ReproducibleBuilds"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.ReproducibleBuilds"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/reproduciblebuilds.md"}
>

<RecipeHeader.Title>Apache Maven reproducible builds</RecipeHeader.Title>

<RecipeHeader.Description>Configure a Maven project for [reproducible builds](https://maven.apache.org/guides/mini/guide-reproducible-builds.html): pin dependency and plugin versions, set `project.build.outputTimestamp`, set explicit UTF-8 source encoding, and upgrade core plugins to versions that honor the output timestamp.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Add explicit dependency versions","href":"/user-documentation/recipes/recipe-catalog/maven/cleanup/explicitdependencyversion/"},{"name":"Add explicit plugin versions","href":"/user-documentation/recipes/recipe-catalog/maven/cleanup/explicitpluginversion/"},{"name":"Upgrade Maven plugin version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradepluginversion/"},{"name":"Add Maven project property","href":"/user-documentation/recipes/recipe-catalog/maven/addproperty/"},{"name":"Add Maven project property","href":"/user-documentation/recipes/recipe-catalog/maven/addproperty/"},{"name":"Add `project.build.outputTimestamp` for reproducible builds","href":"/user-documentation/recipes/recipe-catalog/maven/cleanup/addprojectbuildoutputtimestamp/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<project>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n</project>\n","after":"<project>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n  <properties>\n    <project.build.outputTimestamp>1980-01-01T00:00:00Z</project.build.outputTimestamp>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n  </properties>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -5,0 +5,5 @@\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n+ <properties>\n+   <project.build.outputTimestamp>1980-01-01T00:00:00Z</project.build.outputTimestamp>\n+   <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n+   <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n+ </properties>\n</project>\n","newFile":false}]},{"variants":[{"language":"xml","before":"<project>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n</project>\n","after":"<project>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n  <properties>\n    <project.build.outputTimestamp>1980-01-01T00:00:00Z</project.build.outputTimestamp>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n  </properties>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -5,0 +5,5 @@\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n+ <properties>\n+   <project.build.outputTimestamp>1980-01-01T00:00:00Z</project.build.outputTimestamp>\n+   <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n+   <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n+ </properties>\n</project>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.ReproducibleBuilds","displayName":"Apache Maven reproducible builds","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

