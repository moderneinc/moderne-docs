---
title: "Find .NET DTO field schemas"
sidebar_label: "Find .NET DTO field schemas"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find .NET DTO field schemas"}
  description={"Per-property schema rows for C# DTOs: serialized name (JsonPropertyName/JsonProperty), OpenAPI format, required flag (DataAnnotations.RequiredAttribute / non-nullable value types), and a validations JSON map."}
  fqName={"io.moderne.prethink.calm.FindDotnetDtoFieldSchemas"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find .NET DTO field schemas"}
  description={"Per-property schema rows for C# DTOs: serialized name (JsonPropertyName/JsonProperty), OpenAPI format, required flag (DataAnnotations.RequiredAttribute / non-nullable value types), and a validations JSON map."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.calm.FindDotnetDtoFieldSchemas"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.calm.FindDotnetDtoFieldSchemas"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetdtofieldschemas.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"io.moderne.prethink.calm.FindDotnetDtoFieldSchemas","displayName":"Find .NET DTO field schemas","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.DtoFieldSchemas","displayName":"DTO field schemas","description":"Per-field schema detail for request/response DTOs: wire name, type, required flag, OpenAPI format, validation constraints, and any @Schema(example=) example values.","columns":[{"name":"Source path","description":"The path to the source file containing the DTO class."},{"name":"Owner class FQN","description":"Fully qualified name of the DTO class owning this field. Joins to data-assets.csv via 'Class name'."},{"name":"Field name","description":"The Java field name."},{"name":"Serialized name","description":"The JSON name on the wire, after applying @JsonProperty overrides and class-level @JsonNaming."},{"name":"Serialized name source","description":"How the serialized name was derived: 'java-name' (no override), 'json-property' (@JsonProperty value), 'jackson-strategy' (recognized @JsonNaming applied), or 'unknown-strategy' (@JsonNaming present but strategy class isn't a known one - the Java field name is used as a best-effort fallback)."},{"name":"Type FQN","description":"Fully qualified name of the field's type (after unwrapping Optional/Collection wrappers)."},{"name":"Type resolution","description":"How confidently the type was resolved: 'resolved' (FQN known), 'simple-name' (only the class simple name could be recovered, may not uniquely identify the DTO), or 'unresolved' (the type could not be determined at all)."},{"name":"Is collection","description":"True when the declared type is a collection (List/Set/array/etc.) - the type FQN is then the element type."},{"name":"Is map","description":"True when the declared type is a Map - the type FQN is then the value type."},{"name":"Is optional","description":"True when the declared type is java.util.Optional."},{"name":"Format","description":"OpenAPI 3.0.3 format (int32, int64, date-time, uuid, email, binary, ...) or null."},{"name":"Required","description":"Whether the field is required. Set true for @NotNull/@NotBlank/@NotEmpty, primitives, and @JsonProperty(required=true)."},{"name":"Validations JSON","description":"JSON map of validation constraint simple name to argument map. Example: {\"NotNull\":{},\"Size\":{\"min\":1,\"max\":100}}."},{"name":"Example value","description":"Example value from @Schema(example = \"...\") if declared on the field, else null."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

