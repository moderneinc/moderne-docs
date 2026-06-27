---
title: "Find unconditional WebFlux response commit calls (CVE-2026-22732)"
sidebar_label: "Find unconditional WebFlux response commit calls (CVE-2026-22732)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find unconditional WebFlux response commit calls (CVE-2026-22732)"}
  description={"Detects WebFlux calls that commit a `ServerHttpResponse` outside the lazy header-writing path: `writeWith(..)`, `writeAndFlushWith(..)`, `setComplete()`, and `HttpHeaders.setContentLength(long)`. Under CVE-2026-22732 these patterns cause Spring Security's lazy-added security headers to be dropped. The sibling recipe `FindHttpResponseContentLengthHeader` covers the servlet `setHeader` / `setIntHeader` / `addIntHeader` case. In addition to marking Java sinks, attaches a {@code SearchResult} marker to every source file in the affected project so this recipe can be used as a declarative precondition for build-level recipes."}
  fqName={"io.moderne.recipe.cve202622732.FindHttpResponseContentLengthOrFlushBuffer"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.recipe.cve202622732.FindHttpResponseContentLengthOrFlushBuffer"}
  artifact={"io.moderne.recipe:rewrite-cve-2026-22732"}
  appLink={"https://app.moderne.io/recipes/io.moderne.recipe.cve202622732.FindHttpResponseContentLengthOrFlushBuffer"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/recipe/cve202622732/findhttpresponsecontentlengthorflushbuffer.md"}
  moderneOnly
>

<RecipeHeader.Title>Find unconditional WebFlux response commit calls (CVE-2026-22732)</RecipeHeader.Title>

<RecipeHeader.Description>Detects WebFlux calls that commit a `ServerHttpResponse` outside the lazy header-writing path: `writeWith(..)`, `writeAndFlushWith(..)`, `setComplete()`, and `HttpHeaders.setContentLength(long)`. Under CVE-2026-22732 these patterns cause Spring Security's lazy-added security headers to be dropped. The sibling recipe `FindHttpResponseContentLengthHeader` covers the servlet `setHeader` / `setIntHeader` / `addIntHeader` case. In addition to marking Java sinks, attaches a &#123;@code SearchResult} marker to every source file in the affected project so this recipe can be used as a declarative precondition for build-level recipes.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.recipe.cve202622732.FindHttpResponseContentLengthOrFlushBuffer","displayName":"Find unconditional WebFlux response commit calls (CVE-2026-22732)","groupId":"io.moderne.recipe","artifactId":"rewrite-cve-2026-22732","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_CVE_2026_22732","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.recipe.cve202622732.table.HttpResponseDirectCommitTable","displayName":"WebFlux response direct-commit findings","description":"Rows for `ServerHttpResponse` / `HttpHeaders` calls that commit a WebFlux response outside the lazy header-writing path (writeWith, writeAndFlushWith, setComplete, HttpHeaders.setContentLength).","columns":[{"name":"Source file","description":"The source file the finding is in."},{"name":"Line","description":"The line number of the invocation."},{"name":"Enclosing class","description":"The fully-qualified enclosing class name, if available."},{"name":"Enclosing method","description":"The enclosing method name, if available."},{"name":"Kind","description":"One of WEBFLUX_WRITE_WITH, WEBFLUX_WRITE_AND_FLUSH_WITH, WEBFLUX_SET_COMPLETE, HTTP_HEADERS_SET_CONTENT_LENGTH."},{"name":"Invocation","description":"The source text of the flagged invocation."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

