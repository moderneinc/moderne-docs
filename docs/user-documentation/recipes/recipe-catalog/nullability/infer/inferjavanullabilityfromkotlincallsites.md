---
title: "Infer Java `@Nullable` return types from Kotlin call sites"
sidebar_label: "Infer Java `@Nullable` return types from Kotlin call sites"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Infer Java `@Nullable` return types from Kotlin call sites"}
  description={"Adds the JSpecify `@Nullable` annotation to the return type of **Java** methods based on how those methods are used in **Kotlin** code. A Java method returning a reference type appears to Kotlin as a platform type (`String!`) of unknown nullability; Kotlin call sites that treat the result as possibly null reveal the intended contract. This recipe scans Kotlin sources for such usage — a safe call (`call()?.x`), an elvis operand (`call() ?: fallback`), a not-null assertion (`call()!!`), or a comparison to `null` — and writes `@Nullable` onto the matching Java method declaration, resolving the platform-type ambiguity. Only Java sources are modified; Kotlin sources are read for evidence and left unchanged. Conservative by design: it skips primitive and `void` returns, methods that already carry a nullability annotation, and `@Override` methods (where annotating the return could violate the supertype contract)."}
  fqName={"io.moderne.nullability.infer.InferJavaNullabilityFromKotlinCallSites"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Infer Java `@Nullable` return types from Kotlin call sites"}
  description={"Adds the JSpecify `@Nullable` annotation to the return type of **Java** methods based on how those methods are used in **Kotlin** code. A Java method returning a reference type appears to Kotlin as a platform type (`String!`) of unknown nullability; Kotlin call sites that treat the result as possibly null reveal the intended contract. This recipe scans Kotlin sources for such usage — a safe call (`call()?.x`), an elvis operand (`call() ?: fallback`), a not-null assertion (`call()!!`), or a comparison to `null` — and writes `@Nullable` onto the matching Java method declaration, resolving the platform-type ambiguity. Only Java sources are modified; Kotlin sources are read for evidence and left unchanged. Conservative by design: it skips primitive and `void` returns, methods that already carry a nullability annotation, and `@Override` methods (where annotating the return could violate the supertype contract)."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.infer.InferJavaNullabilityFromKotlinCallSites"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.infer.InferJavaNullabilityFromKotlinCallSites"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/infer/inferjavanullabilityfromkotlincallsites.md"}
  moderneOnly
/>

<ExampleList examples={[{"unchanged":{"language":"kotlin","code":"import io.moderne.nullability.fixture.Greeter\nfun use(g: Greeter): Int? {\n    return g.getName()?.length\n}\n"},"variants":[{"language":"java","before":"package io.moderne.nullability.fixture;\n\npublic class Greeter {\n    public String getName() {\n        return \"x\";\n    }\n\n    public String other() {\n        return \"y\";\n    }\n}\n","after":"package io.moderne.nullability.fixture;\n\nimport org.jspecify.annotations.Nullable;\n\npublic class Greeter {\n    @Nullable\n    public String getName() {\n        return \"x\";\n    }\n\n    public String other() {\n        return \"y\";\n    }\n}\n","diff":"@@ -3,0 +3,2 @@\npackage io.moderne.nullability.fixture;\n\n+import org.jspecify.annotations.Nullable;\n+\npublic class Greeter {\n@@ -4,0 +6,1 @@\n\npublic class Greeter {\n+   @Nullable\n    public String getName() {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.nullability.infer.InferJavaNullabilityFromKotlinCallSites","displayName":"Infer Java `@Nullable` return types from Kotlin call sites","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

