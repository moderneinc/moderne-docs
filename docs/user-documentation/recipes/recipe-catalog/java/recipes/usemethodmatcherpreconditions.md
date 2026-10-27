---
title: "Use `UsesMethod` and `DeclaresMethod` preconditions with `MethodMatcher`s"
sidebar_label: "Use `UsesMethod` and `DeclaresMethod` preconditions with `MethodMatcher`s"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/recipes/usemethodmatcherpreconditions" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use `UsesMethod` and `DeclaresMethod` preconditions with `MethodMatcher`s"}
  description={"Pass an existing `static final` `MethodMatcher` field to `UsesMethod` and `DeclaresMethod` instead of repeating its method pattern and `matchOverrides` flag. Also replace `new FindMethods(..).getVisitor()` and `new FindMethodDeclaration(..).getVisitor()` preconditions with `UsesMethod` and `DeclaresMethod`, which only consult the types in use of a source file."}
  fqName={"org.openrewrite.java.recipes.UseMethodMatcherPreconditions"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-rewrite/blob/main/src/main/java/org/openrewrite/java/recipes/UseMethodMatcherPreconditions.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.recipes.UseMethodMatcherPreconditions"}
  artifact={"org.openrewrite.recipe:rewrite-rewrite"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.recipes.UseMethodMatcherPreconditions"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/recipes/usemethodmatcherpreconditions.md"}
>

<RecipeHeader.Title>Use `UsesMethod` and `DeclaresMethod` preconditions with `MethodMatcher`s</RecipeHeader.Title>

<RecipeHeader.Description>Pass an existing `static final` `MethodMatcher` field to `UsesMethod` and `DeclaresMethod` instead of repeating its method pattern and `matchOverrides` flag. Also replace `new FindMethods(..).getVisitor()` and `new FindMethodDeclaration(..).getVisitor()` preconditions with `UsesMethod` and `DeclaresMethod`, which only consult the types in use of a source file.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.openrewrite.ExecutionContext;\nimport org.openrewrite.Preconditions;\nimport org.openrewrite.Recipe;\nimport org.openrewrite.TreeVisitor;\nimport org.openrewrite.java.JavaIsoVisitor;\nimport org.openrewrite.java.MethodMatcher;\nimport org.openrewrite.java.search.UsesMethod;\n\npublic class SampleRecipe extends Recipe {\n    private static final MethodMatcher BAR = new MethodMatcher(\"com.example.Foo bar(..)\");\n\n    @Override\n    public String getDisplayName() {\n        return \"Sample\";\n    }\n\n    @Override\n    public String getDescription() {\n        return \"Sample recipe.\";\n    }\n\n    @Override\n    public TreeVisitor<?, ExecutionContext> getVisitor() {\n        return Preconditions.check(new UsesMethod<>(\"com.example.Foo bar(..)\"), new JavaIsoVisitor<ExecutionContext>() {\n        });\n    }\n}\n","after":"import org.openrewrite.ExecutionContext;\nimport org.openrewrite.Preconditions;\nimport org.openrewrite.Recipe;\nimport org.openrewrite.TreeVisitor;\nimport org.openrewrite.java.JavaIsoVisitor;\nimport org.openrewrite.java.MethodMatcher;\nimport org.openrewrite.java.search.UsesMethod;\n\npublic class SampleRecipe extends Recipe {\n    private static final MethodMatcher BAR = new MethodMatcher(\"com.example.Foo bar(..)\");\n\n    @Override\n    public String getDisplayName() {\n        return \"Sample\";\n    }\n\n    @Override\n    public String getDescription() {\n        return \"Sample recipe.\";\n    }\n\n    @Override\n    public TreeVisitor<?, ExecutionContext> getVisitor() {\n        return Preconditions.check(new UsesMethod<>(BAR), new JavaIsoVisitor<ExecutionContext>() {\n        });\n    }\n}\n","diff":"@@ -24,1 +24,1 @@\n    @Override\n    public TreeVisitor<?, ExecutionContext> getVisitor() {\n-       return Preconditions.check(new UsesMethod<>(\"com.example.Foo bar(..)\"), new JavaIsoVisitor<ExecutionContext>() {\n+       return Preconditions.check(new UsesMethod<>(BAR), new JavaIsoVisitor<ExecutionContext>() {\n        });\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.recipes.UseMethodMatcherPreconditions","displayName":"Use `UsesMethod` and `DeclaresMethod` preconditions with `MethodMatcher`s","groupId":"org.openrewrite.recipe","artifactId":"rewrite-rewrite","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

