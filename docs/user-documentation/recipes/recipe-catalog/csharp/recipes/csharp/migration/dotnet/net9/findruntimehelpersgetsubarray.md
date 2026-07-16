---
title: "Find `RuntimeHelpers.GetSubArray` return type change"
sidebar_label: "Find `RuntimeHelpers.GetSubArray` return type change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `RuntimeHelpers.GetSubArray` return type change"}
  description={"Finds calls to `RuntimeHelpers.GetSubArray()` which may return a different array type in .NET 9. Code that depends on the runtime type of the returned array may break."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindRuntimeHelpersGetSubArray"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindRuntimeHelpersGetSubArray"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindRuntimeHelpersGetSubArray"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findruntimehelpersgetsubarray.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `RuntimeHelpers.GetSubArray` return type change</RecipeHeader.Title>

<RecipeHeader.Description>Finds calls to `RuntimeHelpers.GetSubArray()` which may return a different array type in .NET 9. Code that depends on the runtime type of the returned array may break.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindRuntimeHelpersGetSubArray","displayName":"Find `RuntimeHelpers.GetSubArray` return type change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

