---
title: "Prefer errors.Is for http.ErrServerClosed comparison"
sidebar_label: "Prefer errors.Is for http.ErrServerClosed comparison"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer errors.Is for http.ErrServerClosed comparison"}
  description={"Replace `err == http.ErrServerClosed` with `errors.Is(err, http.ErrServerClosed)` and `err != http.ErrServerClosed` with `!errors.Is(err, http.ErrServerClosed)` for correct wrapped error handling."}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsHttpServerClosed"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsHttpServerClosed"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferErrorsIsHttpServerClosed"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/prefererrorsishttpserverclosed.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer errors.Is for http.ErrServerClosed comparison</RecipeHeader.Title>

<RecipeHeader.Description>Replace `err == http.ErrServerClosed` with `errors.Is(err, http.ErrServerClosed)` and `err != http.ErrServerClosed` with `!errors.Is(err, http.ErrServerClosed)` for correct wrapped error handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferErrorsIsHttpServerClosed","displayName":"Prefer errors.Is for http.ErrServerClosed comparison","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

