---
title: "Prefer bytes.Equal"
sidebar_label: "Prefer bytes.Equal"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer bytes.Equal"}
  description={"Replace `bytes.Compare(a, b) == 0` with `bytes.Equal(a, b)` and `bytes.Compare(a, b) != 0` with `!bytes.Equal(a, b)`."}
  fqName={"org.openrewrite.golang.codequality.PreferBytesEqual"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferBytesEqual"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferBytesEqual"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferbytesequal.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer bytes.Equal</RecipeHeader.Title>

<RecipeHeader.Description>Replace `bytes.Compare(a, b) == 0` with `bytes.Equal(a, b)` and `bytes.Compare(a, b) != 0` with `!bytes.Equal(a, b)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferBytesEqual","displayName":"Prefer bytes.Equal","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

