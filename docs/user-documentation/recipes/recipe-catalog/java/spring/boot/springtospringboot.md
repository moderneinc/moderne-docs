---
title: "Migrate Spring Framework to Spring Boot"
sidebar_label: "Migrate Spring Framework to Spring Boot"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Spring Framework to Spring Boot"}
  description={"Migrate non Spring Boot applications to the latest compatible Spring Boot release. This recipe will modify an application's build files introducing Maven dependency management for Spring Boot, or adding the Gradle Spring Boot build plugin."}
  fqName={"io.moderne.java.spring.boot.SpringToSpringBoot"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate Spring Framework to Spring Boot"}
  description={"Migrate non Spring Boot applications to the latest compatible Spring Boot release. This recipe will modify an application's build files introducing Maven dependency management for Spring Boot, or adding the Gradle Spring Boot build plugin."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["spring","boot"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.boot.SpringToSpringBoot"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.boot.SpringToSpringBoot"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot/springtospringboot.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Migrate to Spring Framework 3.x","href":"java/spring/framework/upgradespringframework_3_0"},{"name":"Migrate Spring Framework dependencies to Spring Boot","href":"java/spring/boot/migratespringframeworkdependenciestospringboot"},{"name":"Replace Spring Framework dependencies with Spring Boot starters","href":"java/spring/boot/replacespringframeworkdepswithbootstarters"},{"name":"Add `@SpringBootApplication` class","href":"java/spring/boot/addspringbootapplication"},{"name":"Add Spring Boot 4.0 modular starters","href":"java/spring/boot4/addmodularstarters"},{"name":"Mark embedded server as provided for WAR projects","href":"java/spring/boot/markembeddedserverprovidedforwar"},{"name":"Migrate `beans.xml` to Spring Framework configuration class","href":"java/spring/framework/beansxml/beansxmltoconfiguration"},{"name":"Migrate `web.xml` to `WebApplicationInitializer`","href":"java/spring/framework/webxml/webxmltowebapplicationinitializer"}]} preconditions={[{"name":"Singleton","href":"core/singleton"},{"name":"Is likely not a Spring Boot project","href":"java/spring/boot/islikelynotspringboot"},{"name":"Is likely a Spring Framework project","href":"java/spring/framework/islikelyspringframework"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.boot.SpringToSpringBoot","displayName":"Migrate Spring Framework to Spring Boot","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

