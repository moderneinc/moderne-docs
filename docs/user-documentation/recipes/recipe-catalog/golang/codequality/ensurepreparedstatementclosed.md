---
title: "Ensure prepared statement closed"
sidebar_label: "Ensure prepared statement closed"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Ensure prepared statement closed"}
  description={"Find calls to `db.Prepare`. The returned prepared statement must be closed to avoid resource leaks."}
  fqName={"org.openrewrite.golang.codequality.EnsurePreparedStatementClosed"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.EnsurePreparedStatementClosed"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.EnsurePreparedStatementClosed"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/ensurepreparedstatementclosed.md"}
  moderneOnly
>

<RecipeHeader.Title>Ensure prepared statement closed</RecipeHeader.Title>

<RecipeHeader.Description>Find calls to `db.Prepare`. The returned prepared statement must be closed to avoid resource leaks.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.EnsurePreparedStatementClosed","displayName":"Ensure prepared statement closed","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

