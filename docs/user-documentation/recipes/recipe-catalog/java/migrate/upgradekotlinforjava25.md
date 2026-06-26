---
title: "Upgrade Kotlin to 2.3 for Java 25 compatibility"
sidebar_label: "Upgrade Kotlin to 2.3 for Java 25 compatibility"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/upgradekotlinforjava25" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade Kotlin to 2.3 for Java 25 compatibility"}
  description={"Only Kotlin 2.3 and later can target Java 25 bytecode, so modules on an older Kotlin are otherwise capped at Java 24. This recipe upgrades modules that compile Kotlin (i.e. contain `.kt` source files) and are already on Kotlin 2.0, 2.1, or 2.2 up to the latest Kotlin 2.3, so they can subsequently be migrated to Java 25. Modules on Kotlin 1.x are left untouched, as crossing the K2 compiler default introduced in Kotlin 2.0 is a source-breaking change that should not be applied automatically. As a safety net the module is also floored at Java 24: if the Kotlin upgrade cannot be applied (for instance because the version is managed externally by a parent or BOM), the module still lands on Java 24 rather than being left behind, and is raised the rest of the way to Java 25 only once it actually reaches Kotlin 2.3."}
  fqName={"org.openrewrite.java.migrate.UpgradeKotlinForJava25"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-25.yml"}
/>

<RecipeHeader
  displayName={"Upgrade Kotlin to 2.3 for Java 25 compatibility"}
  description={"Only Kotlin 2.3 and later can target Java 25 bytecode, so modules on an older Kotlin are otherwise capped at Java 24. This recipe upgrades modules that compile Kotlin (i.e. contain `.kt` source files) and are already on Kotlin 2.0, 2.1, or 2.2 up to the latest Kotlin 2.3, so they can subsequently be migrated to Java 25. Modules on Kotlin 1.x are left untouched, as crossing the K2 compiler default introduced in Kotlin 2.0 is a source-breaking change that should not be applied automatically. As a safety net the module is also floored at Java 24: if the Kotlin upgrade cannot be applied (for instance because the version is managed externally by a parent or BOM), the module still lands on Java 24 rather than being left behind, and is raised the rest of the way to Java 25 only once it actually reaches Kotlin 2.3."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["kotlin","java25"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.UpgradeKotlinForJava25"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeKotlinForJava25"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/upgradekotlinforjava25.md"}
/>

<RecipeList recipes={[{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Upgrade Maven plugin version","href":"maven/upgradepluginversion"},{"name":"Update a Gradle plugin by id","href":"gradle/plugins/upgradepluginversion"},{"name":"Upgrade Java version","href":"java/migrate/upgradejavaversion"}]} preconditions={[{"name":"Module has Kotlin source files","href":"java/migrate/search/modulehaskotlinsource"},{"name":"Module has dependency","href":"java/dependencies/search/modulehasdependency"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.UpgradeKotlinForJava25","displayName":"Upgrade Kotlin to 2.3 for Java 25 compatibility","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

