---
title: "Remove empty fmt.Sprintf"
sidebar_label: "Remove empty fmt.Sprintf"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove empty fmt.Sprintf"}
  description={"Replace `fmt.Sprintf(\"\")` calls with an empty format string and no args with `\"\"`."}
  fqName={"org.openrewrite.golang.codequality.FindEmptyFmtSprintf"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.FindEmptyFmtSprintf"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.FindEmptyFmtSprintf"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/findemptyfmtsprintf.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove empty fmt.Sprintf</RecipeHeader.Title>

<RecipeHeader.Description>Replace `fmt.Sprintf("")` calls with an empty format string and no args with `""`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.FindEmptyFmtSprintf","displayName":"Remove empty fmt.Sprintf","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

