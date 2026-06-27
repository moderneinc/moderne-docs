---
title: "Find package quality metrics"
sidebar_label: "Find package quality metrics"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find package quality metrics"}
  description={"Compute per-package architectural quality metrics including afferent/efferent coupling, instability, abstractness, distance from the main sequence, and dependency cycle detection using Tarjan's strongly connected components algorithm."}
  fqName={"io.moderne.prethink.quality.FindPackageMetrics"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.quality.FindPackageMetrics"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.quality.FindPackageMetrics"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/quality/findpackagemetrics.md"}
  moderneOnly
>

<RecipeHeader.Title>Find package quality metrics</RecipeHeader.Title>

<RecipeHeader.Description>Compute per-package architectural quality metrics including afferent/efferent coupling, instability, abstractness, distance from the main sequence, and dependency cycle detection using Tarjan's strongly connected components algorithm.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"unchanged":{"language":"java","code":"package com.example.solo;\n\npublic class Standalone {\n    public String greet() {\n        return \"hello\";\n    }\n}\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.prethink.quality.FindPackageMetrics","displayName":"Find package quality metrics","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.PackageQualityMetrics","displayName":"Package quality metrics","description":"Per-package architectural metrics including afferent/efferent coupling, instability, abstractness, distance from main sequence, and dependency cycle membership.","columns":[{"name":"Package name","description":"The fully qualified package name."},{"name":"Afferent coupling (Ca)","description":"Number of external packages that depend on this package."},{"name":"Efferent coupling (Ce)","description":"Number of external packages this package depends on."},{"name":"Instability","description":"Ce / (Ce + Ca). 0.0 = maximally stable, 1.0 = maximally unstable."},{"name":"Abstractness","description":"Ratio of abstract classes + interfaces to total classes in the package."},{"name":"Distance from main sequence","description":"|A + I - 1|. 0.0 = ideal balance, high = Zone of Pain or Zone of Uselessness."},{"name":"In cycle","description":"Whether this package is part of a dependency cycle."},{"name":"Cycle members","description":"Comma-separated list of packages in the same dependency cycle, or null if not in a cycle."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

