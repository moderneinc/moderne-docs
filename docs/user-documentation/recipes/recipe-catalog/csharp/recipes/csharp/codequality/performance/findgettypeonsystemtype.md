---
title: "Find GetType() called on System.Type"
sidebar_label: "Find GetType() called on System.Type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find GetType() called on System.Type"}
  description={"Detect `typeof(T).GetType()` which returns `System.RuntimeType` instead of the expected `System.Type`. Use `typeof(T)` directly."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindGetTypeOnSystemType"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find GetType() called on System.Type"}
  description={"Detect `typeof(T).GetType()` which returns `System.RuntimeType` instead of the expected `System.Type`. Use `typeof(T)` directly."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindGetTypeOnSystemType"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindGetTypeOnSystemType"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findgettypeonsystemtype.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindGetTypeOnSystemType","displayName":"Find GetType() called on System.Type","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

