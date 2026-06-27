---
title: "Add explicit transitive dependencies"
sidebar_label: "Add explicit transitive dependencies"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add explicit transitive dependencies"}
  description={"Detects when Java source code or configuration files reference types from transitive Maven dependencies and promotes those transitive dependencies to explicit direct dependencies in the pom.xml. This ensures the build is resilient against changes in transitive dependency trees of upstream libraries."}
  fqName={"org.openrewrite.java.dependencies.AddExplicitTransitiveDependencies"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.dependencies.AddExplicitTransitiveDependencies"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.dependencies.AddExplicitTransitiveDependencies"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dependencies/addexplicittransitivedependencies.md"}
  moderneOnly
>

<RecipeHeader.Title>Add explicit transitive dependencies</RecipeHeader.Title>

<RecipeHeader.Description>Detects when Java source code or configuration files reference types from transitive Maven dependencies and promotes those transitive dependencies to explicit direct dependencies in the pom.xml. This ensures the build is resilient against changes in transitive dependency trees of upstream libraries.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"List","name":"ignoredDependencies","required":false,"description":"A list of `groupId:artifactId` glob patterns for dependencies that should not be promoted, even if they appear to be used transitively. For example, `com.google.*:*` would ignore all Google dependencies, and `*:lombok` would ignore Lombok regardless of group ID.","example":"org.projectlombok:lombok,com.google.*:*"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"ignoredDependencies","value":"List.of()"}],"unchanged":{"language":"java","code":"import com.fasterxml.jackson.databind.ObjectMapper;\n\npublic class A {\n    ObjectMapper objectMapper = new ObjectMapper();\n}\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.dependencies.AddExplicitTransitiveDependencies","displayName":"Add explicit transitive dependencies","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.dependencies.table.PromotedTransitiveDependencies","displayName":"Promoted transitive dependencies","description":"Transitive dependencies that were promoted to direct dependencies because source code references types from them.","columns":[{"name":"Group","description":"The first part of a dependency coordinate `com.google.guava:guava:VERSION`."},{"name":"Artifact","description":"The second part of a dependency coordinate `com.google.guava:guava:VERSION`."},{"name":"Version","description":"The resolved version that was added."},{"name":"Scope","description":"The scope assigned to the promoted dependency (compile or test)."},{"name":"POM path","description":"The path to the pom.xml file where the dependency was promoted."},{"name":"Evidence","description":"The type name or reference that demonstrated usage of this transitive dependency."},{"name":"Source path","description":"The path to the source file where the evidence was found."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

