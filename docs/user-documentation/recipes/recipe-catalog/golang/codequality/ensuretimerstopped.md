---
title: "Ensure timer stopped"
sidebar_label: "Ensure timer stopped"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Ensure timer stopped"}
  description={"Find calls to `time.NewTimer`. Timers should be stopped when no longer needed to release resources."}
  fqName={"org.openrewrite.golang.codequality.EnsureTimerStopped"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.EnsureTimerStopped"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.EnsureTimerStopped"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/ensuretimerstopped.md"}
  moderneOnly
>

<RecipeHeader.Title>Ensure timer stopped</RecipeHeader.Title>

<RecipeHeader.Description>Find calls to `time.NewTimer`. Timers should be stopped when no longer needed to release resources.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.EnsureTimerStopped","displayName":"Ensure timer stopped","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

