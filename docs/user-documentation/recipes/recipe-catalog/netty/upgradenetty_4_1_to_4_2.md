---
title: "Migrates from Netty 4.1.x to Netty 4.2.x"
sidebar_label: "Migrates from Netty 4.1.x to Netty 4.2.x"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/netty/upgradenetty_4_1_to_4_2" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrates from Netty 4.1.x to Netty 4.2.x"}
  description={"Migrate applications to the latest Netty 4.2.x release."}
  fqName={"org.openrewrite.netty.UpgradeNetty_4_1_to_4_2"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-netty/blob/main/src/main/resources/META-INF/rewrite/netty-4_1_to_4_2.yml"}
/>

<RecipeHeader
  displayName={"Migrates from Netty 4.1.x to Netty 4.2.x"}
  description={"Migrate applications to the latest Netty 4.2.x release."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["netty"]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.netty.UpgradeNetty_4_1_to_4_2"}
  artifact={"org.openrewrite.recipe:rewrite-netty"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.netty.UpgradeNetty_4_1_to_4_2"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/netty/upgradenetty_4_1_to_4_2.md"}
/>

<RecipeList recipes={[{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change type","href":"java/changetype"},{"name":"Rename package name","href":"java/changepackage"},{"name":"Replace all `EventLoopGroup`s with `MultiThreadIoEventLoopGroup`","href":"java/netty/eventloopgrouptomultithreadioeventloopgrouprecipes"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import io.netty.buffer.ByteBuf;\nimport io.netty.incubator.channel.uring.IOUring;\n\nclass Test {\n    boolean isAvailable = IOUring.isAvailable();\n}\n","after":"import io.netty.buffer.ByteBuf;\nimport io.netty.channel.uring.IoUring;\n\nclass Test {\n    boolean isAvailable = IoUring.isAvailable();\n}\n","diff":"@@ -2,1 +2,1 @@\nimport io.netty.buffer.ByteBuf;\n-import io.netty.incubator.channel.uring.IOUring;\n+import io.netty.channel.uring.IoUring;\n\n@@ -5,1 +5,1 @@\n\nclass Test {\n-   boolean isAvailable = IOUring.isAvailable();\n+   boolean isAvailable = IoUring.isAvailable();\n}\n","newFile":false}]},{"variants":[{"language":"java","before":"import io.netty.buffer.ByteBuf;\nimport io.netty.incubator.channel.uring.IOUring;\n\nclass Test {\n    boolean isAvailable = IOUring.isAvailable();\n}\n","after":"import io.netty.buffer.ByteBuf;\nimport io.netty.channel.uring.IoUring;\n\nclass Test {\n    boolean isAvailable = IoUring.isAvailable();\n}\n","diff":"@@ -2,1 +2,1 @@\nimport io.netty.buffer.ByteBuf;\n-import io.netty.incubator.channel.uring.IOUring;\n+import io.netty.channel.uring.IoUring;\n\n@@ -5,1 +5,1 @@\n\nclass Test {\n-   boolean isAvailable = IOUring.isAvailable();\n+   boolean isAvailable = IoUring.isAvailable();\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.netty.UpgradeNetty_4_1_to_4_2","displayName":"Migrates from Netty 4.1.x to Netty 4.2.x","groupId":"org.openrewrite.recipe","artifactId":"rewrite-netty","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_NETTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

