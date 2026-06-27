---
title: "Python dependency insight"
sidebar_label: "Python dependency insight"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Python dependency insight"}
  description={"Find direct and transitive Python dependencies matching a package name pattern. Results include dependencies that either directly match or transitively include a matching dependency."}
  fqName={"org.openrewrite.python.search.DependencyInsight"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.search.DependencyInsight"}
  artifact={"org.openrewrite:rewrite-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.search.DependencyInsight"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/search/dependencyinsight.md"}
  moderneOnly
>

<RecipeHeader.Title>Python dependency insight</RecipeHeader.Title>

<RecipeHeader.Description>Find direct and transitive Python dependencies matching a package name pattern. Results include dependencies that either directly match or transitively include a matching dependency.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"packageNamePattern","required":true,"description":"A glob pattern to match Python package names (PEP 503 normalized). Use `*` as a wildcard.","example":"requests*"},{"type":"String","name":"scope","required":false,"description":"Match dependencies in the specified scope. All scopes are searched by default.","example":"project.dependencies"},{"type":"Boolean","name":"onlyDirect","required":false,"description":"If enabled, transitive dependencies will not be considered. All dependencies are searched by default.","example":"true"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.python.search.DependencyInsight","displayName":"Python dependency insight","groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON","requiresConfiguration":true,"cliOptions":" --recipe-option \"packageNamePattern=requests*\" --recipe-option \"scope=project.dependencies\" --recipe-option \"onlyDirect=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.python.table.PythonDependenciesInUse","displayName":"Python dependencies in use","description":"Direct and transitive dependencies in use in Python projects.","columns":[{"name":"Project name","description":"The name of the project that contains the dependency (from pyproject.toml)."},{"name":"Project path","description":"The path to the project."},{"name":"Package name","description":"The name of the Python package."},{"name":"Version","description":"The resolved version of the package."},{"name":"Version constraint","description":"The version constraint as declared in pyproject.toml."},{"name":"Scope","description":"Dependency scope: dependencies, buildRequires, optionalDependencies, or dependencyGroups."},{"name":"Direct","description":"Whether this is a direct dependency (true) or transitive dependency (false)."},{"name":"Count","description":"How many times this dependency appears in the dependency tree."},{"name":"License","description":"The SPDX license identifier of the project, if available."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

