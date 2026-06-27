---
title: "Flatten redundant collection constructor wrapping a literal"
sidebar_label: "Flatten redundant collection constructor wrapping a literal"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Flatten redundant collection constructor wrapping a literal"}
  description={"When `tuple()`, `list()`, or `set()` wraps a single list or tuple literal, remove the constructor and use the target literal form directly."}
  fqName={"org.openrewrite.python.cleanup.UnwrapIterableConstruction"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.UnwrapIterableConstruction"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.UnwrapIterableConstruction"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/unwrapiterableconstruction.md"}
  moderneOnly
>

<RecipeHeader.Title>Flatten redundant collection constructor wrapping a literal</RecipeHeader.Title>

<RecipeHeader.Description>When `tuple()`, `list()`, or `set()` wraps a single list or tuple literal, remove the constructor and use the target literal form directly.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.UnwrapIterableConstruction","displayName":"Flatten redundant collection constructor wrapping a literal","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

