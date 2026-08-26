---
title: "Adopt testify require.Equal"
sidebar_label: "Adopt testify require.Equal"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adopt testify require.Equal"}
  description={"Replace `if got != want { t.Fatal(...) }` and `if got == want { t.Fatal(...) }` comparison guards in tests with `require.Equal(t, want, got)` / `require.NotEqual(t, want, got)` from `github.com/stretchr/testify/require`."}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyRequireEqual"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyRequireEqual"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.testify.AdoptTestifyRequireEqual"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/testify/adopttestifyrequireequal.md"}
  moderneOnly
>

<RecipeHeader.Title>Adopt testify require.Equal</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if got != want { t.Fatal(...) }` and `if got == want { t.Fatal(...) }` comparison guards in tests with `require.Equal(t, want, got)` / `require.NotEqual(t, want, got)` from `github.com/stretchr/testify/require`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.testify.AdoptTestifyRequireEqual","displayName":"Adopt testify require.Equal","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

