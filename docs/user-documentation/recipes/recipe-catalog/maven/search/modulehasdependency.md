---
title: "Module has dependency"
sidebar_label: "Module has dependency"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/search/modulehasdependency" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Module has dependency"}
  description={"Searches for Maven modules that have a dependency matching the specified groupId and artifactId. Places a `SearchResult` marker on all sources within a module with a matching dependency. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that use spring-boot-starter, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file applying the plugin, use the `FindDependency` recipe instead."}
  fqName={"org.openrewrite.maven.search.ModuleHasDependency"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/search/ModuleHasDependency.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.search.ModuleHasDependency"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.search.ModuleHasDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/search/modulehasdependency.md"}
>

<RecipeHeader.Title>Module has dependency</RecipeHeader.Title>

<RecipeHeader.Description>Searches for Maven modules that have a dependency matching the specified groupId and artifactId. Places a `SearchResult` marker on all sources within a module with a matching dependency. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that use spring-boot-starter, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file applying the plugin, use the `FindDependency` recipe instead.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"groupIdPattern","required":true,"description":"Group glob pattern used to match dependencies.","example":"com.fasterxml.jackson.module"},{"type":"String","name":"artifactIdPattern","required":true,"description":"Artifact glob pattern used to match dependencies.","example":"jackson-module-*"},{"type":"String","name":"scope","required":false,"description":"Match dependencies with the specified scope. All scopes are searched by default.","example":"compile"},{"type":"String","name":"version","required":false,"description":"Match only dependencies with the specified version. Node-style [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) may be used.All versions are searched by default.","example":"1.x"},{"type":"Boolean","name":"onlyDirect","required":false,"description":"If enabled, transitive dependencies will not be considered. All dependencies are searched by default.","example":"true"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupIdPattern","value":"org.openrewrite"},{"parameter":"artifactIdPattern","value":"rewrite-maven"},{"parameter":"scope","value":"null"},{"parameter":"version","value":"8.52.0"},{"parameter":"onlyDirect","value":"null"}],"unchanged":{"language":"java","code":"class B {}\n"},"variants":[{"language":"java","before":"class A {}\n","after":"/*~~(Module has dependency: org.openrewrite:rewrite-maven:8.52.0)~~>*/class A {}\n","diff":"@@ -1,1 +1,1 @@\n-class A {}\n+/*~~(Module has dependency: org.openrewrite:rewrite-maven:8.52.0)~~>*/class A {}\n\n","newFile":false},{"language":"xml","before":"<project>\n    <groupId>org.openrewrite.example</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.openrewrite</groupId>\n            <artifactId>rewrite-maven</artifactId>\n            <version>8.52.0</version>\n        </dependency>\n    </dependencies>\n</project>\n","after":"<!--~~(Module has dependency: org.openrewrite:rewrite-maven:8.52.0)~~>--><project>\n    <groupId>org.openrewrite.example</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.openrewrite</groupId>\n            <artifactId>rewrite-maven</artifactId>\n            <version>8.52.0</version>\n        </dependency>\n    </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -1,1 +1,1 @@\n-<project>\n+<!--~~(Module has dependency: org.openrewrite:rewrite-maven:8.52.0)~~>--><project>\n    <groupId>org.openrewrite.example</groupId>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.search.ModuleHasDependency","displayName":"Module has dependency","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupIdPattern=com.fasterxml.jackson.module\" --recipe-option \"artifactIdPattern=jackson-module-*\" --recipe-option \"scope=compile\" --recipe-option \"version=1.x\" --recipe-option \"onlyDirect=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

