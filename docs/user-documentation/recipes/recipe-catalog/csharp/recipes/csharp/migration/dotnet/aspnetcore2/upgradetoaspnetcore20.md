---
title: "Migrate to ASP.NET Core 2.0"
sidebar_label: "Migrate to ASP.NET Core 2.0"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to ASP.NET Core 2.0"}
  description={"Migrate ASP.NET Core 1.x projects to ASP.NET Core 2.0, applying authentication and Identity changes. See https://learn.microsoft.com/en-us/aspnet/core/migration/1x-to-2x/identity-2x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNetCore2.UpgradeToAspNetCore20"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","aspnetcore","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNetCore2.UpgradeToAspNetCore20"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNetCore2.UpgradeToAspNetCore20"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/aspnetcore2/upgradetoaspnetcore20.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate to ASP.NET Core 2.0</RecipeHeader.Title>

<RecipeHeader.Description>Migrate ASP.NET Core 1.x projects to ASP.NET Core 2.0, applying authentication and Identity changes. See https://learn.microsoft.com/en-us/aspnet/core/migration/1x-to-2x/identity-2x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace UseIdentity() with UseAuthentication()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/aspnetcore2/useuseauthentication/"},{"name":"Use HttpContext authentication extensions","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/aspnetcore2/usehttpcontextauthextensions/"},{"name":"Use GetExternalAuthenticationSchemesAsync()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/aspnetcore2/usegetexternalauthenticationschemesasync/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Find IAuthenticationManager usage","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/aspnetcore2/findiauthenticationmanager/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNetCore2.UpgradeToAspNetCore20","displayName":"Migrate to ASP.NET Core 2.0","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

