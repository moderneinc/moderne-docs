---
title: "Use same dependency property in get and set"
sidebar_label: "Use same dependency property in get and set"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use same dependency property in get and set"}
  description={"The `get` and `set` accessors of a CLR property wrapping a dependency property must pass the same dependency property to `GetValue` and `SetValue`. Flags a property whose accessors disagree, including the read-only case where the setter must use the `DependencyPropertyKey` paired with the getter's `DependencyProperty`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RequireSameDependencyPropertyInGetAndSet"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RequireSameDependencyPropertyInGetAndSet"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RequireSameDependencyPropertyInGetAndSet"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/requiresamedependencypropertyingetandset.md"}
  moderneOnly
>

<RecipeHeader.Title>Use same dependency property in get and set</RecipeHeader.Title>

<RecipeHeader.Description>The `get` and `set` accessors of a CLR property wrapping a dependency property must pass the same dependency property to `GetValue` and `SetValue`. Flags a property whose accessors disagree, including the read-only case where the setter must use the `DependencyPropertyKey` paired with the getter's `DependencyProperty`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RequireSameDependencyPropertyInGetAndSet","displayName":"Use same dependency property in get and set","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

