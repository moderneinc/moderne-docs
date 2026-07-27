---
title: "Find `X509Certificate2.PrivateKey` usage (SYSLIB0028)"
sidebar_label: "Find `X509Certificate2.PrivateKey` usage (SYSLIB0028)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `X509Certificate2.PrivateKey` usage (SYSLIB0028)"}
  description={"Finds usages of `X509Certificate2.PrivateKey` which is obsolete (SYSLIB0028). Use `GetRSAPrivateKey()`, `GetECDsaPrivateKey()`, or the appropriate algorithm-specific method instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.FindX509PrivateKey"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","cryptography","net6"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.FindX509PrivateKey"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.FindX509PrivateKey"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/findx509privatekey.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `X509Certificate2.PrivateKey` usage (SYSLIB0028)</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `X509Certificate2.PrivateKey` which is obsolete (SYSLIB0028). Use `GetRSAPrivateKey()`, `GetECDsaPrivateKey()`, or the appropriate algorithm-specific method instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.FindX509PrivateKey","displayName":"Find `X509Certificate2.PrivateKey` usage (SYSLIB0028)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

