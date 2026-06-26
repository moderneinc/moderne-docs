---
title: "Upgrade npm dependency version"
sidebar_label: "Upgrade npm dependency version"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/javascript/upgradedependencyversion" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade npm dependency version"}
  description={"Upgrades the version constraint of matching npm dependencies in `package.json` and regenerates the lock file by running the package manager. Matching is by exact package name or glob pattern. v1 uses simple string inequality for the upgrade check (always overwrites). A future version will use semver to skip already-up-to-date constraints. Not safe to use as a precondition: invokes the package manager and publishes per-project state shared with other dependency recipes."}
  fqName={"org.openrewrite.javascript.UpgradeDependencyVersion"}
  languages={["JavaScript"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-javascript/src/main/java/org/openrewrite/javascript/UpgradeDependencyVersion.java"}
/>

<RecipeHeader
  displayName={"Upgrade npm dependency version"}
  description={"Upgrades the version constraint of matching npm dependencies in `package.json` and regenerates the lock file by running the package manager. Matching is by exact package name or glob pattern. v1 uses simple string inequality for the upgrade check (always overwrites). A future version will use semver to skip already-up-to-date constraints. Not safe to use as a precondition: invokes the package manager and publishes per-project state shared with other dependency recipes."}
  type={"Single recipe"}
  languages={["JavaScript"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.javascript.UpgradeDependencyVersion"}
  artifact={"org.openrewrite:rewrite-javascript"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.javascript.UpgradeDependencyVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/javascript/upgradedependencyversion.md"}
/>

<OptionsTable options={[{"type":"String","name":"packageName","required":false,"description":"Exact package name to match. Mutually exclusive with `packagePattern`; at least one is required.","example":"lodash"},{"type":"String","name":"packagePattern","required":false,"description":"Glob pattern matching package names (e.g., `@types/*`). Mutually exclusive with `packageName`; at least one is required.","example":"@types/*"},{"type":"String","name":"newVersion","required":true,"description":"The new version constraint to set on matching dependencies.","example":"^5.0.0"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.javascript.UpgradeDependencyVersion","displayName":"Upgrade npm dependency version","groupId":"org.openrewrite","artifactId":"rewrite-javascript","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVASCRIPT","requiresConfiguration":true,"cliOptions":" --recipe-option \"packageName=lodash\" --recipe-option \"packagePattern='@types/*'\" --recipe-option \"newVersion=^5.0.0\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

