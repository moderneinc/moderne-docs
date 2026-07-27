---
title: "Remove `...` (Ellipsis) from `Field()`"
sidebar_label: "Remove `...` (Ellipsis) from `Field()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove `...` (Ellipsis) from `Field()`"}
  description={"Pydantic 2.10 recommends against using `Ellipsis` (`...`) with `Field` to mark a field as required, as it does not play well with static type checkers. Rewrite `Field(...)` to `Field()` (and `Field(..., x=y)` to `Field(x=y)`), keeping the remaining arguments. Only calls resolving to `pydantic.fields.Field` are rewritten."}
  fqName={"org.openrewrite.python.migrate.pydantic.RemoveEllipsisFromField"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","pydantic","migration","2.10"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.pydantic.RemoveEllipsisFromField"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.pydantic.RemoveEllipsisFromField"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/removeellipsisfromfield.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove `...` (Ellipsis) from `Field()`</RecipeHeader.Title>

<RecipeHeader.Description>Pydantic 2.10 recommends against using `Ellipsis` (`...`) with `Field` to mark a field as required, as it does not play well with static type checkers. Rewrite `Field(...)` to `Field()` (and `Field(..., x=y)` to `Field(x=y)`), keeping the remaining arguments. Only calls resolving to `pydantic.fields.Field` are rewritten.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.pydantic.RemoveEllipsisFromField","displayName":"Remove `...` (Ellipsis) from `Field()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

