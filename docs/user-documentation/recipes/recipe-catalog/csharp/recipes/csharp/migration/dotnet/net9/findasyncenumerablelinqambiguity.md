---
title: "Find LINQ ambiguities introduced by .NET 9 `IAsyncEnumerable` extensions"
sidebar_label: "Find LINQ ambiguities introduced by .NET 9 `IAsyncEnumerable` extensions"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find LINQ ambiguities introduced by .NET 9 `IAsyncEnumerable` extensions"}
  description={".NET 9 added LINQ extension methods on `IAsyncEnumerable<T>`. Types implementing both `IQueryable<T>` and `IAsyncEnumerable<T>` (notably EF Core `DbSet<T>`) now produce ambiguous `Where`/`Select`/`FirstOrDefault`/etc. calls. Flags such calls for manual disambiguation (typically by inserting `.AsQueryable()`)."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindAsyncEnumerableLinqAmbiguity"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","search","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindAsyncEnumerableLinqAmbiguity"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindAsyncEnumerableLinqAmbiguity"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findasyncenumerablelinqambiguity.md"}
  moderneOnly
>

<RecipeHeader.Title>Find LINQ ambiguities introduced by .NET 9 `IAsyncEnumerable` extensions</RecipeHeader.Title>

<RecipeHeader.Description>.NET 9 added LINQ extension methods on `IAsyncEnumerable<T>`. Types implementing both `IQueryable<T>` and `IAsyncEnumerable<T>` (notably EF Core `DbSet<T>`) now produce ambiguous `Where`/`Select`/`FirstOrDefault`/etc. calls. Flags such calls for manual disambiguation (typically by inserting `.AsQueryable()`).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindAsyncEnumerableLinqAmbiguity","displayName":"Find LINQ ambiguities introduced by .NET 9 `IAsyncEnumerable` extensions","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

