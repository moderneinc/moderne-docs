---
title: "Find Java project publications"
sidebar_label: "Find Java project publications"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Java project publications"}
  description={"Report every JavaProject marker occurrence on .java compilation units, including raw nullable publication fields. Retains independent source-set marker cardinality and a row when the project marker is missing, without changing sources. Recorded marker IDs and raw publication payloads never establish unique module identity or authorize ID remapping."}
  fqName={"io.moderne.prethink.FindJavaProjectPublications"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.FindJavaProjectPublications"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.FindJavaProjectPublications"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/findjavaprojectpublications.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Java project publications</RecipeHeader.Title>

<RecipeHeader.Description>Report every JavaProject marker occurrence on .java compilation units, including raw nullable publication fields. Retains independent source-set marker cardinality and a row when the project marker is missing, without changing sources. Recorded marker IDs and raw publication payloads never establish unique module identity or authorize ID remapping.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.prethink.FindJavaProjectPublications","displayName":"Find Java project publications","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.JavaProjectPublications","displayName":"Java project publications","description":"Per-compilation-unit JavaProject marker occurrences, independent source-set scope and raw nullable publication fields. Includes a missing-project row and preserves duplicate occurrences without equating names, payloads or UUIDs with unique module identity.","columns":[{"name":"Source path","description":"Actual .java J.CompilationUnit path; no path normalization."},{"name":"Source file ID","description":"Actual compilation-unit UUID; exact original-input and producer namespace required."},{"name":"Source set marker count","description":"Actual JavaSourceSet occurrence count; equal duplicates count separately."},{"name":"Source set ID","description":"Actual sole JavaSourceSet UUID; null when missing or multiple, independently of project marker occurrences."},{"name":"Source set","description":"Actual sole JavaSourceSet name; null/empty/whitespace preserved; null when missing or multiple."},{"name":"Project marker count","description":"Actual JavaProject marker occurrence count for this CU, including equal or same-ID repeats."},{"name":"Project marker index","description":"Zero-based occurrence ordinal among JavaProject markers in original marker-list order; transport occurrence position, not AST/declaration identity; null on missing-marker row."},{"name":"Project ID","description":"Actual current JavaProject occurrence UUID; retain it even when projectMarkerCount>1. Null only on missing-marker row for normal attributed marker contract."},{"name":"Project name","description":"Actual current JavaProject occurrence name; preserve raw null/empty/whitespace; null on missing-marker row."},{"name":"Publication present","description":"null=no JavaProject occurrence, false=actual occurrence publication absent, true=actual Publication object exists even when all GAV fields are null/empty."},{"name":"Publication group ID","description":"Actual Publication.groupId, with raw null/empty/whitespace; null when marker/publication absent."},{"name":"Publication artifact ID","description":"Actual Publication.artifactId, with raw null/empty/whitespace; null when marker/publication absent."},{"name":"Publication version","description":"Actual Publication.version, with raw null/empty/whitespace; null when marker/publication absent."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

