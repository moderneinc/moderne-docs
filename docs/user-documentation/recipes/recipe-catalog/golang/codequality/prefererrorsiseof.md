---
title: "Prefer errors.Is for io.EOF comparison"
sidebar_label: "Prefer errors.Is for io.EOF comparison"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer errors.Is for io.EOF comparison"}
  description={"Replace `err == io.EOF` with `errors.Is(err, io.EOF)` and `err != io.EOF` with `!errors.Is(err, io.EOF)` for correct wrapped error handling."}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsEOF"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsEOF"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferErrorsIsEOF"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/prefererrorsiseof.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer errors.Is for io.EOF comparison</RecipeHeader.Title>

<RecipeHeader.Description>Replace `err == io.EOF` with `errors.Is(err, io.EOF)` and `err != io.EOF` with `!errors.Is(err, io.EOF)` for correct wrapped error handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferErrorsIsEOF","displayName":"Prefer errors.Is for io.EOF comparison","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

