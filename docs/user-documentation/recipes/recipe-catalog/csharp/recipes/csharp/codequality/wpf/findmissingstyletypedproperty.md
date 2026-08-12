---
title: "StyleTypedProperty should be specified for a Style property"
sidebar_label: "StyleTypedProperty should be specified for a Style property"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"StyleTypedProperty should be specified for a Style property"}
  description={"A `DependencyProperty` registered as `typeof(Style)` needs a matching `[StyleTypedProperty]` on its owning type for the designer to know what the style targets. Flags the backing member; the target type has to be chosen by hand."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindMissingStyleTypedProperty"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindMissingStyleTypedProperty"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindMissingStyleTypedProperty"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/findmissingstyletypedproperty.md"}
  moderneOnly
>

<RecipeHeader.Title>StyleTypedProperty should be specified for a Style property</RecipeHeader.Title>

<RecipeHeader.Description>A `DependencyProperty` registered as `typeof(Style)` needs a matching `[StyleTypedProperty]` on its owning type for the designer to know what the style targets. Flags the backing member; the target type has to be chosen by hand.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindMissingStyleTypedProperty","displayName":"StyleTypedProperty should be specified for a Style property","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

