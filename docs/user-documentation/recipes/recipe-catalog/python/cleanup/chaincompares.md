---
title: "Use chained comparison syntax"
sidebar_label: "Use chained comparison syntax"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use chained comparison syntax"}
  description={"Merge two relational tests that share a middle operand into a single chained comparison, e.g. ``0 < idx and idx < size`` becomes ``0 < idx < size``."}
  fqName={"org.openrewrite.python.cleanup.ChainCompares"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Use chained comparison syntax"}
  description={"Merge two relational tests that share a middle operand into a single chained comparison, e.g. ``0 < idx and idx < size`` becomes ``0 < idx < size``."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.ChainCompares"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.ChainCompares"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/chaincompares.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.ChainCompares","displayName":"Use chained comparison syntax","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

