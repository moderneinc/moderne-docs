---
title: "Remove redundant range blank"
sidebar_label: "Remove redundant range blank"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove redundant range blank"}
  description={"Remove the blank identifier from `for i, _ := range s` loops. Use `for i := range s` instead."}
  fqName={"org.openrewrite.golang.codequality.RemoveRedundantRangeBlank"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.RemoveRedundantRangeBlank"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.RemoveRedundantRangeBlank"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/removeredundantrangeblank.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove redundant range blank</RecipeHeader.Title>

<RecipeHeader.Description>Remove the blank identifier from `for i, _ := range s` loops. Use `for i := range s` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.RemoveRedundantRangeBlank","displayName":"Remove redundant range blank","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

