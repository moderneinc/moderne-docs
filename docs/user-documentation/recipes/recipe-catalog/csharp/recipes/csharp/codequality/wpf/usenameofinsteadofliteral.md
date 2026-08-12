---
title: "Use nameof() instead of a string literal"
sidebar_label: "Use nameof() instead of a string literal"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use nameof() instead of a string literal"}
  description={"Registering a `DependencyProperty`, `RoutedEvent` or `RoutedCommand` with a string literal silently breaks when the corresponding member is renamed. Replaces the literal with `nameof(...)` when a member of that name exists on the containing type."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseNameofInsteadOfLiteral"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseNameofInsteadOfLiteral"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseNameofInsteadOfLiteral"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/usenameofinsteadofliteral.md"}
  moderneOnly
>

<RecipeHeader.Title>Use nameof() instead of a string literal</RecipeHeader.Title>

<RecipeHeader.Description>Registering a `DependencyProperty`, `RoutedEvent` or `RoutedCommand` with a string literal silently breaks when the corresponding member is renamed. Replaces the literal with `nameof(...)` when a member of that name exists on the containing type.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseNameofInsteadOfLiteral","displayName":"Use nameof() instead of a string literal","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

