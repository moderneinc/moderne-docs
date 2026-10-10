---
title: "Change Terraform required provider attribute"
sidebar_label: "Change Terraform required provider attribute"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change Terraform required provider attribute"}
  description={"Change the value of an attribute on an entry of a `terraform { required_providers { ... } }` block, for example to bump a provider `version` constraint or to point a `source` at a different registry. Since Terraform 0.13 this is where provider versions are declared, so use this recipe rather than `ChangeProviderConfigurationAttribute` to manage provider versions."}
  fqName={"org.openrewrite.terraform.ChangeRequiredProviderAttribute"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.terraform.ChangeRequiredProviderAttribute"}
  artifact={"org.openrewrite.recipe:rewrite-terraform"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.terraform.ChangeRequiredProviderAttribute"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/terraform/changerequiredproviderattribute.md"}
  moderneOnly
>

<RecipeHeader.Title>Change Terraform required provider attribute</RecipeHeader.Title>

<RecipeHeader.Description>Change the value of an attribute on an entry of a `terraform { required_providers { ... } }` block, for example to bump a provider `version` constraint or to point a `source` at a different registry. Since Terraform 0.13 this is where provider versions are declared, so use this recipe rather than `ChangeProviderConfigurationAttribute` to manage provider versions.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"sourcePattern","required":false,"description":"A regular expression matched against the required provider's `source` value. Only providers with a matching source will be changed. If not provided, every entry of `required_providers` is considered.","example":"hashicorp/aws"},{"type":"String","name":"providerNamePattern","required":false,"description":"A regular expression matched against the local name the provider is configured under, which is the key of the `required_providers` entry. If not provided, providers with any name are considered.","example":"aws"},{"type":"String","name":"attributeName","required":true,"description":"The name of the attribute to change, typically `version` or `source`.","example":"version"},{"type":"String","name":"oldValuePattern","required":false,"description":"A regular expression to match the current attribute value. Only matching attributes will be changed. If not provided, all values will be changed. For quoted string values, match against the content without quotes.","example":"~> 4\\..*"},{"type":"String","name":"newValue","required":true,"description":"The new value to set. For quoted string attributes, provide the value without quotes.","example":"~> 5.0"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"sourcePattern","value":"hashicorp/aws"},{"parameter":"providerNamePattern","value":"null"},{"parameter":"attributeName","value":"version"},{"parameter":"oldValuePattern","value":"null"},{"parameter":"newValue","value":"~> 5.0"}],"variants":[{"language":"hcl","before":"terraform {\n  required_providers {\n    aws = {\n      source  = \"hashicorp/aws\"\n      version = \"~> 4.16\"\n    }\n  }\n\n  required_version = \">= 1.2.0\"\n}\n","after":"terraform {\n  required_providers {\n    aws = {\n      source  = \"hashicorp/aws\"\n      version = \"~> 5.0\"\n    }\n  }\n\n  required_version = \">= 1.2.0\"\n}\n","diff":"@@ -5,1 +5,1 @@\n    aws = {\n      source  = \"hashicorp/aws\"\n-     version = \"~> 4.16\"\n+     version = \"~> 5.0\"\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.terraform.ChangeRequiredProviderAttribute","displayName":"Change Terraform required provider attribute","groupId":"org.openrewrite.recipe","artifactId":"rewrite-terraform","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TERRAFORM","requiresConfiguration":true,"cliOptions":" --recipe-option \"attributeName=version\" --recipe-option \"newValue=~> 5.0\"","optionalCliOptions":" --recipe-option \"sourcePattern=hashicorp/aws\" --recipe-option \"providerNamePattern=aws\" --recipe-option \"oldValuePattern=~> 4\\..*\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

