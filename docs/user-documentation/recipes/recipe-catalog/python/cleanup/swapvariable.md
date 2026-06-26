---
title: "Simplify temp-variable swap to tuple unpacking"
sidebar_label: "Simplify temp-variable swap to tuple unpacking"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify temp-variable swap to tuple unpacking"}
  description={"Detect the three-line swap idiom (`tmp = x; x = y; y = tmp`) and condense it into `x, y = y, x` using tuple unpacking."}
  fqName={"org.openrewrite.python.cleanup.SwapVariable"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Simplify temp-variable swap to tuple unpacking"}
  description={"Detect the three-line swap idiom (`tmp = x; x = y; y = tmp`) and condense it into `x, y = y, x` using tuple unpacking."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.SwapVariable"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.SwapVariable"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/swapvariable.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.SwapVariable","displayName":"Simplify temp-variable swap to tuple unpacking","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

