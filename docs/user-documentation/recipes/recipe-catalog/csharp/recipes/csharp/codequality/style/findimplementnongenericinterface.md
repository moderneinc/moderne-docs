---
title: "Find missing non-generic interface implementation"
sidebar_label: "Find missing non-generic interface implementation"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find missing non-generic interface implementation"}
  description={"Detect types implementing `IComparable<T>` without `IComparable`, or `IEquatable<T>` without proper Equals override."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindImplementNonGenericInterface"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindImplementNonGenericInterface"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindImplementNonGenericInterface"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findimplementnongenericinterface.md"}
  moderneOnly
>

<RecipeHeader.Title>Find missing non-generic interface implementation</RecipeHeader.Title>

<RecipeHeader.Description>Detect types implementing `IComparable<T>` without `IComparable`, or `IEquatable<T>` without proper Equals override.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindImplementNonGenericInterface","displayName":"Find missing non-generic interface implementation","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

