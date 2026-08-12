---
title: "CLR accessor for attached property must match registered type"
sidebar_label: "CLR accessor for attached property must match registered type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"CLR accessor for attached property must match registered type"}
  description={"The static `Get`/`Set` accessors of an attached property must use the type the property was registered with, otherwise reading or writing it throws at run time. Corrects the return type, the value parameter type and the cast in the getter."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseRegisteredTypeForClrAccessorMethod"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseRegisteredTypeForClrAccessorMethod"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseRegisteredTypeForClrAccessorMethod"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/useregisteredtypeforclraccessormethod.md"}
  moderneOnly
>

<RecipeHeader.Title>CLR accessor for attached property must match registered type</RecipeHeader.Title>

<RecipeHeader.Description>The static `Get`/`Set` accessors of an attached property must use the type the property was registered with, otherwise reading or writing it throws at run time. Corrects the return type, the value parameter type and the cast in the getter.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseRegisteredTypeForClrAccessorMethod","displayName":"CLR accessor for attached property must match registered type","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

