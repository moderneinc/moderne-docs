---
title: "Find obsolete `Rfc2898DeriveBytes` constructors (SYSLIB0060)"
sidebar_label: "Find obsolete `Rfc2898DeriveBytes` constructors (SYSLIB0060)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find obsolete `Rfc2898DeriveBytes` constructors (SYSLIB0060)"}
  description={"Finds `new Rfc2898DeriveBytes(...)` constructor calls which are obsolete in .NET 10. Use the static `Rfc2898DeriveBytes.Pbkdf2()` method instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindRfc2898DeriveBytesObsolete"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","search","dotnet","cryptography"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindRfc2898DeriveBytesObsolete"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindRfc2898DeriveBytesObsolete"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findrfc2898derivebytesobsolete.md"}
  moderneOnly
>

<RecipeHeader.Title>Find obsolete `Rfc2898DeriveBytes` constructors (SYSLIB0060)</RecipeHeader.Title>

<RecipeHeader.Description>Finds `new Rfc2898DeriveBytes(...)` constructor calls which are obsolete in .NET 10. Use the static `Rfc2898DeriveBytes.Pbkdf2()` method instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindRfc2898DeriveBytesObsolete","displayName":"Find obsolete `Rfc2898DeriveBytes` constructors (SYSLIB0060)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

