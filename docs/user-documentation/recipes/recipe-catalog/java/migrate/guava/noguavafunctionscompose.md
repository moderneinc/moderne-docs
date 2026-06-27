---
title: "Prefer `Function.compose(Function)`"
sidebar_label: "Prefer `Function.compose(Function)`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/guava/noguavafunctionscompose" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer `Function.compose(Function)`"}
  description={"Prefer `Function.compose(Function)` over `Functions.compose(Function, Function)`."}
  fqName={"org.openrewrite.java.migrate.guava.NoGuavaFunctionsCompose"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/guava/NoGuavaFunctionsCompose.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["guava"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.guava.NoGuavaFunctionsCompose"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.guava.NoGuavaFunctionsCompose"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavafunctionscompose.md"}
>

<RecipeHeader.Title>Prefer `Function.compose(Function)`</RecipeHeader.Title>

<RecipeHeader.Description>Prefer `Function.compose(Function)` over `Functions.compose(Function, Function)`.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import com.google.common.base.Function;\nimport com.google.common.base.Functions;\n\nclass Test {\n    public static void test() {\n        Function<Object, Integer> composed = Functions.compose(new Function<String, Integer>() {\n            @Override\n            public Integer apply(String input) {\n                return input.length();\n            }\n        }, new Function<Object, String>() {\n            @Override\n            public String apply(Object input) {\n                return input.toString();\n            }\n        });\n    }\n}\n","after":"import com.google.common.base.Function;\n\nclass Test {\n    public static void test() {\n        Function<Object, Integer> composed = new Function<String, Integer>() {\n            @Override\n            public Integer apply(String input) {\n                return input.length();\n            }\n        }.compose(new Function<Object, String>() {\n            @Override\n            public String apply(Object input) {\n                return input.toString();\n            }\n        });\n    }\n}\n","diff":"@@ -2,1 +2,0 @@\nimport com.google.common.base.Function;\n-import com.google.common.base.Functions;\n\n@@ -6,1 +5,1 @@\nclass Test {\n    public static void test() {\n-       Function<Object, Integer> composed = Functions.compose(new Function<String, Integer>() {\n+       Function<Object, Integer> composed = new Function<String, Integer>() {\n            @Override\n@@ -11,1 +10,1 @@\n                return input.length();\n            }\n-       }, new Function<Object, String>() {\n+       }.compose(new Function<Object, String>() {\n            @Override\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.guava.NoGuavaFunctionsCompose","displayName":"Prefer `Function.compose(Function)`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

