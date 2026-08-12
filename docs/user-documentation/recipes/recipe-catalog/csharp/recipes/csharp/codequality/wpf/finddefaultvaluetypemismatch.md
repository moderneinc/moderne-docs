---
title: "Default value type must match registered type"
sidebar_label: "Default value type must match registered type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Default value type must match registered type"}
  description={"A `DependencyProperty` is registered with a type and its metadata carries a default value typed `object`, so the compiler cannot check one against the other. Flags a default value whose type does not fit the registered type, which throws at run time."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindDefaultValueTypeMismatch"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindDefaultValueTypeMismatch"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindDefaultValueTypeMismatch"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/finddefaultvaluetypemismatch.md"}
  moderneOnly
>

<RecipeHeader.Title>Default value type must match registered type</RecipeHeader.Title>

<RecipeHeader.Description>A `DependencyProperty` is registered with a type and its metadata carries a default value typed `object`, so the compiler cannot check one against the other. Flags a default value whose type does not fit the registered type, which throws at run time.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindDefaultValueTypeMismatch","displayName":"Default value type must match registered type","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

