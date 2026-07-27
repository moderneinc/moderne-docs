---
title: "Avoid channel length check"
sidebar_label: "Avoid channel length check"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid channel length check"}
  description={"Find comparisons on channel length such as `len(ch) == 0`. These are almost always racy because the length can change between the check and the next operation."}
  fqName={"org.openrewrite.golang.codequality.AvoidChannelLenCheck"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AvoidChannelLenCheck"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AvoidChannelLenCheck"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/avoidchannellencheck.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid channel length check</RecipeHeader.Title>

<RecipeHeader.Description>Find comparisons on channel length such as `len(ch) == 0`. These are almost always racy because the length can change between the check and the next operation.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AvoidChannelLenCheck","displayName":"Avoid channel length check","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

