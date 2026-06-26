---
title: "Compare string to `&quot;&quot;` instead of checking `len()`"
sidebar_label: "Compare string to `&quot;&quot;` instead of checking `len()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Compare string to `\"\"` instead of checking `len()`"}
  description={"Replace ``len(text) == 0`` with ``text == \"\"`` and ``len(text) > 0`` / ``len(text) != 0`` with ``text != \"\"``, comparing the string directly rather than measuring its length."}
  fqName={"org.openrewrite.python.cleanup.SimplifyStrLenComparison"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Compare string to `\"\"` instead of checking `len()`"}
  description={"Replace ``len(text) == 0`` with ``text == \"\"`` and ``len(text) > 0`` / ``len(text) != 0`` with ``text != \"\"``, comparing the string directly rather than measuring its length."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.SimplifyStrLenComparison"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.SimplifyStrLenComparison"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/simplifystrlencomparison.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.SimplifyStrLenComparison","displayName":"Compare string to `\"\"` instead of checking `len()`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

