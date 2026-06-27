---
title: "Create TOML file"
sidebar_label: "Create TOML file"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/toml/createtomlfile" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Create TOML file"}
  description={"Create a new TOML file."}
  fqName={"org.openrewrite.toml.CreateTomlFile"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-toml/src/main/java/org/openrewrite/toml/CreateTomlFile.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.toml.CreateTomlFile"}
  artifact={"org.openrewrite:rewrite-toml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.toml.CreateTomlFile"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/toml/createtomlfile.md"}
>

<RecipeHeader.Title>Create TOML file</RecipeHeader.Title>

<RecipeHeader.Description>Create a new TOML file.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"relativeFileName","required":true,"description":"File path of the new file.","example":"pyproject.toml"},{"type":"String","name":"fileContents","required":false,"description":"Multiline text content for the file.","example":"[tool.poetry]\nname = \"my-project\"\nversion = \"0.1.0\""},{"type":"String","name":"fileContentsUrl","required":false,"description":"URL to fetch the TOML file contents from a remote source.","example":"https://raw.githubusercontent.com/example/repo/main/pyproject.toml"},{"type":"Boolean","name":"overwriteExisting","required":false,"description":"If there is an existing file, should it be overwritten?"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"relativeFileName","value":"pyproject.toml"},{"parameter":"fileContents","value":"[tool.poetry]\nname = \"my-project\"\nversion = \"0.1.0\"\ndescription = \"A sample project\"\n"},{"parameter":"fileContentsUrl","value":"null"},{"parameter":"overwriteExisting","value":"null"}],"variants":[{"language":"toml","before":"","after":"[tool.poetry]\nname = \"my-project\"\nversion = \"0.1.0\"\ndescription = \"A sample project\"\n","newFile":true}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.toml.CreateTomlFile","displayName":"Create TOML file","groupId":"org.openrewrite","artifactId":"rewrite-toml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_TOML","requiresConfiguration":true,"cliOptions":" --recipe-option \"relativeFileName=pyproject.toml\" --recipe-option \"fileContents=>\n        [tool.poetry]\n        name = \"my-project\"\n        version = \"0.1.0\"\" --recipe-option \"fileContentsUrl=https://raw.githubusercontent.com/example/repo/main/pyproject.toml\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

