---
title: "Find `CurrentCulture`/`CurrentUICulture` async flow change"
sidebar_label: "Find `CurrentCulture`/`CurrentUICulture` async flow change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `CurrentCulture`/`CurrentUICulture` async flow change"}
  description={"Finds uses of `CurrentCulture`/`CurrentUICulture`, which flow across async tasks (via `ExecutionContext`) when retargeting to .NET Framework 4.6 (`Switch.System.Globalization.NoAsyncCurrentCulture` to revert). Review code that sets the culture and relies on it NOT propagating to async continuations."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindAsyncCurrentCultureFlow"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net-framework","globalization"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindAsyncCurrentCultureFlow"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindAsyncCurrentCultureFlow"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findasynccurrentcultureflow.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `CurrentCulture`/`CurrentUICulture` async flow change</RecipeHeader.Title>

<RecipeHeader.Description>Finds uses of `CurrentCulture`/`CurrentUICulture`, which flow across async tasks (via `ExecutionContext`) when retargeting to .NET Framework 4.6 (`Switch.System.Globalization.NoAsyncCurrentCulture` to revert). Review code that sets the culture and relies on it NOT propagating to async continuations.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindAsyncCurrentCultureFlow","displayName":"Find `CurrentCulture`/`CurrentUICulture` async flow change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

