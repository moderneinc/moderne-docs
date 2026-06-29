---
title: "Avoid format string variable"
sidebar_label: "Avoid format string variable"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid format string variable"}
  description={"Find calls like `fmt.Sprintf(variable)` where the format string is not a literal. This is a potential format string vulnerability."}
  fqName={"org.openrewrite.golang.codequality.AvoidFormatStringVariable"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AvoidFormatStringVariable"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AvoidFormatStringVariable"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/avoidformatstringvariable.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid format string variable</RecipeHeader.Title>

<RecipeHeader.Description>Find calls like `fmt.Sprintf(variable)` where the format string is not a literal. This is a potential format string vulnerability.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AvoidFormatStringVariable","displayName":"Avoid format string variable","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

