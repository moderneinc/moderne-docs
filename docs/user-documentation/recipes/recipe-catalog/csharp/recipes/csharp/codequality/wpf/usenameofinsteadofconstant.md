---
title: "Use nameof() instead of a constant"
sidebar_label: "Use nameof() instead of a constant"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use nameof() instead of a constant"}
  description={"Registering a `DependencyProperty`, `RoutedEvent` or `RoutedCommand` with a `const string` silently breaks when the corresponding member is renamed. Replaces the constant with `nameof(...)` when the constant's value names a member of the containing type."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseNameofInsteadOfConstant"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseNameofInsteadOfConstant"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseNameofInsteadOfConstant"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/usenameofinsteadofconstant.md"}
  moderneOnly
>

<RecipeHeader.Title>Use nameof() instead of a constant</RecipeHeader.Title>

<RecipeHeader.Description>Registering a `DependencyProperty`, `RoutedEvent` or `RoutedCommand` with a `const string` silently breaks when the corresponding member is renamed. Replaces the constant with `nameof(...)` when the constant's value names a member of the containing type.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseNameofInsteadOfConstant","displayName":"Use nameof() instead of a constant","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

