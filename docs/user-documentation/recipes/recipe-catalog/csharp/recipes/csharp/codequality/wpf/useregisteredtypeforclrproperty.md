---
title: "CLR property type should match registered type"
sidebar_label: "CLR property type should match registered type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"CLR property type should match registered type"}
  description={"The CLR property wrapping a `DependencyProperty` must be declared with the type the property was registered with, otherwise reading it throws at run time. Corrects the property type and the cast in its getter."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseRegisteredTypeForClrProperty"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseRegisteredTypeForClrProperty"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseRegisteredTypeForClrProperty"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/useregisteredtypeforclrproperty.md"}
  moderneOnly
>

<RecipeHeader.Title>CLR property type should match registered type</RecipeHeader.Title>

<RecipeHeader.Description>The CLR property wrapping a `DependencyProperty` must be declared with the type the property was registered with, otherwise reading it throws at run time. Corrects the property type and the cast in its getter.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseRegisteredTypeForClrProperty","displayName":"CLR property type should match registered type","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

