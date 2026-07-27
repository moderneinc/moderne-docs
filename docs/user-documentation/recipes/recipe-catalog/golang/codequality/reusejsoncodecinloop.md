---
title: "Reuse JSON codec in loop"
sidebar_label: "Reuse JSON codec in loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Reuse JSON codec in loop"}
  description={"Find `json.Marshal()` or `json.Unmarshal()` calls inside for/range loops. Consider using a pre-allocated encoder/decoder for better performance."}
  fqName={"org.openrewrite.golang.codequality.ReuseJsonCodecInLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.ReuseJsonCodecInLoop"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.ReuseJsonCodecInLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/reusejsoncodecinloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Reuse JSON codec in loop</RecipeHeader.Title>

<RecipeHeader.Description>Find `json.Marshal()` or `json.Unmarshal()` calls inside for/range loops. Consider using a pre-allocated encoder/decoder for better performance.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.ReuseJsonCodecInLoop","displayName":"Reuse JSON codec in loop","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

