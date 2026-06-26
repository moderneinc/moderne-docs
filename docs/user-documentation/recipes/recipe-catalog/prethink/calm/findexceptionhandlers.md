---
title: "Find exception handlers"
sidebar_label: "Find exception handlers"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find exception handlers"}
  description={"Capture @ControllerAdvice and controller-local @ExceptionHandler methods so that OpenAPI 3.0.3 specs include non-2xx response branches. Emits one row per (scope, exception type, status) triple."}
  fqName={"io.moderne.prethink.calm.FindExceptionHandlers"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find exception handlers"}
  description={"Capture @ControllerAdvice and controller-local @ExceptionHandler methods so that OpenAPI 3.0.3 specs include non-2xx response branches. Emits one row per (scope, exception type, status) triple."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.calm.FindExceptionHandlers"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.calm.FindExceptionHandlers"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/calm/findexceptionhandlers.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"io.moderne.prethink.calm.FindExceptionHandlers","displayName":"Find exception handlers","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.ExceptionHandlers","displayName":"Exception handlers","description":"Spring @ExceptionHandler and @ControllerAdvice bindings: exception type -> HTTP status -> response body FQN. Used to complete the 'responses' section of an OpenAPI spec with non-2xx branches.","columns":[{"name":"Source path","description":"The path to the source file containing the handler."},{"name":"Scope class FQN","description":"Fully qualified name of the @ControllerAdvice class OR the controller class hosting the local handler."},{"name":"Scope kind","description":"'advice' when the handler lives on a @ControllerAdvice class, 'controller' for controller-local handlers."},{"name":"Base packages","description":"Comma-separated basePackages from @ControllerAdvice narrowing scope, else null."},{"name":"Exception FQN","description":"Fully qualified name of the exception type handled by this method."},{"name":"Handler method","description":"The handler method name."},{"name":"Status","description":"HTTP status code returned (e.g. 400, 500), or null when it could not be resolved."},{"name":"Status source","description":"Where the status came from: '@ResponseStatus', 'ResponseEntity.status', or 'unresolved'."},{"name":"Response body FQN","description":"Fully qualified name of the response body DTO for this handler, or null if no body."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

