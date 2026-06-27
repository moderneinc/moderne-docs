---
title: "Collapse self-cancelling `^` / `-` with duplicate operands to `0`"
sidebar_label: "Collapse self-cancelling `^` / `-` with duplicate operands to `0`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Collapse self-cancelling `^` / `-` with duplicate operands to `0`"}
  description={"When both operands of `^` or `-` are the same expression, reduce to `0` (the self-cancelling identity)."}
  fqName={"org.openrewrite.python.cleanup.BinOpIdentity"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.BinOpIdentity"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.BinOpIdentity"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/binopidentity.md"}
  moderneOnly
>

<RecipeHeader.Title>Collapse self-cancelling `^` / `-` with duplicate operands to `0`</RecipeHeader.Title>

<RecipeHeader.Description>When both operands of `^` or `-` are the same expression, reduce to `0` (the self-cancelling identity).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.BinOpIdentity","displayName":"Collapse self-cancelling `^` / `-` with duplicate operands to `0`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

