---
title: "Migrate to .NET 6"
sidebar_label: "Migrate to .NET 6"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to .NET 6"}
  description={"Migrate C# projects to .NET 6, applying necessary API changes for obsoleted cryptographic types and other breaking changes. Includes all .NET Core 3.0, 3.1, and .NET 5 migration steps. See https://learn.microsoft.com/en-us/dotnet/core/compatibility/6.0."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UpgradeToDotNet6"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UpgradeToDotNet6"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UpgradeToDotNet6"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/upgradetodotnet6.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate to .NET 6</RecipeHeader.Title>

<RecipeHeader.Description>Migrate C# projects to .NET 6, applying necessary API changes for obsoleted cryptographic types and other breaking changes. Includes all .NET Core 3.0, 3.1, and .NET 5 migration steps. See https://learn.microsoft.com/en-us/dotnet/core/compatibility/6.0.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate to .NET 5","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net5/upgradetodotnet5/"},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Replace internal `FormattedLogValues` with a type alias","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/replaceformattedlogvalues/"},{"name":"Cast `RedisValue` to `string` for `JsonSerializer.Deserialize`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/castredisvalueforjsondeserialize/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype/"},{"name":"Use factory method for abstract cryptographic types","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/usecryptofactorymethods/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changemethodname/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Find `WebRequest`/`HttpWebRequest`/`WebClient` usage (SYSLIB0014)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/findwebrequest/"},{"name":"Find `Thread.Abort` usage (SYSLIB0006)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/findthreadabort/"},{"name":"Find `JsonSerializerOptions.IgnoreNullValues` usage (SYSLIB0020)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/findignorenullvalues/"},{"name":"Find `X509Certificate2.PrivateKey` usage (SYSLIB0028)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/findx509privatekey/"},{"name":"Find `Assembly.CodeBase`/`EscapedCodeBase` usage (SYSLIB0012)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/findassemblycodebase/"},{"name":"Use Environment.ProcessId","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/useenvironmentprocessid/"},{"name":"Use Environment.CurrentManagedThreadId","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/useenvironmentcurrentmanagedthreadid/"},{"name":"Use Environment.ProcessPath","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/useenvironmentprocesspath/"},{"name":"Use LINQ MaxBy() and MinBy()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/uselinqmaxminby/"},{"name":"Use LINQ DistinctBy()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/uselinqdistinctby/"},{"name":"Use Random.Shared","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/userandomshared/"},{"name":"Use ArgumentNullException.ThrowIfNull()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/usethrowifnull/"},{"name":"Use string.Contains(char) overload","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/usestringcontainschar/"},{"name":"Use string.StartsWith(char)/EndsWith(char) overload","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/usestringstartsendswithchar/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UpgradeToDotNet6","displayName":"Migrate to .NET 6","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

