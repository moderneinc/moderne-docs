---
title: "Change value"
sidebar_label: "Change value"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/hcl/changevalue" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change value"}
  description={"Change the value of an HCL attribute while leaving its key intact. The new value replaces the whole existing expression, unless `regex` is enabled."}
  fqName={"org.openrewrite.hcl.ChangeValue"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-hcl/src/main/java/org/openrewrite/hcl/ChangeValue.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.hcl.ChangeValue"}
  artifact={"org.openrewrite:rewrite-hcl"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.hcl.ChangeValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/hcl/changevalue.md"}
>

<RecipeHeader.Title>Change value</RecipeHeader.Title>

<RecipeHeader.Description>Change the value of an HCL attribute while leaving its key intact. The new value replaces the whole existing expression, unless `regex` is enabled.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"keyPath","required":true,"description":"A JSONPath expression locating the attribute whose value to change.","example":"$.resource.aws_db_instance.engine_version"},{"type":"String","name":"value","required":true,"description":"The new value as an HCL expression. String values have to be quoted, e.g. `\"8.0\"`, while `true`, `8`, `[\"a\", \"b\"]` or `var.engine_version` are used as is. If `regex` is enabled, the replacement for the parts of the current value matching `oldValue` instead, keeping its quotes. Capturing groups can be used, e.g. `db.t3.$1`.","example":"\"8.0\""},{"type":"String","name":"oldValue","required":false,"description":"Only change the value if it matches the configured `oldValue`. It is compared to numbers, booleans and strings without interpolation, the latter without their quotes. Any other value, like a reference, is left unchanged when `oldValue` is set.","example":"5.7"},{"type":"Boolean","name":"regex","required":false,"description":"Default `false`. If enabled, `oldValue` will be interpreted as a Regular Expression, to replace only all parts that match the regex. Capturing group can be used in `value`."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.hcl.ChangeValue","displayName":"Change value","groupId":"org.openrewrite","artifactId":"rewrite-hcl","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_HCL","requiresConfiguration":true,"cliOptions":" --recipe-option \"keyPath=$.resource.aws_db_instance.engine_version\" --recipe-option \"value=\"8.0\"\"","optionalCliOptions":" --recipe-option \"oldValue=5.7\" --recipe-option \"regex=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

