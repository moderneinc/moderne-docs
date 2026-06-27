---
title: "Use switch cases refinement when possible"
sidebar_label: "Use switch cases refinement when possible"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/lang/refineswitchcases" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use switch cases refinement when possible"}
  description={"Use guarded switch case labels and guards if all the statements in the switch block do if/else if/else on the guarded label."}
  fqName={"org.openrewrite.java.migrate.lang.RefineSwitchCases"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/lang/RefineSwitchCases.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.lang.RefineSwitchCases"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.lang.RefineSwitchCases"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/lang/refineswitchcases.md"}
>

<RecipeHeader.Title>Use switch cases refinement when possible</RecipeHeader.Title>

<RecipeHeader.Description>Use guarded switch case labels and guards if all the statements in the switch block do if/else if/else on the guarded label.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    static void score(Object obj) {\n        switch (obj) {\n            case null -> System.out.println(\"You did not enter the test yet\");\n            case Integer i -> {\n                if (i >= 5 && i <= 10)\n                    System.out.println(\"You got it\");\n                else if (i >= 0 && i < 5)\n                    System.out.println(\"Shame\");\n                else\n                    System.out.println(\"Sorry?\");\n            }\n            case String s -> {\n                if (s.equalsIgnoreCase(\"YES\"))\n                    System.out.println(\"You got it\");\n                else if (\"NO\".equalsIgnoreCase(s))\n                    System.out.println(\"Shame\");\n                else\n                    System.out.println(\"Sorry?\");\n            }\n            default -> {\n                // Comment retained\n            }\n        }\n    }\n}\n","after":"class Test {\n    static void score(Object obj) {\n        switch (obj) {\n            case null -> System.out.println(\"You did not enter the test yet\");\n            case Integer i when i >= 5 && i <= 10 ->\n                System.out.println(\"You got it\");\n            case Integer i when i >= 0 && i < 5 ->\n                System.out.println(\"Shame\");\n            case Integer i ->\n                System.out.println(\"Sorry?\");\n            case String s when s.equalsIgnoreCase(\"YES\") ->\n                System.out.println(\"You got it\");\n            case String s when \"NO\".equalsIgnoreCase(s) ->\n                System.out.println(\"Shame\");\n            case String s ->\n                System.out.println(\"Sorry?\");\n            default -> {\n                // Comment retained\n            }\n        }\n    }\n}\n","diff":"@@ -5,16 +5,12 @@\n        switch (obj) {\n            case null -> System.out.println(\"You did not enter the test yet\");\n-           case Integer i -> {\n-               if (i >= 5 && i <= 10)\n-                   System.out.println(\"You got it\");\n-               else if (i >= 0 && i < 5)\n-                   System.out.println(\"Shame\");\n-               else\n-                   System.out.println(\"Sorry?\");\n-           }\n-           case String s -> {\n-               if (s.equalsIgnoreCase(\"YES\"))\n-                   System.out.println(\"You got it\");\n-               else if (\"NO\".equalsIgnoreCase(s))\n-                   System.out.println(\"Shame\");\n-               else\n-                   System.out.println(\"Sorry?\");\n-           }\n+           case Integer i when i >= 5 && i <= 10 ->\n+               System.out.println(\"You got it\");\n+           case Integer i when i >= 0 && i < 5 ->\n+               System.out.println(\"Shame\");\n+           case Integer i ->\n+               System.out.println(\"Sorry?\");\n+           case String s when s.equalsIgnoreCase(\"YES\") ->\n+               System.out.println(\"You got it\");\n+           case String s when \"NO\".equalsIgnoreCase(s) ->\n+               System.out.println(\"Shame\");\n+           case String s ->\n+               System.out.println(\"Sorry?\");\n            default -> {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.lang.RefineSwitchCases","displayName":"Use switch cases refinement when possible","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

