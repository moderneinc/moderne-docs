---
title: "Find non-`case` labels in `switch` statements"
sidebar_label: "Find non-`case` labels in `switch` statements"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/findnoncaselabelsinswitch" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find non-`case` labels in `switch` statements"}
  description={"Marks statement labels placed directly among the `case` labels of a `switch`. Such a label is often a `case` with a missing keyword, which compiles but never matches, or a labeled loop whose `break` is easily misread as leaving the `switch`. Labels nested in a block or statement within a case are not marked. Review these before running `RemoveUnusedLabels`, which would remove unused ones."}
  fqName={"org.openrewrite.staticanalysis.FindNonCaseLabelsInSwitch"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/FindNonCaseLabelsInSwitch.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S1219"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.FindNonCaseLabelsInSwitch"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.FindNonCaseLabelsInSwitch"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/findnoncaselabelsinswitch.md"}
>

<RecipeHeader.Title>Find non-`case` labels in `switch` statements</RecipeHeader.Title>

<RecipeHeader.Description>Marks statement labels placed directly among the `case` labels of a `switch`. Such a label is often a `case` with a missing keyword, which compiles but never matches, or a labeled loop whose `break` is easily misread as leaving the `switch`. Labels nested in a block or statement within a case are not marked. Review these before running `RemoveUnusedLabels`, which would remove unused ones.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    enum Day { MONDAY, TUESDAY, WEDNESDAY }\n\n    void test(Day day) {\n        switch (day) {\n            case MONDAY:\n            case TUESDAY:\n            WEDNESDAY:\n                System.out.println(day);\n                break;\n        }\n    }\n}\n","after":"class Test {\n    enum Day { MONDAY, TUESDAY, WEDNESDAY }\n\n    void test(Day day) {\n        switch (day) {\n            case MONDAY:\n            case TUESDAY:\n            /*~~(`WEDNESDAY` is a statement label, not a `case`, so `WEDNESDAY` never matches. Add the missing `case` keyword.)~~>*/WEDNESDAY:\n                System.out.println(day);\n                break;\n        }\n    }\n}\n","diff":"@@ -8,1 +8,1 @@\n            case MONDAY:\n            case TUESDAY:\n-           WEDNESDAY:\n+           /*~~(`WEDNESDAY` is a statement label, not a `case`, so `WEDNESDAY` never matches. Add the missing `case` keyword.)~~>*/WEDNESDAY:\n                System.out.println(day);\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.FindNonCaseLabelsInSwitch","displayName":"Find non-`case` labels in `switch` statements","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

