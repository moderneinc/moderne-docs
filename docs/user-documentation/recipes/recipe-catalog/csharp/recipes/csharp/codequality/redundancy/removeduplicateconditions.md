---
title: "Remove duplicate conditions"
sidebar_label: "Remove duplicate conditions"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove duplicate conditions"}
  description={"Remove else-if branches whose condition duplicates an earlier branch in the same if/else-if chain, since the later branch is dead code."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveDuplicateConditions"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","redundancy","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveDuplicateConditions"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveDuplicateConditions"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeduplicateconditions.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove duplicate conditions</RecipeHeader.Title>

<RecipeHeader.Description>Remove else-if branches whose condition duplicates an earlier branch in the same if/else-if chain, since the later branch is dead code.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveDuplicateConditions","displayName":"Remove duplicate conditions","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

