---
title: "Find `System.Uri` construction (RFC 3986/3987 parsing change)"
sidebar_label: "Find `System.Uri` construction (RFC 3986/3987 parsing change)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `System.Uri` construction (RFC 3986/3987 parsing change)"}
  description={"Finds `System.Uri` construction whose parsing changed when retargeting to .NET Framework 4.5 (RFC 3987) and 4.7.2 (RFC 3986 reserved-character handling and Unicode bidi characters). Review URI construction and normalization for behavior differences."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindUriParsingChange"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net-framework","uri"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindUriParsingChange"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindUriParsingChange"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/finduriparsingchange.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `System.Uri` construction (RFC 3986/3987 parsing change)</RecipeHeader.Title>

<RecipeHeader.Description>Finds `System.Uri` construction whose parsing changed when retargeting to .NET Framework 4.5 (RFC 3987) and 4.7.2 (RFC 3986 reserved-character handling and Unicode bidi characters). Review URI construction and normalization for behavior differences.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindUriParsingChange","displayName":"Find `System.Uri` construction (RFC 3986/3987 parsing change)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

