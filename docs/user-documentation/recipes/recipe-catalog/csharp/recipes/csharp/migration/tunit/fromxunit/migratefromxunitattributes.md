---
title: "Migrate xUnit attributes to TUnit"
sidebar_label: "Migrate xUnit attributes to TUnit"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate xUnit attributes to TUnit"}
  description={"Replace xUnit test attributes ([Fact], [Theory], [InlineData], etc.) with their TUnit equivalents."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.MigrateFromXUnitAttributes"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["tunit","csharp","testing","migration","xunit"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.MigrateFromXUnitAttributes"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.TUnit"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.MigrateFromXUnitAttributes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/migratefromxunitattributes.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate xUnit attributes to TUnit</RecipeHeader.Title>

<RecipeHeader.Description>Replace xUnit test attributes ([Fact], [Theory], [InlineData], etc.) with their TUnit equivalents.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Extract `Skip` into `[Skip]` attribute","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/factskiptoskipattribute/"},{"name":"Extract `Timeout` into `[Timeout]` attribute","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/facttimeouttotimeoutattribute/"},{"name":"Replace `[Trait(\"Category\", ...)]` with `[Category]`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/traitcategorytocategory/"},{"name":"Replace `[Fact]` with `[Test]`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/facttotest/"},{"name":"Replace `[Theory]` with `[Test]`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/theorytotest/"},{"name":"Replace `[InlineData]` with `[Arguments]`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/inlinedatatoarguments/"},{"name":"Replace `[MemberData]` with `[MethodDataSource]`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/memberdatatomethoddatasource/"},{"name":"Replace `[Trait]` with `[Property]`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/traittoproperty/"},{"name":"Replace `ICollectionFixture<T>` with `[ClassDataSource<T>]`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/collectionfixturetoclassdatasource/"},{"name":"Replace `[Collection]` with `[NotInParallel]`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/collectiontonotinparallel/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.MigrateFromXUnitAttributes","displayName":"Migrate xUnit attributes to TUnit","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.TUnit"}}>

## Usage

</UsageList>

