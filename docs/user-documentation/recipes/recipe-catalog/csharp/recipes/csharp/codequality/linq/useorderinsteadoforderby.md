---
title: "Use Order() instead of OrderBy() with identity"
sidebar_label: "Use Order() instead of OrderBy() with identity"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use Order() instead of OrderBy() with identity"}
  description={"Replace `.OrderBy(x => x)` with `.Order()`. The `Order()` method (available since .NET 7) is a cleaner way to sort elements in their natural order."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseOrderInsteadOfOrderBy"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseOrderInsteadOfOrderBy"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseOrderInsteadOfOrderBy"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/useorderinsteadoforderby.md"}
  moderneOnly
>

<RecipeHeader.Title>Use Order() instead of OrderBy() with identity</RecipeHeader.Title>

<RecipeHeader.Description>Replace `.OrderBy(x => x)` with `.Order()`. The `Order()` method (available since .NET 7) is a cleaner way to sort elements in their natural order.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseOrderInsteadOfOrderBy","displayName":"Use Order() instead of OrderBy() with identity","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

