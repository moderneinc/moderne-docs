---
title: "Comment Kotlin modules capped at Java 24"
sidebar_label: "Comment Kotlin modules capped at Java 24"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/commentkotlinmodulescappedatjava24" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Comment Kotlin modules capped at Java 24"}
  description={"Adds an explanatory comment to Kotlin modules that remain at Java 24 after the Java 25 migration, because Kotlin before 2.3 cannot target Java 25 bytecode. This covers both a Kotlin 1.x cap (which cannot be upgraded automatically) and a Kotlin 2.0-2.2 module whose upgrade to 2.3 could not be applied. Scoped to modules that actually compile Kotlin (i.e. contain `.kt` source files); the comment is self-healing, so a module that does reach Java 25 has it removed."}
  fqName={"org.openrewrite.java.migrate.CommentKotlinModulesCappedAtJava24"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-25.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["kotlin","java25"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.CommentKotlinModulesCappedAtJava24"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.CommentKotlinModulesCappedAtJava24"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/commentkotlinmodulescappedatjava24.md"}
>

<RecipeHeader.Title>Comment Kotlin modules capped at Java 24</RecipeHeader.Title>

<RecipeHeader.Description>Adds an explanatory comment to Kotlin modules that remain at Java 24 after the Java 25 migration, because Kotlin before 2.3 cannot target Java 25 bytecode. This covers both a Kotlin 1.x cap (which cannot be upgraded automatically) and a Kotlin 2.0-2.2 module whose upgrade to 2.3 could not be applied. Scoped to modules that actually compile Kotlin (i.e. contain `.kt` source files); the comment is self-healing, so a module that does reach Java 25 has it removed.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Explain why the Java version was capped at 24 for Kotlin modules","href":"/user-documentation/recipes/recipe-catalog/java/migrate/commentjava24kotlincap/"}]} preconditions={[{"name":"Module has Kotlin source files","href":"/user-documentation/recipes/recipe-catalog/java/migrate/search/modulehaskotlinsource/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.CommentKotlinModulesCappedAtJava24","displayName":"Comment Kotlin modules capped at Java 24","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

