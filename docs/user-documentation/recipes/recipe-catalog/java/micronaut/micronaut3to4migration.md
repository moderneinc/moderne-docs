---
title: "Migrate from Micronaut 3.x to 4.x"
sidebar_label: "Migrate from Micronaut 3.x to 4.x"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/micronaut/micronaut3to4migration" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate from Micronaut 3.x to 4.x"}
  description={"This recipe will apply changes required for migrating from Micronaut 3 to Micronaut 4."}
  fqName={"org.openrewrite.java.micronaut.Micronaut3to4Migration"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut3-to-4.yml"}
/>

<RecipeHeader
  displayName={"Migrate from Micronaut 3.x to 4.x"}
  description={"This recipe will apply changes required for migrating from Micronaut 3 to Micronaut 4."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.micronaut.Micronaut3to4Migration"}
  artifact={"org.openrewrite.recipe:rewrite-micronaut"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.micronaut.Micronaut3to4Migration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/micronaut/micronaut3to4migration.md"}
/>

<RecipeList recipes={[{"name":"Upgrade Java version","href":"java/migrate/upgradejavaversion"},{"name":"Update Gradle wrapper","href":"gradle/updategradlewrapper"},{"name":"Update the Micronaut version to 4.x","href":"java/micronaut/updatebuildtomicronaut4version"},{"name":"Update to Micronaut 4.x platform BOM","href":"java/micronaut/updatemicronautplatformbom"},{"name":"Add Micronaut build plugins to 4.x","href":"java/micronaut/updatebuildplugins"},{"name":"Add `snakeyaml` dependency if needed","href":"java/micronaut/addsnakeyamldependencyifneeded"},{"name":"Update jakarta annotations dependency","href":"java/micronaut/updatejakartaannotations"},{"name":"Migrate deprecated `javax.persistence` packages to `jakarta.persistence`","href":"java/migrate/jakarta/javaxpersistencetojakartapersistence"},{"name":"Update to Micronaut Validation 4.x","href":"java/micronaut/updatemicronautvalidation"},{"name":"Update to Micronaut Email 2.x","href":"java/micronaut/updatemicronautemail"},{"name":"Update the Micronaut Websocket support","href":"java/micronaut/addmicronautwebsocketdependencyifneeded"},{"name":"Update the Micronaut Session support","href":"java/micronaut/updatemicronautsession"},{"name":"Update the Micronaut Retry support","href":"java/micronaut/addmicronautretrydependencyifneeded"},{"name":"Update the Micronaut Security library","href":"java/micronaut/updatemicronautsecurity"},{"name":"Update the Micronaut Data library","href":"java/micronaut/updatemicronautdata"},{"name":"Remove withJansi Logback configuration","href":"java/micronaut/removewithjansilogbackconfiguration"},{"name":"Remove unnecessary dependencies","href":"java/micronaut/removeunnecessarydependencies"},{"name":"Add `HttpRequest` type parameter for implemented interfaces","href":"java/micronaut/addhttprequesttypeparameter"},{"name":"Update the version of core annotation processors","href":"java/micronaut/updatemavenannotationprocessors"},{"name":"Add `micronaut-test-resources-client` if needed","href":"java/micronaut/addtestresourcesclientdependencyifneeded"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"mavenProject","code":"project"},"variants":[{"language":"groovy","before":"version = \"0.1.0-SNAPSHOT\"\ngroup = \"com.example\"\njava {\n    sourceCompatibility = JavaVersion.toVersion(\"1.8\")\n    targetCompatibility = JavaVersion.toVersion(\"1.8\")\n}\n","after":"version = \"0.1.0-SNAPSHOT\"\ngroup = \"com.example\"\njava {\n    sourceCompatibility = JavaVersion.toVersion(\"17\")\n    targetCompatibility = JavaVersion.toVersion(\"17\")\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -4,2 +4,2 @@\ngroup = \"com.example\"\njava {\n-   sourceCompatibility = JavaVersion.toVersion(\"1.8\")\n-   targetCompatibility = JavaVersion.toVersion(\"1.8\")\n+   sourceCompatibility = JavaVersion.toVersion(\"17\")\n+   targetCompatibility = JavaVersion.toVersion(\"17\")\n}\n","newFile":false}]},{"unchanged":{"language":"mavenProject","code":"project"},"variants":[{"language":"groovy","before":"version = \"0.1.0-SNAPSHOT\"\ngroup = \"com.example\"\njava {\n    sourceCompatibility = JavaVersion.toVersion(\"1.8\")\n    targetCompatibility = JavaVersion.toVersion(\"1.8\")\n}\n","after":"version = \"0.1.0-SNAPSHOT\"\ngroup = \"com.example\"\njava {\n    sourceCompatibility = JavaVersion.toVersion(\"17\")\n    targetCompatibility = JavaVersion.toVersion(\"17\")\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -4,2 +4,2 @@\ngroup = \"com.example\"\njava {\n-   sourceCompatibility = JavaVersion.toVersion(\"1.8\")\n-   targetCompatibility = JavaVersion.toVersion(\"1.8\")\n+   sourceCompatibility = JavaVersion.toVersion(\"17\")\n+   targetCompatibility = JavaVersion.toVersion(\"17\")\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.micronaut.Micronaut3to4Migration","displayName":"Migrate from Micronaut 3.x to 4.x","groupId":"org.openrewrite.recipe","artifactId":"rewrite-micronaut","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

