---
title: "Avoid SQL string concatenation"
sidebar_label: "Avoid SQL string concatenation"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid SQL string concatenation"}
  description={"Find string concatenation where the left operand contains SQL keywords. Use parameterized queries to avoid SQL injection."}
  fqName={"org.openrewrite.golang.codequality.AvoidSqlStringConcat"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AvoidSqlStringConcat"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AvoidSqlStringConcat"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/avoidsqlstringconcat.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid SQL string concatenation</RecipeHeader.Title>

<RecipeHeader.Description>Find string concatenation where the left operand contains SQL keywords. Use parameterized queries to avoid SQL injection.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AvoidSqlStringConcat","displayName":"Avoid SQL string concatenation","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

