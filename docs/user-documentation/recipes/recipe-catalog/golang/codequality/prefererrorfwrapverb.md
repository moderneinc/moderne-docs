---
title: "Prefer %w over %s in fmt.Errorf for error wrapping"
sidebar_label: "Prefer %w over %s in fmt.Errorf for error wrapping"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer %w over %s in fmt.Errorf for error wrapping"}
  description={"Replace `%s` with `%w` in `fmt.Errorf` format strings when the corresponding argument is an error, to preserve the error chain."}
  fqName={"org.openrewrite.golang.codequality.PreferErrorfWrapVerb"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferErrorfWrapVerb"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferErrorfWrapVerb"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/prefererrorfwrapverb.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer %w over %s in fmt.Errorf for error wrapping</RecipeHeader.Title>

<RecipeHeader.Description>Replace `%s` with `%w` in `fmt.Errorf` format strings when the corresponding argument is an error, to preserve the error chain.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferErrorfWrapVerb","displayName":"Prefer %w over %s in fmt.Errorf for error wrapping","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

