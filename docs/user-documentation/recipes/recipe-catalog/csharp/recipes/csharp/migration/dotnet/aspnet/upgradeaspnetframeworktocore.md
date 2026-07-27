---
title: "Migrate ASP.NET Framework to ASP.NET Core"
sidebar_label: "Migrate ASP.NET Framework to ASP.NET Core"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate ASP.NET Framework to ASP.NET Core"}
  description={"Migrate ASP.NET Framework (System.Web.Mvc, System.Web.Http) types to their ASP.NET Core equivalents. Based on the .NET Upgrade Assistant's UA0002 and UA0010 diagnostics. See https://learn.microsoft.com/en-us/aspnet/core/migration/proper-to-2x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNet.UpgradeAspNetFrameworkToCore"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["aspnet","csharp","dotnet","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNet.UpgradeAspNetFrameworkToCore"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNet.UpgradeAspNetFrameworkToCore"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/aspnet/upgradeaspnetframeworktocore.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate ASP.NET Framework to ASP.NET Core</RecipeHeader.Title>

<RecipeHeader.Description>Migrate ASP.NET Framework (System.Web.Mvc, System.Web.Http) types to their ASP.NET Core equivalents. Based on the .NET Upgrade Assistant's UA0002 and UA0010 diagnostics. See https://learn.microsoft.com/en-us/aspnet/core/migration/proper-to-2x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNet.UpgradeAspNetFrameworkToCore","displayName":"Migrate ASP.NET Framework to ASP.NET Core","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

