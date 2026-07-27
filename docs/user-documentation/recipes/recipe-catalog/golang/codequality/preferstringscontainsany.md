---
title: "Prefer strings.ContainsAny"
sidebar_label: "Prefer strings.ContainsAny"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer strings.ContainsAny"}
  description={"Replace `strings.IndexAny(s, chars) != -1` with `strings.ContainsAny(s, chars)` and `strings.IndexAny(s, chars) == -1` with `!strings.ContainsAny(s, chars)`."}
  fqName={"org.openrewrite.golang.codequality.PreferStringsContainsAny"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferStringsContainsAny"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferStringsContainsAny"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferstringscontainsany.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer strings.ContainsAny</RecipeHeader.Title>

<RecipeHeader.Description>Replace `strings.IndexAny(s, chars) != -1` with `strings.ContainsAny(s, chars)` and `strings.IndexAny(s, chars) == -1` with `!strings.ContainsAny(s, chars)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferStringsContainsAny","displayName":"Prefer strings.ContainsAny","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

