---
title: "Call AddHandler in add"
sidebar_label: "Call AddHandler in add"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Call AddHandler in add"}
  description={"The `add` accessor of an event backed by a `RoutedEvent` must call `AddHandler`. Flags an accessor that calls `RemoveHandler` instead, which would silently discard subscriptions."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindEventAddAccessorNotCallingAddHandler"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindEventAddAccessorNotCallingAddHandler"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindEventAddAccessorNotCallingAddHandler"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/findeventaddaccessornotcallingaddhandler.md"}
  moderneOnly
>

<RecipeHeader.Title>Call AddHandler in add</RecipeHeader.Title>

<RecipeHeader.Description>The `add` accessor of an event backed by a `RoutedEvent` must call `AddHandler`. Flags an accessor that calls `RemoveHandler` instead, which would silently discard subscriptions.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindEventAddAccessorNotCallingAddHandler","displayName":"Call AddHandler in add","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

