---
title: "Remove if/else with identical branches"
sidebar_label: "Remove if/else with identical branches"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove if/else with identical branches"}
  description={"Replace an if/else chain where every branch has the same body with just the body, since the conditions have no effect on the outcome."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.AllBranchesIdentical"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","redundancy","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.AllBranchesIdentical"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.AllBranchesIdentical"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/allbranchesidentical.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove if/else with identical branches</RecipeHeader.Title>

<RecipeHeader.Description>Replace an if/else chain where every branch has the same body with just the body, since the conditions have no effect on the outcome.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.AllBranchesIdentical","displayName":"Remove if/else with identical branches","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

