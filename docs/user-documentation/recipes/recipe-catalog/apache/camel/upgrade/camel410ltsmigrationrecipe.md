---
title: "Migrate to 4.10.6"
sidebar_label: "Migrate to 4.10.6"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel410ltsmigrationrecipe" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to 4.10.6"}
  description={"Migrates Apache Camel application to 4.10.6."}
  fqName={"org.apache.camel.upgrade.Camel410LTSMigrationRecipe"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=org.apache.camel.upgrade.Camel410LTSMigrationRecipe"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.apache.camel.upgrade.Camel410LTSMigrationRecipe"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/org.apache.camel.upgrade.Camel410LTSMigrationRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/camel410ltsmigrationrecipe.md"}
>

<RecipeHeader.Title>Migrate to 4.10.6</RecipeHeader.Title>

<RecipeHeader.Description>Migrates Apache Camel application to 4.10.6.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrates `camel 4.10.3` application to `camel 4.10.4`","href":"/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/camel410_4/camelmigrationrecipe/"},{"name":"Migrates `camel 4.9` application to `camel 4.10`","href":"/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/camel410/camelmigrationrecipe/"},{"name":"Migrates `camel 4.8` application to `camel 4.9`","href":"/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/camel49/camelmigrationrecipe/"},{"name":"Migrates `camel 4.6` application to `camel 4.7`","href":"/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/camel47/camelmigrationrecipe/"},{"name":"Migrates `camel 4.5` application to `camel 4.6`","href":"/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/camel46/camelmigrationrecipe/"},{"name":"Migrates `camel 4.4` application to `camel 4.5`","href":"/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/camel45/camelmigrationrecipe/"},{"name":"Migrates `camel 4.0` application to `camel 4.4`","href":"/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/camel44/camelmigrationrecipe/"},{"name":"Migrate `camel3` application to `camel4.`","href":"/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/camel40/camelmigrationrecipe/"},{"name":"Migrate to Java 17","href":"/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/upgradetojava17/"},{"name":"Change Maven Java version property values to 17","href":"/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/javaversion17/"},{"name":"Update properties and yaml configurations file","href":"/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/updatepropertiesandyamlkeys/"},{"name":"Upgrade Maven dependency version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradedependencyversion/"},{"name":"Upgrade Maven plugin version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradepluginversion/"},{"name":"Upgrade Maven parent project version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradeparentversion/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.apache.camel.upgrade.Camel410LTSMigrationRecipe","displayName":"Migrate to 4.10.6","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

