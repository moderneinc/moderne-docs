---
title: "Pass iterable directly to `any()`/`all()` instead of identity generator"
sidebar_label: "Pass iterable directly to `any()`/`all()` instead of identity generator"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Pass iterable directly to `any()`/`all()` instead of identity generator"}
  description={"An identity generator that yields every element unchanged is redundant inside `any()` or `all()` -- pass the collection directly."}
  fqName={"org.openrewrite.python.cleanup.SimplifyGenerator"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.SimplifyGenerator"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.SimplifyGenerator"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/simplifygenerator.md"}
  moderneOnly
>

<RecipeHeader.Title>Pass iterable directly to `any()`/`all()` instead of identity generator</RecipeHeader.Title>

<RecipeHeader.Description>An identity generator that yields every element unchanged is redundant inside `any()` or `all()` -- pass the collection directly.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.SimplifyGenerator","displayName":"Pass iterable directly to `any()`/`all()` instead of identity generator","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

