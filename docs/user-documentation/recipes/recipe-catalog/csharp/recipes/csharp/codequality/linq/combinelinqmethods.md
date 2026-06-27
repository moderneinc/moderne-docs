---
title: "Combine LINQ methods"
sidebar_label: "Combine LINQ methods"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Combine LINQ methods"}
  description={"Combine `.Where(predicate).First()` and similar patterns into `.First(predicate)`, and consecutive `.Where().Where()` calls into a single `.Where()` with a combined predicate. Eliminating intermediate LINQ calls improves readability."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.CombineLinqMethods"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.CombineLinqMethods"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.CombineLinqMethods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/combinelinqmethods.md"}
  moderneOnly
>

<RecipeHeader.Title>Combine LINQ methods</RecipeHeader.Title>

<RecipeHeader.Description>Combine `.Where(predicate).First()` and similar patterns into `.First(predicate)`, and consecutive `.Where().Where()` calls into a single `.Where()` with a combined predicate. Eliminating intermediate LINQ calls improves readability.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.CombineLinqMethods","displayName":"Combine LINQ methods","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

