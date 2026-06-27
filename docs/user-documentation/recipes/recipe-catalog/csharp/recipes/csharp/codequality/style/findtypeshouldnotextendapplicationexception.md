---
title: "Types should not extend ApplicationException"
sidebar_label: "Types should not extend ApplicationException"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Types should not extend ApplicationException"}
  description={"Do not create custom exceptions that inherit from `ApplicationException`. Inherit from `Exception` or a more specific exception type."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindTypeShouldNotExtendApplicationException"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindTypeShouldNotExtendApplicationException"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindTypeShouldNotExtendApplicationException"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findtypeshouldnotextendapplicationexception.md"}
  moderneOnly
>

<RecipeHeader.Title>Types should not extend ApplicationException</RecipeHeader.Title>

<RecipeHeader.Description>Do not create custom exceptions that inherit from `ApplicationException`. Inherit from `Exception` or a more specific exception type.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindTypeShouldNotExtendApplicationException","displayName":"Types should not extend ApplicationException","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

