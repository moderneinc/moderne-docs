---
title: "Add Python dependency"
sidebar_label: "Add Python dependency"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add Python dependency"}
  description={"Add a dependency to a Python project. Supports `pyproject.toml` (with scope/group targeting), `requirements.txt`, and `Pipfile`. When the matching package manager (`uv` or `pipenv`) is available, the corresponding lock file (`uv.lock` or `Pipfile.lock`) is regenerated. Not safe to use as a precondition: invokes the package manager and publishes per-project state shared with other dependency recipes."}
  fqName={"org.openrewrite.python.AddDependency"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.AddDependency"}
  artifact={"org.openrewrite:rewrite-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.AddDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/adddependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Add Python dependency</RecipeHeader.Title>

<RecipeHeader.Description>Add a dependency to a Python project. Supports `pyproject.toml` (with scope/group targeting), `requirements.txt`, and `Pipfile`. When the matching package manager (`uv` or `pipenv`) is available, the corresponding lock file (`uv.lock` or `Pipfile.lock`) is regenerated. Not safe to use as a precondition: invokes the package manager and publishes per-project state shared with other dependency recipes.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"packageName","required":true,"description":"The PyPI package name to add.","example":"requests"},{"type":"String","name":"version","required":false,"description":"The PEP 508 version constraint (e.g., `>=2.28.0`).","example":">=2.28.0"},{"type":"String","name":"scope","required":false,"description":"The dependency scope to add to. For pyproject.toml this targets a specific TOML section. For requirements files, `null` matches all files, empty string matches only `requirements.txt`, and a value like `dev` matches `requirements-dev.txt`. Defaults to `project.dependencies`.","example":"project.dependencies"},{"type":"String","name":"groupName","required":false,"description":"The group name, required when scope is `project.optional-dependencies` or `dependency-groups`.","example":"dev"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.python.AddDependency","displayName":"Add Python dependency","groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON","requiresConfiguration":true,"cliOptions":" --recipe-option \"packageName=requests\" --recipe-option \"version=>=2.28.0\" --recipe-option \"scope=project.dependencies\" --recipe-option \"groupName=dev\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

