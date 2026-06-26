---
title: "Properly use declaration-site type variance"
sidebar_label: "Properly use declaration-site type variance"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/declarationsitetypevariance" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Properly use declaration-site type variance"}
  description={"Currently, Java requires use-site type variance, so if someone has `Function<IN, OUT>` method parameter, it should rather be `Function<? super IN, ? extends OUT>`. Unfortunately, it is not easy to notice that `? super` and `? extends` is missing, so this recipe adds it where that would improve the situation."}
  fqName={"org.openrewrite.staticanalysis.DeclarationSiteTypeVariance"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/DeclarationSiteTypeVariance.java"}
/>

<RecipeHeader
  displayName={"Properly use declaration-site type variance"}
  description={"Currently, Java requires use-site type variance, so if someone has `Function<IN, OUT>` method parameter, it should rather be `Function<? super IN, ? extends OUT>`. Unfortunately, it is not easy to notice that `? super` and `? extends` is missing, so this recipe adds it where that would improve the situation."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.DeclarationSiteTypeVariance"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.DeclarationSiteTypeVariance"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/declarationsitetypevariance.md"}
/>

<OptionsTable options={[{"type":"List","name":"variantTypes","required":true,"description":"A list of well-known classes that have in/out type variance.","example":"java.util.function.Function<IN, OUT>"},{"type":"List","name":"excludedBounds","required":false,"description":"A list of bounds that should not receive explicit variance. Globs supported.","example":"java.lang.*"},{"type":"Boolean","name":"excludeFinalClasses","required":false,"description":"If true, do not add `? extends` variance to final classes. `? super` variance will be added regardless of finality."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"variantTypes","value":"List.of(\"java.util.function.Function<IN, OUT>\")"},{"parameter":"excludedBounds","value":"List.of(\"java.lang.*\")"},{"parameter":"excludeFinalClasses","value":"true"}],"unchanged":{"language":"java","code":"interface In {}\ninterface Out {}\n"},"variants":[{"language":"java","before":"import java.util.function.Function;\nclass Test {\n    void test(Function<In, Out> f) {\n    }\n}\n","after":"import java.util.function.Function;\nclass Test {\n    void test(Function<? super In, ? extends Out> f) {\n    }\n}\n","diff":"@@ -3,1 +3,1 @@\nimport java.util.function.Function;\nclass Test {\n-   void test(Function<In, Out> f) {\n+   void test(Function<? super In, ? extends Out> f) {\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.DeclarationSiteTypeVariance","displayName":"Properly use declaration-site type variance","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":true,"cliOptions":" --recipe-option \"variantTypes=java.util.function.Function<IN, OUT>\" --recipe-option \"excludedBounds=java.lang.*\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

