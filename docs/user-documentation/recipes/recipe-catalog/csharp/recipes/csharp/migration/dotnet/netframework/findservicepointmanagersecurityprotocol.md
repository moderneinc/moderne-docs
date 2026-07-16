---
title: "Find `ServicePointManager` TLS configuration"
sidebar_label: "Find `ServicePointManager` TLS configuration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `ServicePointManager` TLS configuration"}
  description={"Finds usages of `System.Net.ServicePointManager` whose TLS behavior changes when retargeting to .NET Framework 4.6+ (SchUseStrongCrypto) and 4.7+ (SystemDefault protocol). The opt-out switches are `Switch.System.Net.DontEnableSchUseStrongCrypto` and `Switch.System.Net.DontEnableSystemDefaultTlsVersions`."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindServicePointManagerSecurityProtocol"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net-framework","networking","tls"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindServicePointManagerSecurityProtocol"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindServicePointManagerSecurityProtocol"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findservicepointmanagersecurityprotocol.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `ServicePointManager` TLS configuration</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `System.Net.ServicePointManager` whose TLS behavior changes when retargeting to .NET Framework 4.6+ (SchUseStrongCrypto) and 4.7+ (SystemDefault protocol). The opt-out switches are `Switch.System.Net.DontEnableSchUseStrongCrypto` and `Switch.System.Net.DontEnableSystemDefaultTlsVersions`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindServicePointManagerSecurityProtocol","displayName":"Find `ServicePointManager` TLS configuration","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

