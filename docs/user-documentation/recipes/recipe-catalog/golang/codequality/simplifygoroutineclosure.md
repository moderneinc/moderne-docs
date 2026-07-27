---
title: "Simplify goroutine closure"
sidebar_label: "Simplify goroutine closure"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify goroutine closure"}
  description={"Simplify `go func() { f() }()` to `go f()` where the closure wraps a single function call."}
  fqName={"org.openrewrite.golang.codequality.SimplifyGoroutineClosure"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifyGoroutineClosure"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifyGoroutineClosure"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifygoroutineclosure.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify goroutine closure</RecipeHeader.Title>

<RecipeHeader.Description>Simplify `go func() { f() }()` to `go f()` where the closure wraps a single function call.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifyGoroutineClosure","displayName":"Simplify goroutine closure","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

