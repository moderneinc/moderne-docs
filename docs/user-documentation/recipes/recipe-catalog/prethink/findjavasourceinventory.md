---
title: "Find Java source inventory"
sidebar_label: "Find Java source inventory"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Java source inventory"}
  description={"Report every SourceFile whose raw source path ends exactly in .java, including parse errors and other source types. Retains actual source-file and sole project/source-set marker identities and exact marker cardinalities without changing sources. Scope state describes recorded markers only, not runtime visibility or successful compilation. Identities are opaque and original-model/run-local; project names and paths never supply missing scope. Semantic Java joins additionally require a unique JAVA_COMPILATION_UNIT occurrence in the same original payload."}
  fqName={"io.moderne.prethink.FindJavaSourceInventory"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.FindJavaSourceInventory"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.FindJavaSourceInventory"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/findjavasourceinventory.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Java source inventory</RecipeHeader.Title>

<RecipeHeader.Description>Report every SourceFile whose raw source path ends exactly in .java, including parse errors and other source types. Retains actual source-file and sole project/source-set marker identities and exact marker cardinalities without changing sources. Scope state describes recorded markers only, not runtime visibility or successful compilation. Identities are opaque and original-model/run-local; project names and paths never supply missing scope. Semantic Java joins additionally require a unique JAVA_COMPILATION_UNIT occurrence in the same original payload.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.prethink.FindJavaSourceInventory","displayName":"Find Java source inventory","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.JavaSourceInventory","displayName":"Java source inventory","description":"Every SourceFile occurrence whose raw path ends exactly in .java, including parse errors and other source types. Actual source/marker identities are opaque and local to the original model/run. No path/name-based scope or visibility inference; duplicate paths are not unique joins.","columns":[{"name":"Source path","description":"Raw SourceFile.getSourcePath().toString(), ending case-sensitively in .java. Occurrences are never deduplicated; duplicate paths make a path-only join ambiguous."},{"name":"Source file ID","description":"Actual SourceFile.getId() UUID string. Opaque original-model/run-local identity; not a stable identity across expanded aliases or runs."},{"name":"Source kind","description":"JAVA_COMPILATION_UNIT for an actual J.CompilationUnit, PARSE_ERROR for an actual org.openrewrite.tree.ParseError, or OTHER for any other SourceFile. Semantic Java joins require JAVA_COMPILATION_UNIT."},{"name":"Project marker count","description":"Exact number of actual JavaProject markers in the top-level SourceFile markers, including duplicates with equal IDs, names or values."},{"name":"Project ID","description":"Actual sole JavaProject.getId() UUID string, or SQL null unless the project marker count is exactly one. Opaque original-model/run-local identity; never inferred."},{"name":"Project name","description":"Actual sole JavaProject.getProjectName(), preserving null or empty. SQL null when no sole project marker exists. Descriptive only; never a key or identity fallback."},{"name":"Source set marker count","description":"Exact number of actual JavaSourceSet markers in the top-level SourceFile markers, including duplicates with equal IDs, names or values."},{"name":"Source set ID","description":"Actual sole JavaSourceSet.getId() UUID string, or SQL null unless the source-set marker count is exactly one. Opaque original-model/run-local identity; never inferred."},{"name":"Source set","description":"Actual sole JavaSourceSet.getName(), preserving empty. SQL null when no sole source-set marker exists; never inferred from repository, path, module or publication."},{"name":"Scope state","description":"AMBIGUOUS if either marker count exceeds one; otherwise KNOWN only with exactly one project and one source-set marker and a nonnull/nonempty source-set name; INCOMPLETE otherwise. Describes recorded markers, not runtime visibility or compilation success."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

