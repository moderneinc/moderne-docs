---
title: "Find obsolete `X509Certificate2`/`X509Certificate` constructors (SYSLIB0057)"
sidebar_label: "Find obsolete `X509Certificate2`/`X509Certificate` constructors (SYSLIB0057)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find obsolete `X509Certificate2`/`X509Certificate` constructors (SYSLIB0057)"}
  description={"Finds usages of `X509Certificate2` and `X509Certificate` constructors that accept binary content or file paths, which are obsolete in .NET 9 (SYSLIB0057). Use `X509CertificateLoader` methods instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindX509CertificateConstructors"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","cryptography","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindX509CertificateConstructors"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindX509CertificateConstructors"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findx509certificateconstructors.md"}
  moderneOnly
>

<RecipeHeader.Title>Find obsolete `X509Certificate2`/`X509Certificate` constructors (SYSLIB0057)</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `X509Certificate2` and `X509Certificate` constructors that accept binary content or file paths, which are obsolete in .NET 9 (SYSLIB0057). Use `X509CertificateLoader` methods instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindX509CertificateConstructors","displayName":"Find obsolete `X509Certificate2`/`X509Certificate` constructors (SYSLIB0057)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

