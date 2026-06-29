---
title: "Simplify bytes.Equal nil check"
sidebar_label: "Simplify bytes.Equal nil check"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify bytes.Equal nil check"}
  description={"Replace `bytes.Equal(b, nil)` and `bytes.Equal(nil, b)` with `len(b) == 0`."}
  fqName={"org.openrewrite.golang.codequality.SimplifyBytesEqualNil"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifyBytesEqualNil"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifyBytesEqualNil"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifybytesequalnil.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify bytes.Equal nil check</RecipeHeader.Title>

<RecipeHeader.Description>Replace `bytes.Equal(b, nil)` and `bytes.Equal(nil, b)` with `len(b) == 0`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifyBytesEqualNil","displayName":"Simplify bytes.Equal nil check","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

