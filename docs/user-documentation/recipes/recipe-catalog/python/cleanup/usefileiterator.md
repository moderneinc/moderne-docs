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
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.UseFileIterator"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.UseFileIterator"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/usefileiterator.md"}
  moderneOnly
>

<RecipeHeader.Title>Iterate over file objects directly, not via `readlines()`</RecipeHeader.Title>

<RecipeHeader.Description>File objects are iterable and yield lines on demand, so calling `.readlines()` to build an intermediate list is unnecessary.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.UseFileIterator","displayName":"Iterate over file objects directly, not via `readlines()`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

