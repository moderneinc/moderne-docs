---
title: "Prefer errors.Is for os permission checks"
sidebar_label: "Prefer errors.Is for os permission checks"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer errors.Is for os permission checks"}
  description={"Replace deprecated `os.IsPermission(err)` with `errors.Is(err, fs.ErrPermission)` (Go 1.16+)."}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsForPermission"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsForPermission"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferErrorsIsForPermission"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/prefererrorsisforpermission.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer errors.Is for os permission checks</RecipeHeader.Title>

<RecipeHeader.Description>Replace deprecated `os.IsPermission(err)` with `errors.Is(err, fs.ErrPermission)` (Go 1.16+).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferErrorsIsForPermission","displayName":"Prefer errors.Is for os permission checks","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

