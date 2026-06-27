---
title: "Recipe testing best practices"
sidebar_label: "Recipe testing best practices"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/recipes/recipetestingbestpractices" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Recipe testing best practices"}
  description={"Best practices for testing recipes."}
  fqName={"org.openrewrite.java.recipes.RecipeTestingBestPractices"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-rewrite/blob/main/src/main/resources/META-INF/rewrite/recipebestpractice.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.recipes.RecipeTestingBestPractices"}
  artifact={"org.openrewrite.recipe:rewrite-rewrite"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.recipes.RecipeTestingBestPractices"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/recipes/recipetestingbestpractices.md"}
>

<RecipeHeader.Title>Recipe testing best practices</RecipeHeader.Title>

<RecipeHeader.Description>Best practices for testing recipes.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace `Stream.collect(Collectors.toUnmodifiableList())` with `Stream.toList()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/replacestreamcollectwithtolist/"},{"name":"RewriteTest classes should not be public","href":"/user-documentation/recipes/recipe-catalog/java/recipes/rewritetestclassesshouldnotbepublic/"},{"name":"Automatically select recipe examples from the unit test cases of a recipe","href":"/user-documentation/recipes/recipe-catalog/java/recipes/selectrecipeexamples/"},{"name":"Single `@DocumentExample` per test class","href":"/user-documentation/recipes/recipe-catalog/java/recipes/singledocumentexample/"},{"name":"Show `@DocumentExample`s first","href":"/user-documentation/recipes/recipe-catalog/java/recipes/reordertestmethods/"},{"name":"Replace null with RewriteTest.doesNotExist()","href":"/user-documentation/recipes/recipe-catalog/java/recipes/replacenullwithdoesnotexist/"},{"name":"New line at the end of `SourceSpecs` text blocks","href":"/user-documentation/recipes/recipe-catalog/java/recipes/sourcespectextblocknewline/"},{"name":"Minimal indentation for `SourceSpecs` text blocks","href":"/user-documentation/recipes/recipe-catalog/java/recipes/sourcespectextblockindentation/"},{"name":"Refactor RewriteTest to use defaults method","href":"/user-documentation/recipes/recipe-catalog/java/recipes/userewritetestdefaults/"},{"name":"Use `StringUtils` utility methods","href":"/user-documentation/recipes/recipe-catalog/java/recipes/usestringutilsrecipes/"},{"name":"Use `var` for variables initialized with type casts","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lang/var/usevarfortypecast/"},{"name":"Use `var` for constructor call assignments","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lang/var/usevarforconstructors/"},{"name":"Apply `var` to Generic Constructors","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lang/var/usevarforgenericsconstructors/"},{"name":"Apply `var` to generic method invocations","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lang/var/usevarforgenericmethodinvocations/"},{"name":"Use `var` for primitive and String variables","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lang/var/usevarforprimitive/"},{"name":"Use modernized `java.util` APIs","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/javautilapis/"},{"name":"Convert Javadoc to Markdown documentation comments","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lang/javadoctomarkdowndoccomment/"},{"name":"JUnit 6 best practices","href":"/user-documentation/recipes/recipe-catalog/java/testing/junit/junit6bestpractices/"},{"name":"AssertJ best practices","href":"/user-documentation/recipes/recipe-catalog/java/testing/assertj/assertj-best-practices/"},{"name":"Fix missing braces","href":"/user-documentation/recipes/recipe-catalog/staticanalysis/needbraces/"},{"name":"Remove `System.out#println` statements","href":"/user-documentation/recipes/recipe-catalog/staticanalysis/removesystemoutprintln/"},{"name":"Reorder annotations alphabetically","href":"/user-documentation/recipes/recipe-catalog/staticanalysis/reorderannotations/"},{"name":"Use static import","href":"/user-documentation/recipes/recipe-catalog/java/usestaticimport/"},{"name":"Use static import","href":"/user-documentation/recipes/recipe-catalog/java/usestaticimport/"},{"name":"Use static import","href":"/user-documentation/recipes/recipe-catalog/java/usestaticimport/"},{"name":"Change method target to static","href":"/user-documentation/recipes/recipe-catalog/java/changemethodtargettostatic/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"}]} preconditions={[{"name":"Find types","href":"/user-documentation/recipes/recipe-catalog/java/search/findtypes/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.recipes.RecipeTestingBestPractices","displayName":"Recipe testing best practices","groupId":"org.openrewrite.recipe","artifactId":"rewrite-rewrite","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

