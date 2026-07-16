---
title: "Replace `PlatformServices` with `AppContext`"
sidebar_label: "Replace `PlatformServices` with `AppContext`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `PlatformServices` with `AppContext`"}
  description={"Replaces `Microsoft.Extensions.PlatformAbstractions.PlatformServices.Default.Application.ApplicationBasePath` with `System.AppContext.BaseDirectory`. The PlatformAbstractions package was removed in .NET Core 3.0. Also removes the obsolete using directive."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net3_0.UsePlatformAbstractionsReplacement"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net3_0.UsePlatformAbstractionsReplacement"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net3_0.UsePlatformAbstractionsReplacement"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_0/useplatformabstractionsreplacement.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `PlatformServices` with `AppContext`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `Microsoft.Extensions.PlatformAbstractions.PlatformServices.Default.Application.ApplicationBasePath` with `System.AppContext.BaseDirectory`. The PlatformAbstractions package was removed in .NET Core 3.0. Also removes the obsolete using directive.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net3_0.UsePlatformAbstractionsReplacement","displayName":"Replace `PlatformServices` with `AppContext`","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

