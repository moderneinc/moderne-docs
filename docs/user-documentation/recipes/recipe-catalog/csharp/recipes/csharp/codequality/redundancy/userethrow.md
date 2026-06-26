---
title: "Use rethrow instead of throw ex"
sidebar_label: "Use rethrow instead of throw ex"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use rethrow instead of throw ex"}
  description={"Replace `throw ex;` with `throw;` inside catch clauses when `ex` is the caught exception variable. A bare `throw` preserves the original stack trace."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UseRethrow"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Use rethrow instead of throw ex"}
  description={"Replace `throw ex;` with `throw;` inside catch clauses when `ex` is the caught exception variable. A bare `throw` preserves the original stack trace."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UseRethrow"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UseRethrow"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/userethrow.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UseRethrow","displayName":"Use rethrow instead of throw ex","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

