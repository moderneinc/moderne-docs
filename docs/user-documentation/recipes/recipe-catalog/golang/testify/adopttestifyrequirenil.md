---
title: "Adopt testify require.Nil"
sidebar_label: "Adopt testify require.Nil"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adopt testify require.Nil"}
  description={"Replace `if x != nil { t.Fatal(...) }` with `require.Nil(t, x)` and `if x == nil { t.Fatal(...) }` with `require.NotNil(t, x)` from `github.com/stretchr/testify/require`, for non-error operands. Error operands are handled by the NoError / Error recipes."}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyRequireNil"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.testify.AdoptTestifyRequireNil"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.testify.AdoptTestifyRequireNil"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/testify/adopttestifyrequirenil.md"}
  moderneOnly
>

<RecipeHeader.Title>Adopt testify require.Nil</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if x != nil { t.Fatal(...) }` with `require.Nil(t, x)` and `if x == nil { t.Fatal(...) }` with `require.NotNil(t, x)` from `github.com/stretchr/testify/require`, for non-error operands. Error operands are handled by the NoError / Error recipes.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.testify.AdoptTestifyRequireNil","displayName":"Adopt testify require.Nil","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

