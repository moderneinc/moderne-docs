---
title: "Do not use blocking calls on tasks"
sidebar_label: "Do not use blocking calls on tasks"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Do not use blocking calls on tasks"}
  description={"Avoid `.Wait()`, `.Result`, and `.GetAwaiter().GetResult()` on tasks. These can cause deadlocks. Use `await` instead."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindDoNotUseBlockingCall"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindDoNotUseBlockingCall"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindDoNotUseBlockingCall"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/finddonotuseblockingcall.md"}
  moderneOnly
>

<RecipeHeader.Title>Do not use blocking calls on tasks</RecipeHeader.Title>

<RecipeHeader.Description>Avoid `.Wait()`, `.Result`, and `.GetAwaiter().GetResult()` on tasks. These can cause deadlocks. Use `await` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindDoNotUseBlockingCall","displayName":"Do not use blocking calls on tasks","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

