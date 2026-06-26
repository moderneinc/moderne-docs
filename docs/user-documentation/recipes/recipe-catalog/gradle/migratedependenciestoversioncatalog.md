---
title: "Migrate Gradle project dependencies to version catalog"
sidebar_label: "Migrate Gradle project dependencies to version catalog"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/migratedependenciestoversioncatalog" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Gradle project dependencies to version catalog"}
  description={"Migrates Gradle project dependencies to use the [version catalog](https://docs.gradle.org/current/userguide/platforms.html) feature. Supports migrating dependency declarations of various forms:\n * `String` notation: `\"group:artifact:version\"`\n * `Map` notation: `group: 'group', name: 'artifact', version: 'version'`\n * Property references: `\"group:artifact:$version\"` or `\"group:artifact:${version}\"`\n\nThe recipe will:\n * Create a `gradle/libs.versions.toml` file with version declarations\n * Replace dependency declarations with catalog references (e.g., `libs.springCore`)\n * Migrate version properties from `gradle.properties` to the version catalog\n * Preserve project dependencies unchanged\n\n**Note:** If a version catalog already exists, the recipe will not modify it."}
  fqName={"org.openrewrite.gradle.MigrateDependenciesToVersionCatalog"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/MigrateDependenciesToVersionCatalog.java"}
/>

<RecipeHeader
  displayName={"Migrate Gradle project dependencies to version catalog"}
  description={"Migrates Gradle project dependencies to use the [version catalog](https://docs.gradle.org/current/userguide/platforms.html) feature. Supports migrating dependency declarations of various forms:\n * `String` notation: `\"group:artifact:version\"`\n * `Map` notation: `group: 'group', name: 'artifact', version: 'version'`\n * Property references: `\"group:artifact:$version\"` or `\"group:artifact:${version}\"`\n\nThe recipe will:\n * Create a `gradle/libs.versions.toml` file with version declarations\n * Replace dependency declarations with catalog references (e.g., `libs.springCore`)\n * Migrate version properties from `gradle.properties` to the version catalog\n * Preserve project dependencies unchanged\n\n**Note:** If a version catalog already exists, the recipe will not modify it."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.MigrateDependenciesToVersionCatalog"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.MigrateDependenciesToVersionCatalog"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/migratedependenciestoversioncatalog.md"}
/>

<ExampleList examples={[{"variants":[{"language":"groovy","before":"plugins {\n    id 'java'\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation 'org.springframework:spring-core:5.3.0'\n    testImplementation 'junit:junit:4.13.2'\n    runtimeOnly 'com.h2database:h2:1.4.200'\n}\n","after":"plugins {\n    id 'java'\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation libs.springCore\n    testImplementation libs.junit\n    runtimeOnly libs.h2\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -10,3 +10,3 @@\n\ndependencies {\n-   implementation 'org.springframework:spring-core:5.3.0'\n-   testImplementation 'junit:junit:4.13.2'\n-   runtimeOnly 'com.h2database:h2:1.4.200'\n+   implementation libs.springCore\n+   testImplementation libs.junit\n+   runtimeOnly libs.h2\n}\n","newFile":false},{"language":"toml","before":"","after":"[versions]\nspring-core = \"5.3.0\"\njunit = \"4.13.2\"\nh2 = \"1.4.200\"\n\n[libraries]\nspring-core = { group = \"org.springframework\", name = \"spring-core\", version.ref = \"spring-core\" }\njunit = { group = \"junit\", name = \"junit\", version.ref = \"junit\" }\nh2 = { group = \"com.h2database\", name = \"h2\", version.ref = \"h2\" }\n","newFile":true}]},{"variants":[{"language":"buildGradleKts","before":"plugins {\n    id(\"java\")\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation(\"org.springframework:spring-core:5.3.0\")\n    testImplementation(\"junit:junit:4.13.2\")\n    runtimeOnly(\"com.h2database:h2:1.4.200\")\n}\n","after":"plugins {\n    id(\"java\")\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation(libs.springCore)\n    testImplementation(libs.junit)\n    runtimeOnly(libs.h2)\n}\n","diff":"--- build.gradle.kts\n+++ build.gradle.kts\n@@ -10,3 +10,3 @@\n\ndependencies {\n-   implementation(\"org.springframework:spring-core:5.3.0\")\n-   testImplementation(\"junit:junit:4.13.2\")\n-   runtimeOnly(\"com.h2database:h2:1.4.200\")\n+   implementation(libs.springCore)\n+   testImplementation(libs.junit)\n+   runtimeOnly(libs.h2)\n}\n","newFile":false},{"language":"toml","before":"","after":"[versions]\nspring-core = \"5.3.0\"\njunit = \"4.13.2\"\nh2 = \"1.4.200\"\n\n[libraries]\nspring-core = { group = \"org.springframework\", name = \"spring-core\", version.ref = \"spring-core\" }\njunit = { group = \"junit\", name = \"junit\", version.ref = \"junit\" }\nh2 = { group = \"com.h2database\", name = \"h2\", version.ref = \"h2\" }\n","newFile":true}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.MigrateDependenciesToVersionCatalog","displayName":"Migrate Gradle project dependencies to version catalog","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

