---
title: "Go dependency insight"
sidebar_label: "Go dependency insight"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Go dependency insight"}
  description={"Find direct and transitive Go module dependencies matching a module path pattern. Results include dependencies that either directly match or transitively include a matching dependency."}
  fqName={"org.openrewrite.golang.search.DependencyInsight"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.golang.search.DependencyInsight"}
  artifact={"org.openrewrite:rewrite-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.search.DependencyInsight"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/search/dependencyinsight.md"}
  moderneOnly
>

<RecipeHeader.Title>Go dependency insight</RecipeHeader.Title>

<RecipeHeader.Description>Find direct and transitive Go module dependencies matching a module path pattern. Results include dependencies that either directly match or transitively include a matching dependency.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"modulePattern","required":true,"description":"A glob pattern to match Go module paths. Use `*` as a wildcard.","example":"github.com/google/*"},{"type":"String","name":"version","required":false,"description":"Match only dependencies with the specified version. An exact version or a version range (see the [version selector syntax](https://docs.openrewrite.org/reference/dependency-version-selectors)) may be used. All versions are searched by default.","example":"1.x"},{"type":"Boolean","name":"onlyDirect","required":false,"description":"If enabled, transitive dependencies will not be considered. All dependencies are searched by default.","example":"true"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.golang.search.DependencyInsight","displayName":"Go dependency insight","groupId":"org.openrewrite","artifactId":"rewrite-go","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GO","requiresConfiguration":true,"cliOptions":" --recipe-option \"modulePattern=github.com/google/*\" --recipe-option \"version=1.x\" --recipe-option \"onlyDirect=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.golang.table.GoDependenciesInUse","displayName":"Go dependencies in use","description":"Direct and transitive dependencies in use in Go modules.","columns":[{"name":"Module path","description":"The module path of the project that contains the dependency (from the `module` directive in go.mod)."},{"name":"Project path","description":"The path to the go.mod file."},{"name":"Dependency module","description":"The module path of the Go dependency."},{"name":"Version","description":"The resolved version of the dependency."},{"name":"Version constraint","description":"The version as declared in the `require` directive in go.mod."},{"name":"Direct","description":"Whether this is a direct dependency (true) or a transitive dependency (false)."},{"name":"Count","description":"How many times this dependency appears in the dependency graph."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

