---
title: "Find deprecated `sync/atomic` functions"
sidebar_label: "Find deprecated `sync/atomic` functions"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find deprecated `sync/atomic` functions"}
  description={"Find deprecated `sync/atomic` free-function calls (e.g. `atomic.AddInt32`) that should be migrated to the type-safe atomic types introduced in Go 1.19 (e.g. `atomic.Int32`)."}
  fqName={"org.openrewrite.golang.codequality.FindDeprecatedAtomicFunctions"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.FindDeprecatedAtomicFunctions"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.FindDeprecatedAtomicFunctions"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/finddeprecatedatomicfunctions.md"}
  moderneOnly
>

<RecipeHeader.Title>Find deprecated `sync/atomic` functions</RecipeHeader.Title>

<RecipeHeader.Description>Find deprecated `sync/atomic` free-function calls (e.g. `atomic.AddInt32`) that should be migrated to the type-safe atomic types introduced in Go 1.19 (e.g. `atomic.Int32`).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.FindDeprecatedAtomicFunctions","displayName":"Find deprecated `sync/atomic` functions","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

