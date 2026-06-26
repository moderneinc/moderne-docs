---
title: "Use EventArgs.Empty"
sidebar_label: "Use EventArgs.Empty"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use EventArgs.Empty"}
  description={"Replace `new EventArgs()` with `EventArgs.Empty`. The static `EventArgs.Empty` field avoids unnecessary allocations."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseEventArgsEmpty"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Use EventArgs.Empty"}
  description={"Replace `new EventArgs()` with `EventArgs.Empty`. The static `EventArgs.Empty` field avoids unnecessary allocations."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseEventArgsEmpty"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseEventArgsEmpty"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useeventargsempty.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseEventArgsEmpty","displayName":"Use EventArgs.Empty","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

