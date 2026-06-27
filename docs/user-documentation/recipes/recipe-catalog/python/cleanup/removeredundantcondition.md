---
title: "Remove redundant ternary condition"
sidebar_label: "Remove redundant ternary condition"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove redundant ternary condition"}
  description={"When both branches of a ternary expression are identical, simplify `y if z else y` to `y`."}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantCondition"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantCondition"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveRedundantCondition"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeredundantcondition.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove redundant ternary condition</RecipeHeader.Title>

<RecipeHeader.Description>When both branches of a ternary expression are identical, simplify `y if z else y` to `y`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveRedundantCondition","displayName":"Remove redundant ternary condition","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

