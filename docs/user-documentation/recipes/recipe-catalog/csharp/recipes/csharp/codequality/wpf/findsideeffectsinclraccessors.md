---
title: "Avoid side effects in CLR accessors"
sidebar_label: "Avoid side effects in CLR accessors"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid side effects in CLR accessors"}
  description={"The `get` and `set` accessors of a CLR property wrapping a dependency property must only call `GetValue`/`SetValue`, because the property system bypasses them entirely. Flags any other statement in an accessor body."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSideEffectsInClrAccessors"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSideEffectsInClrAccessors"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSideEffectsInClrAccessors"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/findsideeffectsinclraccessors.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid side effects in CLR accessors</RecipeHeader.Title>

<RecipeHeader.Description>The `get` and `set` accessors of a CLR property wrapping a dependency property must only call `GetValue`/`SetValue`, because the property system bypasses them entirely. Flags any other statement in an accessor body.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSideEffectsInClrAccessors","displayName":"Avoid side effects in CLR accessors","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

