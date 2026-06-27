---
title: "Simplify redundant logical expressions"
sidebar_label: "Simplify redundant logical expressions"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify redundant logical expressions"}
  description={"Replace `x and x` with `x` and `x or x` with `x`. Identical operands in a logical expression are redundant and often indicate a copy-paste mistake."}
  fqName={"org.openrewrite.python.codequality.SimplifyRedundantLogicalExpression"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","code-quality","RSPEC-S1764"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.codequality.SimplifyRedundantLogicalExpression"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.codequality.SimplifyRedundantLogicalExpression"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/codequality/simplifyredundantlogicalexpression.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify redundant logical expressions</RecipeHeader.Title>

<RecipeHeader.Description>Replace `x and x` with `x` and `x or x` with `x`. Identical operands in a logical expression are redundant and often indicate a copy-paste mistake.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.codequality.SimplifyRedundantLogicalExpression","displayName":"Simplify redundant logical expressions","pipPackage":"openrewrite-migrate-python"}}>

## Usage

</UsageList>

