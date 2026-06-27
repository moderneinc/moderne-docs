---
title: "Use primitive wrapper `valueOf` method"
sidebar_label: "Use primitive wrapper `valueOf` method"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/primitivewrapperclassconstructortovalueof" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use primitive wrapper `valueOf` method"}
  description={"The constructor of all primitive types has been deprecated in favor of using the static factory method `valueOf` available for each of the primitive type wrappers. Using `valueOf` enables object caching for frequently used values, reducing unnecessary heap allocations. Note that this changes identity semantics: `valueOf` may return cached instances (such as `Boolean.TRUE` or `Integer` values in `[-128, 127]`), so code that compares boxed values with `==`/`!=`, relies on `System.identityHashCode`, or synchronizes on the boxed value may behave differently after this change."}
  fqName={"org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/PrimitiveWrapperClassConstructorToValueOf.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S2129"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/primitivewrapperclassconstructortovalueof.md"}
>

<RecipeHeader.Title>Use primitive wrapper `valueOf` method</RecipeHeader.Title>

<RecipeHeader.Description>The constructor of all primitive types has been deprecated in favor of using the static factory method `valueOf` available for each of the primitive type wrappers. Using `valueOf` enables object caching for frequently used values, reducing unnecessary heap allocations. Note that this changes identity semantics: `valueOf` may return cached instances (such as `Boolean.TRUE` or `Integer` values in `[-128, 127]`), so code that compares boxed values with `==`/`!=`, relies on `System.identityHashCode`, or synchronizes on the boxed value may behave differently after this change.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"class A {\n    Boolean bool = new Boolean(true);\n    Byte b = new Byte(\"1\");\n    Character c = new Character('c');\n    Double d = new Double(1.0);\n    Float f = new Float(1.1f);\n    Long l = new Long(1);\n    Short sh = new Short(\"12\");\n    short s3 = 3;\n    Short sh3 = new Short(s3);\n    Integer i = new Integer(1);\n}\n","after":"class A {\n    Boolean bool = Boolean.valueOf(true);\n    Byte b = Byte.valueOf(\"1\");\n    Character c = Character.valueOf('c');\n    Double d = Double.valueOf(1.0);\n    Float f = Float.valueOf(1.1f);\n    Long l = Long.valueOf(1);\n    Short sh = Short.valueOf(\"12\");\n    short s3 = 3;\n    Short sh3 = Short.valueOf(s3);\n    Integer i = Integer.valueOf(1);\n}\n","diff":"@@ -2,7 +2,7 @@\nclass A {\n-   Boolean bool = new Boolean(true);\n-   Byte b = new Byte(\"1\");\n-   Character c = new Character('c');\n-   Double d = new Double(1.0);\n-   Float f = new Float(1.1f);\n-   Long l = new Long(1);\n-   Short sh = new Short(\"12\");\n+   Boolean bool = Boolean.valueOf(true);\n+   Byte b = Byte.valueOf(\"1\");\n+   Character c = Character.valueOf('c');\n+   Double d = Double.valueOf(1.0);\n+   Float f = Float.valueOf(1.1f);\n+   Long l = Long.valueOf(1);\n+   Short sh = Short.valueOf(\"12\");\n    short s3 = 3;\n@@ -10,2 +10,2 @@\n    Short sh = new Short(\"12\");\n    short s3 = 3;\n-   Short sh3 = new Short(s3);\n-   Integer i = new Integer(1);\n+   Short sh3 = Short.valueOf(s3);\n+   Integer i = Integer.valueOf(1);\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf","displayName":"Use primitive wrapper `valueOf` method","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

