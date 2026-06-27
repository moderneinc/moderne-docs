---
title: "Find Go unmocked external calls"
sidebar_label: "Find Go unmocked external calls"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Go unmocked external calls"}
  description={"Detect net/http, os.Open, net.Dial, sql.Open calls directly in Go tests."}
  fqName={"io.moderne.prethink.testing.quality.FindGoUnmockedExternalCalls"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.testing.quality.FindGoUnmockedExternalCalls"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.testing.quality.FindGoUnmockedExternalCalls"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findgounmockedexternalcalls.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Go unmocked external calls</RecipeHeader.Title>

<RecipeHeader.Description>Detect net/http, os.Open, net.Dial, sql.Open calls directly in Go tests.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.prethink.testing.quality.FindGoUnmockedExternalCalls","displayName":"Find Go unmocked external calls","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.TestQualityIssues","displayName":"Test quality issues","description":"Issues found in test code that may cause flakiness, silent failures, or maintenance burden. Each row includes a rich evidence message with what was found, why it matters, and how to fix it.","columns":[{"name":"Source path","description":"Path to the test source file."},{"name":"Class name","description":"Fully qualified class name of the test class."},{"name":"Method name","description":"Test method name, if the issue is method-level. Null for class-level issues."},{"name":"Issue type","description":"Category of the issue: static wait, shared mutable state, unmocked http, unmocked db, unmocked network, java assert in test, swallowed exception, missing assertion, hardcoded date, timing assertion, hardcoded port/path, missing annotation, skipped without reason, broad matcher, ignored error, deprecated test api, magic number, poor test name, prototype mutation, empty catch."},{"name":"Severity","description":"Issue severity: high, medium, or low."},{"name":"Language","description":"Source language: java, javascript, or python."},{"name":"Evidence","description":"What was found, why it matters, and how to fix it."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

