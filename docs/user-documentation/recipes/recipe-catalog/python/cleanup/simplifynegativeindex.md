---
title: "Use negative index instead of `len()` offset"
sidebar_label: "Use negative index instead of `len()` offset"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use negative index instead of `len()` offset"}
  description={"Rewrite ``seq[len(seq) - k]`` as ``seq[-k]``, using Python's native negative-indexing support."}
  fqName={"org.openrewrite.python.cleanup.SimplifyNegativeIndex"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.SimplifyNegativeIndex"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.SimplifyNegativeIndex"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/simplifynegativeindex.md"}
  moderneOnly
>

<RecipeHeader.Title>Use negative index instead of `len()` offset</RecipeHeader.Title>

<RecipeHeader.Description>Rewrite ``seq[len(seq) - k]`` as ``seq[-k]``, using Python's native negative-indexing support.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.SimplifyNegativeIndex","displayName":"Use negative index instead of `len()` offset","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

