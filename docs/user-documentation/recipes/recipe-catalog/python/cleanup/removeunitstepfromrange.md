---
title: "Drop unnecessary step `1` argument from `range()`"
sidebar_label: "Drop unnecessary step `1` argument from `range()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Drop unnecessary step `1` argument from `range()`"}
  description={"Shorten `range(a, b, 1)` to `range(a, b)` because `range` already defaults to a step of one."}
  fqName={"org.openrewrite.python.cleanup.RemoveUnitStepFromRange"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveUnitStepFromRange"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveUnitStepFromRange"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeunitstepfromrange.md"}
  moderneOnly
>

<RecipeHeader.Title>Drop unnecessary step `1` argument from `range()`</RecipeHeader.Title>

<RecipeHeader.Description>Shorten `range(a, b, 1)` to `range(a, b)` because `range` already defaults to a step of one.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveUnitStepFromRange","displayName":"Drop unnecessary step `1` argument from `range()`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

