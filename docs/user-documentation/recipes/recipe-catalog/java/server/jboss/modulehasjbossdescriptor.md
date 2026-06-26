---
title: "Module has JBoss descriptor"
sidebar_label: "Module has JBoss descriptor"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Module has JBoss descriptor"}
  description={"Searches for modules containing JBoss descriptor files (`jboss-web.xml`, `jboss-deployment-structure.xml`). Places a `SearchResult` marker on all source files within a module with a JBoss descriptor. This recipe is intended to be used as a precondition for other recipes."}
  fqName={"io.moderne.java.server.jboss.ModuleHasJBossDescriptor"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Module has JBoss descriptor"}
  description={"Searches for modules containing JBoss descriptor files (`jboss-web.xml`, `jboss-deployment-structure.xml`). Places a `SearchResult` marker on all source files within a module with a JBoss descriptor. This recipe is intended to be used as a precondition for other recipes."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.server.jboss.ModuleHasJBossDescriptor"}
  artifact={"io.moderne.recipe:rewrite-java-application-server"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.server.jboss.ModuleHasJBossDescriptor"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/server/jboss/modulehasjbossdescriptor.md"}
  moderneOnly
/>

<ExampleList examples={[{"unchanged":{"language":"xml","code":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>parent</artifactId>\n    <version>1.0.0</version>\n    <packaging>pom</packaging>\n    <modules>\n        <module>my-app</module>\n        <module>other-module</module>\n    </modules>\n</project>\n"},"variants":[{"language":"xml","before":"<jboss-web>\n    <context-root>/myapp</context-root>\n</jboss-web>\n","after":"<!--~~(Module has JBoss descriptor)~~>--><jboss-web>\n    <context-root>/myapp</context-root>\n</jboss-web>\n","diff":"@@ -1,1 +1,1 @@\n-<jboss-web>\n+<!--~~(Module has JBoss descriptor)~~>--><jboss-web>\n    <context-root>/myapp</context-root>\n","newFile":false},{"language":"xml","before":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>com.example</groupId>\n        <artifactId>parent</artifactId>\n        <version>1.0.0</version>\n    </parent>\n    <artifactId>my-app</artifactId>\n    <packaging>war</packaging>\n</project>\n","after":"<!--~~(Module has JBoss descriptor)~~>--><project>\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>com.example</groupId>\n        <artifactId>parent</artifactId>\n        <version>1.0.0</version>\n    </parent>\n    <artifactId>my-app</artifactId>\n    <packaging>war</packaging>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -1,1 +1,1 @@\n-<project>\n+<!--~~(Module has JBoss descriptor)~~>--><project>\n    <modelVersion>4.0.0</modelVersion>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.server.jboss.ModuleHasJBossDescriptor","displayName":"Module has JBoss descriptor","groupId":"io.moderne.recipe","artifactId":"rewrite-java-application-server","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_JAVA_APPLICATION_SERVER","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

