---
title: "Use SetValue in setter"
sidebar_label: "Use SetValue in setter"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use SetValue in setter"}
  description={"The `set` accessor of a CLR property wrapping a dependency property must call `SetValue` so the assignment becomes a local value. Replaces `SetCurrentValue`, substituting the `DependencyPropertyKey` when the dependency property is read-only."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseSetValueInClrPropertySetter"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseSetValueInClrPropertySetter"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseSetValueInClrPropertySetter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/usesetvalueinclrpropertysetter.md"}
  moderneOnly
>

<RecipeHeader.Title>Use SetValue in setter</RecipeHeader.Title>

<RecipeHeader.Description>The `set` accessor of a CLR property wrapping a dependency property must call `SetValue` so the assignment becomes a local value. Replaces `SetCurrentValue`, substituting the `DependencyPropertyKey` when the dependency property is read-only.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseSetValueInClrPropertySetter","displayName":"Use SetValue in setter","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

