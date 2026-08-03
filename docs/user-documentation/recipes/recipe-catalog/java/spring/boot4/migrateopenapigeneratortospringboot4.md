---
title: "Migrate OpenAPI Generator `spring` configuration to Spring Boot 4"
sidebar_label: "Migrate OpenAPI Generator `spring` configuration to Spring Boot 4"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/boot4/migrateopenapigeneratortospringboot4" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate OpenAPI Generator `spring` configuration to Spring Boot 4"}
  description={"Update `openapi-generator-maven-plugin` executions using the `spring` generator to generate Spring Boot 4 and Jackson 3 sources. Replaces the deprecated `useSpringBoot3` option with `useSpringBoot4` and enables `useJackson3`, matching the Jackson 3 baseline of Spring Boot 4. Enabling `useSpringBoot4` also enables `useJakartaEe`, so it is left implicit. The `useSpringBoot4`/`useJackson3` options were introduced in OpenAPI Generator 7.16.0, so the plugin is upgraded to at least that version first."}
  fqName={"org.openrewrite.java.spring.boot4.MigrateOpenApiGeneratorToSpringBoot4"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot4/MigrateOpenApiGeneratorToSpringBoot4.java"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.boot4.MigrateOpenApiGeneratorToSpringBoot4"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.boot4.MigrateOpenApiGeneratorToSpringBoot4"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot4/migrateopenapigeneratortospringboot4.md"}
>

<RecipeHeader.Title>Migrate OpenAPI Generator `spring` configuration to Spring Boot 4</RecipeHeader.Title>

<RecipeHeader.Description>Update `openapi-generator-maven-plugin` executions using the `spring` generator to generate Spring Boot 4 and Jackson 3 sources. Replaces the deprecated `useSpringBoot3` option with `useSpringBoot4` and enables `useJackson3`, matching the Jackson 3 baseline of Spring Boot 4. Enabling `useSpringBoot4` also enables `useJakartaEe`, so it is left implicit. The `useSpringBoot4`/`useJackson3` options were introduced in OpenAPI Generator 7.16.0, so the plugin is upgraded to at least that version first.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade Maven plugin version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradepluginversion/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>1.0.0</version>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.openapitools</groupId>\n                <artifactId>openapi-generator-maven-plugin</artifactId>\n                <version>7.16.0</version>\n                <executions>\n                    <execution>\n                        <configuration>\n                            <generatorName>spring</generatorName>\n                            <configOptions>\n                                <useSpringBoot3>true</useSpringBoot3>\n                            </configOptions>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","after":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>1.0.0</version>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.openapitools</groupId>\n                <artifactId>openapi-generator-maven-plugin</artifactId>\n                <version>7.16.0</version>\n                <executions>\n                    <execution>\n                        <configuration>\n                            <generatorName>spring</generatorName>\n                            <configOptions>\n                                <useSpringBoot4>true</useSpringBoot4>\n                                <useJackson3>true</useJackson3>\n                            </configOptions>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -17,1 +17,2 @@\n                            <generatorName>spring</generatorName>\n                            <configOptions>\n-                               <useSpringBoot3>true</useSpringBoot3>\n+                               <useSpringBoot4>true</useSpringBoot4>\n+                               <useJackson3>true</useJackson3>\n                            </configOptions>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.boot4.MigrateOpenApiGeneratorToSpringBoot4","displayName":"Migrate OpenAPI Generator `spring` configuration to Spring Boot 4","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

