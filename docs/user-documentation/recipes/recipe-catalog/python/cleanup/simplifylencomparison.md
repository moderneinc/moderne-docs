---
title: "Replace `len()` emptiness check with truthiness"
sidebar_label: "Replace `len()` emptiness check with truthiness"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `len()` emptiness check with truthiness"}
  description={"Rewrite ``len(seq) > 0`` / ``len(seq) != 0`` to ``seq`` and ``len(seq) == 0`` to ``not seq``, leveraging Python's built-in truthiness for collections."}
  fqName={"org.openrewrite.python.cleanup.SimplifyLenComparison"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Replace `len()` emptiness check with truthiness"}
  description={"Rewrite ``len(seq) > 0`` / ``len(seq) != 0`` to ``seq`` and ``len(seq) == 0`` to ``not seq``, leveraging Python's built-in truthiness for collections."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.SimplifyLenComparison"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.SimplifyLenComparison"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/simplifylencomparison.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.SimplifyLenComparison","displayName":"Replace `len()` emptiness check with truthiness","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

