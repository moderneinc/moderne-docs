---
title: "Register a name and an owning type for a RoutedCommand"
sidebar_label: "Register a name and an owning type for a RoutedCommand"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Register a name and an owning type for a RoutedCommand"}
  description={"A `RoutedCommand` or `RoutedUICommand` created with the parameterless constructor has no name and no owner type. Registers the containing member and the containing type; for a `RoutedUICommand` the display text is filled in with `\"PLACEHOLDER TEXT\"`, matching WpfAnalyzers, because the source contains nothing to derive it from."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RegisterRoutedCommandNameAndOwner"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RegisterRoutedCommandNameAndOwner"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RegisterRoutedCommandNameAndOwner"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/registerroutedcommandnameandowner.md"}
  moderneOnly
>

<RecipeHeader.Title>Register a name and an owning type for a RoutedCommand</RecipeHeader.Title>

<RecipeHeader.Description>A `RoutedCommand` or `RoutedUICommand` created with the parameterless constructor has no name and no owner type. Registers the containing member and the containing type; for a `RoutedUICommand` the display text is filled in with `"PLACEHOLDER TEXT"`, matching WpfAnalyzers, because the source contains nothing to derive it from.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RegisterRoutedCommandNameAndOwner","displayName":"Register a name and an owning type for a RoutedCommand","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

