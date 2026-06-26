---
title: "Find projects affected by changes to the default error view message attribute"
sidebar_label: "Find projects affected by changes to the default error view message attribute"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/boot2/search/messagesinthedefaulterrorview" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find projects affected by changes to the default error view message attribute"}
  description={"As of Spring Boot 2.5 the `message` attribute in the default error view was removed rather than blanked when it is not shown.\n`spring-webmvc` or `spring-webflux` projects that parse the error response JSON may need to deal with the missing item\n([release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Release-Notes#messages-in-the-default-error-view)).\nYou can still use the `server.error.include-message` property if you want messages to be included."}
  fqName={"org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-25.yml"}
/>

<RecipeHeader
  displayName={"Find projects affected by changes to the default error view message attribute"}
  description={"As of Spring Boot 2.5 the `message` attribute in the default error view was removed rather than blanked when it is not shown.\n`spring-webmvc` or `spring-webflux` projects that parse the error response JSON may need to deal with the missing item\n([release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Release-Notes#messages-in-the-default-error-view)).\nYou can still use the `server.error.include-message` property if you want messages to be included."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["spring","boot"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot2/search/messagesinthedefaulterrorview.md"}
/>

<RecipeList recipes={[{"name":"Find Maven dependency","href":"maven/search/finddependency"},{"name":"Find Maven dependency","href":"maven/search/finddependency"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView","displayName":"Find projects affected by changes to the default error view message attribute","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.DependenciesDeclared","displayName":"Dependencies declared","description":"Direct (first-order) dependencies declared by the project.","columns":[{"name":"Project name","description":"The name of the project that contains the dependency."},{"name":"Source set","description":"The source set that contains the dependency."},{"name":"Group","description":"The first part of a dependency coordinate `com.google.guava:guava:VERSION`."},{"name":"Artifact","description":"The second part of a dependency coordinate `com.google.guava:guava:VERSION`."},{"name":"Version","description":"The resolved version."},{"name":"Dated snapshot version","description":"The resolved dated snapshot version or `null` if this dependency is not a snapshot."},{"name":"Scope","description":"Maven scope (e.g. `compile`, `test`) or Gradle configuration name (e.g. `implementation`, `testImplementation`). For Maven, defaults to `compile` when no scope is declared."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

