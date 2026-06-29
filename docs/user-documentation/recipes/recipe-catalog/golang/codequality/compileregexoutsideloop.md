---
title: "Compile regex outside loop"
sidebar_label: "Compile regex outside loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Compile regex outside loop"}
  description={"Find `regexp.Compile()` or `regexp.MustCompile()` calls inside for/range loops. Compile the regex once outside the loop for better performance."}
  fqName={"org.openrewrite.golang.codequality.CompileRegexOutsideLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.CompileRegexOutsideLoop"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.CompileRegexOutsideLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/compileregexoutsideloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Compile regex outside loop</RecipeHeader.Title>

<RecipeHeader.Description>Find `regexp.Compile()` or `regexp.MustCompile()` calls inside for/range loops. Compile the regex once outside the loop for better performance.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.CompileRegexOutsideLoop","displayName":"Compile regex outside loop","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

