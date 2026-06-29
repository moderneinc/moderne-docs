---
title: "Create channel outside loop"
sidebar_label: "Create channel outside loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Create channel outside loop"}
  description={"Find `make(chan ...)` calls inside for/range loops. Channel creation in loops suggests the channel should be created once before the loop."}
  fqName={"org.openrewrite.golang.codequality.CreateChannelOutsideLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.CreateChannelOutsideLoop"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.CreateChannelOutsideLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/createchanneloutsideloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Create channel outside loop</RecipeHeader.Title>

<RecipeHeader.Description>Find `make(chan ...)` calls inside for/range loops. Channel creation in loops suggests the channel should be created once before the loop.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.CreateChannelOutsideLoop","displayName":"Create channel outside loop","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

