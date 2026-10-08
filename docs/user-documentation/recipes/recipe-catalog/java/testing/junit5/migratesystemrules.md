---
title: "Migrate System Rules to System Stubs and JUnit Pioneer"
sidebar_label: "Migrate System Rules to System Stubs and JUnit Pioneer"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/junit5/migratesystemrules" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate System Rules to System Stubs and JUnit Pioneer"}
  description={"Migrates the JUnit 4 rules of System Rules (`com.github.stefanbirkner:system-rules`) as part of the JUnit 4 to 5 migration. System property rules that only take string literals become JUnit Pioneer annotations; the other system property, environment variable, standard stream and standard input rules become System Stubs `@SystemStub` fields, and `ExpectedSystemExit` becomes System Stubs' `catchSystemExit(..)`. Rules that can not be migrated get a `TODO` comment, and System Rules is only removed once nothing uses it."}
  fqName={"org.openrewrite.java.testing.junit5.MigrateSystemRules"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["junit-pioneer","junit","jupiter","system-rules","testing","system-stubs"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.junit5.MigrateSystemRules"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.MigrateSystemRules"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/junit5/migratesystemrules.md"}
>

<RecipeHeader.Title>Migrate System Rules to System Stubs and JUnit Pioneer</RecipeHeader.Title>

<RecipeHeader.Description>Migrates the JUnit 4 rules of System Rules (`com.github.stefanbirkner:system-rules`) as part of the JUnit 4 to 5 migration. System property rules that only take string literals become JUnit Pioneer annotations; the other system property, environment variable, standard stream and standard input rules become System Stubs `@SystemStub` fields, and `ExpectedSystemExit` becomes System Stubs' `catchSystemExit(..)`. Rules that can not be migrated get a `TODO` comment, and System Rules is only removed once nothing uses it.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate JUnit 4 environmentVariables rule to JUnit 5 system stubs extension","href":"/user-documentation/recipes/recipe-catalog/java/testing/junit5/environmentvariables/"},{"name":"Migrate System Rules system property rules to JUnit Pioneer annotations","href":"/user-documentation/recipes/recipe-catalog/java/testing/junit5/systempropertyrulestopioneer/"},{"name":"Migrate System Rules to System Stubs","href":"/user-documentation/recipes/recipe-catalog/java/testing/junit5/systemrulestosystemstubs/"},{"name":"Migrate System Rules `ExpectedSystemExit` to System Stubs `catchSystemExit(..)`","href":"/user-documentation/recipes/recipe-catalog/java/testing/junit5/expectedsystemexittocatchsystemexit/"},{"name":"Update dependencies for the System Rules migration","href":"/user-documentation/recipes/recipe-catalog/java/testing/junit5/systemrulesdependencies/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.junit5.MigrateSystemRules","displayName":"Migrate System Rules to System Stubs and JUnit Pioneer","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

