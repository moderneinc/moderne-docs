---
title: "Reduce nesting depth"
sidebar_label: "Reduce nesting depth"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Reduce nesting depth"}
  description={"Invert `if err == nil { body }` to `if err != nil { return }` followed by the body, reducing nesting by one level."}
  fqName={"org.openrewrite.golang.codequality.ReduceNestingDepth"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.ReduceNestingDepth"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.ReduceNestingDepth"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/reducenestingdepth.md"}
  moderneOnly
>

<RecipeHeader.Title>Reduce nesting depth</RecipeHeader.Title>

<RecipeHeader.Description>Invert `if err == nil { body }` to `if err != nil { return }` followed by the body, reducing nesting by one level.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.ReduceNestingDepth","displayName":"Reduce nesting depth","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

