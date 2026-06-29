---
title: "Remove redundant fmt.Sprintf"
sidebar_label: "Remove redundant fmt.Sprintf"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove redundant fmt.Sprintf"}
  description={"Replace `fmt.Sprintf(\"%s\", s)` with `s` when the format string is a single %s."}
  fqName={"org.openrewrite.golang.codequality.RemoveRedundantSprintf"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.RemoveRedundantSprintf"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.RemoveRedundantSprintf"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/removeredundantsprintf.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove redundant fmt.Sprintf</RecipeHeader.Title>

<RecipeHeader.Description>Replace `fmt.Sprintf("%s", s)` with `s` when the format string is a single %s.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.RemoveRedundantSprintf","displayName":"Remove redundant fmt.Sprintf","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

