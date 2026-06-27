---
title: "Find relocated dependencies"
sidebar_label: "Find relocated dependencies"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/dependencies/relocateddependencycheck" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find relocated dependencies"}
  description={"Find Maven and Gradle dependencies and Maven plugins that have relocated to a new `groupId` or `artifactId`. Relocation information comes from the [oga-maven-plugin](https://github.com/jonathanlermitage/oga-maven-plugin/) maintained by Jonathan Lermitage, Filipe Roque and others.\n\nThis recipe makes no changes to any source file by default. Add `changeDependencies=true` to change dependencies, but note that you might need to run additional recipes to update imports and adopt other breaking changes."}
  fqName={"org.openrewrite.java.dependencies.RelocatedDependencyCheck"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/RelocatedDependencyCheck.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.dependencies.RelocatedDependencyCheck"}
  artifact={"org.openrewrite.recipe:rewrite-java-dependencies"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.dependencies.RelocatedDependencyCheck"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dependencies/relocateddependencycheck.md"}
>

<RecipeHeader.Title>Find relocated dependencies</RecipeHeader.Title>

<RecipeHeader.Description>Find Maven and Gradle dependencies and Maven plugins that have relocated to a new `groupId` or `artifactId`. Relocation information comes from the [oga-maven-plugin](https://github.com/jonathanlermitage/oga-maven-plugin/) maintained by Jonathan Lermitage, Filipe Roque and others.  This recipe makes no changes to any source file by default. Add `changeDependencies=true` to change dependencies, but note that you might need to run additional recipes to update imports and adopt other breaking changes.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"changeDependencies","required":false,"description":"Whether to change dependencies to their relocated groupId and artifactId."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"changeDependencies","value":"null"}],"variants":[{"language":"xml","before":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>org.openrewrite.example</groupId>\n  <artifactId>rewrite-example</artifactId>\n  <version>1.0-SNAPSHOT</version>\n  <dependencies>\n    <dependency>\n      <groupId>commons-lang</groupId>\n      <artifactId>commons-lang</artifactId>\n      <version>2.6</version>\n    </dependency>\n    <dependency>\n      <groupId>org.codehaus.groovy</groupId>\n      <artifactId>groovy</artifactId>\n      <version>2.5.6</version>\n    </dependency>\n  </dependencies>\n</project>\n","after":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>org.openrewrite.example</groupId>\n  <artifactId>rewrite-example</artifactId>\n  <version>1.0-SNAPSHOT</version>\n  <dependencies>\n    <!--~~(Relocated to org.apache.commons:commons-lang3)~~>--><dependency>\n      <groupId>commons-lang</groupId>\n      <artifactId>commons-lang</artifactId>\n      <version>2.6</version>\n    </dependency>\n    <!--~~(Relocated to org.apache.groovy)~~>--><dependency>\n      <groupId>org.codehaus.groovy</groupId>\n      <artifactId>groovy</artifactId>\n      <version>2.5.6</version>\n    </dependency>\n  </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -7,1 +7,1 @@\n  <version>1.0-SNAPSHOT</version>\n  <dependencies>\n-   <dependency>\n+   <!--~~(Relocated to org.apache.commons:commons-lang3)~~>--><dependency>\n      <groupId>commons-lang</groupId>\n@@ -12,1 +12,1 @@\n      <version>2.6</version>\n    </dependency>\n-   <dependency>\n+   <!--~~(Relocated to org.apache.groovy)~~>--><dependency>\n      <groupId>org.codehaus.groovy</groupId>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.dependencies.RelocatedDependencyCheck","displayName":"Find relocated dependencies","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-dependencies","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.dependencies.table.RelocatedDependencyReport","displayName":"Relocated dependencies","description":"A list of dependencies in use that have relocated.","columns":[{"name":"Dependency group id","description":"The Group ID of the dependency in use."},{"name":"Dependency artifact id","description":"The Artifact ID of the dependency in use."},{"name":"Relocated dependency group id","description":"The Group ID of the relocated dependency."},{"name":"Relocated ependency artifact id","description":"The Artifact ID of the relocated dependency."},{"name":"Context","description":"Context for the relocation, if any."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

