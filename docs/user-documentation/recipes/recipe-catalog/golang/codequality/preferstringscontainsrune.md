---
title: "Prefer strings.ContainsRune"
sidebar_label: "Prefer strings.ContainsRune"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer strings.ContainsRune"}
  description={"Replace `strings.IndexRune(s, r) != -1` with `strings.ContainsRune(s, r)` and `strings.IndexRune(s, r) == -1` with `!strings.ContainsRune(s, r)`."}
  fqName={"org.openrewrite.golang.codequality.PreferStringsContainsRune"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferStringsContainsRune"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferStringsContainsRune"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferstringscontainsrune.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer strings.ContainsRune</RecipeHeader.Title>

<RecipeHeader.Description>Replace `strings.IndexRune(s, r) != -1` with `strings.ContainsRune(s, r)` and `strings.IndexRune(s, r) == -1` with `!strings.ContainsRune(s, r)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferStringsContainsRune","displayName":"Prefer strings.ContainsRune","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

