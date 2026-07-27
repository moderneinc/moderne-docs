---
title: "Audit test fatal"
sidebar_label: "Audit test fatal"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Audit test fatal"}
  description={"Find `t.Fatal()` and `t.Fatalf()` calls. These abort the test immediately and panic when called from a goroutine other than the test function's goroutine."}
  fqName={"org.openrewrite.golang.codequality.AuditTestFatal"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AuditTestFatal"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AuditTestFatal"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/audittestfatal.md"}
  moderneOnly
>

<RecipeHeader.Title>Audit test fatal</RecipeHeader.Title>

<RecipeHeader.Description>Find `t.Fatal()` and `t.Fatalf()` calls. These abort the test immediately and panic when called from a goroutine other than the test function's goroutine.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AuditTestFatal","displayName":"Audit test fatal","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

