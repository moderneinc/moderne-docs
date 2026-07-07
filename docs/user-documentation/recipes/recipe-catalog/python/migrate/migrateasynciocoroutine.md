---
title: "Migrate `@asyncio.coroutine` to `async def`"
sidebar_label: "Migrate `@asyncio.coroutine` to `async def`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `@asyncio.coroutine` to `async def`"}
  description={"Migrate functions using the deprecated `@asyncio.coroutine` decorator to use `async def` syntax. Also transforms `yield from` to `await`. The decorator was removed in Python 3.11."}
  fqName={"org.openrewrite.python.migrate.MigrateAsyncioCoroutine"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.MigrateAsyncioCoroutine"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.MigrateAsyncioCoroutine"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/migrateasynciocoroutine.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `@asyncio.coroutine` to `async def`</RecipeHeader.Title>

<RecipeHeader.Description>Migrate functions using the deprecated `@asyncio.coroutine` decorator to use `async def` syntax. Also transforms `yield from` to `await`. The decorator was removed in Python 3.11.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.MigrateAsyncioCoroutine","displayName":"Migrate `@asyncio.coroutine` to `async def`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

