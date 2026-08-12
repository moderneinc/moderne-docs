---
title: "Prefer errors.Is for net.ErrClosed comparison"
sidebar_label: "Prefer errors.Is for net.ErrClosed comparison"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer errors.Is for net.ErrClosed comparison"}
  description={"Replace `err == net.ErrClosed` with `errors.Is(err, net.ErrClosed)` and `err != net.ErrClosed` with `!errors.Is(err, net.ErrClosed)` for correct wrapped error handling."}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsNetClosed"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsNetClosed"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferErrorsIsNetClosed"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/prefererrorsisnetclosed.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer errors.Is for net.ErrClosed comparison</RecipeHeader.Title>

<RecipeHeader.Description>Replace `err == net.ErrClosed` with `errors.Is(err, net.ErrClosed)` and `err != net.ErrClosed` with `!errors.Is(err, net.ErrClosed)` for correct wrapped error handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferErrorsIsNetClosed","displayName":"Prefer errors.Is for net.ErrClosed comparison","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

