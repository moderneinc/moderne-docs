---
title: "Use factory method for abstract cryptographic types"
sidebar_label: "Use factory method for abstract cryptographic types"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use factory method for abstract cryptographic types"}
  description={"Replace `new AbstractCryptoType()` with `AbstractCryptoType.Create()` for abstract cryptographic types like `SHA256`, `Aes`, `RandomNumberGenerator`, etc. These types are abstract and cannot be instantiated directly; callers must use the static `Create()` factory method."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UseCryptoFactoryMethods"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","SYSLIB0023","SYSLIB0022","SYSLIB0021","cryptography"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UseCryptoFactoryMethods"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UseCryptoFactoryMethods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/usecryptofactorymethods.md"}
  moderneOnly
>

<RecipeHeader.Title>Use factory method for abstract cryptographic types</RecipeHeader.Title>

<RecipeHeader.Description>Replace `new AbstractCryptoType()` with `AbstractCryptoType.Create()` for abstract cryptographic types like `SHA256`, `Aes`, `RandomNumberGenerator`, etc. These types are abstract and cannot be instantiated directly; callers must use the static `Create()` factory method.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UseCryptoFactoryMethods","displayName":"Use factory method for abstract cryptographic types","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

