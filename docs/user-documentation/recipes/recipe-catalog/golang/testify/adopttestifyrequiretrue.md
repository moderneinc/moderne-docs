---
title: "Adopt testify require.True"
sidebar_label: "Adopt testify require.True"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adopt testify require.True"}
  description={"Replace `if !cond { t.Fatal(...) }` with `require.True(t, cond)` and `if cond { t.Fatal(...) }` with `require.False(t, cond)` from `github.com/stretchr/testify/require`. Comparison conditions are left to the Equal / Nil / Len recipes."}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyRequireTrue"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyRequireTrue"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.testify.AdoptTestifyRequireTrue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/testify/adopttestifyrequiretrue.md"}
  moderneOnly
>

<RecipeHeader.Title>Adopt testify require.True</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if !cond { t.Fatal(...) }` with `require.True(t, cond)` and `if cond { t.Fatal(...) }` with `require.False(t, cond)` from `github.com/stretchr/testify/require`. Comparison conditions are left to the Equal / Nil / Len recipes.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.testify.AdoptTestifyRequireTrue","displayName":"Adopt testify require.True","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

