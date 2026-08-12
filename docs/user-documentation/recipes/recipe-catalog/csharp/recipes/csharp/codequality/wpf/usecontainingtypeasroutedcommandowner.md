---
title: "Register the containing type as the owner for a RoutedCommand"
sidebar_label: "Register the containing type as the owner for a RoutedCommand"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Register the containing type as the owner for a RoutedCommand"}
  description={"A `RoutedCommand` or `RoutedUICommand` should be registered with the type that declares it as its owner type. Replaces a mismatched `typeof(...)` with the containing type."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseContainingTypeAsRoutedCommandOwner"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseContainingTypeAsRoutedCommandOwner"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseContainingTypeAsRoutedCommandOwner"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/usecontainingtypeasroutedcommandowner.md"}
  moderneOnly
>

<RecipeHeader.Title>Register the containing type as the owner for a RoutedCommand</RecipeHeader.Title>

<RecipeHeader.Description>A `RoutedCommand` or `RoutedUICommand` should be registered with the type that declares it as its owner type. Replaces a mismatched `typeof(...)` with the containing type.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseContainingTypeAsRoutedCommandOwner","displayName":"Register the containing type as the owner for a RoutedCommand","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

