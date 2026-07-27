---
title: "Prefer errors.Is for context error comparison"
sidebar_label: "Prefer errors.Is for context error comparison"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer errors.Is for context error comparison"}
  description={"Replace `err == context.Canceled` and `err == context.DeadlineExceeded` with `errors.Is` for correct wrapped error handling."}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsContext"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsContext"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferErrorsIsContext"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/prefererrorsiscontext.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer errors.Is for context error comparison</RecipeHeader.Title>

<RecipeHeader.Description>Replace `err == context.Canceled` and `err == context.DeadlineExceeded` with `errors.Is` for correct wrapped error handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferErrorsIsContext","displayName":"Prefer errors.Is for context error comparison","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

