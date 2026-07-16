---
title: "Find insecure `Rfc2898DeriveBytes` constructors (SYSLIB0041)"
sidebar_label: "Find insecure `Rfc2898DeriveBytes` constructors (SYSLIB0041)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find insecure `Rfc2898DeriveBytes` constructors (SYSLIB0041)"}
  description={"Finds `Rfc2898DeriveBytes` constructor calls that use default SHA1 or low iteration counts, which are obsolete in .NET 7 (SYSLIB0041). Specify `HashAlgorithmName` and at least 600,000 iterations."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net7.FindRfc2898InsecureCtors"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net7","cryptography"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net7.FindRfc2898InsecureCtors"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net7.FindRfc2898InsecureCtors"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/findrfc2898insecurectors.md"}
  moderneOnly
>

<RecipeHeader.Title>Find insecure `Rfc2898DeriveBytes` constructors (SYSLIB0041)</RecipeHeader.Title>

<RecipeHeader.Description>Finds `Rfc2898DeriveBytes` constructor calls that use default SHA1 or low iteration counts, which are obsolete in .NET 7 (SYSLIB0041). Specify `HashAlgorithmName` and at least 600,000 iterations.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net7.FindRfc2898InsecureCtors","displayName":"Find insecure `Rfc2898DeriveBytes` constructors (SYSLIB0041)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

