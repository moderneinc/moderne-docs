---
title: "Prefer bytes.ContainsRune"
sidebar_label: "Prefer bytes.ContainsRune"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer bytes.ContainsRune"}
  description={"Replace `bytes.IndexRune(b, r) != -1` with `bytes.ContainsRune(b, r)` and `bytes.IndexRune(b, r) == -1` with `!bytes.ContainsRune(b, r)`."}
  fqName={"org.openrewrite.golang.codequality.PreferBytesContainsRune"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferBytesContainsRune"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferBytesContainsRune"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferbytescontainsrune.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer bytes.ContainsRune</RecipeHeader.Title>

<RecipeHeader.Description>Replace `bytes.IndexRune(b, r) != -1` with `bytes.ContainsRune(b, r)` and `bytes.IndexRune(b, r) == -1` with `!bytes.ContainsRune(b, r)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferBytesContainsRune","displayName":"Prefer bytes.ContainsRune","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

