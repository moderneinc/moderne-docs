---
title: "Downgrade Jakarta Servlet API to 5.0 when using Jetty"
sidebar_label: "Downgrade Jakarta Servlet API to 5.0 when using Jetty"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/boot3/downgradeservletapiwhenusingjetty" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Downgrade Jakarta Servlet API to 5.0 when using Jetty"}
  description={"Jetty does not yet support Servlet 6.0. This recipe will detect the presence of the `spring-boot-starter-jetty` as a first-order dependency and will add the maven property `jakarta-servlet.version` setting it's value to `5.0.0`. This will downgrade the `jakarta-servlet` artifact if the pom's parent extends from the spring-boot-parent."}
  fqName={"org.openrewrite.java.spring.boot3.DowngradeServletApiWhenUsingJetty"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot3/DowngradeServletApiWhenUsingJetty.java"}
/>

<RecipeHeader
  displayName={"Downgrade Jakarta Servlet API to 5.0 when using Jetty"}
  description={"Jetty does not yet support Servlet 6.0. This recipe will detect the presence of the `spring-boot-starter-jetty` as a first-order dependency and will add the maven property `jakarta-servlet.version` setting it's value to `5.0.0`. This will downgrade the `jakarta-servlet` artifact if the pom's parent extends from the spring-boot-parent."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={["spring","jetty","boot"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.boot3.DowngradeServletApiWhenUsingJetty"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.DowngradeServletApiWhenUsingJetty"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot3/downgradeservletapiwhenusingjetty.md"}
/>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <name>demo</name>\n  <description>Demo project for Spring Boot</description>\n  <properties>\n    <java.version>17</java.version>\n  </properties>\n  <dependencies>\n    <dependency>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-starter-jetty</artifactId>\n      <version>3.0.1</version>\n    </dependency>\n  </dependencies>\n</project>\n","after":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <name>demo</name>\n  <description>Demo project for Spring Boot</description>\n  <properties>\n    <jakarta-servlet.version>5.0.0</jakarta-servlet.version>\n    <java.version>17</java.version>\n  </properties>\n  <dependencies>\n    <dependency>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-starter-jetty</artifactId>\n      <version>3.0.1</version>\n    </dependency>\n  </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -9,0 +9,1 @@\n  <description>Demo project for Spring Boot</description>\n  <properties>\n+   <jakarta-servlet.version>5.0.0</jakarta-servlet.version>\n    <java.version>17</java.version>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.boot3.DowngradeServletApiWhenUsingJetty","displayName":"Downgrade Jakarta Servlet API to 5.0 when using Jetty","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

