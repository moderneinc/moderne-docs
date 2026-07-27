---
title: "Use comma-ok type assertion"
sidebar_label: "Use comma-ok type assertion"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use comma-ok type assertion"}
  description={"Transform bare type assertions `v := x.(T)` into `v, ok := x.(T)` with `_ = ok` to avoid panics on assertion failure."}
  fqName={"org.openrewrite.golang.codequality.UseCommaOkTypeAssertion"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.UseCommaOkTypeAssertion"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.UseCommaOkTypeAssertion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/usecommaoktypeassertion.md"}
  moderneOnly
>

<RecipeHeader.Title>Use comma-ok type assertion</RecipeHeader.Title>

<RecipeHeader.Description>Transform bare type assertions `v := x.(T)` into `v, ok := x.(T)` with `_ = ok` to avoid panics on assertion failure.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.UseCommaOkTypeAssertion","displayName":"Use comma-ok type assertion","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

