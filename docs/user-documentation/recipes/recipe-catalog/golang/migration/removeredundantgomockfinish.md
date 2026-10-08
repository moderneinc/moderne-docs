---
title: "Remove redundant `defer ctrl.Finish()`"
sidebar_label: "Remove redundant `defer ctrl.Finish()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove redundant `defer ctrl.Finish()`"}
  description={"Remove `defer ctrl.Finish()` where the controller was built by `gomock.NewController` from a `*testing.T`, `*testing.B`, `*testing.F` or `testing.TB`. `NewController` registers the finish through `Cleanup` for any such reporter, so the deferred call only repeats it."}
  fqName={"org.openrewrite.golang.migration.RemoveRedundantGomockFinish"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.RemoveRedundantGomockFinish"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.RemoveRedundantGomockFinish"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/removeredundantgomockfinish.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove redundant `defer ctrl.Finish()`</RecipeHeader.Title>

<RecipeHeader.Description>Remove `defer ctrl.Finish()` where the controller was built by `gomock.NewController` from a `*testing.T`, `*testing.B`, `*testing.F` or `testing.TB`. `NewController` registers the finish through `Cleanup` for any such reporter, so the deferred call only repeats it.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.RemoveRedundantGomockFinish","displayName":"Remove redundant `defer ctrl.Finish()`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

