---
title: "Use same event in add and remove"
sidebar_label: "Use same event in add and remove"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use same event in add and remove"}
  description={"The `add` and `remove` accessors of an event must pass the same `RoutedEvent` to `AddHandler` and `RemoveHandler`. Flags a declaration whose accessors disagree, which leaves subscribers attached after they unsubscribe."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindEventDeclarationAddRemoveMismatch"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindEventDeclarationAddRemoveMismatch"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindEventDeclarationAddRemoveMismatch"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/findeventdeclarationaddremovemismatch.md"}
  moderneOnly
>

<RecipeHeader.Title>Use same event in add and remove</RecipeHeader.Title>

<RecipeHeader.Description>The `add` and `remove` accessors of an event must pass the same `RoutedEvent` to `AddHandler` and `RemoveHandler`. Flags a declaration whose accessors disagree, which leaves subscribers attached after they unsubscribe.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindEventDeclarationAddRemoveMismatch","displayName":"Use same event in add and remove","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

