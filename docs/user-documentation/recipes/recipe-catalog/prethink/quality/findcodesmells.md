---
title: "Find code smells"
sidebar_label: "Find code smells"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find code smells"}
  description={"Detect code smells including God Class, Feature Envy, and Data Class using composite metric thresholds with severity ratings."}
  fqName={"io.moderne.prethink.quality.FindCodeSmells"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find code smells"}
  description={"Detect code smells including God Class, Feature Envy, and Data Class using composite metric thresholds with severity ratings."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.quality.FindCodeSmells"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.quality.FindCodeSmells"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/quality/findcodesmells.md"}
  moderneOnly
/>

<ExampleList examples={[{"unchanged":{"language":"java","code":"package com.example;\n\n/**\n * Intentionally bloated class to trigger God Class detection.\n * WMC >= 47 (each method has if/else = CC 2, 24 methods = WMC 48).\n * TCC < 0.33 (each method accesses a different field).\n * ATFD > 5 (methods directly access public fields of Other).\n */\npublic class BigService {\n    private int f1;\n    private int f2;\n    private int f3;\n    private int f4;\n    private int f5;\n    private int f6;\n    private int f7;\n    private int f8;\n    private int f9;\n    private int f10;\n    private int f11;\n    private int f12;\n    private int f13;\n    private int f14;\n    private int f15;\n    private int f16;\n    private int f17;\n    private int f18;\n    private int f19;\n    private int f20;\n    private int f21;\n    private int f22;\n    private int f23;\n    private int f24;\n\n    public int method1(Other ext) {\n        if (ext.x > 0) { return ext.y; }\n        return f1;\n    }\n    public int method2(Other ext) {\n        if (ext.y > 0) { return ext.z; }\n        return f2;\n    }\n    public int method3(Other ext) {\n        if (ext.z > 0) { return ext.w; }\n        return f3;\n    }\n    public int method4(Other ext) {\n        if (ext.w > 0) { return ext.v; }\n        return f4;\n    }\n    public int method5(Other ext) {\n        if (ext.v > 0) { return ext.u; }\n        return f5;\n    }\n    public int method6(Other ext) {\n        if (ext.u > 0) { return ext.t; }\n        return f6;\n    }\n    public int method7(Other ext) {\n        if (ext.x > 0) { return ext.y; }\n        return f7;\n    }\n    public int method8(Other ext) {\n        if (ext.y > 0) { return ext.z; }\n        return f8;\n    }\n    public int method9(Other ext) {\n        if (ext.z > 0) { return ext.w; }\n        return f9;\n    }\n    public int method10(Other ext) {\n        if (ext.w > 0) { return ext.v; }\n        return f10;\n    }\n    public int method11(Other ext) {\n        if (ext.v > 0) { return ext.u; }\n        return f11;\n    }\n    public int method12(Other ext) {\n        if (ext.u > 0) { return ext.t; }\n        return f12;\n    }\n    public int method13(Other ext) {\n        if (ext.x > 0) { return ext.y; }\n        return f13;\n    }\n    public int method14(Other ext) {\n        if (ext.y > 0) { return ext.z; }\n        return f14;\n    }\n    public int method15(Other ext) {\n        if (ext.z > 0) { return ext.w; }\n        return f15;\n    }\n    public int method16(Other ext) {\n        if (ext.w > 0) { return ext.v; }\n        return f16;\n    }\n    public int method17(Other ext) {\n        if (ext.v > 0) { return ext.u; }\n        return f17;\n    }\n    public int method18(Other ext) {\n        if (ext.u > 0) { return ext.t; }\n        return f18;\n    }\n    public int method19(Other ext) {\n        if (ext.x > 0) { return ext.y; }\n        return f19;\n    }\n    public int method20(Other ext) {\n        if (ext.y > 0) { return ext.z; }\n        return f20;\n    }\n    public int method21(Other ext) {\n        if (ext.z > 0) { return ext.w; }\n        return f21;\n    }\n    public int method22(Other ext) {\n        if (ext.w > 0) { return ext.v; }\n        return f22;\n    }\n    public int method23(Other ext) {\n        if (ext.v > 0) { return ext.u; }\n        return f23;\n    }\n    public int method24(Other ext) {\n        if (ext.u > 0) { return ext.t; }\n        return f24;\n    }\n}\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.prethink.quality.FindCodeSmells","displayName":"Find code smells","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.CodeSmells","displayName":"Code smells","description":"Detected code smells including God Class, Feature Envy, and Data Class with severity ratings and the metric evidence that triggered detection.","columns":[{"name":"Source path","description":"The path to the source file containing the smell."},{"name":"Class name","description":"The fully qualified name of the class."},{"name":"Method name","description":"The method name, if the smell is method-level (e.g., Feature Envy). Null for class-level smells."},{"name":"Smell type","description":"The type of code smell: GOD_CLASS, FEATURE_ENVY, or DATA_CLASS."},{"name":"Severity","description":"Severity based on how far metrics exceed thresholds: LOW, MEDIUM, HIGH, or CRITICAL."},{"name":"Evidence","description":"The metric values that triggered detection, e.g., 'WMC=52, TCC=0.21, ATFD=8'."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

