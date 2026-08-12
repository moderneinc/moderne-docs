---
title: "Use the registered routed event handler type"
sidebar_label: "Use the registered routed event handler type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use the registered routed event handler type"}
  description={"A handler passed to `EventManager.RegisterClassHandler`, `AddHandler` or `RemoveHandler` must be constructed with the delegate type the `RoutedEvent` was registered with; WPF rejects any other at run time. Replaces the wrong delegate type with the registered one."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseRegisteredRoutedEventHandlerType"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseRegisteredRoutedEventHandlerType"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseRegisteredRoutedEventHandlerType"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/useregisteredroutedeventhandlertype.md"}
  moderneOnly
>

<RecipeHeader.Title>Use the registered routed event handler type</RecipeHeader.Title>

<RecipeHeader.Description>A handler passed to `EventManager.RegisterClassHandler`, `AddHandler` or `RemoveHandler` must be constructed with the delegate type the `RoutedEvent` was registered with; WPF rejects any other at run time. Replaces the wrong delegate type with the registered one.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseRegisteredRoutedEventHandlerType","displayName":"Use the registered routed event handler type","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

