---
title: "Limit goroutines in loop"
sidebar_label: "Limit goroutines in loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Limit goroutines in loop"}
  description={"Find `go` statements inside for/range loops. Unbounded goroutine creation can cause resource exhaustion; consider using a worker pool."}
  fqName={"org.openrewrite.golang.codequality.LimitGoroutinesInLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.LimitGoroutinesInLoop"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.LimitGoroutinesInLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/limitgoroutinesinloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Limit goroutines in loop</RecipeHeader.Title>

<RecipeHeader.Description>Find `go` statements inside for/range loops. Unbounded goroutine creation can cause resource exhaustion; consider using a worker pool.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.LimitGoroutinesInLoop","displayName":"Limit goroutines in loop","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

