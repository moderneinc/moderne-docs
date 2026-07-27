---
title: "Drop unnecessary `0` start argument from `range()`"
sidebar_label: "Drop unnecessary `0` start argument from `range()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Drop unnecessary `0` start argument from `range()`"}
  description={"Shorten `range(0, n)` to `range(n)` because `range` already defaults to starting at zero."}
  fqName={"org.openrewrite.python.cleanup.RemoveZeroFromRange"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveZeroFromRange"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveZeroFromRange"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removezerofromrange.md"}
  moderneOnly
>

<RecipeHeader.Title>Drop unnecessary `0` start argument from `range()`</RecipeHeader.Title>

<RecipeHeader.Description>Shorten `range(0, n)` to `range(n)` because `range` already defaults to starting at zero.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveZeroFromRange","displayName":"Drop unnecessary `0` start argument from `range()`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

