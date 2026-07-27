---
title: "Upgrade Kotlin `jvmTarget` to match the Java version"
sidebar_label: "Upgrade Kotlin `jvmTarget` to match the Java version"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/upgradekotlinjvmtargetversion" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade Kotlin `jvmTarget` to match the Java version"}
  description={"Align the Kotlin `jvmTarget` with the project's Java version so the Kotlin compiler emits bytecode at the same level as `javac`. Covers `kotlin-maven-plugin` `<jvmTarget>` configuration and the Gradle `kotlinOptions { jvmTarget = ... }` / `compilerOptions { jvmTarget = ... }` blocks (Groovy and Kotlin DSL). Will not downgrade if the existing Kotlin target is higher than the requested version."}
  fqName={"org.openrewrite.java.migrate.UpgradeKotlinJvmTargetVersion"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/UpgradeKotlinJvmTargetVersion.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.UpgradeKotlinJvmTargetVersion"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeKotlinJvmTargetVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/upgradekotlinjvmtargetversion.md"}
>

<RecipeHeader.Title>Upgrade Kotlin `jvmTarget` to match the Java version</RecipeHeader.Title>

<RecipeHeader.Description>Align the Kotlin `jvmTarget` with the project's Java version so the Kotlin compiler emits bytecode at the same level as `javac`. Covers `kotlin-maven-plugin` `<jvmTarget>` configuration and the Gradle `kotlinOptions { jvmTarget = ... }` / `compilerOptions { jvmTarget = ... }` blocks (Groovy and Kotlin DSL). Will not downgrade if the existing Kotlin target is higher than the requested version.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Integer","name":"version","required":true,"description":"The Java version to align Kotlin's `jvmTarget` with.","example":"21"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"version","value":"21"}],"variants":[{"language":"xml","before":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>org.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>1.0.0</version>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>1.9.24</version>\n                <configuration>\n                    <jvmTarget>11</jvmTarget>\n                    <args>\n                        <arg>-Xjsr305=strict</arg>\n                    </args>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","after":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>org.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>1.0.0</version>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>1.9.24</version>\n                <configuration>\n                    <jvmTarget>21</jvmTarget>\n                    <args>\n                        <arg>-Xjsr305=strict</arg>\n                    </args>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -13,1 +13,1 @@\n                <version>1.9.24</version>\n                <configuration>\n-                   <jvmTarget>11</jvmTarget>\n+                   <jvmTarget>21</jvmTarget>\n                    <args>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.UpgradeKotlinJvmTargetVersion","displayName":"Upgrade Kotlin `jvmTarget` to match the Java version","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"version=21\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

