---
title: "Cast the sender of a dependency property callback to the containing type"
sidebar_label: "Cast the sender of a dependency property callback to the containing type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Cast the sender of a dependency property callback to the containing type"}
  description={"A direct cast of the sender in a `PropertyChangedCallback` or `CoerceValueCallback` should name the type that registered the property rather than a base type, so that the cast documents what the sender really is."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.CastSenderToContainingType"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.CastSenderToContainingType"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.CastSenderToContainingType"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/castsendertocontainingtype.md"}
  moderneOnly
>

<RecipeHeader.Title>Cast the sender of a dependency property callback to the containing type</RecipeHeader.Title>

<RecipeHeader.Description>A direct cast of the sender in a `PropertyChangedCallback` or `CoerceValueCallback` should name the type that registered the property rather than a base type, so that the cast documents what the sender really is.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.CastSenderToContainingType","displayName":"Cast the sender of a dependency property callback to the containing type","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

