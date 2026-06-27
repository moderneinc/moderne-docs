---
title: "Generate `InlineMethodCalls` recipes for deprecated delegating methods"
sidebar_label: "Generate `InlineMethodCalls` recipes for deprecated delegating methods"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/recipes/generatedeprecatedmethodrecipes" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Generate `InlineMethodCalls` recipes for deprecated delegating methods"}
  description={"Finds `@Deprecated` method declarations whose body is a single delegation call to another method in the same class, and generates a declarative YAML recipe file containing `InlineMethodCalls` entries for each."}
  fqName={"org.openrewrite.java.recipes.GenerateDeprecatedMethodRecipes"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-rewrite/blob/main/src/main/java/org/openrewrite/java/recipes/GenerateDeprecatedMethod.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.recipes.GenerateDeprecatedMethodRecipes"}
  artifact={"org.openrewrite.recipe:rewrite-rewrite"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.recipes.GenerateDeprecatedMethodRecipes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/recipes/generatedeprecatedmethodrecipes.md"}
>

<RecipeHeader.Title>Generate `InlineMethodCalls` recipes for deprecated delegating methods</RecipeHeader.Title>

<RecipeHeader.Description>Finds `@Deprecated` method declarations whose body is a single delegation call to another method in the same class, and generates a declarative YAML recipe file containing `InlineMethodCalls` entries for each.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"unchanged":{"language":"java","code":"package com.example;\n\npublic class Foo {\n    private final String a;\n    private final String b;\n\n    public Foo(String a, String b) {\n        this.a = a;\n        this.b = b;\n    }\n\n    @Deprecated\n    public Foo(String a) {\n        this(a, null);\n    }\n}\n"},"variants":[{"language":"yaml","before":"","after":"type: specs.openrewrite.org/v1beta/recipe\nname: org.openrewrite.recipes.InlineDeprecatedMethods\ndisplayName: Inline deprecated delegating methods\ndescription: Automatically generated recipes to inline deprecated method calls that delegate to other methods in the same class.\nrecipeList:\n  - org.openrewrite.java.InlineMethodCalls:\n      methodPattern: 'com.example.Foo <constructor>(java.lang.String)'\n      replacement: 'this(a, null)'\n","newFile":true}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.recipes.GenerateDeprecatedMethodRecipes","displayName":"Generate `InlineMethodCalls` recipes for deprecated delegating methods","groupId":"org.openrewrite.recipe","artifactId":"rewrite-rewrite","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.recipes.DeprecatedMethodDelegations","displayName":"Deprecated method delegations","description":"Deprecated methods that delegate to another method in the same class, suitable for inlining via `InlineMethodCalls`.","columns":[{"name":"Method pattern","description":"The method pattern of the deprecated method."},{"name":"Replacement","description":"The replacement expression to inline."},{"name":"Recipe YAML","description":"A YAML snippet that can be copied into a recipe list."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

