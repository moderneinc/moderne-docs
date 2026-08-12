---
title: "Property changed callback should have standard documentation text"
sidebar_label: "Property changed callback should have standard documentation text"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Property changed callback should have standard documentation text"}
  description={"The virtual method invoked from a dependency property's `PropertyChangedCallback` should be documented with `<summary>This method is invoked when the <see cref=\"BarProperty\"/> changes.</summary>` and a `<param>` describing each of its old- and new-value parameters. Adds the documentation when it is missing and corrects it when it says something else."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.DocumentPropertyChangedCallback"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.DocumentPropertyChangedCallback"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.DocumentPropertyChangedCallback"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/documentpropertychangedcallback.md"}
  moderneOnly
>

<RecipeHeader.Title>Property changed callback should have standard documentation text</RecipeHeader.Title>

<RecipeHeader.Description>The virtual method invoked from a dependency property's `PropertyChangedCallback` should be documented with `<summary>This method is invoked when the <see cref="BarProperty"/> changes.</summary>` and a `<param>` describing each of its old- and new-value parameters. Adds the documentation when it is missing and corrects it when it says something else.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.DocumentPropertyChangedCallback","displayName":"Property changed callback should have standard documentation text","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

