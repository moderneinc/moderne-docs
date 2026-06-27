---
title: "Rename Maven property key"
sidebar_label: "Rename Maven property key"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/renamepropertykey" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rename Maven property key"}
  description={"Rename the specified Maven project property key leaving the value unchanged."}
  fqName={"org.openrewrite.maven.RenamePropertyKey"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RenamePropertyKey.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.RenamePropertyKey"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.RenamePropertyKey"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/renamepropertykey.md"}
>

<RecipeHeader.Title>Rename Maven property key</RecipeHeader.Title>

<RecipeHeader.Description>Rename the specified Maven project property key leaving the value unchanged.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"oldKey","required":true,"description":"The old name of the property key to be replaced.","example":"junit.version"},{"type":"String","name":"newKey","required":true,"description":"The new property name to use.","example":"version.org.junit"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"oldKey","value":"guava.version"},{"parameter":"newKey","value":"version.com.google.guava"}],"variants":[{"language":"xml","before":"<project>\n  <modelVersion>4.0.0</modelVersion>\n\n  <properties>\n    <guava.version>29.0-jre</guava.version>\n  </properties>\n\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n\n  <dependencies>\n    <dependency>\n      <groupId>com.google.guava</groupId>\n      <artifactId>guava</artifactId>\n      <version>${guava.version}</version>\n    </dependency>\n  </dependencies>\n</project>\n","after":"<project>\n  <modelVersion>4.0.0</modelVersion>\n\n  <properties>\n    <version.com.google.guava>29.0-jre</version.com.google.guava>\n  </properties>\n\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n\n  <dependencies>\n    <dependency>\n      <groupId>com.google.guava</groupId>\n      <artifactId>guava</artifactId>\n      <version>${version.com.google.guava}</version>\n    </dependency>\n  </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -5,1 +5,1 @@\n\n  <properties>\n-   <guava.version>29.0-jre</guava.version>\n+   <version.com.google.guava>29.0-jre</version.com.google.guava>\n  </properties>\n@@ -16,1 +16,1 @@\n      <groupId>com.google.guava</groupId>\n      <artifactId>guava</artifactId>\n-     <version>${guava.version}</version>\n+     <version>${version.com.google.guava}</version>\n    </dependency>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.RenamePropertyKey","displayName":"Rename Maven property key","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldKey=junit.version\" --recipe-option \"newKey=version.org.junit\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

