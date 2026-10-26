---
title: "Module has dependency"
sidebar_label: "Module has dependency"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Module has dependency"}
  description={"Searches for Python projects that have a dependency matching the specified package name. Places a `SearchResult` marker on all sources within a project with a matching dependency. A source belongs to the dependency manifest (`pyproject.toml`, `Pipfile`, `setup.cfg`, `setup.py` or `requirements.txt`) in its nearest enclosing directory. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a migration to only projects that use a specific version of a library. If the search result you want is instead just the dependency entry in the manifest, use the `DependencyInsight` recipe instead."}
  fqName={"org.openrewrite.python.search.ModuleHasDependency"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.search.ModuleHasDependency"}
  artifact={"org.openrewrite:rewrite-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.search.ModuleHasDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/search/modulehasdependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Module has dependency</RecipeHeader.Title>

<RecipeHeader.Description>Searches for Python projects that have a dependency matching the specified package name. Places a `SearchResult` marker on all sources within a project with a matching dependency. A source belongs to the dependency manifest (`pyproject.toml`, `Pipfile`, `setup.cfg`, `setup.py` or `requirements.txt`) in its nearest enclosing directory. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a migration to only projects that use a specific version of a library. If the search result you want is instead just the dependency entry in the manifest, use the `DependencyInsight` recipe instead.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"packageNamePattern","required":true,"description":"A glob pattern to match Python package names (PEP 503 normalized). Use `*` as a wildcard.","example":"django*"},{"type":"String","name":"version","required":false,"description":"Match only dependencies with the specified resolved version. Node-style [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) may be used. When a dependency is not resolved, only an exact `==` pin in its constraint is considered. All versions are searched by default.","example":"4.2.x"},{"type":"Boolean","name":"onlyDirect","required":false,"description":"If enabled, transitive dependencies will not be considered. All dependencies are searched by default.","example":"true"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.python.search.ModuleHasDependency","displayName":"Module has dependency","groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON","requiresConfiguration":true,"cliOptions":" --recipe-option \"packageNamePattern=django*\"","optionalCliOptions":" --recipe-option \"version=4.2.x\" --recipe-option \"onlyDirect=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

