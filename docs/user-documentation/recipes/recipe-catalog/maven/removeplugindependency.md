---
title: "Remove Maven plugin dependency"
sidebar_label: "Remove Maven plugin dependency"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/removeplugindependency" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove Maven plugin dependency"}
  description={"Removes a dependency from the <dependencies> section of a plugin in the pom.xml."}
  fqName={"org.openrewrite.maven.RemovePluginDependency"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemovePluginDependency.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.RemovePluginDependency"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.RemovePluginDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/removeplugindependency.md"}
>

<RecipeHeader.Title>Remove Maven plugin dependency</RecipeHeader.Title>

<RecipeHeader.Description>Removes a dependency from the &lt;dependencies> section of a plugin in the pom.xml.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"pluginGroupId","required":true,"description":"Group ID of the plugin from which the dependency will be removed. Supports glob.A Group ID is the first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'.","example":"org.openrewrite.maven"},{"type":"String","name":"pluginArtifactId","required":true,"description":"Artifact ID of the plugin from which the dependency will be removed. Supports glob.The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'.","example":"rewrite-maven-plugin"},{"type":"String","name":"groupId","required":true,"description":"The first part of a plugin dependency coordinate. Supports glob.","example":"com.google.guava"},{"type":"String","name":"artifactId","required":true,"description":"The second part of a plugin dependency coordinate. Supports glob.","example":"guava"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"pluginGroupId","value":"org.apache.maven.plugins"},{"parameter":"pluginArtifactId","value":"maven-surefire-plugin"},{"parameter":"groupId","value":"org.apache.maven.surefire"},{"parameter":"artifactId","value":"surefire-junit*"}],"variants":[{"language":"xml","before":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>org.sample</groupId>\n  <artifactId>sample</artifactId>\n  <version>1.0.0</version>\n\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-surefire-plugin</artifactId>\n        <version>2.22.0</version>\n        <dependencies>\n          <dependency>\n            <groupId>org.apache.maven.surefire</groupId>\n            <artifactId>surefire-junit47</artifactId>\n            <version>2.22.0</version>\n          </dependency>\n          <dependency>\n            <groupId>org.antlr</groupId>\n            <artifactId>antlr4</artifactId>\n            <version>4.9.3</version>\n          </dependency>\n        </dependencies>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n","after":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>org.sample</groupId>\n  <artifactId>sample</artifactId>\n  <version>1.0.0</version>\n\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-surefire-plugin</artifactId>\n        <version>2.22.0</version>\n        <dependencies>\n          <dependency>\n            <groupId>org.antlr</groupId>\n            <artifactId>antlr4</artifactId>\n            <version>4.9.3</version>\n          </dependency>\n        </dependencies>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -15,5 +15,0 @@\n        <dependencies>\n          <dependency>\n-           <groupId>org.apache.maven.surefire</groupId>\n-           <artifactId>surefire-junit47</artifactId>\n-           <version>2.22.0</version>\n-         </dependency>\n-         <dependency>\n            <groupId>org.antlr</groupId>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.RemovePluginDependency","displayName":"Remove Maven plugin dependency","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":true,"cliOptions":" --recipe-option \"pluginGroupId=org.openrewrite.maven\" --recipe-option \"pluginArtifactId=rewrite-maven-plugin\" --recipe-option \"groupId=com.google.guava\" --recipe-option \"artifactId=guava\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

