---
title: "Containing type should be used as registered owner"
sidebar_label: "Containing type should be used as registered owner"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Containing type should be used as registered owner"}
  description={"A `DependencyProperty` must name the type that declares it as owner, otherwise WPF cannot resolve it for that type. Replaces the `typeof(...)` owner argument with the containing type."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseContainingTypeAsRegisteredOwner"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseContainingTypeAsRegisteredOwner"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseContainingTypeAsRegisteredOwner"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/usecontainingtypeasregisteredowner.md"}
  moderneOnly
>

<RecipeHeader.Title>Containing type should be used as registered owner</RecipeHeader.Title>

<RecipeHeader.Description>A `DependencyProperty` must name the type that declares it as owner, otherwise WPF cannot resolve it for that type. Replaces the `typeof(...)` owner argument with the containing type.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseContainingTypeAsRegisteredOwner","displayName":"Containing type should be used as registered owner","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

