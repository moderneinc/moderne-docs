---
title: "Migrate to .NET 8"
sidebar_label: "Migrate to .NET 8"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to .NET 8"}
  description={"Migrate C# projects to .NET 8, applying necessary API changes. Includes all .NET 7 migration steps. See https://learn.microsoft.com/en-us/dotnet/core/compatibility/8.0."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UpgradeToDotNet8"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UpgradeToDotNet8"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UpgradeToDotNet8"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/upgradetodotnet8.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate to .NET 8</RecipeHeader.Title>

<RecipeHeader.Description>Migrate C# projects to .NET 8, applying necessary API changes. Includes all .NET 7 migration steps. See https://learn.microsoft.com/en-us/dotnet/core/compatibility/8.0.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate to .NET 7","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/upgradetodotnet7/"},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changemethodname/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Find legacy serialization constructors (SYSLIB0051)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/findserializationconstructors/"},{"name":"Find `JsonSerializerOptions.AddContext` usage (SYSLIB0049)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/findaddcontext/"},{"name":"Find formatter-based serialization types (SYSLIB0050/0051)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/findformatterbasedserialization/"},{"name":"Find `Regex.CompileToAssembly` usage (SYSLIB0052)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/findregexcompiletoassembly/"},{"name":"Find `AesGcm` constructor without tag size (SYSLIB0053)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/findaesgcmoldconstructor/"},{"name":"Use ArgumentException.ThrowIfNullOrWhiteSpace()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/usethrowifnullorwhitespace/"},{"name":"Use ArgumentOutOfRangeException.ThrowIfGreaterThan()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/usethrowifgreaterthan/"},{"name":"Use ArgumentOutOfRangeException.ThrowIfLessThan()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/usethrowiflessthan/"},{"name":"Use ArgumentOutOfRangeException.ThrowIfZero()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/usethrowifzero/"},{"name":"Find DateTime.Now/UtcNow usage (TimeProvider in .NET 8)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/findtimeabstraction/"},{"name":"Find ToImmutable*() that could use Frozen collections","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/findfrozencollection/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UpgradeToDotNet8","displayName":"Migrate to .NET 8","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

