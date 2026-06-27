---
title: "Combine semantically equal catch blocks"
sidebar_label: "Combine semantically equal catch blocks"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/combinesemanticallyequalcatchblocks" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Combine semantically equal catch blocks"}
  description={"Combine catches in a try that contain semantically equivalent blocks. No change will be made when a caught exception exists if combining catches may change application behavior or type attribution is missing. Merging duplicate catch bodies into multi-catch blocks reduces repetition and makes the exception handling strategy easier to follow."}
  fqName={"org.openrewrite.staticanalysis.CombineSemanticallyEqualCatchBlocks"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/CombineSemanticallyEqualCatchBlocks.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S2147"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.CombineSemanticallyEqualCatchBlocks"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CombineSemanticallyEqualCatchBlocks"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/combinesemanticallyequalcatchblocks.md"}
>

<RecipeHeader.Title>Combine semantically equal catch blocks</RecipeHeader.Title>

<RecipeHeader.Description>Combine catches in a try that contain semantically equivalent blocks. No change will be made when a caught exception exists if combining catches may change application behavior or type attribution is missing. Merging duplicate catch bodies into multi-catch blocks reduces repetition and makes the exception handling strategy easier to follow.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"unchanged":{"language":"java","code":"class A extends RuntimeException {}"},"variants":[{"language":"java","before":"class Test {\n    void method() {\n        try {\n        } catch (A ex) {\n            // Same\n        } catch (B ex) {\n            // Same\n        }\n    }\n}\n","after":"class Test {\n    void method() {\n        try {\n        } catch (A | B ex) {\n            // Same\n        }\n    }\n}\n","diff":"@@ -4,1 +4,1 @@\n    void method() {\n        try {\n-       } catch (A ex) {\n+       } catch (A | B ex) {\n            // Same\n@@ -6,2 +6,0 @@\n        } catch (A ex) {\n            // Same\n-       } catch (B ex) {\n-           // Same\n        }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.CombineSemanticallyEqualCatchBlocks","displayName":"Combine semantically equal catch blocks","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

