---
title: "Unwrap unnecessary `dict()` from union operands"
sidebar_label: "Unwrap unnecessary `dict()` from union operands"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Unwrap unnecessary `dict()` from union operands"}
  description={"The `|` operator already produces a fresh dict, so wrapping an operand in `dict()` is redundant and can be removed."}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantConstructorInDictUnion"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Unwrap unnecessary `dict()` from union operands"}
  description={"The `|` operator already produces a fresh dict, so wrapping an operand in `dict()` is redundant and can be removed."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantConstructorInDictUnion"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveRedundantConstructorInDictUnion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeredundantconstructorindictunion.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveRedundantConstructorInDictUnion","displayName":"Unwrap unnecessary `dict()` from union operands","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

