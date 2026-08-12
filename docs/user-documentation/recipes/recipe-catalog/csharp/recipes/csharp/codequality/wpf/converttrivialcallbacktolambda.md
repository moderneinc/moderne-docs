---
title: "Convert a trivial dependency property callback to a lambda"
sidebar_label: "Convert a trivial dependency property callback to a lambda"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert a trivial dependency property callback to a lambda"}
  description={"A `PropertyChangedCallback`, `CoerceValueCallback` or `ValidateValueCallback` whose body is a single expression is inlined as a lambda at the registration, so the callback sits next to the property it belongs to. The method is removed when nothing else used it."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertTrivialCallbackToLambda"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertTrivialCallbackToLambda"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertTrivialCallbackToLambda"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/converttrivialcallbacktolambda.md"}
  moderneOnly
>

<RecipeHeader.Title>Convert a trivial dependency property callback to a lambda</RecipeHeader.Title>

<RecipeHeader.Description>A `PropertyChangedCallback`, `CoerceValueCallback` or `ValidateValueCallback` whose body is a single expression is inlined as a lambda at the registration, so the callback sits next to the property it belongs to. The method is removed when nothing else used it.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertTrivialCallbackToLambda","displayName":"Convert a trivial dependency property callback to a lambda","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

