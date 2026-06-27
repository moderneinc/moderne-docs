---
title: "Show Git source control metadata"
sidebar_label: "Show Git source control metadata"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/core/findgitprovenance" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Show Git source control metadata"}
  description={"List out the contents of each unique `GitProvenance` marker in the set of source files. When everything is working correctly, exactly one such marker should be printed as all source files are expected to come from the same repository / branch / commit hash."}
  fqName={"org.openrewrite.FindGitProvenance"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/FindGitProvenance.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.FindGitProvenance"}
  artifact={"org.openrewrite:rewrite-core"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.FindGitProvenance"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/core/findgitprovenance.md"}
>

<RecipeHeader.Title>Show Git source control metadata</RecipeHeader.Title>

<RecipeHeader.Description>List out the contents of each unique `GitProvenance` marker in the set of source files. When everything is working correctly, exactly one such marker should be printed as all source files are expected to come from the same repository / branch / commit hash.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.FindGitProvenance","displayName":"Show Git source control metadata","groupId":"org.openrewrite","artifactId":"rewrite-core","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_CORE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.DistinctGitProvenance","displayName":"Distinct Git Provenance","description":"List out the contents of each unique `GitProvenance` marker in the set of source files. When everything is working correctly, exactly one such marker should be printed as all source files are expected to come from the same repository / branch / commit hash.","columns":[{"name":"Origin","description":"The URL of the git remote."},{"name":"Branch","description":"The branch that was checked out at the time the source file was parsed."},{"name":"Changeset","description":"The commit hash of the changeset that was checked out."},{"name":"AutoCRLF","description":"The value of the `core.autocrlf` git config setting."},{"name":"EOL","description":"The value of the `core.eol` git config setting."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

