---
title: "Manage dependencies"
sidebar_label: "Manage dependencies"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/managedependencies" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Manage dependencies"}
  description={"Make existing dependencies managed by moving their version to be specified in the dependencyManagement section of the POM."}
  fqName={"org.openrewrite.maven.ManageDependencies"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ManageDependencies.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.ManageDependencies"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.ManageDependencies"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/managedependencies.md"}
>

<RecipeHeader.Title>Manage dependencies</RecipeHeader.Title>

<RecipeHeader.Description>Make existing dependencies managed by moving their version to be specified in the dependencyManagement section of the POM.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"groupPattern","required":true,"description":"Group glob expression pattern used to match dependencies that should be managed.Group is the first part of a dependency coordinate `com.google.guava:guava:VERSION`.","example":"com.google.*"},{"type":"String","name":"artifactPattern","required":false,"description":"Artifact glob expression pattern used to match dependencies that should be managed.Artifact is the second part of a dependency coordinate `com.google.guava:guava:VERSION`.","example":"guava*"},{"type":"Boolean","name":"addToRootPom","required":false,"description":"Add to the root POM where root is the eldest parent of the pom within the source set."},{"type":"Boolean","name":"skipModelUpdate","required":false,"description":"Optionally skip updating the dependency model after managing dependencies. Updating the model does not affect the source code of the POM,but will cause the resolved dependency model to reflect the changes made to the POM. If this recipe is ran standalone, it is not necessary to update the model."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupPattern","value":"org.junit.jupiter"},{"parameter":"artifactPattern","value":"*"},{"parameter":"addToRootPom","value":"false"},{"parameter":"skipModelUpdate","value":"false"}],"variants":[{"language":"xml","before":"<project>\n    <groupId>com.mycompany.app</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1</version>\n    <dependencies>\n        <dependency>\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter-api</artifactId>\n            <version>5.6.2</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>\n","after":"<project>\n    <groupId>com.mycompany.app</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.junit.jupiter</groupId>\n                <artifactId>junit-jupiter-api</artifactId>\n                <version>5.6.2</version>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter-api</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -5,0 +5,9 @@\n    <artifactId>my-app</artifactId>\n    <version>1</version>\n+   <dependencyManagement>\n+       <dependencies>\n+           <dependency>\n+               <groupId>org.junit.jupiter</groupId>\n+               <artifactId>junit-jupiter-api</artifactId>\n+               <version>5.6.2</version>\n+           </dependency>\n+       </dependencies>\n+   </dependencyManagement>\n    <dependencies>\n@@ -9,1 +18,0 @@\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter-api</artifactId>\n-           <version>5.6.2</version>\n            <scope>test</scope>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.ManageDependencies","displayName":"Manage dependencies","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupPattern=com.google.*\" --recipe-option \"artifactPattern=guava*\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

