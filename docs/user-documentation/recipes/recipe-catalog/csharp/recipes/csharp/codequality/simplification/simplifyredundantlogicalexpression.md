---
title: "Simplify redundant logical expression"
sidebar_label: "Simplify redundant logical expression"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify redundant logical expression"}
  description={"Simplify `x && x` to `x`, `x || x` to `x`, and similarly for `&` and `|`, where both sides of a logical or bitwise operator are identical."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyRedundantLogicalExpression"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","simplification","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyRedundantLogicalExpression"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyRedundantLogicalExpression"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifyredundantlogicalexpression.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify redundant logical expression</RecipeHeader.Title>

<RecipeHeader.Description>Simplify `x && x` to `x`, `x || x` to `x`, and similarly for `&` and `|`, where both sides of a logical or bitwise operator are identical.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyRedundantLogicalExpression","displayName":"Simplify redundant logical expression","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

