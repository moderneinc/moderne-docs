---
title: "Prefer errors.Is for os existence checks"
sidebar_label: "Prefer errors.Is for os existence checks"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer errors.Is for os existence checks"}
  description={"Replace deprecated `os.IsNotExist(err)` with `errors.Is(err, fs.ErrNotExist)` and `os.IsExist(err)` with `errors.Is(err, fs.ErrExist)` (Go 1.16+)."}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsForOsCheck"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsForOsCheck"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferErrorsIsForOsCheck"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/prefererrorsisforoscheck.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer errors.Is for os existence checks</RecipeHeader.Title>

<RecipeHeader.Description>Replace deprecated `os.IsNotExist(err)` with `errors.Is(err, fs.ErrNotExist)` and `os.IsExist(err)` with `errors.Is(err, fs.ErrExist)` (Go 1.16+).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferErrorsIsForOsCheck","displayName":"Prefer errors.Is for os existence checks","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

