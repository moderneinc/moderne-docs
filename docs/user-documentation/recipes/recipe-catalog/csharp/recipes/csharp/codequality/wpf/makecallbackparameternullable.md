---
title: "Declare the coerce and validate callback value parameter nullable"
sidebar_label: "Declare the coerce and validate callback value parameter nullable"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Declare the coerce and validate callback value parameter nullable"}
  description={"WPF calls a `CoerceValueCallback` and a `ValidateValueCallback` with a null value, so the value parameter should be declared `object?`. Only applies where nullable reference types are enabled, whether by a `#nullable` directive or by `<Nullable>` in the project."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.MakeCallbackParameterNullable"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.MakeCallbackParameterNullable"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.MakeCallbackParameterNullable"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/makecallbackparameternullable.md"}
  moderneOnly
>

<RecipeHeader.Title>Declare the coerce and validate callback value parameter nullable</RecipeHeader.Title>

<RecipeHeader.Description>WPF calls a `CoerceValueCallback` and a `ValidateValueCallback` with a null value, so the value parameter should be declared `object?`. Only applies where nullable reference types are enabled, whether by a `#nullable` directive or by `<Nullable>` in the project.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.MakeCallbackParameterNullable","displayName":"Declare the coerce and validate callback value parameter nullable","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

