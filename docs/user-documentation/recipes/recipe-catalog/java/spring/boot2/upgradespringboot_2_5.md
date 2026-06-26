---
title: "Upgrade to Spring Boot 2.5"
sidebar_label: "Upgrade to Spring Boot 2.5"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/boot2/upgradespringboot_2_5" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Spring Boot 2.5"}
  description={"Upgrade to Spring Boot 2.5 from any prior 2.x version."}
  fqName={"org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-25.yml"}
/>

<RecipeHeader
  displayName={"Upgrade to Spring Boot 2.5"}
  description={"Upgrade to Spring Boot 2.5 from any prior 2.x version."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot2/upgradespringboot_2_5.md"}
/>

<RecipeList recipes={[{"name":"Migrate to Spring Boot 2.4","href":"java/spring/boot2/upgradespringboot_2_4"},{"name":"Migrate to Spring Data JPA 2.5","href":"java/spring/data/upgradespringdata_2_5"},{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Upgrade Maven plugin version","href":"maven/upgradepluginversion"},{"name":"Upgrade Maven parent project version","href":"maven/upgradeparentversion"},{"name":"Update a Gradle plugin by id","href":"gradle/plugins/upgradepluginversion"},{"name":"Update a Gradle plugin by id","href":"gradle/plugins/upgradepluginversion"},{"name":"Update Gradle wrapper","href":"gradle/updategradlewrapper"},{"name":"Migrate flyway and liquibase credentials","href":"java/spring/boot2/migratedatabasecredentials"},{"name":"Upgrade Spock to a Groovy 3 compatible variant","href":"java/spring/boot2/upgradespocktogroovy3"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Migrate deprecated `ActuatorMediaType` to `ApiVersion#getProducedMimeType`","href":"java/spring/boot2/migrateactuatormediatypetoapiversion"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Migrate Spring Boot properties to 2.5","href":"java/spring/boot2/springbootproperties_2_5"},{"name":"Adds `@DependsOnDatabaseInitialization` to Spring Beans and Components depending on `javax.sql.DataSource`","href":"java/spring/boot2/databasecomponentandbeaninitializationordering"},{"name":"Upgrade MyBatis to Spring Boot 2.5","href":"java/spring/boot3/upgrademybatistospringboot_2_5"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"groovy","before":"plugins {\n  id 'java'\n}\n\nrepositories {\n   mavenCentral()\n}\n\ndependencies {\n    runtimeOnly 'mysql:mysql-connector-java:8.0.30'\n}\ntasks.withType(Test).configureEach {\n    useJUnitPlatform()\n}\n","after":"plugins {\n  id 'java'\n}\n\nrepositories {\n   mavenCentral()\n}\n\ndependencies {\n    runtimeOnly 'com.mysql:mysql-connector-j:8.0.33'\n}\ntasks.withType(Test).configureEach {\n    useJUnitPlatform()\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -10,1 +10,1 @@\n\ndependencies {\n-   runtimeOnly 'mysql:mysql-connector-java:8.0.30'\n+   runtimeOnly 'com.mysql:mysql-connector-j:8.0.33'\n}\n","newFile":false}]},{"variants":[{"language":"xml","before":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <dependencies>\n    <dependency>\n      <groupId>mysql</groupId>\n      <artifactId>mysql-connector-java</artifactId>\n      <version>8.0.30</version>\n      <scope>runtime</scope>\n    </dependency>\n  </dependencies>\n</project>\n","after":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <dependencies>\n    <dependency>\n      <groupId>com.mysql</groupId>\n      <artifactId>mysql-connector-j</artifactId>\n      <version>8.0.33</version>\n      <scope>runtime</scope>\n    </dependency>\n  </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -8,3 +8,3 @@\n  <dependencies>\n    <dependency>\n-     <groupId>mysql</groupId>\n-     <artifactId>mysql-connector-java</artifactId>\n-     <version>8.0.30</version>\n+     <groupId>com.mysql</groupId>\n+     <artifactId>mysql-connector-j</artifactId>\n+     <version>8.0.33</version>\n      <scope>runtime</scope>\n","newFile":false}]},{"variants":[{"language":"groovy","before":"plugins {\n  id 'java'\n}\n\nrepositories {\n   mavenCentral()\n}\n\ndependencies {\n    runtimeOnly 'mysql:mysql-connector-java:8.0.30'\n}\ntasks.withType(Test).configureEach {\n    useJUnitPlatform()\n}\n","after":"plugins {\n  id 'java'\n}\n\nrepositories {\n   mavenCentral()\n}\n\ndependencies {\n    runtimeOnly 'com.mysql:mysql-connector-j:8.0.33'\n}\ntasks.withType(Test).configureEach {\n    useJUnitPlatform()\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -10,1 +10,1 @@\n\ndependencies {\n-   runtimeOnly 'mysql:mysql-connector-java:8.0.30'\n+   runtimeOnly 'com.mysql:mysql-connector-j:8.0.33'\n}\n","newFile":false}]},{"variants":[{"language":"xml","before":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <dependencies>\n    <dependency>\n      <groupId>mysql</groupId>\n      <artifactId>mysql-connector-java</artifactId>\n      <version>8.0.30</version>\n      <scope>runtime</scope>\n    </dependency>\n  </dependencies>\n</project>\n","after":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <dependencies>\n    <dependency>\n      <groupId>com.mysql</groupId>\n      <artifactId>mysql-connector-j</artifactId>\n      <version>8.0.33</version>\n      <scope>runtime</scope>\n    </dependency>\n  </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -8,3 +8,3 @@\n  <dependencies>\n    <dependency>\n-     <groupId>mysql</groupId>\n-     <artifactId>mysql-connector-java</artifactId>\n-     <version>8.0.30</version>\n+     <groupId>com.mysql</groupId>\n+     <artifactId>mysql-connector-j</artifactId>\n+     <version>8.0.33</version>\n      <scope>runtime</scope>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5","displayName":"Upgrade to Spring Boot 2.5","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

