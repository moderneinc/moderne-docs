---
title: "Migrate deprecated `javax.ejb` packages to `jakarta.ejb`"
sidebar_label: "Migrate deprecated `javax.ejb` packages to `jakarta.ejb`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/jakarta/javaxejbtojakartaejb" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate deprecated `javax.ejb` packages to `jakarta.ejb`"}
  description={"Java EE has been rebranded to Jakarta EE, necessitating a package relocation."}
  fqName={"org.openrewrite.java.migrate.jakarta.JavaxEjbToJakartaEjb"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.jakarta.JavaxEjbToJakartaEjb"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxEjbToJakartaEjb"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/javaxejbtojakartaejb.md"}
>

<RecipeHeader.Title>Migrate deprecated `javax.ejb` packages to `jakarta.ejb`</RecipeHeader.Title>

<RecipeHeader.Description>Java EE has been rebranded to Jakarta EE, necessitating a package relocation.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Add Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/adddependency/"},{"name":"Upgrade Maven plugin version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradepluginversion/"},{"name":"Set `maven-ejb-plugin` ejbVersion to 4.0","href":"/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/upgrademavenejbpluginconfiguration/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"xml","code":"<project>\n  <groupId>com.example</groupId>\n  <artifactId>my-ejb</artifactId>\n  <version>1.0</version>\n  <dependencies>\n    <dependency>\n      <groupId>javax.ejb</groupId>\n      <artifactId>javax.ejb-api</artifactId>\n      <version>3.2.2</version>\n      <scope>provided</scope>\n    </dependency>\n  </dependencies>\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-ejb-plugin</artifactId>\n        <version>2.5</version>\n        <configuration>\n          <ejbVersion>3.0</ejbVersion>\n        </configuration>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n"},"variants":[]},{"unchanged":{"language":"xml","code":"<project>\n  <groupId>com.example</groupId>\n  <artifactId>my-ejb</artifactId>\n  <version>1.0</version>\n  <dependencies>\n    <dependency>\n      <groupId>javax.ejb</groupId>\n      <artifactId>javax.ejb-api</artifactId>\n      <version>3.2.2</version>\n      <scope>provided</scope>\n    </dependency>\n  </dependencies>\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-ejb-plugin</artifactId>\n        <version>2.5</version>\n        <configuration>\n          <ejbVersion>3.0</ejbVersion>\n        </configuration>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.jakarta.JavaxEjbToJakartaEjb","displayName":"Migrate deprecated `javax.ejb` packages to `jakarta.ejb`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

