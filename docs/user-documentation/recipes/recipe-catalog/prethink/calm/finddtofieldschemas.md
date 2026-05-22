---
sidebar_label: "Find DTO field schemas"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find DTO field schemas

**io.moderne.prethink.calm.FindDtoFieldSchemas**

_Emit per-field rows for request/response DTO classes: wire name, type, required flag, OpenAPI format, validation constraints, and @Schema(example = ...) values. Supports OpenAPI 3.0.3 generation by providing the full field schema for each DTO an endpoint references._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Update Prethink context (no AI)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextnoaistarter)
* [Update Prethink context (with AI)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextstarter)


## Usage

<RunRecipe
  recipeName="io.moderne.prethink.calm.FindDtoFieldSchemas"
  displayName="Find DTO field schemas"
  groupId="io.moderne.recipe"
  artifactId="rewrite-prethink"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.prethink.calm.FindDtoFieldSchemas" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.prethink.table.DtoFieldSchemas" label="DtoFieldSchemas">

### DTO field schemas
**io.moderne.prethink.table.DtoFieldSchemas**

_Per-field schema detail for request/response DTOs: wire name, type, required flag, OpenAPI format, validation constraints, and any @Schema(example=) example values._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the DTO class. |
| Owner class FQN | Fully qualified name of the DTO class owning this field. Joins to data-assets.csv via 'Class name'. |
| Field name | The Java field name. |
| Serialized name | The JSON name on the wire, after applying @JsonProperty overrides and class-level @JsonNaming. |
| Serialized name source | How the serialized name was derived: 'java-name' (no override), 'json-property' (@JsonProperty value), 'jackson-strategy' (recognized @JsonNaming applied), or 'unknown-strategy' (@JsonNaming present but strategy class isn't a known one - the Java field name is used as a best-effort fallback). |
| Type FQN | Fully qualified name of the field's type (after unwrapping Optional/Collection wrappers). |
| Type resolution | How confidently the type was resolved: 'resolved' (FQN known), 'simple-name' (only the class simple name could be recovered, may not uniquely identify the DTO), or 'unresolved' (the type could not be determined at all). |
| Is collection | True when the declared type is a collection (List/Set/array/etc.) - the type FQN is then the element type. |
| Is map | True when the declared type is a Map - the type FQN is then the value type. |
| Is optional | True when the declared type is java.util.Optional. |
| Format | OpenAPI 3.0.3 format (int32, int64, date-time, uuid, email, binary, ...) or null. |
| Required | Whether the field is required. Set true for @NotNull/@NotBlank/@NotEmpty, primitives, and @JsonProperty(required=true). |
| Validations JSON | JSON map of validation constraint simple name to argument map. Example: \{&quot;NotNull&quot;:\{\},&quot;Size&quot;:\{&quot;min&quot;:1,&quot;max&quot;:100\}\}. |
| Example value | Example value from @Schema(example = &quot;...&quot;) if declared on the field, else null. |

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
