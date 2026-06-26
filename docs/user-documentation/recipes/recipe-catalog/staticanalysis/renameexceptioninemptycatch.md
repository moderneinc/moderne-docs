---
title: "Rename caught exceptions in empty catch blocks to `ignored`"
sidebar_label: "Rename caught exceptions in empty catch blocks to `ignored`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/renameexceptioninemptycatch" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rename caught exceptions in empty catch blocks to `ignored`"}
  description={"Renames caught exceptions in empty catch blocks to `ignored`. `ignored` will be incremented by 1 if a namespace conflict exists."}
  fqName={"org.openrewrite.staticanalysis.RenameExceptionInEmptyCatch"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RenameExceptionInEmptyCatch.java"}
/>

<RecipeHeader
  displayName={"Rename caught exceptions in empty catch blocks to `ignored`"}
  description={"Renames caught exceptions in empty catch blocks to `ignored`. `ignored` will be incremented by 1 if a namespace conflict exists."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.RenameExceptionInEmptyCatch"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.RenameExceptionInEmptyCatch"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/renameexceptioninemptycatch.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    int ignored = 0;\n    void method(int ignored1) {\n        int ignored2 = 0;\n        for (int ignored3 = 0; ignored3 < 10; ignored3++) { // scope does not apply.\n            int ignored4 = 0; // scope does not apply.\n        }\n        if (ignored1 > 0) {\n            int ignored5 = 0; // scope does not apply.\n        }\n        try {\n            int ignored6 = 0; // scope does not apply.\n        } catch (Exception ex) {\n        }\n    }\n}\n","after":"class Test {\n    int ignored = 0;\n    void method(int ignored1) {\n        int ignored2 = 0;\n        for (int ignored3 = 0; ignored3 < 10; ignored3++) { // scope does not apply.\n            int ignored4 = 0; // scope does not apply.\n        }\n        if (ignored1 > 0) {\n            int ignored5 = 0; // scope does not apply.\n        }\n        try {\n            int ignored6 = 0; // scope does not apply.\n        } catch (Exception ignored3) {\n        }\n    }\n}\n","diff":"@@ -13,1 +13,1 @@\n        try {\n            int ignored6 = 0; // scope does not apply.\n-       } catch (Exception ex) {\n+       } catch (Exception ignored3) {\n        }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.RenameExceptionInEmptyCatch","displayName":"Rename caught exceptions in empty catch blocks to `ignored`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

