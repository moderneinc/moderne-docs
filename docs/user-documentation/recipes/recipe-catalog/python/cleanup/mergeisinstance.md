---
title: "Merge `isinstance()` calls"
sidebar_label: "Merge `isinstance()` calls"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Merge `isinstance()` calls"}
  description={"Merge `isinstance(x, A) or isinstance(x, B)` into `isinstance(x, (A, B))` for cleaner type checking."}
  fqName={"org.openrewrite.python.cleanup.MergeIsinstance"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.MergeIsinstance"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.MergeIsinstance"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/mergeisinstance.md"}
  moderneOnly
>

<RecipeHeader.Title>Merge `isinstance()` calls</RecipeHeader.Title>

<RecipeHeader.Description>Merge `isinstance(x, A) or isinstance(x, B)` into `isinstance(x, (A, B))` for cleaner type checking.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.MergeIsinstance","displayName":"Merge `isinstance()` calls","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

