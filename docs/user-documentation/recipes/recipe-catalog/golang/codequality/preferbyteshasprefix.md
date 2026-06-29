---
title: "Prefer bytes.HasPrefix"
sidebar_label: "Prefer bytes.HasPrefix"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer bytes.HasPrefix"}
  description={"Replace `bytes.Index(b, prefix) == 0` with `bytes.HasPrefix(b, prefix)` and `bytes.Index(b, prefix) != 0` with `!bytes.HasPrefix(b, prefix)`."}
  fqName={"org.openrewrite.golang.codequality.PreferBytesHasPrefix"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferBytesHasPrefix"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferBytesHasPrefix"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferbyteshasprefix.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer bytes.HasPrefix</RecipeHeader.Title>

<RecipeHeader.Description>Replace `bytes.Index(b, prefix) == 0` with `bytes.HasPrefix(b, prefix)` and `bytes.Index(b, prefix) != 0` with `!bytes.HasPrefix(b, prefix)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferBytesHasPrefix","displayName":"Prefer bytes.HasPrefix","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

