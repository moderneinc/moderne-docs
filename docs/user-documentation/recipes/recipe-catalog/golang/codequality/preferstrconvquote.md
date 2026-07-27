---
title: "Prefer strconv.Quote over fmt.Sprintf"
sidebar_label: "Prefer strconv.Quote over fmt.Sprintf"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer strconv.Quote over fmt.Sprintf"}
  description={"Replace `fmt.Sprintf(\"%q\", s)` with `strconv.Quote(s)` for clearer intent when quoting strings."}
  fqName={"org.openrewrite.golang.codequality.PreferStrconvQuote"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferStrconvQuote"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferStrconvQuote"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferstrconvquote.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer strconv.Quote over fmt.Sprintf</RecipeHeader.Title>

<RecipeHeader.Description>Replace `fmt.Sprintf("%q", s)` with `strconv.Quote(s)` for clearer intent when quoting strings.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferStrconvQuote","displayName":"Prefer strconv.Quote over fmt.Sprintf","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

