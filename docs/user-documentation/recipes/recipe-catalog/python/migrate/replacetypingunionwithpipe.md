---
title: "Replace `typing.Union[X, Y]` with `X | Y`"
sidebar_label: "Replace `typing.Union[X, Y]` with `X | Y`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `typing.Union[X, Y]` with `X | Y`"}
  description={"PEP 604 introduced the `|` operator for union types in Python 3.10. Replace `Union[X, Y, ...]` with the more concise `X | Y | ...` syntax."}
  fqName={"org.openrewrite.python.migrate.ReplaceTypingUnionWithPipe"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","typing","3.10","pep604"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceTypingUnionWithPipe"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceTypingUnionWithPipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacetypingunionwithpipe.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `typing.Union[X, Y]` with `X | Y`</RecipeHeader.Title>

<RecipeHeader.Description>PEP 604 introduced the `|` operator for union types in Python 3.10. Replace `Union[X, Y, ...]` with the more concise `X | Y | ...` syntax.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceTypingUnionWithPipe","displayName":"Replace `typing.Union[X, Y]` with `X | Y`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

