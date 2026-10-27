---
title: "Replace `asyncio.get_event_loop()` with `asyncio.get_running_loop()` in coroutines"
sidebar_label: "Replace `asyncio.get_event_loop()` with `asyncio.get_running_loop()` in coroutines"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `asyncio.get_event_loop()` with `asyncio.get_running_loop()` in coroutines"}
  description={"`asyncio.get_event_loop()` raises a `RuntimeError` in Python 3.14 where no event loop is set, rather than creating one. In the body of an `async def`, where a loop is always running, the call is replaced with `asyncio.get_running_loop()`. Elsewhere it is marked for review, as is a call through a name imported with `from asyncio import get_event_loop`."}
  fqName={"org.openrewrite.python.migrate.ReplaceAsyncioGetEventLoop"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","asyncio","migration","3.14"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceAsyncioGetEventLoop"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceAsyncioGetEventLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replaceasynciogeteventloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `asyncio.get_event_loop()` with `asyncio.get_running_loop()` in coroutines</RecipeHeader.Title>

<RecipeHeader.Description>`asyncio.get_event_loop()` raises a `RuntimeError` in Python 3.14 where no event loop is set, rather than creating one. In the body of an `async def`, where a loop is always running, the call is replaced with `asyncio.get_running_loop()`. Elsewhere it is marked for review, as is a call through a name imported with `from asyncio import get_event_loop`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceAsyncioGetEventLoop","displayName":"Replace `asyncio.get_event_loop()` with `asyncio.get_running_loop()` in coroutines","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

