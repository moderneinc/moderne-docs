---
title: "Migrate to Kotlin 2"
sidebar_label: "Migrate to Kotlin 2"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Kotlin 2"}
  description={"Migrate deprecated Kotlin 1.x APIs to their Kotlin 2.x replacements and update Gradle build files for Kotlin 2.x compatibility. Deprecated APIs were deprecated in Kotlin 1.4-1.5 and become errors in Kotlin 2.1."}
  fqName={"org.openrewrite.kotlin.migrate.UpgradeToKotlin2"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={["kotlin"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.migrate.UpgradeToKotlin2"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.migrate.UpgradeToKotlin2"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/migrate/upgradetokotlin2.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate to Kotlin 2</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated Kotlin 1.x APIs to their Kotlin 2.x replacements and update Gradle build files for Kotlin 2.x compatibility. Deprecated APIs were deprecated in Kotlin 1.4-1.5 and become errors in Kotlin 2.1.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace deprecated String case conversions","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/replacedeprecatedstringcaseconversions/"},{"name":"Replace deprecated Char case conversions","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/replacedeprecatedcharcaseconversions/"},{"name":"Replace deprecated `appendln` with `appendLine`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/replacedeprecatedappendln/"},{"name":"Replace deprecated `capitalize` and `decapitalize`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/replacedeprecatedcapitalizeanddecapitalize/"},{"name":"Replace `Enum.values()` with `Enum.entries`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/replaceenumvalueswithentries/"},{"name":"Replace `enumValues<T>()` with `enumEntries<T>()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/replaceenumvaluesfunctionwithenumentries/"},{"name":"Upgrade Kotlin Gradle plugins to 2.x","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/upgradekotlingradleplugins/"},{"name":"Remove redundant kotlin-stdlib dependencies","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/removeredundantkotlinstdlib/"},{"name":"Remove deprecated Kotlin Gradle properties","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/removedeprecatedkotlingradleproperties/"},{"name":"Replace `kotlinOptions` with `compilerOptions` in Gradle build files","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/replacekotlinoptionswithcompileroptions/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"kotlin","before":"enum class Color { RED, GREEN, BLUE }\nfun test(s: String, c: Char, sb: StringBuilder) {\n    val lower = s.toLowerCase()\n    val upper = s.toUpperCase()\n    val charLower = c.toLowerCase()\n    val charUpper = c.toUpperCase()\n    sb.appendln(\"hello\")\n    val colors = Color.values()\n    val entries = enumValues<Color>()\n    val cap = s.capitalize()\n    val decap = s.decapitalize()\n}\n","after":"enum class Color { RED, GREEN, BLUE }\nfun test(s: String, c: Char, sb: StringBuilder) {\n    val lower = s.lowercase()\n    val upper = s.uppercase()\n    val charLower = c.lowercaseChar()\n    val charUpper = c.uppercaseChar()\n    sb.appendLine(\"hello\")\n    val colors = Color.entries\n    val entries = enumEntries<Color>()\n    val cap = s.replaceFirstChar { if (it.isLowerCase()) it.titlecase() else it.toString() }\n    val decap = s.replaceFirstChar { it.lowercase() }\n}\n","diff":"@@ -3,9 +3,9 @@\nenum class Color { RED, GREEN, BLUE }\nfun test(s: String, c: Char, sb: StringBuilder) {\n-   val lower = s.toLowerCase()\n-   val upper = s.toUpperCase()\n-   val charLower = c.toLowerCase()\n-   val charUpper = c.toUpperCase()\n-   sb.appendln(\"hello\")\n-   val colors = Color.values()\n-   val entries = enumValues<Color>()\n-   val cap = s.capitalize()\n-   val decap = s.decapitalize()\n+   val lower = s.lowercase()\n+   val upper = s.uppercase()\n+   val charLower = c.lowercaseChar()\n+   val charUpper = c.uppercaseChar()\n+   sb.appendLine(\"hello\")\n+   val colors = Color.entries\n+   val entries = enumEntries<Color>()\n+   val cap = s.replaceFirstChar { if (it.isLowerCase()) it.titlecase() else it.toString() }\n+   val decap = s.replaceFirstChar { it.lowercase() }\n}\n","newFile":false}]},{"variants":[{"language":"kotlin","before":"enum class Color { RED, GREEN, BLUE }\nfun test(s: String, c: Char, sb: StringBuilder) {\n    val lower = s.toLowerCase()\n    val upper = s.toUpperCase()\n    val charLower = c.toLowerCase()\n    val charUpper = c.toUpperCase()\n    sb.appendln(\"hello\")\n    val colors = Color.values()\n    val entries = enumValues<Color>()\n    val cap = s.capitalize()\n    val decap = s.decapitalize()\n}\n","after":"enum class Color { RED, GREEN, BLUE }\nfun test(s: String, c: Char, sb: StringBuilder) {\n    val lower = s.lowercase()\n    val upper = s.uppercase()\n    val charLower = c.lowercaseChar()\n    val charUpper = c.uppercaseChar()\n    sb.appendLine(\"hello\")\n    val colors = Color.entries\n    val entries = enumEntries<Color>()\n    val cap = s.replaceFirstChar { if (it.isLowerCase()) it.titlecase() else it.toString() }\n    val decap = s.replaceFirstChar { it.lowercase() }\n}\n","diff":"@@ -3,9 +3,9 @@\nenum class Color { RED, GREEN, BLUE }\nfun test(s: String, c: Char, sb: StringBuilder) {\n-   val lower = s.toLowerCase()\n-   val upper = s.toUpperCase()\n-   val charLower = c.toLowerCase()\n-   val charUpper = c.toUpperCase()\n-   sb.appendln(\"hello\")\n-   val colors = Color.values()\n-   val entries = enumValues<Color>()\n-   val cap = s.capitalize()\n-   val decap = s.decapitalize()\n+   val lower = s.lowercase()\n+   val upper = s.uppercase()\n+   val charLower = c.lowercaseChar()\n+   val charUpper = c.uppercaseChar()\n+   sb.appendLine(\"hello\")\n+   val colors = Color.entries\n+   val entries = enumEntries<Color>()\n+   val cap = s.replaceFirstChar { if (it.isLowerCase()) it.titlecase() else it.toString() }\n+   val decap = s.replaceFirstChar { it.lowercase() }\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.migrate.UpgradeToKotlin2","displayName":"Migrate to Kotlin 2","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-kotlin","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

