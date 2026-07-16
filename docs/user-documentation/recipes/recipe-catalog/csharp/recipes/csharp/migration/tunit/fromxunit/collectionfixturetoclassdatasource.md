---
title: "Replace `ICollectionFixture&lt;T&gt;` with `[ClassDataSource&lt;T&gt;]`"
sidebar_label: "Replace `ICollectionFixture&lt;T&gt;` with `[ClassDataSource&lt;T&gt;]`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `ICollectionFixture<T>` with `[ClassDataSource<T>]`"}
  description={"Migrate xUnit collection fixtures to TUnit: remove `[CollectionDefinition]` and `ICollectionFixture<T>` from definition classes, add `[ClassDataSource<T>(Shared = SharedType.Keyed)]` to test classes, and convert constructor fixture injection to primary constructors."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.CollectionFixtureToClassDataSource"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["tunit","csharp","testing","migration","xunit"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.CollectionFixtureToClassDataSource"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.TUnit"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.CollectionFixtureToClassDataSource"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/collectionfixturetoclassdatasource.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `ICollectionFixture<T>` with `[ClassDataSource<T>]`</RecipeHeader.Title>

<RecipeHeader.Description>Migrate xUnit collection fixtures to TUnit: remove `[CollectionDefinition]` and `ICollectionFixture<T>` from definition classes, add `[ClassDataSource<T>(Shared = SharedType.Keyed)]` to test classes, and convert constructor fixture injection to primary constructors.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.CollectionFixtureToClassDataSource","displayName":"Replace `ICollectionFixture<T>` with `[ClassDataSource<T>]`","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.TUnit"}}>

## Usage

</UsageList>

