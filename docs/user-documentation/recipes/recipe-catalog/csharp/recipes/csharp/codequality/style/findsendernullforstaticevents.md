---
title: "Find static event with non-null sender"
sidebar_label: "Find static event with non-null sender"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find static event with non-null sender"}
  description={"Detect static event invocations that pass `this` as the sender. Static events should use `null` as the sender."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindSenderNullForStaticEvents"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindSenderNullForStaticEvents"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindSenderNullForStaticEvents"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findsendernullforstaticevents.md"}
  moderneOnly
>

<RecipeHeader.Title>Find static event with non-null sender</RecipeHeader.Title>

<RecipeHeader.Description>Detect static event invocations that pass `this` as the sender. Static events should use `null` as the sender.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindSenderNullForStaticEvents","displayName":"Find static event with non-null sender","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

