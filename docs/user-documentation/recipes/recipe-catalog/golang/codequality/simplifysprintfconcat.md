---
title: "Simplify fmt.Sprintf string concat"
sidebar_label: "Simplify fmt.Sprintf string concat"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify fmt.Sprintf string concat"}
  description={"Replace `fmt.Sprintf(\"%s%s\", a, b)` with `a + b` for simple string concatenation."}
  fqName={"org.openrewrite.golang.codequality.SimplifySprintfConcat"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifySprintfConcat"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifySprintfConcat"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifysprintfconcat.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify fmt.Sprintf string concat</RecipeHeader.Title>

<RecipeHeader.Description>Replace `fmt.Sprintf("%s%s", a, b)` with `a + b` for simple string concatenation.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifySprintfConcat","displayName":"Simplify fmt.Sprintf string concat","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

