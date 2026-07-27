---
title: "Check context error"
sidebar_label: "Check context error"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Check context error"}
  description={"Find `ctx.Err()` calls. The context error should be inspected to distinguish between cancellation and deadline exceeded."}
  fqName={"org.openrewrite.golang.codequality.CheckContextError"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.CheckContextError"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.CheckContextError"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/checkcontexterror.md"}
  moderneOnly
>

<RecipeHeader.Title>Check context error</RecipeHeader.Title>

<RecipeHeader.Description>Find `ctx.Err()` calls. The context error should be inspected to distinguish between cancellation and deadline exceeded.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.CheckContextError","displayName":"Check context error","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

