---
title: "Default value is a shared reference type"
sidebar_label: "Default value is a shared reference type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Default value is a shared reference type"}
  description={"A reference type constructed as a `DependencyProperty` default value is shared by every instance of the owner, so a mutation through one instance is seen by all of them. Flags such a default value."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSharedReferenceTypeDefaultValue"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSharedReferenceTypeDefaultValue"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSharedReferenceTypeDefaultValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/findsharedreferencetypedefaultvalue.md"}
  moderneOnly
>

<RecipeHeader.Title>Default value is a shared reference type</RecipeHeader.Title>

<RecipeHeader.Description>A reference type constructed as a `DependencyProperty` default value is shared by every instance of the owner, so a mutation through one instance is seen by all of them. Flags such a default value.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSharedReferenceTypeDefaultValue","displayName":"Default value is a shared reference type","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

