---
title: "Update Maven Java project properties"
sidebar_label: "Update Maven Java project properties"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/maven/updatemavenprojectpropertyjavaversion" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Update Maven Java project properties"}
  description={"The Java version is determined by several project properties, including:\n\n * `java.version`\n * `jdk.version`\n * `javaVersion`\n * `jdkVersion`\n * `maven.compiler.source`\n * `maven.compiler.target`\n * `maven.compiler.release`\n * `release.version`\n\nIf none of these properties are in use and the maven compiler plugin is not otherwise configured, adds the `maven.compiler.release` property."}
  fqName={"org.openrewrite.java.migrate.maven.UpdateMavenProjectPropertyJavaVersion"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/maven/UpdateMavenProjectPropertyJavaVersion.java"}
/>

<RecipeHeader
  displayName={"Update Maven Java project properties"}
  description={"The Java version is determined by several project properties, including:\n\n * `java.version`\n * `jdk.version`\n * `javaVersion`\n * `jdkVersion`\n * `maven.compiler.source`\n * `maven.compiler.target`\n * `maven.compiler.release`\n * `release.version`\n\nIf none of these properties are in use and the maven compiler plugin is not otherwise configured, adds the `maven.compiler.release` property."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.maven.UpdateMavenProjectPropertyJavaVersion"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.maven.UpdateMavenProjectPropertyJavaVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/maven/updatemavenprojectpropertyjavaversion.md"}
/>

<RecipeList recipes={[{"name":"Update Maven Java project properties","href":"maven/updatemavenprojectpropertyjavaversion"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"Integer","name":"version","required":true,"description":"The Java version to upgrade to.","example":"11"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"version","value":"17"}],"variants":[{"language":"xml","before":"<project>\n    <groupId>com.example</groupId>\n    <artifactId>foo</artifactId>\n    <version>1.0.0</version>\n    <modelVersion>4.0</modelVersion>\n    <properties>\n        <java.version>11</java.version>\n        <jdk.version>11</jdk.version>\n        <javaVersion>11</javaVersion>\n        <jdkVersion>11</jdkVersion>\n        <maven.compiler.source>11</maven.compiler.source>\n        <maven.compiler.target>11</maven.compiler.target>\n        <maven.compiler.release>11</maven.compiler.release>\n        <release.version>11</release.version>\n    </properties>\n</project>\n","after":"<project>\n    <groupId>com.example</groupId>\n    <artifactId>foo</artifactId>\n    <version>1.0.0</version>\n    <modelVersion>4.0</modelVersion>\n    <properties>\n        <java.version>17</java.version>\n        <jdk.version>17</jdk.version>\n        <javaVersion>17</javaVersion>\n        <jdkVersion>17</jdkVersion>\n        <maven.compiler.source>17</maven.compiler.source>\n        <maven.compiler.target>17</maven.compiler.target>\n        <maven.compiler.release>17</maven.compiler.release>\n        <release.version>17</release.version>\n    </properties>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -7,8 +7,8 @@\n    <modelVersion>4.0</modelVersion>\n    <properties>\n-       <java.version>11</java.version>\n-       <jdk.version>11</jdk.version>\n-       <javaVersion>11</javaVersion>\n-       <jdkVersion>11</jdkVersion>\n-       <maven.compiler.source>11</maven.compiler.source>\n-       <maven.compiler.target>11</maven.compiler.target>\n-       <maven.compiler.release>11</maven.compiler.release>\n-       <release.version>11</release.version>\n+       <java.version>17</java.version>\n+       <jdk.version>17</jdk.version>\n+       <javaVersion>17</javaVersion>\n+       <jdkVersion>17</jdkVersion>\n+       <maven.compiler.source>17</maven.compiler.source>\n+       <maven.compiler.target>17</maven.compiler.target>\n+       <maven.compiler.release>17</maven.compiler.release>\n+       <release.version>17</release.version>\n    </properties>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.maven.UpdateMavenProjectPropertyJavaVersion","displayName":"Update Maven Java project properties","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"version=11\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

