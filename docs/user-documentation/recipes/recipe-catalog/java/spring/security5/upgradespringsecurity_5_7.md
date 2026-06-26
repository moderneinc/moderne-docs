---
title: "Migrate to Spring Security 5.7"
sidebar_label: "Migrate to Spring Security 5.7"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/security5/upgradespringsecurity_5_7" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Spring Security 5.7"}
  description={"Migrate applications to the latest Spring Security 5.7 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions."}
  fqName={"org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_7"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-security-57.yml"}
/>

<RecipeHeader
  displayName={"Migrate to Spring Security 5.7"}
  description={"Migrate applications to the latest Spring Security 5.7 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["spring","security"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_7"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_7"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/security5/upgradespringsecurity_5_7.md"}
/>

<RecipeList recipes={[{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Spring Security 5.4 introduces the ability to configure `HttpSecurity` by creating a `SecurityFilterChain` bean","href":"java/spring/security5/websecurityconfigureradapter"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>org.example</groupId>\n    <artifactId>example</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.security</groupId>\n            <artifactId>spring-security-core</artifactId>\n            <version>5.6.0</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.security</groupId>\n            <artifactId>spring-security-oauth2-authorization-server</artifactId>\n            <version>0.2.0</version>\n        </dependency>\n    </dependencies>\n</project>\n","after":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>org.example</groupId>\n    <artifactId>example</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.security</groupId>\n            <artifactId>spring-security-core</artifactId>\n            <version>5.7.14</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.security</groupId>\n            <artifactId>spring-security-oauth2-authorization-server</artifactId>\n            <version>0.3.1</version>\n        </dependency>\n    </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -10,1 +10,1 @@\n            <groupId>org.springframework.security</groupId>\n            <artifactId>spring-security-core</artifactId>\n-           <version>5.6.0</version>\n+           <version>5.7.14</version>\n        </dependency>\n@@ -15,1 +15,1 @@\n            <groupId>org.springframework.security</groupId>\n            <artifactId>spring-security-oauth2-authorization-server</artifactId>\n-           <version>0.2.0</version>\n+           <version>0.3.1</version>\n        </dependency>\n","newFile":false}]},{"variants":[{"language":"xml","before":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>org.example</groupId>\n    <artifactId>example</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.security</groupId>\n            <artifactId>spring-security-core</artifactId>\n            <version>5.6.0</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.security</groupId>\n            <artifactId>spring-security-oauth2-authorization-server</artifactId>\n            <version>0.2.0</version>\n        </dependency>\n    </dependencies>\n</project>\n","after":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>org.example</groupId>\n    <artifactId>example</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.security</groupId>\n            <artifactId>spring-security-core</artifactId>\n            <version>5.7.14</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.security</groupId>\n            <artifactId>spring-security-oauth2-authorization-server</artifactId>\n            <version>0.3.1</version>\n        </dependency>\n    </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -10,1 +10,1 @@\n            <groupId>org.springframework.security</groupId>\n            <artifactId>spring-security-core</artifactId>\n-           <version>5.6.0</version>\n+           <version>5.7.14</version>\n        </dependency>\n@@ -15,1 +15,1 @@\n            <groupId>org.springframework.security</groupId>\n            <artifactId>spring-security-oauth2-authorization-server</artifactId>\n-           <version>0.2.0</version>\n+           <version>0.3.1</version>\n        </dependency>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_7","displayName":"Migrate to Spring Security 5.7","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

