---
title: "Change Terraform resource attribute"
sidebar_label: "Change Terraform resource attribute"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change Terraform resource attribute"}
  description={"Change the value of a Terraform resource attribute if it matches a given pattern."}
  fqName={"org.openrewrite.terraform.ChangeResourceAttribute"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.terraform.ChangeResourceAttribute"}
  artifact={"org.openrewrite.recipe:rewrite-terraform"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.terraform.ChangeResourceAttribute"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/terraform/changeresourceattribute.md"}
  moderneOnly
>

<RecipeHeader.Title>Change Terraform resource attribute</RecipeHeader.Title>

<RecipeHeader.Description>Change the value of a Terraform resource attribute if it matches a given pattern.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"resourceName","required":true,"description":"A Terraform resource type, without the quotes.","example":"aws_db_instance"},{"type":"String","name":"attributeName","required":true,"description":"The name of the attribute to change.","example":"engine_version"},{"type":"String","name":"oldValuePattern","required":false,"description":"A regular expression to match the current attribute value. Only matching attributes will be changed. If not provided, all values will be changed. For quoted string values, match against the content without quotes.","example":"5\\.7.*"},{"type":"String","name":"newValue","required":true,"description":"The new value to set. For quoted string attributes, provide the value without quotes.","example":"8.0"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"resourceName","value":"aws_db_instance"},{"parameter":"attributeName","value":"engine_version"},{"parameter":"oldValuePattern","value":"5\\.7.*"},{"parameter":"newValue","value":"8.0"}],"variants":[{"language":"hcl","before":"resource \"aws_db_instance\" \"mysql\" {\n  engine         = \"mysql\"\n  engine_version = \"5.7\"\n  instance_class = \"db.t3.micro\"\n}\n","after":"resource \"aws_db_instance\" \"mysql\" {\n  engine         = \"mysql\"\n  engine_version = \"8.0\"\n  instance_class = \"db.t3.micro\"\n}\n","diff":"@@ -3,1 +3,1 @@\nresource \"aws_db_instance\" \"mysql\" {\n  engine         = \"mysql\"\n- engine_version = \"5.7\"\n+ engine_version = \"8.0\"\n  instance_class = \"db.t3.micro\"\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.terraform.ChangeResourceAttribute","displayName":"Change Terraform resource attribute","groupId":"org.openrewrite.recipe","artifactId":"rewrite-terraform","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TERRAFORM","requiresConfiguration":true,"cliOptions":" --recipe-option \"resourceName=aws_db_instance\" --recipe-option \"attributeName=engine_version\" --recipe-option \"oldValuePattern=5\\.7.*\" --recipe-option \"newValue=8.0\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

