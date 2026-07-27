---
title: "Remove redundant *&amp; (deref of address-of)"
sidebar_label: "Remove redundant *&amp; (deref of address-of)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove redundant *& (deref of address-of)"}
  description={"Remove `*&x` where taking the address and immediately dereferencing is a no-op."}
  fqName={"org.openrewrite.golang.codequality.RemoveDoubleDeref"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.RemoveDoubleDeref"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.RemoveDoubleDeref"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/removedoublederef.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove redundant *& (deref of address-of)</RecipeHeader.Title>

<RecipeHeader.Description>Remove `*&x` where taking the address and immediately dereferencing is a no-op.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.RemoveDoubleDeref","displayName":"Remove redundant *& (deref of address-of)","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

