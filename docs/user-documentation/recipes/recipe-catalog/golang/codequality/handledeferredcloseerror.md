---
title: "Handle deferred Close() error"
sidebar_label: "Handle deferred Close() error"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Handle deferred Close() error"}
  description={"Wrap `defer x.Close()` in a closure to explicitly handle the error: `defer func() { _ = x.Close() }()`."}
  fqName={"org.openrewrite.golang.codequality.HandleDeferredCloseError"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.HandleDeferredCloseError"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.HandleDeferredCloseError"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/handledeferredcloseerror.md"}
  moderneOnly
>

<RecipeHeader.Title>Handle deferred Close() error</RecipeHeader.Title>

<RecipeHeader.Description>Wrap `defer x.Close()` in a closure to explicitly handle the error: `defer func() { _ = x.Close() }()`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.HandleDeferredCloseError","displayName":"Handle deferred Close() error","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

