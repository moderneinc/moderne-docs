---
title: "Use System.Threading.Lock for lock fields"
sidebar_label: "Use System.Threading.Lock for lock fields"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use System.Threading.Lock for lock fields"}
  description={"Replace `object` fields initialized with `new object()` with `System.Threading.Lock` initialized with `new()`. The Lock type provides better performance with the lock statement. Available since .NET 9."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseLockObject"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["modernization","csharp","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseLockObject"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseLockObject"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/uselockobject.md"}
  moderneOnly
>

<RecipeHeader.Title>Use System.Threading.Lock for lock fields</RecipeHeader.Title>

<RecipeHeader.Description>Replace `object` fields initialized with `new object()` with `System.Threading.Lock` initialized with `new()`. The Lock type provides better performance with the lock statement. Available since .NET 9.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseLockObject","displayName":"Use System.Threading.Lock for lock fields","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

