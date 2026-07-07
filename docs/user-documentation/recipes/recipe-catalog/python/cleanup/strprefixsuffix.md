---
title: "Prefer ``startswith``/``endswith`` over slice comparison"
sidebar_label: "Prefer ``startswith``/``endswith`` over slice comparison"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer ``startswith``/``endswith`` over slice comparison"}
  description={"Rewrite ``s[:N] == \"lit\"`` as ``s.startswith(\"lit\")`` and ``s[-N:] == \"lit\"`` as ``s.endswith(\"lit\")`` when the slice length equals the literal length."}
  fqName={"org.openrewrite.python.cleanup.StrPrefixSuffix"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.StrPrefixSuffix"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.StrPrefixSuffix"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/strprefixsuffix.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer ``startswith``/``endswith`` over slice comparison</RecipeHeader.Title>

<RecipeHeader.Description>Rewrite ``s[:N] == "lit"`` as ``s.startswith("lit")`` and ``s[-N:] == "lit"`` as ``s.endswith("lit")`` when the slice length equals the literal length.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.StrPrefixSuffix","displayName":"Prefer ``startswith``/``endswith`` over slice comparison","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

