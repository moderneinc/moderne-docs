---
title: "Use strings.Builder in loop"
sidebar_label: "Use strings.Builder in loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use strings.Builder in loop"}
  description={"Find `s += expr` inside for/range loops. Repeated string concatenation in loops is inefficient; rewrite to use strings.Builder."}
  fqName={"org.openrewrite.golang.codequality.UseStringsBuilderInLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.UseStringsBuilderInLoop"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.UseStringsBuilderInLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/usestringsbuilderinloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Use strings.Builder in loop</RecipeHeader.Title>

<RecipeHeader.Description>Find `s += expr` inside for/range loops. Repeated string concatenation in loops is inefficient; rewrite to use strings.Builder.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.UseStringsBuilderInLoop","displayName":"Use strings.Builder in loop","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

