---
title: "Rewrite `any(v == literal ...)` as `literal in collection`"
sidebar_label: "Rewrite `any(v == literal ...)` as `literal in collection`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rewrite `any(v == literal ...)` as `literal in collection`"}
  description={"An `any()` generator that tests equality against a literal value is equivalent to the `in` membership operator, which is clearer."}
  fqName={"org.openrewrite.python.cleanup.ConvertAnyToIn"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Rewrite `any(v == literal ...)` as `literal in collection`"}
  description={"An `any()` generator that tests equality against a literal value is equivalent to the `in` membership operator, which is clearer."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.ConvertAnyToIn"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.ConvertAnyToIn"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/convertanytoin.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.ConvertAnyToIn","displayName":"Rewrite `any(v == literal ...)` as `literal in collection`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

