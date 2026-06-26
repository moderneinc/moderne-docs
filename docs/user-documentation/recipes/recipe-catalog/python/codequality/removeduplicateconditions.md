---
title: "Remove duplicate conditions in if/elif chains"
sidebar_label: "Remove duplicate conditions in if/elif chains"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove duplicate conditions in if/elif chains"}
  description={"Remove `elif` branches whose condition is identical to an earlier branch in the same `if`/`elif` chain, since the duplicate branch is dead code that can never execute."}
  fqName={"org.openrewrite.python.codequality.RemoveDuplicateConditions"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Remove duplicate conditions in if/elif chains"}
  description={"Remove `elif` branches whose condition is identical to an earlier branch in the same `if`/`elif` chain, since the duplicate branch is dead code that can never execute."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","code-quality","RSPEC-S1862"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.codequality.RemoveDuplicateConditions"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.codequality.RemoveDuplicateConditions"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/codequality/removeduplicateconditions.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.codequality.RemoveDuplicateConditions","displayName":"Remove duplicate conditions in if/elif chains","pipPackage":"openrewrite-migrate-python"}}>

## Usage

</UsageList>

