---
title: "Find `KeyedService.AnyKey` behavior change"
sidebar_label: "Find `KeyedService.AnyKey` behavior change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `KeyedService.AnyKey` behavior change"}
  description={"Finds usages of `KeyedService.AnyKey` which has changed behavior in .NET 10. `GetKeyedService(AnyKey)` now throws `InvalidOperationException` and `GetKeyedServices(AnyKey)` no longer returns AnyKey registrations."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindKeyedServiceAnyKey"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","search","dotnet","di"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindKeyedServiceAnyKey"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindKeyedServiceAnyKey"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findkeyedserviceanykey.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `KeyedService.AnyKey` behavior change</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `KeyedService.AnyKey` which has changed behavior in .NET 10. `GetKeyedService(AnyKey)` now throws `InvalidOperationException` and `GetKeyedServices(AnyKey)` no longer returns AnyKey registrations.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindKeyedServiceAnyKey","displayName":"Find `KeyedService.AnyKey` behavior change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

