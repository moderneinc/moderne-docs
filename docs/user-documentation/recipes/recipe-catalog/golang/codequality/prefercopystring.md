---
title: "Prefer copy from string"
sidebar_label: "Prefer copy from string"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer copy from string"}
  description={"Replace `copy(dst, []byte(src))` with `copy(dst, src)` since copy accepts a string source."}
  fqName={"org.openrewrite.golang.codequality.PreferCopyString"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferCopyString"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferCopyString"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/prefercopystring.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer copy from string</RecipeHeader.Title>

<RecipeHeader.Description>Replace `copy(dst, []byte(src))` with `copy(dst, src)` since copy accepts a string source.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferCopyString","displayName":"Prefer copy from string","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

