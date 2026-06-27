---
title: "Migrate to Spring Cloud 2025"
sidebar_label: "Migrate to Spring Cloud 2025"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/cloud2025/upgradespringcloud_2025" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Spring Cloud 2025"}
  description={"Migrate applications to the latest Spring Cloud 2025 (Northfields) release."}
  fqName={"org.openrewrite.java.spring.cloud2025.UpgradeSpringCloud_2025"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-cloud-2025.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["spring","cloud"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.cloud2025.UpgradeSpringCloud_2025"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.cloud2025.UpgradeSpringCloud_2025"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/cloud2025/upgradespringcloud_2025.md"}
>

<RecipeHeader.Title>Migrate to Spring Cloud 2025</RecipeHeader.Title>

<RecipeHeader.Description>Migrate applications to the latest Spring Cloud 2025 (Northfields) release.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade dependencies to Spring Cloud 2025","href":"/user-documentation/recipes/recipe-catalog/java/spring/cloud2025/dependencyupgrades/"},{"name":"Migrate to New Spring Cloud Gateway Modules and Starters","href":"/user-documentation/recipes/recipe-catalog/java/spring/cloud2025/springcloudgatewaydeprecatedmodulesandstarters/"},{"name":"Migrate Spring Cloud Gateway Properties","href":"/user-documentation/recipes/recipe-catalog/java/spring/cloud2025/springcloudgatewayproperties/"},{"name":"Migrate Spring Cloud Gateway Webflux Properties","href":"/user-documentation/recipes/recipe-catalog/java/spring/cloud2025/springcloudgatewaywebfluxproperties/"},{"name":"Migrate Spring Cloud Gateway Proxy Webflux Properties","href":"/user-documentation/recipes/recipe-catalog/java/spring/cloud2025/springcloudgatewayproxywebfluxproperties/"},{"name":"Migrate Spring Cloud Gateway WebMvc Properties","href":"/user-documentation/recipes/recipe-catalog/java/spring/cloud2025/springcloudgatewaywebmvcproperties/"},{"name":"Migrate Spring Cloud Gateway Proxy WebMvc Properties","href":"/user-documentation/recipes/recipe-catalog/java/spring/cloud2025/springcloudgatewayproxywebmvcproperties/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"mavenProject","code":"project"},"variants":[{"language":"properties","before":"spring.cloud.gateway.proxy=foo","after":"spring.cloud.gateway.proxy-exchange.webflux=foo","diff":"--- application.properties\n+++ application.properties\n@@ -1,1 +1,1 @@\n-spring.cloud.gateway.proxy=foo\n+spring.cloud.gateway.proxy-exchange.webflux=foo\n","newFile":false}]},{"unchanged":{"language":"mavenProject","code":"project"},"variants":[{"language":"properties","before":"spring.cloud.gateway.proxy=foo","after":"spring.cloud.gateway.proxy-exchange.webflux=foo","diff":"--- application.properties\n+++ application.properties\n@@ -1,1 +1,1 @@\n-spring.cloud.gateway.proxy=foo\n+spring.cloud.gateway.proxy-exchange.webflux=foo\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.cloud2025.UpgradeSpringCloud_2025","displayName":"Migrate to Spring Cloud 2025","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

