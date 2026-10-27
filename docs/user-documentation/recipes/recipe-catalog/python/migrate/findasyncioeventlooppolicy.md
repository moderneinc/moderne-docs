---
title: "Find deprecated asyncio event loop policies"
sidebar_label: "Find deprecated asyncio event loop policies"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find deprecated asyncio event loop policies"}
  description={"The asyncio policy system (`get_event_loop_policy()`, `set_event_loop_policy()` and the `*EventLoopPolicy` classes) was deprecated in Python 3.14 and is scheduled for removal in Python 3.16. Pass `loop_factory` to `asyncio.run()` or `asyncio.Runner` instead."}
  fqName={"org.openrewrite.python.migrate.FindAsyncioEventLoopPolicy"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","asyncio","3.16","migration","3.14"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindAsyncioEventLoopPolicy"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindAsyncioEventLoopPolicy"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findasyncioeventlooppolicy.md"}
  moderneOnly
>

<RecipeHeader.Title>Find deprecated asyncio event loop policies</RecipeHeader.Title>

<RecipeHeader.Description>The asyncio policy system (`get_event_loop_policy()`, `set_event_loop_policy()` and the `*EventLoopPolicy` classes) was deprecated in Python 3.14 and is scheduled for removal in Python 3.16. Pass `loop_factory` to `asyncio.run()` or `asyncio.Runner` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindAsyncioEventLoopPolicy","displayName":"Find deprecated asyncio event loop policies","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

