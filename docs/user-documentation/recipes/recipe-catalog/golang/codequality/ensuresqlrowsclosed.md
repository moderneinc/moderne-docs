---
title: "Ensure SQL rows closed"
sidebar_label: "Ensure SQL rows closed"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Ensure SQL rows closed"}
  description={"Find assignments of a `*sql.Rows`, as returned by `db.Query`. The rows must be closed with `defer rows.Close()` to avoid connection leaks."}
  fqName={"org.openrewrite.golang.codequality.EnsureSqlRowsClosed"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.EnsureSqlRowsClosed"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.EnsureSqlRowsClosed"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/ensuresqlrowsclosed.md"}
  moderneOnly
>

<RecipeHeader.Title>Ensure SQL rows closed</RecipeHeader.Title>

<RecipeHeader.Description>Find assignments of a `*sql.Rows`, as returned by `db.Query`. The rows must be closed with `defer rows.Close()` to avoid connection leaks.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.EnsureSqlRowsClosed","displayName":"Ensure SQL rows closed","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

