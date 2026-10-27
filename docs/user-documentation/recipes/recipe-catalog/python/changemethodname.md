---
title: "Change method name"
sidebar_label: "Change method name"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change method name"}
  description={"Rename method invocations matching a pattern."}
  fqName={"org.openrewrite.python.ChangeMethodName"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.ChangeMethodName"}
  artifact={"openrewrite"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.ChangeMethodName"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/changemethodname.md"}
  moderneOnly
>

<RecipeHeader.Title>Change method name</RecipeHeader.Title>

<RecipeHeader.Description>Rename method invocations matching a pattern.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"org.openrewrite.java.ChangeMethodName","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"method_pattern","required":true,"description":"A method pattern that matches method invocations to rename.","example":"datetime.datetime utcnow()"},{"type":"String","name":"new_method_name","required":true,"description":"The new name for the method.","example":"now"},{"type":"String","name":"match_overrides","required":false,"description":"When enabled, also match method overrides."},{"type":"String","name":"ignore_definition","required":false,"description":"When enabled, the method definition itself will not be renamed."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.python.ChangeMethodName","displayName":"Change method name","pipPackage":"openrewrite","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}}>

## Usage

</UsageList>

