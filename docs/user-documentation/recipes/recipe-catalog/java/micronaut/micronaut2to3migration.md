---
title: "Migrate from Micronaut 2.x to 3.x"
sidebar_label: "Migrate from Micronaut 2.x to 3.x"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/micronaut/micronaut2to3migration" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate from Micronaut 2.x to 3.x"}
  description={"This recipe will apply changes required for migrating from Micronaut 2 to Micronaut 3."}
  fqName={"org.openrewrite.java.micronaut.Micronaut2to3Migration"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut2-to-3.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.micronaut.Micronaut2to3Migration"}
  artifact={"org.openrewrite.recipe:rewrite-micronaut"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.micronaut.Micronaut2to3Migration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/micronaut/micronaut2to3migration.md"}
>

<RecipeHeader.Title>Migrate from Micronaut 2.x to 3.x</RecipeHeader.Title>

<RecipeHeader.Description>This recipe will apply changes required for migrating from Micronaut 2 to Micronaut 3.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate to Jakarta EE 9","href":"/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/javaxmigrationtojakarta/"},{"name":"De-capitalize `BeanIntrospection` `getProperty(..)` and `getRequiredProperty(..)` name arguments","href":"/user-documentation/recipes/recipe-catalog/java/micronaut/beanpropertycapitalizationstrategy/"},{"name":"Copy non-inherited annotations from super class","href":"/user-documentation/recipes/recipe-catalog/java/micronaut/copynoninheritedannotations/"},{"name":"Change factory method return types to reflect their resolved return type","href":"/user-documentation/recipes/recipe-catalog/java/micronaut/subclassesreturnedfromfactoriesnotinjectable/"},{"name":"Convert `OncePerRequestServerFilter` extensions to `HttpServerFilter`","href":"/user-documentation/recipes/recipe-catalog/java/micronaut/onceperrequesthttpserverfiltertohttpserverfilter/"},{"name":"`Provider` implementation beans to Micronaut `@Factory`","href":"/user-documentation/recipes/recipe-catalog/java/micronaut/providerimplementationstomicronautfactories/"},{"name":"Add `@Introspected` to classes requiring a map representation","href":"/user-documentation/recipes/recipe-catalog/java/micronaut/typerequiresintrospection/"},{"name":"Fix deprecated no-arg `ExceptionHandler` constructors","href":"/user-documentation/recipes/recipe-catalog/java/micronaut/fixdeprecatedexceptionhandlerconstructors/"},{"name":"Upgrade Maven parent project version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradeparentversion/"},{"name":"Upgrade Maven dependency version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradedependencyversion/"},{"name":"Upgrade gradle.properties Micronaut version","href":"/user-documentation/recipes/recipe-catalog/java/micronaut/upgrademicronautgradlepropertiesversion/"},{"name":"Upgrade `micronaut.version` Maven property","href":"/user-documentation/recipes/recipe-catalog/java/micronaut/upgrademicronautmavenpropertyversion/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.micronaut.Micronaut2to3Migration","displayName":"Migrate from Micronaut 2.x to 3.x","groupId":"org.openrewrite.recipe","artifactId":"rewrite-micronaut","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

