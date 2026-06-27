---
title: "Migrate to Dropwizard 5.0.x from 4.x"
sidebar_label: "Migrate to Dropwizard 5.0.x from 4.x"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Dropwizard 5.0.x from 4.x"}
  description={"Apply changes required to upgrade a Dropwizard 4.x application to 5.0.x. This includes upgrading dependencies, removing deprecated configuration options, and migrating Jetty handler implementations.\nIncludes required migrations to Java 17, Jakarta EE 10, JUnit 5, Jackson 2.x, and Hibernate 6.6. See [the upgrade guide](https://www.dropwizard.io/en/stable/manual/upgrade-notes/upgrade-notes-5_0_x.html)."}
  fqName={"io.moderne.java.dropwizard.MigrateToDropwizard5"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.dropwizard.MigrateToDropwizard5"}
  artifact={"io.moderne.recipe:rewrite-dropwizard"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.dropwizard.MigrateToDropwizard5"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dropwizard/migratetodropwizard5.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate to Dropwizard 5.0.x from 4.x</RecipeHeader.Title>

<RecipeHeader.Description>Apply changes required to upgrade a Dropwizard 4.x application to 5.0.x. This includes upgrading dependencies, removing deprecated configuration options, and migrating Jetty handler implementations. Includes required migrations to Java 17, Jakarta EE 10, JUnit 5, Jackson 2.x, and Hibernate 6.6. See [the upgrade guide](https://www.dropwizard.io/en/stable/manual/upgrade-notes/upgrade-notes-5_0_x.html).</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Migrate to Java 17","href":"/user-documentation/recipes/recipe-catalog/java/migrate/upgradetojava17/"},{"name":"Migrate to Jakarta EE 10","href":"/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/jakartaee10/"},{"name":"Upgrade to JUnit 5.14","href":"/user-documentation/recipes/recipe-catalog/java/testing/junit5/upgradetojunit514/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Migrate to Hibernate 6.6.x","href":"/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate66-community-edition/"},{"name":"Delete key","href":"/user-documentation/recipes/recipe-catalog/yaml/deletekey/"},{"name":"Migrate Jetty `AbstractHandler` to Jetty 12 `Handler.Abstract`","href":"/user-documentation/recipes/recipe-catalog/java/dropwizard/dw5/migratejettyhandlersignature/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"xml","code":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.dropwizard</groupId>\n                <artifactId>dropwizard-bom</artifactId>\n                <version>4.0.10</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>io.dropwizard</groupId>\n            <artifactId>dropwizard-core</artifactId>\n        </dependency>\n    </dependencies>\n</project>\n"},"variants":[]},{"unchanged":{"language":"xml","code":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.dropwizard</groupId>\n                <artifactId>dropwizard-bom</artifactId>\n                <version>4.0.10</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>io.dropwizard</groupId>\n            <artifactId>dropwizard-core</artifactId>\n        </dependency>\n    </dependencies>\n</project>\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.dropwizard.MigrateToDropwizard5","displayName":"Migrate to Dropwizard 5.0.x from 4.x","groupId":"io.moderne.recipe","artifactId":"rewrite-dropwizard","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DROPWIZARD","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

