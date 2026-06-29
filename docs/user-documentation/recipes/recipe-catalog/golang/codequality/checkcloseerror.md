---
title: "Check Close() error"
sidebar_label: "Check Close() error"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Check Close() error"}
  description={"Replace bare `f.Close()` with `_ = f.Close()` to explicitly mark the discarded error."}
  fqName={"org.openrewrite.golang.codequality.CheckCloseError"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.CheckCloseError"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.CheckCloseError"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/checkcloseerror.md"}
  moderneOnly
>

<RecipeHeader.Title>Check Close() error</RecipeHeader.Title>

<RecipeHeader.Description>Replace bare `f.Close()` with `_ = f.Close()` to explicitly mark the discarded error.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.CheckCloseError","displayName":"Check Close() error","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

