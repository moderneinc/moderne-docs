---
title: "Replace map range-delete with clear()"
sidebar_label: "Replace map range-delete with clear()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace map range-delete with clear()"}
  description={"Replace `for k := range m { delete(m, k) }` with `clear(m)` (Go 1.21+)."}
  fqName={"org.openrewrite.golang.codequality.FindMapRangeClear"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.FindMapRangeClear"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.FindMapRangeClear"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/findmaprangeclear.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace map range-delete with clear()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `for k := range m { delete(m, k) }` with `clear(m)` (Go 1.21+).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.FindMapRangeClear","displayName":"Replace map range-delete with clear()","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

