---
title: "Find unconditional WebFlux response commit calls (CVE-2026-22732)"
sidebar_label: "Find unconditional WebFlux response commit calls (CVE-2026-22732)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find unconditional WebFlux response commit calls (CVE-2026-22732)

**io.moderne.recipe.cve202622732.FindHttpResponseContentLengthOrFlushBuffer**

```
Detects WebFlux calls that commit a `ServerHttpResponse` outside the lazy header-writing path: `writeWith(..)`, `writeAndFlushWith(..)`, `setComplete()`, and `HttpHeaders.setContentLength(long)`. Under CVE-2026-22732 these patterns cause Spring Security's lazy-added security headers to be dropped. The sibling recipe `FindHttpResponseContentLengthHeader` covers the servlet `setHeader` / `setIntHeader` / `addIntHeader` case. In addition to marking Java sinks, attaches a {@code SearchResult} marker to every source file in the affected project so this recipe can be used as a declarative precondition for build-level recipes.
```


## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Find CVE-2026-22732 (Spring Security header suppression)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/recipe/cve202622732/findspringsecurityheadersuppression)


## Usage

<RunRecipe
  recipeName="io.moderne.recipe.cve202622732.FindHttpResponseContentLengthOrFlushBuffer"
  displayName="Find unconditional WebFlux response commit calls (CVE-2026-22732)"
  groupId="io.moderne.recipe"
  artifactId="rewrite-cve-2026-22732"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_CVE_2026_22732"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.recipe.cve202622732.FindHttpResponseContentLengthOrFlushBuffer" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.recipe.cve202622732.table.HttpResponseDirectCommitTable" label="HttpResponseDirectCommitTable">

### WebFlux response direct-commit findings
**io.moderne.recipe.cve202622732.table.HttpResponseDirectCommitTable**

_Rows for `ServerHttpResponse` / `HttpHeaders` calls that commit a WebFlux response outside the lazy header-writing path (writeWith, writeAndFlushWith, setComplete, HttpHeaders.setContentLength)._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file the finding is in. |
| Line | The line number of the invocation. |
| Enclosing class | The fully-qualified enclosing class name, if available. |
| Enclosing method | The enclosing method name, if available. |
| Kind | One of WEBFLUX_WRITE_WITH, WEBFLUX_WRITE_AND_FLUSH_WITH, WEBFLUX_SET_COMPLETE, HTTP_HEADERS_SET_CONTENT_LENGTH. |
| Invocation | The source text of the flagged invocation. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
