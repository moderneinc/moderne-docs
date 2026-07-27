---
title: "Reduce error check nesting"
sidebar_label: "Reduce error check nesting"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Reduce error check nesting"}
  description={"Invert `if err == nil { body }` to `if err != nil { return err }` followed by the body, reducing nesting in error-handling code."}
  fqName={"org.openrewrite.golang.codequality.ReduceErrorCheckNesting"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.ReduceErrorCheckNesting"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.ReduceErrorCheckNesting"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/reduceerrorchecknesting.md"}
  moderneOnly
>

<RecipeHeader.Title>Reduce error check nesting</RecipeHeader.Title>

<RecipeHeader.Description>Invert `if err == nil { body }` to `if err != nil { return err }` followed by the body, reducing nesting in error-handling code.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.ReduceErrorCheckNesting","displayName":"Reduce error check nesting","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

