---
title: "Find Interlocked.CompareExchange lazy init pattern"
sidebar_label: "Find Interlocked.CompareExchange lazy init pattern"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Interlocked.CompareExchange lazy init pattern"}
  description={"Detect `Interlocked.CompareExchange(ref field, new T(), null)` pattern. Use `LazyInitializer.EnsureInitialized` for cleaner lazy initialization."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseLazyInitializerEnsureInitialize"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseLazyInitializerEnsureInitialize"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseLazyInitializerEnsureInitialize"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduselazyinitializerensureinitialize.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Interlocked.CompareExchange lazy init pattern</RecipeHeader.Title>

<RecipeHeader.Description>Detect `Interlocked.CompareExchange(ref field, new T(), null)` pattern. Use `LazyInitializer.EnsureInitialized` for cleaner lazy initialization.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseLazyInitializerEnsureInitialize","displayName":"Find Interlocked.CompareExchange lazy init pattern","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

