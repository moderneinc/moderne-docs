---
title: "Find unobserved async call result"
sidebar_label: "Find unobserved async call result"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find unobserved async call result"}
  description={"Detect calls to async methods where the returned Task is not awaited, assigned, or otherwise observed. Unobserved tasks may silently swallow exceptions."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindObserveAsyncResult"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find unobserved async call result"}
  description={"Detect calls to async methods where the returned Task is not awaited, assigned, or otherwise observed. Unobserved tasks may silently swallow exceptions."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindObserveAsyncResult"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindObserveAsyncResult"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findobserveasyncresult.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindObserveAsyncResult","displayName":"Find unobserved async call result","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

