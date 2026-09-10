---
title: "Adopt testify assert.True"
sidebar_label: "Adopt testify assert.True"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adopt testify assert.True"}
  description={"Replace `if !cond { t.Error(...) }` with `assert.True(t, cond)` and `if cond { t.Error(...) }` with `assert.False(t, cond)` from `github.com/stretchr/testify/assert`. Comparison conditions are left to the Equal / Nil / Len recipes."}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyAssertTrue"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyAssertTrue"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.testify.AdoptTestifyAssertTrue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/testify/adopttestifyasserttrue.md"}
  moderneOnly
>

<RecipeHeader.Title>Adopt testify assert.True</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if !cond { t.Error(...) }` with `assert.True(t, cond)` and `if cond { t.Error(...) }` with `assert.False(t, cond)` from `github.com/stretchr/testify/assert`. Comparison conditions are left to the Equal / Nil / Len recipes.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.testify.AdoptTestifyAssertTrue","displayName":"Adopt testify assert.True","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

