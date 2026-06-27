---
title: "Collapse boolean ternary to bare condition"
sidebar_label: "Collapse boolean ternary to bare condition"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Collapse boolean ternary to bare condition"}
  description={"Replace ``True if expr else False`` with ``expr`` and ``False if expr else True`` with ``not expr``, removing the redundant ternary wrapper."}
  fqName={"org.openrewrite.python.cleanup.BooleanIfExpIdentity"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.BooleanIfExpIdentity"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.BooleanIfExpIdentity"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/booleanifexpidentity.md"}
  moderneOnly
>

<RecipeHeader.Title>Collapse boolean ternary to bare condition</RecipeHeader.Title>

<RecipeHeader.Description>Replace ``True if expr else False`` with ``expr`` and ``False if expr else True`` with ``not expr``, removing the redundant ternary wrapper.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.BooleanIfExpIdentity","displayName":"Collapse boolean ternary to bare condition","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

