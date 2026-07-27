---
title: "Simplify if-return-bool"
sidebar_label: "Simplify if-return-bool"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify if-return-bool"}
  description={"Replace `if cond { return true }; return false` with `return cond`, and vice versa."}
  fqName={"org.openrewrite.golang.codequality.SimplifyIfReturnBool"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifyIfReturnBool"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifyIfReturnBool"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifyifreturnbool.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify if-return-bool</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if cond { return true }; return false` with `return cond`, and vice versa.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifyIfReturnBool","displayName":"Simplify if-return-bool","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

