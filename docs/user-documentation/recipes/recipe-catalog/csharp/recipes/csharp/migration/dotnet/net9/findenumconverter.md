---
title: "Find `EnumConverter` constructor validation change"
sidebar_label: "Find `EnumConverter` constructor validation change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `EnumConverter` constructor validation change"}
  description={"Finds `new EnumConverter()` constructor calls. In .NET 9, `EnumConverter` validates that the registered type is actually an enum and throws `ArgumentException` if not."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindEnumConverter"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindEnumConverter"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindEnumConverter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findenumconverter.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `EnumConverter` constructor validation change</RecipeHeader.Title>

<RecipeHeader.Description>Finds `new EnumConverter()` constructor calls. In .NET 9, `EnumConverter` validates that the registered type is actually an enum and throws `ArgumentException` if not.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindEnumConverter","displayName":"Find `EnumConverter` constructor validation change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

