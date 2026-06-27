---
title: "Swap `not all()`/`not any()` by negating the comparison"
sidebar_label: "Swap `not all()`/`not any()` by negating the comparison"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Swap `not all()`/`not any()` by negating the comparison"}
  description={"Apply De Morgan's law to replace `not all(cond ...)` with `any(negated_cond ...)` or `not any(cond ...)` with `all(negated_cond ...)`."}
  fqName={"org.openrewrite.python.cleanup.InvertAnyAll"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.InvertAnyAll"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.InvertAnyAll"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/invertanyall.md"}
  moderneOnly
>

<RecipeHeader.Title>Swap `not all()`/`not any()` by negating the comparison</RecipeHeader.Title>

<RecipeHeader.Description>Apply De Morgan's law to replace `not all(cond ...)` with `any(negated_cond ...)` or `not any(cond ...)` with `all(negated_cond ...)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.InvertAnyAll","displayName":"Swap `not all()`/`not any()` by negating the comparison","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

