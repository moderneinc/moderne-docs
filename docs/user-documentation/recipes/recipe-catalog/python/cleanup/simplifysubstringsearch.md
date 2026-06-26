---
title: "Replace `.find()` check with `in` / `not in`"
sidebar_label: "Replace `.find()` check with `in` / `not in`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `.find()` check with `in` / `not in`"}
  description={"Rewrite ``.find()`` return-value checks as membership tests: ``text.find(sub) == -1`` becomes ``sub not in text`` and ``text.find(sub) != -1`` becomes ``sub in text``."}
  fqName={"org.openrewrite.python.cleanup.SimplifySubstringSearch"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Replace `.find()` check with `in` / `not in`"}
  description={"Rewrite ``.find()`` return-value checks as membership tests: ``text.find(sub) == -1`` becomes ``sub not in text`` and ``text.find(sub) != -1`` becomes ``sub in text``."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.SimplifySubstringSearch"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.SimplifySubstringSearch"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/simplifysubstringsearch.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.SimplifySubstringSearch","displayName":"Replace `.find()` check with `in` / `not in`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

