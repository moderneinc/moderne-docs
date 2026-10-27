---
title: "Change type"
sidebar_label: "Change type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change type"}
  description={"Change a type reference from one fully qualified name to another."}
  fqName={"org.openrewrite.python.ChangeType"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.ChangeType"}
  artifact={"openrewrite"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.ChangeType"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/changetype.md"}
  moderneOnly
>

<RecipeHeader.Title>Change type</RecipeHeader.Title>

<RecipeHeader.Description>Change a type reference from one fully qualified name to another.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"org.openrewrite.java.ChangeType","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"old_fully_qualified_type_name","required":true,"description":"Fully-qualified class name of the original type.","example":"ast.Num"},{"type":"String","name":"new_fully_qualified_type_name","required":true,"description":"Fully-qualified class name of the replacement type.","example":"ast.Constant"},{"type":"String","name":"ignore_definition","required":false,"description":"When set to True, the definition of the old type will be left untouched. This is useful when you're renaming the type itself."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.python.ChangeType","displayName":"Change type","pipPackage":"openrewrite","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}}>

## Usage

</UsageList>

