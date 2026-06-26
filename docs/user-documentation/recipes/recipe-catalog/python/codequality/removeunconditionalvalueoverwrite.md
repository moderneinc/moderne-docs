---
title: "Remove unconditional value overwrites"
sidebar_label: "Remove unconditional value overwrites"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unconditional value overwrites"}
  description={"Remove consecutive assignments that write to the same dict key or object attribute, since the first value is immediately overwritten and never used."}
  fqName={"org.openrewrite.python.codequality.RemoveUnconditionalValueOverwrite"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Remove unconditional value overwrites"}
  description={"Remove consecutive assignments that write to the same dict key or object attribute, since the first value is immediately overwritten and never used."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","RSPEC-S4143","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.codequality.RemoveUnconditionalValueOverwrite"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.codequality.RemoveUnconditionalValueOverwrite"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/codequality/removeunconditionalvalueoverwrite.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.codequality.RemoveUnconditionalValueOverwrite","displayName":"Remove unconditional value overwrites","pipPackage":"openrewrite-migrate-python"}}>

## Usage

</UsageList>

