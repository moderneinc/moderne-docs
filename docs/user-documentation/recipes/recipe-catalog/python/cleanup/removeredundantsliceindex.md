---
title: "Drop default-value slice boundaries"
sidebar_label: "Drop default-value slice boundaries"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Drop default-value slice boundaries"}
  description={"Omit slice start/stop when they equal ``0`` and ``len(seq)`` respectively, e.g. ``data[0:len(data)]`` becomes ``data[:]``."}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantSliceIndex"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Drop default-value slice boundaries"}
  description={"Omit slice start/stop when they equal ``0`` and ``len(seq)`` respectively, e.g. ``data[0:len(data)]`` becomes ``data[:]``."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantSliceIndex"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveRedundantSliceIndex"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeredundantsliceindex.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveRedundantSliceIndex","displayName":"Drop default-value slice boundaries","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

