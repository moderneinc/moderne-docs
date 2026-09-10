---
title: "Ensure transaction finalized"
sidebar_label: "Ensure transaction finalized"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Ensure transaction finalized"}
  description={"Find calls to `db.Begin`. Transactions must be committed or rolled back to avoid holding database locks."}
  fqName={"org.openrewrite.golang.codequality.EnsureTransactionFinalized"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.EnsureTransactionFinalized"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.EnsureTransactionFinalized"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/ensuretransactionfinalized.md"}
  moderneOnly
>

<RecipeHeader.Title>Ensure transaction finalized</RecipeHeader.Title>

<RecipeHeader.Description>Find calls to `db.Begin`. Transactions must be committed or rolled back to avoid holding database locks.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.EnsureTransactionFinalized","displayName":"Ensure transaction finalized","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

