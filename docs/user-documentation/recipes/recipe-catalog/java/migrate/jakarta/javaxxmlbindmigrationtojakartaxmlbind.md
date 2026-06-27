---
title: "Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`"
sidebar_label: "Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/jakarta/javaxxmlbindmigrationtojakartaxmlbind" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`"}
  description={"Java EE has been rebranded to Jakarta EE, necessitating a package relocation."}
  fqName={"org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["jaxb","javax","jakarta"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/javaxxmlbindmigrationtojakartaxmlbind.md"}
>

<RecipeHeader.Title>Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`</RecipeHeader.Title>

<RecipeHeader.Description>Java EE has been rebranded to Jakarta EE, necessitating a package relocation.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Retain `javax.xml.bind:jaxb-api` when `jackson-module-jaxb-annotations` is present","href":"/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/retainjaxbapiforjackson/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Add Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/adddependency/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Upgrade Maven plugin version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradepluginversion/"},{"name":"Upgrade Maven plugin version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradepluginversion/"},{"name":"Migrate XJC Bindings to Jakata XML","href":"/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/javaxxmltojakartaxmlxjcbinding/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"groovy","code":"plugins {\n    id \"java-library\"\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation \"javax.xml.bind:jaxb-api:2.3.1\"\n}\n"},"variants":[{"language":"java","before":"import javax.xml.bind.annotation.XmlElement;\n\npublic class Test {\n    @XmlElement\n    private String name;\n}\n","after":"import jakarta.xml.bind.annotation.XmlElement;\n\npublic class Test {\n    @XmlElement\n    private String name;\n}\n","diff":"@@ -1,1 +1,1 @@\n-import javax.xml.bind.annotation.XmlElement;\n+import jakarta.xml.bind.annotation.XmlElement;\n\n","newFile":false}]},{"unchanged":{"language":"groovy","code":"plugins {\n    id \"java-library\"\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation \"javax.xml.bind:jaxb-api:2.3.1\"\n}\n"},"variants":[{"language":"java","before":"import javax.xml.bind.annotation.XmlElement;\n\npublic class Test {\n    @XmlElement\n    private String name;\n}\n","after":"import jakarta.xml.bind.annotation.XmlElement;\n\npublic class Test {\n    @XmlElement\n    private String name;\n}\n","diff":"@@ -1,1 +1,1 @@\n-import javax.xml.bind.annotation.XmlElement;\n+import jakarta.xml.bind.annotation.XmlElement;\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind","displayName":"Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

