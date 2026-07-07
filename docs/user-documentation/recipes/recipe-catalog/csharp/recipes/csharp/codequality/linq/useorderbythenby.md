---
title: "Use ThenBy instead of second OrderBy"
sidebar_label: "Use ThenBy instead of second OrderBy"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use ThenBy instead of second OrderBy"}
  description={"Replace `items.OrderBy(a).OrderBy(b)` with `items.OrderBy(a).ThenBy(b)`. A second `OrderBy` discards the first sort; `ThenBy` preserves it as a secondary key."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseOrderByThenBy"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseOrderByThenBy"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseOrderByThenBy"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/useorderbythenby.md"}
  moderneOnly
>

<RecipeHeader.Title>Use ThenBy instead of second OrderBy</RecipeHeader.Title>

<RecipeHeader.Description>Replace `items.OrderBy(a).OrderBy(b)` with `items.OrderBy(a).ThenBy(b)`. A second `OrderBy` discards the first sort; `ThenBy` preserves it as a secondary key.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseOrderByThenBy","displayName":"Use ThenBy instead of second OrderBy","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

