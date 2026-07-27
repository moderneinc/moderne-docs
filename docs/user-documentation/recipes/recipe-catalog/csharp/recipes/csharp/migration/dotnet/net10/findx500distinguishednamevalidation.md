---
title: "Find `X500DistinguishedName` string constructor stricter validation"
sidebar_label: "Find `X500DistinguishedName` string constructor stricter validation"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `X500DistinguishedName` string constructor stricter validation"}
  description={"Finds `new X500DistinguishedName(string, ...)` constructor calls which have stricter validation in .NET 10. Non-Windows environments may reject previously accepted values."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindX500DistinguishedNameValidation"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","search","dotnet","cryptography"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindX500DistinguishedNameValidation"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindX500DistinguishedNameValidation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findx500distinguishednamevalidation.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `X500DistinguishedName` string constructor stricter validation</RecipeHeader.Title>

<RecipeHeader.Description>Finds `new X500DistinguishedName(string, ...)` constructor calls which have stricter validation in .NET 10. Non-Windows environments may reject previously accepted values.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindX500DistinguishedNameValidation","displayName":"Find `X500DistinguishedName` string constructor stricter validation","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

