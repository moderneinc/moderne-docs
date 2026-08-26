---
title: "Prefer string comparison operators"
sidebar_label: "Prefer string comparison operators"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer string comparison operators"}
  description={"Replace `strings.Compare(a, b) == 0` with `a == b`, `strings.Compare(a, b) != 0` with `a != b`, `strings.Compare(a, b) < 0` with `a < b`, and `strings.Compare(a, b) > 0` with `a > b`."}
  fqName={"org.openrewrite.golang.codequality.PreferStringComparison"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferStringComparison"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferStringComparison"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferstringcomparison.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer string comparison operators</RecipeHeader.Title>

<RecipeHeader.Description>Replace `strings.Compare(a, b) == 0` with `a == b`, `strings.Compare(a, b) != 0` with `a != b`, `strings.Compare(a, b) < 0` with `a < b`, and `strings.Compare(a, b) > 0` with `a > b`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferStringComparison","displayName":"Prefer string comparison operators","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

