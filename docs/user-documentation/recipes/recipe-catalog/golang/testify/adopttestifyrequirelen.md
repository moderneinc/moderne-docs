---
title: "Adopt testify require.Len"
sidebar_label: "Adopt testify require.Len"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adopt testify require.Len"}
  description={"Replace `if len(x) != n { t.Fatal(...) }` with `require.Len(t, x, n)` from `github.com/stretchr/testify/require`."}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyRequireLen"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyRequireLen"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.testify.AdoptTestifyRequireLen"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/testify/adopttestifyrequirelen.md"}
  moderneOnly
>

<RecipeHeader.Title>Adopt testify require.Len</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if len(x) != n { t.Fatal(...) }` with `require.Len(t, x, n)` from `github.com/stretchr/testify/require`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.testify.AdoptTestifyRequireLen","displayName":"Adopt testify require.Len","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

