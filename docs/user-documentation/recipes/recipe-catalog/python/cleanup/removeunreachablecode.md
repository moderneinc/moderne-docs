---
title: "Strip dead code after terminal statements"
sidebar_label: "Strip dead code after terminal statements"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Strip dead code after terminal statements"}
  description={"Delete statements that follow a `return`, `raise`, `continue`, or `break` in the same block, since they can never execute."}
  fqName={"org.openrewrite.python.cleanup.RemoveUnreachableCode"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveUnreachableCode"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveUnreachableCode"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeunreachablecode.md"}
  moderneOnly
>

<RecipeHeader.Title>Strip dead code after terminal statements</RecipeHeader.Title>

<RecipeHeader.Description>Delete statements that follow a `return`, `raise`, `continue`, or `break` in the same block, since they can never execute.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveUnreachableCode","displayName":"Strip dead code after terminal statements","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

