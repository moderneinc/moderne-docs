---
title: "Delete `if` blocks whose body is only `pass`"
sidebar_label: "Delete `if` blocks whose body is only `pass`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Delete `if` blocks whose body is only `pass`"}
  description={"Delete `if` statements that contain nothing but `pass` and have no `else` branch. `for`/`while` loops are left alone because iterating may have side effects."}
  fqName={"org.openrewrite.python.cleanup.RemoveEmptyNestedBlock"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Delete `if` blocks whose body is only `pass`"}
  description={"Delete `if` statements that contain nothing but `pass` and have no `else` branch. `for`/`while` loops are left alone because iterating may have side effects."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveEmptyNestedBlock"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveEmptyNestedBlock"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeemptynestedblock.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveEmptyNestedBlock","displayName":"Delete `if` blocks whose body is only `pass`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

