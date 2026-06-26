---
title: "Replace string slicing with `removeprefix`/`removesuffix`"
sidebar_label: "Replace string slicing with `removeprefix`/`removesuffix`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace string slicing with `removeprefix`/`removesuffix`"}
  description={"Replace `if text.startswith(s): text = text[N:]` with `text = text.removeprefix(s)` and the equivalent `endswith` pattern with `removesuffix` (Python 3.9+)."}
  fqName={"org.openrewrite.python.cleanup.UseStringRemoveAffix"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Replace string slicing with `removeprefix`/`removesuffix`"}
  description={"Replace `if text.startswith(s): text = text[N:]` with `text = text.removeprefix(s)` and the equivalent `endswith` pattern with `removesuffix` (Python 3.9+)."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.UseStringRemoveAffix"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.UseStringRemoveAffix"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/usestringremoveaffix.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.UseStringRemoveAffix","displayName":"Replace string slicing with `removeprefix`/`removesuffix`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

