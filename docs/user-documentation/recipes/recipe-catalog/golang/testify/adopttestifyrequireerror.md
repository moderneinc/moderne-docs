---
title: "Adopt testify require.Error"
sidebar_label: "Adopt testify require.Error"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adopt testify require.Error"}
  description={"Replace `if err == nil { t.Fatal(\"...\") }` guards in tests with `require.Error(t, err)` from `github.com/stretchr/testify/require`."}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyRequireError"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyRequireError"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.testify.AdoptTestifyRequireError"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/testify/adopttestifyrequireerror.md"}
  moderneOnly
>

<RecipeHeader.Title>Adopt testify require.Error</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if err == nil { t.Fatal("...") }` guards in tests with `require.Error(t, err)` from `github.com/stretchr/testify/require`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.testify.AdoptTestifyRequireError","displayName":"Adopt testify require.Error","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

