---
title: "Merge consecutive branches with identical bodies"
sidebar_label: "Merge consecutive branches with identical bodies"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Merge consecutive branches with identical bodies"}
  description={"Combine consecutive `if`/`elif` branches that have the same body into a single branch with conditions joined by `or`."}
  fqName={"org.openrewrite.python.codequality.MergeIdenticalBranches"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","code-quality","RSPEC-S1871"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.codequality.MergeIdenticalBranches"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.codequality.MergeIdenticalBranches"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/codequality/mergeidenticalbranches.md"}
  moderneOnly
>

<RecipeHeader.Title>Merge consecutive branches with identical bodies</RecipeHeader.Title>

<RecipeHeader.Description>Combine consecutive `if`/`elif` branches that have the same body into a single branch with conditions joined by `or`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.codequality.MergeIdenticalBranches","displayName":"Merge consecutive branches with identical bodies","pipPackage":"openrewrite-migrate-python"}}>

## Usage

</UsageList>

