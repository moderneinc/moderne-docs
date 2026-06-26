---
title: "Flip empty ``if``-body by negating the condition"
sidebar_label: "Flip empty ``if``-body by negating the condition"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Flip empty ``if``-body by negating the condition"}
  description={"When the ``if`` branch is just ``pass`` and an ``else`` exists, invert the test and promote the else body to the if body."}
  fqName={"org.openrewrite.python.cleanup.SwapIfElseBranches"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Flip empty ``if``-body by negating the condition"}
  description={"When the ``if`` branch is just ``pass`` and an ``else`` exists, invert the test and promote the else body to the if body."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.SwapIfElseBranches"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.SwapIfElseBranches"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/swapifelsebranches.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.SwapIfElseBranches","displayName":"Flip empty ``if``-body by negating the condition","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

