---
title: "Drop ``pass``-only ``elif`` by negating its condition"
sidebar_label: "Drop ``pass``-only ``elif`` by negating its condition"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Drop ``pass``-only ``elif`` by negating its condition"}
  description={"When an ``elif`` body is only ``pass`` and an ``else`` follows, invert the ``elif`` condition and absorb the else body."}
  fqName={"org.openrewrite.python.cleanup.RemovePassElif"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemovePassElif"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemovePassElif"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removepasselif.md"}
  moderneOnly
>

<RecipeHeader.Title>Drop ``pass``-only ``elif`` by negating its condition</RecipeHeader.Title>

<RecipeHeader.Description>When an ``elif`` body is only ``pass`` and an ``else`` follows, invert the ``elif`` condition and absorb the else body.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemovePassElif","displayName":"Drop ``pass``-only ``elif`` by negating its condition","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

