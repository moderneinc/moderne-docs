---
title: "Eliminate `inplace=True` in favor of reassignment"
sidebar_label: "Eliminate `inplace=True` in favor of reassignment"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Eliminate `inplace=True` in favor of reassignment"}
  description={"Convert pandas operations that use `inplace=True` into reassignment form, e.g. `df.drop_duplicates(inplace=True)` becomes `df = df.drop_duplicates()`."}
  fqName={"org.openrewrite.python.cleanup.PandasAvoidInplace"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.PandasAvoidInplace"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.PandasAvoidInplace"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/pandasavoidinplace.md"}
  moderneOnly
>

<RecipeHeader.Title>Eliminate `inplace=True` in favor of reassignment</RecipeHeader.Title>

<RecipeHeader.Description>Convert pandas operations that use `inplace=True` into reassignment form, e.g. `df.drop_duplicates(inplace=True)` becomes `df = df.drop_duplicates()`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.PandasAvoidInplace","displayName":"Eliminate `inplace=True` in favor of reassignment","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

