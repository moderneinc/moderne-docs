---
title: "Simplify redundant logical expression"
sidebar_label: "Simplify redundant logical expression"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify redundant logical expression"}
  description={"Simplify `x && x` to `x`, `x || x` to `x`, and similarly for `&` and `|`, where both sides of a logical or bitwise operator are identical."}
  fqName={"org.openrewrite.golang.codequality.SimplifyRedundantLogicalExpression"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifyRedundantLogicalExpression"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifyRedundantLogicalExpression"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifyredundantlogicalexpression.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify redundant logical expression</RecipeHeader.Title>

<RecipeHeader.Description>Simplify `x && x` to `x`, `x || x` to `x`, and similarly for `&` and `|`, where both sides of a logical or bitwise operator are identical.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifyRedundantLogicalExpression","displayName":"Simplify redundant logical expression","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

