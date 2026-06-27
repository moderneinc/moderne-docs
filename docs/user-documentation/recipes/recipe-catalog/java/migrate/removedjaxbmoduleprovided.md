---
title: "Do not package `java.xml.bind` and `java.activation` modules in WebSphere Liberty applications"
sidebar_label: "Do not package `java.xml.bind` and `java.activation` modules in WebSphere Liberty applications"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/removedjaxbmoduleprovided" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Do not package `java.xml.bind` and `java.activation` modules in WebSphere Liberty applications"}
  description={"The `java.xml.bind` and `java.activation` modules were removed in Java11. Websphere Liberty provides its own implementation of the modules, which can be used by specifying the `jaxb-2.2` feature in the server.xml file. This recipe updates the `javax.xml.bind` and `javax.activation` dependencies to use the `provided` scope to avoid class loading issues."}
  fqName={"org.openrewrite.java.migrate.RemovedJaxBModuleProvided"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/ibm-java.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["java11"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.RemovedJaxBModuleProvided"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.RemovedJaxBModuleProvided"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/removedjaxbmoduleprovided.md"}
>

<RecipeHeader.Title>Do not package `java.xml.bind` and `java.activation` modules in WebSphere Liberty applications</RecipeHeader.Title>

<RecipeHeader.Description>The `java.xml.bind` and `java.activation` modules were removed in Java11. Websphere Liberty provides its own implementation of the modules, which can be used by specifying the `jaxb-2.2` feature in the server.xml file. This recipe updates the `javax.xml.bind` and `javax.activation` dependencies to use the `provided` scope to avoid class loading issues.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change Maven dependency scope","href":"/user-documentation/recipes/recipe-catalog/maven/changedependencyscope/"},{"name":"Change a Gradle dependency configuration","href":"/user-documentation/recipes/recipe-catalog/gradle/changedependencyconfiguration/"},{"name":"Change Maven dependency scope","href":"/user-documentation/recipes/recipe-catalog/maven/changedependencyscope/"},{"name":"Change a Gradle dependency configuration","href":"/user-documentation/recipes/recipe-catalog/gradle/changedependencyconfiguration/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.RemovedJaxBModuleProvided","displayName":"Do not package `java.xml.bind` and `java.activation` modules in WebSphere Liberty applications","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

