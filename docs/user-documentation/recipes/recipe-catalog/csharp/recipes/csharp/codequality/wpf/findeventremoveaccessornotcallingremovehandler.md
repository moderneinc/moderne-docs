---
title: "Call RemoveHandler in remove"
sidebar_label: "Call RemoveHandler in remove"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Call RemoveHandler in remove"}
  description={"The `remove` accessor of an event backed by a `RoutedEvent` must call `RemoveHandler`. Flags an accessor that calls `AddHandler` instead, which subscribes a second time rather than unsubscribing."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindEventRemoveAccessorNotCallingRemoveHandler"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindEventRemoveAccessorNotCallingRemoveHandler"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindEventRemoveAccessorNotCallingRemoveHandler"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/findeventremoveaccessornotcallingremovehandler.md"}
  moderneOnly
>

<RecipeHeader.Title>Call RemoveHandler in remove</RecipeHeader.Title>

<RecipeHeader.Description>The `remove` accessor of an event backed by a `RoutedEvent` must call `RemoveHandler`. Flags an accessor that calls `AddHandler` instead, which subscribes a second time rather than unsubscribing.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindEventRemoveAccessorNotCallingRemoveHandler","displayName":"Call RemoveHandler in remove","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

