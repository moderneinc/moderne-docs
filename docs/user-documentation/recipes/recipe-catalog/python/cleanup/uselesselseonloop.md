---
title: "Flatten `for/else` when the loop has no `break`"
sidebar_label: "Flatten `for/else` when the loop has no `break`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Flatten `for/else` when the loop has no `break`"}
  description={"A `for/else` where the loop body never breaks is misleading -- the `else` runs every time. This moves the else body after the loop."}
  fqName={"org.openrewrite.python.cleanup.UselessElseOnLoop"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.UselessElseOnLoop"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.UselessElseOnLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/uselesselseonloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Flatten `for/else` when the loop has no `break`</RecipeHeader.Title>

<RecipeHeader.Description>A `for/else` where the loop body never breaks is misleading -- the `else` runs every time. This moves the else body after the loop.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.UselessElseOnLoop","displayName":"Flatten `for/else` when the loop has no `break`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

