---
title: "Prefer strings.Contains over strings.Count"
sidebar_label: "Prefer strings.Contains over strings.Count"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer strings.Contains over strings.Count"}
  description={"Replace `strings.Count(s, sub) > 0` with `strings.Contains(s, sub)` and `strings.Count(s, sub) == 0` with `!strings.Contains(s, sub)`."}
  fqName={"org.openrewrite.golang.codequality.PreferStringsContainsOverCount"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferStringsContainsOverCount"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferStringsContainsOverCount"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferstringscontainsovercount.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer strings.Contains over strings.Count</RecipeHeader.Title>

<RecipeHeader.Description>Replace `strings.Count(s, sub) > 0` with `strings.Contains(s, sub)` and `strings.Count(s, sub) == 0` with `!strings.Contains(s, sub)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferStringsContainsOverCount","displayName":"Prefer strings.Contains over strings.Count","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

