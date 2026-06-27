---
title: "Use Maven compiler plugin release configuration"
sidebar_label: "Use Maven compiler plugin release configuration"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/maven/usemavencompilerpluginreleaseconfiguration" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use Maven compiler plugin release configuration"}
  description={"Replaces any explicit `source` or `target` configuration (if present) on the `maven-compiler-plugin` with `release`, and updates the `release` value if needed. Will not downgrade the Java version if the current version is higher."}
  fqName={"org.openrewrite.java.migrate.maven.UseMavenCompilerPluginReleaseConfiguration"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/maven/UseMavenCompilerPluginReleaseConfiguration.java"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.maven.UseMavenCompilerPluginReleaseConfiguration"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.maven.UseMavenCompilerPluginReleaseConfiguration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/maven/usemavencompilerpluginreleaseconfiguration.md"}
>

<RecipeHeader.Title>Use Maven compiler plugin release configuration</RecipeHeader.Title>

<RecipeHeader.Description>Replaces any explicit `source` or `target` configuration (if present) on the `maven-compiler-plugin` with `release`, and updates the `release` value if needed. Will not downgrade the Java version if the current version is higher.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Use Maven compiler plugin release configuration","href":"/user-documentation/recipes/recipe-catalog/maven/usemavencompilerpluginreleaseconfiguration/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"Integer","name":"releaseVersion","required":true,"description":"The new value for the release configuration. This recipe prefers ${java.version} if defined.","example":"11"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"releaseVersion","value":"11"}],"variants":[{"language":"xml","before":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>org.sample</groupId>\n  <artifactId>sample</artifactId>\n  <version>1.0.0</version>\n\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-compiler-plugin</artifactId>\n        <version>3.8.0</version>\n        <configuration>\n          <source>1.8</source>\n          <target>1.8</target>\n        </configuration>\n      </plugin>\n    </plugins>\n  </build>\n\n</project>\n","after":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>org.sample</groupId>\n  <artifactId>sample</artifactId>\n  <version>1.0.0</version>\n\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-compiler-plugin</artifactId>\n        <version>3.8.0</version>\n        <configuration>\n          <release>11</release>\n        </configuration>\n      </plugin>\n    </plugins>\n  </build>\n\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -15,2 +15,1 @@\n        <version>3.8.0</version>\n        <configuration>\n-         <source>1.8</source>\n-         <target>1.8</target>\n+         <release>11</release>\n        </configuration>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.maven.UseMavenCompilerPluginReleaseConfiguration","displayName":"Use Maven compiler plugin release configuration","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"releaseVersion=11\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

