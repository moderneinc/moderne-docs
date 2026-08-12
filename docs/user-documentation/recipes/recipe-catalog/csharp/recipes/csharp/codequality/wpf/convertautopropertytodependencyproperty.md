---
title: "Convert an auto-property to a dependency property"
sidebar_label: "Convert an auto-property to a dependency property"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert an auto-property to a dependency property"}
  description={"An auto-property on a `DependencyObject` cannot be bound, styled or animated. Registers a `DependencyProperty` for it and rewrites the property to `get => (T)GetValue(XProperty);` / `set => SetValue(XProperty, value);`, keeping any initializer as the metadata default. A setter that is not public — or a get-only property — produces the read-only `DependencyPropertyKey` pattern instead."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertAutoPropertyToDependencyProperty"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertAutoPropertyToDependencyProperty"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertAutoPropertyToDependencyProperty"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/convertautopropertytodependencyproperty.md"}
  moderneOnly
>

<RecipeHeader.Title>Convert an auto-property to a dependency property</RecipeHeader.Title>

<RecipeHeader.Description>An auto-property on a `DependencyObject` cannot be bound, styled or animated. Registers a `DependencyProperty` for it and rewrites the property to `get => (T)GetValue(XProperty);` / `set => SetValue(XProperty, value);`, keeping any initializer as the metadata default. A setter that is not public — or a get-only property — produces the read-only `DependencyPropertyKey` pattern instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertAutoPropertyToDependencyProperty","displayName":"Convert an auto-property to a dependency property","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

