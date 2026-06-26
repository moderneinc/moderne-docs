---
title: "Find closure in GetOrAdd that could use factory argument"
sidebar_label: "Find closure in GetOrAdd that could use factory argument"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find closure in GetOrAdd that could use factory argument"}
  description={"Detect `ConcurrentDictionary.GetOrAdd` calls with lambdas that capture variables. Use the overload with a factory argument parameter to avoid allocation."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindAvoidClosureByUsingFactoryArg"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find closure in GetOrAdd that could use factory argument"}
  description={"Detect `ConcurrentDictionary.GetOrAdd` calls with lambdas that capture variables. Use the overload with a factory argument parameter to avoid allocation."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindAvoidClosureByUsingFactoryArg"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindAvoidClosureByUsingFactoryArg"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findavoidclosurebyusingfactoryarg.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindAvoidClosureByUsingFactoryArg","displayName":"Find closure in GetOrAdd that could use factory argument","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

