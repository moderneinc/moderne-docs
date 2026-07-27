---
title: "Find obsolete `Queryable.MaxBy`/`MinBy` with `IComparer&lt;TSource&gt;` (SYSLIB0061)"
sidebar_label: "Find obsolete `Queryable.MaxBy`/`MinBy` with `IComparer&lt;TSource&gt;` (SYSLIB0061)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find obsolete `Queryable.MaxBy`/`MinBy` with `IComparer<TSource>` (SYSLIB0061)"}
  description={"Finds `Queryable.MaxBy` and `Queryable.MinBy` overloads taking `IComparer<TSource>` which are obsolete in .NET 10. Use the overloads taking `IComparer<TKey>` instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindQueryableMaxByMinByObsolete"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","linq","search","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindQueryableMaxByMinByObsolete"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindQueryableMaxByMinByObsolete"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findqueryablemaxbyminbyobsolete.md"}
  moderneOnly
>

<RecipeHeader.Title>Find obsolete `Queryable.MaxBy`/`MinBy` with `IComparer<TSource>` (SYSLIB0061)</RecipeHeader.Title>

<RecipeHeader.Description>Finds `Queryable.MaxBy` and `Queryable.MinBy` overloads taking `IComparer<TSource>` which are obsolete in .NET 10. Use the overloads taking `IComparer<TKey>` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindQueryableMaxByMinByObsolete","displayName":"Find obsolete `Queryable.MaxBy`/`MinBy` with `IComparer<TSource>` (SYSLIB0061)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

