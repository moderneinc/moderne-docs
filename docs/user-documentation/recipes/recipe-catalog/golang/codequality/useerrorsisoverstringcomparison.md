---
title: "Use errors.Is over string comparison"
sidebar_label: "Use errors.Is over string comparison"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use errors.Is over string comparison"}
  description={"Find `err.Error() == \"string\"` comparisons. Comparing error messages by string is fragile; use `errors.Is` or `errors.As` instead."}
  fqName={"org.openrewrite.golang.codequality.UseErrorsIsOverStringComparison"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.UseErrorsIsOverStringComparison"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.UseErrorsIsOverStringComparison"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/useerrorsisoverstringcomparison.md"}
  moderneOnly
>

<RecipeHeader.Title>Use errors.Is over string comparison</RecipeHeader.Title>

<RecipeHeader.Description>Find `err.Error() == "string"` comparisons. Comparing error messages by string is fragile; use `errors.Is` or `errors.As` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.UseErrorsIsOverStringComparison","displayName":"Use errors.Is over string comparison","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

