---
title: "Avoid ReadAll in loop"
sidebar_label: "Avoid ReadAll in loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid ReadAll in loop"}
  description={"Find `io.ReadAll()` or `ioutil.ReadAll()` calls inside for/range loops. These read entire content into memory on each iteration."}
  fqName={"org.openrewrite.golang.codequality.AvoidReadAllInLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AvoidReadAllInLoop"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AvoidReadAllInLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/avoidreadallinloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid ReadAll in loop</RecipeHeader.Title>

<RecipeHeader.Description>Find `io.ReadAll()` or `ioutil.ReadAll()` calls inside for/range loops. These read entire content into memory on each iteration.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AvoidReadAllInLoop","displayName":"Avoid ReadAll in loop","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

