---
title: "Find FastAPI endpoints"
sidebar_label: "Find FastAPI endpoints"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find FastAPI endpoints"}
  description={"Identify REST/HTTP endpoints in FastAPI applications. Detects @app.get(), @router.post(), and similar route decorator patterns."}
  fqName={"io.moderne.prethink.calm.FindFastAPIEndpoints"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find FastAPI endpoints"}
  description={"Identify REST/HTTP endpoints in FastAPI applications. Detects @app.get(), @router.post(), and similar route decorator patterns."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.calm.FindFastAPIEndpoints"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.calm.FindFastAPIEndpoints"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/calm/findfastapiendpoints.md"}
  moderneOnly
/>

<ExampleList examples={[{"unchanged":{"language":"pyproject","code":"[project]\nname = \"test-app\"\nversion = \"0.1.0\"\ndependencies = [\"fastapi>=0.100\"]\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.prethink.calm.FindFastAPIEndpoints","displayName":"Find FastAPI endpoints","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.prethink.table.ServiceEndpoints","displayName":"Service endpoints","description":"REST/HTTP endpoints exposed by the application.","columns":[{"name":"Entity ID","description":"Unique identifier for this endpoint entity (format: endpoint:{className}#{methodSignature})."},{"name":"Source path","description":"The path to the source file containing the endpoint."},{"name":"Service class","description":"The fully qualified name of the controller or resource class."},{"name":"Method name","description":"The name of the endpoint method."},{"name":"HTTP method","description":"The HTTP method (GET, POST, PUT, DELETE, PATCH, etc.)."},{"name":"Path","description":"The URL path pattern for the endpoint."},{"name":"Produces","description":"Content types the endpoint produces (e.g., application/json)."},{"name":"Consumes","description":"Content types the endpoint consumes (e.g., application/json)."},{"name":"Framework","description":"The web framework used (Spring, JAX-RS, Micronaut, Quarkus)."},{"name":"Method signature","description":"The full method signature for linking to method descriptions."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

