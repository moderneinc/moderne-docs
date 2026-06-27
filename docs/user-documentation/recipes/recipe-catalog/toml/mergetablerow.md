---
title: "Merge TOML table row"
sidebar_label: "Merge TOML table row"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/toml/mergetablerow" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Merge TOML table row"}
  description={"Merge a TOML row into an array table. If a row with the same identifying property exists, merge the values. Otherwise, insert a new row."}
  fqName={"org.openrewrite.toml.MergeTableRow"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-toml/src/main/java/org/openrewrite/toml/MergeTableRow.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.toml.MergeTableRow"}
  artifact={"org.openrewrite:rewrite-toml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.toml.MergeTableRow"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/toml/mergetablerow.md"}
>

<RecipeHeader.Title>Merge TOML table row</RecipeHeader.Title>

<RecipeHeader.Description>Merge a TOML row into an array table. If a row with the same identifying property exists, merge the values. Otherwise, insert a new row.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"tableName","required":true,"description":"The name of the TOML array table to merge into (e.g., 'package.contributors').","example":"package.contributors"},{"type":"String","name":"row","required":true,"description":"The TOML key-value pairs to merge. Should contain the objectIdentifyingProperty.","example":"name = \"Alice Smith\"\\nemail = \"alice@example.com\""},{"type":"String","name":"identifyingKey","required":true,"description":"The property name used to match existing rows. When a row with this property value exists, it will be merged; otherwise, a new row is inserted. When the original row has more properties than the incoming row, these original properties are preserved. Entries with null values in the incoming row will result in the removal of the property from the original row.","example":"name"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"tableName","value":"package.contributors"},{"parameter":"row","value":"name = \"Alice Smith\"\nemail = \"alice.new@example.com\"\nrole = \"maintainer\""},{"parameter":"identifyingKey","value":"name"}],"variants":[{"language":"toml","before":"[[package.contributors]]\nname = \"Alice Smith\"\nemail = \"alice@example.com\"\n\n[[package.contributors]]\nname = \"Bob Johnson\"\nemail = \"bob@example.com\"\n","after":"[[package.contributors]]\nname = \"Alice Smith\"\nemail = \"alice.new@example.com\"\nrole = \"maintainer\"\n\n[[package.contributors]]\nname = \"Bob Johnson\"\nemail = \"bob@example.com\"\n","diff":"@@ -3,1 +3,2 @@\n[[package.contributors]]\nname = \"Alice Smith\"\n-email = \"alice@example.com\"\n+email = \"alice.new@example.com\"\n+role = \"maintainer\"\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.toml.MergeTableRow","displayName":"Merge TOML table row","groupId":"org.openrewrite","artifactId":"rewrite-toml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_TOML","requiresConfiguration":true,"cliOptions":" --recipe-option \"tableName=package.contributors\" --recipe-option \"row=name = \"Alice Smith\"\\nemail = \"alice@example.com\"\" --recipe-option \"identifyingKey=name\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

