---
title: "Find obsolete `SslStream` cipher properties (SYSLIB0058)"
sidebar_label: "Find obsolete `SslStream` cipher properties (SYSLIB0058)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find obsolete `SslStream` cipher properties (SYSLIB0058)"}
  description={"Finds usages of `SslStream.KeyExchangeAlgorithm`, `KeyExchangeStrength`, `CipherAlgorithm`, `CipherStrength`, `HashAlgorithm`, and `HashStrength` which are obsolete in .NET 10. Use `SslStream.NegotiatedCipherSuite` instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindSslStreamObsoleteProperties"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","search","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindSslStreamObsoleteProperties"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindSslStreamObsoleteProperties"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findsslstreamobsoleteproperties.md"}
  moderneOnly
>

<RecipeHeader.Title>Find obsolete `SslStream` cipher properties (SYSLIB0058)</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `SslStream.KeyExchangeAlgorithm`, `KeyExchangeStrength`, `CipherAlgorithm`, `CipherStrength`, `HashAlgorithm`, and `HashStrength` which are obsolete in .NET 10. Use `SslStream.NegotiatedCipherSuite` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindSslStreamObsoleteProperties","displayName":"Find obsolete `SslStream` cipher properties (SYSLIB0058)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

