---
title: "Find `HttpListenerRequest.UserAgent` nullable change"
sidebar_label: "Find `HttpListenerRequest.UserAgent` nullable change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `HttpListenerRequest.UserAgent` nullable change"}
  description={"Finds accesses to `HttpListenerRequest.UserAgent` which changed from `string` to `string?` in .NET 9. Code that assumes `UserAgent` is non-null may throw `NullReferenceException`."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindHttpListenerRequestUserAgent"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","networking","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindHttpListenerRequestUserAgent"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindHttpListenerRequestUserAgent"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findhttplistenerrequestuseragent.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `HttpListenerRequest.UserAgent` nullable change</RecipeHeader.Title>

<RecipeHeader.Description>Finds accesses to `HttpListenerRequest.UserAgent` which changed from `string` to `string?` in .NET 9. Code that assumes `UserAgent` is non-null may throw `NullReferenceException`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindHttpListenerRequestUserAgent","displayName":"Find `HttpListenerRequest.UserAgent` nullable change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

