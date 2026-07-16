---
title: "Find implicit authentication default scheme (ASP.NET Core 9)"
sidebar_label: "Find implicit authentication default scheme (ASP.NET Core 9)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find implicit authentication default scheme (ASP.NET Core 9)"}
  description={"Finds calls to `AddAuthentication()` with no arguments. In .NET 9, a single registered authentication scheme is no longer automatically used as the default."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindImplicitAuthenticationDefault"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["aspnet","search","dotnet","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindImplicitAuthenticationDefault"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindImplicitAuthenticationDefault"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findimplicitauthenticationdefault.md"}
  moderneOnly
>

<RecipeHeader.Title>Find implicit authentication default scheme (ASP.NET Core 9)</RecipeHeader.Title>

<RecipeHeader.Description>Finds calls to `AddAuthentication()` with no arguments. In .NET 9, a single registered authentication scheme is no longer automatically used as the default.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindImplicitAuthenticationDefault","displayName":"Find implicit authentication default scheme (ASP.NET Core 9)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

