---
title: "Prefer errors.Is over == for error comparison"
sidebar_label: "Prefer errors.Is over == for error comparison"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer errors.Is over == for error comparison"}
  description={"Replace `err == ErrFoo` with `errors.Is(err, ErrFoo)` for correct wrapped error handling."}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsOverEquality"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsOverEquality"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferErrorsIsOverEquality"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/prefererrorsisoverequality.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer errors.Is over == for error comparison</RecipeHeader.Title>

<RecipeHeader.Description>Replace `err == ErrFoo` with `errors.Is(err, ErrFoo)` for correct wrapped error handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferErrorsIsOverEquality","displayName":"Prefer errors.Is over == for error comparison","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

