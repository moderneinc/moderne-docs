---
title: "Use errors.As"
sidebar_label: "Use errors.As"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use errors.As"}
  description={"Replace `if myErr, ok := err.(*MyError); ok { ... }` with `var myErr *MyError; if errors.As(err, &myErr) { ... }` for correct wrapped error handling."}
  fqName={"org.openrewrite.golang.codequality.UseErrorsAs"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.UseErrorsAs"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.UseErrorsAs"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/useerrorsas.md"}
  moderneOnly
>

<RecipeHeader.Title>Use errors.As</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if myErr, ok := err.(*MyError); ok { ... }` with `var myErr *MyError; if errors.As(err, &myErr) { ... }` for correct wrapped error handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.UseErrorsAs","displayName":"Use errors.As","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

