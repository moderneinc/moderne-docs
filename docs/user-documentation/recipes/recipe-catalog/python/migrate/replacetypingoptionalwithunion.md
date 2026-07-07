---
title: "Replace `typing.Optional[X]` with `X | None`"
sidebar_label: "Replace `typing.Optional[X]` with `X | None`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `typing.Optional[X]` with `X | None`"}
  description={"PEP 604 introduced the `|` operator for union types in Python 3.10. Replace `Optional[X]` with the more concise `X | None` syntax."}
  fqName={"org.openrewrite.python.migrate.ReplaceTypingOptionalWithUnion"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","typing","3.10","pep604"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceTypingOptionalWithUnion"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceTypingOptionalWithUnion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacetypingoptionalwithunion.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `typing.Optional[X]` with `X | None`</RecipeHeader.Title>

<RecipeHeader.Description>PEP 604 introduced the `|` operator for union types in Python 3.10. Replace `Optional[X]` with the more concise `X | None` syntax.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceTypingOptionalWithUnion","displayName":"Replace `typing.Optional[X]` with `X | None`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

