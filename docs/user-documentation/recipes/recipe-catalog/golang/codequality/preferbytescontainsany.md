---
title: "Prefer bytes.ContainsAny"
sidebar_label: "Prefer bytes.ContainsAny"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer bytes.ContainsAny"}
  description={"Replace `bytes.IndexAny(b, chars) != -1` with `bytes.ContainsAny(b, chars)` and `bytes.IndexAny(b, chars) == -1` with `!bytes.ContainsAny(b, chars)`."}
  fqName={"org.openrewrite.golang.codequality.PreferBytesContainsAny"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferBytesContainsAny"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferBytesContainsAny"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferbytescontainsany.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer bytes.ContainsAny</RecipeHeader.Title>

<RecipeHeader.Description>Replace `bytes.IndexAny(b, chars) != -1` with `bytes.ContainsAny(b, chars)` and `bytes.IndexAny(b, chars) == -1` with `!bytes.ContainsAny(b, chars)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferBytesContainsAny","displayName":"Prefer bytes.ContainsAny","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

