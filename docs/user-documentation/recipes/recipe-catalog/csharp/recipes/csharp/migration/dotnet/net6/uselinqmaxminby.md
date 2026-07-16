---
title: "Use LINQ MaxBy() and MinBy()"
sidebar_label: "Use LINQ MaxBy() and MinBy()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use LINQ MaxBy() and MinBy()"}
  description={"Replace `collection.OrderByDescending(selector).First()` with `collection.MaxBy(selector)` and `collection.OrderBy(selector).First()` with `collection.MinBy(selector)`. Also handles `.Last()` variants (OrderBy().Last() → MaxBy, OrderByDescending().Last() → MinBy). Note: MinBy/MaxBy return default for empty reference-type sequences instead of throwing. Available since .NET 6."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UseLinqMaxMinBy"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["modernization","csharp","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UseLinqMaxMinBy"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UseLinqMaxMinBy"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/uselinqmaxminby.md"}
  moderneOnly
>

<RecipeHeader.Title>Use LINQ MaxBy() and MinBy()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `collection.OrderByDescending(selector).First()` with `collection.MaxBy(selector)` and `collection.OrderBy(selector).First()` with `collection.MinBy(selector)`. Also handles `.Last()` variants (OrderBy().Last() → MaxBy, OrderByDescending().Last() → MinBy). Note: MinBy/MaxBy return default for empty reference-type sequences instead of throwing. Available since .NET 6.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UseLinqMaxMinBy","displayName":"Use LINQ MaxBy() and MinBy()","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

