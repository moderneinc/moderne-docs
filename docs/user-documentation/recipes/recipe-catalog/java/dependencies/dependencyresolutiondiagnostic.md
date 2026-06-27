---
title: "Dependency resolution diagnostic"
sidebar_label: "Dependency resolution diagnostic"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/dependencies/dependencyresolutiondiagnostic" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Dependency resolution diagnostic"}
  description={"Recipes which manipulate dependencies must be able to successfully access the artifact repositories and resolve dependencies from them. This recipe produces two data tables used to understand the state of dependency resolution. \n\nThe Repository accessibility report lists all the artifact repositories known to the project and whether respond to network access. The network access is attempted while the recipe is run and so is representative of current conditions. \n\nThe Gradle dependency configuration errors lists all the dependency configurations that failed to resolve one or more dependencies when the project was parsed. This is representative of conditions at the time the LST was parsed."}
  fqName={"org.openrewrite.java.dependencies.DependencyResolutionDiagnostic"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/DependencyResolutionDiagnostic.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.dependencies.DependencyResolutionDiagnostic"}
  artifact={"org.openrewrite.recipe:rewrite-java-dependencies"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyResolutionDiagnostic"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dependencies/dependencyresolutiondiagnostic.md"}
>

<RecipeHeader.Title>Dependency resolution diagnostic</RecipeHeader.Title>

<RecipeHeader.Description>Recipes which manipulate dependencies must be able to successfully access the artifact repositories and resolve dependencies from them. This recipe produces two data tables used to understand the state of dependency resolution.   The Repository accessibility report lists all the artifact repositories known to the project and whether respond to network access. The network access is attempted while the recipe is run and so is representative of current conditions.   The Gradle dependency configuration errors lists all the dependency configurations that failed to resolve one or more dependencies when the project was parsed. This is representative of conditions at the time the LST was parsed.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"groupId","required":false,"description":"The group ID of a dependency to attempt to download from the repository. Default value is \"com.fasterxml.jackson.core\". If this dependency is not found in the repository the error will be noted in the report. There is no need to specify an alternate value for this parameter unless the repository is known not to contain jackson-core.","example":"com.fasterxml.jackson.core"},{"type":"String","name":"artifactId","required":false,"description":"The artifact ID of a dependency to attempt to download from the repository. Default value is \"jackson-core\". If this dependency is not found in the repository the error will be noted in the report. There is no need to specify an alternate value for this parameter unless the repository is known not to contain jackson-core.","example":"jackson-core"},{"type":"String","name":"version","required":false,"description":"The version of a dependency to attempt to download from the repository. Default value is \"2.16.0\". If this dependency is not found in the repository the error will be noted in the report. There is no need to specify an alternate value for this parameter unless the repository is known not to contain jackson-core.","example":"2.16.0"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupId","value":"null"},{"parameter":"artifactId","value":"null"},{"parameter":"version","value":"null"}],"variants":[{"language":"groovy","before":"plugins {\n    id(\"java\")\n}\n","after":"/*~~(build.gradle is a Gradle build file, but it is missing a GradleProject marker.)~~>*/plugins {\n    id(\"java\")\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -1,1 +1,1 @@\n-plugins {\n+/*~~(build.gradle is a Gradle build file, but it is missing a GradleProject marker.)~~>*/plugins {\n    id(\"java\")\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.dependencies.DependencyResolutionDiagnostic","displayName":"Dependency resolution diagnostic","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-dependencies","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.dependencies.table.RepositoryAccessibilityReport","displayName":"Repository accessibility report","description":"Listing of all dependency repositories and whether they are accessible.","columns":[{"name":"Repository URI","description":"The URI of the repository"},{"name":"Ping exception type","description":"Empty if the repository responded to a ping. Otherwise, the type of exception encountered when attempting to access the repository."},{"name":"Ping error message","description":"Empty if the repository was accessible. Otherwise, the error message encountered when attempting to access the repository."},{"name":"Ping HTTP code","description":"The HTTP response code returned by the repository. May be empty for non-HTTP repositories."},{"name":"Dependency resolution exception type","description":"Empty if ping failed, or if the repository successfully downloaded the specified dependency. Otherwise, the type of exception encountered when attempting to access the repository."},{"name":"Dependency resolution error message","description":"Empty if ping failed, or if the repository successfully downloaded the specified dependency. Otherwise, the error message encountered when attempting to access the repository."}]},{"name":"org.openrewrite.java.dependencies.table.GradleDependencyConfigurationErrors","displayName":"Gradle dependency configuration errors","description":"Records Gradle dependency configurations which failed to resolve during parsing. Partial success/failure is common, a failure in this list does not mean that every dependency failed to resolve.","columns":[{"name":"Project path","description":"The path of the project which contains the dependency configuration."},{"name":"Configuration name","description":"The name of the dependency configuration which failed to resolve."},{"name":"Exception type","description":"The type of exception encountered when attempting to resolve the dependency configuration."},{"name":"Error message","description":"The error message encountered when attempting to resolve the dependency configuration."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

