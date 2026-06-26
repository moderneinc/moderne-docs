---
title: "Change TOML table row value"
sidebar_label: "Change TOML table row value"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/toml/changetablerowvalue" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change TOML table row value"}
  description={"Change a value in a TOML table row when the identifying property matches the specified matcher."}
  fqName={"org.openrewrite.toml.ChangeTableRowValue"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-toml/src/main/java/org/openrewrite/toml/ChangeTableRowValue.java"}
/>

<RecipeHeader
  displayName={"Change TOML table row value"}
  description={"Change a value in a TOML table row when the identifying property matches the specified matcher."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.toml.ChangeTableRowValue"}
  artifact={"org.openrewrite:rewrite-toml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.toml.ChangeTableRowValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/toml/changetablerowvalue.md"}
/>

<OptionsTable options={[{"type":"String","name":"tableName","required":true,"description":"The name of the TOML array table containing the row to update.","example":"package.contributors"},{"type":"String","name":"identifyingKey","required":true,"description":"The key within a table row to match on.","example":"name"},{"type":"String","name":"identifyingValue","required":true,"description":"The value to match. Can be a regular expression if useRegex is true.","example":"Alice Smith"},{"type":"Boolean","name":"useRegex","required":false,"description":"Whether to interpret the identifying value as a regular expression. Default is false."},{"type":"String","name":"propertyKey","required":true,"description":"The key of the property to update within the matched row.","example":"email"},{"type":"String","name":"newValue","required":false,"description":"The new value to set for the property. If null, the property will be removed.","example":"\"alice.new@example.com\""}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"tableName","value":"package.contributors"},{"parameter":"identifyingKey","value":"name"},{"parameter":"identifyingValue","value":"Alice Smith"},{"parameter":"useRegex","value":"null"},{"parameter":"propertyKey","value":"email"},{"parameter":"newValue","value":"\"alice.new@example.com\""}],"variants":[{"language":"toml","before":"[[package.contributors]]\nname = \"Alice Smith\"\nemail = \"alice@example.com\"\n\n[[package.contributors]]\nname = \"Bob Johnson\"\nemail = \"bob@example.com\"\n","after":"[[package.contributors]]\nname = \"Alice Smith\"\nemail = \"alice.new@example.com\"\n\n[[package.contributors]]\nname = \"Bob Johnson\"\nemail = \"bob@example.com\"\n","diff":"@@ -3,1 +3,1 @@\n[[package.contributors]]\nname = \"Alice Smith\"\n-email = \"alice@example.com\"\n+email = \"alice.new@example.com\"\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.toml.ChangeTableRowValue","displayName":"Change TOML table row value","groupId":"org.openrewrite","artifactId":"rewrite-toml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_TOML","requiresConfiguration":true,"cliOptions":" --recipe-option \"tableName=package.contributors\" --recipe-option \"identifyingKey=name\" --recipe-option \"identifyingValue=Alice Smith\" --recipe-option \"propertyKey=email\" --recipe-option \"newValue=\"alice.new@example.com\"\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

