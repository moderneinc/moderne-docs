---
title: "Use LINQ AggregateBy()"
sidebar_label: "Use LINQ AggregateBy()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use LINQ AggregateBy()"}
  description={"Replace `collection.GroupBy(keySelector).ToDictionary(g => g.Key, g => g.Aggregate(seed, func))` with `collection.AggregateBy(keySelector, seed, func).ToDictionary()`. Available since .NET 9."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseLinqAggregateBy"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["modernization","csharp","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseLinqAggregateBy"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseLinqAggregateBy"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/uselinqaggregateby.md"}
  moderneOnly
>

<RecipeHeader.Title>Use LINQ AggregateBy()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `collection.GroupBy(keySelector).ToDictionary(g => g.Key, g => g.Aggregate(seed, func))` with `collection.AggregateBy(keySelector, seed, func).ToDictionary()`. Available since .NET 9.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseLinqAggregateBy","displayName":"Use LINQ AggregateBy()","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

