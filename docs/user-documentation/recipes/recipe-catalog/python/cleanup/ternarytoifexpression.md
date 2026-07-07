---
title: "Convert `and`/`or` ternary trick to conditional expression"
sidebar_label: "Convert `and`/`or` ternary trick to conditional expression"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert `and`/`or` ternary trick to conditional expression"}
  description={"Rewrite the legacy `cond and val or fallback` idiom as `val if cond else fallback` to avoid silent bugs when `val` is falsy."}
  fqName={"org.openrewrite.python.cleanup.TernaryToIfExpression"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.TernaryToIfExpression"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.TernaryToIfExpression"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/ternarytoifexpression.md"}
  moderneOnly
>

<RecipeHeader.Title>Convert `and`/`or` ternary trick to conditional expression</RecipeHeader.Title>

<RecipeHeader.Description>Rewrite the legacy `cond and val or fallback` idiom as `val if cond else fallback` to avoid silent bugs when `val` is falsy.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.TernaryToIfExpression","displayName":"Convert `and`/`or` ternary trick to conditional expression","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

