---
title: "Find Gradle dependency"
sidebar_label: "Find Gradle dependency"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/search/finddependency" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Gradle dependency"}
  description={"Finds dependencies declared in gradle build files. Each match is also recorded as a row in the `DependenciesDeclared` data table. See the [reference](https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_configurations_graph) on Gradle configurations or the diagram below for a description of what configuration to use. A project's compile and runtime classpath is based on these configurations.\n\n<img alt=\"Gradle compile classpath\" src=\"https://docs.gradle.org/current/userguide/img/java-library-ignore-deprecated-main.png\" width=\"200px\"/>\nA project's test classpath is based on these configurations.\n\n<img alt=\"Gradle test classpath\" src=\"https://docs.gradle.org/current/userguide/img/java-library-ignore-deprecated-test.png\" width=\"200px\"/>."}
  fqName={"org.openrewrite.gradle.search.FindDependency"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/search/FindDependency.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.search.FindDependency"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.search.FindDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/search/finddependency.md"}
>

<RecipeHeader.Title>Find Gradle dependency</RecipeHeader.Title>

<RecipeHeader.Description>Finds dependencies declared in gradle build files. Each match is also recorded as a row in the `DependenciesDeclared` data table. See the [reference](https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_configurations_graph) on Gradle configurations or the diagram below for a description of what configuration to use. A project's compile and runtime classpath is based on these configurations.  &lt;img alt="Gradle compile classpath" src="https://docs.gradle.org/current/userguide/img/java-library-ignore-deprecated-main.png" width="200px"/> A project's test classpath is based on these configurations.  &lt;img alt="Gradle test classpath" src="https://docs.gradle.org/current/userguide/img/java-library-ignore-deprecated-test.png" width="200px"/>.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"groupId","required":true,"description":"The first part of a dependency coordinate identifying its publisher.","example":"com.google.guava"},{"type":"String","name":"artifactId","required":true,"description":"The second part of a dependency coordinate uniquely identifying it among artifacts from the same publisher.","example":"guava"},{"type":"String","name":"configuration","required":false,"description":"The dependency configuration to search for dependencies in. If omitted then all configurations will be searched.","example":"api"},{"type":"String","name":"version","required":false,"description":"An exact version number or node-style semver selector used to select the version number.","example":"3.0.0"},{"type":"String","name":"versionPattern","required":false,"description":"Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to \"25-29\" can be paired with a metadata pattern of \"-jre\" to select Guava 29.0-jre","example":"-jre"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupId","value":"org.openrewrite"},{"parameter":"artifactId","value":"rewrite-core"},{"parameter":"configuration","value":"api"},{"parameter":"version","value":"null"},{"parameter":"versionPattern","value":"null"}],"variants":[{"language":"groovy","before":"plugins {\n    id 'java-library'\n}\nrepositories {\n    mavenCentral()\n}\ndependencies {\n    api \"org.openrewrite:rewrite-core:latest.release\"\n}\n","after":"plugins {\n    id 'java-library'\n}\nrepositories {\n    mavenCentral()\n}\ndependencies {\n    /*~~>*/api \"org.openrewrite:rewrite-core:latest.release\"\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -8,1 +8,1 @@\n}\ndependencies {\n-   api \"org.openrewrite:rewrite-core:latest.release\"\n+   /*~~>*/api \"org.openrewrite:rewrite-core:latest.release\"\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.search.FindDependency","displayName":"Find Gradle dependency","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupId=com.google.guava\" --recipe-option \"artifactId=guava\" --recipe-option \"configuration=api\" --recipe-option \"version=3.0.0\" --recipe-option \"versionPattern='-jre'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.DependenciesDeclared","displayName":"Dependencies declared","description":"Direct (first-order) dependencies declared by the project.","columns":[{"name":"Project name","description":"The name of the project that contains the dependency."},{"name":"Source set","description":"The source set that contains the dependency."},{"name":"Group","description":"The first part of a dependency coordinate `com.google.guava:guava:VERSION`."},{"name":"Artifact","description":"The second part of a dependency coordinate `com.google.guava:guava:VERSION`."},{"name":"Version","description":"The resolved version."},{"name":"Dated snapshot version","description":"The resolved dated snapshot version or `null` if this dependency is not a snapshot."},{"name":"Scope","description":"Maven scope (e.g. `compile`, `test`) or Gradle configuration name (e.g. `implementation`, `testImplementation`). For Maven, defaults to `compile` when no scope is declared."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

