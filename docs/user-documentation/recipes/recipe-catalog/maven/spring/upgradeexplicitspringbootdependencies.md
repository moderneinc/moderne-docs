---
title: "Upgrade Spring dependencies"
sidebar_label: "Upgrade Spring dependencies"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/spring/upgradeexplicitspringbootdependencies" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade Spring dependencies"}
  description={"Upgrades dependencies according to the specified version of spring boot. Spring boot has many direct and transitive dependencies. When a module has an explicit dependency on one of these it may also need to be upgraded to match the version used by spring boot."}
  fqName={"org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/maven/spring/UpgradeExplicitSpringBootDependencies.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/spring/upgradeexplicitspringbootdependencies.md"}
>

<RecipeHeader.Title>Upgrade Spring dependencies</RecipeHeader.Title>

<RecipeHeader.Description>Upgrades dependencies according to the specified version of spring boot. Spring boot has many direct and transitive dependencies. When a module has an explicit dependency on one of these it may also need to be upgraded to match the version used by spring boot.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fromVersion","required":true,"description":"XRange pattern for spring version used to limit which projects should be updated","example":" 2.7.+"},{"type":"String","name":"toVersion","required":true,"description":"Upgrade version of `org.springframework.boot`","example":"3.0.0-M3"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fromVersion","value":"2.7.X"},{"parameter":"toVersion","value":"3.0.0"}],"variants":[{"language":"xml","before":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>explicit-deps-app</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n            <version>2.7.3</version>\n        </dependency>\n        <dependency>\n            <groupId>io.dropwizard.metrics</groupId>\n            <artifactId>metrics-annotation</artifactId>\n            <version>4.2.8</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <version>2.7.3</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>\n","after":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>explicit-deps-app</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n            <version>3.0.0</version>\n        </dependency>\n        <dependency>\n            <groupId>io.dropwizard.metrics</groupId>\n            <artifactId>metrics-annotation</artifactId>\n            <version>4.2.13</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <version>3.0.0</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -10,1 +10,1 @@\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n-           <version>2.7.3</version>\n+           <version>3.0.0</version>\n        </dependency>\n@@ -15,1 +15,1 @@\n            <groupId>io.dropwizard.metrics</groupId>\n            <artifactId>metrics-annotation</artifactId>\n-           <version>4.2.8</version>\n+           <version>4.2.13</version>\n        </dependency>\n@@ -20,1 +20,1 @@\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n-           <version>2.7.3</version>\n+           <version>3.0.0</version>\n            <scope>test</scope>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies","displayName":"Upgrade Spring dependencies","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":true,"cliOptions":" --recipe-option \"fromVersion= 2.7.+\" --recipe-option \"toVersion=3.0.0-M3\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

