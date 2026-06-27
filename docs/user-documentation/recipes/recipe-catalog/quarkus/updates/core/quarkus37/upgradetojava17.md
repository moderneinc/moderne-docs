---
title: "Migrate to Java 17"
sidebar_label: "Migrate to Java 17"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/updates/core/quarkus37/upgradetojava17" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Java 17"}
  description={"This recipe will apply changes commonly needed when migrating to Java 17. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 17 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 17.\n"}
  fqName={"io.quarkus.updates.core.quarkus37.UpgradeToJava17"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=io.quarkus.updates.core.quarkus37.UpgradeToJava17"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["java17"]}
  license={"Apache License Version 2.0"}
  fqName={"io.quarkus.updates.core.quarkus37.UpgradeToJava17"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/io.quarkus.updates.core.quarkus37.UpgradeToJava17"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/updates/core/quarkus37/upgradetojava17.md"}
>

<RecipeHeader.Title>Migrate to Java 17</RecipeHeader.Title>

<RecipeHeader.Description>This recipe will apply changes commonly needed when migrating to Java 17. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 17 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 17.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade `actions/setup-java` `java-version`","href":"/user-documentation/recipes/recipe-catalog/quarkus/updates/core/quarkus37/setupjavaupgradejavaversion/"},{"name":"Remove method invocations","href":"/user-documentation/recipes/recipe-catalog/java/removemethodinvocations/"},{"name":"Remove method invocations","href":"/user-documentation/recipes/recipe-catalog/java/removemethodinvocations/"},{"name":"Upgrade Maven plugin version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradepluginversion/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.quarkus.updates.core.quarkus37.UpgradeToJava17","displayName":"Migrate to Java 17","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

