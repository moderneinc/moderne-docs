---
title: "Add Gradle or Maven dependency"
sidebar_label: "Add Gradle or Maven dependency"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/dependencies/adddependency" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add Gradle or Maven dependency"}
  description={"For a Gradle project, add a gradle dependency to a `build.gradle` file in the correct configuration based on where it is used. Or For a maven project, Add a Maven dependency to a `pom.xml` file in the correct scope based on where it is used."}
  fqName={"org.openrewrite.java.dependencies.AddDependency"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/AddDependency.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.dependencies.AddDependency"}
  artifact={"org.openrewrite.recipe:rewrite-java-dependencies"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.dependencies.AddDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dependencies/adddependency.md"}
>

<RecipeHeader.Title>Add Gradle or Maven dependency</RecipeHeader.Title>

<RecipeHeader.Description>For a Gradle project, add a gradle dependency to a `build.gradle` file in the correct configuration based on where it is used. Or For a maven project, Add a Maven dependency to a `pom.xml` file in the correct scope based on where it is used.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"groupId","required":true,"description":"The first part of a dependency coordinate `com.google.guava:guava:VERSION`.","example":"com.google.guava"},{"type":"String","name":"artifactId","required":true,"description":"The second part of a dependency coordinate `com.google.guava:guava:VERSION`","example":"guava"},{"type":"String","name":"version","required":false,"description":"An exact version number or node-style semver selector used to select the version number.","example":"29.X"},{"type":"String","name":"versionPattern","required":false,"description":"Allows version selection to be extended beyond the original Node Semver semantics. So for example, Setting 'version' to \"25-29\" can be paired with a metadata pattern of \"-jre\" to select Guava 29.0-jre","example":"-jre"},{"type":"String","name":"onlyIfUsing","required":false,"description":"Used to determine if the dependency will be added and in which scope it should be placed.","example":"org.junit.jupiter.api.*"},{"type":"String","name":"classifier","required":false,"description":"A classifier to add. Commonly used to select variants of a library.","example":"test"},{"type":"String","name":"familyPattern","required":false,"description":"A pattern, applied to groupIds, used to determine which other dependencies should have aligned version numbers. Accepts '*' as a wildcard character.","example":"com.fasterxml.jackson*"},{"type":"String","name":"extension","required":false,"description":"For Gradle only, The extension of the dependency to add. If omitted Gradle defaults to assuming the type is \"jar\".","example":"jar"},{"type":"String","name":"configuration","required":false,"description":"The Gradle dependency configuration name within which to place the dependency. When omitted the configuration will be determined by the Maven scope parameter. If that parameter is also omitted, configuration will be determined based on where types matching `onlyIfUsing` appear in source code.","example":"implementation"},{"type":"String","name":"scope","required":false,"description":"The Maven scope within which to place the dependency. When omitted scope will be determined based on where types matching `onlyIfUsing` appear in source code.","example":"runtime"},{"type":"Boolean","name":"releasesOnly","required":false,"description":"For Maven only, Whether to exclude snapshots from consideration when using a semver selector"},{"type":"String","name":"type","required":false,"description":"For Maven only, The type of dependency to add. If omitted Maven defaults to assuming the type is \"jar\".","example":"jar"},{"type":"Boolean","name":"optional","required":false,"description":"Set the value of the `<optional>` tag. No `<optional>` tag will be added when this is `null`."},{"type":"Boolean","name":"acceptTransitive","required":false,"description":"Default false. If enabled, the dependency will not be added if it is already on the classpath as a transitive dependency.","example":"true"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.java.dependencies.AddDependency","displayName":"Add Gradle or Maven dependency","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-dependencies","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupId=com.google.guava\" --recipe-option \"artifactId=guava\" --recipe-option \"version=29.X\" --recipe-option \"versionPattern='-jre'\" --recipe-option \"onlyIfUsing=org.junit.jupiter.api.*\" --recipe-option \"classifier=test\" --recipe-option \"familyPattern=com.fasterxml.jackson*\" --recipe-option \"extension=jar\" --recipe-option \"configuration=implementation\" --recipe-option \"scope=runtime\" --recipe-option \"type=jar\" --recipe-option \"acceptTransitive=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

