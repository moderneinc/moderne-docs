---
title: "Adopt testify assert.Error"
sidebar_label: "Adopt testify assert.Error"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adopt testify assert.Error"}
  description={"Replace `if err == nil { t.Error(\"...\") }` guards in tests with `assert.Error(t, err)` from `github.com/stretchr/testify/assert`."}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyAssertError"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyAssertError"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.testify.AdoptTestifyAssertError"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/testify/adopttestifyasserterror.md"}
  moderneOnly
>

<RecipeHeader.Title>Adopt testify assert.Error</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if err == nil { t.Error("...") }` guards in tests with `assert.Error(t, err)` from `github.com/stretchr/testify/assert`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.testify.AdoptTestifyAssertError","displayName":"Adopt testify assert.Error","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

