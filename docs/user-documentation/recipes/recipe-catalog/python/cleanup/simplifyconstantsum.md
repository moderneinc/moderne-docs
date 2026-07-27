---
title: "Simplify `sum(1 for x in items if cond)` to `sum(bool(cond) for x in items)`"
sidebar_label: "Simplify `sum(1 for x in items if cond)` to `sum(bool(cond) for x in items)`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify `sum(1 for x in items if cond)` to `sum(bool(cond) for x in items)`"}
  description={"Replace `sum(1 for x in items if cond)` with `sum(bool(cond) for x in items)` by moving the filter condition into a `bool()` wrapper."}
  fqName={"org.openrewrite.python.cleanup.SimplifyConstantSum"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.SimplifyConstantSum"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.SimplifyConstantSum"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/simplifyconstantsum.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify `sum(1 for x in items if cond)` to `sum(bool(cond) for x in items)`</RecipeHeader.Title>

<RecipeHeader.Description>Replace `sum(1 for x in items if cond)` with `sum(bool(cond) for x in items)` by moving the filter condition into a `bool()` wrapper.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.SimplifyConstantSum","displayName":"Simplify `sum(1 for x in items if cond)` to `sum(bool(cond) for x in items)`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

