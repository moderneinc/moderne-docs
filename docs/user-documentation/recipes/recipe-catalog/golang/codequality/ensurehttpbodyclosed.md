---
title: "Ensure HTTP body closed"
sidebar_label: "Ensure HTTP body closed"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Ensure HTTP body closed"}
  description={"Find assignments of a `*http.Response`, as returned by `http.Get`, `http.Post`, `http.Head` or `client.Do`. Its body must be closed to avoid resource leaks."}
  fqName={"org.openrewrite.golang.codequality.EnsureHttpBodyClosed"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.EnsureHttpBodyClosed"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.EnsureHttpBodyClosed"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/ensurehttpbodyclosed.md"}
  moderneOnly
>

<RecipeHeader.Title>Ensure HTTP body closed</RecipeHeader.Title>

<RecipeHeader.Description>Find assignments of a `*http.Response`, as returned by `http.Get`, `http.Post`, `http.Head` or `client.Do`. Its body must be closed to avoid resource leaks.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.EnsureHttpBodyClosed","displayName":"Ensure HTTP body closed","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

