---
title: "Extract `Skip` into `[Skip]` attribute"
sidebar_label: "Extract `Skip` into `[Skip]` attribute"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Extract `Skip` into `[Skip]` attribute"}
  description={"Extract the `Skip` argument from `[Fact(Skip = \"...\")]` or `[Theory(Skip = \"...\")]` into a separate TUnit `[Skip(\"...\")]` attribute."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.FactSkipToSkipAttribute"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["tunit","csharp","testing","migration","xunit"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.FactSkipToSkipAttribute"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.TUnit"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.FactSkipToSkipAttribute"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/factskiptoskipattribute.md"}
  moderneOnly
>

<RecipeHeader.Title>Extract `Skip` into `[Skip]` attribute</RecipeHeader.Title>

<RecipeHeader.Description>Extract the `Skip` argument from `[Fact(Skip = "...")]` or `[Theory(Skip = "...")]` into a separate TUnit `[Skip("...")]` attribute.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.FactSkipToSkipAttribute","displayName":"Extract `Skip` into `[Skip]` attribute","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.TUnit"}}>

## Usage

</UsageList>

