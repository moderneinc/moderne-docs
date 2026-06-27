---
title: "Change a single attribute inside a Terraform resource's nested block"
sidebar_label: "Change a single attribute inside a Terraform resource's nested block"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change a single attribute inside a Terraform resource's nested block"}
  description={"Change the value of an attribute inside a specific instance of a nested block on a Terraform resource (e.g. set `value = \"0\"` on the `parameter { name = \"local_infile\" }` block of an `aws_db_parameter_group`). Use `keyMatchers` to identify a single instance among repeatable blocks."}
  fqName={"org.openrewrite.terraform.ChangeResourceNestedBlockAttribute"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.terraform.ChangeResourceNestedBlockAttribute"}
  artifact={"org.openrewrite.recipe:rewrite-terraform"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.terraform.ChangeResourceNestedBlockAttribute"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/terraform/changeresourcenestedblockattribute.md"}
  moderneOnly
>

<RecipeHeader.Title>Change a single attribute inside a Terraform resource's nested block</RecipeHeader.Title>

<RecipeHeader.Description>Change the value of an attribute inside a specific instance of a nested block on a Terraform resource (e.g. set `value = "0"` on the `parameter { name = "local_infile" }` block of an `aws_db_parameter_group`). Use `keyMatchers` to identify a single instance among repeatable blocks.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"resourceType","required":true,"description":"A Terraform resource type, without the quotes.","example":"aws_db_parameter_group"},{"type":"String","name":"resourceNamePattern","required":false,"description":"A regular expression matched against the resource's local name (the second label). If omitted, all resources of `resourceType` are considered.","example":"rds_.*"},{"type":"List","name":"resourceAttrMatchers","required":false,"description":"A list of `attr=valueRegex` entries. The resource is considered a match only if every entry matches an attribute on the resource (AND semantics).","example":"family=mysql.*|mariadb.*"},{"type":"String","name":"blockType","required":true,"description":"The type of nested block to update (e.g. `parameter`, `tag`, `setting`).","example":"parameter"},{"type":"List","name":"keyMatchers","required":false,"description":"A list of `attr=valueRegex` entries identifying the specific nested block instance to update. If omitted, every block of the given `blockType` is updated.","example":"name=local_infile"},{"type":"String","name":"attributeName","required":true,"description":"The attribute inside the nested block whose value should change.","example":"value"},{"type":"String","name":"newValue","required":true,"description":"The new value to set. For quoted string attributes, provide the value without quotes.","example":"0"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"resourceType","value":"aws_db_parameter_group"},{"parameter":"resourceNamePattern","value":"null"},{"parameter":"resourceAttrMatchers","value":"List.of(\"family=mysql.*|mariadb.*\")"},{"parameter":"blockType","value":"parameter"},{"parameter":"keyMatchers","value":"List.of(\"name=local_infile\")"},{"parameter":"attributeName","value":"value"},{"parameter":"newValue","value":"0"}],"variants":[{"language":"hcl","before":"resource \"aws_db_parameter_group\" \"mysql\" {\n  family = \"mysql8.0\"\n  parameter {\n    apply_method = \"immediate\"\n    name         = \"local_infile\"\n    value        = \"1\"\n  }\n}\n","after":"resource \"aws_db_parameter_group\" \"mysql\" {\n  family = \"mysql8.0\"\n  parameter {\n    apply_method = \"immediate\"\n    name         = \"local_infile\"\n    value        = \"0\"\n  }\n}\n","diff":"@@ -6,1 +6,1 @@\n    apply_method = \"immediate\"\n    name         = \"local_infile\"\n-   value        = \"1\"\n+   value        = \"0\"\n  }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.terraform.ChangeResourceNestedBlockAttribute","displayName":"Change a single attribute inside a Terraform resource's nested block","groupId":"org.openrewrite.recipe","artifactId":"rewrite-terraform","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TERRAFORM","requiresConfiguration":true,"cliOptions":" --recipe-option \"resourceType=aws_db_parameter_group\" --recipe-option \"resourceNamePattern=rds_.*\" --recipe-option \"resourceAttrMatchers=family=mysql.*|mariadb.*\" --recipe-option \"blockType=parameter\" --recipe-option \"keyMatchers=name=local_infile\" --recipe-option \"attributeName=value\" --recipe-option \"newValue=0\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

