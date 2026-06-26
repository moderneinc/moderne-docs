---
title: "Convert ``else: if`` to ``elif``"
sidebar_label: "Convert ``else: if`` to ``elif``"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert ``else: if`` to ``elif``"}
  description={"When an ``else`` clause contains nothing but an ``if``, rewrite it as ``elif`` to eliminate extra nesting."}
  fqName={"org.openrewrite.python.cleanup.MergeElseIfIntoElif"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Convert ``else: if`` to ``elif``"}
  description={"When an ``else`` clause contains nothing but an ``if``, rewrite it as ``elif`` to eliminate extra nesting."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.MergeElseIfIntoElif"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.MergeElseIfIntoElif"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/mergeelseifintoelif.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.MergeElseIfIntoElif","displayName":"Convert ``else: if`` to ``elif``","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

