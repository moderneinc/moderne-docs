---
title: "Migrate Spring Cloud AWS (awspring) to 4.0"
sidebar_label: "Migrate Spring Cloud AWS (awspring) to 4.0"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Spring Cloud AWS (awspring) to 4.0"}
  description={"Upgrade `io.awspring.cloud` dependencies to 4.0.x and migrate code for the breaking API changes in Spring Cloud AWS 4.0. Spring Cloud AWS 4.0 aligns with Spring Boot 4 / Spring Framework 7 and adopts Jackson 3 by default; this recipe moves usages off the deprecated Jackson 2 variants to their Jackson 3 replacements and migrates the SQS default-converter `setObjectMapper` configurer. Run after the Jackson 2 to 3 migration so user mappers are already `tools.jackson` `JsonMapper`s."}
  fqName={"io.moderne.java.spring.boot4.UpgradeAwspringCloud_4_0"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate Spring Cloud AWS (awspring) to 4.0"}
  description={"Upgrade `io.awspring.cloud` dependencies to 4.0.x and migrate code for the breaking API changes in Spring Cloud AWS 4.0. Spring Cloud AWS 4.0 aligns with Spring Boot 4 / Spring Framework 7 and adopts Jackson 3 by default; this recipe moves usages off the deprecated Jackson 2 variants to their Jackson 3 replacements and migrates the SQS default-converter `setObjectMapper` configurer. Run after the Jackson 2 to 3 migration so user mappers are already `tools.jackson` `JsonMapper`s."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["spring","boot","aws"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.boot4.UpgradeAwspringCloud_4_0"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.boot4.UpgradeAwspringCloud_4_0"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot4/upgradeawspringcloud_4_0.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Migrate awspring SQS default converter `setObjectMapper` to constructor injection","href":"java/spring/boot4/migrateawspringsqsmessageconverter"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import io.awspring.cloud.sns.core.Jackson2JsonStringEncoder;\n\nclass Config {\n    Jackson2JsonStringEncoder encoder() {\n        return new Jackson2JsonStringEncoder();\n    }\n}\n","after":"import io.awspring.cloud.sns.core.JacksonJsonStringEncoder;\n\nclass Config {\n    JacksonJsonStringEncoder encoder() {\n        return new JacksonJsonStringEncoder();\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import io.awspring.cloud.sns.core.Jackson2JsonStringEncoder;\n+import io.awspring.cloud.sns.core.JacksonJsonStringEncoder;\n\n@@ -4,2 +4,2 @@\n\nclass Config {\n-   Jackson2JsonStringEncoder encoder() {\n-       return new Jackson2JsonStringEncoder();\n+   JacksonJsonStringEncoder encoder() {\n+       return new JacksonJsonStringEncoder();\n    }\n","newFile":false}]},{"variants":[{"language":"java","before":"import io.awspring.cloud.sns.core.Jackson2JsonStringEncoder;\n\nclass Config {\n    Jackson2JsonStringEncoder encoder() {\n        return new Jackson2JsonStringEncoder();\n    }\n}\n","after":"import io.awspring.cloud.sns.core.JacksonJsonStringEncoder;\n\nclass Config {\n    JacksonJsonStringEncoder encoder() {\n        return new JacksonJsonStringEncoder();\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import io.awspring.cloud.sns.core.Jackson2JsonStringEncoder;\n+import io.awspring.cloud.sns.core.JacksonJsonStringEncoder;\n\n@@ -4,2 +4,2 @@\n\nclass Config {\n-   Jackson2JsonStringEncoder encoder() {\n-       return new Jackson2JsonStringEncoder();\n+   JacksonJsonStringEncoder encoder() {\n+       return new JacksonJsonStringEncoder();\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.boot4.UpgradeAwspringCloud_4_0","displayName":"Migrate Spring Cloud AWS (awspring) to 4.0","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

