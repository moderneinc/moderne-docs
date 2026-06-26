---
title: "Dependency insight for C#"
sidebar_label: "Dependency insight for C#"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Dependency insight for C#"}
  description={"Finds dependencies in `*.csproj` and `packages.config`."}
  fqName={"org.openrewrite.csharp.dependencies.DependencyInsight"}
  languages={["C#"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Dependency insight for C#"}
  description={"Finds dependencies in `*.csproj` and `packages.config`."}
  type={"Single recipe"}
  languages={["C#"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.csharp.dependencies.DependencyInsight"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.csharp.dependencies.DependencyInsight"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/dependencies/dependencyinsight.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"String","name":"packagePattern","required":false,"description":"Package glob pattern used to match dependencies.","example":"Microsoft*"},{"type":"String","name":"version","required":false,"description":"Match only dependencies with the specified version. Node-style [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) may be used. All versions are searched by default.","example":"1.x"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"packagePattern","value":"null"},{"parameter":"version","value":"null"}],"variants":[{"language":"xml","before":"<Project ToolsVersion=\"4.0\" DefaultTargets=\"FullPublish\" xmlns=\"http://schemas.microsoft.com/developer/msbuild/2003\">\n  <ItemGroup>\n    <PackageReference Include=\"Contoso.Utility.UsefulStuff\" Version=\"3.6.*\" />\n    <PackageReference Include=\"Contoso.Utility.SomeOtherUsefulStuff\" Version=\"3.6.0\">\n      <ExcludeAssets>compile</ExcludeAssets>\n      <PrivateAssets>contentFiles</PrivateAssets>\n    </PackageReference>\n  </ItemGroup>\n</Project>\n","after":"<Project ToolsVersion=\"4.0\" DefaultTargets=\"FullPublish\" xmlns=\"http://schemas.microsoft.com/developer/msbuild/2003\">\n  <ItemGroup>\n    <!--~~(Contoso.Utility.UsefulStuff:3.6.*)~~>--><PackageReference Include=\"Contoso.Utility.UsefulStuff\" Version=\"3.6.*\" />\n    <!--~~(Contoso.Utility.SomeOtherUsefulStuff:3.6.0)~~>--><PackageReference Include=\"Contoso.Utility.SomeOtherUsefulStuff\" Version=\"3.6.0\">\n      <ExcludeAssets>compile</ExcludeAssets>\n      <PrivateAssets>contentFiles</PrivateAssets>\n    </PackageReference>\n  </ItemGroup>\n</Project>\n","diff":"--- MyFirst.csproj\n+++ MyFirst.csproj\n@@ -3,2 +3,2 @@\n<Project ToolsVersion=\"4.0\" DefaultTargets=\"FullPublish\" xmlns=\"http://schemas.microsoft.com/developer/msbuild/2003\">\n  <ItemGroup>\n-   <PackageReference Include=\"Contoso.Utility.UsefulStuff\" Version=\"3.6.*\" />\n-   <PackageReference Include=\"Contoso.Utility.SomeOtherUsefulStuff\" Version=\"3.6.0\">\n+   <!--~~(Contoso.Utility.UsefulStuff:3.6.*)~~>--><PackageReference Include=\"Contoso.Utility.UsefulStuff\" Version=\"3.6.*\" />\n+   <!--~~(Contoso.Utility.SomeOtherUsefulStuff:3.6.0)~~>--><PackageReference Include=\"Contoso.Utility.SomeOtherUsefulStuff\" Version=\"3.6.0\">\n      <ExcludeAssets>compile</ExcludeAssets>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.csharp.dependencies.DependencyInsight","displayName":"Dependency insight for C#","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.DependenciesInUse","displayName":"Dependencies in use","description":"Direct and transitive dependencies in use.","columns":[{"name":"Project name","description":"The name of the project that contains the dependency."},{"name":"Source set","description":"The source set that contains the dependency."},{"name":"Group","description":"The first part of a dependency coordinate `com.google.guava:guava:VERSION`."},{"name":"Artifact","description":"The second part of a dependency coordinate `com.google.guava:guava:VERSION`."},{"name":"Version","description":"The resolved version."},{"name":"Dated snapshot version","description":"The resolved dated snapshot version or `null` if this dependency is not a snapshot."},{"name":"Scope","description":"Dependency scope. This will be `compile` if the dependency is direct and a scope is not explicitly specified in the POM."},{"name":"Count","description":"How many times does this dependency appear."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

