---
title: "Consolidate repeated `==` with `or` into `in`"
sidebar_label: "Consolidate repeated `==` with `or` into `in`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Consolidate repeated `==` with `or` into `in`"}
  description={"Fold ``var == a or var == b`` into ``var in [a, b]``, reducing duplication and improving readability."}
  fqName={"org.openrewrite.python.cleanup.MergeComparisons"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.MergeComparisons"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.MergeComparisons"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/mergecomparisons.md"}
  moderneOnly
>

<RecipeHeader.Title>Consolidate repeated `==` with `or` into `in`</RecipeHeader.Title>

<RecipeHeader.Description>Fold ``var == a or var == b`` into ``var in [a, b]``, reducing duplication and improving readability.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.MergeComparisons","displayName":"Consolidate repeated `==` with `or` into `in`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

