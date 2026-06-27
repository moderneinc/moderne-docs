---
title: "Remove redundant kotlin-stdlib dependencies"
sidebar_label: "Remove redundant kotlin-stdlib dependencies"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove redundant kotlin-stdlib dependencies"}
  description={"Remove explicit `kotlin-stdlib`, `kotlin-stdlib-jdk7`, `kotlin-stdlib-jdk8`, and `kotlin-stdlib-common` dependencies. The Kotlin Gradle plugin has automatically included the stdlib since Kotlin 1.4, making explicit declarations redundant."}
  fqName={"org.openrewrite.kotlin.migrate.RemoveRedundantKotlinStdlib"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={["gradle","kotlin"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.migrate.RemoveRedundantKotlinStdlib"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.migrate.RemoveRedundantKotlinStdlib"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/migrate/removeredundantkotlinstdlib.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove redundant kotlin-stdlib dependencies</RecipeHeader.Title>

<RecipeHeader.Description>Remove explicit `kotlin-stdlib`, `kotlin-stdlib-jdk7`, `kotlin-stdlib-jdk8`, and `kotlin-stdlib-common` dependencies. The Kotlin Gradle plugin has automatically included the stdlib since Kotlin 1.4, making explicit declarations redundant.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Remove a Gradle dependency","href":"/user-documentation/recipes/recipe-catalog/gradle/removedependency/"},{"name":"Remove a Gradle dependency","href":"/user-documentation/recipes/recipe-catalog/gradle/removedependency/"},{"name":"Remove a Gradle dependency","href":"/user-documentation/recipes/recipe-catalog/gradle/removedependency/"},{"name":"Remove a Gradle dependency","href":"/user-documentation/recipes/recipe-catalog/gradle/removedependency/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"groovy","before":"plugins {\n    id \"org.jetbrains.kotlin.jvm\" version \"2.1.0\"\n}\nrepositories {\n    mavenCentral()\n}\ndependencies {\n    implementation \"org.jetbrains.kotlin:kotlin-stdlib:1.9.24\"\n    implementation \"org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.9.24\"\n}\n","after":"plugins {\n    id \"org.jetbrains.kotlin.jvm\" version \"2.1.0\"\n}\nrepositories {\n    mavenCentral()\n}\ndependencies {\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -8,2 +8,0 @@\n}\ndependencies {\n-   implementation \"org.jetbrains.kotlin:kotlin-stdlib:1.9.24\"\n-   implementation \"org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.9.24\"\n}\n","newFile":false}]},{"variants":[{"language":"groovy","before":"plugins {\n    id \"org.jetbrains.kotlin.jvm\" version \"2.1.0\"\n}\nrepositories {\n    mavenCentral()\n}\ndependencies {\n    implementation \"org.jetbrains.kotlin:kotlin-stdlib:1.9.24\"\n    implementation \"org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.9.24\"\n}\n","after":"plugins {\n    id \"org.jetbrains.kotlin.jvm\" version \"2.1.0\"\n}\nrepositories {\n    mavenCentral()\n}\ndependencies {\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -8,2 +8,0 @@\n}\ndependencies {\n-   implementation \"org.jetbrains.kotlin:kotlin-stdlib:1.9.24\"\n-   implementation \"org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.9.24\"\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.migrate.RemoveRedundantKotlinStdlib","displayName":"Remove redundant kotlin-stdlib dependencies","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-kotlin","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

