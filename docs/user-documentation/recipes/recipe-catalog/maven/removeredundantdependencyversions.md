---
title: "Remove redundant explicit dependency and plugin versions"
sidebar_label: "Remove redundant explicit dependency and plugin versions"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/removeredundantdependencyversions" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove redundant explicit dependency and plugin versions"}
  description={"Remove explicitly-specified dependency/plugin versions when a parent POM's `dependencyManagement`/`pluginManagement` specifies the version."}
  fqName={"org.openrewrite.maven.RemoveRedundantDependencyVersions"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemoveRedundantDependencyVersions.java"}
/>

<RecipeHeader
  displayName={"Remove redundant explicit dependency and plugin versions"}
  description={"Remove explicitly-specified dependency/plugin versions when a parent POM's `dependencyManagement`/`pluginManagement` specifies the version."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.RemoveRedundantDependencyVersions"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.RemoveRedundantDependencyVersions"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/removeredundantdependencyversions.md"}
/>

<OptionsTable options={[{"type":"String","name":"groupPattern","required":false,"description":"Group glob expression pattern used to match dependencies that should be managed.Group is the first part of a dependency coordinate `com.google.guava:guava:VERSION`.","example":"com.google.*"},{"type":"String","name":"artifactPattern","required":false,"description":"Artifact glob expression pattern used to match dependencies that should be managed.Artifact is the second part of a dependency coordinate `com.google.guava:guava:VERSION`.","example":"guava*"},{"type":"Boolean","name":"onlyIfVersionsMatch","required":false,"description":"Deprecated; use `onlyIfManagedVersionIs` instead. Only remove the explicit version if it exactly matches the managed dependency version. When `false` explicit versions will be removed if they are older than or equal to the managed dependency version. Default `true`."},{"type":"Comparator","name":"onlyIfManagedVersionIs","required":false,"description":"Only remove the explicit version if the managed version has the specified comparative relationship to the explicit version. For example, `gte` will only remove the explicit version if the managed version is the same or newer. Default `eq`."},{"type":"List","name":"except","required":false,"description":"Accepts a list of GAVs. Dependencies matching a GAV will be ignored by this recipe. GAV versions are ignored if provided.","example":"com.jcraft:jsch"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupPattern","value":"null"},{"parameter":"artifactPattern","value":"null"},{"parameter":"onlyIfVersionsMatch","value":"null"},{"parameter":"onlyIfManagedVersionIs","value":"null"}],"variants":[{"language":"xml","before":"<project>\n    <groupId>org.example</groupId>\n    <artifactId>parent</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>com.google.guava</groupId>\n                <artifactId>guava</artifactId>\n                <version>30.0-jre</version>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.google.guava</groupId>\n            <artifactId>guava</artifactId>\n            <version>30.0-jre</version>\n        </dependency>\n    </dependencies>\n</project>\n","after":"<project>\n    <groupId>org.example</groupId>\n    <artifactId>parent</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>com.google.guava</groupId>\n                <artifactId>guava</artifactId>\n                <version>30.0-jre</version>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.google.guava</groupId>\n            <artifactId>guava</artifactId>\n        </dependency>\n    </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -18,1 +18,0 @@\n            <groupId>com.google.guava</groupId>\n            <artifactId>guava</artifactId>\n-           <version>30.0-jre</version>\n        </dependency>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.RemoveRedundantDependencyVersions","displayName":"Remove redundant explicit dependency and plugin versions","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

