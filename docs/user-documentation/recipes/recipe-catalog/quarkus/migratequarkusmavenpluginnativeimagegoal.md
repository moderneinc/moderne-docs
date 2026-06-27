---
title: "Use `native` profile in `quarkus-maven-plugin`"
sidebar_label: "Use `native` profile in `quarkus-maven-plugin`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/migratequarkusmavenpluginnativeimagegoal" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use `native` profile in `quarkus-maven-plugin`"}
  description={"Migrates the `quarkus-maven-plugin` deprecated `native-image` goal. If the `native-image` goal needs to be removed, this adds `<quarkus.package.type>native</quarkus.package.type>` to the `native` profile `properties` section, given the `native` profile exists in the `pom.xml`."}
  fqName={"org.openrewrite.quarkus.MigrateQuarkusMavenPluginNativeImageGoal"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/java/org/openrewrite/quarkus/MigrateQuarkusMavenPluginNativeImageGoal.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.quarkus.MigrateQuarkusMavenPluginNativeImageGoal"}
  artifact={"org.openrewrite.recipe:rewrite-quarkus"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.quarkus.MigrateQuarkusMavenPluginNativeImageGoal"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/migratequarkusmavenpluginnativeimagegoal.md"}
>

<RecipeHeader.Title>Use `native` profile in `quarkus-maven-plugin`</RecipeHeader.Title>

<RecipeHeader.Description>Migrates the `quarkus-maven-plugin` deprecated `native-image` goal. If the `native-image` goal needs to be removed, this adds `<quarkus.package.type>native</quarkus.package.type>` to the `native` profile `properties` section, given the `native` profile exists in the `pom.xml`.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>org.openrewrite.example</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n  <properties>\n    <quarkus-plugin.version>1.13.5.Final</quarkus-plugin.version>\n  </properties>\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>io.quarkus</groupId>\n        <artifactId>quarkus-maven-plugin</artifactId>\n        <version>${\"$\"}{quarkus-plugin.version}</version>\n        <extensions>true</extensions>\n        <executions>\n          <execution>\n            <goals>\n              <goal>build</goal>\n              <goal>native-image</goal>\n            </goals>\n          </execution>\n        </executions>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n","after":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>org.openrewrite.example</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n  <properties>\n    <quarkus-plugin.version>1.13.5.Final</quarkus-plugin.version>\n  </properties>\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>io.quarkus</groupId>\n        <artifactId>quarkus-maven-plugin</artifactId>\n        <version>${\"$\"}{quarkus-plugin.version}</version>\n        <extensions>true</extensions>\n        <executions>\n          <execution>\n            <goals>\n              <goal>build</goal>\n            </goals>\n          </execution>\n        </executions>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -20,1 +20,0 @@\n            <goals>\n              <goal>build</goal>\n-             <goal>native-image</goal>\n            </goals>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.quarkus.MigrateQuarkusMavenPluginNativeImageGoal","displayName":"Use `native` profile in `quarkus-maven-plugin`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-quarkus","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

