---
title: "Find endpoint contracts"
sidebar_label: "Find endpoint contracts"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find endpoint contracts"}
  description={"Extract per-endpoint request body, response body (per status code), and parameter details from Spring/JAX-RS/Micronaut handlers to support OpenAPI 3.0.3 spec generation and consumer/provider contract-test generation. Walks interface inheritance for OpenAPI-codegen-first projects."}
  fqName={"io.moderne.prethink.calm.FindEndpointContracts"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.calm.FindEndpointContracts"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.calm.FindEndpointContracts"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/calm/findendpointcontracts.md"}
  moderneOnly
>

<RecipeHeader.Title>Find endpoint contracts</RecipeHeader.Title>

<RecipeHeader.Description>Extract per-endpoint request body, response body (per status code), and parameter details from Spring/JAX-RS/Micronaut handlers to support OpenAPI 3.0.3 spec generation and consumer/provider contract-test generation. Walks interface inheritance for OpenAPI-codegen-first projects.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.prethink.calm.FindEndpointContracts","displayName":"Find endpoint contracts","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.EndpointSchemas","displayName":"Endpoint request/response schemas","description":"Per-endpoint request body and response body bindings, one row per (endpoint, status code) pair. Supports OpenAPI 3.0.3 generation by giving the LLM a full mapping from handler to body DTO FQNs.","columns":[{"name":"Endpoint ID","description":"Join key matching the 'Entity ID' column of service-endpoints.csv."},{"name":"Source path","description":"The path to the source file containing the handler."},{"name":"Service class","description":"The fully qualified name of the controller/resource class."},{"name":"Method name","description":"The handler method name."},{"name":"HTTP method","description":"The HTTP method (GET, POST, etc.)."},{"name":"Path","description":"The full request path including class-level prefix."},{"name":"Request body FQN","description":"Fully qualified name of the request body DTO class, or null when the handler takes no body."},{"name":"Request body resolution","description":"How the request body type was resolved: 'resolved' (FQN known), 'simple-name' (only the class simple name could be recovered), 'unresolved' (could not be determined), or 'none' (no request body)."},{"name":"Request body required","description":"Whether the request body is required (false only when @RequestBody(required=false))."},{"name":"Response status","description":"HTTP status code for this response row (e.g. 200, 201, 400)."},{"name":"Response body FQN","description":"Fully qualified name of the response body DTO for this status, after unwrapping ResponseEntity/Mono/Optional/collection wrappers."},{"name":"Response body resolution","description":"How the response body type was resolved: 'resolved' (FQN known), 'simple-name', 'unresolved', or 'none' (void return / no body)."},{"name":"Response is collection","description":"True when the response body is a collection type (List/Set/Page/Slice/array)."},{"name":"Response source","description":"Where this response row was derived: 'return-type', '@ResponseStatus', or '@ApiResponse'."},{"name":"Framework","description":"The framework hosting the endpoint (Spring, JAX-RS, Micronaut)."}]},{"name":"io.moderne.prethink.table.EndpointParameters","displayName":"Endpoint parameters","description":"Per-parameter detail for REST endpoint handlers - path, query, header, form. Join to service-endpoints.csv via endpointId.","columns":[{"name":"Endpoint ID","description":"Join key matching the 'Entity ID' column of service-endpoints.csv."},{"name":"Parameter name","description":"The wire-level parameter name (from @PathVariable(name=...), @RequestParam(name=...), etc.)."},{"name":"Parameter kind","description":"Where the parameter comes from: 'path', 'query', 'header', or 'form'."},{"name":"Type FQN","description":"Fully qualified name of the parameter's Java type."},{"name":"Type resolution","description":"How the parameter type was resolved: 'resolved' (FQN known), 'simple-name', or 'unresolved'."},{"name":"Format","description":"OpenAPI 3.0.3 format (int32, int64, date-time, uuid, etc.) or null."},{"name":"Required","description":"Whether the parameter is required."},{"name":"Default value","description":"Default value if declared (e.g. @RequestParam(defaultValue = \"0\")), else null."},{"name":"Java parameter name","description":"The original Java parameter name (may differ from wire name)."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

