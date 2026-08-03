---
title: "Modernize collections"
sidebar_label: "Modernize collections"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/modernizecollections" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Modernize collections"}
  description={"Replace the legacy synchronized types `Hashtable`, `Vector`, `Stack`, and `StringBuffer` with their modern unsynchronized counterparts `HashMap`, `ArrayList`, `Deque`/`ArrayDeque`, and `StringBuilder`. Each replacement is only applied when data flow analysis can prove the instance is a local variable that never escapes its method, so the synchronization it provided is redundant."}
  fqName={"org.openrewrite.staticanalysis.ModernizeCollections"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/static-analysis.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S1149"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.ModernizeCollections"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ModernizeCollections"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/modernizecollections.md"}
>

<RecipeHeader.Title>Modernize collections</RecipeHeader.Title>

<RecipeHeader.Description>Replace the legacy synchronized types `Hashtable`, `Vector`, `Stack`, and `StringBuffer` with their modern unsynchronized counterparts `HashMap`, `ArrayList`, `Deque`/`ArrayDeque`, and `StringBuilder`. Each replacement is only applied when data flow analysis can prove the instance is a local variable that never escapes its method, so the synchronization it provided is redundant.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace `java.util.Hashtable` with `java.util.HashMap`","href":"/user-documentation/recipes/recipe-catalog/staticanalysis/replacehashtablewithhashmap/"},{"name":"Replace `java.util.Vector` with `java.util.ArrayList`","href":"/user-documentation/recipes/recipe-catalog/staticanalysis/replacevectorwitharraylist/"},{"name":"Replace `java.util.Stack` with `java.util.Deque`","href":"/user-documentation/recipes/recipe-catalog/staticanalysis/replacestackwithdeque/"},{"name":"Replace `java.lang.StringBuffer` with `java.lang.StringBuilder`","href":"/user-documentation/recipes/recipe-catalog/staticanalysis/replacestringbufferwithstringbuilder/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.ModernizeCollections","displayName":"Modernize collections","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.staticanalysis.table.LegacySynchronizedTypesNotMigrated","displayName":"Legacy synchronized types not migrated","description":"Instances of a legacy synchronized type (`Hashtable`, `Vector`, `Stack`, `StringBuffer`) that were found but left unchanged because they could not be proven safe to modernize.","columns":[{"name":"Source path","description":"The path to the source file containing the unmigrated reference."},{"name":"Class","description":"The fully qualified name of the class containing the reference."},{"name":"Unmigrated type","description":"The fully qualified name of the legacy synchronized type that was found but not migrated."},{"name":"Reason","description":"Why the instance was left unchanged."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

