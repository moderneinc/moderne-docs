---
title: "Migrate to JetBrains Exposed 1.0"
sidebar_label: "Migrate to JetBrains Exposed 1.0"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to JetBrains Exposed 1.0"}
  description={"Migrate from JetBrains Exposed 0.x to 1.0.0. This includes package reorganization (adding `v1` prefix), type moves between modules, class renames, method renames, and Gradle dependency updates.\nSome changes require manual intervention and are not covered by this recipe: `Table.uuid()` should be changed to `Table.javaUUID()` for `java.util.UUID` values, `DateColumnType` with constructor parameter `time=false` or `time=true` should be split into `JodaLocalDateColumnType` or `JodaLocalDateTimeColumnType`, `SqlExpressionBuilder.*` usages should be replaced with top-level function imports, and `Statement.execute()` calls should use `BlockingExecutable` wrapping."}
  fqName={"org.openrewrite.kotlin.exposed.UpgradeToExposed_1"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={["kotlin","exposed"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.exposed.UpgradeToExposed_1"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.exposed.UpgradeToExposed_1"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/exposed/upgradetoexposed_1.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate to JetBrains Exposed 1.0</RecipeHeader.Title>

<RecipeHeader.Description>Migrate from JetBrains Exposed 0.x to 1.0.0. This includes package reorganization (adding `v1` prefix), type moves between modules, class renames, method renames, and Gradle dependency updates. Some changes require manual intervention and are not covered by this recipe: `Table.uuid()` should be changed to `Table.javaUUID()` for `java.util.UUID` values, `DateColumnType` with constructor parameter `time=false` or `time=true` should be split into `JodaLocalDateColumnType` or `JodaLocalDateTimeColumnType`, `SqlExpressionBuilder.*` usages should be replaced with top-level function imports, and `Statement.execute()` calls should use `BlockingExecutable` wrapping.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate Exposed type references to 1.0 packages","href":"/user-documentation/recipes/recipe-catalog/kotlin/exposed/exposedchangetypes/"},{"name":"Rename Exposed deprecated methods for 1.0","href":"/user-documentation/recipes/recipe-catalog/kotlin/exposed/exposedchangemethodnames/"},{"name":"Upgrade Exposed Gradle dependencies to 1.0","href":"/user-documentation/recipes/recipe-catalog/kotlin/exposed/exposedupgradegradledependencies/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"kotlin","before":"import org.jetbrains.exposed.sql.Column\nimport org.jetbrains.exposed.sql.Table\n\nobject Users : Table() {\n    val id: Column<Int> = integer(\"id\")\n    val name: Column<String> = varchar(\"name\", 50)\n}\n","after":"import org.jetbrains.exposed.v1.core.Column\nimport org.jetbrains.exposed.v1.core.Table\n\nobject Users : Table() {\n    val id: Column<Int> = integer(\"id\")\n    val name: Column<String> = varchar(\"name\", 50)\n}\n","diff":"@@ -1,2 +1,2 @@\n-import org.jetbrains.exposed.sql.Column\n-import org.jetbrains.exposed.sql.Table\n+import org.jetbrains.exposed.v1.core.Column\n+import org.jetbrains.exposed.v1.core.Table\n\n","newFile":false}]},{"variants":[{"language":"kotlin","before":"import org.jetbrains.exposed.sql.Column\nimport org.jetbrains.exposed.sql.Table\n\nobject Users : Table() {\n    val id: Column<Int> = integer(\"id\")\n    val name: Column<String> = varchar(\"name\", 50)\n}\n","after":"import org.jetbrains.exposed.v1.core.Column\nimport org.jetbrains.exposed.v1.core.Table\n\nobject Users : Table() {\n    val id: Column<Int> = integer(\"id\")\n    val name: Column<String> = varchar(\"name\", 50)\n}\n","diff":"@@ -1,2 +1,2 @@\n-import org.jetbrains.exposed.sql.Column\n-import org.jetbrains.exposed.sql.Table\n+import org.jetbrains.exposed.v1.core.Column\n+import org.jetbrains.exposed.v1.core.Table\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.exposed.UpgradeToExposed_1","displayName":"Migrate to JetBrains Exposed 1.0","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-kotlin","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

