---
title: "Replace duplicate `String` literals"
sidebar_label: "Replace duplicate `String` literals"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/replaceduplicatestringliterals" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace duplicate `String` literals"}
  description={"Replaces `String` literals with a length of 5 or greater repeated a minimum of 3 times. Qualified `String` literals include final Strings, method invocations, and new class invocations. Adds a new `private static final String` or uses an existing equivalent class field. A new variable name will be generated based on the literal value if an existing field does not exist. The generated name will append a numeric value to the variable name if a name already exists in the compilation unit. Centralizing repeated string values into constants makes refactoring safer and reduces the risk of inconsistent updates."}
  fqName={"org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ReplaceDuplicateStringLiterals.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S1192","RSPEC-S1889"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/replaceduplicatestringliterals.md"}
>

<RecipeHeader.Title>Replace duplicate `String` literals</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `String` literals with a length of 5 or greater repeated a minimum of 3 times. Qualified `String` literals include final Strings, method invocations, and new class invocations. Adds a new `private static final String` or uses an existing equivalent class field. A new variable name will be generated based on the literal value if an existing field does not exist. The generated name will append a numeric value to the variable name if a name already exists in the compilation unit. Centralizing repeated string values into constants makes refactoring safer and reduces the risk of inconsistent updates.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"includeTestSources","required":false,"description":"Changes only apply to main by default. `includeTestSources` will apply the recipe to `test` source files."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"includeTestSources","value":"true"}],"variants":[{"language":"java","before":"package org.foo;\nclass A {\n    final String val1 = \"value\";\n    final String val2 = \"value\";\n    final String val3 = \"value\";\n}\n","after":"package org.foo;\nclass A {\n    private static final String VALUE = \"value\";\n    final String val1 = VALUE;\n    final String val2 = VALUE;\n    final String val3 = VALUE;\n}\n","diff":"@@ -3,3 +3,4 @@\npackage org.foo;\nclass A {\n-   final String val1 = \"value\";\n-   final String val2 = \"value\";\n-   final String val3 = \"value\";\n+   private static final String VALUE = \"value\";\n+   final String val1 = VALUE;\n+   final String val2 = VALUE;\n+   final String val3 = VALUE;\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals","displayName":"Replace duplicate `String` literals","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

