---
title: "Add literal method argument"
sidebar_label: "Add literal method argument"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add literal method argument"}
  description={"Add a literal argument to method invocations matching a pattern."}
  fqName={"org.openrewrite.python.AddLiteralMethodArgument"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.AddLiteralMethodArgument"}
  artifact={"openrewrite"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.AddLiteralMethodArgument"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/addliteralmethodargument.md"}
  moderneOnly
>

<RecipeHeader.Title>Add literal method argument</RecipeHeader.Title>

<RecipeHeader.Description>Add a literal argument to method invocations matching a pattern.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"org.openrewrite.java.AddLiteralMethodArgument","href":"/user-documentation/recipes/recipe-catalog/java/addliteralmethodargument/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"method_pattern","required":true,"description":"A method pattern that matches method invocations to modify.","example":"datetime.datetime now()"},{"type":"String","name":"argument_index","required":true,"description":"The zero-based position where to insert the argument.","example":"0"},{"type":"String","name":"literal","required":true,"description":"The literal value to add as an argument.","example":"datetime.UTC"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.python.AddLiteralMethodArgument","displayName":"Add literal method argument","pipPackage":"openrewrite","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}}>

## Usage

</UsageList>

