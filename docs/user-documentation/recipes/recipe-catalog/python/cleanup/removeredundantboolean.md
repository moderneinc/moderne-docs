---
title: "Eliminate boolean literal from `and`/`or`"
sidebar_label: "Eliminate boolean literal from `and`/`or`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Eliminate boolean literal from `and`/`or`"}
  description={"Strip ``True`` or ``False`` from ``and``/``or`` expressions where the literal has no effect on the result, e.g. ``True and val`` reduces to ``val`` and ``False and val`` reduces to ``False``."}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantBoolean"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantBoolean"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveRedundantBoolean"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeredundantboolean.md"}
  moderneOnly
>

<RecipeHeader.Title>Eliminate boolean literal from `and`/`or`</RecipeHeader.Title>

<RecipeHeader.Description>Strip ``True`` or ``False`` from ``and``/``or`` expressions where the literal has no effect on the result, e.g. ``True and val`` reduces to ``val`` and ``False and val`` reduces to ``False``.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveRedundantBoolean","displayName":"Eliminate boolean literal from `and`/`or`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

