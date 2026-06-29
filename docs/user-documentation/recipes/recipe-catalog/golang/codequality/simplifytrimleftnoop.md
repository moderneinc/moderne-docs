---
title: "Simplify no-op TrimLeft/TrimRight"
sidebar_label: "Simplify no-op TrimLeft/TrimRight"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify no-op TrimLeft/TrimRight"}
  description={"Replace `strings.TrimLeft(s, \"\")` and `strings.TrimRight(s, \"\")` with `s` since trimming with an empty cutset is a no-op."}
  fqName={"org.openrewrite.golang.codequality.SimplifyTrimLeftNoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifyTrimLeftNoop"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifyTrimLeftNoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifytrimleftnoop.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify no-op TrimLeft/TrimRight</RecipeHeader.Title>

<RecipeHeader.Description>Replace `strings.TrimLeft(s, "")` and `strings.TrimRight(s, "")` with `s` since trimming with an empty cutset is a no-op.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifyTrimLeftNoop","displayName":"Simplify no-op TrimLeft/TrimRight","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

