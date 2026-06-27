---
title: "Use Cast&lt;T&gt;() instead of Select with cast"
sidebar_label: "Use Cast&lt;T&gt;() instead of Select with cast"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use Cast<T>() instead of Select with cast"}
  description={"Replace `.Select(x => (T)x)` with `.Cast<T>()`. The `Cast<T>()` method is more concise and clearly expresses the intent."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseCastInsteadOfSelect"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseCastInsteadOfSelect"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseCastInsteadOfSelect"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/usecastinsteadofselect.md"}
  moderneOnly
>

<RecipeHeader.Title>Use Cast&lt;T>() instead of Select with cast</RecipeHeader.Title>

<RecipeHeader.Description>Replace `.Select(x => (T)x)` with `.Cast<T>()`. The `Cast<T>()` method is more concise and clearly expresses the intent.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseCastInsteadOfSelect","displayName":"Use Cast<T>() instead of Select with cast","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

