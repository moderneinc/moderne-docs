---
title: "Avoid time.Sleep"
sidebar_label: "Avoid time.Sleep"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid time.Sleep"}
  description={"Find calls to `time.Sleep()`. In production code, sleeping is often a code smell — consider using tickers, timers, or context-based synchronization."}
  fqName={"org.openrewrite.golang.codequality.AvoidTimeSleep"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AvoidTimeSleep"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AvoidTimeSleep"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/avoidtimesleep.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid time.Sleep</RecipeHeader.Title>

<RecipeHeader.Description>Find calls to `time.Sleep()`. In production code, sleeping is often a code smell — consider using tickers, timers, or context-based synchronization.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AvoidTimeSleep","displayName":"Avoid time.Sleep","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

