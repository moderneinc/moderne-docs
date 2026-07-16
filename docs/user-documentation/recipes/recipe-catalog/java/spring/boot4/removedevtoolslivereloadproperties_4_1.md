---
title: "Comment out deprecated DevTools LiveReload properties"
sidebar_label: "Comment out deprecated DevTools LiveReload properties"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Comment out deprecated DevTools LiveReload properties"}
  description={"Spring Boot 4.1.0-M3 deprecated the LiveReload feature in DevTools with no replacement. The feature still functions in 4.1, so this recipe comments out `spring.devtools.livereload.*` properties (rather than deleting them) to flag the deprecation while leaving the values recoverable."}
  fqName={"io.moderne.java.spring.boot4.RemoveDevtoolsLiveReloadProperties_4_1"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["spring","boot","devtools"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.boot4.RemoveDevtoolsLiveReloadProperties_4_1"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.boot4.RemoveDevtoolsLiveReloadProperties_4_1"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot4/removedevtoolslivereloadproperties_4_1.md"}
  moderneOnly
>

<RecipeHeader.Title>Comment out deprecated DevTools LiveReload properties</RecipeHeader.Title>

<RecipeHeader.Description>Spring Boot 4.1.0-M3 deprecated the LiveReload feature in DevTools with no replacement. The feature still functions in 4.1, so this recipe comments out `spring.devtools.livereload.*` properties (rather than deleting them) to flag the deprecation while leaving the values recoverable.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Comment out Spring properties","href":"/user-documentation/recipes/recipe-catalog/java/spring/commentoutspringpropertykey/"},{"name":"Comment out Spring properties","href":"/user-documentation/recipes/recipe-catalog/java/spring/commentoutspringpropertykey/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"mavenProject","code":"project"},"variants":[{"language":"properties","before":"spring.application.name=demo\nspring.devtools.livereload.enabled=true\nspring.devtools.livereload.port=35729\nspring.devtools.restart.enabled=true\n","after":"spring.application.name=demo\n# This property is deprecated: DevTools LiveReload is deprecated in Spring Boot 4.1.0-M3 with no replacement.\n# spring.devtools.livereload.enabled=true\n# This property is deprecated: DevTools LiveReload is deprecated in Spring Boot 4.1.0-M3 with no replacement.\n# spring.devtools.livereload.port=35729\nspring.devtools.restart.enabled=true\n","diff":"--- application.properties\n+++ application.properties\n@@ -2,2 +2,4 @@\nspring.application.name=demo\n-spring.devtools.livereload.enabled=true\n-spring.devtools.livereload.port=35729\n+# This property is deprecated: DevTools LiveReload is deprecated in Spring Boot 4.1.0-M3 with no replacement.\n+# spring.devtools.livereload.enabled=true\n+# This property is deprecated: DevTools LiveReload is deprecated in Spring Boot 4.1.0-M3 with no replacement.\n+# spring.devtools.livereload.port=35729\nspring.devtools.restart.enabled=true\n","newFile":false}]},{"unchanged":{"language":"mavenProject","code":"project"},"variants":[{"language":"properties","before":"spring.application.name=demo\nspring.devtools.livereload.enabled=true\nspring.devtools.livereload.port=35729\nspring.devtools.restart.enabled=true\n","after":"spring.application.name=demo\n# This property is deprecated: DevTools LiveReload is deprecated in Spring Boot 4.1.0-M3 with no replacement.\n# spring.devtools.livereload.enabled=true\n# This property is deprecated: DevTools LiveReload is deprecated in Spring Boot 4.1.0-M3 with no replacement.\n# spring.devtools.livereload.port=35729\nspring.devtools.restart.enabled=true\n","diff":"--- application.properties\n+++ application.properties\n@@ -2,2 +2,4 @@\nspring.application.name=demo\n-spring.devtools.livereload.enabled=true\n-spring.devtools.livereload.port=35729\n+# This property is deprecated: DevTools LiveReload is deprecated in Spring Boot 4.1.0-M3 with no replacement.\n+# spring.devtools.livereload.enabled=true\n+# This property is deprecated: DevTools LiveReload is deprecated in Spring Boot 4.1.0-M3 with no replacement.\n+# spring.devtools.livereload.port=35729\nspring.devtools.restart.enabled=true\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.boot4.RemoveDevtoolsLiveReloadProperties_4_1","displayName":"Comment out deprecated DevTools LiveReload properties","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

