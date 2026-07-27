---
title: "Find `IAsyncLifetime` needing TUnit migration"
sidebar_label: "Find `IAsyncLifetime` needing TUnit migration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `IAsyncLifetime` needing TUnit migration"}
  description={"Find classes implementing `IAsyncLifetime` that should use `[Before(Test)]` and `[After(Test)]` for TUnit."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.AsyncLifetimeToBeforeAfterTest"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["tunit","csharp","testing","migration","xunit"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.AsyncLifetimeToBeforeAfterTest"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.TUnit"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.AsyncLifetimeToBeforeAfterTest"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/asynclifetimetobeforeaftertest.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `IAsyncLifetime` needing TUnit migration</RecipeHeader.Title>

<RecipeHeader.Description>Find classes implementing `IAsyncLifetime` that should use `[Before(Test)]` and `[After(Test)]` for TUnit.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.AsyncLifetimeToBeforeAfterTest","displayName":"Find `IAsyncLifetime` needing TUnit migration","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.TUnit"}}>

## Usage

</UsageList>

