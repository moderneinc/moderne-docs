---
title: "Find method complexity"
sidebar_label: "Find method complexity"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find method complexity"}
  description={"Compute per-method code quality metrics including cyclomatic complexity, cognitive complexity, max nesting depth, line count, parameter count, ABC metric, and Halstead measures."}
  fqName={"io.moderne.prethink.quality.FindMethodComplexity"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find method complexity"}
  description={"Compute per-method code quality metrics including cyclomatic complexity, cognitive complexity, max nesting depth, line count, parameter count, ABC metric, and Halstead measures."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.quality.FindMethodComplexity"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.quality.FindMethodComplexity"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/quality/findmethodcomplexity.md"}
  moderneOnly
/>

<ExampleList examples={[{"unchanged":{"language":"java","code":"package com.example;\n\npublic class Simple {\n    public String doWork() {\n        return \"done\";\n    }\n}\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.prethink.quality.FindMethodComplexity","displayName":"Find method complexity","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.MethodQualityMetrics","displayName":"Method quality metrics","description":"Per-method code quality metrics including cyclomatic complexity, cognitive complexity, nesting depth, Halstead measures, and ABC metric.","columns":[{"name":"Source path","description":"The path to the source file containing the method."},{"name":"Class name","description":"The fully qualified name of the containing class."},{"name":"Method name","description":"The simple name of the method."},{"name":"Method signature","description":"The full method signature including parameter types."},{"name":"Cyclomatic complexity","description":"Number of linearly independent paths through the method. 1-10 low, 11-20 moderate, 21-50 high, 50+ very high."},{"name":"Cognitive complexity","description":"Weighted complexity penalizing nesting depth and flow-breaking structures."},{"name":"Max nesting depth","description":"Maximum depth of nested control structures."},{"name":"Line count","description":"Number of lines in the method body."},{"name":"Parameter count","description":"Number of parameters the method accepts."},{"name":"ABC score","description":"ABC metric magnitude: sqrt(A^2 + B^2 + C^2) where A=assignments, B=branches (calls), C=conditions."},{"name":"Assignments","description":"Number of assignment operations (the A in ABC metric)."},{"name":"Branches","description":"Number of method/function calls (the B in ABC metric)."},{"name":"Conditions","description":"Number of boolean conditions (the C in ABC metric)."},{"name":"Halstead volume","description":"Information content of the method: N * log2(n) where N=total operators+operands, n=distinct operators+operands."},{"name":"Halstead difficulty","description":"Error proneness: (n1/2) * (N2/n2) where n1=distinct operators, N2=total operands, n2=distinct operands."},{"name":"Halstead estimated bugs","description":"Estimated number of delivered bugs: E^(2/3) / 3000 where E = difficulty * volume."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

