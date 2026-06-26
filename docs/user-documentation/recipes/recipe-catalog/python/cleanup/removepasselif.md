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
  displayName={"Drop ``pass``-only ``elif`` by negating its condition"}
  description={"When an ``elif`` body is only ``pass`` and an ``else`` follows, invert the ``elif`` condition and absorb the else body."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemovePassElif"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemovePassElif"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removepasselif.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemovePassElif","displayName":"Drop ``pass``-only ``elif`` by negating its condition","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

