---
title: "Use truthiness instead of empty-container equality"
sidebar_label: "Use truthiness instead of empty-container equality"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use truthiness instead of empty-container equality"}
  description={"Convert ``== \"\"``/``== []``/``== {}``/``== ()`` into ``not var`` and the corresponding ``!=`` forms into ``var``, relying on Python's truthiness semantics for empty collections."}
  fqName={"org.openrewrite.python.cleanup.SimplifyEmptyCollectionComparison"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.SimplifyEmptyCollectionComparison"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.SimplifyEmptyCollectionComparison"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/simplifyemptycollectioncomparison.md"}
  moderneOnly
>

<RecipeHeader.Title>Use truthiness instead of empty-container equality</RecipeHeader.Title>

<RecipeHeader.Description>Convert ``== ""``/``== []``/``== &#123;}``/``== ()`` into ``not var`` and the corresponding ``!=`` forms into ``var``, relying on Python's truthiness semantics for empty collections.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.SimplifyEmptyCollectionComparison","displayName":"Use truthiness instead of empty-container equality","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

