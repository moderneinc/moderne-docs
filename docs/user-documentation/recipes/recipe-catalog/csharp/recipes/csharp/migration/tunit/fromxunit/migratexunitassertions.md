---
title: "Migrate xUnit assertions to TUnit"
sidebar_label: "Migrate xUnit assertions to TUnit"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate xUnit assertions to TUnit"}
  description={"Replace xUnit `Assert.*` calls with TUnit's fluent `await Assert.That(...).Is*()` assertions. Note: test methods may need to be changed to `async Task` separately."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.MigrateXUnitAssertions"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["tunit","csharp","testing","migration","xunit"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.MigrateXUnitAssertions"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.TUnit"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.MigrateXUnitAssertions"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/migratexunitassertions.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate xUnit assertions to TUnit</RecipeHeader.Title>

<RecipeHeader.Description>Replace xUnit `Assert.*` calls with TUnit's fluent `await Assert.That(...).Is*()` assertions. Note: test methods may need to be changed to `async Task` separately.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.MigrateXUnitAssertions","displayName":"Migrate xUnit assertions to TUnit","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.TUnit"}}>

## Usage

</UsageList>

