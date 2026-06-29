---
title: "Avoid context.WithValue"
sidebar_label: "Avoid context.WithValue"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid context.WithValue"}
  description={"Find calls to `context.WithValue()`. Context values are an anti-pattern for passing dependencies; prefer explicit function parameters."}
  fqName={"org.openrewrite.golang.codequality.AvoidContextWithValue"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AvoidContextWithValue"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AvoidContextWithValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/avoidcontextwithvalue.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid context.WithValue</RecipeHeader.Title>

<RecipeHeader.Description>Find calls to `context.WithValue()`. Context values are an anti-pattern for passing dependencies; prefer explicit function parameters.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AvoidContextWithValue","displayName":"Avoid context.WithValue","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

