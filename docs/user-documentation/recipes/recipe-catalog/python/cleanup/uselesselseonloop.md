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
  displayName={"Flatten `for/else` when the loop has no `break`"}
  description={"A `for/else` where the loop body never breaks is misleading -- the `else` runs every time. This moves the else body after the loop."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.UselessElseOnLoop"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.UselessElseOnLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/uselesselseonloop.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.UselessElseOnLoop","displayName":"Flatten `for/else` when the loop has no `break`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

