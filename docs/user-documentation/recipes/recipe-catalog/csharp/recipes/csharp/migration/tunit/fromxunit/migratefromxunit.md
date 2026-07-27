---
title: "Migrate from xUnit to TUnit"
sidebar_label: "Migrate from xUnit to TUnit"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate from xUnit to TUnit"}
  description={"Migrate xUnit test attributes, assertions, and lifecycle patterns to their TUnit equivalents."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.MigrateFromXUnit"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["tunit","csharp","testing","migration","xunit"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.MigrateFromXUnit"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.TUnit"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.MigrateFromXUnit"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/migratefromxunit.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate from xUnit to TUnit</RecipeHeader.Title>

<RecipeHeader.Description>Migrate xUnit test attributes, assertions, and lifecycle patterns to their TUnit equivalents.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate xUnit attributes to TUnit","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/migratefromxunitattributes/"},{"name":"Migrate xUnit assertions to TUnit","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/migratexunitassertions/"},{"name":"Add `async Task` to methods containing `await`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/addasynctotestmethods/"},{"name":"Replace `IDisposable` with `[After(Test)]`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/disposabletoaftertest/"},{"name":"Find test constructors needing `[Before(Test)]`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/constructortobeforetest/"},{"name":"Find `IAsyncLifetime` needing TUnit migration","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/asynclifetimetobeforeaftertest/"},{"name":"Find `ITestOutputHelper` needing TUnit migration","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/testoutputhelpertotestcontext/"},{"name":"Find `IClassFixture<T>` needing TUnit migration","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/classfixturetoclassdatasource/"},{"name":"Change xUnit using directives to TUnit","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/changexunitusings/"},{"name":"Migrate xUnit NuGet dependencies to TUnit","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/migratexunitdependencies/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.MigrateFromXUnit","displayName":"Migrate from xUnit to TUnit","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.TUnit"}}>

## Usage

</UsageList>

