---
title: "Prefer bytes.Contains over bytes.Index comparison"
sidebar_label: "Prefer bytes.Contains over bytes.Index comparison"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer bytes.Contains over bytes.Index comparison"}
  description={"Replace `bytes.Index(b, sub) != -1` and similar patterns with `bytes.Contains(b, sub)`."}
  fqName={"org.openrewrite.golang.codequality.PreferBytesContains"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferBytesContains"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferBytesContains"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferbytescontains.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer bytes.Contains over bytes.Index comparison</RecipeHeader.Title>

<RecipeHeader.Description>Replace `bytes.Index(b, sub) != -1` and similar patterns with `bytes.Contains(b, sub)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferBytesContains","displayName":"Prefer bytes.Contains over bytes.Index comparison","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

