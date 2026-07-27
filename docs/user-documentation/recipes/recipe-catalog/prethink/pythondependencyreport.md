---
title: "Python dependency report"
sidebar_label: "Python dependency report"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Python dependency report"}
  description={"Read the dependency graph attached to Python manifests (pyproject.toml, Pipfile, requirements.txt, setup.cfg) by the parser and emit rows into the shared dependency-list-report table, mirroring the JVM dependency inventory. Includes declared (direct) dependencies and, when a lock file resolved them, transitive dependencies with concrete versions."}
  fqName={"io.moderne.prethink.PythonDependencyReport"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.PythonDependencyReport"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.PythonDependencyReport"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/pythondependencyreport.md"}
  moderneOnly
>

<RecipeHeader.Title>Python dependency report</RecipeHeader.Title>

<RecipeHeader.Description>Read the dependency graph attached to Python manifests (pyproject.toml, Pipfile, requirements.txt, setup.cfg) by the parser and emit rows into the shared dependency-list-report table, mirroring the JVM dependency inventory. Includes declared (direct) dependencies and, when a lock file resolved them, transitive dependencies with concrete versions.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.prethink.PythonDependencyReport","displayName":"Python dependency report","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.dependencies.table.DependencyListReport","displayName":"Dependency report","description":"Lists all Gradle and Maven dependencies","columns":[{"name":"Build tool","description":"The build tool used to manage dependencies (Gradle or Maven)."},{"name":"Path","description":"Path to the build file declaring the dependency"},{"name":"Group id","description":"The Group ID of the Gradle project or Maven module requesting the dependency."},{"name":"Artifact id","description":"The Artifact ID of the Gradle project or Maven module requesting the dependency."},{"name":"Version","description":"The version of Gradle project or Maven module requesting the dependency."},{"name":"Dependency group id","description":"The Group ID of the dependency."},{"name":"Dependency artifact id","description":"The Artifact ID of the dependency."},{"name":"Dependency version","description":"The version of the dependency."},{"name":"Direct Dependency","description":"When `true` the project directly depends on the dependency. When `false` the project depends on the dependency transitively through at least one direct dependency."},{"name":"Resolution failure","description":"The reason why the dependency could not be resolved. Blank when resolution was not attempted."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

