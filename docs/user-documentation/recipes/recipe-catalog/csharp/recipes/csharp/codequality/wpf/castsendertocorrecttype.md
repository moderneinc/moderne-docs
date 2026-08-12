---
title: "Cast the sender of a dependency property callback to the correct type"
sidebar_label: "Cast the sender of a dependency property callback to the correct type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Cast the sender of a dependency property callback to the correct type"}
  description={"The `DependencyObject` passed to a `PropertyChangedCallback` or `CoerceValueCallback` is the type that registered the property. Replaces a cast, `as`, `is` or `case` conversion naming a type the sender can never be with the registering type."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.CastSenderToCorrectType"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.CastSenderToCorrectType"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.CastSenderToCorrectType"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/castsendertocorrecttype.md"}
  moderneOnly
>

<RecipeHeader.Title>Cast the sender of a dependency property callback to the correct type</RecipeHeader.Title>

<RecipeHeader.Description>The `DependencyObject` passed to a `PropertyChangedCallback` or `CoerceValueCallback` is the type that registered the property. Replaces a cast, `as`, `is` or `case` conversion naming a type the sender can never be with the registering type.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.CastSenderToCorrectType","displayName":"Cast the sender of a dependency property callback to the correct type","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

