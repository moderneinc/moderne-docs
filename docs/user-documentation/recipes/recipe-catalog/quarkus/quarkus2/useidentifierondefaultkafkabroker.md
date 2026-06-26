---
title: "Use `@Identifier(&quot;default-kafka-broker&quot;)`"
sidebar_label: "Use `@Identifier(&quot;default-kafka-broker&quot;)`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/quarkus2/useidentifierondefaultkafkabroker" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use `@Identifier(\"default-kafka-broker\")`"}
  description={"Use `@io.smallrye.common.annotation.Identifier` on default kafka broker configuration."}
  fqName={"org.openrewrite.quarkus.quarkus2.UseIdentifierOnDefaultKafkaBroker"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/java/org/openrewrite/quarkus/quarkus2/UseIdentifierOnDefaultKafkaBroker.java"}
/>

<RecipeHeader
  displayName={"Use `@Identifier(\"default-kafka-broker\")`"}
  description={"Use `@io.smallrye.common.annotation.Identifier` on default kafka broker configuration."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.quarkus.quarkus2.UseIdentifierOnDefaultKafkaBroker"}
  artifact={"org.openrewrite.recipe:rewrite-quarkus"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.quarkus.quarkus2.UseIdentifierOnDefaultKafkaBroker"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/quarkus2/useidentifierondefaultkafkabroker.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"package org.openrewrite.example;\n\nimport javax.inject.Inject;\nimport javax.inject.Named;\nimport java.util.Map;\n\nclass KafkaProviders {\n    @Inject\n    @Named(\"default-kafka-broker\")\n    Map<String, Object> config;\n}\n","after":"package org.openrewrite.example;\n\nimport io.smallrye.common.annotation.Identifier;\n\nimport javax.inject.Inject;\nimport java.util.Map;\n\nclass KafkaProviders {\n    @Inject\n    @Identifier(\"default-kafka-broker\")\n    Map<String, Object> config;\n}\n","diff":"@@ -3,0 +3,2 @@\npackage org.openrewrite.example;\n\n+import io.smallrye.common.annotation.Identifier;\n+\nimport javax.inject.Inject;\n@@ -4,1 +6,0 @@\n\nimport javax.inject.Inject;\n-import javax.inject.Named;\nimport java.util.Map;\n@@ -9,1 +10,1 @@\nclass KafkaProviders {\n    @Inject\n-   @Named(\"default-kafka-broker\")\n+   @Identifier(\"default-kafka-broker\")\n    Map<String, Object> config;\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.quarkus.quarkus2.UseIdentifierOnDefaultKafkaBroker","displayName":"Use `@Identifier(\"default-kafka-broker\")`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-quarkus","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

