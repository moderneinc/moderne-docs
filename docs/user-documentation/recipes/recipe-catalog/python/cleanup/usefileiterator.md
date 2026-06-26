---
title: "Iterate over file objects directly, not via `readlines()`"
sidebar_label: "Iterate over file objects directly, not via `readlines()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Iterate over file objects directly, not via `readlines()`"}
  description={"File objects are iterable and yield lines on demand, so calling `.readlines()` to build an intermediate list is unnecessary."}
  fqName={"org.openrewrite.python.cleanup.UseFileIterator"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Iterate over file objects directly, not via `readlines()`"}
  description={"File objects are iterable and yield lines on demand, so calling `.readlines()` to build an intermediate list is unnecessary."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.UseFileIterator"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.UseFileIterator"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/usefileiterator.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.UseFileIterator","displayName":"Iterate over file objects directly, not via `readlines()`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

