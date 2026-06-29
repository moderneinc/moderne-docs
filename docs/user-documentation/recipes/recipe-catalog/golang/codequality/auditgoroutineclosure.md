---
title: "Audit goroutine closure"
sidebar_label: "Audit goroutine closure"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Audit goroutine closure"}
  description={"Find `go func() { ... }()` patterns. Goroutines with closures can inadvertently capture loop variables."}
  fqName={"org.openrewrite.golang.codequality.AuditGoroutineClosure"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AuditGoroutineClosure"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AuditGoroutineClosure"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/auditgoroutineclosure.md"}
  moderneOnly
>

<RecipeHeader.Title>Audit goroutine closure</RecipeHeader.Title>

<RecipeHeader.Description>Find `go func() { ... }()` patterns. Goroutines with closures can inadvertently capture loop variables.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AuditGoroutineClosure","displayName":"Audit goroutine closure","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

