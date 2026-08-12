---
title: "DependencyPropertyKey member must be declared before DependencyProperty member"
sidebar_label: "DependencyPropertyKey member must be declared before DependencyProperty member"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"DependencyPropertyKey member must be declared before DependencyProperty member"}
  description={"A `DependencyProperty` initialized from `<key>.DependencyProperty` must be declared after that `DependencyPropertyKey`, because static initializers run in declaration order and the key would otherwise still be null. Moves the key above the property."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.DeclareDependencyPropertyKeyBeforeProperty"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.DeclareDependencyPropertyKeyBeforeProperty"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.DeclareDependencyPropertyKeyBeforeProperty"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/declaredependencypropertykeybeforeproperty.md"}
  moderneOnly
>

<RecipeHeader.Title>DependencyPropertyKey member must be declared before DependencyProperty member</RecipeHeader.Title>

<RecipeHeader.Description>A `DependencyProperty` initialized from `<key>.DependencyProperty` must be declared after that `DependencyPropertyKey`, because static initializers run in declaration order and the key would otherwise still be null. Moves the key above the property.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.DeclareDependencyPropertyKeyBeforeProperty","displayName":"DependencyPropertyKey member must be declared before DependencyProperty member","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

