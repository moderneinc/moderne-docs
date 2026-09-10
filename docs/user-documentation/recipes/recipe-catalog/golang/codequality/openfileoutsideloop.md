---
title: "Open file outside loop"
sidebar_label: "Open file outside loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Open file outside loop"}
  description={"Find `os.Open()` or `os.Create()` calls inside for/range loops. Opening files in tight loops should use a single open outside the loop."}
  fqName={"org.openrewrite.golang.codequality.OpenFileOutsideLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.OpenFileOutsideLoop"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.OpenFileOutsideLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/openfileoutsideloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Open file outside loop</RecipeHeader.Title>

<RecipeHeader.Description>Find `os.Open()` or `os.Create()` calls inside for/range loops. Opening files in tight loops should use a single open outside the loop.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.OpenFileOutsideLoop","displayName":"Open file outside loop","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

