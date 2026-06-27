---
title: "Find committers on repositories"
sidebar_label: "Find committers on repositories"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/search/findcommitters" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find committers on repositories"}
  description={"List the committers on a repository."}
  fqName={"org.openrewrite.search.FindCommitters"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/search/FindCommitters.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.search.FindCommitters"}
  artifact={"org.openrewrite:rewrite-core"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.search.FindCommitters"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/search/findcommitters.md"}
>

<RecipeHeader.Title>Find committers on repositories</RecipeHeader.Title>

<RecipeHeader.Description>List the committers on a repository.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fromDate","required":false,"description":"Optional. Take into account only commits since this date (inclusive). Default will be the entire history.","example":"2023-01-01"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.search.FindCommitters","displayName":"Find committers on repositories","groupId":"org.openrewrite","artifactId":"rewrite-core","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_CORE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.DistinctCommitters","displayName":"Repository committers","description":"The distinct set of committers per repository.","columns":[{"name":"Name","description":"The name of the committer."},{"name":"Email","description":"The email of the committer."},{"name":"Last commit","description":"The date of this committer's last commit. Null when only committer identities were collected, without per-day commit detail."},{"name":"Number of commits","description":"The number of commits made by this committer."}]},{"name":"org.openrewrite.table.CommitsByDay","displayName":"Commits by day","description":"The commit activity by day by committer.","columns":[{"name":"Name","description":"The name of the committer."},{"name":"Email","description":"The email of the committer."},{"name":"Date","description":"The date of the day."},{"name":"Number of commits","description":"The number of commits made by this committer on this day."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

