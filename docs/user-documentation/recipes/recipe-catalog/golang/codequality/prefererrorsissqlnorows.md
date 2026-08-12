---
title: "Prefer errors.Is for sql.ErrNoRows comparison"
sidebar_label: "Prefer errors.Is for sql.ErrNoRows comparison"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer errors.Is for sql.ErrNoRows comparison"}
  description={"Replace `err == sql.ErrNoRows` with `errors.Is(err, sql.ErrNoRows)` and `err != sql.ErrNoRows` with `!errors.Is(err, sql.ErrNoRows)` for correct wrapped error handling."}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsSqlNoRows"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsSqlNoRows"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferErrorsIsSqlNoRows"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/prefererrorsissqlnorows.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer errors.Is for sql.ErrNoRows comparison</RecipeHeader.Title>

<RecipeHeader.Description>Replace `err == sql.ErrNoRows` with `errors.Is(err, sql.ErrNoRows)` and `err != sql.ErrNoRows` with `!errors.Is(err, sql.ErrNoRows)` for correct wrapped error handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferErrorsIsSqlNoRows","displayName":"Prefer errors.Is for sql.ErrNoRows comparison","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

