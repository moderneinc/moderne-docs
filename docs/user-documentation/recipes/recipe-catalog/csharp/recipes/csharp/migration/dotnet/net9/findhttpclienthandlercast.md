---
title: "Find `HttpClientHandler` usage (HttpClientFactory default change)"
sidebar_label: "Find `HttpClientHandler` usage (HttpClientFactory default change)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `HttpClientHandler` usage (HttpClientFactory default change)"}
  description={"Finds usages of `HttpClientHandler` which may break when `HttpClientFactory` switches its default handler to `SocketsHttpHandler` in .NET 9."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindHttpClientHandlerCast"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","networking","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindHttpClientHandlerCast"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindHttpClientHandlerCast"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findhttpclienthandlercast.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `HttpClientHandler` usage (HttpClientFactory default change)</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `HttpClientHandler` which may break when `HttpClientFactory` switches its default handler to `SocketsHttpHandler` in .NET 9.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindHttpClientHandlerCast","displayName":"Find `HttpClientHandler` usage (HttpClientFactory default change)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

