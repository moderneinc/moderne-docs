---
title: "Ensure ticker stopped"
sidebar_label: "Ensure ticker stopped"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Ensure ticker stopped"}
  description={"Find calls to `time.NewTicker`. Tickers must be stopped when no longer needed to avoid goroutine leaks."}
  fqName={"org.openrewrite.golang.codequality.EnsureTickerStopped"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.EnsureTickerStopped"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.EnsureTickerStopped"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/ensuretickerstopped.md"}
  moderneOnly
>

<RecipeHeader.Title>Ensure ticker stopped</RecipeHeader.Title>

<RecipeHeader.Description>Find calls to `time.NewTicker`. Tickers must be stopped when no longer needed to avoid goroutine leaks.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.EnsureTickerStopped","displayName":"Ensure ticker stopped","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

