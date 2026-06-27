---
title: "Lombok Best Practices"
sidebar_label: "Lombok Best Practices"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/lombok/lombokbestpractices" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Lombok Best Practices"}
  description={"Applies all recipes that enforce best practices for using Lombok."}
  fqName={"org.openrewrite.java.migrate.lombok.LombokBestPractices"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/lombok.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.lombok.LombokBestPractices"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.lombok.LombokBestPractices"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/lombok/lombokbestpractices.md"}
>

<RecipeHeader.Title>Lombok Best Practices</RecipeHeader.Title>

<RecipeHeader.Description>Applies all recipes that enforce best practices for using Lombok.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate Lombok to a Java 11 compatible version","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lombok/updatelomboktojava11/"},{"name":"Use Lombok logger annotations instead of explicit fields","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lombok/log/uselomboklogannotations/"},{"name":"Convert getter methods to annotations","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lombok/uselombokgetter/"},{"name":"Convert setter methods to annotations","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lombok/uselomboksetter/"},{"name":"Use `@NoArgsConstructor` where applicable","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lombok/usenoargsconstructor/"},{"name":"Use `@RequiredArgsConstructor` where applicable","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lombok/userequiredargsconstructor/"},{"name":"Use `@AllArgsConstructor` where applicable","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lombok/useallargsconstructor/"},{"name":"Change Maven dependency scope","href":"/user-documentation/recipes/recipe-catalog/maven/changedependencyscope/"},{"name":"Change Maven dependency scope","href":"/user-documentation/recipes/recipe-catalog/maven/changedependencyscope/"},{"name":"Exclude Maven dependency","href":"/user-documentation/recipes/recipe-catalog/maven/excludedependency/"},{"name":"Enable Lombok annotation processor","href":"/user-documentation/recipes/recipe-catalog/java/migrate/enablelombokannotationprocessor/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"mavenProject","code":"project"},"variants":[]},{"unchanged":{"language":"mavenProject","code":"project"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.lombok.LombokBestPractices","displayName":"Lombok Best Practices","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

