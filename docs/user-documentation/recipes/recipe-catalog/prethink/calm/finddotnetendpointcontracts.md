---
sidebar_label: "Find .NET endpoint contracts"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find .NET endpoint contracts

**io.moderne.prethink.calm.FindDotnetEndpointContracts**

```
Extract request body, response body (unwrapping ActionResult<T>/Task<T>), and per-parameter binding source ([FromBody/Query/Route/Header/Form]) for ASP.NET Core controller endpoints.
```


## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Update Prethink context (no AI)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextnoaistarter)
* [Update Prethink context (with AI)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextstarter)


## Usage

<RunRecipe
  recipeName="io.moderne.prethink.calm.FindDotnetEndpointContracts"
  displayName="Find .NET endpoint contracts"
  groupId="io.moderne.recipe"
  artifactId="rewrite-prethink"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.prethink.calm.FindDotnetEndpointContracts" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.prethink.table.EndpointSchemas" label="EndpointSchemas">

### Endpoint request/response schemas
**io.moderne.prethink.table.EndpointSchemas**

_Per-endpoint request body and response body bindings, one row per (endpoint, status code) pair. Supports OpenAPI 3.0.3 generation by giving the LLM a full mapping from handler to body DTO FQNs._

| Column Name | Description |
| ----------- | ----------- |
| Endpoint ID | Join key matching the 'Entity ID' column of service-endpoints.csv. |
| Source path | The path to the source file containing the handler. |
| Service class | The fully qualified name of the controller/resource class. |
| Method name | The handler method name. |
| HTTP method | The HTTP method (GET, POST, etc.). |
| Path | The full request path including class-level prefix. |
| Request body FQN | Fully qualified name of the request body DTO class, or null when the handler takes no body. |
| Request body resolution | How the request body type was resolved: 'resolved' (FQN known), 'simple-name' (only the class simple name could be recovered), 'unresolved' (could not be determined), or 'none' (no request body). |
| Request body required | Whether the request body is required (false only when @RequestBody(required=false)). |
| Response status | HTTP status code for this response row (e.g. 200, 201, 400). |
| Response body FQN | Fully qualified name of the response body DTO for this status, after unwrapping ResponseEntity/Mono/Optional/collection wrappers. |
| Response body resolution | How the response body type was resolved: 'resolved' (FQN known), 'simple-name', 'unresolved', or 'none' (void return / no body). |
| Response is collection | True when the response body is a collection type (List/Set/Page/Slice/array). |
| Response source | Where this response row was derived: 'return-type', '@ResponseStatus', or '@ApiResponse'. |
| Framework | The framework hosting the endpoint (Spring, JAX-RS, Micronaut). |

</TabItem>

<TabItem value="io.moderne.prethink.table.EndpointParameters" label="EndpointParameters">

### Endpoint parameters
**io.moderne.prethink.table.EndpointParameters**

_Per-parameter detail for REST endpoint handlers - path, query, header, form. Join to service-endpoints.csv via endpointId._

| Column Name | Description |
| ----------- | ----------- |
| Endpoint ID | Join key matching the 'Entity ID' column of service-endpoints.csv. |
| Parameter name | The wire-level parameter name (from @PathVariable(name=...), @RequestParam(name=...), etc.). |
| Parameter kind | Where the parameter comes from: 'path', 'query', 'header', or 'form'. |
| Type FQN | Fully qualified name of the parameter's Java type. |
| Type resolution | How the parameter type was resolved: 'resolved' (FQN known), 'simple-name', or 'unresolved'. |
| Format | OpenAPI 3.0.3 format (int32, int64, date-time, uuid, etc.) or null. |
| Required | Whether the parameter is required. |
| Default value | Default value if declared (e.g. @RequestParam(defaultValue = &quot;0&quot;)), else null. |
| Java parameter name | The original Java parameter name (may differ from wire name). |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
