---
title: "Does not include dependency for Gradle and Maven"
sidebar_label: "Does not include dependency for Gradle and Maven"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/dependencies/search/doesnotincludedependency" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Does not include dependency for Gradle and Maven"}
  description={"A precondition which returns false if visiting a Gradle file / Maven pom which includes the specified dependency in the classpath of some Gradle configuration / Maven scope. For compatibility with multimodule projects, this should most often be applied as a precondition."}
  fqName={"org.openrewrite.java.dependencies.search.DoesNotIncludeDependency"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/search/DoesNotIncludeDependency.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.dependencies.search.DoesNotIncludeDependency"}
  artifact={"org.openrewrite.recipe:rewrite-java-dependencies"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.dependencies.search.DoesNotIncludeDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dependencies/search/doesnotincludedependency.md"}
>

<RecipeHeader.Title>Does not include dependency for Gradle and Maven</RecipeHeader.Title>

<RecipeHeader.Description>A precondition which returns false if visiting a Gradle file / Maven pom which includes the specified dependency in the classpath of some Gradle configuration / Maven scope. For compatibility with multimodule projects, this should most often be applied as a precondition.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"groupId","required":true,"description":"The first part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob.","example":"com.google.guava"},{"type":"String","name":"artifactId","required":true,"description":"The second part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob.","example":"guava"},{"type":"String","name":"version","required":false,"description":"Match only dependencies with the specified resolved version. Node-style [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) may be used. All versions are searched by default.","example":"1.x"},{"type":"Boolean","name":"onlyDirect","required":false,"description":"Default false. If enabled, transitive dependencies will not be considered.","example":"true"},{"type":"String","name":"scope","required":false,"description":"Default any. If specified, only the requested scope's classpaths will be checked.","example":"compile"},{"type":"String","name":"configuration","required":false,"description":"Match dependencies with the specified configuration. If not specified, all configurations will be searched.","example":"compileClasspath"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupId","value":"org.springframework"},{"parameter":"artifactId","value":"spring-beans"},{"parameter":"version","value":"null"},{"parameter":"onlyDirect","value":"false"},{"parameter":"scope","value":"compile"},{"parameter":"configuration","value":"compileClasspath"}],"variants":[{"language":"groovy","before":"plugins {\n  id 'java-library'\n}\nrepositories {\n  mavenCentral()\n}\ndependencies {\n  testImplementation 'org.springframework:spring-beans:6.0.0'\n}\n","after":"/*~~>*/plugins {\n  id 'java-library'\n}\nrepositories {\n  mavenCentral()\n}\ndependencies {\n  testImplementation 'org.springframework:spring-beans:6.0.0'\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -1,1 +1,1 @@\n-plugins {\n+/*~~>*/plugins {\n  id 'java-library'\n","newFile":false},{"language":"xml","before":"<project>\n  <groupId>com.example</groupId>\n  <artifactId>foo</artifactId>\n  <version>1.0.0</version>\n  <dependencies>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-beans</artifactId>\n      <version>6.0.0</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n</project>\n","after":"<!--~~>--><project>\n  <groupId>com.example</groupId>\n  <artifactId>foo</artifactId>\n  <version>1.0.0</version>\n  <dependencies>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-beans</artifactId>\n      <version>6.0.0</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -1,1 +1,1 @@\n-<project>\n+<!--~~>--><project>\n  <groupId>com.example</groupId>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.dependencies.search.DoesNotIncludeDependency","displayName":"Does not include dependency for Gradle and Maven","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-dependencies","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupId=com.google.guava\" --recipe-option \"artifactId=guava\" --recipe-option \"version=1.x\" --recipe-option \"onlyDirect=true\" --recipe-option \"scope=compile\" --recipe-option \"configuration=compileClasspath\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

