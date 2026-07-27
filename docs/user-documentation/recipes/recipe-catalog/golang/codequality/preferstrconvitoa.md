---
title: "Prefer strconv.Itoa over fmt.Sprintf"
sidebar_label: "Prefer strconv.Itoa over fmt.Sprintf"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer strconv.Itoa over fmt.Sprintf"}
  description={"Replace `fmt.Sprintf(\"%d\", n)` with `strconv.Itoa(n)` for better performance."}
  fqName={"org.openrewrite.golang.codequality.PreferStrconvItoa"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferStrconvItoa"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferStrconvItoa"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferstrconvitoa.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer strconv.Itoa over fmt.Sprintf</RecipeHeader.Title>

<RecipeHeader.Description>Replace `fmt.Sprintf("%d", n)` with `strconv.Itoa(n)` for better performance.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferStrconvItoa","displayName":"Prefer strconv.Itoa over fmt.Sprintf","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

