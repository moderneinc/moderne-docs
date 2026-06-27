---
title: "Find OpenRewrite recipes"
sidebar_label: "Find OpenRewrite recipes"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/recipes/findrecipes" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find OpenRewrite recipes"}
  description={"This recipe finds all OpenRewrite recipes, primarily to produce a data table that is being used to experiment with fine-tuning a large language model to produce more recipes."}
  fqName={"org.openrewrite.java.recipes.FindRecipes"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-rewrite/blob/main/src/main/java/org/openrewrite/java/recipes/FindRecipes.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.recipes.FindRecipes"}
  artifact={"org.openrewrite.recipe:rewrite-rewrite"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.recipes.FindRecipes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/recipes/findrecipes.md"}
>

<RecipeHeader.Title>Find OpenRewrite recipes</RecipeHeader.Title>

<RecipeHeader.Description>This recipe finds all OpenRewrite recipes, primarily to produce a data table that is being used to experiment with fine-tuning a large language model to produce more recipes.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.openrewrite.Option;\nimport org.openrewrite.internal.lang.NonNullApi;\nimport org.openrewrite.Recipe;\nimport org.openrewrite.internal.lang.Nullable;\n\n@NonNullApi\nclass MyRecipe extends Recipe {\n  @Option(displayName = \"Method pattern\",\n          description = \"A method pattern that is used to find matching method declarations/invocations.\",\n          example = \"org.mockito.Matchers anyVararg()\")\n  String methodPattern;\n\n  @Option(displayName = \"New access level\",\n          description = \"New method access level to apply to the method, like \\\"public\\\".\",\n          example = \"public\",\n          valid = {\"private\", \"protected\", \"package\", \"public\"},\n          required = false)\n  String newAccessLevel;\n\n  @Override\n  public String getDisplayName() {\n      return \"My recipe\";\n  }\n\n  @Override\n  public String getDescription() {\n      return \"This is my recipe.\";\n  }\n}\n","after":"import org.openrewrite.Option;\nimport org.openrewrite.internal.lang.NonNullApi;\nimport org.openrewrite.Recipe;\nimport org.openrewrite.internal.lang.Nullable;\n\n@NonNullApi\nclass /*~~>*/MyRecipe extends Recipe {\n  @Option(displayName = \"Method pattern\",\n          description = \"A method pattern that is used to find matching method declarations/invocations.\",\n          example = \"org.mockito.Matchers anyVararg()\")\n  String methodPattern;\n\n  @Option(displayName = \"New access level\",\n          description = \"New method access level to apply to the method, like \\\"public\\\".\",\n          example = \"public\",\n          valid = {\"private\", \"protected\", \"package\", \"public\"},\n          required = false)\n  String newAccessLevel;\n\n  @Override\n  public String getDisplayName() {\n      return \"My recipe\";\n  }\n\n  @Override\n  public String getDescription() {\n      return \"This is my recipe.\";\n  }\n}\n","diff":"@@ -7,1 +7,1 @@\n\n@NonNullApi\n-class MyRecipe extends Recipe {\n+class /*~~>*/MyRecipe extends Recipe {\n  @Option(displayName = \"Method pattern\",\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.recipes.FindRecipes","displayName":"Find OpenRewrite recipes","groupId":"org.openrewrite.recipe","artifactId":"rewrite-rewrite","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.RewriteRecipeSource","displayName":"Rewrite recipe source code","description":"This table contains the source code of recipes along with their metadata for use in an experiment fine-tuning large language models to produce more recipes.","columns":[{"name":"Recipe name","description":"The name of the recipe."},{"name":"Recipe description","description":"The description of the recipe."},{"name":"Recipe type","description":"Differentiate between Java and YAML recipes, as they may be two independent data sets used in LLM fine-tuning."},{"name":"Recipe source code","description":"The full source code of the recipe."},{"name":"Recipe options","description":"JSON format of recipe options."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

