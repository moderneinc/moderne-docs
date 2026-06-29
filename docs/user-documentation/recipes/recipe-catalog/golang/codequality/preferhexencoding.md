---
title: "Prefer hex.EncodeToString over fmt.Sprintf"
sidebar_label: "Prefer hex.EncodeToString over fmt.Sprintf"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer hex.EncodeToString over fmt.Sprintf"}
  description={"Replace `fmt.Sprintf(\"%x\", data)` with `hex.EncodeToString(data)` for clearer intent and better performance."}
  fqName={"org.openrewrite.golang.codequality.PreferHexEncoding"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferHexEncoding"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferHexEncoding"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferhexencoding.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer hex.EncodeToString over fmt.Sprintf</RecipeHeader.Title>

<RecipeHeader.Description>Replace `fmt.Sprintf("%x", data)` with `hex.EncodeToString(data)` for clearer intent and better performance.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferHexEncoding","displayName":"Prefer hex.EncodeToString over fmt.Sprintf","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

