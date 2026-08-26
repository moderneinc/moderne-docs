---
title: "Adopt testify require.NoError"
sidebar_label: "Adopt testify require.NoError"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adopt testify require.NoError"}
  description={"Replace `if err != nil { t.Fatal(err) }` guards in tests with `require.NoError(t, err)` from `github.com/stretchr/testify/require`."}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyRequireNoError"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyRequireNoError"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.testify.AdoptTestifyRequireNoError"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/testify/adopttestifyrequirenoerror.md"}
  moderneOnly
>

<RecipeHeader.Title>Adopt testify require.NoError</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if err != nil { t.Fatal(err) }` guards in tests with `require.NoError(t, err)` from `github.com/stretchr/testify/require`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.testify.AdoptTestifyRequireNoError","displayName":"Adopt testify require.NoError","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

