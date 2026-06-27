---
title: "Collapse for-yield loop into `yield from`"
sidebar_label: "Collapse for-yield loop into `yield from`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Collapse for-yield loop into `yield from`"}
  description={"A for-loop that does nothing but yield the loop variable can be expressed as `yield from`, which is shorter and delegates directly."}
  fqName={"org.openrewrite.python.cleanup.YieldFrom"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.YieldFrom"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.YieldFrom"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/yieldfrom.md"}
  moderneOnly
>

<RecipeHeader.Title>Collapse for-yield loop into `yield from`</RecipeHeader.Title>

<RecipeHeader.Description>A for-loop that does nothing but yield the loop variable can be expressed as `yield from`, which is shorter and delegates directly.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.YieldFrom","displayName":"Collapse for-yield loop into `yield from`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

