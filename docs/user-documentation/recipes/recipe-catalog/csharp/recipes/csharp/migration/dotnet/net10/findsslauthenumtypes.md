---
title: "Find obsolete SSL authentication enum types"
sidebar_label: "Find obsolete SSL authentication enum types"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find obsolete SSL authentication enum types"}
  description={"Finds usage of `ExchangeAlgorithmType`, `CipherAlgorithmType`, and `HashAlgorithmType` from `System.Security.Authentication`. These enum types are obsolete in .NET 10 (SYSLIB0058). Use `SslStream.NegotiatedCipherSuite` instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindSslAuthEnumTypes"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","search","dotnet","tls"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindSslAuthEnumTypes"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindSslAuthEnumTypes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findsslauthenumtypes.md"}
  moderneOnly
>

<RecipeHeader.Title>Find obsolete SSL authentication enum types</RecipeHeader.Title>

<RecipeHeader.Description>Finds usage of `ExchangeAlgorithmType`, `CipherAlgorithmType`, and `HashAlgorithmType` from `System.Security.Authentication`. These enum types are obsolete in .NET 10 (SYSLIB0058). Use `SslStream.NegotiatedCipherSuite` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindSslAuthEnumTypes","displayName":"Find obsolete SSL authentication enum types","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

