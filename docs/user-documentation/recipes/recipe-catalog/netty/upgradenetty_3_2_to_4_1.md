---
title: "Migrates from Netty 3.2.x to Netty 4.1.x"
sidebar_label: "Migrates from Netty 3.2.x to Netty 4.1.x"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/netty/upgradenetty_3_2_to_4_1" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrates from Netty 3.2.x to Netty 4.1.x"}
  description={"Migrate applications to the latest Netty 4.1.x release."}
  fqName={"org.openrewrite.netty.UpgradeNetty_3_2_to_4_1"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-netty/blob/main/src/main/resources/META-INF/rewrite/netty-3_2_to_4_1.yml"}
/>

<RecipeHeader
  displayName={"Migrates from Netty 3.2.x to Netty 4.1.x"}
  description={"Migrate applications to the latest Netty 4.1.x release."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["netty"]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.netty.UpgradeNetty_3_2_to_4_1"}
  artifact={"org.openrewrite.recipe:rewrite-netty"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.netty.UpgradeNetty_3_2_to_4_1"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/netty/upgradenetty_3_2_to_4_1.md"}
/>

<RecipeList recipes={[{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change parameter type for a method declaration","href":"java/spring/changemethodparameter"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Remove ChannelStateEvent parameter from handler methods","href":"java/netty/upgrade/_3_2_to_4_1_/removechannelstateeventparameter"},{"name":"Migrate Channel.setReadable(boolean) to Channel.config().setAutoRead(boolean)","href":"java/netty/upgrade/_3_2_to_4_1_/channelsetreadabletoautoread"},{"name":"Replace annotation","href":"java/replaceannotation"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Migrate StringEncoder(String) to StringEncoder(StandardCharsets)","href":"java/netty/upgrade/_3_2_to_4_1_/stringencodertostandardcharsets"},{"name":"Rename package name","href":"java/changepackage"},{"name":"Rename package name","href":"java/changepackage"},{"name":"Change Maven dependency","href":"maven/changedependencygroupidandartifactid"},{"name":"Replace Channels.fireMessageReceived(..) with ctx.fireChannelRead(e)","href":"java/netty/upgrade/_3_2_to_4_1_/replacechannelsfiremessagereceived"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.jboss.netty.channel.ChannelHandlerContext;\nimport org.jboss.netty.channel.ChannelStateEvent;\n\nclass Test {\n    \tpublic void channelOpen(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {}\n}\n","after":"import io.netty.channel.ChannelHandlerContext;\n\nclass Test {\n    \tpublic void channelActive(ChannelHandlerContext ctx) throws Exception {}\n}\n","diff":"@@ -1,2 +1,1 @@\n-import org.jboss.netty.channel.ChannelHandlerContext;\n-import org.jboss.netty.channel.ChannelStateEvent;\n+import io.netty.channel.ChannelHandlerContext;\n\n@@ -5,1 +4,1 @@\n\nclass Test {\n-   \tpublic void channelOpen(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {}\n+   \tpublic void channelActive(ChannelHandlerContext ctx) throws Exception {}\n}\n","newFile":false}]},{"variants":[{"language":"java","before":"import org.jboss.netty.channel.ChannelHandlerContext;\nimport org.jboss.netty.channel.ChannelStateEvent;\n\nclass Test {\n    \tpublic void channelOpen(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {}\n}\n","after":"import io.netty.channel.ChannelHandlerContext;\n\nclass Test {\n    \tpublic void channelActive(ChannelHandlerContext ctx) throws Exception {}\n}\n","diff":"@@ -1,2 +1,1 @@\n-import org.jboss.netty.channel.ChannelHandlerContext;\n-import org.jboss.netty.channel.ChannelStateEvent;\n+import io.netty.channel.ChannelHandlerContext;\n\n@@ -5,1 +4,1 @@\n\nclass Test {\n-   \tpublic void channelOpen(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {}\n+   \tpublic void channelActive(ChannelHandlerContext ctx) throws Exception {}\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.netty.UpgradeNetty_3_2_to_4_1","displayName":"Migrates from Netty 3.2.x to Netty 4.1.x","groupId":"org.openrewrite.recipe","artifactId":"rewrite-netty","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_NETTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

