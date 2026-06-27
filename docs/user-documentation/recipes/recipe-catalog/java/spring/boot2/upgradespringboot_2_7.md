---
title: "Migrate to Spring Boot 2.7"
sidebar_label: "Migrate to Spring Boot 2.7"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/boot2/upgradespringboot_2_7" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Spring Boot 2.7"}
  description={"Upgrade to Spring Boot 2.7."}
  fqName={"org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-27.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot2/upgradespringboot_2_7.md"}
>

<RecipeHeader.Title>Migrate to Spring Boot 2.7</RecipeHeader.Title>

<RecipeHeader.Description>Upgrade to Spring Boot 2.7.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate to Spring Boot 2.6","href":"/user-documentation/recipes/recipe-catalog/java/spring/boot2/upgradespringboot_2_6/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Upgrade Maven plugin version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradepluginversion/"},{"name":"Upgrade Maven parent project version","href":"/user-documentation/recipes/recipe-catalog/maven/upgradeparentversion/"},{"name":"Update a Gradle plugin by id","href":"/user-documentation/recipes/recipe-catalog/gradle/plugins/upgradepluginversion/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Migrate to Spring Data JPA 2.7","href":"/user-documentation/recipes/recipe-catalog/java/spring/data/upgradespringdata_2_7/"},{"name":"Migrate to Spring Security 5.7","href":"/user-documentation/recipes/recipe-catalog/java/spring/security5/upgradespringsecurity_5_7/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Migrate Spring Boot properties to 2.7","href":"/user-documentation/recipes/recipe-catalog/java/spring/boot2/springbootproperties_2_7/"},{"name":"Move SAML relying party identity provider property to asserting party","href":"/user-documentation/recipes/recipe-catalog/java/spring/boot2/samlrelyingpartypropertyapplicationpropertiesmove/"},{"name":"Change key","href":"/user-documentation/recipes/recipe-catalog/yaml/changekey/"},{"name":"Change the value of a spring application property","href":"/user-documentation/recipes/recipe-catalog/java/spring/changespringpropertyvalue/"},{"name":"Upgrade MyBatis to Spring Boot 2.7","href":"/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgrademybatistospringboot_2_7/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"groovy","code":"plugins {\n    id \"java\"\n    id \"org.springframework.boot\" version \"2.6.15\"\n    id \"io.spring.dependency-management\" version \"1.0.11.RELEASE\"\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation \"org.springframework.boot:spring-boot-starter-web\"\n}\n"},"variants":[{"language":"properties","before":"distributionBase=GRADLE_USER_HOME\ndistributionPath=wrapper/dists\ndistributionUrl=https\\://downloads.gradle.org/distributions/gradle-6.7-bin.zip\nzipStoreBase=GRADLE_USER_HOME\nzipStorePath=wrapper/dists\n","after":"distributionBase=GRADLE_USER_HOME\ndistributionPath=wrapper/dists\ndistributionUrl=https\\://downloads.gradle.org/distributions/gradle-6.9.4-bin.zip\nzipStoreBase=GRADLE_USER_HOME\nzipStorePath=wrapper/dists\ndistributionSha256Sum=3e240228538de9f18772a574e99a0ba959e83d6ef351014381acd9631781389a\n","diff":"--- gradle/wrapper/gradle-wrapper.properties\n+++ gradle/wrapper/gradle-wrapper.properties\n@@ -3,1 +3,1 @@\ndistributionBase=GRADLE_USER_HOME\ndistributionPath=wrapper/dists\n-distributionUrl=https\\://downloads.gradle.org/distributions/gradle-6.7-bin.zip\n+distributionUrl=https\\://downloads.gradle.org/distributions/gradle-6.9.4-bin.zip\nzipStoreBase=GRADLE_USER_HOME\n@@ -6,0 +6,1 @@\nzipStoreBase=GRADLE_USER_HOME\nzipStorePath=wrapper/dists\n+distributionSha256Sum=3e240228538de9f18772a574e99a0ba959e83d6ef351014381acd9631781389a\n\n","newFile":false}]},{"unchanged":{"language":"groovy","code":"plugins {\n    id \"java\"\n    id \"org.springframework.boot\" version \"2.6.15\"\n    id \"io.spring.dependency-management\" version \"1.0.11.RELEASE\"\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation \"org.springframework.boot:spring-boot-starter-web\"\n}\n"},"variants":[{"language":"properties","before":"distributionBase=GRADLE_USER_HOME\ndistributionPath=wrapper/dists\ndistributionUrl=https\\://downloads.gradle.org/distributions/gradle-6.7-bin.zip\nzipStoreBase=GRADLE_USER_HOME\nzipStorePath=wrapper/dists\n","after":"distributionBase=GRADLE_USER_HOME\ndistributionPath=wrapper/dists\ndistributionUrl=https\\://downloads.gradle.org/distributions/gradle-6.9.4-bin.zip\nzipStoreBase=GRADLE_USER_HOME\nzipStorePath=wrapper/dists\ndistributionSha256Sum=3e240228538de9f18772a574e99a0ba959e83d6ef351014381acd9631781389a\n","diff":"--- gradle/wrapper/gradle-wrapper.properties\n+++ gradle/wrapper/gradle-wrapper.properties\n@@ -3,1 +3,1 @@\ndistributionBase=GRADLE_USER_HOME\ndistributionPath=wrapper/dists\n-distributionUrl=https\\://downloads.gradle.org/distributions/gradle-6.7-bin.zip\n+distributionUrl=https\\://downloads.gradle.org/distributions/gradle-6.9.4-bin.zip\nzipStoreBase=GRADLE_USER_HOME\n@@ -6,0 +6,1 @@\nzipStoreBase=GRADLE_USER_HOME\nzipStorePath=wrapper/dists\n+distributionSha256Sum=3e240228538de9f18772a574e99a0ba959e83d6ef351014381acd9631781389a\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7","displayName":"Migrate to Spring Boot 2.7","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

