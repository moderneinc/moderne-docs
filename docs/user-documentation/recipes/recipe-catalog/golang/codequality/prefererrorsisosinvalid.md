---
title: "Prefer errors.Is for os.ErrInvalid comparison"
sidebar_label: "Prefer errors.Is for os.ErrInvalid comparison"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer errors.Is for os.ErrInvalid comparison"}
  description={"Replace `err == os.ErrInvalid` with `errors.Is(err, os.ErrInvalid)` for correct wrapped error handling."}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsOsInvalid"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsOsInvalid"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferErrorsIsOsInvalid"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/prefererrorsisosinvalid.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer errors.Is for os.ErrInvalid comparison</RecipeHeader.Title>

<RecipeHeader.Description>Replace `err == os.ErrInvalid` with `errors.Is(err, os.ErrInvalid)` for correct wrapped error handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferErrorsIsOsInvalid","displayName":"Prefer errors.Is for os.ErrInvalid comparison","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

