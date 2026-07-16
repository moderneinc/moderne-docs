---
title: "Use X509CertificateLoader (SYSLIB0057)"
sidebar_label: "Use X509CertificateLoader (SYSLIB0057)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use X509CertificateLoader (SYSLIB0057)"}
  description={"Replace `new X509Certificate2(path, password)` with `X509CertificateLoader.LoadPkcs12FromFile(path, password)`. The two-argument X509Certificate2 constructor is obsolete in .NET 9 (SYSLIB0057)."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseX509CertificateLoader"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","cryptography"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseX509CertificateLoader"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseX509CertificateLoader"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/usex509certificateloader.md"}
  moderneOnly
>

<RecipeHeader.Title>Use X509CertificateLoader (SYSLIB0057)</RecipeHeader.Title>

<RecipeHeader.Description>Replace `new X509Certificate2(path, password)` with `X509CertificateLoader.LoadPkcs12FromFile(path, password)`. The two-argument X509Certificate2 constructor is obsolete in .NET 9 (SYSLIB0057).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseX509CertificateLoader","displayName":"Use X509CertificateLoader (SYSLIB0057)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

