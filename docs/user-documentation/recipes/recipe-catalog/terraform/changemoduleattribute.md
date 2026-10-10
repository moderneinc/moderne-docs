---
title: "Change Terraform module attribute"
sidebar_label: "Change Terraform module attribute"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change Terraform module attribute"}
  description={"Change the value of an attribute on a Terraform `module` block, for example to bump the `version` of every call site of a shared module. Modules are selected by their `source` address, since the same module is typically referenced under different local names."}
  fqName={"org.openrewrite.terraform.ChangeModuleAttribute"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.terraform.ChangeModuleAttribute"}
  artifact={"org.openrewrite.recipe:rewrite-terraform"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.terraform.ChangeModuleAttribute"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/terraform/changemoduleattribute.md"}
  moderneOnly
>

<RecipeHeader.Title>Change Terraform module attribute</RecipeHeader.Title>

<RecipeHeader.Description>Change the value of an attribute on a Terraform `module` block, for example to bump the `version` of every call site of a shared module. Modules are selected by their `source` address, since the same module is typically referenced under different local names.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"sourcePattern","required":false,"description":"A regular expression matched against the module's `source` value. Only modules with a matching source will be changed. If not provided, every `module` block is considered.","example":"app\\.terraform\\.io/example/vpc/aws"},{"type":"String","name":"moduleNamePattern","required":false,"description":"A regular expression matched against the module's local name (its only label). If not provided, modules with any name are considered.","example":"vpc_.*"},{"type":"String","name":"attributeName","required":true,"description":"The name of the attribute to change.","example":"version"},{"type":"String","name":"oldValuePattern","required":false,"description":"A regular expression to match the current attribute value. Only matching attributes will be changed. If not provided, all values will be changed. For quoted string values, match against the content without quotes.","example":"1\\..*"},{"type":"String","name":"newValue","required":true,"description":"The new value to set. For quoted string attributes, provide the value without quotes.","example":"2.0.0"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"sourcePattern","value":"app\\.terraform\\.io/example/vpc/aws"},{"parameter":"moduleNamePattern","value":"null"},{"parameter":"attributeName","value":"version"},{"parameter":"oldValuePattern","value":"null"},{"parameter":"newValue","value":"2.0.0"}],"variants":[{"language":"hcl","before":"module \"network\" {\n  source  = \"app.terraform.io/example/vpc/aws\"\n  version = \"1.0.1\"\n}\n","after":"module \"network\" {\n  source  = \"app.terraform.io/example/vpc/aws\"\n  version = \"2.0.0\"\n}\n","diff":"@@ -3,1 +3,1 @@\nmodule \"network\" {\n  source  = \"app.terraform.io/example/vpc/aws\"\n- version = \"1.0.1\"\n+ version = \"2.0.0\"\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.terraform.ChangeModuleAttribute","displayName":"Change Terraform module attribute","groupId":"org.openrewrite.recipe","artifactId":"rewrite-terraform","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TERRAFORM","requiresConfiguration":true,"cliOptions":" --recipe-option \"attributeName=version\" --recipe-option \"newValue=2.0.0\"","optionalCliOptions":" --recipe-option \"sourcePattern=app\\.terraform\\.io/example/vpc/aws\" --recipe-option \"moduleNamePattern=vpc_.*\" --recipe-option \"oldValuePattern=1\\..*\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

