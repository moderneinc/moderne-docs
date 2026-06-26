---
title: "Reorder comparisons to put literals on the right"
sidebar_label: "Reorder comparisons to put literals on the right"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Reorder comparisons to put literals on the right"}
  description={"Swap operands when a constant appears on the left of a comparison, e.g. ``42 == count`` becomes ``count == 42``, mirroring the relational operator as needed."}
  fqName={"org.openrewrite.python.cleanup.FlipComparison"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Reorder comparisons to put literals on the right"}
  description={"Swap operands when a constant appears on the left of a comparison, e.g. ``42 == count`` becomes ``count == 42``, mirroring the relational operator as needed."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.FlipComparison"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.FlipComparison"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/flipcomparison.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.FlipComparison","displayName":"Reorder comparisons to put literals on the right","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

