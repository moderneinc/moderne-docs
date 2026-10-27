---
title: "Delete method argument"
sidebar_label: "Delete method argument"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Delete method argument"}
  description={"Remove an argument from method invocations matching a pattern."}
  fqName={"org.openrewrite.python.DeleteMethodArgument"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.DeleteMethodArgument"}
  artifact={"openrewrite"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.DeleteMethodArgument"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/deletemethodargument.md"}
  moderneOnly
>

<RecipeHeader.Title>Delete method argument</RecipeHeader.Title>

<RecipeHeader.Description>Remove an argument from method invocations matching a pattern.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"org.openrewrite.java.DeleteMethodArgument","href":"/user-documentation/recipes/recipe-catalog/java/deletemethodargument/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"method_pattern","required":true,"description":"A method pattern that matches method invocations to modify.","example":"datetime.datetime fromtimestamp(..)"},{"type":"String","name":"argument_index","required":true,"description":"The zero-based index of the argument to remove.","example":"1"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.python.DeleteMethodArgument","displayName":"Delete method argument","pipPackage":"openrewrite","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}}>

## Usage

</UsageList>

