---
title: "Migrate to Gradle 9 from Gradle 8"
sidebar_label: "Migrate to Gradle 9 from Gradle 8"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/migratetogradle9" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Gradle 9 from Gradle 8"}
  description={"Migrate to version 9.x. See the Gradle upgrade guide from [version 8.x to 9.0](https://docs.gradle.org/9.0.0/userguide/upgrading_major_version_9.html) for more information."}
  fqName={"org.openrewrite.gradle.MigrateToGradle9"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/resources/META-INF/rewrite/gradle-9.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.MigrateToGradle9"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.MigrateToGradle9"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/migratetogradle9.md"}
>

<RecipeHeader.Title>Migrate to Gradle 9 from Gradle 8</RecipeHeader.Title>

<RecipeHeader.Description>Migrate to version 9.x. See the Gradle upgrade guide from [version 8.x to 9.0](https://docs.gradle.org/9.0.0/userguide/upgrading_major_version_9.html) for more information.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate to Gradle 8 from Gradle 7","href":"/user-documentation/recipes/recipe-catalog/gradle/migratetogradle8/"},{"name":"Update Gradle wrapper","href":"/user-documentation/recipes/recipe-catalog/gradle/updategradlewrapper/"},{"name":"Use `String` notation for Gradle dependency declarations","href":"/user-documentation/recipes/recipe-catalog/gradle/dependencyusestringnotation/"},{"name":"Use one dependency declaration per statement","href":"/user-documentation/recipes/recipe-catalog/gradle/gradle9/onedependencydeclarationperstatement/"},{"name":"Use `mainClass` instead of `main` for `JavaExec` tasks","href":"/user-documentation/recipes/recipe-catalog/gradle/gradle9/usemainclassproperty/"},{"name":"Use `application { mainClass }` instead of `mainClassName`","href":"/user-documentation/recipes/recipe-catalog/gradle/gradle9/usemainclasspropertyforapplication/"},{"name":"Move `sourceCompatibility` and `targetCompatibility` into the `java { }` extension block","href":"/user-documentation/recipes/recipe-catalog/gradle/gradle9/usejavaextensionblock/"},{"name":"Replace spread-`all*` calls in `configurations` blocks with `configurations.all { }`","href":"/user-documentation/recipes/recipe-catalog/gradle/gradle9/rewritespreadallinconfigurationsblock/"},{"name":"Use `version { }` closure instead of `version = { }` assignment","href":"/user-documentation/recipes/recipe-catalog/gradle/gradle9/useversionclosure/"},{"name":"Use `project(...)` dependency notation instead of the current project's module coordinates","href":"/user-documentation/recipes/recipe-catalog/gradle/gradle9/useprojectdependencyinsteadofmodulecoordinates/"},{"name":"Use `matching(Closure)` instead of `findAll(Closure)` on Gradle container collections","href":"/user-documentation/recipes/recipe-catalog/gradle/gradle9/usematchinginsteadoffindall/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"groovy","before":"plugins {\n    id 'java'\n    id 'jacoco'\n    id 'application'\n}\n\nmainClassName = \"com.example.AppMain\"\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation group: 'com.google.guava', name: 'guava', version: '31.1-jre'\n    implementation(\"org.apache.httpcomponents:httpclient\") {\n        version = {\n            strictly(\"4.5.13\")\n        }\n    }\n}\n\ntask doSomething(type: JavaExec) {\n    main = \"com.example.AppMain\"\n}\n\ntasks.register(\"runEverything\", JavaExec) {\n    main = \"com.example.AppMain\"\n}\n","after":"plugins {\n    id 'java'\n    id 'jacoco'\n    id 'application'\n}\n\napplication {\n    mainClass = \"com.example.AppMain\"\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation \"com.google.guava:guava:31.1-jre\"\n    implementation(\"org.apache.httpcomponents:httpclient\") {\n        version {\n            strictly(\"4.5.13\")\n        }\n    }\n}\n\ntask doSomething(type: JavaExec) {\n    mainClass = \"com.example.AppMain\"\n}\n\ntasks.register(\"runEverything\", JavaExec) {\n    mainClass = \"com.example.AppMain\"\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -7,1 +7,3 @@\n}\n\n-mainClassName = \"com.example.AppMain\"\n+application {\n+   mainClass = \"com.example.AppMain\"\n+}\n\n@@ -14,1 +16,1 @@\n\ndependencies {\n-   implementation group: 'com.google.guava', name: 'guava', version: '31.1-jre'\n+   implementation \"com.google.guava:guava:31.1-jre\"\n    implementation(\"org.apache.httpcomponents:httpclient\") {\n@@ -16,1 +18,1 @@\n    implementation group: 'com.google.guava', name: 'guava', version: '31.1-jre'\n    implementation(\"org.apache.httpcomponents:httpclient\") {\n-       version = {\n+       version {\n            strictly(\"4.5.13\")\n@@ -23,1 +25,1 @@\n\ntask doSomething(type: JavaExec) {\n-   main = \"com.example.AppMain\"\n+   mainClass = \"com.example.AppMain\"\n}\n@@ -27,1 +29,1 @@\n\ntasks.register(\"runEverything\", JavaExec) {\n-   main = \"com.example.AppMain\"\n+   mainClass = \"com.example.AppMain\"\n}\n","newFile":false}]},{"variants":[{"language":"groovy","before":"plugins {\n    id 'java'\n    id 'jacoco'\n    id 'application'\n}\n\nmainClassName = \"com.example.AppMain\"\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation group: 'com.google.guava', name: 'guava', version: '31.1-jre'\n    implementation(\"org.apache.httpcomponents:httpclient\") {\n        version = {\n            strictly(\"4.5.13\")\n        }\n    }\n}\n\ntask doSomething(type: JavaExec) {\n    main = \"com.example.AppMain\"\n}\n\ntasks.register(\"runEverything\", JavaExec) {\n    main = \"com.example.AppMain\"\n}\n","after":"plugins {\n    id 'java'\n    id 'jacoco'\n    id 'application'\n}\n\napplication {\n    mainClass = \"com.example.AppMain\"\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation \"com.google.guava:guava:31.1-jre\"\n    implementation(\"org.apache.httpcomponents:httpclient\") {\n        version {\n            strictly(\"4.5.13\")\n        }\n    }\n}\n\ntask doSomething(type: JavaExec) {\n    mainClass = \"com.example.AppMain\"\n}\n\ntasks.register(\"runEverything\", JavaExec) {\n    mainClass = \"com.example.AppMain\"\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -7,1 +7,3 @@\n}\n\n-mainClassName = \"com.example.AppMain\"\n+application {\n+   mainClass = \"com.example.AppMain\"\n+}\n\n@@ -14,1 +16,1 @@\n\ndependencies {\n-   implementation group: 'com.google.guava', name: 'guava', version: '31.1-jre'\n+   implementation \"com.google.guava:guava:31.1-jre\"\n    implementation(\"org.apache.httpcomponents:httpclient\") {\n@@ -16,1 +18,1 @@\n    implementation group: 'com.google.guava', name: 'guava', version: '31.1-jre'\n    implementation(\"org.apache.httpcomponents:httpclient\") {\n-       version = {\n+       version {\n            strictly(\"4.5.13\")\n@@ -23,1 +25,1 @@\n\ntask doSomething(type: JavaExec) {\n-   main = \"com.example.AppMain\"\n+   mainClass = \"com.example.AppMain\"\n}\n@@ -27,1 +29,1 @@\n\ntasks.register(\"runEverything\", JavaExec) {\n-   main = \"com.example.AppMain\"\n+   mainClass = \"com.example.AppMain\"\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.MigrateToGradle9","displayName":"Migrate to Gradle 9 from Gradle 8","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

