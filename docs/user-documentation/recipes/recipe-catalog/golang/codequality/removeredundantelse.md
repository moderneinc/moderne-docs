---
title: "Remove redundant else after return"
sidebar_label: "Remove redundant else after return"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove redundant else after return"}
  description={"Remove `if ... { return } else { ... }` where the else is redundant because the if block ends with a return."}
  fqName={"org.openrewrite.golang.codequality.RemoveRedundantElse"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.RemoveRedundantElse"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.RemoveRedundantElse"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/removeredundantelse.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove redundant else after return</RecipeHeader.Title>

<RecipeHeader.Description>Remove `if ... { return } else { ... }` where the else is redundant because the if block ends with a return.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.RemoveRedundantElse","displayName":"Remove redundant else after return","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

