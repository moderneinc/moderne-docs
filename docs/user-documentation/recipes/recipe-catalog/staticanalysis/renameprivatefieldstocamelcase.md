---
title: "Reformat private field names to camelCase"
sidebar_label: "Reformat private field names to camelCase"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/renameprivatefieldstocamelcase" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Reformat private field names to camelCase"}
  description={"Reformat private field names to camelCase to comply with Java naming convention. The recipe will not rename fields with default, protected or public access modifiers. The recipe will not rename private constants. The first character is set to lower case and existing capital letters are preserved. Special characters that are allowed in java field names `$` and `_` are removed. If a special character is removed the next valid alphanumeric will be capitalized. The recipe will not rename a field if the result already exists in the class, conflicts with a java reserved keyword, or the result is blank. Consistent naming conventions improve code readability and help developers quickly understand the purpose and scope of fields."}
  fqName={"org.openrewrite.staticanalysis.RenamePrivateFieldsToCamelCase"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RenamePrivateFieldsToCamelCase.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S116","RSPEC-S3008"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.RenamePrivateFieldsToCamelCase"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.RenamePrivateFieldsToCamelCase"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/renameprivatefieldstocamelcase.md"}
>

<RecipeHeader.Title>Reformat private field names to camelCase</RecipeHeader.Title>

<RecipeHeader.Description>Reformat private field names to camelCase to comply with Java naming convention. The recipe will not rename fields with default, protected or public access modifiers. The recipe will not rename private constants. The first character is set to lower case and existing capital letters are preserved. Special characters that are allowed in java field names `$` and `_` are removed. If a special character is removed the next valid alphanumeric will be capitalized. The recipe will not rename a field if the result already exists in the class, conflicts with a java reserved keyword, or the result is blank. Consistent naming conventions improve code readability and help developers quickly understand the purpose and scope of fields.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    private int DoChange = 10;\n    public int DoNotChangePublicMember;\n    int DoNotChangeDefaultMember;\n\n    public int getTen() {\n        return DoChange;\n    }\n\n    public int getTwenty() {\n        return this.DoChange * 2;\n    }\n\n    public int getThirty() {\n        return DoChange * 3;\n    }\n}\n","after":"class Test {\n    private int doChange = 10;\n    public int DoNotChangePublicMember;\n    int DoNotChangeDefaultMember;\n\n    public int getTen() {\n        return doChange;\n    }\n\n    public int getTwenty() {\n        return this.doChange * 2;\n    }\n\n    public int getThirty() {\n        return doChange * 3;\n    }\n}\n","diff":"@@ -2,1 +2,1 @@\nclass Test {\n-   private int DoChange = 10;\n+   private int doChange = 10;\n    public int DoNotChangePublicMember;\n@@ -7,1 +7,1 @@\n\n    public int getTen() {\n-       return DoChange;\n+       return doChange;\n    }\n@@ -11,1 +11,1 @@\n\n    public int getTwenty() {\n-       return this.DoChange * 2;\n+       return this.doChange * 2;\n    }\n@@ -15,1 +15,1 @@\n\n    public int getThirty() {\n-       return DoChange * 3;\n+       return doChange * 3;\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.RenamePrivateFieldsToCamelCase","displayName":"Reformat private field names to camelCase","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

