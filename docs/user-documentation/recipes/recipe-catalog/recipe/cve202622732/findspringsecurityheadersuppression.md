---
title: "Find CVE-2026-22732 (Spring Security header suppression)"
sidebar_label: "Find CVE-2026-22732 (Spring Security header suppression)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find CVE-2026-22732 (Spring Security header suppression)"}
  description={"Detects code susceptible to CVE-2026-22732, where setting `Content-Length` via `HttpServletResponse.setHeader` / `setIntHeader` / `addIntHeader` (or the WebFlux equivalents) bypasses Spring Security's `OnCommittedResponseWrapper`, letting the container commit the response before the lazy header-writing filter runs and silently dropping security headers (X-Frame-Options, X-Content-Type-Options, Cache-Control, etc.). Also emits one data-table row per project recording the resolved Spring Security version."}
  fqName={"io.moderne.recipe.cve202622732.FindSpringSecurityHeaderSuppression"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find CVE-2026-22732 (Spring Security header suppression)"}
  description={"Detects code susceptible to CVE-2026-22732, where setting `Content-Length` via `HttpServletResponse.setHeader` / `setIntHeader` / `addIntHeader` (or the WebFlux equivalents) bypasses Spring Security's `OnCommittedResponseWrapper`, letting the container commit the response before the lazy header-writing filter runs and silently dropping security headers (X-Frame-Options, X-Content-Type-Options, Cache-Control, etc.). Also emits one data-table row per project recording the resolved Spring Security version."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.recipe.cve202622732.FindSpringSecurityHeaderSuppression"}
  artifact={"io.moderne.recipe:rewrite-cve-2026-22732"}
  appLink={"https://app.moderne.io/recipes/io.moderne.recipe.cve202622732.FindSpringSecurityHeaderSuppression"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/recipe/cve202622732/findspringsecurityheadersuppression.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Find unconditional WebFlux response commit calls (CVE-2026-22732)","href":"recipe/cve202622732/findhttpresponsecontentlengthorflushbuffer"},{"name":"Find `Content-Length` header writes on `HttpServletResponse` (CVE-2026-22732)","href":"recipe/cve202622732/findhttpresponsecontentlengthheader"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.recipe.cve202622732.FindSpringSecurityHeaderSuppression","displayName":"Find CVE-2026-22732 (Spring Security header suppression)","groupId":"io.moderne.recipe","artifactId":"rewrite-cve-2026-22732","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_CVE_2026_22732","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.recipe.cve202622732.table.SpringSecurityVersionByProject","displayName":"Spring Security version by project","description":"One row per project with a detected Spring Security dependency. Customers join this with the taint-flow / direct-commit findings to see the Spring Security version in effect for each hit.","columns":[{"name":"Project","description":"A stable identifier for the project (groupId:artifactId or Gradle project path)."},{"name":"Group","description":"The dependency groupId (typically `org.springframework.security`)."},{"name":"Artifact","description":"The dependency artifactId (e.g. `spring-security-web`)."},{"name":"Version","description":"The resolved version string."},{"name":"Affected","description":"Whether the resolved version falls in a CVE-2026-22732-affected range per the Spring advisory."}]},{"name":"io.moderne.recipe.cve202622732.table.HttpResponseDirectCommitTable","displayName":"WebFlux response direct-commit findings","description":"Rows for `ServerHttpResponse` / `HttpHeaders` calls that commit a WebFlux response outside the lazy header-writing path (writeWith, writeAndFlushWith, setComplete, HttpHeaders.setContentLength).","columns":[{"name":"Source file","description":"The source file the finding is in."},{"name":"Line","description":"The line number of the invocation."},{"name":"Enclosing class","description":"The fully-qualified enclosing class name, if available."},{"name":"Enclosing method","description":"The enclosing method name, if available."},{"name":"Kind","description":"One of WEBFLUX_WRITE_WITH, WEBFLUX_WRITE_AND_FLUSH_WITH, WEBFLUX_SET_COMPLETE, HTTP_HEADERS_SET_CONTENT_LENGTH."},{"name":"Invocation","description":"The source text of the flagged invocation."}]},{"name":"org.openrewrite.analysis.java.taint.table.TaintFlowTable","displayName":"Taint flow","description":"Records taint flows from sources to sinks with their taint types.","columns":[{"name":"Source file","description":"The source file that the method call occurred in."},{"name":"Source line","description":"The line number where the taint source is located."},{"name":"Source","description":"The source code where taint originates."},{"name":"Sink line","description":"The line number where the taint sink is located."},{"name":"Sink","description":"The sink code where taint flows to."},{"name":"Taint type","description":"The taint type that matched at the sink."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

