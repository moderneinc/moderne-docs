---
title: "Quarkus 1.13 migration from Quarkus 1.11"
sidebar_label: "Quarkus 1.13 migration from Quarkus 1.11"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/quarkus1to1_13migration" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Quarkus 1.13 migration from Quarkus 1.11"}
  description={"Migrates Quarkus 1.11 to 1.13."}
  fqName={"org.openrewrite.quarkus.Quarkus1to1_13Migration"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/resources/META-INF/rewrite/quarkus.yml"}
/>

<RecipeHeader
  displayName={"Quarkus 1.13 migration from Quarkus 1.11"}
  description={"Migrates Quarkus 1.11 to 1.13."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.quarkus.Quarkus1to1_13Migration"}
  artifact={"org.openrewrite.recipe:rewrite-quarkus"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.quarkus.Quarkus1to1_13Migration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/quarkus1to1_13migration.md"}
/>

<RecipeList recipes={[{"name":"Use `@ConfigMapping`","href":"quarkus/configpropertiestoconfigmapping"},{"name":"Use Mutiny `multi.toHotStream()`","href":"quarkus/multitransformhotstreamtomultihotstream"},{"name":"Use `native` profile in `quarkus-maven-plugin`","href":"quarkus/migratequarkusmavenpluginnativeimagegoal"},{"name":"Configure `quarkus-maven-plugin` with reasonable defaults","href":"quarkus/configurequarkusmavenpluginwithreasonabledefaults"},{"name":"Change property key","href":"properties/changepropertykey"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"properties","before":"quarkus.dev.instrumentation=true\n","after":"quarkus.live-reload.instrumentation=true\n","diff":"@@ -1,1 +1,1 @@\n-quarkus.dev.instrumentation=true\n+quarkus.live-reload.instrumentation=true\n\n","newFile":false}]},{"variants":[{"language":"java","before":"import io.smallrye.mutiny.Multi;\nimport io.smallrye.mutiny.Uni;\n\nimport java.util.List;\nimport java.time.Duration;\n\nclass Test {\n    public static Multi<String> greetings(int count, String name) {\n        return Multi.createFrom().ticks().every(Duration.ofMillis(1))\n                .onItem()\n                .transform(n -> \"hello \" + name + \" -\" + n)\n                .transform()\n                .byTakingFirstItems(count);\n    }\n\n    public static Uni<List<String>> collectItems(int count, String name) {\n        Multi<String> multi = greetings(count, name);\n        Uni<List<String>> uni = multi\n                .collectItems()\n                .asList();\n        return uni;\n    }\n}\n","after":"import io.smallrye.mutiny.Multi;\nimport io.smallrye.mutiny.Uni;\n\nimport java.util.List;\nimport java.time.Duration;\n\nclass Test {\n    public static Multi<String> greetings(int count, String name) {\n        return Multi.createFrom().ticks().every(Duration.ofMillis(1))\n                .onItem()\n                .transform(n -> \"hello \" + name + \" -\" + n)\n                .select()\n                .first(count);\n    }\n\n    public static Uni<List<String>> collectItems(int count, String name) {\n        Multi<String> multi = greetings(count, name);\n        Uni<List<String>> uni = multi\n                .collect()\n                .asList();\n        return uni;\n    }\n}\n","diff":"@@ -12,2 +12,2 @@\n                .onItem()\n                .transform(n -> \"hello \" + name + \" -\" + n)\n-               .transform()\n-               .byTakingFirstItems(count);\n+               .select()\n+               .first(count);\n    }\n@@ -19,1 +19,1 @@\n        Multi<String> multi = greetings(count, name);\n        Uni<List<String>> uni = multi\n-               .collectItems()\n+               .collect()\n                .asList();\n","newFile":false}]},{"variants":[{"language":"properties","before":"quarkus.dev.instrumentation=true\n","after":"quarkus.live-reload.instrumentation=true\n","diff":"@@ -1,1 +1,1 @@\n-quarkus.dev.instrumentation=true\n+quarkus.live-reload.instrumentation=true\n\n","newFile":false}]},{"variants":[{"language":"java","before":"import io.smallrye.mutiny.Multi;\nimport io.smallrye.mutiny.Uni;\n\nimport java.util.List;\nimport java.time.Duration;\n\nclass Test {\n    public static Multi<String> greetings(int count, String name) {\n        return Multi.createFrom().ticks().every(Duration.ofMillis(1))\n                .onItem()\n                .transform(n -> \"hello \" + name + \" -\" + n)\n                .transform()\n                .byTakingFirstItems(count);\n    }\n\n    public static Uni<List<String>> collectItems(int count, String name) {\n        Multi<String> multi = greetings(count, name);\n        Uni<List<String>> uni = multi\n                .collectItems()\n                .asList();\n        return uni;\n    }\n}\n","after":"import io.smallrye.mutiny.Multi;\nimport io.smallrye.mutiny.Uni;\n\nimport java.util.List;\nimport java.time.Duration;\n\nclass Test {\n    public static Multi<String> greetings(int count, String name) {\n        return Multi.createFrom().ticks().every(Duration.ofMillis(1))\n                .onItem()\n                .transform(n -> \"hello \" + name + \" -\" + n)\n                .select()\n                .first(count);\n    }\n\n    public static Uni<List<String>> collectItems(int count, String name) {\n        Multi<String> multi = greetings(count, name);\n        Uni<List<String>> uni = multi\n                .collect()\n                .asList();\n        return uni;\n    }\n}\n","diff":"@@ -12,2 +12,2 @@\n                .onItem()\n                .transform(n -> \"hello \" + name + \" -\" + n)\n-               .transform()\n-               .byTakingFirstItems(count);\n+               .select()\n+               .first(count);\n    }\n@@ -19,1 +19,1 @@\n        Multi<String> multi = greetings(count, name);\n        Uni<List<String>> uni = multi\n-               .collectItems()\n+               .collect()\n                .asList();\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.quarkus.Quarkus1to1_13Migration","displayName":"Quarkus 1.13 migration from Quarkus 1.11","groupId":"org.openrewrite.recipe","artifactId":"rewrite-quarkus","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

