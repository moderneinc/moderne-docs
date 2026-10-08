---
title: "Change import"
sidebar_label: "Change import"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change import"}
  description={"Change a Python import from one module/name to another, renaming the types that name what moved. Where the new module re-exports a member, set the declaring module for the types to match a fresh parse."}
  fqName={"org.openrewrite.python.ChangeImport"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.ChangeImport"}
  artifact={"openrewrite"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.ChangeImport"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/changeimport.md"}
  moderneOnly
>

<RecipeHeader.Title>Change import</RecipeHeader.Title>

<RecipeHeader.Description>Change a Python import from one module/name to another, renaming the types that name what moved. Where the new module re-exports a member, set the declaring module for the types to match a fresh parse.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"old_module","required":true,"description":"The module to change imports from","example":"collections"},{"type":"String","name":"old_name","required":false,"description":"The name to change (for 'from X import name' style). Leave empty for direct imports.","example":"Mapping"},{"type":"String","name":"new_module","required":true,"description":"The module to change imports to","example":"collections.abc"},{"type":"String","name":"new_name","required":false,"description":"The new name. If not specified, uses the old name.","example":"Mapping"},{"type":"String","name":"new_alias","required":false,"description":"Optional alias for the new import"},{"type":"String","name":"new_declaring_module","required":false,"description":"The module that defines the new member, where the new module re-exports it from another. Type attribution names the member after it.","example":"httpx._client"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.python.ChangeImport","displayName":"Change import","pipPackage":"openrewrite","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}}>

## Usage

</UsageList>

