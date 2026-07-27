---
title: "Use generator expression instead of list comprehension in iterable-accepting calls"
sidebar_label: "Use generator expression instead of list comprehension in iterable-accepting calls"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use generator expression instead of list comprehension in iterable-accepting calls"}
  description={"Functions that consume iterables lazily (e.g. `any`, `sum`, `sorted`) do not need a list comprehension -- a generator expression suffices."}
  fqName={"org.openrewrite.python.cleanup.ComprehensionToGenerator"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.ComprehensionToGenerator"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.ComprehensionToGenerator"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/comprehensiontogenerator.md"}
  moderneOnly
>

<RecipeHeader.Title>Use generator expression instead of list comprehension in iterable-accepting calls</RecipeHeader.Title>

<RecipeHeader.Description>Functions that consume iterables lazily (e.g. `any`, `sum`, `sorted`) do not need a list comprehension -- a generator expression suffices.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.ComprehensionToGenerator","displayName":"Use generator expression instead of list comprehension in iterable-accepting calls","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

