---
title: "Migrate Spring Boot to Quarkus"
sidebar_label: "Migrate Spring Boot to Quarkus"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/spring/springboottoquarkus" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Spring Boot to Quarkus"}
  description={"Replace Spring Boot with Quarkus."}
  fqName={"org.openrewrite.quarkus.spring.SpringBootToQuarkus"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring-to-quarkus/blob/main/src/main/resources/META-INF/rewrite/spring-boot-to-quarkus.yml"}
/>

<RecipeHeader
  displayName={"Migrate Spring Boot to Quarkus"}
  description={"Replace Spring Boot with Quarkus."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["spring","bom","quarkus","migration"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.quarkus.spring.SpringBootToQuarkus"}
  artifact={"org.openrewrite.recipe:rewrite-spring-to-quarkus"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.quarkus.spring.SpringBootToQuarkus"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/spring/springboottoquarkus.md"}
/>

<RecipeList recipes={[{"name":"Add managed Maven dependency","href":"maven/addmanageddependency"},{"name":"Add or replace Spring Boot build plugin with Quarkus build plugin","href":"quarkus/spring/migratemavenplugin"},{"name":"Migrate database drivers to Quarkus JDBC extensions","href":"quarkus/spring/migratedatabasedrivers"},{"name":"Replace Spring Boot starter dependencies with Quarkus equivalents","href":"quarkus/spring/migratebootstarters"},{"name":"Replace `SpringApplication.run()` with `Quarkus.run()`","href":"quarkus/spring/springapplicationruntoquarkusrun"},{"name":"Replace `@SpringBootApplication` with Quarkus equivalent","href":"quarkus/spring/replacespringbootapplication"},{"name":"Migrate `@EnableXyz` annotations to Quarkus extensions","href":"quarkus/spring/enableannotationstoquarkusdependencies"},{"name":"Add Spring compatibility extensions for commonly used annotations","href":"quarkus/spring/addspringcompatibilityextensions"},{"name":"Convert Spring `ResponseEntity` to JAX-RS `Response`","href":"quarkus/spring/responseentitytojaxrsresponse"},{"name":"Migrate Spring annotations to CDI","href":"quarkus/spring/stereotypeannotationstocdi"},{"name":"Replace Spring `@Value` with CDI `@ConfigProperty`","href":"quarkus/spring/valuetocdiconfigproperty"},{"name":"Convert Spring Web annotations to JAX-RS","href":"quarkus/spring/webtojaxrs"},{"name":"Remove Spring Boot 3.x parent POM","href":"quarkus/spring/removespringbootparent"},{"name":"Migrate Spring Validation to Quarkus","href":"quarkus/spring/migratespringvalidation"},{"name":"Migrate Spring Boot Actuator to Quarkus Health and Metrics","href":"quarkus/spring/migratespringactuator"},{"name":"Migrate Spring Boot Testing to Quarkus Testing","href":"quarkus/spring/migratespringtesting"},{"name":"Migrate @ConfigurationProperties to Quarkus @ConfigMapping","href":"quarkus/spring/migrateconfigurationproperties"},{"name":"Migrate Spring @Transactional to Jakarta @Transactional","href":"quarkus/spring/migratespringtransactional"},{"name":"Migrate Spring Events to CDI Events","href":"quarkus/spring/migratespringevents"},{"name":"Migrate JPA Entities to Panache Entities","href":"quarkus/spring/migrateentitiestopanache"},{"name":"Migrate Spring Data MongoDB to Quarkus Panache MongoDB","href":"quarkus/spring/migratespringdatamongodb"},{"name":"Migrate Spring Cloud Config Client to Quarkus Config","href":"quarkus/spring/migratespringcloudconfig"},{"name":"Migrate Additional Spring Web Parameter Annotations","href":"quarkus/spring/migraterequestparameteredgecases"},{"name":"Migrate Spring Cloud Service Discovery to Quarkus","href":"quarkus/spring/migratespringcloudservicediscovery"},{"name":"Remove Spring Boot DevTools","href":"quarkus/spring/migratespringbootdevtools"},{"name":"Customize Quarkus BOM Version","href":"quarkus/spring/customizequarkusversion"}]} preconditions={[{"name":"Module has dependency","href":"java/dependencies/search/modulehasdependency"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"mavenProject","code":"project"},"variants":[]},{"unchanged":{"language":"mavenProject","code":"project"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.quarkus.spring.SpringBootToQuarkus","displayName":"Migrate Spring Boot to Quarkus","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring-to-quarkus","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

