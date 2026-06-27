---
title: "Remove a Gradle or Maven dependency"
sidebar_label: "Remove a Gradle or Maven dependency"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/dependencies/removedependency" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove a Gradle or Maven dependency"}
  description={"For Gradle project, removes a single dependency from the dependencies section of the `build.gradle`.\nFor Maven project, removes a single dependency from the `<dependencies>` section of the pom.xml."}
  fqName={"org.openrewrite.java.dependencies.RemoveDependency"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/RemoveDependency.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.dependencies.RemoveDependency"}
  artifact={"org.openrewrite.recipe:rewrite-java-dependencies"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.dependencies.RemoveDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dependencies/removedependency.md"}
>

<RecipeHeader.Title>Remove a Gradle or Maven dependency</RecipeHeader.Title>

<RecipeHeader.Description>For Gradle project, removes a single dependency from the dependencies section of the `build.gradle`. For Maven project, removes a single dependency from the `<dependencies>` section of the pom.xml.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"groupId","required":true,"description":"The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression.","example":"com.fasterxml.jackson*"},{"type":"String","name":"artifactId","required":true,"description":"The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression.","example":"jackson-module*"},{"type":"String","name":"unlessUsing","required":false,"description":"Do not remove if type is in use. Supports glob expressions.","example":"org.aspectj.lang.*"},{"type":"String","name":"configuration","required":false,"description":"The dependency configuration to remove from.","example":"api"},{"type":"String","name":"scope","required":false,"description":"Only remove dependencies if they are in this scope. If 'runtime', this willalso remove dependencies in the 'compile' scope because 'compile' dependencies are part of the runtime dependency set","example":"compile"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupId","value":"org.springframework.boot"},{"parameter":"artifactId","value":"spring-boot*"},{"parameter":"unlessUsing","value":"null"},{"parameter":"configuration","value":"null"},{"parameter":"scope","value":"null"}],"variants":[{"language":"groovy","before":"plugins {\n    id 'java-library'\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation(\"org.springframework.boot:spring-boot-starter-web:2.7.0\") {\n        exclude group: \"junit\"\n    }\n    testImplementation \"org.junit.vintage:junit-vintage-engine:5.6.2\"\n}\n","after":"plugins {\n    id 'java-library'\n}\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    testImplementation \"org.junit.vintage:junit-vintage-engine:5.6.2\"\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -10,3 +10,0 @@\n\ndependencies {\n-   implementation(\"org.springframework.boot:spring-boot-starter-web:2.7.0\") {\n-       exclude group: \"junit\"\n-   }\n    testImplementation \"org.junit.vintage:junit-vintage-engine:5.6.2\"\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.dependencies.RemoveDependency","displayName":"Remove a Gradle or Maven dependency","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-dependencies","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupId=com.fasterxml.jackson*\" --recipe-option \"artifactId=jackson-module*\" --recipe-option \"unlessUsing=org.aspectj.lang.*\" --recipe-option \"configuration=api\" --recipe-option \"scope=compile\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

