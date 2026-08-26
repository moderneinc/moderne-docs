---
title: "Adopt testify assert.Equal"
sidebar_label: "Adopt testify assert.Equal"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adopt testify assert.Equal"}
  description={"Replace `if got != want { t.Error(...) }` and `if got == want { t.Error(...) }` comparison guards in tests with `assert.Equal(t, want, got)` / `assert.NotEqual(t, want, got)` from `github.com/stretchr/testify/assert`."}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyAssertEqual"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyAssertEqual"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.testify.AdoptTestifyAssertEqual"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/testify/adopttestifyassertequal.md"}
  moderneOnly
>

<RecipeHeader.Title>Adopt testify assert.Equal</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if got != want { t.Error(...) }` and `if got == want { t.Error(...) }` comparison guards in tests with `assert.Equal(t, want, got)` / `assert.NotEqual(t, want, got)` from `github.com/stretchr/testify/assert`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.testify.AdoptTestifyAssertEqual","displayName":"Adopt testify assert.Equal","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

