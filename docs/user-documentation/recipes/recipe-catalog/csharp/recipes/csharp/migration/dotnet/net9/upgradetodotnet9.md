---
title: "Migrate to .NET 9"
sidebar_label: "Migrate to .NET 9"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to .NET 9"}
  description={"Migrate C# projects to .NET 9, applying necessary API changes. Includes all .NET 7 and .NET 8 migration steps. See https://learn.microsoft.com/en-us/dotnet/core/compatibility/9.0."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UpgradeToDotNet9"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UpgradeToDotNet9"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UpgradeToDotNet9"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/upgradetodotnet9.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate to .NET 9</RecipeHeader.Title>

<RecipeHeader.Description>Migrate C# projects to .NET 9, applying necessary API changes. Includes all .NET 7 and .NET 8 migration steps. See https://learn.microsoft.com/en-us/dotnet/core/compatibility/9.0.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate to .NET 8","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/upgradetodotnet8/"},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Upgrade NuGet package version","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion/"},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Use Volatile.Read/Write (SYSLIB0054)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/usevolatilereadwrite/"},{"name":"Use X509CertificateLoader (SYSLIB0057)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/usex509certificateloader/"},{"name":"Use MapStaticAssets()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/usemapstaticassets/"},{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument/"},{"name":"Find LINQ ambiguities introduced by .NET 9 `IAsyncEnumerable` extensions","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findasyncenumerablelinqambiguity/"},{"name":"Find `AuthenticationManager` usage (SYSLIB0009)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findauthenticationmanager/"},{"name":"Find `BinaryFormatter` usage (removed in .NET 9)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findbinaryformatter/"},{"name":"Find `BinaryReader.ReadString` behavior change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findbinaryreaderreadstring/"},{"name":"Find `EnumConverter` constructor validation change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findenumconverter/"},{"name":"Find `HttpListenerRequest.UserAgent` nullable change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findhttplistenerrequestuseragent/"},{"name":"Find `InMemoryDirectoryInfo` rootDir prepend change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findinmemorydirectoryinfo/"},{"name":"Find `IncrementingPollingCounter` async callback change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findincrementingpollingcounter/"},{"name":"Find `JsonSerializer.Deserialize` nullable `JsonDocument` change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findjsondocumentnullable/"},{"name":"Find `RuntimeHelpers.GetSubArray` return type change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findruntimehelpersgetsubarray/"},{"name":"Find `SafeEvpPKeyHandle.DuplicateHandle` up-ref change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findsafeevppkeyhandleduplicate/"},{"name":"Find `ServicePointManager` usage (SYSLIB0014)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findservicepointmanager/"},{"name":"Find obsolete `X509Certificate2`/`X509Certificate` constructors (SYSLIB0057)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findx509certificateconstructors/"},{"name":"Find `ZipArchive.CreateEntry` with `CompressionLevel` (bit flag change)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findziparchivecompressionlevel/"},{"name":"Find `ZipArchiveEntry` name/comment UTF-8 encoding change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findziparchiveentryencoding/"},{"name":"Find `HttpClientHandler` usage (HttpClientFactory default change)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findhttpclienthandlercast/"},{"name":"Find synchronous ExecuteUpdate/ExecuteDelete (EF Core 9)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findexecuteupdatesync/"},{"name":"Find Swashbuckle usage (ASP.NET Core 9 built-in OpenAPI)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findswashbuckle/"},{"name":"Migrate Swashbuckle to built-in OpenAPI","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/migrateswashbuckletoopenapi/"},{"name":"Find implicit authentication default scheme (ASP.NET Core 9)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findimplicitauthenticationdefault/"},{"name":"Use LINQ CountBy()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/uselinqcountby/"},{"name":"Use Task.CompletedTask","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/usetaskcompletedtask/"},{"name":"Remove ConfigureAwait(false)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/removeconfigureawaitfalse/"},{"name":"Use System.Threading.Lock for lock fields","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/uselockobject/"},{"name":"Use LINQ AggregateBy()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/uselinqaggregateby/"},{"name":"Use LINQ Index()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/uselinqindex/"},{"name":"Use Frozen collections instead of Immutable","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/usefrozencollections/"},{"name":"Use \\e escape sequence","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/useescapesequencee/"},{"name":"Find non-generic JsonStringEnumConverter","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findjsonstringenumconverter/"},{"name":"Find IDistributedCache usage (HybridCache in .NET 9)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/finddistributedcache/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UpgradeToDotNet9","displayName":"Migrate to .NET 9","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

