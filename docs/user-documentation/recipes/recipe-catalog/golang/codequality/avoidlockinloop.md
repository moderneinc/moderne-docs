---
title: "Avoid lock in loop"
sidebar_label: "Avoid lock in loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid lock in loop"}
  description={"Find `Lock()` or `RLock()` calls inside for/range loops. Acquiring locks in tight loops can cause contention; consider locking once outside the loop."}
  fqName={"org.openrewrite.golang.codequality.AvoidLockInLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AvoidLockInLoop"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AvoidLockInLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/avoidlockinloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid lock in loop</RecipeHeader.Title>

<RecipeHeader.Description>Find `Lock()` or `RLock()` calls inside for/range loops. Acquiring locks in tight loops can cause contention; consider locking once outside the loop.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AvoidLockInLoop","displayName":"Avoid lock in loop","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

