---
title: "Fix error string format"
sidebar_label: "Fix error string format"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Fix error string format"}
  description={"Lowercase the leading word of `errors.New` and `fmt.Errorf` messages and remove trailing punctuation, so the message reads correctly when a caller wraps it in a larger one (staticcheck ST1005)."}
  fqName={"org.openrewrite.golang.codequality.FixErrorStringFormat"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.FixErrorStringFormat"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.FixErrorStringFormat"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/fixerrorstringformat.md"}
  moderneOnly
>

<RecipeHeader.Title>Fix error string format</RecipeHeader.Title>

<RecipeHeader.Description>Lowercase the leading word of `errors.New` and `fmt.Errorf` messages and remove trailing punctuation, so the message reads correctly when a caller wraps it in a larger one (staticcheck ST1005).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.FixErrorStringFormat","displayName":"Fix error string format","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

