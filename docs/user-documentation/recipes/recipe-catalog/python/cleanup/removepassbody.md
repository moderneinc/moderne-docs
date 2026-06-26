---
title: "Drop ``pass``-only ``if`` body by inverting the guard"
sidebar_label: "Drop ``pass``-only ``if`` body by inverting the guard"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Drop ``pass``-only ``if`` body by inverting the guard"}
  description={"When an ``if`` body contains only ``pass`` and is followed by an ``else``, flip the condition and use the else body directly."}
  fqName={"org.openrewrite.python.cleanup.RemovePassBody"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Drop ``pass``-only ``if`` body by inverting the guard"}
  description={"When an ``if`` body contains only ``pass`` and is followed by an ``else``, flip the condition and use the else body directly."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemovePassBody"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemovePassBody"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removepassbody.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemovePassBody","displayName":"Drop ``pass``-only ``if`` body by inverting the guard","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

