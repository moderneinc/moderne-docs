---
title: "Migrate to .NET 7"
sidebar_label: "Migrate to .NET 7"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to .NET 7"}
  description={"Migrate C# projects to .NET 7, applying necessary API changes. See https://learn.microsoft.com/en-us/dotnet/core/compatibility/7.0."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net7.UpgradeToDotNet7"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net7.UpgradeToDotNet7"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net7.UpgradeToDotNet7"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/upgradetodotnet7.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate to .NET 7</RecipeHeader.Title>

<RecipeHeader.Description>Migrate C# projects to .NET 7, applying necessary API changes. See https://learn.microsoft.com/en-us/dotnet/core/compatibility/7.0.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate to .NET 6","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/upgradetodotnet6/"},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changemethodname/"},{"name":"Find insecure `Rfc2898DeriveBytes` constructors (SYSLIB0041)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/findrfc2898insecurectors/"},{"name":"Find obsolete `SslProtocols.Tls`/`Tls11` usage (SYSLIB0039)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/findobsoletesslprotocols/"},{"name":"Use LINQ Order() and OrderDescending()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/uselinqorder/"},{"name":"Use ArgumentException.ThrowIfNullOrEmpty()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/usethrowifnullorempty/"},{"name":"Use ArgumentOutOfRangeException.ThrowIfNegative()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/usethrowifnegative/"},{"name":"Use ArgumentOutOfRangeException.ThrowIfNegativeOrZero()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/usethrowifnegativeorzero/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net7.UpgradeToDotNet7","displayName":"Migrate to .NET 7","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

