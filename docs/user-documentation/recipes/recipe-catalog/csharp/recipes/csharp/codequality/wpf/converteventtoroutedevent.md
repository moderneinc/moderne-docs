---
title: "Convert a CLR event to a routed event"
sidebar_label: "Convert a CLR event to a routed event"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert a CLR event to a routed event"}
  description={"A CLR event on an element cannot be routed through the element tree or handled by a parent. Registers a `RoutedEvent` for it with `EventManager.RegisterRoutedEvent` and rewrites the event to `add`/`remove` accessors calling `AddHandler`/`RemoveHandler`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertEventToRoutedEvent"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertEventToRoutedEvent"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertEventToRoutedEvent"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/converteventtoroutedevent.md"}
  moderneOnly
>

<RecipeHeader.Title>Convert a CLR event to a routed event</RecipeHeader.Title>

<RecipeHeader.Description>A CLR event on an element cannot be routed through the element tree or handled by a parent. Registers a `RoutedEvent` for it with `EventManager.RegisterRoutedEvent` and rewrites the event to `add`/`remove` accessors calling `AddHandler`/`RemoveHandler`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertEventToRoutedEvent","displayName":"Convert a CLR event to a routed event","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

