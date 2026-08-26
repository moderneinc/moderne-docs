---
title: "Adopt testify assert.NoError"
sidebar_label: "Adopt testify assert.NoError"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adopt testify assert.NoError"}
  description={"Replace `if err != nil { t.Error(err) }` guards in tests with `assert.NoError(t, err)` from `github.com/stretchr/testify/assert`."}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyAssertNoError"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyAssertNoError"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.testify.AdoptTestifyAssertNoError"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/testify/adopttestifyassertnoerror.md"}
  moderneOnly
>

<RecipeHeader.Title>Adopt testify assert.NoError</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if err != nil { t.Error(err) }` guards in tests with `assert.NoError(t, err)` from `github.com/stretchr/testify/assert`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.testify.AdoptTestifyAssertNoError","displayName":"Adopt testify assert.NoError","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

